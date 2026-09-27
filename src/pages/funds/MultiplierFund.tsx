import { PageHero } from "@/components/common/PageHero";
import { Reveal } from "@/components/common/Reveal";
import { ButtonLink } from "@/components/common/Button";
import { RiskDisclosure } from "@/components/common/Disclosures";
import { Seo, financialProductJsonLd } from "@/components/common/Seo";

const whyWarehousing = [
  {
    title: "Favorable Regulatory Landscape",
    body: "GST and the National Logistics Policy continue to formalize and accelerate the warehousing sector.",
  },
  {
    title: "E-commerce & 3PL Demand",
    body: "E-commerce and third-party logistics remain the primary drivers of warehousing market volumes.",
  },
  {
    title: "Grade A Demand",
    body: "Institutional standards are increasing demand for Grade A warehousing inventory.",
  },
  {
    title: "Tier II City Expansion",
    body: "Rising inventory needs are extending demand into Tier II cities.",
  },
  {
    title: "Omni-channel Retail",
    body: "Changing technology and demography continue to reshape retail fulfilment models.",
  },
];

const strategy = [
  {
    title: "Execution and Development",
    body: "Partner at the execution and development stage — mitigating risks of land conversion, aggregation and approvals.",
  },
  {
    title: "Capital Value Creation",
    body: "Participate in capital value creation by entering at the appropriate stage of the development cycle.",
  },
  {
    title: "Leasing & Facility Management",
    body: "Value addition through in-house development expertise, leasing and tenant management.",
  },
  {
    title: "Exit Strategy",
    body: "Multiple exit pathways defined to support timely liquidity.",
  },
];

const highlights = [
  { label: "Tenure", value: "4 years", note: "From 31 January 2024 (Final Close Date)" },
  { label: "Target Corpus", value: "₹500 Cr", note: "Including ₹200 Cr green shoe option" },
  { label: "Target Returns", value: "18–20%+", note: "Gross IRR" },
  { label: "Investment Size", value: "₹50–75 Cr", note: "Across 6–8 investments" },
];

export default function MultiplierFund() {
  return (
    <>
      <Seo
        title="Multiplier Fund"
        description="A SEBI Category II Alternative Investment Fund focused on high-quality, built-to-suit warehousing in economic hotspots across India."
        jsonLd={financialProductJsonLd({
          name: "Landmark Multiplier Fund",
          description:
            "SEBI Category II Alternative Investment Fund investing in built-to-suit warehousing across India.",
          sebiRegistration: "IN/AIF2/21-22/0928",
          category: "Category II Alternative Investment Fund",
          path: "/funds/multiplier",
        })}
      />
      <PageHero
        eyebrow="Multiplier Fund"
        title="Built-to-suit warehousing."
        subtitle="The fund seeks to invest in high-quality, built-to-suit warehouses with strong leasing potential in economic hotspots such as Pune, Delhi, Mumbai, Ahmedabad and Bengaluru."
      >
        <div className="flex flex-wrap items-center gap-3">
          <span className="px-3 py-1.5 rounded-[8px] bg-crimson-500 text-white text-[10px] uppercase tracking-[0.16em]">
            Open for subscription
          </span>
          <span className="px-3 py-1.5 rounded-[8px] border border-border text-charcoal text-[10px] uppercase tracking-[0.16em] font-mono">
            IN/AIF2/21-22/0928
          </span>
        </div>
      </PageHero>

      <section className="section-pad bg-ivory">
        <div className="container-tb">
          <Reveal>
            <p className="eyebrow mb-6">Thesis</p>
            <h2 className="display-2 text-balance max-w-2xl mb-14">
              Structural demand for institutional warehousing.
            </h2>
          </Reveal>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-10 gap-y-12 border-t border-border pt-12">
            {whyWarehousing.map((item, i) => (
              <Reveal key={item.title} delay={i * 0.03}>
                <span className="text-xs font-mono text-crimson-500">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <h3 className="font-display text-xl text-charcoal mt-3 mb-3">{item.title}</h3>
                <p className="text-slate leading-relaxed">{item.body}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="section-pad bg-stone">
        <div className="container-tb">
          <Reveal>
            <p className="eyebrow mb-6">Investment strategy</p>
            <h2 className="display-2 mb-14 text-balance">Four stages, one discipline.</h2>
          </Reveal>
          <div className="border-t border-border">
            {strategy.map((s, i) => (
              <Reveal key={s.title}>
                <div className="grid grid-cols-1 md:grid-cols-12 gap-4 py-8 border-b border-border">
                  <span className="md:col-span-2 font-mono text-sm text-crimson-500">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <h3 className="md:col-span-3 font-display text-xl text-charcoal">{s.title}</h3>
                  <p className="md:col-span-7 text-slate leading-relaxed">{s.body}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="section-pad bg-ivory">
        <div className="container-tb">
          <Reveal>
            <p className="eyebrow mb-6">Fund highlights</p>
            <h2 className="display-2 mb-14">Summary terms</h2>
          </Reveal>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 border-t border-border pt-12">
            {highlights.map((h) => (
              <Reveal key={h.label}>
                <p className="text-xs uppercase tracking-[0.14em] text-slate mb-3">{h.label}</p>
                <p className="stat-figure font-display text-3xl lg:text-4xl text-charcoal mb-3 tabular-nums">
                  {h.value}
                </p>
                <p className="text-sm text-slate leading-relaxed">{h.note}</p>
              </Reveal>
            ))}
          </div>
          <div className="mt-12">
            <ButtonLink to="/contact" variant="primary">
              Inquire about participation
            </ButtonLink>
          </div>
        </div>
      </section>

      <RiskDisclosure />
    </>
  );
}
