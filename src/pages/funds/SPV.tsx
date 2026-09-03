import { motion, useReducedMotion } from "framer-motion";
import { ArrowRight, Check } from "lucide-react";
import { PageHero } from "@/components/common/PageHero";
import { Reveal } from "@/components/common/Reveal";
import { ButtonLink } from "@/components/common/Button";
import { RiskDisclosure } from "@/components/common/Disclosures";
import { Seo } from "@/components/common/Seo";
import { cn } from "@/lib/utils";

const EASE = [0.16, 1, 0.3, 1] as const;

const makesSense = [
  "You want direct ownership in a specific asset, not exposure to a diversified pool.",
  "You have a clear view on a deal and want to participate without the constraints of a fund mandate.",
  "You prefer a bespoke structure — ticket size, instrument type, tenure, and return profile — tailored to your specific requirements.",
  "You are a family office, corporate treasury, or institutional investor seeking a clean, auditable holding in a single real estate asset.",
  "You want co-investment alongside Landmark Capital, with full visibility into how the deal is managed.",
];

const youSee = [
  "Deal-level financial statements for your SPV",
  "Milestone updates tied to the asset's construction or leasing progress",
  "Direct access to the Landmark Capital team managing the asset",
  "A clear exit roadmap agreed at the time of investment",
];

export default function SPV() {
  const reduce = useReducedMotion();

  return (
    <>
      <Seo
        title="SPV — Direct Special Purpose Vehicle"
        description="The most direct form of real estate investment we offer — no fund layer, no pooled capital, no shared mandate. Direct SPV participation, ring-fenced to a single transaction."
      />

      <PageHero
        eyebrow="SPV"
        title="Your name. On the asset. From day one."
        subtitle="The most direct form of real estate investment we offer — no fund layer, no pooled capital, no shared mandate."
      />

      {/* What it is — light surface */}
      <section className="section-pad bg-ivory">
        <div className="container-tb">
          <div className="grid grid-cols-1 gap-10 lg:grid-cols-12 lg:gap-16">
            <Reveal className="lg:col-span-4">
              <div className="accent-bar-bronze mb-6" />
              <p className="eyebrow-accent mb-3">What it is</p>
              <p className="text-sm text-slate-blue leading-relaxed max-w-xs">
                A purpose-built legal entity, created for a single transaction.
              </p>
            </Reveal>

            <Reveal delay={0.05} className="lg:col-span-8">
              <p className="font-display text-[clamp(1.5rem,2.4vw,2rem)] leading-[1.3] text-charcoal text-pretty max-w-[55ch]">
                A Direct SPV is a purpose-built legal entity created for a single
                transaction. You participate directly in that entity — as an{" "}
                <span className="text-crimson-500">equity shareholder</span> or as an{" "}
                <span className="text-crimson-500">NCD holder</span> — and your capital is
                ring-fenced entirely within that one deal. There is no fund between you
                and the asset.
              </p>
            </Reveal>
          </div>
        </div>
      </section>

      {/* When this route makes sense — dark surface */}
      <section className="section-pad relative overflow-hidden bg-[#1b2531] text-white">
        <div
          aria-hidden
          className="pointer-events-none absolute -top-40 right-[-8rem] h-[34rem] w-[34rem] rounded-full bg-bronze/10 blur-[130px]"
        />
        <div
          aria-hidden
          className="pointer-events-none absolute bottom-[-10rem] left-[-6rem] h-[26rem] w-[26rem] rounded-full bg-crimson-500/15 blur-[130px]"
        />

        <div className="container-tb relative">
          <Reveal>
            <div className="grid grid-cols-1 gap-10 lg:grid-cols-12 lg:gap-16 mb-14">
              <div className="lg:col-span-5">
                <div className="accent-bar-bronze mb-6" />
                <p className="eyebrow-accent mb-3">When this route makes sense</p>
                <h2 className="font-display text-[clamp(1.75rem,3vw,2.5rem)] leading-[1.15] tracking-[-0.01em] text-balance">
                  Built for investors who already know what{" "}
                  <em className="italic text-bronze">they want.</em>
                </h2>
              </div>
              <div className="lg:col-span-6 lg:col-start-7 self-end">
                <p className="text-white/70 leading-relaxed text-pretty">
                  SPVs suit investors with a specific thesis, a defined ticket, and a
                  preference for direct ownership over pooled structures.
                </p>
              </div>
            </div>
          </Reveal>

          <ul className="grid grid-cols-1 md:grid-cols-2 gap-px bg-white/10 border border-white/10 rounded-[14px] overflow-hidden">
            {makesSense.map((item, i) => (
              <motion.li
                key={item}
                initial={reduce ? { opacity: 1, y: 0 } : { opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={
                  reduce
                    ? { duration: 0 }
                    : { duration: 0.6, ease: EASE, delay: 0.05 * i }
                }
                className="group relative bg-[#1b2531] p-7 lg:p-9 transition-colors duration-500 hover:bg-[#22324a]"
              >
                <span
                  aria-hidden
                  className="absolute inset-x-0 top-0 h-0.5 origin-left scale-x-0 bg-crimson-500 transition-transform duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-x-100"
                />
                <div className="flex items-start gap-4">
                  <span
                    className={cn(
                      "mt-0.5 grid h-9 w-9 shrink-0 place-items-center rounded-full",
                      "border border-white/15 text-white/70 bg-white/[0.03]",
                      "transition-all duration-500",
                      "group-hover:border-crimson-500/60 group-hover:bg-crimson-500/15 group-hover:text-crimson-500"
                    )}
                  >
                    <Check size={16} strokeWidth={1.75} />
                  </span>
                  <p className="text-[15px] leading-relaxed text-white/85">{item}</p>
                </div>
              </motion.li>
            ))}
          </ul>
        </div>
      </section>

      {/* What you see — light surface */}
      <section className="section-pad bg-stone">
        <div className="container-tb">
          <div className="grid grid-cols-1 gap-10 lg:grid-cols-12 lg:gap-16">
            <Reveal className="lg:col-span-4">
              <div className="accent-bar-bronze mb-6" />
              <p className="eyebrow-accent mb-3">What you see</p>
              <h2 className="font-display text-[clamp(1.75rem,3vw,2.5rem)] leading-[1.15] tracking-[-0.01em] text-charcoal text-balance">
                Full visibility. Nothing abstracted.
              </h2>
            </Reveal>

            <Reveal delay={0.05} className="lg:col-span-8">
              <p className="text-slate leading-relaxed mb-10 max-w-[60ch]">
                Unlike a fund, there is no reporting lag, no NAV abstraction, and no
                pooled P&amp;L. You receive:
              </p>

              <ul className="border-t border-border">
                {youSee.map((item, i) => (
                  <motion.li
                    key={item}
                    initial={reduce ? { opacity: 1, x: 0 } : { opacity: 0, x: 16 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, amount: 0.3 }}
                    transition={
                      reduce
                        ? { duration: 0 }
                        : { duration: 0.55, ease: EASE, delay: 0.06 * i }
                    }
                    className="group relative flex items-center justify-between gap-6 border-b border-border py-6 transition-colors duration-300 hover:bg-paper"
                  >
                    <span
                      aria-hidden
                      className="absolute left-0 top-0 bottom-0 w-0.5 origin-top scale-y-0 bg-crimson-500 transition-transform duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-y-100"
                    />
                    <span className="flex items-center gap-5 pl-4">
                      <span className="font-mono text-[11px] tracking-[0.2em] text-bronze group-hover:text-crimson-500 transition-colors duration-300">
                        {String(i + 1).padStart(2, "0")}
                      </span>
                      <span className="text-charcoal text-[16px] leading-snug">
                        {item}
                      </span>
                    </span>
                    <ArrowRight
                      size={18}
                      strokeWidth={1.75}
                      className="mr-4 text-slate-blue transition-all duration-300 group-hover:text-crimson-500 group-hover:translate-x-1.5"
                    />
                  </motion.li>
                ))}
              </ul>
            </Reveal>
          </div>
        </div>
      </section>

      {/* The right question to ask — dark, full-bleed editorial */}
      <section className="section-pad relative overflow-hidden bg-[#0d1821] text-white">
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 opacity-[0.06]"
          style={{
            backgroundImage:
              "linear-gradient(to right, white 1px, transparent 1px), linear-gradient(to bottom, white 1px, transparent 1px)",
            backgroundSize: "64px 64px",
          }}
        />
        <div
          aria-hidden
          className="pointer-events-none absolute -top-32 left-1/2 -translate-x-1/2 h-[28rem] w-[28rem] rounded-full bg-crimson-500/15 blur-[130px]"
        />

        <div className="container-tb relative">
          <Reveal>
            <div className="max-w-3xl mx-auto text-center">
              <div className="mx-auto w-12 h-px bg-bronze mb-8" />
              <p className="eyebrow-accent mb-6 text-bronze">The right question to ask</p>

              <motion.p
                className="font-display text-[clamp(1.5rem,3.2vw,2.5rem)] leading-[1.2] text-white/95 text-balance"
                initial={reduce ? { opacity: 1, y: 0 } : { opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={reduce ? { duration: 0 } : { duration: 0.7, ease: EASE }}
              >
                Do I want to invest in a{" "}
                <em className="italic text-white/60">fund that invests in deals</em> —
                or do I want to invest in{" "}
                <span className="text-crimson-500">the deal itself?</span>
              </motion.p>

              <motion.p
                className="mt-10 text-lg text-white/70 leading-relaxed max-w-2xl mx-auto text-pretty"
                initial={reduce ? { opacity: 1, y: 0 } : { opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={
                  reduce
                    ? { duration: 0 }
                    : { duration: 0.6, ease: EASE, delay: 0.15 }
                }
              >
                If the answer is the deal itself, this is the route.
              </motion.p>

              <motion.div
                initial={reduce ? { opacity: 1, y: 0 } : { opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={
                  reduce
                    ? { duration: 0 }
                    : { duration: 0.6, ease: EASE, delay: 0.3 }
                }
                className="mt-10"
              >
                <ButtonLink to="/contact" variant="primary" size="md">
                  Discuss a direct SPV
                  <ArrowRight size={16} strokeWidth={1.75} className="ml-1" />
                </ButtonLink>
              </motion.div>
            </div>
          </Reveal>
        </div>
      </section>

      <RiskDisclosure />
    </>
  );
}
