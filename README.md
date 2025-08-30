# 🌤️ Weather APP

![Node.js](https://img.shields.io/badge/Node.js-18+-green?logo=node.js) 
![TypeScript](https://img.shields.io/badge/TypeScript-5.0-blue?logo=typescript) 
![License](https://img.shields.io/badge/license-MIT-lightgrey)

Um **CLI simples e rápido** em Node.js + TypeScript que consome a [Open-Meteo API](https://open-meteo.com/) para exibir a **temperatura atual** de qualquer cidade do mundo 🌍.  

---

## ✨ Funcionalidades

✅ Buscar a temperatura atual de uma cidade  
✅ Exibir resultado em Celsius 🌡️  
✅ Fácil de rodar no terminal  
✅ Código limpo e tipado com TypeScript  

---
## 🛠️ Tecnologias utilizadas

- Node.js

- TypeScript

- Open-Meteo API

## 📦 Instalação

Clone o repositório e instale as dependências:

```bash
git clone https://github.com/seu-usuario/weather-cli.git
cd weather-cli
npm install
```
---
## 🚀 Como usar

```bash
npm run build
node dist/index.js "São Paulo"
```
## 📌 Exemplo de uso

```bash
node dist/index.js "São Paulo"
```
## ✅ Saída esperada:
```bash
A temperatura atual em São Paulo é 22°C
```

---
## 🔮 Futuras melhorias

- Mostrar previsão dos próximos dias

- Suporte a Fahrenheit 🌡️➡️℉

- Opção de rodar com npx sem instalar localmente

- Cache local para evitar múltiplas requisições
