import { Link } from "react-router-dom";
import { Reveal } from "@/components/common/Reveal";
import { media } from "@/data/media";
import { asOfQuarter } from "@/lib/format";

const funds = [
  {
    title: "Multiplier Fund",
    status: "Open",
    reg: "IN/AIF2/21-22/0928",
    to: "/strategies/multiplier",
  },
  {
    title: "Opportunity Fund",
    status: "Closed",
    reg: "IN/AIF2/13-14/0068",
    to: "/strategies/opportunity",
  },
];

export function About() {
  return (
    <section className="section-pad surface-stone">
      <div className="container-tb">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          <div className="lg:col-span-5">
            <Reveal>
              <div className="accent-bar mb-6" />
              <p className="eyebrow mb-6">About</p>
              <p className="font-display text-[clamp(5rem,12vw,8.5rem)] leading-none text-charcoal tracking-tight tabular-nums">
                30<span className="text-crimson-500 text-3xl align-super">+</span>
              </p>
              <p className="mt-4 text-sm uppercase tracking-[0.16em] text-slate-blue">
                Years of real estate discipline
              </p>
              <p className="mt-2 text-[10px] uppercase tracking-[0.18em] text-slate/70 tabular-nums">
                {asOfQuarter()}
              </p>
              <div className="img-fill mt-10 overflow-hidden rounded-[12px] border border-border aspect-[4/3]">
                <img
                  className="img-fill__base"
                  src={media.about.src}
                  alt={media.about.alt}
                  loading="lazy"
                  decoding="async"
                />
                <img
                  className="img-fill__color"
                  src={media.about.src}
                  alt=""
                  aria-hidden="true"
                  loading="lazy"
                  decoding="async"
                />
              </div>
            </Reveal>
          </div>

          <div className="lg:col-span-7">
            <Reveal>
              <h2 className="display-2 text-balance max-w-2xl">
                One discipline, refined through every cycle.
              </h2>
            </Reveal>

            <div className="mt-8 space-y-5 text-lg leading-relaxed text-slate max-w-2xl prose-institutional">
              <Reveal delay={0.05}>
                <p>
                  Real estate is what we have done for more than three decades. Through every cycle
                  of growth and recession, we have refined the same craft — becoming more precise,
                  more disciplined, and more effective with time.
                </p>
              </Reveal>
              <Reveal delay={0.1}>
                <p>
                  That discipline has taken different forms — portfolio management services, our two
                  SEBI-registered Category II AIFs, and exclusive deal-level transactions structured
                  with family offices. The vehicle has changed. The discipline has not.
                </p>
              </Reveal>
            </div>

            <div className="mt-12 border-t border-border">
              {funds.map((fund) => (
                <Link
                  key={fund.reg}
                  to={fund.to}
                  className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 py-5 border-b border-border group"
                >
                  <div>
                    <p className="font-display text-xl text-charcoal group-hover:text-crimson-500 transition-colors">
                      {fund.title}
                    </p>
                    <p className="text-sm text-slate-blue mt-1 font-mono">{fund.reg}</p>
                  </div>
                  <span
                    className={`text-xs uppercase tracking-[0.14em] ${
                      fund.status === "Open" ? "text-crimson-500" : "text-bronze"
                    }`}
                  >
                    {fund.status}
                  </span>
                </Link>
              ))}
            </div>

            <Reveal delay={0.15}>
              <Link
                to="/about"
                className="inline-block mt-8 text-sm uppercase tracking-[0.1em] text-charcoal link-underline"
              >
                Read about the firm
              </Link>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
