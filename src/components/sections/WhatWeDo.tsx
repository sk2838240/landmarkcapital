import { Link } from "react-router-dom";
import { SectionHeader } from "@/components/common/SectionHeader";
import { Reveal } from "@/components/common/Reveal";

const pillars = [
  {
    title: "Privileged Access",
    body: "Many of our opportunities emerge through long-standing relationships, rather than public channels.",
  },
  {
    title: "Select first, structure next.",
    body: "We begin with a compelling opportunity, then build the capital flow around it",
  },
  {
    title: "Designed Around the Deal",
    body: "We design each deal from first principles, shaped entirely around what the opportunity requires, never from a template.",
  },
  {
    title: "Hands-On from Start to Finish",
    body: "We stay involved in every stage of the opportunity and work closely with each investment, from selection to execution.",
  },
  {
    title: "Structured for Exit",
    body: "Each opportunity enters with a clear hold strategy and a mapped exit plan.",
  },
  {
    title: "Ring-Fenced, Deal by Deal",
    body: "Your capital sits in the deal you chose, not in a shared pool. One transaction's risk never becomes another's problem.",
  },
];

export function WhatWeDo() {
  return (
    <section className="section-pad surface-ivory">
      <div className="container-tb">
        <SectionHeader
          align="split"
          eyebrow="How we invest"
          description={
            <>
              We do not chase size. We earn{" "}
              <span className="italic text-slate-blue">outcomes</span> — one carefully structured
              deal at a time.
            </>
          }
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {pillars.map((p, i) => (
            <Reveal key={p.title} delay={i * 0.04} className="h-full">
              <article className="card-shine group h-full rounded-[12px] border border-border bg-gradient-to-br from-paper to-stone p-7 transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] hover:-translate-y-1 hover:border-bronze/60 hover:shadow-[0_18px_40px_-24px_rgba(36,41,47,0.35)]">
                <span className="font-mono text-xs text-bronze">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <h3 className="mt-3 mb-3 font-display text-xl text-charcoal transition-colors duration-300 group-hover:text-crimson-500">
                  {p.title}
                </h3>
                <p className="text-slate leading-relaxed">{p.body}</p>
              </article>
            </Reveal>
          ))}
        </div>

        <Reveal>
          <Link
            to="/strategies"
            className="inline-block mt-14 text-sm uppercase tracking-[0.1em] text-charcoal link-underline"
          >
            View investment strategies
          </Link>
        </Reveal>
      </div>
    </section>
  );
}
