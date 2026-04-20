# Montefalco — Site Institucional

Site institucional da **Montefalco**, distribuidora premium de mármores, granitos, quartzitos e pedras naturais nacionais e importadas.

## Stack

- **React 18 + TypeScript**
- **Vite 5** (build + dev)
- **TailwindCSS 3** (tokens de design custom)
- **Framer Motion** (animações + transições de página)
- **React Router v6** (roteamento com lazy-loading)
- **react-helmet-async** (SEO por página)
- **Lucide React** (ícones)

## Estrutura

```
src/
  components/
    layout/     → Nav, Footer, Layout, WhatsAppFloat, BackToTop, LoadingScreen
    sections/   → Hero, About, Products, Differentials, etc. (home)
    ui/         → Reveal, Logo, PageHero
  data/         → site, products, testimonials, faq, blog, team, differentials
  hooks/        → useScrollReveal, useCountUp
  pages/        → Home, Sobre, Produtos, ProdutoDetalhe, Blog, BlogPost,
                   Contato, Faq, NotFound, Legal (Privacidade/Termos)
  seo/          → Seo component, schemas JSON-LD
  styles/       → globals.css (Tailwind + tokens)
public/
  robots.txt · sitemap.xml · favicon.svg
```

## Rotas

| Rota                     | Página              |
| ------------------------ | ------------------- |
| `/`                      | Home                |
| `/sobre`                 | Sobre a Montefalco  |
| `/produtos`              | Catálogo            |
| `/produtos/:slug`        | Produto Individual  |
| `/blog`                  | Blog (lista)        |
| `/blog/:slug`            | Post Individual     |
| `/contato`               | Contato + Mapa      |
| `/faq`                   | Perguntas Frequentes|
| `/privacidade`           | Política LGPD       |
| `/termos`                | Termos de Uso       |
| `*`                      | 404                 |

## SEO e GEO

Cada página expõe:

- Title, meta description, canonical
- Open Graph + Twitter Cards
- JSON-LD: `Organization`, `LocalBusiness`, `WebSite`, `BreadcrumbList`,
  `FAQPage` (speakable), `BlogPosting` (speakable), `Product`, `Person`
  e `AggregateRating`
- `knowsAbout` e `hasOfferCatalog` para GEO (ChatGPT/Gemini/Perplexity)
- Conteúdo em formato pergunta/resposta (FAQ), seções com H2/H3 bem
  definidos, TL;DR em cada post e autoridade com bio completa do autor

## Scripts

```bash
npm install     # instalar dependências
npm run dev     # dev server em http://localhost:5173
npm run build   # typecheck + build de produção
npm run preview # preview do build
npm run lint    # typecheck only
```

## Variáveis de Ambiente

Copie `.env.example` → `.env` se for sobrescrever valores default
de `src/data/site.ts`.

## Deploy na Vercel

O projeto inclui `vercel.json` com:

- Rewrite SPA (fallback para `index.html`)
- Headers de segurança (HSTS, X-Frame-Options, Permissions-Policy)
- Cache longo para `/assets/` com `immutable`

Deploy:

```bash
vercel --prod
```

## Design Tokens

| Token        | Valor        |
| ------------ | ------------ |
| bg           | `#0a0a0a`    |
| gold         | `#c8a97e`    |
| gold-light   | `#d4ba94`    |
| cream        | `#f5f0ea`    |
| Serif        | Playfair Display |
| Sans         | Inter        |

## Performance

- Lazy-loading por rota (`React.lazy` + `Suspense`)
- `manualChunks` para isolar `react`, `motion` do bundle principal
- Imagens com `loading="lazy"` e `decoding="async"` quando fora do viewport
- Fontes pré-conectadas via `<link rel="preconnect">`
- Animações com `useReducedMotion` respeitando preferências do usuário
