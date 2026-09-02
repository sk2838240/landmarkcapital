import { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { ArrowRight, BookOpen } from "lucide-react";
import { Icon } from "@/components/common/Icon";
import { timeline } from "@/data/timeline";

/**
 * Sticky-rail timeline — left column (eyebrow / headline / lede / CTA)
 * stays fixed while the right column scrolls, with each milestone
 * highlighted as it enters the viewport's vertical centre band.
 */
export function Timeline() {
  const itemRefs = useRef<Array<HTMLElement | null>>([]);

  useEffect(() => {
    const items = itemRefs.current.filter(Boolean) as HTMLElement[];
    if (items.length === 0) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            items.forEach((i) => i.classList.remove("is-active"));
            entry.target.classList.add("is-active");
          }
        });
      },
      { root: null, rootMargin: "-45% 0px -45% 0px", threshold: 0 },
    );

    items.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <section className="section-pad surface-stone">
      <div className="container-tb">
        <div className="grid gap-12 lg:gap-16 lg:flex lg:items-start">
          {/* Left rail — sticky on lg+ */}
          <aside className="lg:sticky lg:top-32 lg:flex-none lg:w-[400px]">
            <span className="inline-block bg-crimson-500 text-white text-[11px] font-bold tracking-[0.2em] uppercase px-3 py-1.5 mb-6">
              Our Journey
            </span>
            <h2 className="font-display text-[clamp(2.25rem,4vw,3rem)] leading-[1.05] tracking-[-0.02em] text-charcoal text-balance">
              Milestones That Built Our{" "}
              <em className="italic text-crimson-500">Foundation</em>
            </h2>
            <div className="w-12 h-[3px] bg-crimson-500 mt-5 mb-6" />
            <p className="text-[15.5px] leading-relaxed text-slate max-w-[400px]">
              A record of disciplined thinking through every market cycle — key milestones that shaped
              our platform, published research, and sector-defining perspective.
            </p>
            <Link
              to="/strategies"
              className="group inline-flex items-center gap-2.5 mt-7 px-5 py-3 border-[1.5px] border-crimson-500 text-crimson-500 text-[13px] font-bold tracking-[0.05em] uppercase transition-colors duration-200 hover:bg-crimson-500 hover:text-white"
            >
              Explore Our Strategies
              <Icon
                as={ArrowRight}
                size={14}
                strokeWidth={1.75}
                className="transition-transform duration-200 group-hover:translate-x-1"
              />
            </Link>
          </aside>

          {/* Right — scrolling timeline */}
          <div className="relative flex-1 lg:pl-28">
            <div
              className="absolute top-2 bottom-2 w-px bg-border"
              style={{ left: "calc(2.25rem - 0.5px)" }}
              aria-hidden
            />

            {timeline.map((item, i) => (
              <article
                key={item.year}
                ref={(el) => {
                  itemRefs.current[i] = el;
                }}
                className="timeline-item relative grid grid-cols-[64px_1fr] gap-0 mb-12 lg:mb-14 scroll-mt-32"
                data-year={item.year}
              >
                <div className="absolute -left-12 top-0 w-[64px] text-right pr-3">
                  <span className="font-display italic text-[26px] text-slate leading-none whitespace-nowrap transition-all duration-300">
                    {item.year}
                  </span>
                </div>
                <div
                  className="absolute w-2.5 h-2.5 rounded-full bg-charcoal top-[18px] transition-all duration-300 z-[2]"
                  style={{ left: "calc(2.25rem - 5px)" }}
                  aria-hidden
                />

                <div className="col-start-2 bg-paper border border-border rounded-[14px] p-7 lg:p-8 transition-all duration-300">
                  <h3 className="font-display text-[20px] lg:text-[22px] font-medium leading-snug text-charcoal mb-2.5 transition-colors duration-300">
                    {item.title}
                  </h3>
                  <p className="text-[14px] leading-relaxed text-slate mb-4 max-w-[60ch] transition-colors duration-300">
                    {item.body}
                  </p>
                  <div className="timeline-tag flex items-center gap-2.5 text-[11px] font-bold tracking-[0.15em] uppercase text-bronze transition-colors duration-300 before:content-[''] before:w-5 before:h-0.5 before:bg-bronze before:transition-colors before:duration-300">
                    {item.tag}
                  </div>
                </div>
              </article>
            ))}

            {/* Footer strip */}
            <div className="mt-10 bg-stone border border-border flex flex-wrap items-center justify-between gap-6 p-7">
              <div className="flex items-center gap-5">
                <span className="w-11 h-11 rounded-full bg-paper border border-border grid place-items-center text-crimson-500">
                  <Icon as={BookOpen} size={20} strokeWidth={1.5} />
                </span>
                <p className="m-0 text-[14.5px] font-medium leading-snug">
                  Two decades of learning.
                  <br />
                  Thousands of hours of research. One clear philosophy.
                </p>
              </div>
              <Link
                to="/insights"
                className="group inline-flex items-center gap-2.5 px-5 py-3 border-[1.5px] border-crimson-500 text-crimson-500 text-[13px] font-bold tracking-[0.05em] uppercase transition-colors duration-200 hover:bg-crimson-500 hover:text-white"
              >
                Read Our Insights
                <Icon
                  as={ArrowRight}
                  size={14}
                  strokeWidth={1.75}
                  className="transition-transform duration-200 group-hover:translate-x-1"
                />
              </Link>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        .timeline-item.is-active > div:first-of-type > span {
          color: var(--color-crimson-500, #9E2B25);
          transform: scale(1.08);
          transform-origin: right center;
        }
        .timeline-item.is-active > div[aria-hidden] {
          width: 15px; height: 15px; left: calc(2.25rem - 7.5px);
          background: var(--color-crimson-500, #9E2B25);
          box-shadow: 0 0 0 5px rgba(158,43,37,0.16);
        }
        .timeline-item.is-active > div:last-child {
          background: linear-gradient(135deg,#B23A31,#8E241E);
          border-color: transparent;
          transform: translateX(4px);
          box-shadow: 0 18px 40px -14px rgba(122,31,27,0.45);
        }
        .timeline-item.is-active > div:last-child h3,
        .timeline-item.is-active > div:last-child .timeline-tag {
          color: #fff;
        }
        .timeline-item.is-active > div:last-child p {
          color: rgba(255,255,255,0.88);
        }
        .timeline-item.is-active > div:last-child .timeline-tag::before {
          background: rgba(255,255,255,0.7);
        }
      `}</style>
    </section>
  );
}
