import { useRef } from "react";
import { motion, useInView, useReducedMotion, type Variants } from "framer-motion";
import { Building2, Globe2, Network } from "lucide-react";
import { SectionHeader } from "@/components/common/SectionHeader";
import { Icon } from "@/components/common/Icon";
import { cn } from "@/lib/utils";

const EASE = [0.16, 1, 0.3, 1] as const;

const segments = [
  {
    title: "Indian Investors",
    body: "Family offices, ultra-high-net-worth individuals, corporates, institutions, and investment managers seeking curated access to India's real estate opportunities through SEBI-regulated AIFs, managed accounts, and bespoke investment structures.",
    icon: Building2,
    accent: "from-bronze/30 via-bronze/10 to-transparent",
  },
  {
    title: "Global Investors",
    body: "Global family offices, principal investors, business owners, institutional allocators, and offshore capital—including the Indian diaspora, Middle Eastern, and Asian investors—looking for disciplined exposure to India's real estate markets. We provide end-to-end structuring, FEMA compliance, tax-efficient execution, and ongoing investment management.",
    icon: Globe2,
    accent: "from-slate-blue/30 via-slate-blue/10 to-transparent",
  },
  {
    title: "Strategic Partners",
    body: "Developers, asset owners, corporates, co-investors, and institutional partners collaborating with us on club deals, joint ventures, platform investments, and balance-sheet partnerships. We seek long-term relationships built on aligned capital, execution certainty, and shared value creation.",
    icon: Network,
    accent: "from-crimson-500/20 via-crimson-500/5 to-transparent",
  },
];

function SegmentCard({
  s,
  i,
}: {
  s: (typeof segments)[number];
  i: number;
}) {
  const reduce = useReducedMotion();
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, amount: 0.3 });

  const card: Variants = {
    hidden: reduce ? { opacity: 1, y: 0 } : { opacity: 0, y: 32 },
    visible: {
      opacity: 1,
      y: 0,
      transition: reduce ? { duration: 0 } : { duration: 0.7, ease: EASE },
    },
  };

  return (
    <motion.div
      ref={ref}
      variants={card}
      initial="hidden"
      animate={inView ? "visible" : "hidden"}
      className={cn(
        "group/seg relative pt-10 pr-2",
        "transition-transform duration-500 ease-[cubic-bezier(0.16,1,0.3,1)]",
        "hover:-translate-y-1",
      )}
    >
      <span
        aria-hidden
        className={cn(
          "absolute -top-px left-0 right-0 h-px bg-border",
          "before:absolute before:left-0 before:top-0 before:h-full before:w-0",
          "before:bg-gradient-to-r before:transition-all before:duration-700 before:ease-out",
          "group-hover/seg:before:w-full",
          s.accent,
        )}
      />

      <motion.span
        aria-hidden
        className="absolute right-4 top-8 text-[88px] lg:text-[112px] font-display italic leading-none text-charcoal/[0.04] select-none tabular-nums"
        initial={reduce ? { opacity: 1 } : { opacity: 0, x: 12 }}
        animate={inView ? { opacity: 1, x: 0 } : {}}
        transition={reduce ? { duration: 0 } : { duration: 0.9, ease: EASE, delay: 0.15 + i * 0.06 }}
      >
        0{i + 1}
      </motion.span>

      <motion.div
        className="relative grid place-items-center w-14 h-14 rounded-full border border-border bg-paper text-slate-blue mb-6"
        whileHover={
          reduce
            ? undefined
            : { rotate: 8, scale: 1.05, borderColor: "var(--color-bronze)", color: "var(--color-bronze)" }
        }
        transition={reduce ? undefined : { type: "spring", stiffness: 260, damping: 18 }}
      >
        <span
          aria-hidden
          className="absolute inset-0 rounded-full ring-0 ring-bronze/0 group-hover/seg:ring-4 group-hover/seg:ring-bronze/15 transition-all duration-500"
        />
        <Icon as={s.icon} size={22} strokeWidth={1.25} />
      </motion.div>

      <h3 className="font-display text-2xl text-charcoal mb-4 transition-colors duration-300 group-hover/seg:text-crimson-500">
        {s.title}
      </h3>
      <p className="text-slate leading-relaxed max-w-[42ch]">{s.body}</p>

      <div className="mt-6 flex items-center gap-3 text-[11px] uppercase tracking-[0.18em] text-bronze font-medium">
        <span className="inline-block h-px w-6 bg-bronze transition-all duration-500 group-hover/seg:w-10" />
        Learn more
      </div>
    </motion.div>
  );
}

export function WhoWeServe() {
  const reduce = useReducedMotion();

  return (
    <section className="section-pad surface-stone relative overflow-hidden">
      <motion.div
        aria-hidden
        className="pointer-events-none absolute -right-32 top-12 h-[26rem] w-[26rem] rounded-full blur-3xl"
        style={{
          background:
            "radial-gradient(circle, rgba(179,150,100,0.14) 0%, transparent 68%)",
        }}
        animate={
          reduce
            ? undefined
            : { x: [0, 22, 0], y: [0, -16, 0], opacity: [0.7, 1, 0.7] }
        }
        transition={
          reduce
            ? undefined
            : { duration: 14, ease: "easeInOut", repeat: Infinity }
        }
      />

      <div className="relative container-tb">
        <SectionHeader
          eyebrow="Who we serve"
          title="Capital from everywhere. Invested in India."
          accent="trust"
        />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 lg:gap-14 border-t border-border">
          {segments.map((s, i) => (
            <SegmentCard key={s.title} s={s} i={i} />
          ))}
        </div>
      </div>
    </section>
  );
}