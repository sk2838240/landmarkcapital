import { Link } from "react-router-dom";
import { PageHero } from "@/components/common/PageHero";
import { Reveal } from "@/components/common/Reveal";
import { RiskDisclosure } from "@/components/common/Disclosures";
import { Icon } from "@/components/common/Icon";
import { Seo } from "@/components/common/Seo";
import { ArrowUpRight } from "lucide-react";

const strategies = [
  {
    title: "Multiplier Fund",
    status: "Open",
    reg: "IN/AIF2/21-22/0928",
    summary:
      "Category II AIF focused on high-quality built-to-suit warehousing in economic hotspots across India.",
    to: "/strategies/multiplier",
  },
  {
    title: "Opportunity Fund",
    status: "Closed",
    reg: "IN/AIF2/13-14/0068",
    summary:
      "The firm’s first SEBI-registered vehicle — closed for subscription, with a defined portfolio and exit pathway.",
    to: "/strategies/opportunity",
  },
  {
    title: "Large Value Fund (LVF)",
    status: "By invitation",
    reg: "SEBI Category II",
    summary:
      "Concentrated, conviction-led structures for sophisticated investors meeting LVF eligibility thresholds.",
    to: "/strategies/lvf",
  },
  {
    title: "Deal-by-Deal",
    status: "Deal-by-deal",
    reg: "Ring-fenced",
    summary:
      "Deal-by-deal participation without blind pools — investors select opportunities aligned to their mandate.",
    to: "/strategies/deal-by-deal",
  },
  {
    title: "SPV",
    status: "Tailored",
    reg: "Custom",
    summary:
      "Standalone structures for developers and co-investors seeking aligned capital partners.",
    to: "/strategies/spv",
  },
];

export default function Strategies() {
  return (
    <>
      <Seo
        title="Investment Strategies"
        description="SEBI-registered funds and deal-by-deal structures — each with defined mandate, reporting and exit discipline."
      />
      <PageHero
        eyebrow="Investment Strategies"
        title="Vehicles designed for clarity and control."
        subtitle="SEBI-registered funds and deal-by-deal structures — each with defined mandate, reporting, and exit discipline."
        tone="stone"
      />

      <section className="section-pad surface-ivory">
        <div className="container-tb">
          <div className="border-t border-border">
            {strategies.map((s, i) => (
              <Reveal key={s.to} delay={i * 0.04}>
                <Link
                  to={s.to}
                  className="group grid grid-cols-1 lg:grid-cols-12 gap-4 py-10 border-b border-border"
                >
                  <div className="lg:col-span-4">
                    <h2 className="font-display text-2xl lg:text-3xl text-charcoal group-hover:text-crimson-500 transition-colors">
                      {s.title}
                    </h2>
                    <p
                      className={`mt-2 text-xs uppercase tracking-[0.14em] ${
                        s.status === "Open" ? "text-crimson-500" : "text-bronze"
                      }`}
                    >
                      {s.status}
                    </p>
                  </div>
                  <div className="lg:col-span-6">
                    <p className="text-slate leading-relaxed">{s.summary}</p>
                    <p className="mt-3 text-sm font-mono text-slate-blue">{s.reg}</p>
                  </div>
                  <div className="lg:col-span-2 flex lg:justify-end items-start pt-1">
                    <Icon
                      as={ArrowUpRight}
                      size={20}
                      className="text-charcoal group-hover:text-crimson-500 transition-colors"
                    />
                  </div>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <RiskDisclosure />
    </>
  );
}
