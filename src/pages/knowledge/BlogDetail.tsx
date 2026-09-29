import { useParams, Link, Navigate } from "react-router-dom";
import { getBlogs, getBlog } from "@/lib/cmsData";
import { ArrowLeft, ArrowUpRight } from "lucide-react";
import { Reveal } from "@/components/common/Reveal";
import { Icon } from "@/components/common/Icon";
import { Seo, articleJsonLd } from "@/components/common/Seo";

function formatDate(iso: string) {
  return new Date(iso).toLocaleDateString("en-IN", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });
}

/** Approximate reading time in whole minutes at ~230 wpm. */
function readingTime(text: string) {
  const words = text.trim().split(/\s+/).length;
  return Math.max(1, Math.round(words / 230));
}

export default function BlogDetail() {
  const { slug = "" } = useParams();
  const blog = getBlog(slug);

  if (!blog) {
    return <Navigate to="/newsroom" replace />;
  }

  const allBlogs = getBlogs();
  const otherBlogs = allBlogs.filter((b) => b.slug !== slug).slice(0, 3);
  const readMins = readingTime(blog.excerpt);

  return (
    <article className="bg-ivory">
      <Seo
        title={blog.seo?.metaTitle ?? blog.title}
        description={blog.seo?.metaDescription ?? blog.excerpt}
        path={`/blog/${slug}`}
        image={blog.seo?.ogImage ?? blog.image ?? undefined}
        noindex={blog.seo?.noindex}
        fromCms
        ogType="article"
        publishedTime={blog.date}
        jsonLd={articleJsonLd({
          title: blog.title,
          description: blog.excerpt,
          author: blog.author,
          datePublished: blog.date,
          path: `/blog/${slug}`,
          image: blog.image ?? undefined,
        })}
      />
      <header className="pt-36 lg:pt-44 pb-14 lg:pb-20 border-b border-border surface-stone">
        <div className="container-narrow">
          <Reveal>
            <Link
              to="/newsroom"
              className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.14em] text-slate-blue hover:text-crimson-500 transition-colors mb-10"
            >
              <Icon as={ArrowLeft} size={14} />
              All blogs
            </Link>
          </Reveal>

          <Reveal delay={0.05}>
            <div className="accent-bar mb-6" />
            {blog.category && <p className="eyebrow mb-5">{blog.category}</p>}
            <h1 className="display-1 text-balance">{blog.title}</h1>
          </Reveal>

          <Reveal delay={0.1}>
            <div className="mt-10 flex flex-wrap items-center gap-6 pt-8 border-t border-border">
              <div>
                <p className="text-[10px] uppercase tracking-[0.14em] text-slate-blue">Author</p>
                <p className="text-base text-charcoal mt-1">{blog.author}</p>
              </div>
              <div className="w-px h-10 bg-border" />
              <div>
                <p className="text-[10px] uppercase tracking-[0.14em] text-slate-blue">Published</p>
                <p className="text-base text-charcoal mt-1 tabular-nums">
                  {formatDate(blog.date)}
                </p>
              </div>
              <div className="w-px h-10 bg-border" />
              <div>
                <p className="text-[10px] uppercase tracking-[0.14em] text-slate-blue">
                  Reading time
                </p>
                <p className="text-base text-charcoal mt-1 tabular-nums">
                  {readMins}&nbsp;min
                </p>
              </div>
            </div>
          </Reveal>
        </div>
      </header>

      <section className="section-pad">
        <div className="container-narrow">
          <Reveal>
            <p className="font-display text-2xl lg:text-3xl leading-relaxed text-charcoal italic mb-4 text-balance border-l-2 border-bronze pl-6">
              {blog.excerpt}
            </p>
          </Reveal>

          <Reveal delay={0.05}>
            <div className="mt-12 space-y-6 text-lg leading-relaxed text-slate">
              <p>
                This note is part of Landmark Capital&apos;s ongoing research series on structural
                shifts in Indian real estate and investment markets. The full piece will be
                published shortly.
              </p>
              <p>
                Themes under review include institutional warehousing demand, regulatory evolution
                for Category II AIFs, and the role of deal-level transparency for sophisticated
                capital.
              </p>
              <p>
                In the meantime, browse related perspectives or contact the team to discuss specific
                investment opportunities.
              </p>
            </div>
          </Reveal>

          <Reveal delay={0.08}>
            <aside
              role="note"
              aria-label="Investment Committee note"
              className="mt-16 rounded-[12px] border border-border bg-stone/60 p-8 lg:p-10"
            >
              <p className="eyebrow-accent mb-4">Investment Committee note</p>
              <p className="text-base lg:text-lg text-charcoal leading-relaxed max-w-2xl">
                Research and insights published here reflect the Landmark Capital Investment
                Committee&rsquo;s views and are intended for informational purposes only. They
                do not constitute investment advice or an offer to invest.
              </p>
            </aside>
          </Reveal>

          <Reveal delay={0.1}>
            <div className="mt-12 pt-8 border-t border-border flex flex-wrap gap-6">
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 text-sm uppercase tracking-[0.12em] text-charcoal link-underline"
              >
                Contact the team
                <Icon as={ArrowUpRight} size={16} />
              </Link>
              <Link
                to="/newsroom"
                className="inline-flex items-center gap-2 text-sm uppercase tracking-[0.12em] text-slate-blue link-underline"
              >
                All blogs
              </Link>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="section-pad surface-stone border-t border-border">
        <div className="container-tb">
          <p className="eyebrow-accent mb-10">Continue reading</p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {otherBlogs.map((b) => (
              <Reveal key={b.slug}>
                <Link
                  to={`/blog/${b.slug}`}
                  className="group block h-full p-6 bg-paper border border-border rounded-[12px] hover:border-bronze/50 transition-colors"
                >
                  {b.category && (
                    <p className="text-[10px] uppercase tracking-[0.14em] text-crimson-500 mb-3">
                      {b.category}
                    </p>
                  )}
                  <h3 className="font-display text-xl text-charcoal mb-3 group-hover:text-crimson-500 transition-colors leading-snug">
                    {b.title}
                  </h3>
                  <p className="text-sm text-slate-blue">
                    <span>{b.author}</span> · <span className="tabular-nums">{formatDate(b.date)}</span>
                  </p>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </article>
  );
}
