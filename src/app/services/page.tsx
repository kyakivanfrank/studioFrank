import type { Metadata } from "next";
import { Check, MessageCircle } from "lucide-react";

import { ButtonLink, Eyebrow, SectionHeading } from "@/components/ui";
import { process, services } from "@/data/services";
import { site } from "@/data/site";

export const metadata: Metadata = {
  title: "Services",
  description:
    "Web, apps, trading and fintech interfaces, and graphic design — what each engagement includes and how long it takes.",
  alternates: { canonical: "/services" },
  openGraph: {
    title: `Services · ${site.name}`,
    description:
      "Web, apps, trading and fintech interfaces, and graphic design by Frank Ivan Kyakusse.",
    url: "/services",
  },
};

export default function ServicesPage() {
  return (
    <>
      <section className="shell pt-36 pb-4 md:pt-44">
        <Eyebrow>Line of work</Eyebrow>
        <h1 className="mt-5 max-w-3xl font-display text-4xl font-light leading-[1.05] sm:text-5xl md:text-6xl">
          Four lanes. Each one ends in something shipped.
        </h1>
        <p className="mt-6 max-w-2xl text-lg leading-relaxed text-white/60">
          No packages, no tiers, no invented pricing. Tell me the scope and I&rsquo;ll quote it —
          what follows is what you actually get, and roughly how long it takes.
        </p>
      </section>

      <section className="shell py-16">
        <div className="grid gap-5 md:grid-cols-2">
          {services.map((service) => (
            <div key={service.id} className="card flex flex-col p-8">
              <div className="flex items-start justify-between gap-4">
                <service.icon className="size-8 text-accent" strokeWidth={1.5} />
                <span className="rounded-full border border-white/12 px-3 py-1 text-[11px] uppercase tracking-[0.14em] text-white/45">
                  {service.timeline}
                </span>
              </div>

              <h2 className="mt-6 font-display text-2xl font-medium">{service.title}</h2>
              <p className="mt-3 text-sm leading-relaxed text-white/60">{service.pitch}</p>

              <ul className="mt-7 flex-1 space-y-3 border-t border-white/8 pt-6">
                {service.deliverables.map((item) => (
                  <li key={item} className="flex gap-3 text-sm text-white/65">
                    <Check className="mt-0.5 size-4 shrink-0 text-accent" strokeWidth={2.5} />
                    <span className="leading-relaxed">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      <section className="shell py-16 md:py-24">
        <SectionHeading
          eyebrow="How it goes"
          title="Four steps, no surprises"
          lead="You see the thing being built the whole way through. There is no reveal at the end, because a reveal is just a late chance to find out it was wrong."
        />

        <ol className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {process.map((step) => (
            <li key={step.step} className="relative border-t border-white/12 pt-6">
              <span className="font-display text-5xl font-light text-accent/25">{step.step}</span>
              <h3 className="mt-3 font-display text-xl font-medium">{step.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-white/55">{step.body}</p>
            </li>
          ))}
        </ol>
      </section>

      <section className="shell pb-8">
        <div className="card relative overflow-hidden px-6 py-14 text-center md:px-16">
          <div
            aria-hidden
            className="absolute inset-0 bg-[radial-gradient(80%_120%_at_50%_0%,rgba(255,230,0,0.14),transparent_65%)]"
          />
          <div className="relative">
            <MessageCircle className="mx-auto size-8 text-accent" strokeWidth={1.5} />
            <h2 className="mx-auto mt-5 max-w-xl font-display text-3xl font-light leading-tight md:text-4xl">
              Not sure which lane it belongs in?
            </h2>
            <p className="mx-auto mt-4 max-w-md text-white/60">
              Describe it in a sentence. If it isn&rsquo;t something I should be building, I&rsquo;ll
              say so.
            </p>
            <div className="mt-8 flex flex-wrap justify-center gap-3">
              <ButtonLink href="/contact">Get in touch</ButtonLink>
              <ButtonLink href="/portfolio" variant="ghost">
                See references
              </ButtonLink>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
