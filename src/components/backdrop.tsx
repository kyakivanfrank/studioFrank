import Image from "next/image";

/**
 * The original site painted its background photograph straight onto <body>.
 * Same photograph, but pushed further back: a fixed layer behind a gradient
 * and a faint grid, so text never has to fight it for contrast.
 */
export function Backdrop() {
  return (
    <div aria-hidden className="pointer-events-none fixed inset-0 z-0 overflow-hidden">
      <Image
        src="/images/bg.png"
        alt=""
        fill
        priority
        sizes="100vw"
        className="object-cover opacity-[0.22]"
      />
      <div className="absolute inset-0 bg-[radial-gradient(120%_80%_at_50%_-10%,rgba(255,230,0,0.10),transparent_60%)]" />
      <div className="absolute inset-0 bg-gradient-to-b from-ink via-ink/85 to-ink" />
      <div
        className="absolute inset-0 opacity-[0.35]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,0.025) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.025) 1px, transparent 1px)",
          backgroundSize: "64px 64px",
          maskImage: "radial-gradient(90% 60% at 50% 0%, black, transparent 75%)",
        }}
      />
    </div>
  );
}
