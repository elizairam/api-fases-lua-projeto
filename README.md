# API fases da lua 🌕📆 (1905-2099)
## Descrição
### Projeto de API que retorna os dados da fase lunar entre abril de 1905 e dezembro de 2099.
### Os dados vieram da tabela efeméride no site [Astrodienst](https://www.astro.com/swisseph/swepha_e.htm) 💫 e foram simplificados, traduzidos e convertidos para JSON.
### Constam dados de: 

| propriedade   | tipo          |
| ------------- | ------------- |
| ano           | number        |
| mes           | string        |
| dia           | number        |
| hora          | string        |
| simbolo_lunar | string        |
| fase_lunar    | string        |


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
#### Retorna os dados da fase lunar referente ao momento da requisição, ex. de resposta:
```
[
    {
        "ano": 2022,
        "mes": "março",
        "dia": 10,
        "hora": "10:45",
        "simbolo_lunar": "🌓",
        "fase_lunar": "lua crescente"
    }
]
```

```/luas/atual/mes```
#### Retorna todas as fases da lua do mês e ano atual à requisição, ex. de resposta se a requisição for feita em março de 2022:
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
```
/luas/ano/{ano}
```
#### Retorna as fases lunares do ano inteiro solicitado, ex. de resposta para o ano de 1980

```
[
    {
        "ano": 1980,
        "mes": "janeiro",
        "dia": 2,
        "hora": "09:02",
        "simbolo_lunar": "🌕",
        "fase_lunar": "lua cheia"
    },
    {
        "ano": 1980,
        "mes": "janeiro",
        "dia": 10,
        "hora": "11:50",
        "simbolo_lunar": "🌗",
        "fase_lunar": "lua minguante"
    },
    {
        "ano": 1980,
        "mes": "janeiro",
        "dia": 17,
        "hora": "21:19",
        "simbolo_lunar": "🌑",
        "fase_lunar": "lua nova"
    },
    {...},
    {
        "ano": 1980,
        "mes": "dezembro",
        "dia": 21,
        "hora": "18:08",
        "simbolo_lunar": "🌕",
        "fase_lunar": "lua cheia"
    },
    {
        "ano": 1980,
        "mes": "dezembro",
        "dia": 29,
        "hora": "06:32",
        "simbolo_lunar": "🌗",
        "fase_lunar": "lua minguante"
    }
```






