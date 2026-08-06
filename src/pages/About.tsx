import { useState } from "react";
import { motion } from "framer-motion";
import {
  Compass,
  Landmark as LandmarkIcon,
  Sparkles,
  LineChart,
  ShieldCheck,
  Map as MapIcon,
  ScrollText,
  Handshake,
  Building2,
} from "lucide-react";
import { Reveal } from "@/components/common/Reveal";
import { Seo } from "@/components/common/Seo";
import { Icon } from "@/components/common/Icon";
import { SectionHeader } from "@/components/common/SectionHeader";
import { ButtonLink } from "@/components/common/Button";
import { AboutHero } from "@/components/sections/AboutHero";
import { Timeline } from "@/components/sections/Timeline";
import { Interviews } from "@/components/sections/Interviews";
import { ContactCTA } from "@/components/sections/ContactCTA";
import { useCountUp } from "@/hooks/useCountUp";
import { useInView } from "@/hooks/useInView";
import { cn } from "@/lib/utils";

/* ————————————————————————————————————————————— */

const glance = [
  { label: "Years of discipline", target: 30, suffix: "+" },
  { label: "Transactions executed", target: 45, suffix: "+" },
  { label: "Cumulative managed", target: 3000, prefix: "₹", suffix: " Cr" },
  { label: "Major Indian cities", target: 12, suffix: "" },
];

const principles = [
  {
    title: "Operational Investor",
    body: "Financial commitment paired with operational involvement. Deep experience in defining project-level strategy and guiding investee companies in the areas that matter most.",
    icon: Compass,
  },
  {
    title: "Underpenetrated Markets",
    body: "We seek opportunities that are globally proven but under-penetrated in India — continuously exploring under-served asset classes with structural tailwinds.",
    icon: MapIcon,
  },
  {
    title: "Digitalization",
    body: "Technology has created structural shifts across sectors. We participate in the opportunities created as digitalization reshapes the business landscape.",
    icon: Sparkles,
  },
  {
    title: "Consumption Pattern",
    body: "Constant observation of consumer taste and consumption patterns — and their impact on existing and emerging real estate asset classes.",
    icon: LineChart,
  },
];

const capabilities = [
  {
    title: "Dedicated Acquisition Team",
    body: "Personnel focused solely on identifying and sourcing quality investments across the country.",
    icon: Compass,
  },
  {
    title: "Geographical Experience",
    body: "Pan-India experience that enables identification and execution across a dozen major cities.",
    icon: MapIcon,
  },
  {
    title: "End-to-End Underwriting",
    body: "Experience across every cycle of real estate — from underwriting through successful exits.",
    icon: LineChart,
  },
  {
    title: "Transaction Structuring",
    body: "Structuring transactions to manage tax impact, downside risk and protect investor interests.",
    icon: ShieldCheck,
  },
  {
    title: "Strong Local Partners",
    body: "Local partners selected with care to handle on-ground issues and ensure smooth execution.",
    icon: Handshake,
  },
  {
    title: "In-house Expertise",
    body: "Legal, liaisoning and construction capability to screen and pressure-test every deal.",
    icon: LandmarkIcon,
  },
];

const process = [
  {
    step: "01",
    title: "Deal-by-Deal Investment",
    body: "Curated opportunities with clear geography, sector focus, market-cycle alignment and a detailed investment thesis.",
    icon: ScrollText,
  },
  {
    step: "02",
    title: "Investor Validation",
    body: "Every deal is presented with financial, risk and asset clarity — enabling independent evaluation before commitment.",
    icon: Handshake,
  },
  {
    step: "03",
    title: "Direct Insight",
    body: "Tailored structure, full visibility, comprehensive diligence, deal-level reporting and success-based economics.",
    icon: Building2,
  },
  {
    step: "04",
    title: "Exit Execution",
    body: "Defined exit pathways — strategic sale, secondary sale, refinancing or asset monetisation — for timely liquidity.",
    icon: LineChart,
  },
];

/* ————————————————————————————————————————————— */

export default function About() {
  return (
    <>
      <Seo
        title="About"
        description="A SEBI-registered Alternative Investment Fund manager operating two real estate funds and a deal-by-deal transaction platform across India."
      />

      <AboutHero />

      <FoundersNote />

      <AtAGlance />

      <section id="timeline">
        <Timeline />
      </section>

      <Interviews />

      <Principles />

      <Capabilities />

      <Process />

      <ContactCTA />
    </>
  );
}

/* ————————————————————————————————————————————— */
/* Founder's note — editorial pull-quote                 */
/* ————————————————————————————————————————————— */

function FoundersNote() {
  return (
    <section id="story" className="section-pad surface-ivory border-b border-border">
      <div className="container-tb">
        <div className="grid lg:grid-cols-12 gap-10 lg:gap-16">
          <div className="lg:col-span-4">
            <Reveal>
              <div className="accent-bar-bronze mb-6" />
              <p className="eyebrow-accent mb-3">Founder's Note</p>
              <p className="text-sm text-slate-blue leading-relaxed max-w-xs">
                A perspective on how the firm has evolved — and what has stayed the same
                through every market cycle.
              </p>
            </Reveal>
          </div>

          <div className="lg:col-span-8">
            <Reveal delay={0.05}>
              <p className="font-display text-[clamp(1.6rem,2.4vw,2.15rem)] leading-[1.35] text-charcoal text-pretty">
                &ldquo;For more than three decades we have practised one craft — real estate
                — through every cycle of growth and correction. The vehicle has changed from
                portfolio management to{" "}
                <span className="text-crimson-500">
                  SEBI-registered Category&nbsp;II AIFs
                </span>{" "}
                and deal-level structures with family offices. The{" "}
                <em className="italic">discipline</em> has not.&rdquo;
              </p>
            </Reveal>

            <Reveal delay={0.1}>
              <div className="mt-10 flex items-center gap-4">
                <span className="w-10 h-[2px] bg-crimson-500" aria-hidden />
                <div>
                  <p className="text-sm font-medium text-charcoal">Ashish Joshi</p>
                  <p className="text-xs uppercase tracking-[0.14em] text-slate-blue mt-1">
                    Managing Partner &amp; Fund Manager
                  </p>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ————————————————————————————————————————————— */
/* At-a-glance stats strip                              */
/* ————————————————————————————————————————————— */

function GlanceFigure({
  target,
  prefix,
  suffix,
}: {
  target: number;
  prefix?: string;
  suffix?: string;
}) {
  const { ref, inView } = useInView<HTMLSpanElement>({ once: true, threshold: 0.4 });
  const value = useCountUp({ target, decimals: 0, start: inView });
  return (
    <span
      ref={ref}
      className="stat-figure font-display text-white text-[clamp(2.75rem,5vw,4.25rem)] leading-none tracking-tight tabular-nums"
    >
      {prefix}
      {value}
      {suffix}
    </span>
  );
}

function AtAGlance() {
  return (
    <section
      className="relative section-pad overflow-hidden"
      style={{
        background:
          "radial-gradient(80% 60% at 100% 0%, rgba(179,150,100,0.18) 0%, transparent 55%), linear-gradient(180deg, #14202b 0%, #101820 100%)",
      }}
    >
      <div className="relative container-tb">
        <div className="grid lg:grid-cols-12 gap-10 items-end mb-14">
          <div className="lg:col-span-6">
            <Reveal>
              <div className="w-10 h-[2px] bg-bronze mb-5" />
              <p className="text-[11px] uppercase tracking-[0.22em] text-bronze mb-5">
                Firm at a glance
              </p>
              <h2 className="font-display text-white text-[clamp(2rem,3.6vw,3rem)] leading-[1.08] tracking-tight text-balance">
                Three decades. One craft.{" "}
                <em className="italic text-bronze">Institutional scale.</em>
              </h2>
            </Reveal>
          </div>
          <div className="lg:col-span-5 lg:col-start-8">
            <Reveal delay={0.05}>
              <p className="text-white/75 leading-relaxed">
                Selected metrics from the platform &mdash; a record of disciplined
                origination, careful underwriting and aligned execution across India.
              </p>
            </Reveal>
          </div>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-4 border-t border-white/15 pt-10">
          {glance.map((g, i) => (
            <Reveal key={g.label} delay={i * 0.05}>
              <div className="pr-4 border-r last:border-r-0 border-white/10">
                <GlanceFigure target={g.target} prefix={g.prefix} suffix={g.suffix} />
                <p className="mt-3 text-xs uppercase tracking-[0.16em] text-white/60 max-w-[16ch] leading-relaxed">
                  {g.label}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ————————————————————————————————————————————— */
/* Investment Principles — numbered hover cards         */
/* ————————————————————————————————————————————— */

function Principles() {
  return (
    <section className="section-pad surface-stone">
      <div className="container-tb">
        <SectionHeader
          align="split"
          eyebrow="Investment principles"
          title={
            <>
              Four lenses applied to <em className="italic">every</em> opportunity.
            </>
          }
          description="A repeatable, disciplined framework — each principle is a filter, and every deal must earn its way through all four before it enters the pipeline."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 lg:gap-6">
          {principles.map((p, i) => (
            <Reveal key={p.title} delay={i * 0.04}>
              <article
                className={cn(
                  "group relative h-full p-8 lg:p-10 rounded-[14px] bg-paper border border-border overflow-hidden",
                  "transition-all duration-500 hover:border-crimson-500/40 hover:-translate-y-1",
                  "hover:shadow-[0_30px_60px_-40px_rgba(183,53,58,0.35)]",
                )}
              >
                <div className="flex items-start justify-between gap-6 mb-6">
                  <span className="font-mono text-xs tracking-[0.18em] text-crimson-500">
                    {String(i + 1).padStart(2, "0")} — Principle
                  </span>
                  <span className="w-11 h-11 grid place-items-center rounded-full bg-stone group-hover:bg-crimson-500 transition-colors duration-500">
                    <Icon
                      as={p.icon}
                      size={20}
                      className="text-charcoal group-hover:text-white transition-colors duration-500"
                    />
                  </span>
                </div>

                <h3 className="font-display text-2xl lg:text-[1.6rem] text-charcoal leading-snug text-balance">
                  {p.title}
                </h3>
                <p className="mt-4 text-slate leading-relaxed">{p.body}</p>

                {/* corner ornament */}
                <span
                  aria-hidden
                  className="absolute -bottom-16 -right-16 w-40 h-40 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                  style={{
                    background:
                      "radial-gradient(circle, rgba(183,53,58,0.12) 0%, transparent 70%)",
                  }}
                />
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ————————————————————————————————————————————— */
/* Capabilities — icon grid                             */
/* ————————————————————————————————————————————— */

function Capabilities() {
  return (
    <section className="section-pad surface-ivory">
      <div className="container-tb">
        <SectionHeader
          align="split"
          eyebrow="Platform capabilities"
          title="What the platform delivers."
          description="An institutional operating platform — from origination through exit — under a single roof, close to every deal."
          accent="bronze"
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 border-t border-l border-border">
          {capabilities.map((c, i) => (
            <Reveal key={c.title} delay={i * 0.03}>
              <article
                className={cn(
                  "group relative h-full p-8 lg:p-10 border-r border-b border-border bg-paper/40",
                  "transition-colors duration-500 hover:bg-paper",
                )}
              >
                <span className="inline-flex items-center justify-center w-12 h-12 rounded-[10px] bg-stone group-hover:bg-bronze/15 transition-colors duration-500">
                  <Icon
                    as={c.icon}
                    size={22}
                    className="text-charcoal group-hover:text-bronze transition-colors duration-500"
                  />
                </span>
                <h3 className="mt-6 font-display text-xl lg:text-[1.35rem] text-charcoal text-balance">
                  {c.title}
                </h3>
                <p className="mt-3 text-slate leading-relaxed">{c.body}</p>
                <span
                  aria-hidden
                  className="absolute left-0 bottom-0 h-[2px] bg-bronze scale-x-0 origin-left group-hover:scale-x-100 transition-transform duration-500 w-full"
                />
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ————————————————————————————————————————————— */
/* Process — animated vertical stepper                  */
/* ————————————————————————————————————————————— */

function Process() {
  const [active, setActive] = useState(0);

  return (
    <section className="section-pad surface-stone border-t border-border">
      <div className="container-tb">
        <SectionHeader
          align="split"
          eyebrow="Investment process"
          title={
            <>
              From <em className="italic">thesis</em> to exit.
            </>
          }
          description="Four disciplined steps that shape every deal — designed to align interest, protect the downside, and deliver liquidity on a defined pathway."
        />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-start">
          {/* Left: numbered rail */}
          <ol className="lg:col-span-5 relative">
            <span
              aria-hidden
              className="absolute left-[15px] top-2 bottom-2 w-[2px] bg-border"
            />
            <motion.span
              aria-hidden
              className="absolute left-[15px] top-2 w-[2px] bg-crimson-500 origin-top"
              initial={false}
              animate={{
                scaleY: (active + 1) / process.length,
              }}
              style={{ height: "calc(100% - 16px)" }}
              transition={{ duration: 0.55, ease: [0.16, 1, 0.3, 1] }}
            />

            {process.map((p, i) => {
              const isActive = active === i;
              return (
                <li key={p.step}>
                  <button
                    type="button"
                    onClick={() => setActive(i)}
                    onMouseEnter={() => setActive(i)}
                    aria-pressed={isActive}
                    className="group w-full text-left flex items-start gap-6 py-5 focus-visible:outline-none"
                  >
                    <span
                      className={cn(
                        "relative z-10 mt-0.5 grid place-items-center w-8 h-8 rounded-full font-mono text-[11px] tabular-nums transition-all duration-500",
                        isActive
                          ? "bg-crimson-500 text-white scale-100"
                          : "bg-paper text-charcoal border border-border group-hover:border-crimson-500/40",
                      )}
                    >
                      {p.step}
                    </span>
                    <span className="flex-1 min-w-0 pt-1">
                      <span
                        className={cn(
                          "font-display block text-xl lg:text-2xl leading-snug transition-colors duration-300 text-balance",
                          isActive ? "text-crimson-500" : "text-charcoal group-hover:text-crimson-500",
                        )}
                      >
                        {p.title}
                      </span>
                    </span>
                  </button>
                </li>
              );
            })}
          </ol>

          {/* Right: active step detail */}
          <div className="lg:col-span-6 lg:col-start-7 lg:sticky lg:top-28">
            <motion.div
              key={process[active].step}
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
              className="bg-paper border border-border rounded-[14px] p-8 lg:p-10 shadow-[0_30px_80px_-50px_rgba(36,41,47,0.35)]"
            >
              <div className="flex items-center gap-4 mb-8">
                <span className="inline-flex items-center justify-center w-12 h-12 rounded-[10px] bg-crimson-500/10 text-crimson-500">
                  <Icon as={process[active].icon} size={22} />
                </span>
                <div>
                  <p className="text-[11px] uppercase tracking-[0.22em] text-crimson-500 font-mono">
                    Step {process[active].step}
                  </p>
                  <p className="text-xs text-slate-blue mt-0.5">
                    of {String(process.length).padStart(2, "0")}
                  </p>
                </div>
              </div>

              <h3 className="font-display text-[1.75rem] lg:text-3xl text-charcoal text-balance">
                {process[active].title}
              </h3>
              <p className="mt-4 text-lg text-slate leading-relaxed">
                {process[active].body}
              </p>

              <div className="mt-8 pt-6 border-t border-border flex flex-wrap items-center justify-between gap-4">
                <p className="text-xs uppercase tracking-[0.14em] text-slate-blue">
                  Continue exploring
                </p>
                <div className="flex flex-wrap gap-3">
                  <ButtonLink to="/strategies" variant="primary" size="sm">
                    Strategies
                  </ButtonLink>
                  <ButtonLink to="/opportunities" variant="secondary" size="sm">
                    Opportunities
                  </ButtonLink>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
