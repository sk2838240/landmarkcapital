import { useState } from "react";
import { Play } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { Reveal } from "@/components/common/Reveal";
import { SectionHeader } from "@/components/common/SectionHeader";
import { interviews, type Interview } from "@/data/interviews";
import { cn } from "@/lib/utils";

/**
 * Leadership Insights — featured interview with a large 16:9 thumbnail
 * and play overlay. On click, if a `videoUrl` is present, it swaps to an
 * inline iframe player; otherwise the play button stays static
 * (placeholder mode for the client design review).
 */
export function Interviews() {
  const featured = interviews[0];
  const [playing, setPlaying] = useState(false);

  return (
    <section className="section-pad surface-ivory">
      <div className="container-tb">
        <SectionHeader
          align="split"
          eyebrow="Leadership insights"
          title="In conversation with the people behind the platform."
          description="A recurring series of long-form interviews with Landmark Capital's investment committee — market perspectives, portfolio thinking and the discipline that underwrites every deal."
        />

        <div className="max-w-4xl">
          <Reveal>
            <FeaturedCard
              item={featured}
              playing={playing}
              onPlay={() => setPlaying(true)}
            />
          </Reveal>

          <Reveal delay={0.05}>
            <div className="mt-8 lg:mt-10">
              <p className="eyebrow-accent mb-3">{featured.eyebrow}</p>
              <h3 className="font-display text-2xl md:text-3xl lg:text-4xl text-charcoal text-balance leading-snug">
                {featured.title}
              </h3>
              <p className="mt-5 text-slate leading-relaxed max-w-2xl">
                {featured.description}
              </p>
              <div className="mt-6 flex items-center gap-4 text-sm text-slate-blue">
                <span className="font-medium text-charcoal">{featured.speaker.name}</span>
                <span className="w-1 h-1 rounded-full bg-border" aria-hidden />
                <span>{featured.speaker.role}</span>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

function FeaturedCard({
  item,
  playing,
  onPlay,
}: {
  item: Interview;
  playing: boolean;
  onPlay: () => void;
}) {
  const canPlay = Boolean(item.videoUrl);

  return (
    <div className="relative aspect-video w-full rounded-[12px] overflow-hidden bg-charcoal shadow-[0_30px_80px_-40px_rgba(36,41,47,0.55)]">
      <AnimatePresence mode="wait">
        {playing && canPlay ? (
          <motion.iframe
            key="player"
            src={item.videoUrl}
            title={item.title}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            className="absolute inset-0 w-full h-full"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
          />
        ) : (
          <motion.div
            key={`thumb-${item.id}`}
            className="absolute inset-0"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.35 }}
          >
            <img
              src={item.thumbnail}
              alt={item.thumbnailAlt}
              className="w-full h-full object-cover"
              loading="lazy"
            />
            <div
              className="absolute inset-0"
              style={{
                background:
                  "linear-gradient(180deg, rgba(36,41,47,0.05) 0%, rgba(36,41,47,0.15) 55%, rgba(36,41,47,0.65) 100%)",
              }}
              aria-hidden
            />

            <div className="absolute top-5 left-5 flex items-center gap-2 px-3 py-1.5 rounded-full bg-paper/85 backdrop-blur-sm">
              <span className="w-1.5 h-1.5 rounded-full bg-crimson-500" aria-hidden />
              <span className="text-[0.65rem] uppercase tracking-[0.16em] text-charcoal font-medium">
                {item.eyebrow}
              </span>
            </div>

            <div className="absolute bottom-5 left-5 right-5 flex items-end justify-between gap-4 text-white">
              <div className="min-w-0">
                <p className="font-display text-lg md:text-xl leading-snug line-clamp-2">
                  {item.title}
                </p>
                <p className="mt-1.5 text-xs opacity-80">
                  {item.speaker.name} · {item.speaker.role}
                </p>
              </div>
              <span className="shrink-0 text-xs tabular-nums px-2 py-1 rounded bg-black/40 backdrop-blur-sm">
                {item.duration}
              </span>
            </div>

            <button
              type="button"
              onClick={onPlay}
              aria-label={`Play interview: ${item.title}`}
              className={cn(
                "absolute inset-0 flex items-center justify-center group",
                !canPlay && "cursor-default"
              )}
            >
              <span className="relative flex items-center justify-center w-16 h-16 md:w-20 md:h-20 rounded-full bg-paper/95 backdrop-blur-sm shadow-[0_10px_40px_-10px_rgba(0,0,0,0.4)] transition-transform duration-300 group-hover:scale-110">
                <span className="absolute inset-0 rounded-full bg-paper/40 animate-ping opacity-40" aria-hidden />
                <Play
                  className="w-6 h-6 md:w-7 md:h-7 text-charcoal fill-charcoal translate-x-[2px]"
                  aria-hidden
                />
              </span>
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
