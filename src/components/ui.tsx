import Link from "next/link";
import type { ReactNode } from "react";
import { ArrowUpRight } from "lucide-react";

import { initialsFor, techIcon } from "@/components/icons";
import { cn } from "@/lib/utils";

export function Eyebrow({ children }: { children: ReactNode }) {
  return (
    <span className="eyebrow">
      <span aria-hidden className="h-px w-6 bg-accent" />
      {children}
    </span>
  );
}

export function SectionHeading({
  eyebrow,
  title,
  lead,
  align = "left",
  className,
}: {
  eyebrow?: string;
  title: ReactNode;
  lead?: ReactNode;
  align?: "left" | "center";
  className?: string;
}) {
  return (
    <div
      className={cn(
        "max-w-2xl",
        align === "center" && "mx-auto text-center",
        className,
      )}
    >
      {eyebrow && <Eyebrow>{eyebrow}</Eyebrow>}
      <h2 className="mt-4 font-display text-3xl font-light leading-[1.1] sm:text-4xl md:text-5xl">
        {title}
      </h2>
      {lead && <p className="mt-5 text-base leading-relaxed text-white/60">{lead}</p>}
    </div>
  );
}

/** A stack chip that shows the real brand mark when one exists. */
export function StackChip({ name, className }: { name: string; className?: string }) {
  const brand = techIcon(name);
  return (
    <span
      className={cn(
        "inline-flex items-center gap-2 rounded-full border border-white/12 bg-white/[0.04] py-1.5 pl-2 pr-3.5 text-xs font-medium text-white/75",
        className,
      )}
    >
      {brand ? (
        <brand.icon className="size-3.5 shrink-0" style={{ color: brand.color }} />
      ) : (
        <span
          aria-hidden
          className="grid size-4 shrink-0 place-items-center rounded-[4px] bg-white/12 text-[8px] font-bold leading-none text-white/70"
        >
          {initialsFor(name)}
        </span>
      )}
      {name}
    </span>
  );
}

export function ButtonLink({
  href,
  children,
  variant = "primary",
  external,
  className,
}: {
  href: string;
  children: ReactNode;
  variant?: "primary" | "ghost";
  external?: boolean;
  className?: string;
}) {
  const styles = cn(
    "group inline-flex items-center justify-center gap-2 rounded-full px-6 py-3 text-sm font-semibold transition-all",
    variant === "primary"
      ? "bg-accent text-black hover:-translate-y-0.5 hover:shadow-glow"
      : "border border-white/18 text-white hover:border-accent hover:text-accent",
    className,
  );

  const inner = (
    <>
      {children}
      <ArrowUpRight className="size-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
    </>
  );

  if (external) {
    return (
      <a href={href} target="_blank" rel="noreferrer noopener" className={styles}>
        {inner}
      </a>
    );
  }

  return (
    <Link href={href} className={styles}>
      {inner}
    </Link>
  );
}

export function Stat({ value, label }: { value: string; label: string }) {
  return (
    <div>
      <p className="font-display text-4xl font-light text-accent md:text-5xl">{value}</p>
      <p className="mt-1 text-xs uppercase tracking-[0.16em] text-white/45">{label}</p>
    </div>
  );
}
