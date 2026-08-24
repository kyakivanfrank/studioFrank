import { ButtonLink, Eyebrow } from "@/components/ui";

export default function NotFound() {
  return (
    <section className="shell flex min-h-[70vh] flex-col items-center justify-center py-32 text-center">
      <Eyebrow>404</Eyebrow>
      <h1 className="mt-5 font-display text-5xl font-light leading-tight md:text-7xl">
        That page moved on.
      </h1>
      <p className="mt-5 max-w-md text-white/55">
        The old site kept its project views in modals with throwaway URLs. Every project now has a
        permanent one — start from the portfolio and you&rsquo;ll find it.
      </p>
      <div className="mt-9 flex flex-wrap justify-center gap-3">
        <ButtonLink href="/portfolio">Browse the work</ButtonLink>
        <ButtonLink href="/" variant="ghost">
          Back home
        </ButtonLink>
      </div>
    </section>
  );
}
