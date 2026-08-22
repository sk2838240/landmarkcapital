import { motion, useReducedMotion, type Variants } from "framer-motion";
import { ArrowUpRight, MapPin, Phone, Mail } from "lucide-react";
import { Reveal, RevealText } from "@/components/common/Reveal";
import { ButtonLink } from "@/components/common/Button";
import { Icon } from "@/components/common/Icon";
import { easings } from "@/lib/motion";

const contactItems = [
  {
    icon: MapPin,
    label: "Office",
    body: (
      <>
        63, 6th Floor, Maker Tower &ldquo;F&rdquo;,
        <br />
        Cuffe Parade, Mumbai 400 005
      </>
    ),
  },
  {
    icon: Phone,
    label: "Phone",
    body: (
      <>
        <a href="tel:+912262366266" className="link-underline">
          +91 22 6236 6266
        </a>
        <span className="text-slate"> / </span>
        <a href="tel:+912262366277" className="link-underline">
          6277
        </a>
      </>
    ),
  },
  {
    icon: Mail,
    label: "Email",
    body: (
      <a href="mailto:dhananjay@landmarkcapital.in" className="link-underline break-all">
        dhananjay@landmarkcapital.in
      </a>
    ),
  },
];

export function ContactCTA() {
  const reduce = useReducedMotion();

  const listContainer: Variants = {
    hidden: {},
    visible: {
      transition: reduce ? { duration: 0 } : { staggerChildren: 0.12, delayChildren: 0.15 },
    },
  };

  const listItem: Variants = {
    hidden: { opacity: reduce ? 1 : 0, y: reduce ? 0 : 16 },
    visible: {
      opacity: 1,
      y: 0,
      transition: reduce ? { duration: 0 } : { duration: 0.55, ease: easings.outExpo },
    },
  };

  return (
    <section className="section-pad surface-stone border-t border-border relative overflow-hidden">
      {/* Warm decorative glow */}
      <div
        aria-hidden
        className="pointer-events-none absolute -top-32 right-[-6rem] h-[30rem] w-[30rem] rounded-full bg-bronze/[0.07] blur-[130px]"
      />

      <div className="container-tb relative">
        <div className="grid grid-cols-1 gap-12 rounded-[12px] border border-border bg-paper p-8 shadow-[0_1px_0_rgba(36,41,47,0.04)] transition-[box-shadow,border-color] duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] hover:border-bronze/40 hover:shadow-[0_24px_60px_-38px_rgba(36,41,47,0.28)] lg:grid-cols-12 lg:p-14">
          {/* Left — invitation */}
          <div className="lg:col-span-7">
            <motion.div
              className="accent-bar-bronze mb-5 origin-left"
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              viewport={{ once: true, amount: 0.6 }}
              transition={{ duration: 0.6, ease: easings.outExpo }}
            />
            <Reveal>
              <p className="eyebrow-accent mb-5">Contact</p>
            </Reveal>
            <h2 className="display-2 text-balance max-w-2xl">
              <RevealText text="Inquire about the right opportunity." />
            </h2>
            <Reveal delay={0.15}>
              <p className="mt-6 text-lg text-slate max-w-xl leading-relaxed">
                For investment discussions, fund participation, or partnership inquiries, our team
                in Mumbai responds with clarity and discretion.
              </p>
            </Reveal>
            <Reveal delay={0.25}>
              <div className="mt-10">
                <ButtonLink to="/contact" variant="primary" size="lg" className="group">
                  Contact Landmark
                  <Icon
                    as={ArrowUpRight}
                    size={18}
                    className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                  />
                </ButtonLink>
              </div>
            </Reveal>
          </div>

          {/* Right — coordinates */}
          <motion.ul
            className="lg:col-span-4 lg:col-start-9 lg:border-l lg:border-border lg:pl-12 space-y-7"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={listContainer}
          >
            {contactItems.map((item) => (
              <motion.li key={item.label} variants={listItem} className="group flex items-start gap-4">
                <span className="mt-0.5 grid h-11 w-11 shrink-0 place-items-center rounded-full bg-bronze/10 text-bronze transition-colors duration-300 group-hover:bg-crimson-500 group-hover:text-white">
                  <Icon as={item.icon} size={18} />
                </span>
                <div>
                  <p className="text-xs uppercase tracking-[0.14em] text-slate-blue mb-1.5">
                    {item.label}
                  </p>
                  <div className="text-charcoal leading-relaxed">{item.body}</div>
                </div>
              </motion.li>
            ))}
          </motion.ul>
        </div>
      </div>
    </section>
  );
}
