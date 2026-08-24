import Link from "next/link";
import { ArrowUpRight, Mail, MapPin, Phone } from "lucide-react";

import { socialIcon } from "@/components/icons";
import { navigation, site } from "@/data/site";

export function SiteFooter() {
  const year = new Date().getFullYear();

  return (
    <footer className="relative z-10 mt-28 border-t border-white/10 bg-ink-2/60 backdrop-blur-sm">
      <div className="shell py-16">
        <div className="grid gap-12 md:grid-cols-[1.4fr_1fr_1fr]">
          <div>
            <p className="font-display text-2xl font-light text-white">
              studio<span className="font-semibold text-accent">Frank</span>
            </p>
            <p className="mt-4 max-w-sm text-sm leading-relaxed text-white/55">
              {site.tagline} Built by {site.owner} — {site.creed.toLowerCase()}
            </p>
            <div className="mt-6 flex flex-wrap gap-2">
              {site.socials.map((s) => {
                const Icon = socialIcon(s.icon);
                return (
                  <a
                    key={s.label}
                    href={s.href}
                    target="_blank"
                    rel="noreferrer noopener"
                    aria-label={s.label}
                    title={s.label}
                    className="inline-flex size-10 items-center justify-center rounded-full border border-white/12 text-white/60 transition-all hover:-translate-y-0.5 hover:border-accent hover:text-accent"
                  >
                    <Icon className="size-4" />
                  </a>
                );
              })}
            </div>
          </div>

          <nav aria-label="Footer">
            <h2 className="font-display text-xs font-semibold uppercase tracking-[0.2em] text-white/40">
              Navigate
            </h2>
            <ul className="mt-5 space-y-3">
              {navigation.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="text-sm text-white/60 transition-colors hover:text-accent"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <div>
            <h2 className="font-display text-xs font-semibold uppercase tracking-[0.2em] text-white/40">
              Reach me
            </h2>
            <ul className="mt-5 space-y-3 text-sm">
              <li>
                <a
                  href={`mailto:${site.email}`}
                  className="inline-flex items-center gap-2 text-white/60 transition-colors hover:text-accent"
                >
                  <Mail className="size-4 shrink-0" />
                  {site.email}
                </a>
              </li>
              <li>
                <a
                  href={site.phoneHref}
                  className="inline-flex items-center gap-2 text-white/60 transition-colors hover:text-accent"
                >
                  <Phone className="size-4 shrink-0" />
                  {site.phone}
                </a>
              </li>
              <li className="inline-flex items-center gap-2 text-white/60">
                <MapPin className="size-4 shrink-0" />
                {site.locale}
              </li>
            </ul>
            <a
              href={site.whatsapp}
              target="_blank"
              rel="noreferrer noopener"
              className="mt-6 inline-flex items-center gap-1.5 text-sm font-semibold text-accent hover:underline"
            >
              Message on WhatsApp <ArrowUpRight className="size-4" />
            </a>
          </div>
        </div>

        <div className="mt-14 flex flex-col gap-3 border-t border-white/8 pt-6 text-xs text-white/35 sm:flex-row sm:items-center sm:justify-between">
          <p>© {year} studioFrank · All rights reserved.</p>
          <p>Next.js · TypeScript · Tailwind CSS</p>
        </div>
      </div>
    </footer>
  );
}
