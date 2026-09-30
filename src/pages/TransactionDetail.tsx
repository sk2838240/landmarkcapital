import { Link, Navigate, useParams } from "react-router-dom";
import { ArrowLeft, ArrowUpRight } from "lucide-react";
import { Reveal } from "@/components/common/Reveal";
import { Icon } from "@/components/common/Icon";
import { Seo } from "@/components/common/Seo";
import {
  PastPerformanceNote,
  RiskDisclosure,
} from "@/components/common/Disclosures";
import { completedDeals, type Deal } from "@/data/deals";

const sections: Array<{ key: keyof NonNullable<Deal["caseStudy"]>; label: string }> = [
  { key: "thesis", label: "Thesis" },
  { key: "structure", label: "Structure" },
  { key: "execution", label: "Execution" },
  { key: "exit", label: "Exit" },
  { key: "outcome", label: "Outcome" },
];

export default function TransactionDetail() {
  const { id = "" } = useParams();
  const deal = completedDeals.find((d) => d.id === id);

  if (!deal || !deal.caseStudy) {
    return <Navigate to="/transactions" replace />;
  }

  const cs = deal.caseStudy;
  const facts: Array<{ label: string; value?: string }> = [
    { label: "City", value: deal.city },
    { label: "Category", value: deal.category },
    { label: "Investment", value: deal.investment },
    { label: "Vintage", value: cs.vintage },
    { label: "Hold Period", value: cs.holdPeriod },
    { label: "Exit IRR", value: deal.exitIRR },
  ];

  return (
    <>
      <Seo
        title={`${deal.name}, Case Study`}
        description={cs.thesis}
        path={`/transactions/${id}`}
      />

      <header className="pt-36 lg:pt-44 pb-14 lg:pb-20 border-b border-border surface-stone">
        <div className="container-tb">
          <Reveal>
            <Link
              to="/transactions"
              className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.14em] text-slate-blue hover:text-crimson-500 transition-colors mb-10"
            >
              <Icon as={ArrowLeft} size={14} />
              All transactions
            </Link>
          </Reveal>

          <Reveal delay={0.05}>
            <div className="accent-bar mb-6" />
            <p className="eyebrow mb-5">Case study · Completed exit</p>
            <h1 className="display-1 text-balance max-w-4xl">{deal.name}</h1>
          </Reveal>

          <Reveal delay={0.1}>
            <dl className="mt-10 pt-8 border-t border-border grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-x-6 gap-y-6">
              {facts.map((f) => (
                <div key={f.label}>
                  <dt className="text-[10px] uppercase tracking-[0.14em] text-slate-blue">
                    {f.label}
                  </dt>
                  <dd className="mt-1.5 text-base text-charcoal tabular-nums">
                    {f.value ?? "\u2014"}
                  </dd>
                </div>
              ))}
            </dl>
          </Reveal>
        </div>
      </header>

      <section className="section-pad">
        <div className="container-tb">
          <div className="border-t border-border">
            {sections.map((s, i) => (
              <Reveal key={s.key} delay={i * 0.04}>
                <div className="grid grid-cols-1 md:grid-cols-12 gap-6 md:gap-10 py-10 border-b border-border">
                  <div className="md:col-span-3 flex items-baseline gap-4">
                    <span className="font-mono text-xs text-bronze tabular-nums">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <h2 className="font-display text-2xl text-charcoal">{s.label}</h2>
                  </div>
                  <p className="md:col-span-9 text-lg text-slate leading-relaxed max-w-3xl">
                    {cs[s.key]}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>

          {cs.partner && (
            <Reveal>
              <p className="mt-10 text-sm text-slate-blue">
                <span className="uppercase tracking-[0.14em] text-[10px] mr-3">Partner</span>
                {cs.partner}
              </p>
            </Reveal>
          )}

          <Reveal>
            <PastPerformanceNote className="mt-10" />
          </Reveal>

          <Reveal delay={0.1}>
            <div className="mt-12 flex flex-wrap gap-6">
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 text-sm uppercase tracking-[0.12em] text-charcoal link-underline"
              >
                Discuss a similar mandate
                <Icon as={ArrowUpRight} size={16} />
              </Link>
              <Link
                to="/transactions"
                className="inline-flex items-center gap-2 text-sm uppercase tracking-[0.12em] text-slate-blue link-underline"
              >
                More transactions
              </Link>
            </div>
          </Reveal>
        </div>
      </section>

      <RiskDisclosure />
    </>
  );
}
