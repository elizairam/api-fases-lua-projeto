function ConverterMesParaNome(mes) {
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

function ConverterMesParaNumero(mes) {
  switch (mes) {
    case "janeiro":
      return 1;
    case "fevereiro":
      return 2;
    case "março":
      return 3;
    case "abril":
      return 4;
    case "maio":
      return 5;
    case "junho":
      return 6;
    case "julho":
      return 7;
    case "agosto":
      return 8;
    case "setembro":
      return 9;
    case "outubro":
      return 10;
    case "novembro":
      return 11;
    case "dezembro":
      return 12;
  }
}

function DataFormatacaoDia(data) {
  data = new Date().toLocaleString("pt-br");
  return Number(data[(0, 0)] + data[(0, 1)]);
}

function DataFormatacaoMes(data) {
  data = new Date().toLocaleString("pt-br");
  return Number(data[(3, 3)] + data[(3, 4)]);
}

function DataFormatacaoAno(data) {
  data = new Date().toLocaleString("pt-br");
  return Number(data[(6, 6)] + data[(6, 7)] + data[(7, 8)] + data[(8, 9)]);
}

module.exports = {
  ConverterMesParaNome,
  ConverterMesParaNumero,
  DataFormatacaoDia,
  DataFormatacaoMes,
  DataFormatacaoAno,
};
