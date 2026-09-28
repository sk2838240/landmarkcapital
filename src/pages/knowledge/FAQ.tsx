import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { PageHero } from "@/components/common/PageHero";
import { Reveal } from "@/components/common/Reveal";
import { Icon } from "@/components/common/Icon";
import { Seo } from "@/components/common/Seo";
import { getFaqs } from "@/lib/cmsData";
import { Plus, Minus } from "lucide-react";
import { durations, easings } from "@/lib/motion";

export default function FAQ() {
  const [open, setOpen] = useState<number | null>(0);
  const faqs = getFaqs();
  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((f) => ({
      "@type": "Question",
      name: f.question,
      acceptedAnswer: { "@type": "Answer", text: f.answer },
    })),
  };

  return (
    <>
      <Seo
        title="FAQ"
        description="Common questions about fund participation, drawdowns, reporting and the investor lifecycle at Landmark Capital."
        jsonLd={faqJsonLd}
      />
      <PageHero
        eyebrow="FAQ"
        title="Questions before you invest."
        subtitle="Common questions about fund participation, drawdowns, reporting and the investor lifecycle."
      />

      <section className="section-pad bg-ivory">
        <div className="container-narrow">
          <ul className="divide-y divide-border border-y border-border">
            {faqs.map((faq, i) => (
              <li key={faq.question}>
                <Reveal delay={i * 0.03}>
                  <button
                    type="button"
                    onClick={() => setOpen(open === i ? null : i)}
                    className="w-full flex items-start gap-6 py-8 text-left group"
                    aria-expanded={open === i}
                  >
                    <span className="font-mono text-xs text-slate tabular-nums pt-2 shrink-0">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <span className="flex-1 font-display text-2xl text-charcoal group-hover:text-crimson-500 transition-colors text-balance">
                      {faq.question}
                    </span>
                    <span
                      className={`shrink-0 mt-1 w-9 h-9 rounded-[8px] grid place-items-center transition-colors ${
                        open === i
                          ? "bg-crimson-500 text-white"
                          : "bg-stone text-charcoal border border-border"
                      }`}
                    >
                      {open === i ? (
                        <Icon as={Minus} size={16} />
                      ) : (
                        <Icon as={Plus} size={16} />
                      )}
                    </span>
                  </button>
                </Reveal>
                <AnimatePresence initial={false}>
                  {open === i && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: durations.base, ease: easings.outExpo }}
                      className="overflow-hidden"
                    >
                      <div className="pl-12 pr-14 pb-8">
                        <p className="text-base lg:text-lg leading-relaxed text-slate max-w-2xl">
                          {faq.answer}
                        </p>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </li>
            ))}
          </ul>
        </div>
      </section>
    </>
  );
}
