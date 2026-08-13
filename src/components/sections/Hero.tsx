import { useEffect, useState } from "react";
import { AnimatePresence, motion, useReducedMotion, type Variants } from "framer-motion";
import { Reveal } from "@/components/common/Reveal";
import { ButtonLink } from "@/components/common/Button";
import { Logo } from "@/components/common/Logo";
import { media } from "@/data/media";
import { cn } from "@/lib/utils";

const trustMarks = ["SEBI-Registered AIF", "Deal-by-Deal", "Pan-India", "Patient Capital"];

const heroPhrases = ["Patient capital.", "Selected deals.", "Built for India."];
const taglineSentence = heroPhrases.join(" ");

/* Tagline loop: intro (phrases one by one) → single light pass → rest → repeat.
   The light sweep finishes ~4.1s into the sheen animation; add the rest. */
const LIGHT_PASS_MS = 4100;
const REST_MS = 3000;
const SETTLED_MS = LIGHT_PASS_MS + REST_MS;

const introContainer: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.38, delayChildren: 0.45 } },
};

const introPhrase: Variants = {
  hidden: { y: "115%", opacity: 0 },
  visible: {
    y: "0%",
    opacity: 1,
    transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] },
  },
};

export function Hero() {
  const reduce = useReducedMotion();
  const [settled, setSettled] = useState(false);
  // Once the intro finishes, the accent-bar glint and the tagline sheen
  // mount together so their cycles stay in sync.
  const lightsOn = reduce || settled;

  // After the light pass + rest, fade the line out and replay the intro.
  useEffect(() => {
    if (reduce || !settled) return;
    const id = window.setTimeout(() => setSettled(false), SETTLED_MS);
    return () => window.clearTimeout(id);
  }, [reduce, settled]);

  return (
    <section className="relative min-h-[100svh] flex flex-col justify-end overflow-hidden">
      <div className="absolute inset-0">
        <img
          src={media.hero.src}
          alt={media.hero.alt}
          className="h-full w-full object-cover scale-[1.02]"
          fetchPriority="high"
          loading="eager"
          decoding="async"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#1a242e] via-[#2f4458]/55 to-[#2f4458]/20" />
        <div className="absolute inset-0 bg-gradient-to-r from-charcoal/50 via-transparent to-transparent" />
      </div>

      <div className="relative z-10 container-tb pb-10 pt-36 lg:pb-14 lg:pt-44">
        <Reveal>
          <Logo onDark className="mb-8 lg:mb-10 h-12 lg:h-14 w-auto" />
        </Reveal>

        <Reveal delay={0.05}>
          <div className={cn("accent-bar-bronze mb-6", lightsOn ? "accent-bar-glint" : "bg-bronze")} />
          <h1 className="display-1 text-white max-w-3xl text-balance">
            Not More Real Estate. Better Real Estate.
          </h1>
        </Reveal>

        {reduce ? (
          <p className="mt-6 text-lg lg:text-xl max-w-xl leading-relaxed text-white/80">
            {taglineSentence}
          </p>
        ) : (
          <>
            <p className="sr-only">{taglineSentence}</p>
            <AnimatePresence mode="wait">
              {settled ? (
                <motion.p
                  key="settled"
                  className="tagline-sheen-wrap mt-6 text-lg lg:text-xl max-w-xl leading-relaxed"
                  initial={false}
                  exit={{ opacity: 0, transition: { duration: 0.6, ease: "easeOut" } }}
                  aria-hidden
                >
                  <span className="tagline-sheen">{taglineSentence}</span>
                  <span className="tagline-sheen-bloom">{taglineSentence}</span>
                </motion.p>
              ) : (
                <motion.p
                  key="intro"
                  className="mt-6 text-lg lg:text-xl max-w-xl leading-relaxed text-white/[0.72]"
                  initial="hidden"
                  animate="visible"
                  variants={introContainer}
                  onAnimationComplete={(definition) => {
                    if (definition === "visible") setSettled(true);
                  }}
                  aria-hidden
                >
                  {heroPhrases.map((text, i) => (
                    <span key={text} className="reveal-mask">
                      <motion.span variants={introPhrase} className="inline-block">
                        {text}
                        {i < heroPhrases.length - 1 ? "\u00A0" : ""}
                      </motion.span>
                    </span>
                  ))}
                </motion.p>
              )}
            </AnimatePresence>
          </>
        )}

        <Reveal delay={0.2}>
          <div className="mt-10 flex flex-wrap items-center gap-4">
            <ButtonLink to="/strategies" variant="primary" size="lg">
              Investment Strategies
            </ButtonLink>
            <ButtonLink
              to="/opportunities"
              variant="secondary"
              size="lg"
              className="border-white/70 text-white bg-transparent hover:bg-white/10 hover:border-white"
            >
              Current Opportunities
            </ButtonLink>
          </div>
        </Reveal>
      </div>

      <div className="relative z-10 border-t border-white/15 bg-midnight/40 backdrop-blur-sm">
        <div className="container-tb py-4 flex flex-wrap items-center gap-x-8 gap-y-2">
          {trustMarks.map((mark) => (
            <span
              key={mark}
              className="text-[11px] uppercase tracking-[0.16em] text-white/70"
            >
              {mark}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
