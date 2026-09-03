import { useRef } from "react";
import { Link } from "react-router-dom";
import { motion, useInView, useReducedMotion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";

const services = [
  { label: "Investment Management", to: "/strategies" },
  { label: "Acquisitions", to: "/opportunities" },
  { label: "Development Management", to: "/strategies" },
  { label: "Management Services", to: "/about" },
];

const EASE = [0.16, 1, 0.3, 1] as const;

export function ServicesStatement() {
  const reduce = useReducedMotion();
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, amount: 0.2 });

  return (
    <section className="section-pad surface-ivory border-y border-border">
      <div className="container-tb">
        <div ref={ref} className="grid grid-cols-1 gap-12 lg:grid-cols-2 lg:gap-16">
          {/* Left column — main statement */}
          <div className="flex flex-col justify-center">
            <motion.span
              aria-hidden
              className="accent-bar-bronze mb-6 origin-left"
              initial={reduce ? { scaleX: 1 } : { scaleX: 0 }}
              animate={inView ? { scaleX: 1 } : {}}
              transition={reduce ? { duration: 0 } : { duration: 0.8, ease: EASE }}
            />
            <motion.p
              className="eyebrow-accent mb-5"
              initial={reduce ? { opacity: 1, y: 0 } : { opacity: 0, y: 8 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={reduce ? { duration: 0 } : { duration: 0.5, ease: EASE, delay: 0.1 }}
            >
              What we do
            </motion.p>
            <motion.h2
              className="font-display text-[clamp(2rem,4vw,3.25rem)] leading-[1.1] tracking-[-0.015em] text-charcoal text-balance max-w-[18ch]"
              initial={reduce ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={reduce ? { duration: 0 } : { duration: 0.7, ease: EASE, delay: 0.2 }}
            >
              We seek to create value for investors across the{" "}
              <em className="italic text-crimson-500">real estate spectrum.</em>
            </motion.h2>
          </div>

          {/* Right column — service list */}
          <div className="flex flex-col">
            {services.map((service, i) => (
              <motion.div
                key={service.label}
                initial={reduce ? { opacity: 1, y: 0 } : { opacity: 0, y: 16 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={
                  reduce
                    ? { duration: 0 }
                    : { duration: 0.55, ease: EASE, delay: 0.3 + i * 0.08 }
                }
              >
                <Link
                  to={service.to}
                  className={cn(
                    "group relative flex items-center justify-between gap-6 py-7 lg:py-9",
                    "border-t border-border transition-colors duration-300"
                  )}
                >
                  {/* crimson sweep on hover */}
                  <span
                    aria-hidden
                    className={cn(
                      "absolute left-0 right-0 top-0 h-px origin-left scale-x-0 bg-crimson-500",
                      "transition-transform duration-500 ease-[cubic-bezier(0.16,1,0.3,1)]",
                      "group-hover:scale-x-100 group-focus-visible:scale-x-100"
                    )}
                  />

                  <span
                    aria-hidden
                    className={cn(
                      "absolute inset-x-0 -bottom-px h-px origin-right scale-x-0 bg-crimson-500",
                      "transition-transform duration-500 ease-[cubic-bezier(0.16,1,0.3,1)]",
                      "group-hover:scale-x-100 group-focus-visible:scale-x-100"
                    )}
                  />

                  <span
                    aria-hidden
                    className={cn(
                      "absolute inset-0 -z-10 origin-left scale-x-0 bg-crimson-500/[0.04]",
                      "transition-transform duration-500 ease-[cubic-bezier(0.16,1,0.3,1)]",
                      "group-hover:scale-x-100 group-focus-visible:scale-x-100"
                    )}
                  />

                  <span className="font-mono text-[11px] tracking-[0.2em] text-slate-blue transition-colors duration-300 group-hover:text-crimson-500">
                    {String(i + 1).padStart(2, "0")}
                  </span>

                  <span
                    className={cn(
                      "flex-1 font-sans text-[clamp(1.25rem,2vw,1.65rem)] font-medium leading-snug",
                      "text-charcoal transition-colors duration-300",
                      "group-hover:text-crimson-500 group-focus-visible:text-crimson-500"
                    )}
                  >
                    {service.label}
                  </span>

                  <span
                    className={cn(
                      "flex h-11 w-11 shrink-0 items-center justify-center rounded-full",
                      "border border-border text-charcoal bg-paper",
                      "transition-all duration-300 ease-[cubic-bezier(0.16,1,0.3,1)]",
                      "group-hover:border-crimson-500 group-hover:bg-crimson-500",
                      "group-hover:text-white group-hover:translate-x-1.5",
                      "group-focus-visible:border-crimson-500 group-focus-visible:bg-crimson-500",
                      "group-focus-visible:text-white group-focus-visible:translate-x-1.5"
                    )}
                  >
                    <ArrowRight size={18} strokeWidth={1.75} className="-ml-px" />
                  </span>
                </Link>
              </motion.div>
            ))}
            <div className="border-t border-border" />
          </div>
        </div>
      </div>
    </section>
  );
}
