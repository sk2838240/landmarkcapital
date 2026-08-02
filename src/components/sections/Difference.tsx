import { useState } from "react";
import { SectionHeader } from "@/components/common/SectionHeader";
import { Reveal } from "@/components/common/Reveal";
import { cn } from "@/lib/utils";

const differences = [
  {
    title: "Alignment Without Conflicts",
    subtitle: "Our interests and yours sit on the same side of the table.",
    points: [
      "Independent platform, no competing mandates",
      "Returns from performance, not asset accumulation",
      "Governance designed to protect investor trust",
    ],
  },
  {
    title: "Real Estate Only, End to End",
    subtitle: "Exclusive focus on real estate across the full deal lifecycle.",
    points: [
      "Acquisition through exit under one roof",
      "Deep involvement in approvals, execution, and structuring",
      "Experienced operating partners on every asset",
    ],
  },
  {
    title: "Risk Before Velocity",
    subtitle: "We would rather move carefully than move first.",
    points: [
      "Capital preservation guides every decision",
      "Structures designed to protect downside first",
      "No deal is too good to skip proper diligence",
    ],
  },
  {
    title: "Visible Risk, Honest Reporting",
    subtitle: "You see what you own, in plain terms, at every stage.",
    points: [
      "Deal-level reporting, not pooled summaries",
      "Transparent, timely investor communication",
      "Institutional process without institutional distance",
    ],
  },
  {
    title: "Fewer, Better Decisions",
    subtitle: "The edge is choosing the right deals — not doing more of them.",
    points: [
      "High bar for underwriting and selection",
      "Focus over volume",
      "A small, experienced team close to every deal",
    ],
  },
  {
    title: "Relationships Built to Last",
    subtitle: "Long-term partners, not one-off transactions.",
    points: [
      "Trust earned over years",
      "Access built on reputation",
      "Shared success, measured honestly",
    ],
  },
];

export function Difference() {
  const [active, setActive] = useState(0);
  const current = differences[active];

  return (
    <section className="section-pad surface-stone">
      <div className="container-tb">
        <SectionHeader
          align="split"
          eyebrow="Principles"
          title="The Landmark Difference"
          description="Six principles that shape every decision — from how we source deals to how we report on them."
          accent="trust"
        />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16">
          <div className="lg:col-span-5 border-t border-border">
            {differences.map((d, i) => (
              <button
                key={d.title}
                type="button"
                onClick={() => setActive(i)}
                aria-pressed={active === i}
                className={cn(
                  "w-full text-left py-4 border-b border-border transition-colors flex items-baseline gap-4 focus-visible:bg-stone focus-visible:text-crimson-500 focus-visible:outline-offset-[-2px]",
                  active === i ? "text-crimson-500" : "text-charcoal hover:text-crimson-500"
                )}
              >
                <span className="text-xs font-mono text-bronze shrink-0">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <span className="font-display text-xl">{d.title}</span>
              </button>
            ))}
          </div>

          <div className="lg:col-span-6 lg:col-start-7">
            <Reveal key={current.title}>
              <p className="eyebrow-trust mb-4">Principle detail</p>
              <h3 className="display-3 mb-4">{current.title}</h3>
              <p className="text-lg text-slate mb-8">{current.subtitle}</p>
              <ul className="space-y-3">
                {current.points.map((point) => (
                  <li key={point} className="flex gap-3 text-charcoal">
                    <span className="mt-2.5 w-1.5 h-1.5 rounded-full bg-bronze shrink-0" />
                    {point}
                  </li>
                ))}
              </ul>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
