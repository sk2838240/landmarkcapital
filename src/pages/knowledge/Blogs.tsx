import { Link } from "react-router-dom";
import { PageHero } from "@/components/common/PageHero";
import { Reveal } from "@/components/common/Reveal";
import { Icon } from "@/components/common/Icon";
import { Seo } from "@/components/common/Seo";
import { getReports, getIndustryData } from "@/lib/cmsData";
import { ArrowUpRight, Download, ArrowRight } from "lucide-react";

/**
 * Research & Insights, reports and industry data. Distinct from the
 * News Room, which holds blogs, videos and interviews.
 */

const industryData = [
  {
    value: "110M+",
    label: "Demat accounts in India, more than doubled from 40.9 million in March 2020",
    source: "sebi-brokers-investor-money",
    category: "Regulation",
  },
  {
    value: "$350B",
    label: "India's online marketplaces could be making sales worth as much as this a year by 2027",
    source: "rise-of-indias-e-marketplaces",
    category: "E-commerce",
  },
  {
    value: "138M sq mt",
    label: "Additional warehousing required to support e-commerce growth over the next five years",
    source: "ecommerce-impact-warehousing",
    category: "Warehousing",
  },
  {
    value: "$12,000",
    label: "Ocean freight for a 40 ft container from China to Europe or North America, up from $2,000",
    source: "ocean-freight-rate-spike",
    category: "Logistics",
  },
  {
    value: "20.1%",
    label: "India's year-on-year GDP growth in Q1 FY 2021–22, broadly in line with market expectations",
    source: "gdp-growth-miracle-or-mirage",
    category: "Economy",
  },
];

export default function Blogs() {
  const reports = getReports();
  const industryData = getIndustryData();

  return (
    <>
      <Seo
        title="Research & Insights"
        description="Reports and industry data from Landmark Capital, market statistics, sector outlooks and downloadable reference material on Indian real estate."
      />
      <PageHero
        eyebrow="Research & Insights"
        title="Reports and industry data."
        subtitle="Market statistics, sector outlooks and downloadable reference material, the numbers behind Indian real estate."
        tone="stone"
      />

      {/* Reports */}
      <section className="section-pad surface-ivory">
        <div className="container-tb">
          <Reveal>
            <div className="flex items-center gap-4 mb-8">
              <span className="accent-bar" />
              <h2 className="eyebrow !mb-0">Reports</h2>
            </div>
          </Reveal>
          <div className="border-t border-border">
            {reports.map((report) => (
              <Reveal key={report.title}>
                <Link
                  to={`/report/${report.slug}`}
                  className="group grid grid-cols-1 lg:grid-cols-12 gap-6 items-center py-10 border-b border-border"
                >
                  <div className="lg:col-span-1">
                    <span className="inline-flex items-center justify-center w-12 h-12 rounded-[10px] bg-stone group-hover:bg-crimson-500 transition-colors duration-300">
                      <Icon
                        as={Download}
                        size={20}
                        className="text-crimson-500 group-hover:text-white transition-colors duration-300"
                      />
                    </span>
                  </div>
                  <div className="lg:col-span-8">
                    <h2 className="display-3 text-charcoal group-hover:text-crimson-500 transition-colors text-balance">
                      {report.title}
                    </h2>
                    <p className="mt-3 text-base text-slate leading-relaxed max-w-2xl">
                      {report.description}
                    </p>
                  </div>
                  <div className="lg:col-span-3 flex lg:justify-end">
                    <span className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.14em] text-charcoal group-hover:text-crimson-500 transition-colors">
                      View Report
                      <Icon as={ArrowUpRight} size={14} />
                    </span>
                  </div>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Industry data */}
      <section className="section-pad surface-stone">
        <div className="container-tb">
          <Reveal>
            <div className="flex items-center gap-4 mb-8">
              <span className="accent-bar" />
              <h2 className="eyebrow !mb-0">Industry data</h2>
            </div>
          </Reveal>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {industryData.map((d, i) => (
              <Reveal key={d.source} delay={Math.min(i * 0.04, 0.2)}>
                <Link
                  to={`/blog/${d.source}`}
                  className="group flex flex-col h-full p-8 bg-paper border border-border rounded-[14px] transition-all duration-300 hover:border-crimson-500/40 hover:-translate-y-1 hover:shadow-[0_30px_60px_-40px_rgba(183,53,58,0.35)]"
                >
                  <p className="font-display text-[2rem] lg:text-[2.25rem] text-crimson-500 tabular-nums leading-none">
                    {d.value}
                  </p>
                  <p className="mt-4 text-sm text-slate leading-relaxed flex-1">{d.label}</p>
                  <div className="mt-6 pt-4 border-t border-border flex items-center justify-between">
                    <span className="text-[10px] uppercase tracking-[0.14em] text-slate-blue">
                      {d.category}
                    </span>
                    <span className="inline-flex items-center gap-1 text-xs uppercase tracking-[0.14em] text-charcoal group-hover:text-crimson-500 transition-colors">
                      From our research
                      <Icon as={ArrowUpRight} size={12} />
                    </span>
                  </div>
                </Link>
              </Reveal>
            ))}
          </div>

          <Reveal delay={0.1}>
            <div className="mt-14 flex flex-wrap items-center justify-between gap-6 rounded-[14px] bg-paper border border-border p-6 lg:p-8">
              <div>
                <p className="font-display text-xl text-charcoal">
                  Looking for our articles and media?
                </p>
                <p className="mt-1 text-sm text-slate max-w-md">
                  Blogs, videos and interviews live on the News Room.
                </p>
              </div>
              <Link
                to="/newsroom"
                className="group inline-flex items-center gap-3 h-12 pl-6 pr-5 rounded-full bg-crimson-500 text-white font-medium text-[13px] tracking-[0.08em] uppercase transition-all duration-300 hover:bg-charcoal shadow-[0_10px_30px_-10px_rgba(183,53,58,0.45)]"
              >
                Visit the News Room
                <span className="grid place-items-center w-7 h-7 rounded-full bg-white/20 text-white transition-transform duration-300 group-hover:translate-x-0.5 group-hover:bg-white group-hover:text-crimson-500">
                  <Icon as={ArrowRight} size={14} strokeWidth={1.75} />
                </span>
              </Link>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
