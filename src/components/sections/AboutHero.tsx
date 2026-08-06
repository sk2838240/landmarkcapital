import { type MouseEvent } from "react";
import { Link } from "react-router-dom";
import { ArrowUpRight, ArrowRight } from "lucide-react";
import { motion, useReducedMotion } from "framer-motion";
import { Reveal } from "@/components/common/Reveal";
import { Icon } from "@/components/common/Icon";
import { getLenis } from "@/hooks/useLenis";
import { cn } from "@/lib/utils";

function scrollToHash(e: MouseEvent<HTMLAnchorElement>, hash: string) {
  const id = hash.replace(/^#/, "");
  const target = document.getElementById(id);
  if (!target) return;
  e.preventDefault();
  const lenis = getLenis();
  if (lenis) {
    lenis.scrollTo(target, { offset: -80, duration: 1.1 });
  } else {
    target.scrollIntoView({ behavior: "smooth", block: "start" });
  }
}

/**
 * Editorial About hero — an elevated interpretation of the client reference.
 *
 * Composition:
 *  · Dark midnight surface with layered radial gradients + film grain
 *  · Row 1 — eyebrow + accent bar + serif display headline + narrative
 *  · Row 2 — three "portal" cards on the left (Overview / Life at Landmark /
 *    Careers) and an editorial "Explore More" rail on the right with
 *    animated arrow links and a Contact Us CTA
 *  · Bottom rule — SEBI / Deal-by-Deal / Pan-India trust marks
 *
 * All cards use a cinematic scrim and a ken-burns micro-zoom on hover.
 */

type Portal = {
  label: string;
  cta: string;
  to: string;
  image: string;
  alt: string;
  index: string;
};

const portals: Portal[] = [
  {
    label: "Overview",
    cta: "The Firm",
    to: "#story",
    image:
      "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1400&q=80",
    alt: "Institutional commercial architecture at dusk",
    index: "01",
  },
  {
    label: "Life at Landmark",
    cta: "Our Culture",
    to: "/leadership",
    image:
      "https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=1400&q=80",
    alt: "Professional team in discussion around a table",
    index: "02",
  },
  {
    label: "Careers",
    cta: "View Openings",
    to: "/contact",
    image:
      "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?auto=format&fit=crop&w=1400&q=80",
    alt: "Professional walking with a leather briefcase",
    index: "03",
  },
];

const exploreLinks = [
  { label: "Our Leaders", to: "/leadership" },
  { label: "Our Growth Story", to: "#timeline" },
  { label: "Our Partners", to: "/insights" },
];

const trustMarks = ["SEBI-Registered AIF", "Deal-by-Deal", "Pan-India", "30+ Years"];

export function AboutHero() {
  const reduce = useReducedMotion();

  return (
    <section
      className="relative overflow-hidden pt-32 pb-16 lg:pt-40 lg:pb-20"
      style={{
        background:
          "radial-gradient(120% 90% at 100% 0%, rgba(179,150,100,0.12) 0%, transparent 55%), " +
          "radial-gradient(80% 60% at 0% 100%, rgba(47,68,88,0.55) 0%, transparent 60%), " +
          "linear-gradient(180deg, #1a242e 0%, #14202b 60%, #101820 100%)",
      }}
    >
      {/* subtle noise / paper grain */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 opacity-[0.06] mix-blend-overlay"
        style={{
          backgroundImage:
            "url(\"data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='200' height='200'><filter id='n'><feTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='2' stitchTiles='stitch'/><feColorMatrix values='0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.7 0'/></filter><rect width='100%' height='100%' filter='url(%23n)'/></svg>\")",
        }}
      />
      {/* faint bronze corner ornament */}
      <div
        aria-hidden
        className="pointer-events-none absolute -top-24 -right-24 w-[520px] h-[520px] rounded-full blur-3xl"
        style={{
          background:
            "radial-gradient(circle, rgba(179,150,100,0.22) 0%, transparent 65%)",
        }}
      />

      <div className="relative container-tb">
        {/* Row 1 — Editorial title block */}
        <Reveal>
          <div className="flex items-center gap-4 mb-6">
            <span className="w-10 h-[2px] bg-bronze" aria-hidden />
            <p className="text-[11px] uppercase tracking-[0.22em] text-bronze font-medium">
              About Landmark
            </p>
          </div>
        </Reveal>

        <div className="grid lg:grid-cols-12 gap-8 lg:gap-16 items-end mb-16 lg:mb-20">
          <div className="lg:col-span-8">
            <Reveal delay={0.05}>
              <h1 className="font-display font-normal text-white text-balance leading-[1.02] tracking-[-0.03em] text-[clamp(2.5rem,6.4vw,5.25rem)]">
                Institutional real estate,{" "}
                <em className="italic text-bronze/95">refined</em> through every cycle.
              </h1>
            </Reveal>
          </div>
          <div className="lg:col-span-4 lg:pb-2">
            <Reveal delay={0.12}>
              <p className="text-white/75 leading-relaxed max-w-md text-[15px] lg:text-base">
                A SEBI-registered Alternative Investment Fund manager operating two real
                estate funds and a deal-by-deal transaction platform across India — built on
                three decades of disciplined execution.
              </p>
            </Reveal>
          </div>
        </div>

        {/* Row 2 — Portals + Explore More rail */}
        <div className="grid lg:grid-cols-12 gap-6 lg:gap-10">
          {/* Left: 3 portal cards */}
          <div className="lg:col-span-8">
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 lg:gap-5">
              {portals.map((p, i) => (
                <Reveal key={p.label} delay={0.05 + i * 0.06}>
                  <PortalCard portal={p} reduce={!!reduce} />
                </Reveal>
              ))}
            </div>
          </div>

          {/* Right: Explore More rail */}
          <aside className="lg:col-span-4 lg:pl-2">
            <Reveal delay={0.08}>
              <div className="relative">
                <p className="text-[11px] uppercase tracking-[0.22em] text-bronze/80 mb-3">
                  Continue
                </p>
                <h2 className="font-display text-white text-[clamp(2rem,3.4vw,2.75rem)] leading-[1.05] tracking-tight mb-8">
                  Explore <em className="italic text-bronze">More</em>
                </h2>
              </div>
            </Reveal>

            <ul className="border-t border-white/12">
              {exploreLinks.map((l, i) => (
                <Reveal key={l.label} delay={0.12 + i * 0.05}>
                  <li className="border-b border-white/12">
                    <ExploreLink to={l.to} label={l.label} />
                  </li>
                </Reveal>
              ))}
            </ul>

            <Reveal delay={0.28}>
              <Link
                to="/contact"
                className="group mt-8 inline-flex items-center gap-3 h-12 pl-6 pr-5 rounded-full bg-white text-charcoal font-medium text-[13px] tracking-[0.08em] uppercase transition-all duration-300 hover:bg-bronze hover:text-white shadow-[0_10px_30px_-10px_rgba(0,0,0,0.5)]"
              >
                Contact Us
                <span className="grid place-items-center w-7 h-7 rounded-full bg-charcoal text-white transition-transform duration-300 group-hover:translate-x-0.5 group-hover:bg-white group-hover:text-bronze">
                  <Icon as={ArrowRight} size={14} strokeWidth={1.75} />
                </span>
              </Link>
            </Reveal>
          </aside>
        </div>

        {/* Bottom — trust marks strip */}
        <Reveal delay={0.3}>
          <div className="mt-16 lg:mt-20 pt-6 border-t border-white/12">
            <div className="flex flex-wrap items-center gap-x-10 gap-y-3">
              {trustMarks.map((mark) => (
                <span
                  key={mark}
                  className="text-[11px] uppercase tracking-[0.18em] text-white/60"
                >
                  {mark}
                </span>
              ))}
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

/* ————————————————————————————————————————————————————————— */

function PortalCard({ portal, reduce }: { portal: Portal; reduce: boolean }) {
  const isHash = portal.to.startsWith("#");
  const Wrapper: React.ElementType = isHash ? "a" : Link;
  const wrapperProps = isHash
    ? {
        href: portal.to,
        onClick: (e: MouseEvent<HTMLAnchorElement>) => scrollToHash(e, portal.to),
      }
    : { to: portal.to };

  return (
    <Wrapper
      {...wrapperProps}
      className={cn(
        "group relative block aspect-[4/5] overflow-hidden rounded-[14px] bg-charcoal",
        "ring-1 ring-white/10 transition-all duration-500",
        "hover:ring-bronze/60 hover:shadow-[0_30px_80px_-40px_rgba(179,150,100,0.55)]",
      )}
    >
      {/* image with ken-burns zoom */}
      <motion.img
        src={portal.image}
        alt={portal.alt}
        loading="lazy"
        decoding="async"
        className="absolute inset-0 w-full h-full object-cover"
        initial={{ scale: 1.02 }}
        whileHover={reduce ? undefined : { scale: 1.08 }}
        transition={{ duration: 1.1, ease: [0.16, 1, 0.3, 1] }}
      />

      {/* cinematic scrim */}
      <div
        aria-hidden
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(180deg, rgba(20,26,32,0) 0%, rgba(20,26,32,0.15) 45%, rgba(20,26,32,0.85) 100%)",
        }}
      />
      {/* top-left index chip */}
      <div className="absolute top-3.5 left-3.5 flex items-center gap-2 pl-2 pr-3 py-1 rounded-full bg-white/10 backdrop-blur-md border border-white/15">
        <span className="w-1.5 h-1.5 rounded-full bg-bronze" aria-hidden />
        <span className="text-[10px] font-mono tracking-[0.14em] text-white/85">
          {portal.index}
        </span>
      </div>

      {/* Bottom content */}
      <div className="absolute inset-x-0 bottom-0 p-5 lg:p-6">
        <h3 className="font-display text-white text-2xl lg:text-[1.75rem] leading-tight text-balance">
          {portal.label}
        </h3>
        <div className="mt-3 flex items-center gap-2 text-white/90">
          <span className="text-[11px] uppercase tracking-[0.16em]">{portal.cta}</span>
          <span
            className={cn(
              "inline-flex items-center justify-center w-6 h-6 rounded-full bg-white/15 border border-white/25 backdrop-blur-sm",
              "transition-all duration-300 group-hover:bg-bronze group-hover:border-bronze group-hover:translate-x-1",
            )}
          >
            <Icon as={ArrowUpRight} size={12} strokeWidth={1.75} className="text-white" />
          </span>
        </div>
      </div>

      {/* bottom accent bar reveal on hover */}
      <span
        aria-hidden
        className="absolute left-5 right-5 bottom-0 h-[2px] bg-bronze origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-500 ease-out"
      />
    </Wrapper>
  );
}

function ExploreLink({ to, label }: { to: string; label: string }) {
  const isHash = to.startsWith("#");
  const Wrapper: React.ElementType = isHash ? "a" : Link;
  const wrapperProps = isHash
    ? {
        href: to,
        onClick: (e: MouseEvent<HTMLAnchorElement>) => scrollToHash(e, to),
      }
    : { to };

  return (
    <Wrapper
      {...wrapperProps}
      className="group flex items-center justify-between gap-6 py-4 lg:py-[18px] text-white/90 hover:text-white transition-colors"
    >
      <span className="font-display text-[1.35rem] lg:text-2xl leading-tight">
        {label}
      </span>
      <span
        aria-hidden
        className="relative w-9 h-9 shrink-0 rounded-full grid place-items-center border border-white/20 transition-all duration-300 group-hover:border-bronze group-hover:bg-bronze/15"
      >
        <ArrowUpRight
          className="w-4 h-4 text-white/85 transition-transform duration-300 group-hover:text-bronze group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
          strokeWidth={1.5}
        />
      </span>
    </Wrapper>
  );
}
