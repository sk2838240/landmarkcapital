import { Link } from "react-router-dom";
import { Navigate, useParams } from "react-router-dom";
import { PageHero } from "@/components/common/PageHero";
import { Reveal } from "@/components/common/Reveal";
import { Icon } from "@/components/common/Icon";
import { Seo } from "@/components/common/Seo";
import { getPortfolioProjects } from "@/lib/cmsData";
import type { PortfolioProject, ProjectSection } from "@/data/portfolio";
import { ArrowLeft } from "lucide-react";

function Section({ section }: { section: ProjectSection }) {
  if (section.kind === "table") {
    return (
      <div className="mt-16">
        <Reveal>
          <h2 className="display-3 text-charcoal text-balance mb-8">{section.title}</h2>
        </Reveal>
        <Reveal delay={0.05}>
          <div className="overflow-x-auto rounded-[12px] border border-border bg-paper">
            <table className="w-full text-left min-w-[560px]">
              <thead>
                <tr className="border-b border-border">
                  {section.columns.map((col) => (
                    <th
                      key={col}
                      className="px-6 py-4 text-[10px] uppercase tracking-[0.14em] text-crimson-500 font-medium"
                    >
                      {col}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {section.rows.map((row, i) => (
                  <tr key={i} className="border-b border-border last:border-b-0 align-top">
                    {row.map((cell, j) => (
                      <td
                        key={j}
                        className={`px-6 py-5 leading-relaxed ${
                          j === 0
                            ? "text-sm font-medium text-charcoal whitespace-nowrap"
                            : j === 1
                              ? "text-sm text-crimson-500 whitespace-nowrap"
                              : "text-sm text-slate"
                        }`}
                      >
                        {cell}
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </Reveal>
      </div>
    );
  }

  if (section.kind === "columns") {
    return (
      <div className="mt-16">
        <Reveal>
          <h2 className="display-3 text-charcoal text-balance mb-8">{section.title}</h2>
        </Reveal>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {section.columns.map((col, i) => (
            <Reveal key={col.title} delay={i * 0.05}>
              <div className="h-full rounded-[12px] bg-paper border border-border p-6 lg:p-8">
                <h3 className="text-[11px] uppercase tracking-[0.18em] text-bronze mb-5">
                  {col.title}
                </h3>
                <ul className="space-y-3">
                  {col.items.map((item) => (
                    <li
                      key={item}
                      className="flex items-start gap-3 text-sm text-slate leading-relaxed"
                    >
                      <span className="text-crimson-500 mt-0.5 shrink-0">·</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    );
  }

  if (section.kind === "prose") {
    return (
      <div className="mt-16">
        <Reveal>
          <h2 className="display-3 text-charcoal text-balance mb-6">{section.title}</h2>
        </Reveal>
        <Reveal delay={0.05}>
          <p className="text-base lg:text-lg text-slate leading-relaxed max-w-3xl">
            {section.body}
          </p>
        </Reveal>
      </div>
    );
  }

  return (
    <div className="mt-16">
      <Reveal>
        <h2 className="display-3 text-charcoal text-balance mb-8">{section.title}</h2>
      </Reveal>
      <div className="border-t border-border">
        {section.items.map((item, i) => (
          <Reveal key={i} delay={Math.min(i * 0.03, 0.2)}>
            <div className="flex items-start gap-6 py-7 border-b border-border">
              <span className="font-mono text-xs text-bronze tabular-nums pt-1 shrink-0">
                {String(i + 1).padStart(2, "0")}
              </span>
              <div>
                {item.title && (
                  <h3 className="font-display text-xl text-charcoal mb-2">{item.title}</h3>
                )}
                <p className="text-slate leading-relaxed max-w-3xl">{item.body}</p>
              </div>
            </div>
          </Reveal>
        ))}
      </div>
    </div>
  );
}

export default function ProjectDetail() {
  const { slug } = useParams();
  const project = slug
    ? getPortfolioProjects().find((p) => p.id === slug)
    : undefined;

  if (!project) {
    return <Navigate to="/portfolio" replace />;
  }

  const facts: { label: string; value: string }[] = [
    { label: "Project name", value: project.name },
    { label: project.company.startsWith("Archon") ? "Project SPV" : "Company", value: project.company },
    { label: "Project type", value: project.type },
    { label: "Location", value: project.location },
    { label: "Developer group", value: project.developerGroup },
    { label: "Land area", value: project.landArea },
    { label: "Saleable area", value: project.saleableArea },
    { label: "Invested amount", value: project.invested },
  ];

  return (
    <>
      <Seo
        title={project.name}
        description={`Project-wise details of ${project.name} at ${project.location}, a ${project.type.toLowerCase()} in Landmark Capital's current portfolio.`}
        path={`/portfolio/${project.id}`}
      />
      <PageHero
        eyebrow="Current Portfolio"
        title={project.name}
        subtitle={project.intro ?? project.locationTagline}
      >
        <div className="flex flex-wrap items-center gap-3">
          <span className="rounded-full bg-charcoal px-4 py-2 text-[11px] uppercase tracking-[0.14em] text-white">
            {project.status}
          </span>
          <span className="rounded-full border border-border bg-paper px-4 py-2 text-[11px] uppercase tracking-[0.14em] text-slate">
            {project.locationTagline}
          </span>
        </div>
      </PageHero>

      <section className="section-pad surface-ivory">
        <div className="container-tb">
          <Reveal>
            <Link
              to="/portfolio"
              className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.14em] text-slate-blue hover:text-crimson-500 transition-colors"
            >
              <Icon as={ArrowLeft} size={14} />
              All projects
            </Link>
          </Reveal>

          <Reveal delay={0.05}>
            <div className="mt-10 grid grid-cols-1 lg:grid-cols-12 gap-8">
              <div className="lg:col-span-7">
                <div className="accent-bar mb-6" />
                <h2 className="display-2 text-charcoal text-balance">Project Overview</h2>
              </div>
            </div>
          </Reveal>

          <Reveal delay={0.1}>
            <div className="mt-8 grid grid-cols-1 lg:grid-cols-12 gap-10">
              <div className="lg:col-span-7">
                <dl className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-5">
                  {facts.map((f) => (
                    <div key={f.label} className="border-b border-border pb-4">
                      <dt className="mb-1 text-[10px] uppercase tracking-[0.14em] text-slate-blue">
                        {f.label}
                      </dt>
                      <dd className="text-sm font-medium text-charcoal">{f.value}</dd>
                    </div>
                  ))}
                </dl>
              </div>
              <div className="lg:col-span-5">
                <div className="overflow-hidden rounded-[16px] border border-border aspect-[4/3]">
                  <img
                    src={project.image}
                    alt={project.imageAlt}
                    loading="lazy"
                    decoding="async"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>
          </Reveal>

          {project.sections.map((section) => (
            <Section key={section.title} section={section} />
          ))}

          <Reveal>
            <div className="mt-16 pt-8 border-t border-border flex flex-wrap gap-6">
              <Link
                to="/portfolio"
                className="inline-flex items-center gap-2 text-sm uppercase tracking-[0.12em] text-slate-blue link-underline"
              >
                All projects
              </Link>
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 text-sm uppercase tracking-[0.12em] text-charcoal link-underline"
              >
                Contact the team
              </Link>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
