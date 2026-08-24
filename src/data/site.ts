export const CAREER_START_YEAR = 2019;

/** Years of professional experience, recalculated on every render. */
export function yearsOfExperience(now: Date = new Date()): number {
  return Math.max(1, now.getFullYear() - CAREER_START_YEAR);
}

export const site = {
  name: "studioFrank",
  owner: "Frank Ivan Kyakusse",
  role: "Frontend Engineer & Product Designer",
  url: "https://www.frankkyakusse.com",
  locale: "Kampala, Uganda · working worldwide",
  tagline: "I build seamless interfaces for web, mobile and trading products.",
  creed: "Minimalism is the new complexity.",
  description:
    "Frank Ivan Kyakusse designs and builds fast, minimal, production-grade interfaces for web, mobile and trading products — from landing pages to live AI trading terminals.",
  email: "kyakivanfrank@gmail.com",
  phone: "+256 708 481 316",
  phoneHref: "tel:+256708481316",
  whatsapp:
    "https://wa.me/256708481316?text=Hi%20Frank%2C%20I%20found%20studioFrank%20and%20I%27d%20like%20to%20talk%20about%20a%20project.",
  socials: [
    { label: "GitHub", href: "https://github.com/kyakivanfrank", icon: "github" },
    { label: "LinkedIn", href: "https://www.linkedin.com/in/FrankIvanKyakusse", icon: "linkedin" },
    { label: "X (Twitter)", href: "https://twitter.com/chaku_ii", icon: "x" },
    { label: "Facebook", href: "https://www.facebook.com/frankIvanplusplus/", icon: "facebook" },
    { label: "WhatsApp", href: "https://wa.me/256708481316", icon: "whatsapp" },
  ],
} as const;

export const navigation = [
  { href: "/", label: "Home" },
  { href: "/portfolio", label: "Work" },
  { href: "/services", label: "Services" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
] as const;

/** Ventures that sit next to the client work — things Frank runs himself. */
export const ventures = [
  {
    name: "studioFRANK Fx",
    href: "https://www.studiofrankfx.com/",
    blurb:
      "A gold-scalping signals desk run on Telegram — the trading practice that feeds every fintech interface on this site.",
    accent: "#ffe600",
  },
  {
    name: "RentFlip",
    href: "https://rentflip.app/",
    blurb:
      "A rent verification and digital-evidence ledger for landlords and tenants in Uganda. Log a payment, get it verified, keep the receipt.",
    accent: "#3e5eea",
  },
] as const;
