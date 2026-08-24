import type { Metadata } from "next";
import Image from "next/image";

import { ButtonLink, Eyebrow, SectionHeading, StackChip, Stat } from "@/components/ui";
import { projects } from "@/data/projects";
import { CAREER_START_YEAR, site, yearsOfExperience } from "@/data/site";

export const metadata: Metadata = {
  title: "About",
  description:
    "Frank Ivan Kyakusse — frontend engineer and designer in Kampala, Uganda, building web, mobile and trading interfaces since 2019.",
  alternates: { canonical: "/about" },
  openGraph: {
    title: `About · ${site.name}`,
    description:
      "Frank Ivan Kyakusse — frontend engineer and designer building web, mobile and trading interfaces since 2019.",
    url: "/about",
  },
};

const PRINCIPLES = [
  {
    title: "One button, many jobs",
    body: "A single control can unravel different features in different contexts. That is what keeps a UI clean while it scales — not fewer features, fewer elements.",
  },
  {
    title: "Fast on a bad connection",
    body: "Most of the people using what I build are on mobile data in Kampala, not fibre in a studio. If it is not fast there, it is not fast.",
  },
  {
    title: "Ship, then sharpen",
    body: "A live URL on day one beats a perfect mockup in month two. Everything after that is measured, not argued about.",
  },
  {
    title: "Design and code are one job",
    body: "I do both, which means nothing gets lost in the handover — because there isn't one.",
  },
];

const TIMELINE = [
  {
    year: "2019",
    title: "First client, first shipped site",
    body: "Gladstep Junior School — hand-written HTML and CSS, no framework, every layout worked out by hand. The habits started here.",
  },
  {
    year: "2020",
    title: "studioFrank, and the design half",
    body: "React took over the builds, and posters and social artwork for CRMI and Atmosphere Ug ran alongside them. studioFrank became the name for both.",
  },
  {
    year: "2021 — 2023",
    title: "Client work at pace",
    body: "Buyanga Dairy Farm, Star Dental Services, the Ndongo music platform, Sonko Portraiture. Different industries, same discipline.",
  },
  {
    year: "2024",
    title: "Into the markets",
    body: "studioFRANK Fx started as a gold-scalping desk on Telegram. Trading taught me what a numeric interface has to do in the first half-second.",
  },
  {
    year: "2025 — now",
    title: "Building products, not just pages",
    body: "PhantomPip for a client, the Compounding Journal and RentFlip for myself. Real products with users, state and money in them.",
  },
];

const TOOLS = [
  "Next.js",
  "React",
  "TypeScript",
  "JavaScript",
  "Tailwind CSS",
  "Flutter",
  "Firebase",
  "Figma",
  "Adobe Photoshop",
  "Adobe Illustrator",
  "Git",
  "Vercel",
];

export default function AboutPage() {
  const years = yearsOfExperience();

  return (
    <>
      <section className="shell pt-36 pb-16 md:pt-44">
        <div className="grid items-start gap-14 lg:grid-cols-[1fr_1.25fr]">
          <div className="relative mx-auto w-full max-w-sm lg:sticky lg:top-28">
            <div
              aria-hidden
              className="absolute -inset-3 -z-10 rounded-3xl bg-accent/10 blur-2xl"
            />
            <div className="relative aspect-[4/5] overflow-hidden rounded-2xl border border-white/12">
              <Image
                src="/images/frank.png"
                alt={`${site.owner}, frontend engineer and designer`}
                fill
                priority
                sizes="(min-width: 1024px) 380px, 90vw"
                className="object-cover object-top"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-ink/80 via-transparent to-transparent" />
            </div>
            <p className="mt-4 text-xs leading-relaxed text-white/40">
              {site.owner} — {site.role}, working out of {site.locale.split(" · ")[0]}.
            </p>
          </div>

          <div>
            <Eyebrow>About</Eyebrow>
            <h1 className="mt-5 font-display text-4xl font-light leading-[1.05] sm:text-5xl md:text-6xl">
              Hi, I&rsquo;m <span className="text-accent">Frank</span> — and studioFrank is
              where I put the work.
            </h1>

            <div className="mt-8 space-y-5 text-base leading-[1.85] text-white/70">
              <p>
                I&rsquo;m a frontend engineer and designer. I have been building professionally
                since {CAREER_START_YEAR} — {years} years now — and studio<b>Frank</b> is the
                name I ship under, whether the job is a landing page, a mobile product or a live
                trading terminal.
              </p>
              <p>
                What I care about is sleek but wholly inclusive design. In this era,{" "}
                <strong className="font-semibold text-cream">
                  minimalism is the new complexity.
                </strong>{" "}
                What matters is that a platform meets every use case it needs to without
                excessive UI elements. A single button can unravel different features in
                different scenarios, leading to a clean and scalable interface. That is what I
                aim for.
              </p>
              <p>
                The unusual part of my background is the trading. I run{" "}
                <a
                  href="https://www.studiofrankfx.com/"
                  target="_blank"
                  rel="noreferrer noopener"
                  className="text-cream underline decoration-accent/40 underline-offset-4 hover:decoration-accent"
                >
                  studioFRANK Fx
                </a>
                , a gold-scalping desk, which means when a client asks for a dashboard with P&amp;L
                and an equity curve on it, I am not guessing at what a trader needs to see. I have
                needed to see it.
              </p>
            </div>

            <dl className="mt-12 grid grid-cols-2 gap-8 border-t border-white/10 pt-8 sm:grid-cols-4">
              <Stat value={`${years}+`} label="Years shipping" />
              <Stat value={`${projects.length}`} label="Projects here" />
              <Stat value="4" label="Live products" />
              <Stat value="2" label="Own ventures" />
            </dl>
          </div>
        </div>
      </section>

      <section className="shell py-16 md:py-24">
        <SectionHeading eyebrow="How I work" title="Four things I hold to" />
        <div className="mt-12 grid gap-5 md:grid-cols-2">
          {PRINCIPLES.map((p) => (
            <div key={p.title} className="card p-7">
              <h3 className="font-display text-xl font-medium text-white">{p.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-white/60">{p.body}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="shell py-16 md:py-24">
        <SectionHeading eyebrow="The road so far" title={`${CAREER_START_YEAR} to now`} />
        <ol className="mt-14 space-y-0">
          {TIMELINE.map((item, i) => (
            <li
              key={item.year}
              className="group relative grid gap-2 border-l border-white/12 pb-10 pl-8 last:pb-0 md:grid-cols-[8rem_1fr] md:gap-8"
            >
              <span
                aria-hidden
                className="absolute -left-[5px] top-1.5 size-2.5 rounded-full bg-accent ring-4 ring-ink"
              />
              <span className="font-display text-sm font-semibold uppercase tracking-[0.14em] text-accent">
                {item.year}
              </span>
              <div>
                <h3 className="font-display text-xl font-medium text-white">{item.title}</h3>
                <p className="mt-2 max-w-xl text-sm leading-relaxed text-white/60">{item.body}</p>
              </div>
              {i === TIMELINE.length - 1 && (
                <span aria-hidden className="absolute -left-px bottom-0 h-8 w-px bg-ink" />
              )}
            </li>
          ))}
        </ol>
      </section>

      <section className="shell py-16">
        <SectionHeading eyebrow="Toolbox" title="What I reach for" />
        <div className="mt-8 flex flex-wrap gap-2.5">
          {TOOLS.map((tool) => (
            <StackChip key={tool} name={tool} className="py-2 text-sm" />
          ))}
        </div>
      </section>

      <section className="shell pb-8">
        <div className="card flex flex-col items-center gap-6 px-6 py-12 text-center md:flex-row md:justify-between md:text-left">
          <div>
            <h2 className="font-display text-2xl font-light md:text-3xl">
              Have a look at what I&rsquo;ve built.
            </h2>
            <p className="mt-2 text-sm text-white/55">
              You never know — something might catch your attention.
            </p>
          </div>
          <ButtonLink href="/portfolio" className="shrink-0">
            See the portfolio
          </ButtonLink>
        </div>
      </section>
    </>
  );
}
