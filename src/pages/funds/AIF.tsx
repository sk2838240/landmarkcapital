import { PageHero } from "@/components/common/PageHero";
import { Reveal } from "@/components/common/Reveal";
import { ButtonLink } from "@/components/common/Button";
import { RiskDisclosure } from "@/components/common/Disclosures";
import { Seo, financialProductJsonLd } from "@/components/common/Seo";

const keyFeatures = [
  {
    title: "Regulated structure",
    body: "SEBI-regulated under the AIF Regulations, 2012, with independent trustee oversight and regular reporting to investors and SEBI.",
  },
  {
    title: "Fund scale",
    body: "Minimum fund corpus of ₹20 crore, sized for institutional-scale real estate strategies.",
  },
  {
    title: "Tax treatment",
    body: "Pass-through taxation — income is taxed in investors' hands, not at the fund level.",
  },
  {
    title: "Defined tenure",
    body: "Close-ended, with a defined tenure (typically 3–4 years) aligned to the underlying real estate cycle.",
  },
];

const comparison = [
  {
    aspect: "Minimum ticket",
    normal: "₹1 crore per investor",
    accredited: "No fixed SEBI minimum — set by the scheme",
  },
  {
    aspect: "Who can invest",
    normal: "Any eligible investor meeting the ₹1 crore threshold",
    accredited: "Only SEBI-certified Accredited Investors",
  },
  {
    aspect: "Regulatory treatment",
    normal: "Full standard AIF investor-protection framework",
    accredited: "Lighter-touch — relaxed diversification and compliance norms",
  },
];

const accreditationCriteria = [
  "Annual income of ₹2 crore or more; or",
  "Net worth of ₹7.5 crore or more, with at least half in financial assets; or",
  "A combined test of ₹1 crore annual income and ₹5 crore net worth.",
];

const constraints = [
  "Offered by private placement only — cannot be advertised publicly.",
  "Capped at 1,000 investors per scheme.",
  "Borrowing is limited to short-term operational needs, not used to leverage investment returns.",
  "Illiquid and close-ended — capital is committed for the fund's full tenure.",
];

export default function AIF() {
  return (
    <>
      <Seo
        title="AIF — Category II"
        description="A SEBI-regulated pooled fund for investors backing a defined real estate strategy — Category II Alternative Investment Fund with pass-through taxation."
        jsonLd={financialProductJsonLd({
          name: "Landmark AIF — Category II",
          description:
            "A SEBI-regulated pooled fund for investors backing a defined real estate strategy.",
          category: "Category II Alternative Investment Fund",
          path: "/structures/aif",
        })}
      />
      <PageHero
        eyebrow="AIF — Category II"
        title="A SEBI-regulated pooled fund, for investors backing a defined real estate strategy."
        subtitle="An Alternative Investment Fund (AIF) is a SEBI-regulated, privately pooled investment vehicle. Landmark's AIFs are registered as Category II — the category that covers real estate, private equity, and debt strategies, with no special government incentives and no complex leverage or trading strategies."
      />

      <section className="section-pad bg-ivory">
        <div className="container-tb">
          <Reveal>
            <p className="eyebrow mb-6">Key features</p>
            <h2 className="display-2 mb-14 text-balance">
              Regulated, institutional-scale, pass-through.
            </h2>
          </Reveal>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-12 border-t border-border pt-12">
            {keyFeatures.map((f, i) => (
              <Reveal key={f.title} delay={i * 0.04}>
                <span className="text-xs font-mono text-crimson-500">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <h3 className="font-display text-2xl text-charcoal mt-3 mb-3">{f.title}</h3>
                <p className="text-slate leading-relaxed max-w-md">{f.body}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="section-pad bg-stone">
        <div className="container-tb">
          <Reveal>
            <p className="eyebrow mb-6">Normal AIF vs. Accredited AIF</p>
            <h2 className="display-2 mb-8 text-balance">
              Two routes within Category II.
            </h2>
            <p className="text-base text-slate leading-relaxed max-w-2xl mb-14">
              Within Category II, the route an investor takes depends on whether they qualify as
              a SEBI-recognised &ldquo;Accredited Investor&rdquo;.
            </p>
          </Reveal>
          <Reveal delay={0.05}>
            <div className="overflow-x-auto rounded-[12px] border border-border bg-paper">
              <table className="w-full text-left min-w-[640px]">
                <thead>
                  <tr className="border-b border-border">
                    <th className="px-6 py-4 text-[10px] uppercase tracking-[0.14em] text-slate-blue font-medium">
                      Aspect
                    </th>
                    <th className="px-6 py-4 text-[10px] uppercase tracking-[0.14em] text-crimson-500 font-medium">
                      Normal AIF
                    </th>
                    <th className="px-6 py-4 text-[10px] uppercase tracking-[0.14em] text-crimson-500 font-medium">
                      Accredited AIF
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {comparison.map((row) => (
                    <tr key={row.aspect} className="border-b border-border last:border-b-0">
                      <td className="px-6 py-5 text-sm font-medium text-charcoal">
                        {row.aspect}
                      </td>
                      <td className="px-6 py-5 text-sm text-slate leading-relaxed">
                        {row.normal}
                      </td>
                      <td className="px-6 py-5 text-sm text-slate leading-relaxed">
                        {row.accredited}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </Reveal>
          <Reveal delay={0.1}>
            <div className="mt-12 max-w-3xl">
              <p className="text-sm text-charcoal leading-relaxed mb-4">
                An individual qualifies as an Accredited Investor by meeting one of the
                following, as certified by a SEBI-recognised accreditation agency:
              </p>
              <ul className="space-y-3">
                {accreditationCriteria.map((c) => (
                  <li key={c} className="flex items-start gap-3 text-sm text-slate leading-relaxed">
                    <span className="text-crimson-500 mt-1 shrink-0">→</span>
                    <span>{c}</span>
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="section-pad bg-midnight text-white">
        <div className="container-tb">
          <div className="grid lg:grid-cols-12 gap-12">
            <div className="lg:col-span-5">
              <Reveal>
                <p className="eyebrow text-crimson-300 mb-6">Constraints</p>
                <h2 className="display-2 text-white text-balance">
                  What the structure does not offer.
                </h2>
              </Reveal>
            </div>
            <div className="lg:col-span-7">
              <div className="space-y-0">
                {constraints.map((c) => (
                  <Reveal key={c}>
                    <div className="flex items-start gap-4 py-4 border-t border-white/15">
                      <span className="text-crimson-300 mt-1">—</span>
                      <p className="text-base text-white/85">{c}</p>
                    </div>
                  </Reveal>
                ))}
              </div>
              <div className="mt-10">
                <ButtonLink to="/contact" variant="primary">
                  Discuss the AIF route
                </ButtonLink>
              </div>
            </div>
          </div>
        </div>
      </section>

      <RiskDisclosure />
    </>
  );
}
