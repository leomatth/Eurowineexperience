# Eurowine Experience - Vercel Deployment Guide

## ⚙️ Configuração das Variáveis de Ambiente no Vercel

Acesse o painel do Vercel do seu projeto e adicione as variáveis:

### 1. MONGO_URL 
- Sua connection string do MongoDB Atlas
- Formato: `mongodb+srv://username:password@cluster.mongodb.net/?retryWrites=true&w=majority`

### 2. DB_NAME
- Nome do seu banco de dados (ex: `eurowine`)

### 3. CORS_ORIGINS
- Origens CORS permitidas (ex: `https://seu-dominio.vercel.app`)

## 📝 Mudanças Realizadas

✅ Criada pasta `/api` com handler FastAPI para funcionar como serverless
✅ Atualizado `vercel.json` com rewrites corretos
✅ Configurado buildCommand para compilar o frontend
✅ Adicionadas variáveis de ambiente necessárias

## 🚀 Próximas Etapas

1. **Remova o arquivo** `/frontend/vercel.json` (pode causar conflitos)
2. **Remova a pasta** `/backend` da raiz do repositório (código agora está em `/api`)
3. **Faça push** das mudanças para o GitHub
4. **Configure as variáveis** de ambiente no Vercel
5. **Faça redeploy** do seu projeto no Vercel

## 📁 Estrutura Esperada Após Deploy

```
/api/index.py         ← Backend FastAPI (rotas em /api/*)
/frontend/build/      ← Frontend React compilado
vercel.json           ← Configuração de rewrite
```

## 🔗 Endpointss da API

- `GET  /` - Status da API
- `GET  /api/` - Hello World
- `POST /api/status` - Criar status check
- `GET  /api/status` - Listar status checks
- `GET  /api/download-source` - Download do código fonte
