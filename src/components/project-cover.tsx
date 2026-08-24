import Image from "next/image";

import { cn } from "@/lib/utils";
import type { Project } from "@/data/projects";

/**
 * Screenshot when there is one. The live products (PhantomPip, the
 * Compounding Journal, RentFlip, studioFRANK Fx) sit behind logins, so they
 * get a generated cover keyed to each product's own colour instead of a
 * misleading stock shot.
 *
 * `fit="contain"` is used wherever the frame is not the artwork's own shape —
 * a square poster must never be cropped to a landscape card.
 */
export function ProjectCover({
  project,
  priority,
  fit = "cover",
  sizes = "(min-width: 1024px) 45vw, 100vw",
  className,
}: {
  project: Project;
  priority?: boolean;
  fit?: "cover" | "contain";
  sizes?: string;
  className?: string;
}) {
  if (project.image) {
    return (
      <>
        {/* A blurred copy of the artwork fills the gaps when the frame and the
            image disagree, so a letterboxed poster still looks placed. */}
        {fit === "contain" && (
          <Image
            src={project.image}
            alt=""
            aria-hidden
            fill
            sizes={sizes}
            className="scale-125 object-cover opacity-25 blur-2xl"
          />
        )}
        <Image
          src={project.image}
          alt={project.imageCaption}
          fill
          sizes={sizes}
          priority={priority}
          className={cn(fit === "contain" ? "object-contain" : "object-cover", className)}
          style={{ objectPosition: project.focus ?? "center" }}
        />
      </>
    );
  }

  const [from, to] = project.gradient ?? ["#12121a", "#26262f"];

  return (
    <div
      role="img"
      aria-label={project.imageCaption}
      className={cn("absolute inset-0 overflow-hidden", className)}
      style={{ background: `linear-gradient(135deg, ${from} 0%, ${to} 100%)` }}
    >
      <div
        aria-hidden
        className="absolute inset-0 opacity-30"
        style={{
          backgroundImage: "radial-gradient(rgba(255,255,255,0.28) 1px, transparent 1px)",
          backgroundSize: "22px 22px",
        }}
      />
      <div
        aria-hidden
        className="absolute -right-6 -top-10 size-56 rounded-full blur-3xl"
        style={{ background: to, opacity: 0.55 }}
      />
      <span
        aria-hidden
        className="absolute bottom-3 left-5 select-none font-display text-[5.5rem] font-bold leading-none text-white/[0.09] md:text-[7rem]"
      >
        {project.name.split(" ")[0]}
      </span>
    </div>
  );
}
