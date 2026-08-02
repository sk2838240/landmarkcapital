import { Reveal } from "@/components/common/Reveal";
import { ButtonLink } from "@/components/common/Button";
import { Logo } from "@/components/common/Logo";
import { media } from "@/data/media";

const trustMarks = ["SEBI-Registered AIF", "Deal-by-Deal", "Pan-India", "Patient Capital"];

export function Hero() {
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
          <div className="accent-bar-bronze mb-6 bg-bronze" />
          <h1 className="display-1 text-white max-w-3xl text-balance">
            Not More Real Estate. Better Real Estate.
          </h1>
        </Reveal>

        <Reveal delay={0.1}>
          <p className="mt-6 text-lg lg:text-xl text-white/80 max-w-xl leading-relaxed">
            Patient capital. Selected deals. Built for India.
          </p>
        </Reveal>

        <Reveal delay={0.15}>
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
