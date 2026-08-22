import { Link, useLocation } from "react-router-dom";
import { ArrowUp, Linkedin, Mail, MapPin, Phone } from "lucide-react";
import { Logo } from "@/components/common/Logo";
import { Reveal } from "@/components/common/Reveal";
import { Icon } from "@/components/common/Icon";

const regulatoryDetails = [
  { label: "Investment Manager", value: "Landmark Capital Advisors" },
  { label: "SEBI Reg. — Multiplier Fund", value: "IN/AIF2/21-22/0928" },
  { label: "SEBI Reg. — Opportunity Fund", value: "IN/AIF2/13-14/0068" },
  { label: "Category", value: "II Alternative Investment Fund" },
];

const contactRegulatory = [
  {
    label: "Compliance Officer",
    name: "Ravindra Gupta",
    email: "compliance@landmarkcapital.in",
  },
  {
    label: "Investor Grievance",
    name: "Grievance Redressal Cell",
    email: "grievance@landmarkcapital.in",
  },
];

const disclaimer =
  "This website is intended for informational purposes only and does not constitute an offer or solicitation to invest in any scheme managed by Landmark Capital. Investments in Alternative Investment Funds are subject to market, liquidity and regulatory risks and long lock-in periods. Investors should read the Private Placement Memorandum and Contribution Agreement carefully before making any investment decision. Past performance is not indicative of future results.";

/* -------------------------------------------------------------------------- */
/*  Router: the homepage gets the redesigned footer; every other page keeps   */
/*  the existing one for now.                                                 */
/* -------------------------------------------------------------------------- */

export function Footer() {
  const { pathname } = useLocation();
  return pathname === "/" ? <HomeFooter /> : <DefaultFooter />;
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
      { label: "Opportunities", to: "/opportunities" },
      { label: "Transactions", to: "/transactions" },
      { label: "Contact", to: "/contact" },
    ],
  },
  {
    title: "Strategies",
    links: [
      { label: "Multiplier Fund", to: "/strategies/multiplier" },
      { label: "Opportunity Fund", to: "/strategies/opportunity" },
      { label: "LVF", to: "/strategies/lvf" },
      { label: "Direct SPV", to: "/strategies/spv" },
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
                    63, 6th Floor, Maker Tower &ldquo;F&rdquo;,
                    <br />
                    Cuffe Parade, Mumbai 400 005
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
            <div className="grid grid-cols-2 gap-x-8 gap-y-10 sm:grid-cols-3 lg:col-span-7 lg:col-start-6">
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

        {/* Regulatory panel */}
        <Reveal>
          <div className="mt-16 rounded-2xl border border-white/10 bg-white/[0.03] p-8 lg:p-10">
            <h3 className="eyebrow-accent mb-6">Regulatory information</h3>
            <dl className="grid grid-cols-1 gap-x-8 gap-y-5 md:grid-cols-2 lg:grid-cols-4">
              {regulatoryDetails.map((r) => (
                <div key={r.label}>
                  <dt className="mb-1.5 text-[10px] uppercase tracking-[0.14em] text-white/50">
                    {r.label}
                  </dt>
                  <dd className="font-mono text-xs leading-relaxed tabular-nums text-white/85">
                    {r.value}
                  </dd>
                </div>
              ))}
            </dl>

            <div className="mt-8 grid grid-cols-1 gap-8 border-t border-white/10 pt-8 md:grid-cols-3">
              {contactRegulatory.map((c) => (
                <div key={c.label}>
                  <p className="mb-1.5 text-[10px] uppercase tracking-[0.14em] text-white/50">
                    {c.label}
                  </p>
                  <p className="text-sm text-white/85">{c.name}</p>
                  <a
                    href={`mailto:${c.email}`}
                    className="text-xs text-white/60 transition-colors hover:text-white"
                  >
                    {c.email}
                  </a>
                </div>
              ))}
              <div>
                <p className="mb-1.5 text-[10px] uppercase tracking-[0.14em] text-white/50">
                  Dispute Resolution
                </p>
                <p className="text-sm text-white/85">SEBI SmartODR</p>
                <a
                  href="https://smartodr.in/login"
                  target="_blank"
                  rel="noreferrer"
                  className="text-xs text-white/60 transition-colors hover:text-white"
                >
                  smartodr.in
                </a>
              </div>
            </div>

            <p className="mt-8 max-w-4xl text-[11px] leading-relaxed text-white/45">
              {disclaimer}
            </p>
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

function DefaultFooter() {
  return (
    <footer
      className="bg-midnight text-white relative overflow-hidden"
      role="contentinfo"
    >
      <div
        aria-hidden
        className="absolute inset-0 opacity-[0.07] pointer-events-none"
        style={{
          backgroundImage:
            "linear-gradient(to right, white 1px, transparent 1px), linear-gradient(to bottom, white 1px, transparent 1px)",
          backgroundSize: "64px 64px",
        }}
      />

      <div className="container-tb py-16 lg:py-20 relative">
        <div className="accent-bar-bronze mb-8" />
        <p className="display-2 text-white max-w-3xl text-balance mb-14">
          Institutional real estate investing
          <br />
          <span className="italic font-light text-bronze">
            backed by research and governance.
          </span>
        </p>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 pt-12 border-t border-white/15">
          <div className="md:col-span-4">
            <Logo onDark className="h-11 w-auto" />
            <p className="mt-6 text-sm text-white/70 leading-relaxed max-w-xs">
              A SEBI-registered Alternative Investment Fund manager. Operating across warehousing,
              residential, industrial and plotted development across India.
            </p>
            <address className="mt-6 text-xs text-white/70 leading-relaxed not-italic">
              63, 6th Floor, Maker Tower &ldquo;F&rdquo;,
              <br />
              Cuffe Parade, Mumbai 400 005
            </address>
          </div>

          <nav aria-label="Footer" className="md:col-span-2">
            <h4 className="text-[10px] tracking-[0.22em] uppercase text-bronze mb-5">Explore</h4>
            <ul className="space-y-3 text-sm text-white/80">
              <li><Link to="/about" className="hover:text-white transition-colors">About</Link></li>
              <li><Link to="/leadership" className="hover:text-white transition-colors">Leadership</Link></li>
              <li><Link to="/contact" className="hover:text-white transition-colors">Contact</Link></li>
              <li><Link to="/disclaimer" className="hover:text-white transition-colors">Disclaimer</Link></li>
            </ul>
          </nav>

          <nav aria-label="Strategies" className="md:col-span-2">
            <h4 className="text-[10px] tracking-[0.22em] uppercase text-bronze mb-5">Strategies</h4>
            <ul className="space-y-3 text-sm text-white/80">
              <li><Link to="/strategies/multiplier" className="hover:text-white transition-colors">Multiplier Fund</Link></li>
              <li><Link to="/strategies/opportunity" className="hover:text-white transition-colors">Opportunity Fund</Link></li>
              <li><Link to="/strategies/lvf" className="hover:text-white transition-colors">LVF</Link></li>
              <li><Link to="/strategies/spv" className="hover:text-white transition-colors">Direct SPV</Link></li>
            </ul>
          </nav>

          <nav aria-label="Insights" className="md:col-span-2">
            <h4 className="text-[10px] tracking-[0.22em] uppercase text-bronze mb-5">Insights</h4>
            <ul className="space-y-3 text-sm text-white/80">
              <li><Link to="/insights" className="hover:text-white transition-colors">Research & Insights</Link></li>
              <li><Link to="/insights/faq" className="hover:text-white transition-colors">FAQ</Link></li>
              <li>
                <a href="/Tax%20Reckoner.pdf" target="_blank" rel="noreferrer" className="hover:text-white transition-colors">Tax Reckoner</a>
              </li>
              <li>
                <a href="https://smartodr.in/login" target="_blank" rel="noreferrer" className="hover:text-white transition-colors">SmartODR Portal</a>
              </li>
            </ul>
          </nav>

          <nav aria-label="Connect" className="md:col-span-2">
            <h4 className="text-[10px] tracking-[0.22em] uppercase text-bronze mb-5">Connect</h4>
            <ul className="space-y-3 text-sm text-white/80">
              <li>
                <a href="https://www.linkedin.com/" target="_blank" rel="noreferrer" className="hover:text-white transition-colors">
                  LinkedIn
                </a>
              </li>
              <li>
                <a href="mailto:dhananjay@landmarkcapital.in" className="hover:text-white transition-colors">
                  Email
                </a>
              </li>
              <li><Link to="/opportunities" className="hover:text-white transition-colors">Opportunities</Link></li>
              <li><Link to="/transactions" className="hover:text-white transition-colors">Transactions</Link></li>
            </ul>
          </nav>
        </div>

        <div className="mt-14 pt-10 border-t border-white/15">
          <h4 className="text-[10px] tracking-[0.22em] uppercase text-bronze mb-6">
            Regulatory information
          </h4>
          <dl className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-x-8 gap-y-5">
            {regulatoryDetails.map((r) => (
              <div key={r.label}>
                <dt className="text-[10px] tracking-[0.14em] uppercase text-white/55 mb-1.5">
                  {r.label}
                </dt>
                <dd className="text-xs text-white/85 leading-relaxed font-mono tabular-nums">
                  {r.value}
                </dd>
              </div>
            ))}
          </dl>

          <div className="mt-8 pt-8 border-t border-white/10 grid grid-cols-1 md:grid-cols-2 gap-8">
            {contactRegulatory.map((c) => (
              <div key={c.label}>
                <p className="text-[10px] tracking-[0.14em] uppercase text-white/55 mb-1.5">
                  {c.label}
                </p>
                <p className="text-sm text-white/85">{c.name}</p>
                <a
                  href={`mailto:${c.email}`}
                  className="text-xs text-white/70 hover:text-white transition-colors"
                >
                  {c.email}
                </a>
              </div>
            ))}
          </div>

          <p className="mt-8 text-[11px] leading-relaxed text-white/60 max-w-4xl">
            {disclaimer}
          </p>
        </div>

        <div className="mt-12 pt-8 border-t border-white/15 flex flex-col md:flex-row items-start md:items-center justify-between gap-4 text-xs text-white/60">
          <p>© {new Date().getFullYear()} Landmark Capital. All rights reserved.</p>
          <p className="text-white/70">Institutional discipline. Local execution.</p>
        </div>
      </div>
    </footer>
  );
}
