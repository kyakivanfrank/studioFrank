import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, Sparkles } from "lucide-react";

import { ProjectCard } from "@/components/project-card";
import { ButtonLink, Eyebrow, SectionHeading, Stat, StackChip } from "@/components/ui";
import { featuredProjects, projects } from "@/data/projects";
import { services } from "@/data/services";
import { site, ventures, yearsOfExperience } from "@/data/site";

const STACK = [
  "Next.js",
  "React",
  "TypeScript",
  "Tailwind CSS",
  "Flutter",
  "Firebase",
  "Figma",
  "Git",
];

export default function HomePage() {
  const years = yearsOfExperience();

  return (
    <>
      {/* ---------------------------------------------------------------- */}
      {/* Hero                                                             */}
      {/* ---------------------------------------------------------------- */}
      <section className="shell relative pt-36 pb-20 md:pt-44 md:pb-28">
        <div className="grid items-center gap-14 lg:grid-cols-[1.15fr_1fr]">
          <div className="animate-rise">
            <Eyebrow>{site.locale}</Eyebrow>

            <h1 className="mt-6 font-display text-[2.6rem] font-light leading-[1.02] tracking-tight sm:text-6xl lg:text-7xl">
              I build{" "}
              <span className="font-semibold text-accent">seamless interfaces</span>{" "}
              for web, mobile and trading products.
            </h1>

            <p className="mt-7 max-w-xl text-lg leading-relaxed text-white/65">
              I&rsquo;m {site.owner} — a frontend engineer and designer with {years} years of
              shipping in JavaScript. From a school&rsquo;s first website to a live AI trading
              terminal, the brief is always the same: make it fast, make it obvious, ship it.
            </p>

            <p className="mt-5 inline-flex items-center gap-2 text-base font-medium text-cream">
              <Sparkles className="size-4 text-accent" />
              {site.creed}
            </p>

            <div className="mt-10 flex flex-wrap gap-3">
              <ButtonLink href="/contact">Start a project</ButtonLink>
              <ButtonLink href="/portfolio" variant="ghost">
                See the work
              </ButtonLink>
            </div>

            <dl className="mt-14 grid max-w-lg grid-cols-3 gap-6 border-t border-white/10 pt-8">
              <Stat value={`${years}+`} label="Years shipping" />
              <Stat value={`${projects.length}`} label="Projects here" />
              <Stat value="4" label="Live products" />
            </dl>
          </div>

          <div className="relative mx-auto w-full max-w-md lg:max-w-none">
            <div
              aria-hidden
              className="absolute inset-0 -z-10 rounded-full bg-accent/12 blur-3xl"
            />
            <Image
              src="/images/illustration.svg"
              alt="Illustration of Frank at a desk, building an interface"
              width={649}
              height={646}
              priority
              className="h-auto w-full drop-shadow-2xl"
            />
          </div>
        </div>
      </section>

      {/* ---------------------------------------------------------------- */}
      {/* Stack marquee                                                    */}
      {/* ---------------------------------------------------------------- */}
      <section aria-label="Tools I work in" className="border-y border-white/8 bg-ink-2/40 py-6">
        <div className="relative overflow-hidden [mask-image:linear-gradient(90deg,transparent,black_12%,black_88%,transparent)]">
          <div className="flex w-max animate-marquee gap-3 pr-3">
            {[...STACK, ...STACK].map((tech, i) => (
              <StackChip key={`${tech}-${i}`} name={tech} className="shrink-0 py-2 text-sm" />
            ))}
          </div>
        </div>
      </section>

      {/* ---------------------------------------------------------------- */}
      {/* Featured work                                                    */}
      {/* ---------------------------------------------------------------- */}
      <section className="shell py-24 md:py-32">
        <div className="flex flex-wrap items-end justify-between gap-6">
          <SectionHeading
            eyebrow="Selected work"
            title={
              <>
                Things that are <span className="text-accent">live</span> right now
              </>
            }
            lead="Four projects that show the range — a client trading platform, two of my own products, and a photographer's portfolio."
          />
          <Link
            href="/portfolio"
            className="group inline-flex items-center gap-1.5 text-sm font-semibold text-accent hover:underline"
          >
            All {projects.length} projects
            <ArrowUpRight className="size-4 transition-transform group-hover:translate-x-0.5" />
          </Link>
        </div>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {featuredProjects.map((project, i) => (
            <ProjectCard key={project.slug} project={project} priority={i < 2} />
          ))}
        </div>
      </section>

      {/* ---------------------------------------------------------------- */}
      {/* Services                                                         */}
      {/* ---------------------------------------------------------------- */}
      <section className="shell py-24 md:py-28">
        <SectionHeading
          eyebrow="Line of work"
          title="What you can hand me"
          lead="Four lanes. Every one of them ends in something deployed, measured and handed over."
        />

        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {services.map((service) => (
            <div key={service.id} className="card p-6">
              <service.icon className="size-7 text-accent" strokeWidth={1.5} />
              <h3 className="mt-5 font-display text-xl font-medium">{service.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-white/55">{service.pitch}</p>
              <p className="mt-5 text-[11px] uppercase tracking-[0.14em] text-white/30">
                {service.timeline}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-10">
          <ButtonLink href="/services" variant="ghost">
            See what each one includes
          </ButtonLink>
        </div>
      </section>

      {/* ---------------------------------------------------------------- */}
      {/* Ventures                                                         */}
      {/* ---------------------------------------------------------------- */}
      <section className="shell py-24 md:py-28">
        <SectionHeading
          eyebrow="Also mine"
          title="Two things I run, not just build"
          lead="Client work is only half of it. These are my own — and they are where the fintech and product instincts on this site come from."
        />

        <div className="mt-12 grid gap-5 md:grid-cols-2">
          {ventures.map((v) => (
            <a
              key={v.name}
              href={v.href}
              target="_blank"
              rel="noreferrer noopener"
              className="card group relative overflow-hidden p-8"
            >
              <span
                aria-hidden
                className="absolute -right-16 -top-16 size-48 rounded-full opacity-20 blur-3xl transition-opacity group-hover:opacity-40"
                style={{ background: v.accent }}
              />
              <div className="flex items-start justify-between gap-4">
                <h3 className="font-display text-2xl font-medium text-white">{v.name}</h3>
                <ArrowUpRight className="size-5 shrink-0 text-white/35 transition-all group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-accent" />
              </div>
              <p className="mt-3 max-w-md text-sm leading-relaxed text-white/60">{v.blurb}</p>
              <p className="mt-6 text-xs uppercase tracking-[0.16em] text-white/30">
                {v.href.replace(/^https?:\/\//, "").replace(/\/$/, "")}
              </p>
            </a>
          ))}
        </div>
      </section>

      {/* ---------------------------------------------------------------- */}
      {/* CTA                                                              */}
      {/* ---------------------------------------------------------------- */}
      <section className="shell pb-8">
        <div className="card relative overflow-hidden px-6 py-16 text-center md:px-16 md:py-20">
          <div
            aria-hidden
            className="absolute inset-0 bg-[radial-gradient(80%_120%_at_50%_0%,rgba(255,230,0,0.16),transparent_65%)]"
          />
          <div className="relative">
            <Eyebrow>Open for work</Eyebrow>
            <h2 className="mx-auto mt-5 max-w-2xl font-display text-3xl font-light leading-tight sm:text-4xl md:text-5xl">
              Got something that needs building properly?
            </h2>
            <p className="mx-auto mt-5 max-w-lg text-white/60">
              Tell me what it is and who it&rsquo;s for. I&rsquo;ll tell you what it takes — and
              whether I&rsquo;m the right person for it.
            </p>
            <div className="mt-9 flex flex-wrap justify-center gap-3">
              <ButtonLink href="/contact">Start a project</ButtonLink>
              <ButtonLink href={site.whatsapp} variant="ghost" external>
                WhatsApp me
              </ButtonLink>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
