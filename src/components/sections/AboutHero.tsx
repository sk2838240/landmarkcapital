import { Reveal } from "@/components/common/Reveal";

/**
 * Editorial About hero — light editorial layout on #EFECE7 surface.
 *
 * Composition:
 *  · Light #EFECE7 background
 *  · Eyebrow + accent bar + serif display headline + narrative
 *  · Bottom rule — SEBI / Deal-by-Deal / Pan-India trust marks
 */

const trustMarks = ["SEBI-Registered AIF", "Deal-by-Deal", "Pan-India", "30+ Years"];

export function AboutHero() {
  return (
    <section
      className="relative overflow-hidden pt-32 pb-16 lg:pt-40 lg:pb-20"
      style={{ backgroundColor: "#EFECE7" }}
    >
      {/* warm light wash for depth */}
      <div
        aria-hidden
        className="pointer-events-none absolute -top-24 -right-24 w-[520px] h-[520px] rounded-full blur-3xl"
        style={{
          background:
            "radial-gradient(circle, rgba(179,150,100,0.18) 0%, transparent 65%)",
        }}
      />

      <div className="relative container-tb">
        {/* Editorial title block */}
        <Reveal>
          <div className="flex items-center gap-4 mb-6">
            <span className="w-10 h-[2px] bg-bronze" aria-hidden />
            <p className="text-[11px] uppercase tracking-[0.22em] text-crimson-500 font-medium">
              About Landmark
            </p>
          </div>
        </Reveal>

        <div className="grid lg:grid-cols-12 gap-8 lg:gap-16 items-end">
          <div className="lg:col-span-8">
            <Reveal delay={0.05}>
              <h1 className="font-display font-normal text-charcoal text-balance leading-[1.02] tracking-[-0.03em] text-[clamp(2.5rem,6.4vw,5.25rem)]">
                Institutional real estate,{" "}
                <em className="italic text-crimson-500">refined</em> through every cycle.
              </h1>
            </Reveal>
          </div>
          <div className="lg:col-span-4 lg:pb-2">
            <Reveal delay={0.12}>
              <p className="text-slate leading-relaxed max-w-md text-[15px] lg:text-base">
                A SEBI-registered Alternative Investment Fund manager operating two real
                estate funds and a deal-by-deal transaction platform across India — built on
                three decades of disciplined execution.
              </p>
            </Reveal>
          </div>
        </div>

        {/* Trust marks strip */}
        <Reveal delay={0.2}>
          <div className="mt-16 lg:mt-20 pt-6 border-t border-border">
            <div className="flex flex-wrap items-center gap-x-10 gap-y-3">
              {trustMarks.map((mark) => (
                <span
                  key={mark}
                  className="text-[11px] uppercase tracking-[0.18em] text-slate"
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
