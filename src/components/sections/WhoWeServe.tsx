import { Building2, Globe2, Network } from "lucide-react";
import { SectionHeader } from "@/components/common/SectionHeader";
import { Reveal } from "@/components/common/Reveal";
import { Icon } from "@/components/common/Icon";

const segments = [
  {
    title: "Indian Investors",
    body: "Family offices, ultra-high-net-worth individuals, corporates, institutions, and investment managers seeking curated access to India's real estate opportunities through SEBI-regulated AIFs, managed accounts, and bespoke investment structures.",
    icon: Building2,
  },
  {
    title: "Global Investors",
    body: "Global family offices, principal investors, business owners, institutional allocators, and offshore capital—including the Indian diaspora, Middle Eastern, and Asian investors—looking for disciplined exposure to India's real estate markets. We provide end-to-end structuring, FEMA compliance, tax-efficient execution, and ongoing investment management.",
    icon: Globe2,
  },
  {
    title: "Strategic Partners",
    body: "Developers, asset owners, corporates, co-investors, and institutional partners collaborating with us on club deals, joint ventures, platform investments, and balance-sheet partnerships. We seek long-term relationships built on aligned capital, execution certainty, and shared value creation.",
    icon: Network,
  },
];

export function WhoWeServe() {
  return (
    <section className="section-pad surface-stone">
      <div className="container-tb">
        <SectionHeader
          eyebrow="Who we serve"
          title="Capital from everywhere. Invested in India."
          accent="trust"
        />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 lg:gap-14 border-t border-border">
          {segments.map((s, i) => (
            <Reveal key={s.title} delay={i * 0.05} className="pt-10">
              <Icon as={s.icon} size={24} className="text-slate-blue mb-5" />
              <h3 className="font-display text-2xl text-charcoal mb-4">{s.title}</h3>
              <p className="text-slate leading-relaxed">{s.body}</p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
