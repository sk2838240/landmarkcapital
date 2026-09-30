import { Link } from "react-router-dom";
import { ArrowUpRight } from "lucide-react";
import { PageHero } from "@/components/common/PageHero";
import { Reveal } from "@/components/common/Reveal";
import { PastPerformanceNote } from "@/components/common/Disclosures";
import { Seo } from "@/components/common/Seo";
import { Icon } from "@/components/common/Icon";
import { completedDeals } from "@/data/deals";

export default function Transactions() {
  return (
    <>
      <Seo
        title="Transactions"
        description="Selected completed exits across warehousing, commercial and residential. Representative transactions, many outcomes remain private by design."
      />
      <PageHero
        eyebrow="Transactions"
        title="Selected completed exits."
        subtitle="Representative transactions across warehousing, commercial and residential, many outcomes remain private by design."
      />

      <section className="section-pad surface-ivory">
        <div className="container-tb">
          <div className="overflow-x-auto border border-border rounded-[12px] bg-paper">
            <table className="table-report min-w-[720px]">
              <thead>
                <tr>
                  <th>Transaction</th>
                  <th>City</th>
                  <th>Category</th>
                  <th>Investment</th>
                  <th>Exit IRR</th>
                  <th aria-label="Case study" />
                </tr>
              </thead>
              <tbody>
                {completedDeals.map((deal) => (
                  <tr key={deal.id}>
                    <td className="!text-charcoal font-medium">
                      {deal.caseStudy ? (
                        <Link
                          to={`/transactions/${deal.id}`}
                          className="hover:text-crimson-500 transition-colors"
                        >
                          {deal.name}
                        </Link>
                      ) : (
                        deal.name
                      )}
                    </td>
                    <td>{deal.city}</td>
                    <td>
                      <span className="text-slate-blue">{deal.category}</span>
                    </td>
                    <td className="tabular-nums">{deal.investment ?? "\u2014"}</td>
                    <td className="!text-crimson-500 font-medium tabular-nums">
                      {deal.exitIRR ?? "\u2014"}
                    </td>
                    <td className="text-right">
                      {deal.caseStudy ? (
                        <Link
                          to={`/transactions/${deal.id}`}
                          aria-label={`Read ${deal.name} case study`}
                          className="inline-flex items-center gap-1 text-xs uppercase tracking-[0.12em] text-slate-blue hover:text-crimson-500 transition-colors"
                        >
                          Case&nbsp;study
                          <Icon as={ArrowUpRight} size={14} />
                        </Link>
                      ) : null}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <Reveal>
            <p className="mt-10 text-lg text-slate max-w-2xl leading-relaxed">
              {completedDeals.length}+ representative exits are shown here. Additional transactions
              were completed privately and are not publicised.
            </p>
            <PastPerformanceNote className="mt-3" />
          </Reveal>
        </div>
      </section>
    </>
  );
}
