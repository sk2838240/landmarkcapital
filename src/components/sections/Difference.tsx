import { useCallback, useEffect, useId, useRef, useState, type KeyboardEvent } from "react";
import { AnimatePresence, LayoutGroup, motion, useReducedMotion } from "framer-motion";
import { SectionHeader } from "@/components/common/SectionHeader";
import { Reveal } from "@/components/common/Reveal";
import { media } from "@/data/media";
import { durations, easings } from "@/lib/motion";
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
] as const;

const previewTransition = {
  duration: durations.slow,
  ease: easings.outExpo,
};

const copyTransition = {
  duration: durations.base,
  ease: easings.outExpo,
};

const indicatorTransition = {
  duration: durations.base,
  ease: easings.outExpo,
};

const imageVariants = {
  initial: (dir: number) => ({ opacity: 0, scale: 1.06, y: dir * 12 }),
  animate: { opacity: 1, scale: 1, y: 0 },
  exit: (dir: number) => ({ opacity: 0, scale: 1.02, y: dir * -8 }),
};

const fadeVariants = {
  initial: { opacity: 0 },
  animate: { opacity: 1 },
  exit: { opacity: 0 },
};

const copyVariants = {
  initial: (dir: number) => ({ opacity: 0, y: dir * 10 }),
  animate: { opacity: 1, y: 0 },
  exit: (dir: number) => ({ opacity: 0, y: dir * -8 }),
};

export function Difference() {
  const reduce = useReducedMotion();
  const uid = useId();
  const [active, setActive] = useState(0);
  const prevActive = useRef(0);
  const hoverTimer = useRef<ReturnType<typeof setTimeout> | null>(null);
  const tabRefs = useRef<(HTMLButtonElement | null)[]>([]);

  const direction = active >= prevActive.current ? 1 : -1;
  const current = differences[active];
  const visual = media.principles[active];
  const panelId = `${uid}-panel`;
  const variants = reduce ? fadeVariants : imageVariants;
  const textVariants = reduce ? fadeVariants : copyVariants;

  useEffect(() => {
    prevActive.current = active;
  }, [active]);

  useEffect(() => {
    media.principles.forEach(({ src }) => {
      const img = new Image();
      img.src = src;
    });
  }, []);

  useEffect(
    () => () => {
      if (hoverTimer.current) clearTimeout(hoverTimer.current);
    },
    [],
  );

  const select = useCallback(
    (index: number) => {
      if (hoverTimer.current) {
        clearTimeout(hoverTimer.current);
        hoverTimer.current = null;
      }
      setActive(index);
      const el = tabRefs.current[index];
      const scroller = el?.parentElement;
      if (el && scroller && scroller.scrollWidth > scroller.clientWidth) {
        el.scrollIntoView({
          behavior: reduce ? "auto" : "smooth",
          inline: "center",
          block: "nearest",
        });
      }
    },
    [reduce],
  );

  const preview = useCallback((index: number) => {
    if (hoverTimer.current) clearTimeout(hoverTimer.current);
    hoverTimer.current = setTimeout(() => setActive(index), 80);
  }, []);

  const onListKeyDown = (event: KeyboardEvent<HTMLDivElement>) => {
    const last = differences.length - 1;
    let next: number | null = null;

    if (event.key === "ArrowDown" || event.key === "ArrowRight") next = active === last ? 0 : active + 1;
    if (event.key === "ArrowUp" || event.key === "ArrowLeft") next = active === 0 ? last : active - 1;
    if (event.key === "Home") next = 0;
    if (event.key === "End") next = last;

    if (next === null) return;
    event.preventDefault();
    select(next);
    tabRefs.current[next]?.focus();
  };

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

        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 lg:gap-16">
          <Reveal className="md:col-span-5 md:self-start">
            <LayoutGroup id={`${uid}-indicator-group`}>
              <div
                role="tablist"
                aria-label="The Landmark Difference principles"
                onKeyDown={onListKeyDown}
                className="flex md:flex-col gap-0 overflow-x-auto md:overflow-visible snap-x snap-mandatory md:snap-none -mx-1 px-1 pb-1 md:pb-0 md:mx-0 md:px-0 border-b md:border-b-0 md:border-t border-border [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden"
              >
                {differences.map((d, i) => {
                  const isActive = active === i;
                  const tabId = `${uid}-tab-${i}`;

                  return (
                    <button
                      key={d.title}
                      ref={(node) => {
                        tabRefs.current[i] = node;
                      }}
                      type="button"
                      role="tab"
                      id={tabId}
                      aria-selected={isActive}
                      aria-controls={panelId}
                      tabIndex={isActive ? 0 : -1}
                      onClick={() => select(i)}
                      onPointerEnter={(event) => {
                        if (event.pointerType === "mouse") preview(i);
                      }}
                      className={cn(
                        "relative shrink-0 snap-start text-left py-3.5 md:py-4 px-4 md:px-0 md:pl-4 border-r md:border-r-0 border-b-0 md:border-b border-border transition-[color,background-color] duration-300 ease-[cubic-bezier(0.16,1,0.3,1)] flex items-baseline gap-3 md:gap-4 min-w-[min(72vw,20rem)] md:min-w-0 md:w-full focus-visible:outline-offset-[-2px]",
                        isActive
                          ? "text-crimson-500 bg-crimson-50/70 md:bg-crimson-50/50"
                          : "text-charcoal hover:text-crimson-500 hover:bg-ivory/60",
                      )}
                    >
                      {isActive &&
                        (reduce ? (
                          <span
                            aria-hidden
                            className="absolute bg-crimson-500 left-4 right-4 bottom-0 h-[2px] md:left-0 md:right-auto md:top-[18%] md:bottom-[18%] md:h-auto md:w-[2px]"
                          />
                        ) : (
                          <motion.span
                            layoutId={`${uid}-indicator`}
                            aria-hidden
                            className="absolute bg-crimson-500 left-4 right-4 bottom-0 h-[2px] md:left-0 md:right-auto md:top-[18%] md:bottom-[18%] md:h-auto md:w-[2px]"
                            transition={indicatorTransition}
                          />
                        ))}
                      <span
                        className={cn(
                          "text-xs font-mono shrink-0 transition-colors duration-300",
                          isActive ? "text-crimson-500" : "text-bronze",
                        )}
                      >
                        {String(i + 1).padStart(2, "0")}
                      </span>
                      <span className="font-display text-[1.05rem] md:text-xl leading-snug">{d.title}</span>
                    </button>
                  );
                })}
              </div>
            </LayoutGroup>
          </Reveal>

          <Reveal delay={0.06} className="md:col-span-7 lg:col-span-6 lg:col-start-7">
            <div
              role="tabpanel"
              id={panelId}
              aria-labelledby={`${uid}-tab-${active}`}
              aria-live="polite"
            >
              <div className="relative overflow-hidden rounded-[12px] border border-border bg-stone aspect-[4/3] lg:aspect-[5/4]">
                <AnimatePresence initial={false} custom={direction}>
                  <motion.img
                    key={visual.src}
                    src={visual.src}
                    alt={visual.alt}
                    custom={direction}
                    variants={variants}
                    initial="initial"
                    animate="animate"
                    exit="exit"
                    transition={reduce ? { duration: 0 } : previewTransition}
                    className="absolute inset-0 h-full w-full object-cover"
                    sizes="(min-width: 768px) 50vw, 100vw"
                    decoding="async"
                    draggable={false}
                  />
                </AnimatePresence>

                <div
                  aria-hidden
                  className="absolute inset-0 z-[1] pointer-events-none bg-gradient-to-t from-charcoal/25 via-transparent to-charcoal/10"
                />

                <div className="absolute top-4 left-4 z-[2]">
                  <span className="inline-flex items-center gap-2 rounded-full bg-ivory/92 backdrop-blur-sm border border-white/40 px-3 py-1.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-crimson-500" />
                    <span className="text-[0.65rem] uppercase tracking-[0.16em] text-charcoal font-medium tabular-nums">
                      {String(active + 1).padStart(2, "0")} / {String(differences.length).padStart(2, "0")}
                    </span>
                  </span>
                </div>
              </div>

              <AnimatePresence mode="wait" initial={false} custom={direction}>
                <motion.div
                  key={current.title}
                  custom={direction}
                  variants={textVariants}
                  initial="initial"
                  animate="animate"
                  exit="exit"
                  transition={reduce ? { duration: 0 } : copyTransition}
                  className="mt-8"
                >
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
                </motion.div>
              </AnimatePresence>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
