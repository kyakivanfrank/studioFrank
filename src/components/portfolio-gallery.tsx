"use client";

import { useMemo, useState } from "react";

import { ProjectCard } from "@/components/project-card";
import { cn } from "@/lib/utils";
import { categories, type Category, type Project } from "@/data/projects";

export function PortfolioGallery({ projects }: { projects: Project[] }) {
  const [active, setActive] = useState<Category | "all">("all");

  const shown = useMemo(
    () => (active === "all" ? projects : projects.filter((p) => p.category === active)),
    [active, projects],
  );

  const current = categories.find((c) => c.id === active);

  const countFor = (id: Category | "all") =>
    id === "all" ? projects.length : projects.filter((p) => p.category === id).length;

  return (
    <div>
      <div
        role="tablist"
        aria-label="Filter projects by type"
        className="flex flex-wrap gap-2 border-b border-white/8 pb-6"
      >
        {categories.map((c) => {
          const selected = active === c.id;
          return (
            <button
              key={c.id}
              type="button"
              role="tab"
              aria-selected={selected}
              onClick={() => setActive(c.id)}
              className={cn(
                "inline-flex items-center gap-2 rounded-full border px-4 py-2 text-sm font-medium transition-all",
                selected
                  ? "border-accent bg-accent text-black"
                  : "border-white/12 text-white/60 hover:border-white/30 hover:text-white",
              )}
            >
              {c.label}
              <span
                className={cn(
                  "rounded-full px-1.5 py-0.5 text-[10px] font-bold tabular-nums",
                  selected ? "bg-black/15 text-black" : "bg-white/8 text-white/50",
                )}
              >
                {countFor(c.id)}
              </span>
            </button>
          );
        })}
      </div>

      {current?.blurb && (
        <p className="mt-6 max-w-2xl text-sm text-white/50">{current.blurb}</p>
      )}

      {shown.length === 0 ? (
        <p className="mt-16 text-center text-white/40">Nothing here yet — check back shortly.</p>
      ) : (
        <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {shown.map((project, i) => (
            <ProjectCard
              key={project.slug}
              project={project}
              priority={i < 3}
              className="animate-rise"
            />
          ))}
        </div>
      )}
    </div>
  );
}
