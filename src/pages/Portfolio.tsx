import { Link } from "react-router-dom";
import { PageHero } from "@/components/common/PageHero";
import { Reveal } from "@/components/common/Reveal";
import { Seo } from "@/components/common/Seo";
import { getPortfolioProjects } from "@/lib/cmsData";
import { ArrowUpRight } from "lucide-react";

export default function Portfolio() {
  const portfolioProjects = getPortfolioProjects();
  const totalInvested = portfolioProjects.reduce((sum, p) => {
    const n = parseFloat(p.invested.replace(/[^\d.]/g, ""));
    return sum + (Number.isNaN(n) ? 0 : n);
  }, 0);

  return (
    <>
      <Seo
        title="Current Portfolio"
        description="Deals under management, a comprehensive portfolio of strategic real estate investments across India's most promising commercial and residential markets."
      />
      <PageHero
        eyebrow="Current Portfolio"
        title="Deals under management."
        subtitle="Project-wise details of the real estate investment portfolio. A comprehensive portfolio of strategic real estate investments across India's most promising commercial and residential markets, delivering strong returns through expertly managed development projects."
        tone="stone"
      />

      {/* Portfolio at a glance */}
      <section className="section-pad surface-ivory">
        <div className="container-tb">
          <Reveal>
            <div className="flex items-center gap-4 mb-8">
              <span className="accent-bar" />
              <h2 className="eyebrow !mb-0">Portfolio at a Glance</h2>
            </div>
          </Reveal>
          <Reveal delay={0.05}>
            <div className="overflow-x-auto rounded-[12px] border border-border bg-paper">
              <table className="w-full text-left min-w-[640px]">
                <thead>
                  <tr className="border-b border-border">
                    {["#", "Project", "Location", "Type", "Developer group", "Invested (INR Cr)"].map(
                      (col) => (
                        <th
                          key={col}
                          className="px-6 py-4 text-[10px] uppercase tracking-[0.14em] text-crimson-500 font-medium whitespace-nowrap"
                        >
                          {col}
                        </th>
                      )
                    )}
                  </tr>
                </thead>
                <tbody>
                  {portfolioProjects.map((p, i) => (
                    <tr key={p.id} className="border-b border-border hover:bg-stone/50 transition-colors">
                      <td className="px-6 py-4 font-mono text-xs text-bronze tabular-nums">
                        {String(i + 1).padStart(2, "0")}
                      </td>
                      <td className="px-6 py-4">
                        <Link
                          to={`/portfolio/${p.id}`}
                          className="text-sm font-medium text-charcoal hover:text-crimson-500 transition-colors underline decoration-border underline-offset-4"
                        >
                          {p.name}
                        </Link>
                      </td>
                      <td className="px-6 py-4 text-sm text-slate whitespace-nowrap">{p.location}</td>
                      <td className="px-6 py-4 text-sm text-slate">{p.type}</td>
                      <td className="px-6 py-4 text-sm text-slate whitespace-nowrap">
                        {p.developerGroup}
                      </td>
                      <td className="px-6 py-4 text-sm font-medium text-charcoal tabular-nums">
                        {p.invested.replace(/[^\d.]/g, "")}
                      </td>
                    </tr>
                  ))}
                  <tr className="bg-stone">
                    <td className="px-6 py-4" />
                    <td className="px-6 py-4 text-sm font-medium text-charcoal uppercase tracking-[0.1em]">
                      Total
                    </td>
                    <td className="px-6 py-4" />
                    <td className="px-6 py-4" />
                    <td className="px-6 py-4" />
                    <td className="px-6 py-4 text-sm font-medium text-crimson-500 tabular-nums">
                      {totalInvested % 1 === 0 ? totalInvested : totalInvested.toFixed(1)}
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Project cards */}
      <section className="section-pad surface-ivory border-t border-border">
        <div className="container-tb">
          <div className="space-y-16">
            {portfolioProjects.map((project, i) => (
              <Reveal key={project.id} delay={Math.min(i * 0.03, 0.15)}>
                <Link
                  to={`/portfolio/${project.id}`}
                  className="group block"
                >
                  <article className="grid grid-cols-1 lg:grid-cols-12 gap-8 border-t border-border pt-12 transition-transform duration-500 group-hover:-translate-y-1">
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
                          className="w-full h-full object-cover transition-transform duration-500 ease-out group-hover:scale-105"
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
                      <div className="flex items-start justify-between gap-6">
                        <h2 className="display-3 text-charcoal text-balance group-hover:text-crimson-500 transition-colors">
                          {project.name}
                        </h2>
                        <span className="mt-2 grid h-11 w-11 shrink-0 place-items-center rounded-full border border-border bg-paper text-charcoal transition-all duration-300 group-hover:border-crimson-500 group-hover:bg-crimson-500 group-hover:text-white">
                          <ArrowUpRight size={18} />
                        </span>
                      </div>
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

                      <p className="mt-8 inline-flex items-center gap-2 text-xs uppercase tracking-[0.14em] text-charcoal group-hover:text-crimson-500 transition-colors">
                        View project details
                        <ArrowUpRight size={14} />
                      </p>
                    </div>
                  </article>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
