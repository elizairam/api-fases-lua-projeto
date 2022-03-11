const express = require("express");
const app = express();
const importData = require("./data.json");
const service = require("./service.js");
const cors = require("cors");
let port = process.env.PORT || 3000;

app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Methods", "GET");
  app.use(cors());
  next();
})

app.get("/", (req, res) => {
  res.send("🌕 API fases lunares (1905-2099) 📆");
});

app.get("/luas", (req, res) => {
  const data = importData;
  res.send(data);
});

// mostrar lunação do dia atual
app.get("/luas/atual", (req, res) => {
  const dataAtual = new Date();
  const dia = service.DataFormatacaoDia(dataAtual);
  const mes = service.DataFormatacaoMes(dataAtual);
  const ano = service.DataFormatacaoAno(dataAtual);
  const mesConvertido = service.ConverterMesParaNome(mes);

  const filtroData = importData.luas
    .filter((el) => el.ano == ano)
    .filter((el) => el.mes == mesConvertido)
    .filter((el) => el.dia <= dia);

  const diasProximos = filtroData.map((el) => el.dia);
  const diaProximo = Math.max(...diasProximos);

  const data = importData.luas
    .filter((el) => el.ano == ano)
    .filter((el) => el.mes == mesConvertido)
    .filter((el) => el.dia == diaProximo);

  if (filtroData == false) {
    // quando a fase lunar for continuação do mês anterior e não tiver dados para o mês vigente

    const mesAnterior = service.ConverterMesParaNome(
      service.ConverterMesParaNumero(mes) - 1
    );
    const filtroMesAnterior = importData.luas
      .filter((el) => el.ano == ano)
      .filter((el) => el.mes == mesAnterior)
      .filter((el) => el.dia > dia);

    const diasProximos = filtroMesAnterior.map((el) => el.dia);
    const diaProximo = Math.max(...diasProximos);

    const data = importData.luas
      .filter((el) => el.ano == ano)
      .filter((el) => el.mes == mesAnterior)
      .filter((el) => el.dia == diaProximo);

    res.send(data);
  }
  res.send(data);
});

// filtrar por ano
app.get("/luas/ano/:ano", (req, res) => {
  const { ano } = req.params;
  const data = importData.luas.filter((el) => el.ano == ano);
  res.send(data);
});

// filtrar por ano e mês
app.get("/luas/ano/:ano/mes/:mes", (req, res) => {
  const { ano, mes } = req.params;
  const data = importData.luas
    .filter((el) => el.ano == ano)
    .filter((el) => el.mes == mes);
  res.send(data);
});

// filtrar por ano, mês e dia
app.get("/luas/ano/:ano/mes/:mes/dia/:dia", (req, res) => {
  const { ano, mes, dia } = req.params;

  const filtroData = importData.luas
    .filter((el) => el.ano == ano)
    .filter((el) => el.mes == mes)
    .filter((el) => el.dia <= dia);

  const diasProximos = filtroData.map((el) => el.dia);
  const diaProximo = Math.max(...diasProximos);

  const data = importData.luas
    .filter((el) => el.ano == ano)
    .filter((el) => el.mes == mes)
    .filter((el) => el.dia == diaProximo);

  if (filtroData == false) {
    // quando a fase lunar for continuação do mês anterior

    const mesAnterior = service.ConverterMesParaNome(
      service.ConverterMesParaNumero(mes) - 1
    );
    const filtroMesAnterior = importData.luas
      .filter((el) => el.ano == ano)
      .filter((el) => el.mes == mesAnterior)
      .filter((el) => el.dia > dia);

    const diasProximos = filtroMesAnterior.map((el) => el.dia);
    const diaProximo = Math.max(...diasProximos);

    const data = importData.luas
      .filter((el) => el.ano == ano)
      .filter((el) => el.mes == mesAnterior)
      .filter((el) => el.dia == diaProximo);

    res.send(data);
  }

  res.send(data);
});

// filtrar por ano e fase lunar
app.get("/luas/ano/:ano/fase-lunar/:fase", (req, res) => {
  const { ano, fase } = req.params;
  const data = importData.luas
    .filter((el) => el.ano == ano)
    .filter((el) => el.fase_lunar == "lua " + fase);
  res.send(data);
});

// filtrar por ano, mês e fase lunar
app.get("/luas/ano/:ano/mes/:mes/fase-lunar/:fase", (req, res) => {
  const { ano, mes, fase } = req.params;
  const data = importData.luas
    .filter((el) => el.ano == ano)
    .filter((el) => el.mes == mes)
    .filter((el) => el.fase_lunar == "lua " + fase);
  res.send(data);
});

app.listen(port, () => {
  console.log(`Servidor na porta http://localhost:${port} o/`);
});
