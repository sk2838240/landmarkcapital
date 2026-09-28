/**
 * Vercel serverless function — invoked via the vercel.json rewrite for
 * /sitemap.xml. Reads Sanity on every request and falls back to the static
 * URL list when the CMS is not configured or unreachable.
 */

const projectId = process.env.VITE_SANITY_PROJECT_ID;
const dataset = process.env.VITE_SANITY_DATASET || "production";
const API_VERSION = "v2024-10-01";
const BASE = "https://www.landmarkcapital.in";

const staticPages = [
  { loc: "/", priority: "1.0", freq: "weekly" },
  { loc: "/about", priority: "0.9", freq: "monthly" },
  { loc: "/structures", priority: "0.9", freq: "monthly" },
  { loc: "/funds/multiplier", priority: "0.8", freq: "monthly" },
  { loc: "/funds/opportunity", priority: "0.7", freq: "monthly" },
  { loc: "/structures/aif", priority: "0.8", freq: "monthly" },
  { loc: "/structures/lvf", priority: "0.7", freq: "monthly" },
  { loc: "/structures/managed-accounts", priority: "0.8", freq: "monthly" },
  { loc: "/structures/spv", priority: "0.8", freq: "monthly" },
  { loc: "/portfolio", priority: "0.9", freq: "weekly" },
  { loc: "/opportunities", priority: "0.9", freq: "weekly" },
  { loc: "/transactions", priority: "0.8", freq: "monthly" },
  { loc: "/leadership", priority: "0.7", freq: "monthly" },
  { loc: "/newsroom", priority: "0.8", freq: "weekly" },
  { loc: "/insights", priority: "0.8", freq: "weekly" },
  { loc: "/insights/faq", priority: "0.6", freq: "monthly" },
  { loc: "/service/investment-management", priority: "0.7", freq: "monthly" },
  { loc: "/service/special-situation-assets", priority: "0.7", freq: "monthly" },
  { loc: "/service/management-services", priority: "0.7", freq: "monthly" },
  { loc: "/service/development-management", priority: "0.7", freq: "monthly" },
  { loc: "/contact", priority: "0.6", freq: "monthly" },
];

const staticBlogSlugs = [
  "landmark-aligns-with-india-real-estate",
  "sebi-brokers-investor-money",
  "rising-interest-rates-real-estate",
  "rise-of-indias-e-marketplaces",
  "black-horse-indian-real-estate",
  "multimodal-warehousing",
  "ev-indian-logistic-sector",
  "preserving-the-planet-esg",
  "warehousing-outlook-2022",
  "input-cost-conundrum",
  "quick-commerce-going-dark",
  "warehousing-vs-residential",
  "evergrande-debt-fueled-growth",
  "grade-a-warehousing",
  "textile-pli-scheme",
  "pli-scheme-private-investments",
  "global-trade-container-shortage",
  "ecommerce-impact-warehousing",
  "ocean-freight-rate-spike",
  "gdp-growth-miracle-or-mirage",
  "emerging-trend-warehousing-logistics",
];

async function query(groq) {
  const url = `https://${projectId}.api.sanity.io/${API_VERSION}/data/query/${dataset}?query=${encodeURIComponent(groq)}`;
  const res = await fetch(url);
  if (!res.ok) throw new Error(`Sanity query failed: ${res.status}`);
  const json = await res.json();
  return json.result;
}

function urlEntry(loc, priority, freq) {
  return `<url><loc>${BASE}${loc}</loc><changefreq>${freq}</changefreq><priority>${priority}</priority></url>`;
}

export default async function handler(req, res) {
  let entries = staticPages.map((p) => urlEntry(p.loc, p.priority, p.freq));

  if (projectId) {
    try {
      const blogs = await query(
        `*[_type == "blogPost" && !(_id in path("drafts.**"))] | order(coalesce(date, _createdAt) desc){title, "slug": slug.current}`
      );
      const reports = await query(
        `*[_type == "report" && !(_id in path("drafts.**"))] | order(_createdAt desc){title, "slug": slug.current}`
      );
      const blogEntries = blogs.map((b) => urlEntry(`/blog/${b.slug}`, "0.6", "monthly"));
      const reportEntries = reports.map((r) => urlEntry(`/report/${r.slug}`, "0.6", "monthly"));
      // CMS is the source of truth for dynamic content; static pages stay.
      entries = [
        ...staticPages.map((p) => urlEntry(p.loc, p.priority, p.freq)),
        ...reportEntries,
        ...blogEntries,
      ];
    } catch {
      // fall back to the static list
    }
  } else {
    entries = [
      ...staticPages.map((p) => urlEntry(p.loc, p.priority, p.freq)),
      ...staticBlogSlugs.map((slug) => urlEntry(`/blog/${slug}`, "0.6", "monthly")),
      urlEntry("/report/tax-reckoner", "0.6", "monthly"),
    ];
  }

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  ${entries.join("\n  ")}
</urlset>`;

  res.setHeader("Content-Type", "application/xml");
  res.setHeader("Cache-Control", "public, max-age=0, s-maxage=3600, stale-while-revalidate=86400");
  res.status(200).send(xml);
}
