import { useRef, useState } from "react";
import { Link } from "react-router-dom";
import { motion, useReducedMotion } from "framer-motion";
import { Play, ArrowUpRight } from "lucide-react";
import { Reveal } from "@/components/common/Reveal";
import { Icon } from "@/components/common/Icon";
import { media } from "@/data/media";
import { team } from "@/data/team";

// Spotlight the Managing Partner & Fund Manager. Pulled from team data so the
// bio, role and credentials stay in sync with the Leadership page.
const ashish = team.find((m) => m.id === "ashish-joshi")!;

function FundManagerVideo() {
  const reduce = useReducedMotion();
  const videoRef = useRef<HTMLVideoElement>(null);
  const [playing, setPlaying] = useState(false);

  return (
    <div className="relative aspect-video w-full overflow-hidden rounded-[12px] border border-border bg-charcoal">
      <video
        ref={videoRef}
        className="h-full w-full object-cover"
        poster={media.founder.poster}
        src={media.founder.src}
        controls={playing}
        playsInline
        preload="none"
        // Overlay is driven by real playback events, so a missing source
        // simply leaves the poster in place instead of flashing an empty player.
        onPlay={() => setPlaying(true)}
        onPause={() => setPlaying(false)}
        onEnded={() => setPlaying(false)}
        onError={() => setPlaying(false)}
      />

      {!playing && (
        <button
          type="button"
          onClick={() => void videoRef.current?.play()}
          aria-label={`Play video — ${ashish.name}, ${ashish.role}`}
          className="group absolute inset-0 grid place-items-center bg-gradient-to-t from-charcoal/70 via-charcoal/10 to-charcoal/25 transition-colors duration-500 hover:from-charcoal/60"
        >
          <span className="relative grid place-items-center">
            {!reduce && (
              <motion.span
                aria-hidden
                className="absolute inset-0 rounded-full bg-crimson-500/40"
                animate={{ scale: [1, 1.65], opacity: [0.5, 0] }}
                transition={{ duration: 2.4, ease: "easeOut", repeat: Infinity }}
              />
            )}
            <span className="relative grid h-16 w-16 place-items-center rounded-full bg-crimson-500 text-white shadow-[0_8px_30px_rgba(183,53,58,0.45)] transition-transform duration-300 group-hover:scale-105 md:h-20 md:w-20">
              <Icon as={Play} size={26} strokeWidth={1.5} fill="currentColor" className="translate-x-[2px]" />
            </span>
          </span>

          <span className="absolute bottom-5 left-5 text-left">
            <span className="block text-[11px] uppercase tracking-[0.18em] text-white/70">Watch</span>
            <span className="mt-1 block font-display text-lg text-white">
              In conversation with the Fund Manager
            </span>
          </span>
        </button>
      )}
    </div>
  );
}

export function LeadershipSpotlight() {
  return (
    <section className="section-pad surface-ivory">
      <div className="container-tb">
        <div className="mb-14 flex flex-col justify-between gap-6 lg:flex-row lg:items-end">
          <Reveal>
            <div className="accent-bar mb-5" />
            <p className="eyebrow mb-5">Leadership</p>
            <h2 className="display-2 text-balance max-w-xl">Led from the front.</h2>
          </Reveal>
          <Reveal delay={0.05}>
            <Link
              to="/leadership"
              className="inline-flex items-center gap-2 text-sm uppercase tracking-[0.1em] text-charcoal link-underline"
            >
              Meet the full team
              <Icon as={ArrowUpRight} size={16} strokeWidth={1.5} />
            </Link>
          </Reveal>
        </div>

        <div className="grid grid-cols-1 items-center gap-10 lg:grid-cols-12 lg:gap-16">
          <Reveal className="lg:col-span-7">
            <FundManagerVideo />
          </Reveal>

          <div className="lg:col-span-5">
            <Reveal>
              <h3 className="font-display text-3xl text-charcoal lg:text-4xl">{ashish.name}</h3>
              <p className="mt-2 text-sm uppercase tracking-[0.1em] text-crimson-500">{ashish.role}</p>
              <div className="accent-bar-bronze mt-5 mb-6" />
              <p className="text-lg leading-relaxed text-slate">
                Landmark&rsquo;s investment discipline is led from the front &mdash; by the Fund
                Manager who sources, structures and closes every transaction.
              </p>
            </Reveal>

            <Reveal delay={0.05}>
              <ul className="mt-6 space-y-3">
                {ashish.bio.map((line) => (
                  <li key={line} className="flex gap-3 leading-relaxed text-slate">
                    <span className="mt-2.5 h-1.5 w-1.5 shrink-0 rounded-full bg-crimson-500" />
                    <span>{line}</span>
                  </li>
                ))}
              </ul>
            </Reveal>

            {ashish.credentials && (
              <Reveal delay={0.1}>
                <p className="mt-6 text-xs uppercase tracking-[0.12em] text-slate-blue">
                  {ashish.credentials}
                </p>
              </Reveal>
            )}

            {ashish.linkedin && (
              <Reveal delay={0.12}>
                <a
                  href={ashish.linkedin}
                  target="_blank"
                  rel="noreferrer"
                  className="mt-5 inline-block text-xs uppercase tracking-[0.12em] text-crimson-500 link-underline"
                >
                  Connect on LinkedIn
                </a>
              </Reveal>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
