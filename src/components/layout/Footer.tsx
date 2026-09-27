import { Link } from "react-router-dom";
import { ArrowUp, Linkedin, Mail, MapPin, Phone } from "lucide-react";
import { Logo } from "@/components/common/Logo";
import { Reveal } from "@/components/common/Reveal";
import { Icon } from "@/components/common/Icon";

export function Footer() {
  return <HomeFooter />;
}

/* -------------------------------------------------------------------------- */
/*  Homepage footer — editorial, brand-aligned                                */
/* -------------------------------------------------------------------------- */

type FooterLinkItem = { label: string; to?: string; href?: string; external?: boolean };

const footerNav: { title: string; links: FooterLinkItem[] }[] = [
  {
    title: "Firm",
    links: [
      { label: "About", to: "/about" },
      { label: "Leadership", to: "/leadership" },
      { label: "News Room", to: "/newsroom" },
      { label: "Current Portfolio", to: "/portfolio" },
      { label: "Opportunities", to: "/opportunities" },
      { label: "Transactions", to: "/transactions" },
      { label: "Contact", to: "/contact" },
      { label: "SmartODR Portal", href: "https://smartodr.in/login", external: true },
    ],
  },
  {
    title: "Our Funds",
    links: [
      { label: "Multiplier Fund", to: "/funds/multiplier" },
      { label: "Opportunity Fund", to: "/funds/opportunity" },
    ],
  },
  {
    title: "Available Structures",
    links: [
      { label: "AIF", to: "/structures/aif" },
      { label: "LVF", to: "/structures/lvf" },
      { label: "Managed Accounts", to: "/structures/managed-accounts" },
    ],
  },
  {
    title: "Insights",
    links: [
      { label: "Research & Insights", to: "/insights" },
      { label: "FAQ", to: "/insights/faq" },
      { label: "Tax Reckoner", href: "/Tax%20Reckoner.pdf", external: true },
      { label: "SmartODR Portal", href: "https://smartodr.in/login", external: true },
      { label: "Disclaimer", to: "/disclaimer" },
    ],
  },
];

const linkClass =
  "inline-block text-sm text-white/60 hover:text-white transition-colors duration-200";

function FooterLink({ item }: { item: FooterLinkItem }) {
  if (item.href) {
    return (
      <a
        href={item.href}
        target={item.external ? "_blank" : undefined}
        rel={item.external ? "noreferrer" : undefined}
        className={linkClass}
      >
        {item.label}
      </a>
    );
  }
  return (
    <Link to={item.to ?? "/"} className={linkClass}>
      {item.label}
    </Link>
  );
}

function HomeFooter() {
  return (
    <footer
      className="relative overflow-hidden bg-gradient-to-b from-[#2f4458] via-[#28384a] to-[#1b2531] text-white"
      role="contentinfo"
    >
      {/* Bronze top hairline */}
      <div
        aria-hidden
        className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-bronze/60 to-transparent"
      />
      {/* Soft warm glow — replaces the old grid texture */}
      <div
        aria-hidden
        className="pointer-events-none absolute -top-40 right-[-8rem] h-[34rem] w-[34rem] rounded-full bg-bronze/10 blur-[130px]"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute bottom-[-10rem] left-[-6rem] h-[26rem] w-[26rem] rounded-full bg-crimson-500/10 blur-[130px]"
      />

      <div className="container-tb relative py-20 lg:py-24">
        {/* Brand + navigation */}
        <Reveal>
          <div className="grid grid-cols-1 gap-x-8 gap-y-14 lg:grid-cols-12">
            {/* Brand + contact */}
            <div className="lg:col-span-4">
              <div className="accent-bar-bronze mb-6" />
              <div className="inline-flex items-center rounded-xl bg-white px-4 py-3 shadow-lg shadow-black/25 ring-1 ring-white/10">
                <Logo className="h-8 w-auto lg:h-9" />
              </div>
              <p className="mt-6 font-display text-lg italic text-bronze">
                Institutional discipline. Local execution.
              </p>
              <p className="mt-4 max-w-xs text-sm leading-relaxed text-white/65">
                A SEBI-registered Alternative Investment Fund manager, investing across
                warehousing, residential, industrial and plotted development across India.
              </p>

              <ul className="mt-8 space-y-4">
                <li className="flex items-start gap-3">
                  <Icon as={MapPin} size={16} className="mt-0.5 shrink-0 text-bronze" />
                  <address className="text-sm not-italic leading-relaxed text-white/65">
                    608-B Wing, Express Zone,
                    <br />
                    Western Express Highway, Goregaon (E), Mumbai-400 097
                  </address>
                </li>
                <li className="flex items-center gap-3">
                  <Icon as={Phone} size={16} className="shrink-0 text-bronze" />
                  <span className="text-sm text-white/65">
                    <a href="tel:+912262366266" className="transition-colors hover:text-white">
                      +91 22 6236 6266
                    </a>
                    <span className="text-white/30"> / </span>
                    <a href="tel:+912262366277" className="transition-colors hover:text-white">
                      6277
                    </a>
                  </span>
                </li>
                <li className="flex items-center gap-3">
                  <Icon as={Mail} size={16} className="shrink-0 text-bronze" />
                  <a
                    href="mailto:dhananjay@landmarkcapital.in"
                    className="break-all text-sm text-white/65 transition-colors hover:text-white"
                  >
                    dhananjay@landmarkcapital.in
                  </a>
                </li>
              </ul>

              <div className="mt-8 flex items-center gap-3">
                <a
                  href="https://www.linkedin.com/"
                  target="_blank"
                  rel="noreferrer"
                  aria-label="Landmark Capital on LinkedIn"
                  className="grid h-10 w-10 place-items-center rounded-full border border-white/15 text-white/70 transition-colors hover:border-bronze hover:bg-white/5 hover:text-white"
                >
                  <Icon as={Linkedin} size={18} />
                </a>
                <a
                  href="mailto:dhananjay@landmarkcapital.in"
                  aria-label="Email Landmark Capital"
                  className="grid h-10 w-10 place-items-center rounded-full border border-white/15 text-white/70 transition-colors hover:border-bronze hover:bg-white/5 hover:text-white"
                >
                  <Icon as={Mail} size={18} />
                </a>
              </div>
            </div>

            {/* Navigation columns */}
            <div className="grid grid-cols-2 gap-x-8 gap-y-10 sm:grid-cols-4 lg:col-span-7 lg:col-start-6">
              {footerNav.map((group) => (
                <nav key={group.title} aria-label={group.title}>
                  <h3 className="mb-5 text-[11px] font-medium uppercase tracking-[0.2em] text-bronze">
                    {group.title}
                  </h3>
                  <ul className="space-y-3">
                    {group.links.map((item) => (
                      <li key={item.label}>
                        <FooterLink item={item} />
                      </li>
                    ))}
                  </ul>
                </nav>
              ))}
            </div>
          </div>
        </Reveal>

        {/* Bottom bar */}
        <div className="mt-12 flex flex-col items-start justify-between gap-4 border-t border-white/10 pt-8 sm:flex-row sm:items-center">
          <p className="text-xs text-white/50">
            © {new Date().getFullYear()} Landmark Capital. All rights reserved.
          </p>
          <div className="flex items-center gap-6">
            <Link
              to="/disclaimer"
              className="text-xs text-white/50 transition-colors hover:text-white"
            >
              Disclaimer
            </Link>
            <button
              type="button"
              onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
              className="group inline-flex items-center gap-2 text-xs text-white/50 transition-colors hover:text-white"
            >
              Back to top
              <span className="grid h-8 w-8 place-items-center rounded-full border border-white/20 transition-colors group-hover:border-bronze group-hover:bg-white/5">
                <Icon as={ArrowUp} size={14} />
              </span>
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}

/* -------------------------------------------------------------------------- */
/*  Default footer — retained for all non-home pages                          */
/* -------------------------------------------------------------------------- */
