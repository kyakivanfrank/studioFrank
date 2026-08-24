# studioFrank

Portfolio of **Frank Ivan Kyakusse** — frontend engineer and product designer, Kampala, Uganda.

Live: [frankkyakusse.com](https://www.frankkyakusse.com)

## Stack

| | |
|---|---|
| Framework | Next.js 15 (App Router, React 19) |
| Language | TypeScript (strict) |
| Styling | Tailwind CSS v4 — tokens declared in `src/app/globals.css` |
| Icons | `lucide-react` (UI) + `react-icons/si` (brand marks) |
| Fonts | Josefin Sans (display) + Inter (body), via `next/font` |
| Rendering | Fully static — every route is prerendered at build time |

## Getting started

```bash
npm install
npm run dev        # http://localhost:3000
npm run build      # production build
npm run typecheck  # tsc --noEmit
```

## Where things live

```
src/
├── app/                    # routes; every page is statically generated
│   ├── layout.tsx          # fonts, metadata, JSON-LD, chrome
│   ├── page.tsx            # landing
│   ├── portfolio/          # gallery + /portfolio/[slug] project pages
│   ├── services/ about/ contact/
│   ├── sitemap.ts robots.ts manifest.ts
│   └── globals.css         # the entire design system
├── components/             # header, footer, cards, covers, icons, primitives
├── data/                   # projects.ts · services.ts · site.ts
└── lib/utils.ts
```

**All content lives in `src/data/`.** To add a project, append an entry to
`projects` in `src/data/projects.ts` — the gallery, filters, static routes,
sitemap and metadata all derive from that array. Drop the screenshot in
`public/projects/` and set `aspect` to its real ratio (e.g. `"1069 / 647"`) so
it is never cropped. Leave `image` out and give a `gradient` pair instead, and
the project gets a generated cover — used for products that sit behind a login.

Years of experience are computed from `CAREER_START_YEAR` (2019) in
`src/data/site.ts`, so the copy never goes stale.

## Legacy

`legacy-cra/` holds the original Create React App build (React 16, SCSS,
react-router 5) that this replaced. It is excluded from TypeScript and is kept
for reference only — nothing imports from it.
