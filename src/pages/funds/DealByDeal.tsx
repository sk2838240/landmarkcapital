import { PageHero } from "@/components/common/PageHero";
import { Reveal } from "@/components/common/Reveal";
import { ButtonLink } from "@/components/common/Button";
import { RiskDisclosure } from "@/components/common/Disclosures";
import { Seo, financialProductJsonLd } from "@/components/common/Seo";

const keyFeatures = [
  {
    title: "Named deal",
    body: "Deal-specific, capital is allocated to one named asset that the investor has already seen and evaluated.",
  },
  {
    title: "Ring-fenced",
    body: "Structured through a dedicated SPV for each transaction, ring-fencing that investor's capital and risk from any other deal.",
  },
  {
    title: "Bespoke terms",
    body: "Fully bespoke terms, ticket size, tenure, security package, and return structure are negotiated for each deal and each investor.",
  },
  {
    title: "Direct reporting",
    body: "Direct, asset-level reporting on that specific deal, not consolidated fund-level reporting across a portfolio.",
  },
];

const howItWorks = [
  "Landmark identifies and underwrites the opportunity independently.",
  "The deal is presented to the investor on its own merits, fully underwritten.",
  "On commitment, a dedicated SPV is set up (or the investor is allotted into an existing deal-specific SPV).",
  "Landmark operates the asset through to exit, reporting directly to that SPV's investor(s).",
];

const constraints = [
  "No automatic pooling benefit, diversification comes from the investor choosing multiple deals over time, not from a single vehicle.",
  "Terms vary deal to deal, there is no single standard ticket size, tenure, or return profile across all Managed Account opportunities.",
  "Best suited to investors who want to evaluate and select individual opportunities themselves, rather than delegate that selection to a fund manager.",
];

export default function DealByDeal() {
  return (
    <>
      <Seo
        title="Managed Accounts"
        description="Direct, deal-by-deal participation, through a dedicated SPV for each opportunity. One named deal, never a blind pool."
        jsonLd={financialProductJsonLd({
          name: "Landmark Managed Accounts",
          description:
            "Direct, deal-by-deal participation through a dedicated SPV for each opportunity.",
          category: "Deal-level SPV",
          path: "/structures/managed-accounts",
        })}
      />
      <PageHero
        eyebrow="Managed Accounts"
        title="Direct, deal-by-deal participation, through a dedicated SPV for each opportunity."
        subtitle="A Managed Account is Landmark's direct route, outside the pooled-fund structure entirely. Each opportunity is held in its own dedicated Special Purpose Vehicle (SPV), and the investor commits to that one, specific, pre-identified deal, never a blind pool of future, unnamed opportunities."
      />

      <section className="section-pad bg-ivory">
        <div className="container-tb">
          <Reveal>
            <p className="eyebrow mb-6">Key features</p>
            <h2 className="display-2 mb-14 text-balance">
              One named deal. Ring-fenced. Bespoke.
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
            <p className="eyebrow mb-6">How it works</p>
            <h2 className="display-2 mb-14 text-balance">
              From origination to exit.
            </h2>
          </Reveal>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-12 border-t border-border pt-12">
            {howItWorks.map((step, i) => (
              <Reveal key={step} delay={i * 0.04}>
                <span className="text-xs font-mono text-crimson-500">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <p className="text-base text-slate leading-relaxed max-w-md mt-3">{step}</p>
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
                <p className="eyebrow text-crimson-300 mb-6">Constraints</p>
                <h2 className="display-2 text-white text-balance">
                  What to weigh before committing.
                </h2>
              </Reveal>
            </div>
            <div className="lg:col-span-7">
              <div className="space-y-0">
                {constraints.map((c) => (
                  <Reveal key={c}>
                    <div className="flex items-start gap-4 py-4 border-t border-white/15">
                      
                      <p className="text-base text-white/85">{c}</p>
                    </div>
                  </Reveal>
                ))}
              </div>
              <div className="mt-10">
                <ButtonLink to="/contact" variant="primary">
                  Discuss a Managed Account
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
