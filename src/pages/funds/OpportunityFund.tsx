import { PageHero } from "@/components/common/PageHero";
import { Reveal } from "@/components/common/Reveal";
import { RiskDisclosure } from "@/components/common/Disclosures";
import { Seo, financialProductJsonLd } from "@/components/common/Seo";

const highlights = [
  { label: "Total Investments", value: "4", note: "Warehousing, residential and student housing" },
  { label: "Fund Tenure", value: "5 yrs", note: "(1 + 1 year extension)" },
  { label: "Targeted Gross IRR", value: "16–18%", note: "Per annum" },
  { label: "Carried Interest", value: "10%", note: "Per annum (without catch up)" },
];

export default function OpportunityFund() {
  return (
    <>
      <Seo
        title="Opportunity Fund"
        description="Category II Alternative Investment Fund registered with SEBI under the Alternative Investment Funds Regulations, 2012. Closed for subscription."
        jsonLd={financialProductJsonLd({
          name: "Landmark Opportunity Fund",
          description:
            "SEBI Category II Alternative Investment Fund. Closed for subscription — defined portfolio and exit pathway.",
          sebiRegistration: "IN/AIF2/13-14/0068",
          category: "Category II Alternative Investment Fund",
          path: "/funds/opportunity",
        })}
      />
      <PageHero
        eyebrow="Opportunity Fund"
        title="The first vehicle. Closed for subscription."
        subtitle="A Category II AIF set up under the Indian Trust Act, 1882 and registered with SEBI under the Alternative Investment Funds Regulations, 2012."
      >
        <div className="flex flex-wrap items-center gap-3">
          <span className="px-3 py-1.5 rounded-[8px] bg-midnight text-white text-[10px] uppercase tracking-[0.16em]">
            Closed
          </span>
          <span className="px-3 py-1.5 rounded-[8px] border border-border text-charcoal text-[10px] uppercase tracking-[0.16em] font-mono">
            IN/AIF2/13-14/0068
          </span>
        </div>
      </PageHero>

      <section className="section-pad bg-stone">
        <div className="container-tb">
          <div className="grid lg:grid-cols-12 gap-12">
            <div className="lg:col-span-4">
              <Reveal>
                <p className="eyebrow mb-6">Legal structure</p>
                <h2 className="display-3 text-balance">Trust-based, SEBI-regulated.</h2>
              </Reveal>
            </div>
            <div className="lg:col-span-8">
              <Reveal delay={0.05}>
                <div className="bg-paper border border-border rounded-[12px] p-8 lg:p-12">
                  <p className="text-lg leading-relaxed text-slate">
                    The fund is a scheme floated by the trust, set up under the Indian Trust Act,
                    1882 and registered with the Securities and Exchange Board of India (SEBI)
                    under the Alternative Investment Funds Regulations, 2012 as a{" "}
                    <span className="text-charcoal font-medium">
                      Category II Alternative Investment Fund
                    </span>
                    .
                  </p>
                  <p className="text-lg leading-relaxed text-slate mt-6">
                    IL&FS Trust Company Limited acts as the Trustee to the Fund.
                  </p>
                </div>
              </Reveal>
            </div>
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
        </div>
      </section>

      <RiskDisclosure />
    </>
  );
}
