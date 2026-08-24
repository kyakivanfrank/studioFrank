import type { Metadata } from "next";
import { ArrowUpRight, Clock, Mail, MapPin, Phone } from "lucide-react";
import { SiWhatsapp } from "react-icons/si";

import { socialIcon } from "@/components/icons";
import { Eyebrow } from "@/components/ui";
import { site } from "@/data/site";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Get in touch with Frank Ivan Kyakusse — email, phone, WhatsApp or socials. Based in Kampala, Uganda, working worldwide.",
  alternates: { canonical: "/contact" },
  openGraph: {
    title: `Contact · ${site.name}`,
    description: "Email, phone or WhatsApp Frank Ivan Kyakusse about your project.",
    url: "/contact",
  },
};

const CHANNELS = [
  {
    label: "Email",
    value: site.email,
    href: `mailto:${site.email}?subject=Project%20enquiry%20via%20studioFrank`,
    icon: Mail,
    note: "Best for detail — briefs, files, scope.",
    external: false,
  },
  {
    label: "WhatsApp",
    value: "+256 708 481 316",
    href: site.whatsapp,
    icon: SiWhatsapp,
    note: "Fastest route. Usually same day.",
    external: true,
  },
  {
    label: "Phone",
    value: site.phone,
    href: site.phoneHref,
    icon: Phone,
    note: "Calls welcome, 9am–7pm EAT.",
    external: false,
  },
];

export default function ContactPage() {
  return (
    <>
      <section className="shell pt-36 pb-16 md:pt-44">
        <div className="grid gap-14 lg:grid-cols-[1.1fr_1fr]">
          <div>
            <Eyebrow>Contact</Eyebrow>
            <h1 className="mt-5 font-display text-4xl font-light leading-[1.05] sm:text-5xl md:text-6xl">
              Tell me what you&rsquo;re building.
            </h1>
            <p className="mt-6 max-w-lg text-lg leading-relaxed text-white/60">
              A sentence is enough to start: what it is, who it&rsquo;s for, and when you need it
              live. I&rsquo;ll come back with what it takes and whether I&rsquo;m the right person
              for it.
            </p>

            <div className="mt-10 flex flex-wrap items-center gap-x-6 gap-y-3 text-sm text-white/50">
              <span className="inline-flex items-center gap-2">
                <MapPin className="size-4 text-accent" />
                {site.locale}
              </span>
              <span className="inline-flex items-center gap-2">
                <Clock className="size-4 text-accent" />
                Replies within a day
              </span>
            </div>

            <div className="mt-12">
              <p className="text-[11px] uppercase tracking-[0.18em] text-white/35">Elsewhere</p>
              <div className="mt-4 flex flex-wrap gap-2.5">
                {site.socials.map((s) => {
                  const Icon = socialIcon(s.icon);
                  return (
                    <a
                      key={s.label}
                      href={s.href}
                      target="_blank"
                      rel="noreferrer noopener"
                      className="inline-flex items-center gap-2 rounded-full border border-white/12 px-4 py-2.5 text-sm text-white/65 transition-all hover:-translate-y-0.5 hover:border-accent hover:text-accent"
                    >
                      <Icon className="size-4" />
                      {s.label}
                    </a>
                  );
                })}
              </div>
            </div>
          </div>

          <div className="space-y-4">
            {CHANNELS.map((c) => (
              <a
                key={c.label}
                href={c.href}
                target={c.external ? "_blank" : undefined}
                rel={c.external ? "noreferrer noopener" : undefined}
                className="card group flex items-center gap-5 p-6"
              >
                <span className="grid size-12 shrink-0 place-items-center rounded-full border border-white/12 text-accent transition-colors group-hover:border-accent group-hover:bg-accent group-hover:text-black">
                  <c.icon className="size-5" />
                </span>
                <span className="min-w-0 flex-1">
                  <span className="block text-[11px] uppercase tracking-[0.16em] text-white/35">
                    {c.label}
                  </span>
                  <span className="mt-0.5 block truncate font-display text-lg text-white transition-colors group-hover:text-accent">
                    {c.value}
                  </span>
                  <span className="mt-1 block text-xs text-white/45">{c.note}</span>
                </span>
                <ArrowUpRight className="size-5 shrink-0 text-white/25 transition-all group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-accent" />
              </a>
            ))}

            <div className="card p-6">
              <p className="text-sm leading-relaxed text-white/60">
                Working on something in trading or fintech? Mention it — that&rsquo;s the corner I
                know best, and the conversation gets shorter.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
