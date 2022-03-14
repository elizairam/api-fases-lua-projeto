# API fases da lua 🌕📆 (1905-2099)
## Descrição
### Projeto de API que retorna os dados da fase lunar entre abril de 1905 e dezembro de 2099.
### Os dados vieram da tabela efeméride no site [Astrodienst](https://www.astro.com/swisseph/swepha_e.htm) 💫 e foram simplificados, traduzidos e convertidos para JSON.
### Constam dados de: 

| propriedade   | tipo          | exemplo         |
| ------------- | ------------- |-----------------
| ano           | number        | 2000            |
| mes           | string        | janeiro         |
| dia           | number        | 20              |
| hora          | string        | 10:00           |
| simbolo_lunar | string        | 🌑
| fase_lunar    | string        | lua nova        |



## Endpoints
### Requisição GET:
```/luas```
### Retorna o objeto luas, ex. de resposta:
```
{
    "luas": [
        {
            "ano": 1905,
            "mes": "abril",
            "dia": 4,
            "hora": "23:23",
            "simbolo_lunar": "🌑",
            "fase_lunar": "lua nova"
        },
        {
            "ano": 1905,
            "mes": "abril",
            "dia": 12,
            "hora": "21:41",
            "simbolo_lunar": "🌓",
            "fase_lunar": "lua crescente"
        },
        { ... }
     ]
}
```

```/luas/atual```
#### Retorna os dados da fase lunar referente ao momento da requisição

```/luas/atual/mes```
#### Retorna dados de todas as fases da lua do mês e ano atual à requisição, não é necessário especificar nenhum parâmetro 
#### ex. de resposta se a requisição for feita em março de 2022:
```
[
    {
        "ano": 2022,
        "mes": "março",
        "dia": 2,
        "hora": "17:35",
        "simbolo_lunar": "🌑",
        "fase_lunar": "lua nova"
    },
    {
        "ano": 2022,
        "mes": "março",
        "dia": 10,
        "hora": "10:45",
        "simbolo_lunar": "🌓",
        "fase_lunar": "lua crescente"
    },
    {
        "ano": 2022,
        "mes": "março",
        "dia": 18,
        "hora": "07:18",
        "simbolo_lunar": "🌕",
        "fase_lunar": "lua cheia"
    },
    {
        "ano": 2022,
        "mes": "março",
        "dia": 25,
        "hora": "05:37",
        "simbolo_lunar": "🌗",
        "fase_lunar": "lua minguante"
    }
]
```
#### Retorna dados de fases lunares do ano inteiro solicitado pelo parâmetro
#### Aceita parâmetros de ano em números entre 1905 e 2099.
```
/luas/ano/{ano}
```

#### Retorna os dados de fases lunares do ano e mês especificado
#### Aceita parâmetros de mês em letras minúsculas: ex. { "janeiro"; "fevereiro"; "março";... "dezembro" } 
#### ex. de resposta para o ano de 1990 e mês de novembro:
```
/luas/ano/{ano}/mes/{mes}
```

```
[
    {
        "ano": 1990,
        "mes": "novembro",
        "dia": 2,
        "hora": "21:48",
        "simbolo_lunar": "🌕",
        "fase_lunar": "lua cheia"
    },
    {
        "ano": 1990,
        "mes": "novembro",
        "dia": 9,
        "hora": "13:02",
        "simbolo_lunar": "🌗",
        "fase_lunar": "lua minguante"
    },
    {
        "ano": 1990,
        "mes": "novembro",
        "dia": 17,
        "hora": "09:05",
        "simbolo_lunar": "🌑",
        "fase_lunar": "lua nova"
    },
    {
        "ano": 1990,
        "mes": "novembro",
        "dia": 25,
        "hora": "13:12",
        "simbolo_lunar": "🌓",
        "fase_lunar": "lua crescente"
    }
]
```
#### Retorna os dados de fases lunares do ano, mês especificado e o dia (ou o dia aproximado) que iniciou a fase lunar vigente. 
#### Aceita parâmetros de dia em números: ex. { 10 }  
#### ex. de resposta para o ano de 1990, mês de novembro e dia 10:
```
/luas/ano/{ano}/mes/{mes}/dia/{dia}
```
```
[
    {
        "ano": 1990,
        "mes": "novembro",
        "dia": 9,
        "hora": "13:02",
        "simbolo_lunar": "🌗",
        "fase_lunar": "lua minguante"
    }
]
```
#### Retorna a fase lunar especificada para um ano especificado
#### Para fase lunar aceita parâmetros= { "lua nova"; "lua crescente"; "lua cheia"; "lua minguante"}  
```
/luas/ano/{ano}/fase-lunar/{fase lunar}
```
#### Retorna a fase lunar especificada para um ano e mês especificado
```
/luas/ano/:ano/mes/:mes/fase-lunar/:fase
```
## Referência 📖
### Swiss Ephemeris for Users [Astrodienst](https://www.astro.com/swisseph/swepha_e.htm)

