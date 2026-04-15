# EuroWineExperience — Agent Instructions

## Project overview
React SPA for a premium wine-tourism company in Portugal. All data is static (no API/backend). Deployed on Vercel; the `api/` folder contains a Python (Flask) stub currently unused.

## Commands
```bash
# Install
cd frontend && npm install

# Dev server (port 3000)
cd frontend && npm start

# Production build
cd frontend && npm run build
```

The `.venv` at repo root is for the Python `api/` only, not for the frontend.

## Architecture

```
frontend/src/
  App.js                  # Router + global layout (Header, Footer, Toaster)
  pages/                  # One file per route: HomePage, ExperienciasPage, HospedagemPage, AboutPage
  components/             # Shared sections (HeroSection, AboutSection, etc.) + shadcn/ui in ui/
  data/
    mockData.js           # SINGLE SOURCE OF TRUTH — all packages, accommodations, companyInfo, etc.
    translations.js       # i18n strings for PT/EN/ES via LanguageContext
  contexts/LanguageContext.js
  lib/utils.js            # optimizeImageUrl(url, width?, quality?) helper
```

## Key conventions

### Data layer (`mockData.js`)
- `packages` array: each entry is a tour/experience with these required fields:
  - `id` (int, sequential), `name`, `location`, `region` (Porto|Lisboa|Alentejo|Aveiro), `icon`, `tagline`, `category`, `shortDescription`, `fullDescription`, `image`, `gallery[]`, `priceFrom`, `priceTo`, `currency:"€"`, `duration`, `groupSize`, `includes[]`
  - `category` values: `'winery'` | `'tour'` | `'city-tour'` | `'day-trip'` | **`'package'`** (multi-day packages)
  - Optional `featured: true` → shown on the HomePage featured row (Cartuxa, AdegaMãe, Esporão)
  - Pricing sub-arrays: `tastingOptions`, `visitOptions`, `mealOptions`, `routeOptions`, or `packageDays` for multi-day itineraries
- `accommodations`, `testimonials`, `faqs`, `heroImages`, `companyInfo` also exported from the same file.
- **Never add a backend call.** If new data is needed, add it to `mockData.js`.

### Routing
Routes defined in `App.js` using React Router v6. Current routes: `/`, `/experiencias`, `/hospedagem`, `/sobre`. The `<ScrollManager>` component handles scroll-to-top and `location.state.scrollTo` anchor navigation.

### ExperienciasPage filters
Two independent filter rows: **Region** (Porto/Aveiro/Lisboa/Alentejo) and **Category** (all/winery/tour/city-tour/day-trip/**package**).  
`ExperienciasPage` reads `?filter=<value>` from the URL on mount to pre-select the category filter (used by the PromoPopup CTA).

### PromoPopup
- Component: `frontend/src/components/PromoPopup.js`  
- Rendered inside `HomePage` only  
- Uses `localStorage` key `ewe_promo_seen` to show only once per browser  
- CTA navigates to `/experiencias?filter=package`

### Images
Use `optimizeImageUrl(url, width?, quality?)` from `lib/utils.js` for every `<img>` tag. Use Unsplash or Pexels URLs consistent with existing entries. Avoid hotlinking from winery sites.

### UI components
All from `components/ui/` (shadcn/ui). Import with `@/components/ui/<name>`. Do **not** install new UI libraries.

### i18n
All user-facing strings that appear in both languages must be added to `translations.js` under `pt`, `en`, and `es` keys. Access via `const t = translations[language]` from `useLanguage()`.

### WhatsApp CTA
Use `companyInfo.whatsapp` (from mockData). Pattern: `https://wa.me/${companyInfo.whatsapp.replace(/\+/g,'')}?text=${encodeURIComponent(...)}`.

## Featured wineries on homepage
The HomePage "Experiências Premium" section shows the 3 entries in `packages` where `featured === true` (Cartuxa id 24, AdegaMãe id 3, Esporão id 25). All remaining experiences are shown on `/experiencias`.

## Portugal – Roteiro Enoturismo (3-day package)
- `id: 26`, `category: 'package'`, `isPromo: true`
- 3 days: Lisboa region → Alentejo → Aveiro/Bairrada
- Price: **700 € / person** (days sum to 699€: Day 1 199€ · Day 2 270€ · Day 3 230€)
- Private driver, meals included
- Promoted via `PromoPopup` on homepage entry
- Filtered under "Pacotes" tab in ExperienciasPage

## Official pricing (verified Apr 2025)
| Winery | Options | Source |
|--------|---------|--------|
| AdegaMãe | Bronze 18€ · Silver 25€ · Gold 45€ · Special Editions 65€ · Petiscos 70€ · Sal na Adega 96€ | adegamae.pt |
| Esporão | Wine Bar from 12€ · Visit Classic 30€ · Visit Premium 45€ · Wine Bar Premium 61€ · Restaurant Menu I+wine 67€ · Menu II+wine 95€ | esporao.com |
| Cartuxa | Age-gate blocks scraping — prices approximate (20€/45€/85€) | cartuxa.pt |

## New entries added (ids 24–26)
| id | Name | category | featured |
|----|------|----------|---------|
| 24 | Adega Cartuxa – Évora | winery | true |
| 25 | Herdade do Esporão – Reguengos | winery | true |
| 26 | Portugal – Roteiro Enoturismo 3 Dias | package | — |
