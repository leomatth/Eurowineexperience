# EuroWineExperience — PRD

## Visão Geral do Projeto
Plataforma de enoturismo de luxo em Portugal. Site React.js com React Router, Tailwind CSS, shadcn/ui, deployado na Vercel.

## Tech Stack
- Frontend: React.js (Create React App + CRACO), React Router v7, Tailwind CSS v3, shadcn/ui, lucide-react
- Backend: Vercel Serverless (Python) — apenas para rotas /api
- Dados: mockData.js (estático, sem banco de dados)
- Deployment: Vercel

## Audiência-alvo
Viajantes premium, casais, apreciadores de vinho — orçamento alto (€850+/pessoa)

## Páginas Existentes
| Rota | Arquivo | Descrição |
|------|---------|-----------|
| / | HomePage.js | Página inicial com pacotes, hospedagens, sobre, FAQ |
| /experiencias | ExperienciasPage.js | Catálogo completo com filtros |
| /hospedagem | HospedagemPage.js | Hospedagens premium |
| /sobre | AboutPage.js | Sobre a empresa |
| /pacote-3-dias | Pacote3DiasPage.js | ⭐ Landing page exclusiva do pacote 3 dias |

## Componentes Globais
- Header.js — fixo no topo, links de navegação, multilíngue (PT/EN/ES)
- Footer.js — newsletter, contatos, redes sociais, políticas
- CookieBanner.js — LGPD/RGPD compliance
- PromoPopup.js — popup promocional (apenas na Home)

## Contatos / Empresa
- WhatsApp: +5521998277135
- Email: europawineexperience@gmail.com
- Instagram: @europawineexperience

---

## O que foi Implementado

### [2026-04-25] — Landing Page /pacote-3-dias

**Arquivo criado:** `/app/frontend/src/pages/Pacote3DiasPage.js`  
**Rota adicionada em:** `/app/frontend/src/App.js`  
**Rota:** `/pacote-3-dias`

**Seções implementadas:**
1. **Hero Section** — Imagem de fundo (Douro Valley, Pexels), headline H1, preço €850, botão WhatsApp verde + botão scroll para itinerário
2. **Quick Facts Bar** — 5 cards em barra vermelha (3 dias, vinícolas, motorista, almoços, personalizado)
3. **Itinerary (3 dias)** — Cards coloridos por dia (Dia 1 vermelho, Dia 2 âmbar, Dia 3 verde), preços por dia, paradas detalhadas, botão WhatsApp em cada dia
4. **Inclusions Section** — 4 cards de categoria + banner vermelho com 8 inclusões completas
5. **Visual Break** — Imagem de adega com barricas + quote de vinho
6. **Why Choose Us** — 6 cards em background escuro (diferenciadores)
7. **FAQ Accordion** — 8 perguntas/respostas específicas para o pacote 3 dias
8. **Final CTA** — Botão WhatsApp (verde), Email, trust badges, link back para /experiencias

**Decisões técnicas:**
- Standalone landing page (sem link no Header — intencionalmente)
- Reusa Footer e Header globais do App.js
- Usa `companyInfo.whatsapp` do mockData para número correto
- Imagem Hero: Unsplash/Pexels (Douro Valley terraced vineyards)
- Todos os CTAs WhatsApp pré-preenchidos com mensagem sobre pacote 3 dias

---

---

### [2026-04-25] — Landing Page /alentejo-1-dia

**Arquivo criado:** `/app/frontend/src/pages/Alentejo1DiaPage.js`  
**Rota adicionada em:** `/app/frontend/src/App.js`  
**Rota:** `/alentejo-1-dia`  
**Estrutura:** Idêntica à Pacote3DiasPage.js

**Diferenças de conteúdo vs. /pacote-3-dias:**
- Preço: €350 (vs €850)
- Duração: 1 dia (08:00–20:00)
- 2 vinícolas (Esporão + Cartuxa, vs 6)
- Itinerário adaptado: 3 momentos do dia (Manhã/Almoço/Tarde) com labels de horário nos cards (vs "Dia 1/2/3")
- Hero image: campo do Alentejo com lago (Unsplash amber/vermelho)
- FAQ: 8 perguntas específicas do Alentejo
- Quote visual break: "O Alentejo não se visita — sente-se."

---

## Backlog / Próximas Páginas Sugeridas

### P0 (Alta Prioridade)
- [ ] Landing page para o Pacote 1 Dia — Lisboa Atlântico (/lisboa-1-dia)

### P1 (Média Prioridade)
- [ ] Página de confirmação/obrigado após reserva
- [ ] Testimonials específicos para cada pacote
- [ ] Galeria de fotos por experiência

### P2 (Baixa Prioridade)
- [ ] Blog/artigos sobre enoturismo em Portugal
- [ ] Sistema de reserva integrado (calendário)
- [ ] Tracking de conversões (WhatsApp clicks)
