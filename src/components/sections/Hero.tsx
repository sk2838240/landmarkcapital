import { motion, useReducedMotion, type Variants } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { Reveal } from "@/components/common/Reveal";
import { ButtonLink } from "@/components/common/Button";
import { Icon } from "@/components/common/Icon";
import { media } from "@/data/media";

const trustMarks = ["SEBI-Registered AIF", "Deal-by-Deal", "Pan-India", "Patient Capital"];

const heroPhrases = ["Patient capital.", "Selected deals.", "Built for India."];
const taglineSentence = heroPhrases.join(" ");

/* Tagline: each phrase blurs + rises in once, then holds static. */
const taglineContainer: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.6, delayChildren: 0.5 } },
};

const taglinePhrase: Variants = {
  hidden: { opacity: 0, y: 10, filter: "blur(12px)" },
  visible: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: { duration: 1.3, ease: [0.16, 1, 0.3, 1] },
  },
};

export function Hero() {
  const reduce = useReducedMotion();

  // CTA entrance: each button's box eases in first, then its label — and the
  // two buttons follow one after another. `custom` sets each element's start delay.
  const ctaBox: Variants = {
    hidden: { opacity: reduce ? 1 : 0, y: reduce ? 0 : 12, scale: reduce ? 1 : 0.96 },
    visible: (delay: number) => ({
      opacity: 1,
      y: 0,
      scale: 1,
      transition: reduce ? { duration: 0 } : { duration: 0.45, ease: [0.16, 1, 0.3, 1], delay },
    }),
  };
  const ctaLabel: Variants = {
    hidden: { opacity: reduce ? 1 : 0, y: reduce ? 0 : 6 },
    visible: (delay: number) => ({
      opacity: 1,
      y: 0,
      transition: reduce ? { duration: 0 } : { duration: 0.4, ease: [0.16, 1, 0.3, 1], delay },
    }),
  };

  return (
    <section className="relative min-h-[100svh] flex flex-col overflow-hidden">
      <div className="absolute inset-0">
        <img
          src={media.hero.src}
          alt={media.hero.alt}
          className="h-full w-full object-cover scale-[1.02]"
          fetchPriority="high"
          loading="eager"
          decoding="async"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0f1820] via-[#1c2a36]/70 to-[#2f4458]/25" />
        <div className="absolute inset-0 bg-gradient-to-r from-charcoal/70 via-charcoal/25 to-transparent" />
        <div className="absolute inset-0 bg-black/15" />
      </div>

      <div className="relative z-10 flex-1 flex flex-col justify-center">
        <div className="container-tb text-center py-24">
          <Reveal delay={0.05}>
            <div className="accent-bar-bronze mx-auto mb-6" />
            <h1 className="display-1 text-white max-w-3xl mx-auto text-balance">
              Not More Real Estate. Better Real Estate.
            </h1>
          </Reveal>

          {reduce ? (
            <p className="mt-6 text-lg lg:text-xl max-w-xl mx-auto leading-relaxed text-white/85">
              {taglineSentence}
            </p>
          ) : (
            <>
              <p className="sr-only">{taglineSentence}</p>
              <motion.p
                className="mt-6 text-lg lg:text-xl max-w-xl mx-auto leading-relaxed text-white/85"
                initial="hidden"
                animate="visible"
                variants={taglineContainer}
                aria-hidden
              >
                {heroPhrases.map((text, i) => (
                  <motion.span key={text} variants={taglinePhrase} className="inline-block">
                    {text}
                    {i < heroPhrases.length - 1 ? "\u00A0" : ""}
                  </motion.span>
                ))}
              </motion.p>
            </>
          )}

          <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
            <motion.div
              className="inline-flex"
              initial="hidden"
              animate="visible"
              variants={ctaBox}
              custom={0.3}
            >
              <ButtonLink
                to="/strategies"
                variant="primary"
                size="lg"
                className="shadow-[0_10px_30px_-12px_rgba(217,79,79,0.55)] hover:shadow-[0_14px_38px_-12px_rgba(217,79,79,0.7)] hover:-translate-y-0.5"
              >
                <motion.span
                  className="inline-flex items-center gap-2"
                  initial="hidden"
                  animate="visible"
                  variants={ctaLabel}
                  custom={0.68}
                >
                  Investment Strategies
                  <Icon as={ArrowUpRight} size={18} className="transition-transform duration-300" />
                </motion.span>
              </ButtonLink>
            </motion.div>

            <motion.div
              className="inline-flex"
              initial="hidden"
              animate="visible"
              variants={ctaBox}
              custom={0.95}
            >
              <ButtonLink
                to="/opportunities"
                variant="secondary"
                size="lg"
                className="border-white/80 text-white bg-white/[0.06] backdrop-blur-sm hover:bg-white/[0.14] hover:border-white"
              >
                <motion.span
                  className="inline-flex items-center"
                  initial="hidden"
                  animate="visible"
                  variants={ctaLabel}
                  custom={1.32}
                >
                  Current Opportunities
                </motion.span>
              </ButtonLink>
            </motion.div>
          </div>
        </div>
      </div>

      <div className="relative z-10 border-t border-white/15 bg-gradient-to-r from-charcoal/80 via-charcoal/55 to-charcoal/80 backdrop-blur-md">
        <div className="container-px py-4">
          <div className="grid grid-cols-2 md:grid-cols-4">
            {trustMarks.map((mark) => (
              <span
                key={mark}
                className="py-1 text-center text-[11px] uppercase tracking-[0.18em] font-medium text-white/80 md:border-l md:border-white/15 md:first:border-l-0"
              >
                {mark}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
