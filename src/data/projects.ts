export type Category = "product" | "web" | "design";

export type Project = {
  slug: string;
  name: string;
  /** One line that shows on the card. */
  summary: string;
  /** The full story shown on the project page. */
  description: string;
  /** What the image on this page actually shows. Used as alt text and as a caption. */
  imageCaption: string;
  category: Category;
  year: string;
  role: string;
  client?: string;
  /** Screenshot / artwork in /public/projects. Omit for a generated cover. */
  image?: string;
  /** Natural aspect ratio of `image`, as a CSS aspect-ratio value. */
  aspect?: string;
  /** Object-position for the cover crop. */
  focus?: string;
  live?: { label: string; href: string };
  stack: string[];
  highlights: string[];
  featured?: boolean;
  /** Two hex colours used for the generated cover when there is no image. */
  gradient?: [string, string];
};

export const categories: { id: Category | "all"; label: string; blurb: string }[] = [
  { id: "all", label: "Everything", blurb: "Every project, newest first." },
  {
    id: "product",
    label: "Products & Fintech",
    blurb: "Live products — trading terminals, journals and ledgers people log into every day.",
  },
  {
    id: "web",
    label: "Websites & Apps",
    blurb: "Client sites and web apps: marketing pages, portfolios and platforms.",
  },
  {
    id: "design",
    label: "Graphic Design",
    blurb: "Posters, flyers and social artwork — the design half of studioFrank.",
  },
];

export const projects: Project[] = [
  /* ------------------------------------------------------------------ */
  /* Products & fintech                                                  */
  /* ------------------------------------------------------------------ */
  {
    slug: "phantompip",
    name: "PhantomPip",
    client: "PhantomPip (client)",
    summary: "AI trading automation that plugs into a live MT5 account and trades 24/7.",
    description:
      "PhantomPip connects a trader's MetaTrader 5 account to a neural execution engine that runs around the clock while funds stay in custody with the broker. The interface had one job: make an autonomous system feel accountable. A live terminal streams open positions, running P&L, the equity curve, win rate and an execution log, with Telegram alerts mirroring every fill. Three subscription tiers — Starter, Elite and Pulse Pro Scalper — are sized by account balance, and a multi-level referral program pays 20% recurring. The hard part was information density: an operator needs to read risk at a glance on a phone, so the terminal is built on a compact dark numeric grid that never reflows when the numbers change.",
    imageCaption:
      "The PhantomPip live terminal — open positions, running P&L, equity curve and execution log in a single dark dashboard.",
    category: "product",
    year: "2025",
    role: "Frontend engineering, UI system, live dashboard",
    live: { label: "phantompip.com", href: "https://www.phantompip.com/" },
    stack: ["Next.js", "TypeScript", "Tailwind CSS", "Realtime data", "MT5 bridge", "Telegram API"],
    highlights: [
      "Live terminal: positions, P&L, equity curve, win rate and trade log in one view",
      "Three pricing tiers mapped to account size and expected daily return",
      "Multi-level referral tracking with 20% recurring payouts",
      "Local payment rails — USDT, MTN Mobile Money and Airtel Money",
    ],
    featured: true,
    gradient: ["#0b1220", "#2b1055"],
  },
  {
    slug: "compounding-journal",
    name: "Compounding Journal",
    summary: "An installable trading journal that holds you to a compounding plan, trade by trade.",
    description:
      "Most traders lose an account because the plan lives in their head. The Compounding Journal makes the plan the app: you set a starting balance and a daily target, and every logged trade is measured against the curve you promised yourself. It is a Next.js progressive web app — installable, dark by default, and usable offline on the phone sitting next to the chart. Built on a typed component system with shadcn/ui and lucide icons, then statically exported so it opens instantly on a Ugandan mobile connection.",
    imageCaption:
      "The journal's dark dashboard: the compounding curve, the day's target, and the running log of trades measured against it.",
    category: "product",
    year: "2025",
    role: "Design and build — end to end",
    live: {
      label: "studiofrankfx-compounding-journal.vercel.app",
      href: "https://studiofrankfx-compounding-journal.vercel.app/",
    },
    stack: ["Next.js", "TypeScript", "Tailwind CSS", "shadcn/ui", "PWA", "Static export"],
    highlights: [
      "The compounding plan is the core object — every trade is scored against the target curve",
      "Installable PWA with an offline-first shell and its own manifest",
      "Dark-first design system built on shadcn/ui primitives",
      "Static export: no server, near-instant loads on slow mobile data",
    ],
    featured: true,
    gradient: ["#1a0508", "#43101a"],
  },
  {
    slug: "rentflip",
    name: "RentFlip",
    summary: "Rent verification and a digital-evidence ledger for landlords and tenants in Uganda.",
    description:
      "Rent in Uganda is largely paid in cash and remembered by argument. RentFlip turns each payment into a record both sides can stand behind: a tenant logs a payment, the landlord verifies it, and the receipt stays available long after either of them would have lost the paper. It ships as an installable app rather than a website, because the people who need it are on phones with intermittent data — a Flutter progressive web app with a light, high-contrast interface designed to be read outdoors, in one hand, quickly.",
    imageCaption:
      "RentFlip's payment ledger — log a payment, have it verified by the other party, keep the receipt.",
    category: "product",
    year: "2025",
    role: "Product, design and build",
    live: { label: "rentflip.app", href: "https://rentflip.app/" },
    stack: ["Flutter", "PWA", "Offline-first", "Mobile Money"],
    highlights: [
      "Log a payment, get it verified, keep the receipt — the whole loop in three taps",
      "A digital-evidence trail both landlord and tenant can rely on",
      "Installable, offline-tolerant PWA built for intermittent mobile data",
      "Designed for the Ugandan rental market first, not retrofitted to it",
    ],
    featured: true,
    gradient: ["#0e1533", "#3e5eea"],
  },
  {
    slug: "studiofrank-fx",
    name: "studioFRANK Fx",
    summary: "The gold-scalping signals desk behind the fintech work — my own venture.",
    description:
      "studioFRANK Fx is my own trading desk: a members' Telegram channel built around scalping gold on the 1, 5 and 15-minute timeframes, aiming for roughly six clean setups a day with break-even management once a trade runs. It is not a client project — it is the reason the fintech interfaces on this site work. Sitting on the trading side of the screen is what taught me what a trader actually needs in the first half-second: risk, direction, and the one number that matters. Everything else is decoration.",
    imageCaption:
      "studioFRANK Fx — 'Trade smarter, not harder': the members' desk covering gold scalping setups.",
    category: "product",
    year: "2024 — present",
    role: "Founder and operator",
    live: { label: "studiofrankfx.com", href: "https://www.studiofrankfx.com/" },
    stack: ["Trading strategy", "Telegram", "Risk management", "Community"],
    highlights: [
      "Gold-focused scalping across the 1m, 5m and 15m timeframes",
      "Around six high-conviction setups published daily",
      "Break-even management to protect open profit in trends",
      "The domain knowledge behind PhantomPip and the Compounding Journal",
    ],
    gradient: ["#1b1400", "#5a4400"],
  },

  /* ------------------------------------------------------------------ */
  /* Websites & apps                                                     */
  /* ------------------------------------------------------------------ */
  {
    slug: "sonko-portraiture",
    name: "Sonko Portraiture",
    client: "Sonko Henry — photographer & videographer",
    summary: "A portfolio for a Ugandan photographer shooting out of Dubai.",
    description:
      "Sonko Henry is a Ugandan photographer and videographer based in Dubai, and his work — portraits of people, and sunsets that do most of the talking — needed a site that got out of its own way. So the layout is close to nothing: full-bleed imagery, a restrained type scale, and navigation that never competes with a photograph. Built in React with Tailwind, with every image treated as the primary content rather than as page decoration.",
    imageCaption:
      "The Sonko Portraiture home page — full-bleed portrait work with the interface kept deliberately quiet.",
    category: "web",
    year: "2023",
    role: "Design and frontend build",
    image: "/projects/sonkoportraiture.png",
    aspect: "1909 / 922",
    live: { label: "sonkoportraiture.com", href: "https://www.sonkoportraiture.com/" },
    stack: ["React", "Tailwind CSS", "Responsive imagery", "Git"],
    highlights: [
      "Image-first layout — the UI recedes so the photography leads",
      "Responsive galleries that hold their composition from phone to desktop",
      "Lightweight build for viewers on mobile data",
    ],
    featured: true,
  },
  {
    slug: "ndongo-music-platform",
    name: "Ndongo Music Platform",
    summary: "An online repository of Ugandan music — search it, stream it, read the lyrics.",
    description:
      "Ndongo is a repository of Ugandan music that can be streamed online or downloaded. A listener searches for a song, plays it, and reads the lyrics alongside it; underneath, the app models the relationships between artists — grouping them into categories and surfacing their albums — so browsing by artist is as natural as searching by title. The interesting problem was the player: it has to survive navigation, so playback state lives above the route and the interface is built around a transport bar that follows you through the app.",
    imageCaption:
      "Ndongo's browse view — the searchable Ugandan catalogue with artists, categories and albums, and a player that follows you across the app.",
    category: "web",
    year: "2022",
    role: "Frontend architecture and build",
    image: "/projects/ndongo_music_platform.png",
    aspect: "1069 / 647",
    live: { label: "ndongo-music-app.netlify.app", href: "https://ndongo-music-app.netlify.app" },
    stack: ["React", "State management", "Web Audio", "Netlify", "Git"],
    highlights: [
      "Search the catalogue by song, artist or category",
      "Persistent player that survives route changes",
      "Lyrics displayed alongside playback",
      "Artist relationships, categories and albums modelled explicitly",
    ],
  },
  {
    slug: "star-dental-services",
    name: "Star Dental Services",
    client: "Star Dental Services",
    summary: "A landing page that shortens the distance between a dentist and a nervous patient.",
    description:
      "A dental practice's landing page has one job: get someone who is already anxious to make contact. So the page is a straight line — what treatments are offered, what other patients say about them, and a route to booking that is never more than one tap away. Services, testimonials and contact are the only three sections, and the call to action follows the reader down the page.",
    imageCaption:
      "The Star Dental Services landing page — services, testimonials and a booking path kept within one tap.",
    category: "web",
    year: "2022",
    role: "Design and frontend build",
    image: "/projects/star_dental_services.png",
    aspect: "1069 / 647",
    live: { label: "stardentalservices.com", href: "https://stardentalservices.com" },
    stack: ["React", "Responsive design", "SEO", "GitHub"],
    highlights: [
      "Three-section narrative: services, proof, contact",
      "Persistent call to action for booking",
      "Structured to rank for local dental searches",
    ],
  },
  {
    slug: "buyanga-dairy-farm",
    name: "Buyanga Dairy Farm",
    client: "Buyanga Dairy Farm cooperative",
    summary: "A web presence for a farmers' cooperative and its dairy operation.",
    description:
      "Buyanga Dairy Farm had to explain itself to two audiences at once: buyers looking for a supplier, and local farmers deciding whether to join the cooperative society. The site keeps both paths visible from the first screen — who the cooperative is, what it produces and sells, and how to reach it — in plain language, with nothing in between. The client's own verdict was the useful metric: he felt the site finally said what the farm does.",
    imageCaption:
      "Buyanga Dairy Farm's home page — the cooperative's story, services and contact routes on a single clear path.",
    category: "web",
    year: "2021",
    role: "Design and frontend build",
    image: "/projects/buyanga_dairy_farm.png",
    aspect: "1069 / 647",
    live: { label: "buyangadairyfarm.com", href: "https://buyangadairyfarm.com" },
    stack: ["React", "Responsive design", "Content structure"],
    highlights: [
      "Two audiences — buyers and member farmers — served from one home page",
      "About, services and contact reduced to a single clear path",
      "Built to load on rural mobile connections",
    ],
  },
  {
    slug: "gladstep-junior-school",
    name: "Gladstep Junior School",
    client: "Gladstep Junior School, Kawempe",
    summary: "The first site I shipped for a client — a primary school in Kawempe, Kampala.",
    description:
      "Gladstep is a primary school in Kawempe, Kampala. The site covers what a parent actually wants to know before enrolling a child: who the school is, what the curriculum and activities look like, where it is, and how to reach it. It was hand-built in HTML and CSS, and it is on this page for an honest reason — it is where the practice started, and the discipline it forced, with no framework and every layout written out by hand, still shows up in how I build now.",
    imageCaption:
      "The Gladstep Junior School site — curriculum, activities, location and contacts, hand-built in HTML and CSS.",
    category: "web",
    year: "2019",
    role: "Design and build",
    image: "/projects/gladstep_junior_school.png",
    aspect: "1069 / 647",
    live: { label: "gladstepjuniorschool.com", href: "https://gladstepjuniorschool.com" },
    stack: ["HTML", "CSS", "Responsive layout"],
    highlights: [
      "Curriculum, activities, location and contacts for prospective parents",
      "Hand-written HTML and CSS — no framework",
      "The first client project, and where the practice began",
    ],
  },
  {
    slug: "studiofrank",
    name: "studioFrank",
    summary: "This site — rebuilt from a 2020 React app into a typed, statically generated portfolio.",
    description:
      "You are reading it. The original studioFrank ran on Create React App with React 16, a Context-based menu toggle and a stack of SCSS partials. It worked, but every image was unoptimised, every route was client-rendered, and project pages were modals with no URL worth sharing. This version keeps the identity exactly — black ground, yellow accent, Josefin Sans, the same photograph — and rebuilds the machinery underneath: the Next.js App Router over typed data, statically generated project pages that are real shareable URLs, next/image on every asset, and one Tailwind token set in place of eight stylesheets.",
    imageCaption:
      "studioFrank as it stood on the old React build — the layout this version was rebuilt from.",
    category: "web",
    year: "2020 · rebuilt 2026",
    role: "Everything",
    image: "/projects/studio_frank.png",
    aspect: "1069 / 647",
    live: { label: "frankkyakusse.com", href: "https://www.frankkyakusse.com" },
    stack: ["Next.js", "TypeScript", "Tailwind CSS", "next/image", "SEO"],
    highlights: [
      "Modal project views replaced with real, indexable, shareable URLs",
      "Every image served through next/image in AVIF and WebP",
      "Eight SCSS partials collapsed into a single token set",
      "Same brand, new machinery — nothing about the identity was thrown away",
    ],
  },

  /* ------------------------------------------------------------------ */
  /* Graphic design                                                      */
  /* ------------------------------------------------------------------ */
  {
    slug: "atmosphere-chapter-two",
    name: "Atmosphere 9.9 — Chapter Two",
    client: "Atmosphere Ug",
    summary: "Event artwork for an online gathering under the theme 'Freedom'.",
    description:
      "Cover artwork for Atmosphere 9.9, Chapter Two — an online experience running 7–9pm on the 9th of September under the theme 'Freedom'. The composition sets the winged Atmosphere mark against a deep violet nebula and lets the eagle's silhouette bleed into the mountain ridge at the base, so the logo reads as part of the sky rather than as a sticker placed on top of it. The type is a deliberate two-tone: brand yellow carries the event name, plain white carries the chapter, and the date sits on a soft translucent band so it stays legible over the busiest part of the image.",
    imageCaption:
      "Atmosphere 9.9 Chapter Two — the winged eagle mark over a violet nebula, the date on a translucent band, and the theme 'Freedom' set in brand yellow.",
    category: "design",
    year: "2020",
    role: "Poster design",
    image: "/projects/atmosphere_chapter2.png",
    aspect: "1 / 1",
    stack: ["Adobe Photoshop", "Adobe Illustrator", "Composition", "Typography"],
    highlights: [
      "Logo integrated into the artwork rather than pasted over it",
      "Two-tone hierarchy: yellow for the event, white for the chapter",
      "Translucent band keeps the date readable over a busy background",
      "Square format cut for the Facebook and Instagram feed",
    ],
  },
  {
    slug: "crmi-discover-your-purpose",
    name: "Discover Your Purpose",
    client: "CRMI Livestream · Ev. Robert Yewu",
    summary: "A weekly livestream poster built to survive being scrolled past.",
    description:
      "A recurring poster for CRMI's Sunday livestream with Ev. Robert Yewu. The brief is the hardest kind in social design: the same event, every week, without becoming wallpaper. The answer is a fixed skeleton with one loud variable — the message locks into the upper left as heavy yellow display type over a soft, desaturated photographic wash, with overlapping translucent circles adding depth without pulling focus. The practical information — Facebook Live, the channel, and the 4:00–5:00PM Sunday slot — is quarantined into a black wave at the base and a cream card at the right, so the schedule is findable without ever competing with the headline.",
    imageCaption:
      "The CRMI livestream poster — 'Discover Your Purpose Through The Word Of God' in heavy yellow display type, with the Sunday 4–5PM slot boxed on a cream card below.",
    category: "design",
    year: "2020",
    role: "Poster and social design",
    image: "/projects/crmi_purpose_poster.jpg",
    aspect: "1 / 1",
    stack: ["Adobe Photoshop", "Adobe Illustrator", "Layout", "Typography"],
    highlights: [
      "A repeatable skeleton with one variable — the weekly message",
      "Yellow display type over a desaturated photographic wash",
      "Schedule quarantined into its own card so it never fights the headline",
      "Designed for the Facebook feed crop first",
    ],
  },
  {
    slug: "yewu-quote-card",
    name: "Speaker Quote Card",
    client: "Ev. Robert Yewu",
    summary: "A cut-out quote card for a speaker's social channels.",
    description:
      "A landscape quote card built around a single line — 'Success is not something you get but something you make.' The speaker is cut out of a stage frame and placed hard against the left edge so his raised hand points into the empty space where the quote lives. The quote is set in wide-tracked light capitals so it reads as a statement rather than a caption, overlapping translucent circles in muted blue and cream carry the background without introducing a second colour story, and the follow row along the base collects Facebook, YouTube, Instagram and Twitter into one line so the card works as a standalone share.",
    imageCaption:
      "Quote card for Ev. Robert Yewu — the speaker cut out at the left, wide-tracked capitals carrying the quote, and social handles collected along the base.",
    category: "design",
    year: "2020",
    role: "Social design",
    image: "/projects/yewu_quote_card.jpg",
    aspect: "2181 / 1380",
    stack: ["Adobe Photoshop", "Cut-out compositing", "Typography"],
    highlights: [
      "Subject cut out and posed so the gesture leads into the quote",
      "Wide-tracked light capitals give the line weight without shouting",
      "Muted circle field carries depth without a competing colour",
      "Social handles consolidated into a single base row",
    ],
  },
];

export function getProject(slug: string): Project | undefined {
  return projects.find((p) => p.slug === slug);
}

export const featuredProjects = projects.filter((p) => p.featured);

/** Neighbouring projects for the prev/next control on a project page. */
export function projectNeighbours(slug: string) {
  const i = projects.findIndex((p) => p.slug === slug);
  if (i === -1) return { previous: undefined, next: undefined };
  return {
    previous: i > 0 ? projects[i - 1] : projects[projects.length - 1],
    next: i < projects.length - 1 ? projects[i + 1] : projects[0],
  };
}
