import { PageHero } from "@/components/common/PageHero";
import { Reveal } from "@/components/common/Reveal";
import { ButtonLink } from "@/components/common/Button";
import { RiskDisclosure } from "@/components/common/Disclosures";
import { Seo, financialProductJsonLd } from "@/components/common/Seo";

const keyFeatures = [
  {
    title: "Accredited-only",
    body: "Every investor in the scheme must independently qualify as a SEBI-certified Accredited Investor — no exceptions.",
  },
  {
    title: "Entry ticket",
    body: "Minimum investment of ₹25 crore per investor (reduced by SEBI from the earlier ₹70 crore threshold).",
  },
  {
    title: "Lighter compliance",
    body: "Exempt from the standard PPM template and the mandatory annual PPM audit — fewer compliance formalities.",
  },
  {
    title: "Concentration",
    body: "Greater concentration allowed — up to 50% of investable funds can go into a single investee, versus tighter diversification limits for standard AIFs.",
  },
  {
    title: "Flexible tenure",
    body: "Tenure can be extended beyond the standard limit, subject to investor consent under the fund documents.",
  },
];

const constraints = [
  "High entry threshold — not accessible below ₹25 crore per investor.",
  "Still a pooled, close-ended structure — capital is committed for the fund's tenure, same as a standard AIF.",
  "Every investor must clear Accredited Investor status before committing — this is not optional or waivable.",
];

export default function LVF() {
  return (
    <>
      <Seo
        title="LVF — Large Value Fund for Accredited Investors"
        description="The largest, most flexible AIF route — built for concentrated, institutional-scale commitments by accredited investors."
        jsonLd={financialProductJsonLd({
          name: "Landmark Large Value Fund",
          description:
            "A Large Value Fund for Accredited Investors — concentrated, institutional-scale commitments with lighter regulatory requirements.",
          category: "Category II Alternative Investment Fund — Large Value Fund",
          path: "/strategies/lvf",
        })}
      />
      <PageHero
        eyebrow="LVF — Large Value Fund for Accredited Investors"
        title="The largest, most flexible AIF route — built for concentrated, institutional-scale commitments."
        subtitle="A Large Value Fund (LVF) is a specific SEBI category within Category II AIFs, reserved for schemes where every investor is an Accredited Investor and each commits a large, defined minimum. In exchange for that scale and sophistication, SEBI grants LVFs meaningfully lighter regulatory requirements than a standard AIF."
      />

      <section className="section-pad bg-ivory">
        <div className="container-tb">
          <Reveal>
            <p className="eyebrow mb-6">Key features</p>
            <h2 className="display-2 mb-14 text-balance">
              Scale and sophistication, rewarded with flexibility.
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

      <section className="section-pad bg-midnight text-white">
        <div className="container-tb">
          <div className="grid lg:grid-cols-12 gap-12">
            <div className="lg:col-span-5">
              <Reveal>
                <p className="eyebrow text-crimson-300 mb-6">Who it's for</p>
                <h2 className="display-2 text-white text-balance">
                  Built for concentrated, institutional-scale commitments.
                </h2>
              </Reveal>
              <div className="mt-10">
                <ButtonLink to="/contact" variant="primary">
                  Discuss LVF eligibility
                </ButtonLink>
              </div>
            </div>
            <div className="lg:col-span-7">
              <Reveal delay={0.05}>
                <p className="text-lg leading-relaxed text-white/75 mb-8">
                  Family offices, institutional investors, and UHNIs making large, concentrated
                  commitments to a specific real estate strategy — investors who want scale and
                  flexibility, and are equipped to do their own due diligence.
                </p>
              </Reveal>
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
            </div>
          </div>
        </div>
      </section>

      <RiskDisclosure />
    </>
  );
}
