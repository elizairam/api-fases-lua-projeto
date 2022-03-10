const express = require("express");
const app = express();
const importData = require("./data.json");
let port = process.env.PORT || 3000;

app.get("/", (req, res) => {
  res.send("🌕 API fases lunares (1905-2099) 📆");
});

app.get("/luas", (req, res) => {
  const data = importData;
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
    .filter((el) => el.dia == dia)
  res.send(data);
});

app.listen(port, () => {
  console.log(`Servidor na porta http://localhost:${port} o/`);
});
