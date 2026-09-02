import { PageHero } from "@/components/common/PageHero";
import { Reveal } from "@/components/common/Reveal";
import { ButtonLink } from "@/components/common/Button";
import { RiskDisclosure } from "@/components/common/Disclosures";
import { Seo, financialProductJsonLd } from "@/components/common/Seo";

const why = [
  {
    title: "Deal-Wise Capital & Structuring",
    body: "No blind pools — capital is deployed per transaction via standalone SPVs, JVs or trusts tailored to each asset.",
  },
  {
    title: "Flexible Commitment Sizes",
    body: "Invest at scales that suit the mandate — without arbitrary ticket-size floors.",
  },
  {
    title: "Proactive Origination",
    body: "Off-market, theme-aligned assets across logistics, industrial and related real estate.",
  },
  {
    title: "Defined Liquidity & Exit Planning",
    body: "Clear hold periods and transparent exit pathways support timely liquidity.",
  },
  {
    title: "Better Risk Appreciation",
    body: "Investors assess risk deal by deal, rather than through a blind pool.",
  },
  {
    title: "Profit-Sharing Alignment",
    body: "Zero upfront fees — economics tied to successful outcomes.",
  },
  {
    title: "Hands-On Management",
    body: "End-to-end diligence plus active asset oversight and value creation.",
  },
  {
    title: "Full Transparency",
    body: "Deal-level reporting keeps investors informed at every stage.",
  },
  {
    title: "Tactical Agility",
    body: "Ability to respond to emerging themes with appropriately structured vehicles.",
  },
];

const routes = [
  {
    title: "LVF (AIF Category II)",
    chip: "Larger ticket size",
    body: "Investors commit capital into a SEBI-regulated AIF that invests into project-level SPVs, maintaining regulatory compliance and pass-through status.",
    bullets: [
      "SEBI-regulated pathway for accredited investors, UHNIs, multi-family offices and global capital",
      "Investments made through an SPV",
      "Equity positions taken by Landmark Capital in each structure",
      "Large ticket size > ₹25 Cr",
      "Tenure 3 to 4 years",
    ],
  },
  {
    title: "AI Only Fund",
    chip: "Flexible ticket size",
    body: "AIF exclusively for accredited investors with relaxed norms and flexible private-market structuring.",
    bullets: [
      "SEBI-regulated AIF exclusively for accredited investors",
      "Investments made through SPVs",
      "Flexible ticket size (no ₹25 Cr LVF minimum)",
      "Tenure 3 to 4 years",
      "Suitable for sophisticated HNIs and family offices",
    ],
  },
  {
    title: "Direct SPV Route",
    chip: "Customised solutions",
    body: "Direct allotment of investment instruments in deal-specific SPVs for a more direct investment relationship.",
    bullets: [
      "Participation through an SPV created for each deal",
      "Pre-defined returns, security structure and tenure (3 to 4 years)",
      "Customised to risk profile and return expectations",
    ],
  },
];

export default function DealByDeal() {
  return (
    <>
      <Seo
        title="Deal-by-Deal"
        description="Deal-by-deal participation without blind pools — investors select opportunities aligned to their mandate through standalone SPVs, JVs and trusts."
        jsonLd={financialProductJsonLd({
          name: "Landmark Deal-by-Deal",
          description:
            "Deal-by-deal participation without blind pools — SPV, JV and trust structures tailored to each asset.",
          category: "Deal-level SPV",
          path: "/strategies/deal-by-deal",
        })}
      />
      <PageHero
        eyebrow="Deal-by-Deal"
        title="Deal-by-deal. Never blind pools."
        subtitle="A client-aligned model that lets sophisticated investors select opportunities matching their risk profile, return expectations, liquidity needs and thematic preferences."
      />

      <section className="section-pad bg-ivory">
        <div className="container-tb">
          <Reveal>
            <p className="eyebrow mb-6">Participation routes</p>
            <h2 className="display-2 mb-14 text-balance">
              Choose the structure that fits the mandate.
            </h2>
          </Reveal>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {routes.map((r, i) => (
              <Reveal key={r.title} delay={i * 0.05}>
                <article className="h-full flex flex-col p-8 bg-paper border border-border rounded-[12px]">
                  <span className="text-[10px] uppercase tracking-[0.16em] text-crimson-500 mb-4">
                    {r.chip}
                  </span>
                  <h3 className="font-display text-2xl text-charcoal mb-4">{r.title}</h3>
                  <p className="text-sm text-slate leading-relaxed mb-6">{r.body}</p>
                  <div className="rule mb-6" />
                  <ul className="space-y-3 mt-auto">
                    {r.bullets.map((b) => (
                      <li key={b} className="flex items-start gap-3 text-sm text-slate">
                        <span className="text-crimson-500 mt-1 shrink-0">→</span>
                        <span>{b}</span>
                      </li>
                    ))}
                  </ul>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="section-pad bg-stone">
        <div className="container-tb">
          <Reveal>
            <p className="eyebrow mb-6">Why deal-by-deal</p>
            <h2 className="display-2 mb-14 text-balance">Flexible. Transparent. Aligned.</h2>
          </Reveal>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-10 gap-y-12 border-t border-border pt-12">
            {why.map((item, i) => (
              <Reveal key={item.title} delay={i * 0.02}>
                <p className="text-xs font-mono text-crimson-500 mb-3">
                  {String(i + 1).padStart(2, "0")}
                </p>
                <h3 className="font-display text-xl text-charcoal mb-3">{item.title}</h3>
                <p className="text-sm leading-relaxed text-slate">{item.body}</p>
              </Reveal>
            ))}
          </div>
          <div className="mt-12">
            <ButtonLink to="/contact" variant="primary">
              Discuss deal-by-deal participation
            </ButtonLink>
          </div>
        </div>
      </section>

      <RiskDisclosure />
    </>
  );
}
