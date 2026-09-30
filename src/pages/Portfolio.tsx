import { PageHero } from "@/components/common/PageHero";
import { Reveal } from "@/components/common/Reveal";
import { Seo } from "@/components/common/Seo";
import { getPortfolioProjects } from "@/lib/cmsData";

export default function Portfolio() {
  const portfolioProjects = getPortfolioProjects();

  return (
    <>
      <Seo
        title="Current Portfolio"
        description="Deals under management, a comprehensive portfolio of strategic real estate investments across India's most promising commercial and residential markets."
      />
      <PageHero
        eyebrow="Current Portfolio"
        title="Deals under management."
        subtitle="A comprehensive portfolio of strategic real estate investments across India's most promising commercial and residential markets, delivering strong returns through expertly managed development projects."
        tone="stone"
      />

      <section className="section-pad surface-ivory">
        <div className="container-tb">
          <div className="space-y-16">
            {portfolioProjects.map((project, i) => (
              <Reveal key={project.id} delay={Math.min(i * 0.03, 0.15)}>
                <article className="grid grid-cols-1 lg:grid-cols-12 gap-8 border-t border-border pt-12">
                  <div className="lg:col-span-5">
                    <div className="flex items-start gap-3 mb-4">
                      <span className="font-mono text-xs text-bronze tabular-nums pt-1">
                        {String(i + 1).padStart(2, "0")}
                      </span>
                      <span className="text-[10px] uppercase tracking-[0.14em] text-crimson-500 pt-1.5">
                        {project.status}
                      </span>
                    </div>
                    <div className="overflow-hidden rounded-[16px] border border-border aspect-[4/3]">
                      <img
                        src={project.image}
                        alt={project.imageAlt}
                        loading="lazy"
                        decoding="async"
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <dl className="mt-6 grid grid-cols-2 gap-x-6 gap-y-4">
                      {[
                        { label: "Project SPV", value: project.company },
                        { label: "Project type", value: project.type },
                        { label: "Location", value: project.location },
                        { label: "Developer group", value: project.developerGroup },
                        { label: "Land area", value: project.landArea },
                        { label: "Saleable area", value: project.saleableArea },
                        { label: "Invested amount", value: project.invested },
                      ].map((d) => (
                        <div key={d.label}>
                          <dt className="mb-1 text-[10px] uppercase tracking-[0.14em] text-slate-blue">
                            {d.label}
                          </dt>
                          <dd className="text-sm font-medium text-charcoal">{d.value}</dd>
                        </div>
                      ))}
                    </dl>
                  </div>

                  <div className="lg:col-span-7">
                    <h2 className="display-3 text-charcoal text-balance">{project.name}</h2>
                    <p className="mt-2 text-sm text-slate-blue">
                      {project.location}, {project.type}
                    </p>

                    {project.metrics.length > 0 && (
                      <div className="mt-8 grid grid-cols-1 sm:grid-cols-3 gap-6">
                        {project.metrics.map((m) => (
                          <div
                            key={m.label}
                            className="rounded-[12px] bg-paper border border-border p-5"
                          >
                            <p className="font-display text-2xl text-crimson-500 tabular-nums">
                              {m.value}
                            </p>
                            <p className="mt-1 text-[10px] uppercase tracking-[0.14em] text-slate-blue">
                              {m.label}
                            </p>
                          </div>
                        ))}
                      </div>
                    )}

                    <div className="mt-8 border-t border-border pt-6">
                      <p className="text-xs uppercase tracking-[0.14em] text-slate-blue mb-4">
                        Highlights
                      </p>
                      <ul className="space-y-3">
                        {project.highlights.map((h) => (
                          <li key={h} className="flex items-start gap-3 text-sm text-slate leading-relaxed">
                            <span className="text-crimson-500 mt-1 shrink-0">→</span>
                            <span>{h}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
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
