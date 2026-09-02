import { Link } from "react-router-dom";
import {
  Handshake,
  TrendingUp,
  Building2,
  Warehouse,
  Home,
  LandPlot,
  type LucideIcon,
} from "lucide-react";
import { SectionHeader } from "@/components/common/SectionHeader";
import { Reveal } from "@/components/common/Reveal";
import { Icon } from "@/components/common/Icon";
import { portfolioStats, trackRecord, type Stat } from "@/data/stats";
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
      className="stat-figure font-display text-[2.75rem] lg:text-5xl leading-none text-charcoal tracking-tight tabular-nums"
    >
      {prefix}
      {value}
      {suffix && <span className="text-crimson-500">{suffix}</span>}
    </span>
  );
}

/** Icon per metric — thin-line, per Brand Design System §6. */
const statIcons: Record<string, LucideIcon> = {
  Transactions: Handshake,
  Investments: TrendingUp,
  "Major Cities": Building2,
  Warehousing: Warehouse,
  Residential: Home,
  Plotting: LandPlot,
};

/** Track-record metrics + portfolio metrics, unified into one fact sheet. */
const mergedStats: Stat[] = [...trackRecord, ...portfolioStats];

const asOf = asOfQuarter();

export function TrackRecord() {
  return (
    <section className="surface-ivory pt-12 md:pt-14 lg:pt-16 pb-[clamp(4.5rem,10vw,8rem)]">
      <div className="container-tb">
        <SectionHeader
          align="split"
          eyebrow="Track record"
          title="Built for India. By people who know it well."
          description="Twelve years. Twelve cities. Over nine million square feet. Built on relationships, not pitch decks. One asset class. One geography. The same discipline, across every market cycle since 2013."
          accent="bronze"
          className="mb-8 lg:mb-10 [&_.accent-bar-bronze]:mb-3.5 [&_.eyebrow-accent]:mb-4"
        />

        {/* Unified fact sheet — hairline rules via the border showing through the grid gap. */}
        <div className="overflow-hidden rounded-[12px] border border-border bg-border shadow-[0_1px_2px_rgba(36,41,47,0.04)]">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-px">
            {mergedStats.map((s, i) => {
              const isInvestment = s.label === "Investments";
              const MetricIcon = statIcons[s.label];
              return (
                <Reveal
                  key={s.label}
                  delay={(i % 3) * 0.06}
                  className="group relative bg-paper p-7 lg:p-9 transition-colors duration-300 hover:bg-stone/50 focus-within:bg-stone/50"
                >
                  {/* Crimson accent that draws in on hover. */}
                  <span
                    aria-hidden="true"
                    className="absolute inset-x-0 top-0 h-0.5 origin-left scale-x-0 bg-crimson-500 transition-transform duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-x-100 group-focus-within:scale-x-100"
                  />
                  <div className="mb-6 flex items-center justify-between">
                    <p className="text-xs uppercase tracking-[0.14em] text-slate-blue">{s.label}</p>
                    {MetricIcon && (
                      <span className="inline-grid h-9 w-9 place-items-center rounded-full bg-stone/70 text-slate-blue transition-colors duration-300 group-hover:bg-crimson-500/10 group-hover:text-crimson-500">
                        <Icon as={MetricIcon} size={18} />
                      </span>
                    )}
                  </div>
                  <StatFigure
                    target={s.numericTarget}
                    decimals={s.decimals ?? 0}
                    suffix={isInvestment ? " Cr" : s.suffix}
                    prefix={isInvestment ? "₹ " : undefined}
                  />
                  <p className="mt-4 text-sm leading-relaxed text-slate">{s.description}</p>
                </Reveal>
              );
            })}
          </div>
        </div>

        <div className="mt-4 flex items-center justify-between gap-4">
          <p className="text-[10px] uppercase tracking-[0.18em] text-slate-blue tabular-nums">
            {asOf}
          </p>
          <Reveal>
            <Link
              to="/transactions"
              className="inline-block text-sm uppercase tracking-[0.1em] text-charcoal link-underline"
            >
              View transactions
            </Link>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
