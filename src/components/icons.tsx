import type { ComponentType, SVGProps } from "react";
import {
  SiCss,
  SiFacebook,
  SiFigma,
  SiFirebase,
  SiFlutter,
  SiGit,
  SiGithub,
  SiGooglechrome,
  SiHtml5,
  SiJavascript,
  SiNetlify,
  SiNextdotjs,
  SiPwa,
  SiReact,
  SiShadcnui,
  SiTailwindcss,
  SiTelegram,
  SiTypescript,
  SiVercel,
  SiWhatsapp,
  SiX,
} from "react-icons/si";

type Icon = ComponentType<SVGProps<SVGSVGElement>>;

/**
 * LinkedIn is drawn locally: simple-icons dropped the Adobe and LinkedIn
 * glyphs, so anything they no longer ship either lives here or falls back
 * to a lettered badge.
 */
export function LinkedInIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" {...props}>
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
    </svg>
  );
}

const socialIcons: Record<string, Icon> = {
  github: SiGithub,
  linkedin: LinkedInIcon,
  x: SiX,
  facebook: SiFacebook,
  whatsapp: SiWhatsapp,
};

export function socialIcon(key: string): Icon {
  return socialIcons[key] ?? SiGooglechrome;
}

/** Brand marks for stack chips. Anything unmapped renders as a lettered badge. */
const techIcons: Record<string, { icon: Icon; color: string }> = {
  "next.js": { icon: SiNextdotjs, color: "#ffffff" },
  react: { icon: SiReact, color: "#61dafb" },
  typescript: { icon: SiTypescript, color: "#3178c6" },
  javascript: { icon: SiJavascript, color: "#f7df1e" },
  "tailwind css": { icon: SiTailwindcss, color: "#38bdf8" },
  flutter: { icon: SiFlutter, color: "#54c5f8" },
  firebase: { icon: SiFirebase, color: "#ffca28" },
  figma: { icon: SiFigma, color: "#f24e1e" },
  git: { icon: SiGit, color: "#f05032" },
  github: { icon: SiGithub, color: "#ffffff" },
  html: { icon: SiHtml5, color: "#e34f26" },
  css: { icon: SiCss, color: "#663399" },
  netlify: { icon: SiNetlify, color: "#00c7b7" },
  vercel: { icon: SiVercel, color: "#ffffff" },
  "shadcn/ui": { icon: SiShadcnui, color: "#ffffff" },
  pwa: { icon: SiPwa, color: "#5a0fc8" },
  "telegram api": { icon: SiTelegram, color: "#26a5e4" },
  telegram: { icon: SiTelegram, color: "#26a5e4" },
};

export function techIcon(name: string) {
  return techIcons[name.trim().toLowerCase()] ?? null;
}

/** Two-letter fallback badge, e.g. "Adobe Photoshop" -> "AP". */
export function initialsFor(name: string) {
  const words = name.replace(/[^\p{L}\p{N} ]/gu, " ").split(/\s+/).filter(Boolean);
  if (words.length === 0) return "··";
  if (words.length === 1) return words[0].slice(0, 2).toUpperCase();
  return (words[0][0] + words[1][0]).toUpperCase();
}
