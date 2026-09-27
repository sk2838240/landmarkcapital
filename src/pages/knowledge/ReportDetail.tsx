import { Link } from "react-router-dom";
import { Navigate, useParams } from "react-router-dom";
import { Reveal } from "@/components/common/Reveal";
import { Icon } from "@/components/common/Icon";
import { Seo } from "@/components/common/Seo";
import { ButtonLink } from "@/components/common/Button";
import { getReport } from "@/data/reports";
import { ArrowLeft, Download } from "lucide-react";

export default function ReportDetail() {
  const { slug } = useParams();
  const report = slug ? getReport(slug) : undefined;

  if (!report) {
    return <Navigate to="/insights" replace />;
  }

  return (
    <article className="bg-ivory">
      <Seo
        title={report.title}
        description={report.description}
        path={`/report/${report.slug}`}
      />

      <header className="pt-36 lg:pt-44 pb-14 lg:pb-20 border-b border-border surface-stone">
        <div className="container-narrow">
          <Reveal>
            <Link
              to="/insights"
              className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.14em] text-slate-blue hover:text-crimson-500 transition-colors mb-10"
            >
              <Icon as={ArrowLeft} size={14} />
              All reports
            </Link>
          </Reveal>

          <Reveal delay={0.05}>
            <div className="accent-bar mb-6" />
            <p className="eyebrow mb-5">Report</p>
            <h1 className="display-1 text-balance">{report.title}</h1>
          </Reveal>

          <Reveal delay={0.1}>
            <p className="mt-8 text-lg text-slate leading-relaxed max-w-2xl">
              {report.description}
            </p>
          </Reveal>

          <Reveal delay={0.15}>
            <div className="mt-10">
              <ButtonLink to={report.href} variant="primary" external>
                <Icon as={Download} size={16} />
                Download PDF
              </ButtonLink>
            </div>
          </Reveal>
        </div>
      </header>
    </article>
  );
}
