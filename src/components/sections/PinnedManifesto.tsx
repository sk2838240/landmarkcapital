import { Reveal } from "@/components/common/Reveal";

export function PinnedManifesto() {
  return (
    <section className="section-pad surface-ivory border-b border-border">
      <div className="container-tb max-w-4xl">
        <Reveal>
          <div className="accent-bar-bronze mb-8" />
          <p className="eyebrow-accent mb-6">Select. Structure. Deliver.</p>
          <p className="text-lg lg:text-xl text-charcoal/85 leading-relaxed text-pretty">
            Landmark Capital originates and structures select real estate opportunities with a
            singular focus on investor alignment and long-term value creation rather than
            predefined fund constraints. Each investment is independently underwritten and
            presented on its own merits, with an emphasis on institutional discipline, robust
            structuring, and consistent long-term value creation.
          </p>
        </Reveal>
      </div>
    </section>
  );
}
