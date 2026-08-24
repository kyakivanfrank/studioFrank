import type { Metadata } from "next";

import { PortfolioGallery } from "@/components/portfolio-gallery";
import { ButtonLink, Eyebrow } from "@/components/ui";
import { projects } from "@/data/projects";
import { site } from "@/data/site";

export const metadata: Metadata = {
  title: "Work",
  description:
    "Selected work by Frank Ivan Kyakusse — trading platforms, web apps, client websites and graphic design out of Kampala, Uganda.",
  alternates: { canonical: "/portfolio" },
  openGraph: {
    title: `Work · ${site.name}`,
    description:
      "Trading platforms, web apps, client websites and graphic design by Frank Ivan Kyakusse.",
    url: "/portfolio",
  },
};

export default function PortfolioPage() {
  return (
    <>
      <section className="shell pt-36 pb-12 md:pt-44">
        <Eyebrow>Portfolio</Eyebrow>
        <h1 className="mt-5 max-w-3xl font-display text-4xl font-light leading-[1.05] sm:text-5xl md:text-6xl">
          {projects.length} projects, and what each one had to solve
        </h1>
        <p className="mt-6 max-w-2xl text-lg leading-relaxed text-white/60">
          Every entry below is a real thing that shipped — for a client, or for me. Open one and
          you get the actual brief, the constraint that shaped it, and where to go and use it.
        </p>
      </section>

      <section className="shell pb-24">
        <PortfolioGallery projects={projects} />
      </section>

      <section className="shell pb-8">
        <div className="card flex flex-col items-center gap-6 px-6 py-12 text-center md:flex-row md:justify-between md:text-left">
          <div>
            <h2 className="font-display text-2xl font-light md:text-3xl">
              Yours could be the next one on this page.
            </h2>
            <p className="mt-2 text-sm text-white/55">
              Web, mobile, fintech interfaces or design — same standard either way.
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
