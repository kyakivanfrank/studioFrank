import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, ArrowRight, ArrowUpRight, Check } from "lucide-react";

import { ProjectCover } from "@/components/project-cover";
import { ButtonLink, Eyebrow, StackChip } from "@/components/ui";
import { cn } from "@/lib/utils";
import { getProject, projectNeighbours, projects } from "@/data/projects";
import { site } from "@/data/site";

type Params = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: Params): Promise<Metadata> {
  const { slug } = await params;
  const project = getProject(slug);
  if (!project) return { title: "Project not found" };

  return {
    title: project.name,
    description: project.summary,
    alternates: { canonical: `/portfolio/${project.slug}` },
    openGraph: {
      title: `${project.name} · ${site.name}`,
      description: project.summary,
      url: `/portfolio/${project.slug}`,
      images: [{ url: project.image ?? "/og.png", alt: project.imageCaption }],
    },
    twitter: {
      card: "summary_large_image",
      title: `${project.name} · ${site.name}`,
      description: project.summary,
      images: [project.image ?? "/og.png"],
    },
  };
}

export default async function ProjectPage({ params }: Params) {
  const { slug } = await params;
  const project = getProject(slug);
  if (!project) notFound();

  const { previous, next } = projectNeighbours(project.slug);

  const facts = [
    { label: "Year", value: project.year },
    { label: "Role", value: project.role },
    ...(project.client ? [{ label: "Client", value: project.client }] : []),
  ];

  return (
    <>
      <article className="shell pt-32 md:pt-40">
        <Link
          href="/portfolio"
          className="group inline-flex items-center gap-2 text-sm text-white/50 transition-colors hover:text-accent"
        >
          <ArrowLeft className="size-4 transition-transform group-hover:-translate-x-0.5" />
          All work
        </Link>

        <header className="mt-8 max-w-3xl">
          <Eyebrow>{project.client ?? "Own product"}</Eyebrow>
          <h1 className="mt-5 font-display text-4xl font-light leading-[1.05] sm:text-5xl md:text-6xl">
            {project.name}
          </h1>
          <p className="mt-5 text-lg leading-relaxed text-white/65">{project.summary}</p>

          {project.live && (
            <div className="mt-8">
              <ButtonLink href={project.live.href} external>
                Visit {project.live.label}
              </ButtonLink>
            </div>
          )}
        </header>

        {/* The image, and an explicit caption saying what it shows. */}
        <figure className="mt-14">
          <div
            // Each image is framed in its own natural ratio, so nothing is cropped:
            // the square posters stay square, the wide screenshots stay wide.
            // Tall artwork is width-capped so it does not swallow the viewport.
            className={cn(
              "relative w-full overflow-hidden rounded-2xl border border-white/10 bg-ink-3",
              project.category === "design" && "mx-auto max-w-2xl",
            )}
            style={{ aspectRatio: project.aspect ?? "16 / 10" }}
          >
            <ProjectCover project={project} priority sizes="(min-width: 1280px) 1200px, 100vw" />
          </div>
          <figcaption className="mt-4 flex gap-3 text-sm leading-relaxed text-white/45">
            <span aria-hidden className="mt-2 h-px w-8 shrink-0 bg-accent/60" />
            {project.imageCaption}
          </figcaption>
        </figure>

        <div className="mt-16 grid gap-14 lg:grid-cols-[1.5fr_1fr] lg:gap-20">
          <div>
            <h2 className="font-display text-2xl font-light text-accent">The brief</h2>
            <p className="mt-5 text-base leading-[1.85] text-white/70">{project.description}</p>

            <h2 className="mt-14 font-display text-2xl font-light text-accent">
              What it does well
            </h2>
            <ul className="mt-6 space-y-4">
              {project.highlights.map((item) => (
                <li key={item} className="flex gap-3.5 text-white/70">
                  <Check className="mt-1 size-4 shrink-0 text-accent" strokeWidth={2.5} />
                  <span className="leading-relaxed">{item}</span>
                </li>
              ))}
            </ul>
          </div>

          <aside className="lg:sticky lg:top-28 lg:self-start">
            <div className="card p-6">
              <dl className="space-y-5">
                {facts.map((fact) => (
                  <div key={fact.label}>
                    <dt className="text-[11px] uppercase tracking-[0.18em] text-white/35">
                      {fact.label}
                    </dt>
                    <dd className="mt-1 text-sm text-white/80">{fact.value}</dd>
                  </div>
                ))}
              </dl>

              <div className="mt-7 border-t border-white/10 pt-6">
                <p className="text-[11px] uppercase tracking-[0.18em] text-white/35">Built with</p>
                <div className="mt-3.5 flex flex-wrap gap-2">
                  {project.stack.map((tech) => (
                    <StackChip key={tech} name={tech} />
                  ))}
                </div>
              </div>

              {project.live && (
                <a
                  href={project.live.href}
                  target="_blank"
                  rel="noreferrer noopener"
                  className="mt-7 inline-flex items-center gap-1.5 text-sm font-semibold text-accent hover:underline"
                >
                  {project.live.label} <ArrowUpRight className="size-4" />
                </a>
              )}
            </div>
          </aside>
        </div>
      </article>

      {/* Prev / next */}
      <nav aria-label="More projects" className="shell mt-24 grid gap-4 sm:grid-cols-2">
        {previous && (
          <Link href={`/portfolio/${previous.slug}`} className="card group p-6">
            <span className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.16em] text-white/35">
              <ArrowLeft className="size-3.5" /> Previous
            </span>
            <p className="mt-3 font-display text-xl text-white transition-colors group-hover:text-accent">
              {previous.name}
            </p>
          </Link>
        )}
        {next && (
          <Link href={`/portfolio/${next.slug}`} className="card group p-6 sm:text-right">
            <span className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.16em] text-white/35 sm:flex-row-reverse">
              <ArrowRight className="size-3.5" /> Next
            </span>
            <p className="mt-3 font-display text-xl text-white transition-colors group-hover:text-accent">
              {next.name}
            </p>
          </Link>
        )}
      </nav>

      <section className="shell mt-16">
        <div className="card flex flex-col items-center gap-6 px-6 py-12 text-center md:flex-row md:justify-between md:text-left">
          <div>
            <h2 className="font-display text-2xl font-light md:text-3xl">
              Need something in this shape?
            </h2>
            <p className="mt-2 text-sm text-white/55">
              {site.owner} · {site.locale}
            </p>
          </div>
          <ButtonLink href="/contact" className="shrink-0">
            Start a project
          </ButtonLink>
        </div>
      </section>
    </>
  );
}
