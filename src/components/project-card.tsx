import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

import { ProjectCover } from "@/components/project-cover";
import { cn } from "@/lib/utils";
import type { Project } from "@/data/projects";

const categoryLabel: Record<Project["category"], string> = {
  product: "Product",
  web: "Website",
  design: "Design",
};

export function ProjectCard({
  project,
  priority,
  className,
}: {
  project: Project;
  priority?: boolean;
  className?: string;
}) {
  return (
    <Link
      href={`/portfolio/${project.slug}`}
      className={cn(
        "card group flex flex-col overflow-hidden focus-visible:outline-none",
        className,
      )}
    >
      <div className="relative aspect-[16/10] overflow-hidden bg-ink-3">
        <ProjectCover
          project={project}
          priority={priority}
          // Posters are square or portrait; letterbox them rather than crop.
          fit={project.category === "design" ? "contain" : "cover"}
          sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
          className="transition-transform duration-700 group-hover:scale-[1.04]"
        />
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-ink via-ink/25 to-transparent opacity-80 transition-opacity group-hover:opacity-95" />

        <span className="absolute left-4 top-4 rounded-full border border-white/15 bg-black/55 px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.16em] text-white/80 backdrop-blur">
          {categoryLabel[project.category]}
        </span>

        <span className="absolute right-4 top-4 grid size-9 place-items-center rounded-full bg-accent text-black opacity-0 transition-all duration-300 group-hover:opacity-100 group-focus-visible:opacity-100">
          <ArrowUpRight className="size-4" />
        </span>
      </div>

      <div className="flex flex-1 flex-col p-5">
        <div className="flex items-baseline justify-between gap-3">
          <h3 className="font-display text-xl font-medium text-white transition-colors group-hover:text-accent">
            {project.name}
          </h3>
          <span className="shrink-0 text-xs text-white/35">{project.year}</span>
        </div>
        <p className="mt-2 flex-1 text-sm leading-relaxed text-white/55">{project.summary}</p>
        <p className="mt-4 text-[11px] uppercase tracking-[0.14em] text-white/30">
          {project.stack.slice(0, 3).join(" · ")}
        </p>
      </div>
    </Link>
  );
}
