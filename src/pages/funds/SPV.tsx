import { PageHero } from "@/components/common/PageHero";
import { Reveal } from "@/components/common/Reveal";
import { ButtonLink } from "@/components/common/Button";
import { RiskDisclosure } from "@/components/common/Disclosures";
import { Seo } from "@/components/common/Seo";

const partners = [
  {
    title: "Aligned Capital Partners",
    body: "We invest alongside our partners — not just as a lender or a passive equity source.",
  },
  {
    title: "Flexible Structures",
    body: "JV, SPV, or trust-based arrangements tailored to the asset, the risk profile, and the return expectations.",
  },
  {
    title: "Long-Term Relationships",
    body: "We build for the long run — our returns are tied to the success of the asset and the partnership.",
  },
  {
    title: "Execution Certainty",
    body: "Capital committed upfront with clear drawdown schedules and no conditionality surprises.",
  },
];

export default function SPV() {
  return (
    <>
      <Seo
        title="SPV"
        description="Standalone structures for developers and co-investors seeking aligned capital partners."
      />
      <PageHero
        eyebrow="SPV"
        title="Capital built around the deal."
        subtitle="Tailored SPV structures for developers, asset owners, and strategic co-investors who want a capital partner, not a transactional lender."
      />

      <section className="section-pad bg-ivory">
        <div className="container-tb">
          <Reveal>
            <p className="eyebrow mb-6">What we offer</p>
            <h2 className="display-2 mb-14 text-balance">
              Built for the long run.
            </h2>
          </Reveal>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {partners.map((p, i) => (
              <Reveal key={p.title} delay={i * 0.05}>
                <article className="h-full p-8 bg-paper border border-border rounded-[12px]">
                  <span className="text-xs font-mono text-crimson-500 mb-4 block">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <h3 className="font-display text-xl text-charcoal mb-3">{p.title}</h3>
                  <p className="text-sm text-slate leading-relaxed">{p.body}</p>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="section-pad bg-stone">
        <div className="container-tb">
          <Reveal>
            <p className="eyebrow mb-6">Why partner with us</p>
            <h2 className="display-2 mb-14 text-balance">Aligned. Experienced. Decisive.</h2>
          </Reveal>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-x-10 gap-y-12 border-t border-border pt-12">
            {[
              {
                title: "Deep sector experience",
                body: "Three decades of real estate investing across cycles, geographies, and asset classes.",
              },
              {
                title: "Operational involvement",
                body: "We go beyond capital — providing strategic guidance, oversight, and active value creation.",
              },
              {
                title: "Speed and certainty",
                body: "Clear terms, committed capital, and structured drawdowns — no ambiguity at closing.",
              },
            ].map((item, i) => (
              <Reveal key={item.title} delay={i * 0.05}>
                <h3 className="font-display text-xl text-charcoal mb-3">{item.title}</h3>
                <p className="text-sm leading-relaxed text-slate">{item.body}</p>
              </Reveal>
            ))}
          </div>
          <div className="mt-12">
            <ButtonLink to="/contact" variant="primary">
              Discuss a partnership
            </ButtonLink>
          </div>
        </div>
      </section>

      <RiskDisclosure />
    </>
  );
}
