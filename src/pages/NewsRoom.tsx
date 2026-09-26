import { Link } from "react-router-dom";
import { PageHero } from "@/components/common/PageHero";
import { Reveal } from "@/components/common/Reveal";
import { Icon } from "@/components/common/Icon";
import { Seo } from "@/components/common/Seo";
import { blogs } from "@/data/blogs";
import { interviews } from "@/data/interviews";
import { ArrowUpRight, Play } from "lucide-react";

function formatDate(iso: string) {
  return new Date(iso).toLocaleDateString("en-IN", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });
}

export default function NewsRoom() {
  return (
    <>
      <Seo
        title="News Room"
        description="Articles, perspectives and media from Landmark Capital — evidence-led notes on Indian real estate, warehousing, capital markets and regulation."
      />
      <PageHero
        eyebrow="News Room"
        title="Articles and perspectives from Landmark Capital."
        subtitle="Everything we publish in one place — research notes, market commentary and conversations with the team."
        tone="stone"
      />

      <section className="section-pad surface-ivory">
        <div className="container-tb">
          <Reveal>
            <div className="flex items-center gap-4 mb-8">
              <span className="accent-bar" />
              <h2 className="eyebrow !mb-0">Articles</h2>
            </div>
          </Reveal>
          <div className="border-t border-border">
            {blogs.map((blog, i) => (
              <Reveal key={blog.slug} delay={Math.min(i * 0.02, 0.2)}>
                <Link
                  to={`/insights/${blog.slug}`}
                  className="grid grid-cols-1 lg:grid-cols-12 gap-6 group py-10 border-b border-border"
                >
                  <div className="lg:col-span-2 flex items-start gap-3">
                    <span className="font-mono text-xs text-bronze tabular-nums">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    {blog.category && (
                      <span className="text-[10px] uppercase tracking-[0.14em] text-crimson-500">
                        {blog.category}
                      </span>
                    )}
                  </div>
                  <div className="lg:col-span-7">
                    <h3 className="display-3 text-charcoal group-hover:text-crimson-500 transition-colors text-balance">
                      {blog.title}
                    </h3>
                    <p className="mt-4 text-base text-slate leading-relaxed max-w-2xl line-clamp-3">
                      {blog.excerpt}
                    </p>
                  </div>
                  <div className="lg:col-span-3 flex flex-col gap-3 lg:items-end justify-between">
                    <div className="lg:text-right">
                      <p className="text-sm font-medium text-charcoal">{blog.author}</p>
                      <p className="text-xs text-slate-blue mt-1 tabular-nums">
                        {formatDate(blog.date)}
                      </p>
                    </div>
                    <span className="inline-flex items-center gap-1 text-xs uppercase tracking-[0.14em] text-charcoal group-hover:text-crimson-500 transition-colors">
                      Read
                      <Icon as={ArrowUpRight} size={14} />
                    </span>
                  </div>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="section-pad surface-stone">
        <div className="container-tb">
          <Reveal>
            <div className="flex items-center gap-4 mb-8">
              <span className="accent-bar" />
              <h2 className="eyebrow !mb-0">In the media</h2>
            </div>
          </Reveal>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {interviews.map((item, i) => (
              <Reveal key={item.id} delay={Math.min(i * 0.05, 0.2)}>
                <article className="group relative flex flex-col overflow-hidden rounded-[16px] bg-paper border border-border shadow-sm h-full">
                  <div className="relative aspect-video overflow-hidden">
                    <img
                      src={item.thumbnail}
                      alt={item.thumbnailAlt}
                      loading="lazy"
                      decoding="async"
                      className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 ease-out group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#0d1821]/60 to-transparent" />
                    <span className="absolute bottom-3 right-3 inline-flex items-center gap-1.5 rounded-full bg-black/60 px-3 py-1 text-[11px] font-medium text-white tabular-nums">
                      <Icon as={Play} size={12} />
                      {item.duration}
                    </span>
                  </div>
                  <div className="flex flex-col flex-1 p-6">
                    <p className="text-[10px] uppercase tracking-[0.2em] text-bronze/80 mb-2">
                      {item.eyebrow}
                    </p>
                    <h3 className="text-lg font-medium text-charcoal text-balance">
                      {item.title}
                    </h3>
                    <p className="mt-3 text-sm text-slate leading-relaxed line-clamp-3">
                      {item.description}
                    </p>
                    <p className="mt-4 text-xs text-slate-blue">
                      {item.speaker.name} — {item.speaker.role}
                    </p>
                  </div>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
