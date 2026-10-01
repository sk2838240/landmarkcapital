import { Link } from "react-router-dom";
import { Navigate, useParams } from "react-router-dom";
import { PageHero } from "@/components/common/PageHero";
import { Reveal } from "@/components/common/Reveal";
import { ButtonLink } from "@/components/common/Button";
import { Seo, serviceJsonLd } from "@/components/common/Seo";
import { getService } from "@/lib/cmsData";
import { ArrowRight } from "lucide-react";

export default function ServiceDetail() {
  const { slug } = useParams();
  const service = slug ? getService(slug) : undefined;

  if (!service) {
    return <Navigate to="/" replace />;
  }

  return (
    <>
      <Seo
        title={service.name}
        description={service.intro}
        path={`/service/${service.slug}`}
        jsonLd={serviceJsonLd({
          name: service.name,
          description: service.intro,
          path: `/service/${service.slug}`,
        })}
      />
      <PageHero
        eyebrow={service.name}
        title={service.tagline}
        subtitle={service.intro}
        tone="stone"
      />

      {/* Our approach */}
      <section className="section-pad bg-ivory">
        <div className="container-tb">
          <Reveal>
            <p className="eyebrow mb-6">Our approach</p>
            <p className="text-base lg:text-lg text-slate leading-relaxed max-w-3xl mb-14">
              {service.positioning}
            </p>
          </Reveal>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
            {service.approach.map((step, i) => (
              <Reveal key={step.title} delay={i * 0.04} className="h-full">
                <article className="card-shine group relative h-full rounded-[12px] border border-border bg-gradient-to-br from-paper to-stone p-7 transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] hover:-translate-y-1 hover:border-bronze/60 hover:shadow-[0_18px_40px_-24px_rgba(36,41,47,0.35)]">
                  <div className="flex items-center gap-3">
                    <span className="font-mono text-xs text-bronze transition-colors duration-300 group-hover:text-crimson-500">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <span className="h-px flex-1 bg-border transition-colors duration-300 group-hover:bg-bronze/40" />
                  </div>
                  <h3 className="mt-4 mb-3 font-display text-2xl text-charcoal transition-colors duration-300 group-hover:text-crimson-500">
                    {step.title}
                  </h3>
                  <p className="text-slate leading-relaxed max-w-md">{step.body}</p>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* What we do */}
      <section className="section-pad bg-stone">
        <div className="container-tb">
          <Reveal>
            <p className="eyebrow mb-6">What we do</p>
            <h2 className="display-2 mb-14 text-balance">Scope of the mandate.</h2>
          </Reveal>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {service.offerings.map((item, i) => (
              <Reveal key={item.title} delay={i * 0.04} className="h-full">
                <article className="card-shine group relative h-full rounded-[12px] border border-border bg-gradient-to-br from-paper to-ivory p-7 transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] hover:-translate-y-1 hover:border-bronze/60 hover:shadow-[0_18px_40px_-24px_rgba(36,41,47,0.35)]">
                  <div className="flex items-center gap-3">
                    <span className="font-mono text-xs text-bronze transition-colors duration-300 group-hover:text-crimson-500">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <span className="h-px flex-1 bg-border transition-colors duration-300 group-hover:bg-bronze/40" />
                  </div>
                  <h3 className="mt-4 mb-3 font-display text-xl text-charcoal transition-colors duration-300 group-hover:text-crimson-500">
                    {item.title}
                  </h3>
                  <p className="text-sm leading-relaxed text-slate">{item.body}</p>
                </article>
              </Reveal>
            ))}
          </div>

          {service.offeringsNote && (
            <Reveal delay={0.1}>
              <p className="mt-12 max-w-2xl text-sm text-slate-blue leading-relaxed">
                {service.offeringsNote}
              </p>
            </Reveal>
          )}

          {service.situations && (
            <Reveal delay={0.1}>
              <div className="mt-14 max-w-3xl">
                <p className="text-xs uppercase tracking-[0.14em] text-slate-blue mb-5">
                  Typical situations we see
                </p>
                <ul className="space-y-4">
                  {service.situations.map((s) => (
                    <li
                      key={s}
                      className="flex items-start gap-4 text-base text-slate leading-relaxed"
                    >
                      <span className="text-crimson-500 mt-1 shrink-0">·</span>
                      <span>{s}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          )}
        </div>
      </section>

      {/* Who it's for */}
      <section className="section-pad bg-midnight text-white">
        <div className="container-tb">
          <div className="grid lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-5">
              <Reveal>
                <p className="eyebrow text-crimson-300 mb-6">Who it's for</p>
                <h2 className="display-2 text-white text-balance">
                  Built for {service.name.toLowerCase()} mandates.
                </h2>
              </Reveal>
            </div>
            <div className="lg:col-span-7">
              <Reveal delay={0.05}>
                <p className="text-lg leading-relaxed text-white/75 mb-8">
                  {service.audience}
                </p>
              </Reveal>
              <Reveal delay={0.1}>
                <div className="flex flex-wrap items-center gap-4">
                  <ButtonLink to="/contact" variant="primary">
                    Discuss your mandate
                  </ButtonLink>
                  <Link
                    to="/structures"
                    className="inline-flex items-center gap-2 text-sm uppercase tracking-[0.12em] text-white/75 hover:text-white transition-colors"
                  >
                    Explore available structures
                    <ArrowRight size={16} />
                  </Link>
                </div>
              </Reveal>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
