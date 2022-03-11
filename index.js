const express = require("express");
const app = express();
const importData = require("./data.json");
let port = process.env.PORT || 3000;

function ConverterMes(mes) {
  switch (mes) {
    case 01:
      return "janeiro";
    case 02:
      return "fevereiro";
    case 03:
      return "março";
    case 04:
      return "abril";
    case 05:
      return "maio";
    case 06:
      return "junho";
    case 07:
      return "julho";
    case 08:
      return "agosto";
    case 09:
      return "setembro";
    case 10:
      return "outubro";
    case 11:
      return "novembro";
    case 12:
      return "dezembro";
  }
}

app.get("/", (req, res) => {
  res.send("🌕 API fases lunares (1905-2099) 📆");
});

app.get("/luas", (req, res) => {
  const data = importData;
  res.send(data);
});

// mostrar lunação do dia atual
app.get("/luas/atual", (req, res) => {
  const date = new Date();
  const formatoData = date.toLocaleString("pt-br");

  const dia = Number(formatoData[(0, 0)] + formatoData[(0, 1)]);
  const mes = Number(formatoData[(3, 3)] + formatoData[(3, 4)]);
  const ano = Number(
    formatoData[(6, 6)] +
    formatoData[(6, 7)] +
    formatoData[(7, 8)] +
    formatoData[(7, 8)]
  );

  const mesConvertido = ConverterMes(mes);

  const filtroData = importData.luas
    .filter((el) => el.ano == ano)
    .filter((el) => el.mes == mesConvertido)
    .filter((el) => (dia > 5 ? el.dia <= dia : el.dia >= dia));

  const diasProximos = filtroData.map((el) => el.dia);
  const diaProximo = Math.max(...diasProximos);

  const data = importData.luas
    .filter((el) => el.ano == ano)
    .filter((el) => el.mes == mesConvertido)
    .filter((el) => el.dia == diaProximo);
  res.send(data);
});

// filtrar por ano
app.get("/luas/ano/:ano", (req, res) => {
  const { ano } = req.params;
  const data = importData.luas.filter((el) => el.ano == ano);
  res.send(data);
});

// filtrar por ano/mes/dia
app.get("/luas/ano/:ano/mes/:mes/dia/:dia", (req, res) => {
  const { ano, mes, dia } = req.params;
  const data = importData.luas
    .filter((el) => el.ano == ano)
    .filter((el) => el.mes == mes)
    .filter((el) => el.dia == dia);
  res.send(data);
});

app.listen(port, () => {
  console.log(`Servidor na porta http://localhost:${port} o/`);
});
