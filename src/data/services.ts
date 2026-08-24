import type { LucideIcon } from "lucide-react";
import { Monitor, Smartphone, PenTool, LineChart } from "lucide-react";

export type Service = {
  id: string;
  title: string;
  icon: LucideIcon;
  pitch: string;
  deliverables: string[];
  /** Typical turnaround, so nobody has to ask. */
  timeline: string;
};

export const services: Service[] = [
  {
    id: "web",
    title: "Web",
    icon: Monitor,
    pitch:
      "Landing pages and marketing sites that load fast, read clearly and turn a visitor into a message.",
    deliverables: [
      "Landing pages built to convert, not just to exist",
      "Responsive from 320px to ultrawide",
      "SEO, metadata and social cards done properly",
      "Core Web Vitals in the green on real mobile data",
    ],
    timeline: "1–3 weeks",
  },
  {
    id: "apps",
    title: "Apps",
    icon: Smartphone,
    pitch:
      "Web and mobile applications where state, speed and offline behaviour actually matter.",
    deliverables: [
      "Android and iOS via installable PWAs or Flutter",
      "Navigation a first-time user gets on the first try",
      "Offline-tolerant, built for intermittent data",
      "Simple to extend — scalable component systems",
    ],
    timeline: "3–8 weeks",
  },
  {
    id: "fintech",
    title: "Trading & Fintech Interfaces",
    icon: LineChart,
    pitch:
      "Dashboards, terminals and journals for money in motion — built by someone who also trades.",
    deliverables: [
      "Live dashboards: P&L, equity curves, execution logs",
      "Dense numeric layouts that stay readable on a phone",
      "Realtime feeds, alerting and Telegram integration",
      "Subscription tiers, referrals and local payment rails",
    ],
    timeline: "4–10 weeks",
  },
  {
    id: "design",
    title: "Design",
    icon: PenTool,
    pitch:
      "Posters, social artwork and brand pieces that say one thing loudly and everything else quietly.",
    deliverables: [
      "Event posters and campaign artwork",
      "Social templates you can reuse every week",
      "Colour, type and texture chosen for the platform crop",
      "Straight to the point — fully communicative, never busy",
    ],
    timeline: "2–5 days",
  },
];

export type ProcessStep = { step: string; title: string; body: string };

export const process: ProcessStep[] = [
  {
    step: "01",
    title: "Understand",
    body: "A short call about who this is for and what a win looks like. No brief template, no discovery theatre — just the actual constraint.",
  },
  {
    step: "02",
    title: "Shape",
    body: "Structure and wireframes before pixels. We agree on what each screen has to do before anything gets decorated.",
  },
  {
    step: "03",
    title: "Build",
    body: "Typed, component-driven code with a live preview URL from day one. You watch it happen instead of waiting for a reveal.",
  },
  {
    step: "04",
    title: "Ship & hold",
    body: "Deploy, measure, tune. Metadata, performance and analytics are part of the handover, not an upsell.",
  },
];
