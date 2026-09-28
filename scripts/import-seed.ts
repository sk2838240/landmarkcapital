import { readFileSync } from "node:fs";
import { blogs } from "@/data/blogs";
import { reports } from "@/data/reports";
import { interviews } from "@/data/interviews";
import { services } from "@/data/services";
import { portfolioProjects } from "@/data/portfolio";
import { faqs } from "@/data/faq";
import { team } from "@/data/team";
import { industryData } from "@/data/industry";
import { nav } from "@/data/navigation";

/** Load root .env (no dotenv dependency) — only fills vars that are unset. */
function loadEnv() {
  try {
    const env = readFileSync(new URL("../.env", import.meta.url), "utf8");
    for (const line of env.split(/\r?\n/)) {
      const m = line.match(/^\s*([A-Za-z0-9_]+)\s*=\s*(.*)\s*$/);
      if (m && m[1] && process.env[m[1]] === undefined) {
        process.env[m[1]] = m[2].trim();
      }
    }
  } catch {
    // no .env file — env vars may come from the shell/Vercel
  }
}

loadEnv();

/**
 * One-time seed import: pushes the bundled static content into Sanity so the
 * site is CMS-managed from day one.
 *
 * Requires:
 *   VITE_SANITY_PROJECT_ID / VITE_SANITY_DATASET  (root .env)
 *   SANITY_API_TOKEN  (sanity.io/manage → API → Tokens, Editor rights)
 *
 * Run:  npm run cms:import
 */

const projectId = process.env.VITE_SANITY_PROJECT_ID;
const dataset = process.env.VITE_SANITY_DATASET || "production";
const token = process.env.SANITY_API_TOKEN;
const API_VERSION = "v2024-10-01";

type Doc = Record<string, unknown>;

const slug = (current: string) => ({ _type: "slug", current });

function blogDoc(b: (typeof blogs)[number]): Doc {
  return {
    _type: "blogPost",
    title: b.title,
    slug: slug(b.slug),
    excerpt: b.excerpt,
    author: b.author,
    date: b.date,
    ...(b.category ? { category: b.category } : {}),
    // Cover images are uploaded in the Studio (drag-drop) — URL-based static
    // images cannot be seeded as Sanity assets.
  };
}

function reportDoc(r: (typeof reports)[number]): Doc {
  return { _type: "report", title: r.title, slug: slug(r.slug), description: r.description };
}

function interviewDoc(i: (typeof interviews)[number]): Doc {
  return {
    _type: "interview",
    title: i.title,
    eyebrow: i.eyebrow,
    description: i.description,
    speakerName: i.speaker.name,
    speakerRole: i.speaker.role,
    duration: i.duration,
  };
}

function serviceDoc(s: (typeof services)[number]): Doc {
  return {
    _type: "service",
    name: s.name,
    slug: slug(s.slug),
    tagline: s.tagline,
    intro: s.intro,
    positioning: s.positioning,
    approach: s.approach.map((a) => ({ _type: "serviceStep", ...a })),
    offerings: s.offerings.map((o) => ({ _type: "serviceStep", ...o })),
    ...(s.situations ? { situations: s.situations } : {}),
    ...(s.offeringsNote ? { offeringsNote: s.offeringsNote } : {}),
    audience: s.audience,
  };
}

function projectDoc(p: (typeof portfolioProjects)[number]): Doc {
  return {
    _type: "portfolioProject",
    name: p.name,
    company: p.company,
    type: p.type,
    location: p.location,
    developerGroup: p.developerGroup,
    landArea: p.landArea,
    saleableArea: p.saleableArea,
    invested: p.invested,
    status: p.status,
    highlights: p.highlights,
    metrics: p.metrics.map((m) => ({ _type: "metricItem", ...m })),
  };
}

function faqDoc(f: { question: string; answer: string }, i: number): Doc {
  return { _type: "faq", question: f.question, answer: f.answer, order: i + 1 };
}

function teamDoc(m: (typeof team)[number], i: number): Doc {
  return {
    _type: "teamMember",
    name: m.name,
    role: m.role,
    group: m.category,
    bio: m.bio,
    ...(m.credentials ? { credentials: m.credentials } : {}),
    ...(m.linkedin ? { linkedin: m.linkedin } : {}),
    order: i + 1,
  };
}

function industryDoc(d: (typeof industryData)[number], i: number): Doc {
  return {
    _type: "industryDataPoint",
    value: d.value,
    label: d.label,
    source: d.source,
    category: d.category,
    order: i + 1,
  };
}

function navItemDoc(n: (typeof nav)[number]): Doc {
  return {
    _type: "navItem",
    label: n.label,
    to: n.to,
    ...(n.activePaths ? { activePaths: n.activePaths } : {}),
  };
}

const settingsDoc: Doc = {
  _type: "siteSettings",
  _id: "siteSettings",
  brandDescription:
    "A SEBI-registered Alternative Investment Fund manager, investing across warehousing, residential, industrial and plotted development across India.",
  nav: nav.map(navItemDoc),
  footerNav: [
    {
      _type: "footerColumn",
      title: "Firm",
      links: [
        { _type: "footerLink", label: "About", to: "/about" },
        { _type: "footerLink", label: "Leadership", to: "/leadership" },
        { _type: "footerLink", label: "News Room", to: "/newsroom" },
        { _type: "footerLink", label: "Current Portfolio", to: "/portfolio" },
        { _type: "footerLink", label: "Opportunities", to: "/opportunities" },
        { _type: "footerLink", label: "Transactions", to: "/transactions" },
        { _type: "footerLink", label: "Contact", to: "/contact" },
        { _type: "footerLink", label: "SmartODR Portal", to: "https://smartodr.in/login" },
      ],
    },
    {
      _type: "footerColumn",
      title: "Our Funds",
      links: [
        { _type: "footerLink", label: "Multiplier Fund", to: "/funds/multiplier" },
        { _type: "footerLink", label: "Opportunity Fund", to: "/funds/opportunity" },
      ],
    },
    {
      _type: "footerColumn",
      title: "Available Structures",
      links: [
        { _type: "footerLink", label: "AIF", to: "/structures/aif" },
        { _type: "footerLink", label: "LVF", to: "/structures/lvf" },
        { _type: "footerLink", label: "Managed Accounts", to: "/structures/managed-accounts" },
      ],
    },
    {
      _type: "footerColumn",
      title: "Insights",
      links: [
        { _type: "footerLink", label: "Research & Insights", to: "/insights" },
        { _type: "footerLink", label: "FAQ", to: "/insights/faq" },
        { _type: "footerLink", label: "Tax Reckoner", to: "/Tax%20Reckoner.pdf" },
        { _type: "footerLink", label: "SmartODR Portal", to: "https://smartodr.in/login" },
        { _type: "footerLink", label: "Disclaimer", to: "/disclaimer" },
      ],
    },
  ],
  stats: [
    { _type: "statItem", group: "portfolio", label: "Warehousing", numericTarget: 3.5, decimals: 1, suffix: "M+", description: "Square feet across strategic industrial corridors" },
    { _type: "statItem", group: "portfolio", label: "Residential", numericTarget: 3.8, decimals: 1, suffix: "M+", description: "Square feet in residential projects targeting emerging urban markets" },
    { _type: "statItem", group: "portfolio", label: "Plotting", numericTarget: 3.5, decimals: 1, suffix: "M+", description: "Square feet in land development with exceptional growth potential" },
    { _type: "statItem", group: "track", label: "Transactions", numericTarget: 45, decimals: 0, suffix: "+", description: "Executed across India" },
    { _type: "statItem", group: "track", label: "Investments", numericTarget: 4000, decimals: 0, prefix: "₹", suffix: "Cr", description: "Cumulative managed" },
    { _type: "statItem", group: "track", label: "Major Cities", numericTarget: 12, decimals: 0, description: "Pan-India presence" },
    { _type: "statItem", group: "about", label: "Years of discipline", numericTarget: 30, decimals: 0, suffix: "+" },
    { _type: "statItem", group: "about", label: "Transactions executed", numericTarget: 45, decimals: 0, suffix: "+" },
    { _type: "statItem", group: "about", label: "Cumulative managed", numericTarget: 4000, decimals: 0, prefix: "₹", suffix: " Cr" },
    { _type: "statItem", group: "about", label: "Major Indian cities", numericTarget: 12, decimals: 0 },
  ],
  address: ["608-B Wing, Express Zone,", "Western Express Highway, Goregaon (E), Mumbai-400 097"],
  phones: ["+91 22 6236 6266", "+91 22 6236 6277"],
  emails: ["dhananjay@landmarkcapital.in"],
  socials: [
    { _type: "socialLink", label: "LinkedIn", url: "https://www.linkedin.com/company/landmark-capital-advisors" },
    { _type: "socialLink", label: "Email", url: "mailto:dhananjay@landmarkcapital.in" },
  ],
  robotsTxt: "User-agent: *\nAllow: /\nDisallow: /disclaimer",
};

const pageSeoDocs: Doc[] = [
  {
    _type: "pageSeo",
    path: "/",
    title: "Landmark Capital — Institutional real estate investing",
    description:
      "Landmark Capital delivers institutional-grade real estate investment and advisory solutions built on expertise, transparency and disciplined execution across India.",
  },
  {
    _type: "pageSeo",
    path: "/insights/faq",
    title: "FAQ",
    description:
      "Common questions about fund participation, drawdowns, reporting and the investor lifecycle at Landmark Capital.",
  },
];

async function main() {
  if (!projectId || !token) {
    console.error(
      "[seed] Missing config. Set VITE_SANITY_PROJECT_ID, VITE_SANITY_DATASET and SANITY_API_TOKEN (Editor rights) in .env, then re-run."
    );
    process.exit(1);
  }

  const docs: Doc[] = [
    settingsDoc,
    ...pageSeoDocs,
    ...blogs.map(blogDoc),
    ...reports.map(reportDoc),
    ...interviews.map(interviewDoc),
    ...services.map(serviceDoc),
    ...portfolioProjects.map(projectDoc),
    ...faqs.map(faqDoc),
    ...team.map(teamDoc),
    ...industryData.map(industryDoc),
  ];

  const mutations = docs.map((d) => ({ createOrReplace: d }));
  const url = `https://${projectId}.api.sanity.io/${API_VERSION}/data/mutate/${dataset}?returnIds=true`;
  const res = await fetch(url, {
    method: "POST",
    headers: { "Content-Type": "application/json", Authorization: `Bearer ${token}` },
    body: JSON.stringify({ mutations }),
  });

  if (!res.ok) {
    const body = await res.text();
    console.error(`[seed] Import failed (${res.status}): ${body.slice(0, 500)}`);
    process.exit(1);
  }

  const json = await res.json();
  console.log(`[seed] Imported ${json.results?.length ?? docs.length} documents into Sanity.`);
  console.log("[seed] Next: redeploy the site (or run npm run build) to fetch CMS content.");
}

main().catch((err) => {
  console.error(`[seed] ${err.message}`);
  process.exit(1);
});
