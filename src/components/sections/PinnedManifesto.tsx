import { useRef } from "react";
import {
  motion,
  useReducedMotion,
  useScroll,
  useSpring,
  useTransform,
  type Variants,
} from "framer-motion";
import { Compass, Layers, Building2, type LucideIcon } from "lucide-react";
import { Icon } from "@/components/common/Icon";
import { media } from "@/data/media";
import { cn } from "@/lib/utils";

const EASE = [0.16, 1, 0.3, 1] as const;

const steps: {
  n: string;
  title: string;
  body: string;
  icon: LucideIcon;
}[] = [
  {
    n: "01",
    title: "Select",
    body: "Each opportunity is independently underwritten and presented on its own merits.",
    icon: Compass,
  },
  {
    n: "02",
    title: "Structure",
    body: "Capital is designed around the deal — not forced into a predefined fund template.",
    icon: Layers,
  },
  {
    n: "03",
    title: "Deliver",
    body: "Institutional discipline from origination through to long-term value creation.",
    icon: Building2,
  },
];

const headlineWords = ["Select.", "Structure.", "Deliver."];

function Headline() {
  const reduce = useReducedMotion();

  const container: Variants = {
    hidden: {},
    visible: {
      transition: reduce
        ? { duration: 0 }
        : { staggerChildren: 0.14, delayChildren: 0.1 },
    },
  };

  const word: Variants = {
    hidden: reduce ? { y: "0%", opacity: 1 } : { y: "110%", opacity: 0 },
    visible: {
      y: "0%",
      opacity: 1,
      transition: reduce ? { duration: 0 } : { duration: 0.85, ease: EASE },
    },
  };

  return (
    <motion.h2
      className="display-2 text-balance"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.4 }}
      variants={container}
      aria-label={headlineWords.join(" ")}
    >
      {headlineWords.map((w, i) => {
        const isDeliver = i === headlineWords.length - 1;
        return (
          <span key={w} className="reveal-mask">
            <motion.span
              variants={word}
              className={cn("inline-block pb-1", isDeliver && "italic text-bronze")}
            >
              {w}
              {i < headlineWords.length - 1 ? "\u00A0" : ""}
            </motion.span>
          </span>
        );
      })}
    </motion.h2>
  );
}

function ManifestoImage() {
  const reduce = useReducedMotion();
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const rawY = useTransform(scrollYProgress, [0, 1], ["-6%", "6%"]);
  const rawScale = useTransform(scrollYProgress, [0, 0.5, 1], [1.08, 1.03, 1.08]);
  const y = useSpring(rawY, { stiffness: 120, damping: 24, mass: 0.4 });
  const scale = useSpring(rawScale, { stiffness: 120, damping: 24, mass: 0.4 });

  return (
    <motion.figure
      ref={ref}
      initial={reduce ? { opacity: 1, y: 0 } : { opacity: 0, y: 32 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.15 }}
      transition={reduce ? { duration: 0 } : { duration: 0.9, ease: EASE, delay: 0.15 }}
      className="group relative overflow-hidden rounded-[12px] border border-border bg-stone aspect-[4/3] sm:aspect-[16/10] lg:aspect-[2.1/1]"
    >
      <motion.img
        src={media.manifesto.src}
        alt={media.manifesto.alt}
        loading="lazy"
        decoding="async"
        sizes="(min-width: 1280px) 1200px, 100vw"
        style={reduce ? undefined : { y, scale }}
        className="absolute inset-0 h-full w-full object-cover object-center will-change-transform transition-[filter] duration-700 ease-out group-hover:brightness-[1.04]"
      />

      <div
        aria-hidden
        className="absolute inset-0 bg-gradient-to-t from-charcoal/55 via-charcoal/10 to-transparent"
      />
      <motion.div
        aria-hidden
        initial={{ opacity: 0 }}
        whileHover={reduce ? undefined : { opacity: 1 }}
        transition={{ duration: 0.6, ease: EASE }}
        className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 ease-out"
        style={{
          background:
            "radial-gradient(60% 60% at 50% 55%, rgba(179,150,100,0.18) 0%, transparent 70%)",
        }}
      />

      <motion.figcaption
        initial={reduce ? { opacity: 1, y: 0 } : { opacity: 0, y: -8 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.5 }}
        transition={reduce ? { duration: 0 } : { duration: 0.6, ease: EASE, delay: 0.55 }}
        className="absolute top-4 left-4 sm:top-5 sm:left-5"
      >
        <span className="inline-flex items-center gap-2 rounded-full bg-ivory/92 backdrop-blur-sm border border-white/50 px-3.5 py-1.5">
          <motion.span
            aria-hidden
            className="w-1.5 h-1.5 rounded-full bg-bronze"
            animate={
              reduce
                ? undefined
                : {
                    opacity: [1, 0.35, 1],
                    scale: [1, 1.35, 1],
                  }
            }
            transition={
              reduce
                ? undefined
                : { duration: 2.4, ease: "easeInOut", repeat: Infinity }
            }
          />
          <span className="text-[10px] uppercase tracking-[0.16em] text-charcoal">
            Deal by deal
          </span>
        </span>
      </motion.figcaption>
    </motion.figure>
  );
}

function StepCards() {
  const reduce = useReducedMotion();

  const grid: Variants = {
    hidden: {},
    visible: {
      transition: reduce
        ? { duration: 0 }
        : { staggerChildren: 0.14, delayChildren: 0.3 },
    },
  };

  const card: Variants = {
    hidden: reduce ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: reduce
        ? { duration: 0 }
        : { duration: 0.75, ease: EASE },
    },
  };

  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.15 }}
      variants={grid}
      className="relative z-10 grid grid-cols-1 md:grid-cols-3 gap-4 lg:gap-5 mt-5 lg:-mt-20 lg:px-8 xl:px-12"
    >
      {steps.map((step, i) => (
        <motion.article
          key={step.title}
          variants={card}
          whileHover={reduce ? undefined : { y: -6 }}
          transition={reduce ? undefined : { type: "spring", stiffness: 220, damping: 22 }}
          className={cn(
            "group/card relative h-full overflow-hidden bg-paper border border-border rounded-[12px] p-6 lg:p-7",
            "hover:border-bronze/50",
            "hover:shadow-[0_28px_60px_-30px_rgba(47,68,88,0.4)]",
            "transition-[border-color,box-shadow] duration-500 ease-[cubic-bezier(0.16,1,0.3,1)]",
          )}
        >
          <motion.span
            aria-hidden
            className="absolute left-6 right-6 top-0 h-[2px] bg-gradient-to-r from-bronze via-bronze/80 to-bronze origin-left"
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={reduce ? { duration: 0 } : { duration: 0.9, ease: EASE, delay: 0.4 + i * 0.12 }}
          />

          <motion.span
            aria-hidden
            className="pointer-events-none absolute -bottom-12 -right-12 h-40 w-40 rounded-full bg-bronze/10 blur-2xl opacity-0 group-hover/card:opacity-100 transition-opacity duration-700"
          />

          <div className="flex items-center justify-between mb-5">
            <span className="text-xs font-mono text-bronze tabular-nums">{step.n}</span>
            <span
              className={cn(
                "relative grid place-items-center w-10 h-10 rounded-full border border-border text-slate-blue",
                "transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)]",
                "group-hover/card:border-bronze group-hover/card:text-bronze group-hover/card:bg-bronze/10",
                "group-hover/card:rotate-[8deg] group-hover/card:scale-105",
              )}
            >
              <span
                aria-hidden
                className="absolute inset-0 rounded-full ring-0 ring-bronze/0 transition-all duration-500 group-hover/card:ring-4 group-hover/card:ring-bronze/10"
              />
              <Icon as={step.icon} size={17} />
            </span>
          </div>
          <h3 className="font-display text-2xl text-charcoal mb-2 transition-colors duration-300 group-hover/card:text-crimson-500">
            {step.title}
          </h3>
          <p className="text-slate leading-relaxed">{step.body}</p>

          <div className="mt-5 flex items-center gap-2 text-[10px] uppercase tracking-[0.2em] text-bronze/70 font-medium opacity-0 group-hover/card:opacity-100 transition-opacity duration-500">
            <span className="inline-block h-px w-4 bg-bronze/70" />
            Phase {step.n}
          </div>
        </motion.article>
      ))}
    </motion.div>
  );
}

export function PinnedManifesto() {
  const reduce = useReducedMotion();

  return (
    <section className="relative section-pad surface-ivory border-b border-border">
      <div className="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden>
        <motion.div
          className="absolute -right-24 top-24 h-[28rem] w-[28rem] rounded-full blur-3xl"
          style={{
            background: "radial-gradient(circle, rgba(179,150,100,0.14) 0%, transparent 68%)",
          }}
          animate={
            reduce
              ? undefined
              : { x: [0, 26, 0], y: [0, -22, 0], opacity: [0.75, 1, 0.75] }
          }
          transition={
            reduce
              ? undefined
              : { duration: 14, ease: "easeInOut", repeat: Infinity }
          }
        />
        <motion.div
          className="absolute -left-32 bottom-20 h-[22rem] w-[22rem] rounded-full blur-3xl"
          style={{
            background: "radial-gradient(circle, rgba(78,100,120,0.10) 0%, transparent 70%)",
          }}
          animate={
            reduce
              ? undefined
              : { x: [0, -18, 0], y: [0, 20, 0], opacity: [0.6, 0.9, 0.6] }
          }
          transition={
            reduce
              ? undefined
              : { duration: 16, ease: "easeInOut", repeat: Infinity, delay: 1.4 }
          }
        />
      </div>

      <div className="relative container-tb">
        <div className="grid lg:grid-cols-12 gap-8 lg:gap-16 mb-10 lg:mb-14">
          <div className="lg:col-span-5">
            <motion.div
              className="accent-bar-bronze mb-6 origin-left"
              initial={reduce ? { scaleX: 1 } : { scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              viewport={{ once: true, amount: 0.6 }}
              transition={reduce ? { duration: 0 } : { duration: 0.8, ease: EASE }}
            />
            <motion.p
              className="eyebrow-accent mb-5"
              initial={reduce ? { opacity: 1, y: 0 } : { opacity: 0, y: 8 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.6 }}
              transition={reduce ? { duration: 0 } : { duration: 0.5, ease: EASE, delay: 0.1 }}
            >
              The approach
            </motion.p>
            <Headline />
          </div>
          <div className="lg:col-span-6 lg:col-start-7 flex items-end">
            <motion.p
              className="text-lg text-slate leading-relaxed text-pretty"
              initial={reduce ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.25 }}
              transition={reduce ? { duration: 0 } : { duration: 0.8, ease: EASE, delay: 0.35 }}
            >
              You choose which deals you back. We make sure each one is worth choosing.
              Landmark Capital originates and structures real estate investments one transaction at
              a time. Every deal is independently underwritten and ring-fenced — you see the
              asset, the structure, and the exit before you invest. Your capital goes exactly
              where you put it.
            </motion.p>
          </div>
        </div>

        <ManifestoImage />
        <StepCards />
      </div>
    </section>
  );
}
