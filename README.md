# 🍷 EuroWine Experience

> Plataforma completa de enoturismo de luxo em Portugal - Conectando amantes de vinho com as melhores experiências vinícolas do país.

[![React](https://img.shields.io/badge/React-19.0.0-61DAFB?logo=react)](https://reactjs.org/)
[![FastAPI](https://img.shields.io/badge/FastAPI-0.110.1-009688?logo=fastapi)](https://fastapi.tiangolo.com/)
[![MongoDB](https://img.shields.io/badge/MongoDB-4.5.0-47A248?logo=mongodb)](https://www.mongodb.com/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind-3.4.17-38B2AC?logo=tailwind-css)](https://tailwindcss.com/)

---

## 📋 Sobre o Projeto

**EuroWine Experience** é uma plataforma web completa desenvolvida para oferecer experiências premium de enoturismo em Portugal. O projeto conecta viajantes apaixonados por vinho com as melhores vinícolas, tours e experiências gastronômicas do país.

### ✨ Características Principais

- 🌍 **Multilíngue**: Suporte completo para Português, Inglês e Espanhol
- 🎨 **Design Moderno**: Interface elegante com Tailwind CSS e componentes shadcn/ui
- 📱 **Totalmente Responsivo**: Otimizado para desktop, tablet e mobile
- 🍇 **3 Pacotes Premium**: Experiências exclusivas em vinícolas selecionadas
- 📞 **Integração WhatsApp**: Contato direto via WhatsApp
- 🏨 **Seção de Acomodações**: Recomendações de hotéis e pousadas
- ❓ **FAQ Interativo**: Seção de perguntas frequentes
- ⚡ **API RESTful**: Backend robusto com FastAPI
- 🗄️ **MongoDB**: Banco de dados NoSQL para escalabilidade

---

## 🏗️ Arquitetura

### Frontend
- **Framework**: React 19.0.0
- **UI Components**: shadcn/ui (Radix UI + Tailwind CSS)
- **Roteamento**: React Router DOM
- **Gerenciamento de Estado**: Context API
- **Formulários**: React Hook Form + Zod
- **Ícones**: Lucide React
- **Notificações**: Sonner

### Backend
- **Framework**: FastAPI 0.110.1
- **Banco de Dados**: MongoDB (Motor - AsyncIO)
- **Validação**: Pydantic v2
- **CORS**: Configurado para desenvolvimento e produção
- **Documentação**: Swagger UI automático em `/docs`

---

## 🚀 Tecnologias Utilizadas

### Frontend
```
React 19.0.0
Tailwind CSS 3.4.17
shadcn/ui (Radix UI)
React Router DOM 7.5.1
React Hook Form 7.56.2
Zod 3.24.4
Axios 1.8.4
Lucide React 0.507.0
```

### Backend
```
FastAPI 0.110.1
Uvicorn 0.25.0
Motor 3.3.1 (MongoDB AsyncIO)
Pydantic 2.12.5
Python-dotenv 1.2.1
```

### Banco de Dados
```
MongoDB Atlas (Cloud) ou MongoDB Local
```

---

## 📁 Estrutura do Projeto

```
Eurowineexperience/
├── backend/
│   ├── server.py              # API FastAPI principal
│   ├── requirements.txt       # Dependências Python
│   └── .env                   # Variáveis de ambiente (não versionado)
│
├── frontend/
│   ├── public/
│   │   └── index.html         # HTML principal
│   ├── src/
│   │   ├── components/       # Componentes React
│   │   │   ├── Header.js
│   │   │   ├── HeroSection.js
│   │   │   ├── PackagesSection.js
│   │   │   ├── AccommodationsSection.js
│   │   │   ├── AboutSection.js
│   │   │   ├── TestimonialsSection.js
│   │   │   ├── FAQSection.js
│   │   │   ├── ContactSection.js
│   │   │   └── Footer.js
│   │   ├── contexts/
│   │   │   └── LanguageContext.js  # Gerenciamento de idiomas
│   │   ├── data/
│   │   │   ├── mockData.js    # Dados mockados
│   │   │   └── translations.js # Traduções PT/EN/ES
│   │   ├── lib/
│   │   │   └── utils.js      # Utilitários
│   │   ├── App.js             # Componente principal
│   │   └── index.js            # Entry point
│   ├── package.json
│   └── craco.config.js        # Configuração CRACO
│
└── README.md                   # Este arquivo
```

---

## 🛠️ Instalação e Configuração

### Pré-requisitos

- **Node.js** 18+ e npm/yarn
- **Python** 3.9+
- **MongoDB** (Atlas ou local)

### 1. Clone o repositório

```bash
git clone https://github.com/seu-usuario/eurowineexperience.git
cd eurowineexperience
```

### 2. Configuração do Backend

```bash
# Entre na pasta do backend
cd backend

# Crie um ambiente virtual
python -m venv .venv

# Ative o ambiente virtual
# Windows:
.\.venv\Scripts\Activate.ps1
# Linux/Mac:
source .venv/bin/activate

# Instale as dependências
pip install -r requirements.txt

# Crie o arquivo .env
cp st.env .env  # ou crie manualmente
```

**Configure o arquivo `.env`:**

```env
MONGO_URL=mongodb+srv://usuario:senha@cluster.mongodb.net/?retryWrites=true&w=majority
DB_NAME=eurowineexperience
CORS_ORIGINS=http://localhost:3000,http://localhost:8000
```

### 3. Configuração do Frontend

```bash
# Entre na pasta do frontend
cd frontend

# Instale as dependências
npm install --legacy-peer-deps
# ou
yarn install
```

---

## ▶️ Como Executar

### Backend (Terminal 1)

```bash
cd backend
.\.venv\Scripts\Activate.ps1  # Windows
# ou
source .venv/bin/activate      # Linux/Mac

uvicorn server:app --reload --host 0.0.0.0 --port 8000
```

A API estará disponível em: `http://localhost:8000`
- **Documentação Swagger**: `http://localhost:8000/docs`
- **API Root**: `http://localhost:8000/api/`

### Frontend (Terminal 2)

```bash
cd frontend
npm start
# ou
yarn start
```

O frontend estará disponível em: `http://localhost:3000`

---

## 📡 Endpoints da API

### Base URL
```
http://localhost:8000/api
```

### Endpoints Disponíveis

| Método | Endpoint | Descrição |
|--------|----------|-----------|
| `GET` | `/` | Informações da API |
| `GET` | `/api/` | Hello World |
| `POST` | `/api/status` | Criar status check |
| `GET` | `/api/status` | Listar status checks |
| `GET` | `/api/download-source` | Download do código fonte (ZIP) |

### Exemplo de Uso

```bash
# Testar API
curl http://localhost:8000/api/

# Criar status check
curl -X POST http://localhost:8000/api/status \
  -H "Content-Type: application/json" \
  -d '{"client_name": "teste"}'

# Listar status checks
curl http://localhost:8000/api/status
```

---

## 🎨 Pacotes de Experiências

### 1. AdegaMãe + Sal na Adega (Torres Vedras)
- **Preço**: €150-250/pessoa
- **Opções**: Bronze (€18), Silver (€25), Gold (€45), Special (€65), Pairing (€96)
- **Inclui**: Transfer, tour, degustação, almoço gastronômico

### 2. Quinta da Bacalhôa (Azeitão, Setúbal)
- **Preço**: €120-200/pessoa
- **Visitas**: Adega Museu (€7), Palácio (€13), Combo (€16)
- **Inclui**: Transfer, palácio histórico, degustação premium, Queijo Azeitão

### 3. Quinta das Murgas (Bucelas)
- **Preço**: €140-220/pessoa
- **Opções**: Vertical tasting, Premium com cavalo (€130)
- **Inclui**: Transfer, tour, degustação vertical, tábuas regionais

---

## 🌐 Idiomas Suportados

- 🇵🇹 **Português** (PT)
- 🇬🇧 **Inglês** (EN)
- 🇪🇸 **Espanhol** (ES)

O sistema detecta automaticamente o idioma do navegador e permite troca manual via seletor no header.

---

## 📱 Responsividade

O projeto é totalmente responsivo e otimizado para:
- 📱 **Mobile** (< 768px)
- 📱 **Tablet** (768px - 1024px)
- 💻 **Desktop** (> 1024px)

---

## 🔒 Variáveis de Ambiente

### Backend (.env)
```env
MONGO_URL=sua_connection_string_mongodb
DB_NAME=eurowineexperience
CORS_ORIGINS=http://localhost:3000,http://localhost:8000
```

### Frontend
Crie um arquivo `.env` na pasta `frontend` se necessário:
```env
REACT_APP_API_URL=http://localhost:8000
```

---

## 🧪 Desenvolvimento

### Scripts Disponíveis

**Frontend:**
```bash
npm start      # Inicia servidor de desenvolvimento
npm build      # Build para produção
npm test       # Executa testes
```

**Backend:**
```bash
uvicorn server:app --reload    # Desenvolvimento com hot reload
uvicorn server:app --host 0.0.0.0 --port 8000  # Produção
```

---

## 📦 Build para Produção

### Frontend
```bash
cd frontend
npm run build
```

Os arquivos serão gerados na pasta `frontend/build/`.

### Backend
O backend FastAPI pode ser deployado em qualquer servidor Python ou container Docker.

---

## 🤝 Contribuindo

Contribuições são bem-vindas! Sinta-se à vontade para:

1. Fazer um Fork do projeto
2. Criar uma branch para sua feature (`git checkout -b feature/AmazingFeature`)
3. Commit suas mudanças (`git commit -m 'Add some AmazingFeature'`)
4. Push para a branch (`git push origin feature/AmazingFeature`)
5. Abrir um Pull Request

---

## 📄 Licença

Este projeto está sob a licença MIT. Veja o arquivo `LICENSE` para mais detalhes.

---

## 👥 Contato

- **Email**: leomattheus95@gmail.com
- **WhatsApp**: +351 935327289
- **Localização**: Lisboa, Portugal

---

## 🎯 Roadmap

### Próximas Features
- [ ] Sistema de reservas completo
- [ ] Integração com Stripe para pagamentos
- [ ] Painel administrativo
- [ ] Sistema de calendário para reservas
- [ ] Envio automático de confirmações por email
- [ ] Integração com Google Maps
- [ ] Sistema de avaliações e reviews
- [ ] Blog de experiências

---

## 🙏 Agradecimentos

- [shadcn/ui](https://ui.shadcn.com/) - Componentes UI incríveis
- [Radix UI](https://www.radix-ui.com/) - Primitivos acessíveis
- [Tailwind CSS](https://tailwindcss.com/) - Framework CSS utilitário
- [FastAPI](https://fastapi.tiangolo.com/) - Framework web moderno
- [MongoDB](https://www.mongodb.com/) - Banco de dados NoSQL

---

<div align="center">

**Desenvolvido com ❤️ para amantes de vinho**

🍷 *Bom proveito!*

</div>
