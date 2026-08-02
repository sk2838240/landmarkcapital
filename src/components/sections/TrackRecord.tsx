import { Link } from "react-router-dom";
import { SectionHeader } from "@/components/common/SectionHeader";
import { Reveal } from "@/components/common/Reveal";
import { portfolioStats, trackRecord } from "@/data/stats";
import { useCountUp } from "@/hooks/useCountUp";
import { useInView } from "@/hooks/useInView";
import { asOfQuarter } from "@/lib/format";

function StatFigure({
  target,
  decimals,
  suffix,
  prefix,
}: {
  target: number;
  decimals: number;
  suffix?: string;
  prefix?: string;
}) {
  const { ref, inView } = useInView<HTMLSpanElement>({ once: true, threshold: 0.4 });
  const value = useCountUp({ target, decimals, start: inView });
  return (
    <span
      ref={ref}
      className="stat-figure font-display text-4xl lg:text-5xl text-charcoal tracking-tight tabular-nums"
    >
      {prefix}
      {value}
      {suffix}
    </span>
  );
}

const asOf = asOfQuarter();

export function TrackRecord() {
  return (
    <section className="section-pad surface-ivory">
      <div className="container-tb">
        <SectionHeader
          align="split"
          eyebrow="Track record"
          title="Built for India. By people who know it well."
          description="Grounded in careful underwriting, aligned execution, and long-term value creation. A record of disciplined real estate investing across select opportunities and market cycles."
          accent="bronze"
        />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 border-t border-border pt-10 mb-4">
          {trackRecord.map((s) => (
            <Reveal key={s.label}>
              <p className="text-xs uppercase tracking-[0.14em] text-slate-blue mb-3">{s.label}</p>
              <StatFigure
                target={s.numericTarget}
                decimals={s.decimals ?? 0}
                suffix={s.label === "Investments" ? "\u00A0Cr" : s.suffix}
                prefix={s.label === "Investments" ? "\u20B9\u2009" : undefined}
              />
              <p className="mt-2 text-sm text-slate">{s.description}</p>
            </Reveal>
          ))}
        </div>

        <p className="text-[10px] uppercase tracking-[0.18em] text-slate-blue tabular-nums mb-12">
          {asOf}
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 bg-paper border border-border rounded-[12px] p-8 lg:p-12">
          {portfolioStats.map((s) => (
            <Reveal key={s.label}>
              <p className="text-xs uppercase tracking-[0.14em] text-bronze mb-3">{s.label}</p>
              <StatFigure
                target={s.numericTarget}
                decimals={s.decimals ?? 0}
                suffix={s.suffix}
              />
              <p className="mt-2 text-sm text-slate">{s.description}</p>
            </Reveal>
          ))}
        </div>
        <p className="mt-4 text-[10px] uppercase tracking-[0.18em] text-slate-blue tabular-nums">
          {asOf}
        </p>

        <Reveal>
          <Link
            to="/transactions"
            className="inline-block mt-12 text-sm uppercase tracking-[0.1em] text-charcoal link-underline"
          >
            View transactions
          </Link>
        </Reveal>
      </div>
    </section>
  );
}
