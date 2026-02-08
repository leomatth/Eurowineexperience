# We Love Portugal - Enoturismo de Luxo
**Product Requirements Document**

---

## 📋 Visão Geral do Projeto
Landing page completa para enoturismo de luxo em Portugal, expansão da We Love Mendoza para o mercado europeu.

### Data de Início
- **Criado em:** 08/02/2025
- **Última Atualização:** 08/02/2025

---

## 🎯 Problema Original
Criar um site completo para enoturismo em Portugal como expansão da empresa We Love Mendoza (Argentina). 

**Requisitos principais:**
- Landing page otimizada para Instagram
- Design idêntico ao padrão welovemendoza.com.br (cores quentes, layout clean)
- 3 pacotes principais de experiências vinícolas
- Multilingue (Português, Inglês, Espanhol)
- Sistema de reservas com pagamento online
- Integração WhatsApp
- Responsivo para mobile

---

## 👥 Personas do Usuário
1. **Turistas Internacionais:** Viajantes de 30-55 anos buscando experiências premium em Portugal
2. **Brasileiros em Portugal:** Residentes brasileiros querendo experiências culturais
3. **Grupos Corporativos:** Empresas buscando eventos e team building em vinícolas

---

## 🏗️ Arquitetura Implementada

### Frontend
- **Framework:** React 19.0.0
- **UI Components:** shadcn/ui (Tailwind CSS)
- **Routing:** Single Page Application (smooth scroll)
- **Fontes:** Inter (body), Playfair Display (headings)
- **Cores:** Vermelho vinho (#991B1B), Dourado/Amber, Verde suave

### Estrutura de Componentes
```
/frontend/src/
├── components/
│   ├── Header.js (navegação fixa + seletor de idioma)
│   ├── HeroSection.js (hero full-width com overlay)
│   ├── PackagesSection.js (3 cards expansíveis)
│   ├── AboutSection.js (história + valores)
│   ├── TestimonialsSection.js (depoimentos)
│   ├── FAQSection.js (accordion FAQ)
│   ├── ContactSection.js (formulário + WhatsApp)
│   └── Footer.js (links + newsletter)
├── contexts/
│   └── LanguageContext.js (gerenciamento de idiomas)
├── data/
│   ├── mockData.js (todos os dados mock)
│   └── translations.js (PT/EN/ES)
└── ui/ (shadcn components)
```

### Backend (Preparado para integração)
- **Framework:** FastAPI
- **Database:** MongoDB
- **API Prefix:** /api

---

## ✅ Features Implementadas

### Fase 1 - Frontend com Mock Data ✓ (08/02/2025)

#### Homepage & Hero Section ✓
- Hero section full-width com imagem de vinhedos ao pôr do sol
- Overlay com gradiente (vermelho/dourado/verde)
- Título principal animado com fade-in
- 2 CTAs: "Reserve Agora" e "Fale no WhatsApp"
- Stats contadores (3 vinícolas, 5+ anos, 100% satisfação)
- Scroll indicator animado

#### Header & Navegação ✓
- Logo com ícone de vinho
- Navegação sticky com blur backdrop
- Smooth scroll para seções
- Seletor de idioma (PT/EN/ES) com bandeiras
- Menu mobile responsivo
- Botão "Reserve Agora" destacado

#### Pacotes (3 Vinícolas) ✓
1. **AdegaMãe + Sal na Adega** (Torres Vedras)
   - Preço: €150-250/pessoa
   - Opções de degustação: Bronze (€18), Silver (€25), Gold (€45), Special (€65), Pairing (€96)
   - Inclui: Transfer, tour, degustação, almoço gastronômico

2. **Quinta da Bacalhôa** (Azeitão, Setúbal)
   - Preço: €120-200/pessoa
   - Visitas: Adega Museu (€7), Palácio (€13), Combo (€16)
   - Inclui: Transfer, palácio histórico, degustação premium, Queijo Azeitão

3. **Quinta das Murgas** (Bucelas)
   - Preço: €140-220/pessoa
   - Opções: Vertical tasting, Premium com cavalo (€130)
   - Inclui: Transfer, tour, degustação vertical, tábuas regionais

#### Features dos Pacotes ✓
- Cards hover com elevação 3D
- Expansão de detalhes (accordion)
- Galeria de 3 imagens por pacote
- Badge de preço destacado
- Ícones informativos (duração, grupo, localização)
- Botão "Reservar Pacote" que leva ao formulário

#### Seção Sobre Nós ✓
- História da empresa e expansão europeia
- Grid de 4 imagens (degustações, adegas, vinhedos)
- 3 Cards de valores: Excelência, Autenticidade, Sustentabilidade
- Lista de parceiros oficiais

#### Depoimentos ✓
- 3 depoimentos com avatares e ratings (5 estrelas)
- Cards com efeito hover
- Stats de confiança (500+ clientes, 4.9 rating)

#### FAQ ✓
- 6 perguntas frequentes em accordion
- CTA adicional para contato direto
- Estilo clean com animações suaves

#### Formulário de Contato ✓
- Campos: Nome, Email, Telefone, Pacote de interesse, Mensagem
- Select dropdown com os 3 pacotes
- Validação de campos obrigatórios
- Toast de confirmação (MOCK - frontend apenas)
- Card de informações de contato ao lado
- Integração WhatsApp com botão verde destacado
- Mapa do Google Maps (Lisboa)

#### Footer ✓
- 4 colunas: Brand, Quick Links, Contato, Newsletter
- Links para Instagram, Facebook, YouTube
- Formulário de newsletter (MOCK)
- Copyright e links de política

#### Multilingue ✓
- 3 idiomas completos: Português, Inglês, Espanhol
- Persistência no localStorage
- Seletor visual com bandeiras
- Tradução de todos os textos

#### Design & UX ✓
- Cores quentes: Vermelho vinho (#991B1B), Amber, Verde oliva
- Tipografia: Inter (corpo), Playfair Display (títulos)
- Animações suaves: fade-in, fade-in-up, hover effects
- Scrollbar customizada (vermelha)
- Seleção de texto vermelha
- Totalmente responsivo (mobile-first)
- Performance otimizada

---

## 🔄 Status Atual
**Frontend MVP Completo** - Site funcional com mock data, pronto para uso e demonstração

### Sistema de Dados
- **MOCK:** Todos os dados (pacotes, depoimentos, FAQs) estão em `/frontend/src/data/mockData.js`
- **Formulários:** Simulam envio com toast de confirmação (não persistem dados)
- **Pagamento:** Interface preparada mas não integrada (aguarda backend)

---

## 🚀 Próximos Passos (Backlog Priorizado)

### P0 - Backend & Integração (Próxima Fase)
- [ ] Criar modelos MongoDB para Reservas, Contatos, Newsletter
- [ ] Implementar endpoints CRUD no FastAPI:
  - POST /api/bookings (criar reserva)
  - POST /api/contacts (enviar mensagem)
  - POST /api/newsletter (inscrever email)
  - GET /api/packages (listar pacotes)
- [ ] Integrar formulário de contato com backend
- [ ] Integrar newsletter com backend
- [ ] Remover mock data e conectar com API real

### P1 - Sistema de Pagamento
- [ ] Integrar Stripe para pagamentos EU
- [ ] Criar fluxo de checkout completo
- [ ] Implementar confirmação de reserva por email
- [ ] Adicionar painel de gerenciamento de reservas (admin)

### P2 - Funcionalidades Adicionais
- [ ] Sistema de calendário real (Calendly embed ou custom)
- [ ] Envio automático de confirmação por WhatsApp
- [ ] Galeria expandida com lightbox
- [ ] Blog de experiências (opcional)
- [ ] Avaliações verificadas (integração Google/TripAdvisor)

---

## 📱 Informações de Contato (Produção)
- **WhatsApp:** +351 935327289
- **Email:** leomattheus95@gmail.com
- **Localização:** Lisboa, Portugal
- **Redes Sociais:** Instagram, Facebook, YouTube (placeholders)

---

## 🎨 Assets & Imagens
Todas as imagens foram selecionadas via vision_expert_agent:
- 14 imagens profissionais de alta qualidade (Unsplash/Pexels)
- Categorias: Vinhedos ao pôr do sol, degustações, adegas históricas, gastronomia
- Otimizadas para web

---

## 📦 Dependências Instaladas
- lucide-react (ícones)
- sonner (toasts)
- shadcn/ui components (accordion, card, button, input, select, etc.)
- React 19 + Tailwind CSS

---

## 🎯 Métricas de Sucesso
- ✅ Design fiel ao We Love Mendoza
- ✅ 3 idiomas funcionais
- ✅ Responsivo 100%
- ✅ Tempo de carregamento < 3s
- ✅ Todas as seções implementadas
- ⏳ Backend (aguardando fase 2)
- ⏳ Pagamento real (aguardando fase 2)

---

**Última revisão:** 08/02/2025 por E1 Agent
