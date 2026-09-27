export type ServiceStep = { title: string; body: string };

export type Service = {
  slug: string;
  name: string;
  tagline: string;
  /** Hero subtitle — opening paragraph */
  intro: string;
  /** Positioning paragraph — second intro paragraph */
  positioning: string;
  approach: ServiceStep[];
  offerings: ServiceStep[];
  /** Typical situations (Special Situation Assets) */
  situations?: string[];
  /** Note rendered after offerings (Management Services) */
  offeringsNote?: string;
  /** Who it's for */
  audience: string;
};

export const services: Service[] = [
  {
    slug: "investment-management",
    name: "Investment Management",
    tagline: "We bring the deal. You choose how it's structured.",
    intro:
      "We identify and underwrite real estate opportunities independently, off-market, through relationships built over years and not through broadly marketed deal rooms. Each opportunity is presented to investors on its own merits, fully underwritten, with a defined hold period and a mapped exit — never bundled into a blind pool of future, unnamed transactions.",
    positioning:
      "Once an investor commits to a specific deal, we structure the capital around that deal, not the other way round. This is a deliberate inversion of the traditional fund model: the asset comes first, and the vehicle — whether an AIF, LVF, Managed Account, or dedicated SPV — is chosen to fit the opportunity and the investor, never the reverse.",
    approach: [
      {
        title: "Origination",
        body: "We source opportunities through long-standing relationships with landowners, developers, brokers, and local partners, rather than competitive, broadly marketed processes.",
      },
      {
        title: "Underwriting",
        body: "Every opportunity undergoes independent financial, legal, technical, and market diligence before it is presented to any investor.",
      },
      {
        title: "Structuring",
        body: "Capital is structured deal by deal, matching tenure, ticket size, and vehicle to the specific opportunity and investor.",
      },
      {
        title: "Execution & Reporting",
        body: "We manage the investment as the platform of record, with transparent, deal-level reporting through to a planned exit.",
      },
    ],
    offerings: [
      {
        title: "Independent origination",
        body: "Source and underwrite opportunities independently, off-market, before they are shown to any investor.",
      },
      {
        title: "Flexible structuring",
        body: "Structure capital deal by deal — through an AIF, LVF, Managed Account, or a dedicated SPV — decided after the opportunity, not before.",
      },
      {
        title: "Full-cycle ownership",
        body: "Manage investor capital as the platform of record, from commitment through to exit.",
      },
      {
        title: "Transparent reporting",
        body: "Report at the deal level, ring-fenced from every other transaction in our portfolio.",
      },
      {
        title: "Exit discipline",
        body: "Plan every investment with a defined hold period and a mapped exit strategy from day one.",
      },
    ],
    audience:
      "Family offices, HNIs, institutions, and strategic partners who want direct, transparent participation in a specific real estate opportunity — not a blind-pool commitment to a fund's future deals.",
  },
  {
    slug: "special-situation-assets",
    name: "Special Situation Assets",
    tagline: "For the asset that already exists and isn't working.",
    intro:
      "Not every mandate starts with a new deal. Real estate positions stall for many reasons — a partner dispute, a developer situation linked to overleveraging, lack of proper execution capability, a stalled approval, default on obligation, a market that shifted after acquisition, or simply a lack of active management. We work with investors and developers who already hold an asset in exactly this position, and find the fastest, most value-accretive way forward.",
    positioning:
      "Our role here is different from a typical advisory mandate: we don't just recommend a course of action, we execute it — leasing the space ourselves, running the sale process ourselves, or structuring the monetisation directly, with the same hands-on discipline we bring to a new investment.",
    approach: [
      {
        title: "Diagnosis",
        body: "We assess the asset's financial position, legal standing, market context, and physical condition to understand why it has stalled.",
      },
      {
        title: "Options assessment",
        body: "We map the realistic paths forward — reactivation, monetisation, structured exit, or sale — and their relative value to the investor.",
      },
      {
        title: "Execution",
        body: "We run the chosen path directly, whether that is a leasing campaign, a sale process, or a structured exit, not a handover to a third party.",
      },
      {
        title: "Closure",
        body: "We see the situation through to a clean resolution for the investor, not a partial recommendation left for someone else to act on.",
      },
    ],
    offerings: [
      {
        title: "Turnaround assessment",
        body: "Step into defunct or non-performing investments and assess the realistic path back to value.",
      },
      {
        title: "Revenue reactivation",
        body: "Reactivate assets that are not generating any revenue, through leasing, repositioning, or repurposing.",
      },
      {
        title: "Monetisation",
        body: "Structure the monetisation of an existing investment that has no clear path to liquidity today.",
      },
      {
        title: "Exit execution",
        body: "Execute a full exit from an existing investment or asset, where that is the right outcome for the investor.",
      },
      {
        title: "Leasing & sale",
        body: "Source and close leasing and sale opportunities that the existing owner could not access alone.",
      },
    ],
    situations: [
      "An investment that has stalled — a partner dispute, a developer situation linked to overleveraging, lack of proper execution capability, a stalled approval, default on obligation, a market that shifted after acquisition, or a lack of active management.",
      "A completed asset with no active leasing or management, or land held for years with no monetisation plan.",
      "An investor looking to exit a position that no longer fits their portfolio or holding period.",
    ],
    audience:
      "Investors, family offices, developers and institutions holding a stalled, defunct, or underperforming real estate asset who need an experienced operator to unlock value — or exit cleanly.",
  },
  {
    slug: "management-services",
    name: "Management Services",
    tagline: "An in-house extension of a client's real estate portfolio.",
    intro:
      "Our involvement doesn't end at execution. For clients with an existing real estate portfolio — whether built independently or through us — we act as an in-house manager and adviser, not an outsourced, arm's-length vendor. That means embedding in how a portfolio is actually run, not simply reporting on it from a distance.",
    positioning:
      "This mandate is shaped around what each client's portfolio needs — from day-to-day asset management to portfolio-level strategy and land monetisation — and it scales, from a single asset to a full, multi-city portfolio.",
    approach: [
      {
        title: "Assessment",
        body: "We review the existing portfolio, asset by asset, to understand performance, risk, and unrealised value.",
      },
      {
        title: "Structuring",
        body: "We advise on how the portfolio should be organised, sequenced, and capitalised going forward.",
      },
      {
        title: "Management",
        body: "We take on day-to-day oversight of the assets under our management, in-house.",
      },
      {
        title: "Monetisation & exit",
        body: "Where land or assets are ready to be unlocked or exited, we lead that process directly.",
      },
    ],
    offerings: [
      {
        title: "Portfolio management",
        body: "Act as in-house manager for a client's real estate portfolio, embedded in how it is run day to day.",
      },
      {
        title: "Advisory",
        body: "Structure and advise on a client's real estate portfolio, asset allocation, sequencing, and value optimisation.",
      },
      {
        title: "Land monetisation",
        body: "Lead land monetisation, identifying and executing the best route to unlock value from land holdings.",
      },
      {
        title: "Reporting",
        body: "Provide transparent, asset-level reporting across every property under management.",
      },
      {
        title: "Exit planning",
        body: "Plan and execute structured exits when a client's portfolio, or part of it, is ready to realise value.",
      },
    ],
    offeringsNote:
      "This is not an exhaustive list — our management mandate is shaped around what each client's portfolio actually needs.",
    audience:
      "Family offices, corporates, and landowners who want a dedicated, hands-on manager and adviser for an existing real estate portfolio, not a transactional broker.",
  },
  {
    slug: "development-management",
    name: "Development Management",
    tagline: "Developer of record on every project we take on.",
    intro:
      "We act as developer of record on selective projects that we take on, not a financial sponsor watching from a distance. From the first feasibility study to final handover, our team runs design, approvals, procurement, and construction directly, so cost, quality, and timeline stay in our hands at every stage.",
    positioning:
      "This is deliberate: outsourcing execution to a third-party developer introduces a layer of risk and misaligned incentive that we choose not to accept. Every project we develop is run by the same team that underwrote it.",
    approach: [
      {
        title: "Feasibility",
        body: "We assess the site, market, and regulatory context before committing to a development plan.",
      },
      {
        title: "Design & approvals",
        body: "We coordinate architects, engineers, and consultants, and manage the regulatory approval process directly.",
      },
      {
        title: "Construction",
        body: "We oversee procurement and construction directly, managing cost and quality against plan.",
      },
      {
        title: "Handover",
        body: "We manage the transition from construction to operation or sale, closing out every commitment to investors and buyers.",
      },
    ],
    offerings: [
      {
        title: "End-to-end ownership",
        body: "Take direct responsibility for design, approvals, procurement, and construction.",
      },
      {
        title: "Direct control",
        body: "Control cost, quality, and timeline in-house, from feasibility through to handover.",
      },
      {
        title: "Single point of accountability",
        body: "Coordinate architects, contractors, and consultants under one accountable team.",
      },
      {
        title: "Cross-asset-class delivery",
        body: "Deliver across asset classes — warehousing, residential, commercial, and plotted development.",
      },
    ],
    audience:
      "Investors and partners who want a single, accountable team running execution, not a fragmented hand-off between manager, developer, and contractor.",
  },
];

export function getService(slug: string) {
  return services.find((s) => s.slug === slug);
}
