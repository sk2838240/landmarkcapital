import { writeFileSync, mkdirSync, readFileSync } from "node:fs";
import { fileURLToPath } from "node:url";

/**
 * Fetches published content from Sanity and writes src/generated/cms.json,
 * which the site merges over its bundled static data at build time.
 *
 * Runs automatically via `predev` / `prebuild`. If Sanity is not configured
 * (or the API is unreachable, or the write fails), the baseline file is
 * written and the site falls back to its static content — nothing breaks.
 */

// Load root .env (no dotenv dependency) — only fills vars that are unset.
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

const projectId = process.env.VITE_SANITY_PROJECT_ID;
const dataset = process.env.VITE_SANITY_DATASET || "production";
const API_VERSION = "v2024-10-01";

function toPath(url) {
  // fileURLToPath decodes percent-encoding and handles Windows drive letters.
  return fileURLToPath(url);
}

const OUT_DIR = toPath(new URL("../src/generated/", import.meta.url));
const OUT = toPath(new URL("../src/generated/cms.json", import.meta.url));

const baseline = {
  settings: null,
  pageSeo: [],
  redirects: [],
  blogs: [],
  reports: [],
  interviews: [],
  services: [],
  portfolio: [],
  faqs: [],
  team: { leadership: [], teamMembers: [] },
  industryData: [],
};

function writeBaseline() {
  try {
    mkdirSync(OUT_DIR, { recursive: true });
    writeFileSync(OUT, JSON.stringify(baseline, null, 2));
  } catch {
    // nothing more we can do — the app import will fail loudly if this ever happens
  }
}

const published = `!(_id in path("drafts.**"))`;

const QUERIES = {
  settings: `*[_id == "siteSettings"][0]{brandDescription, nav[]{label, to, activePaths, cards[]{label, cta, to, "image": image.asset->url, "alt": image.alt}}, footerNav[]{title, links[]{label, to}}, stats[]{group, label, numericTarget, decimals, prefix, suffix, description}, address, phones, emails, socials[]{label, url}, robotsTxt}`,
  pageSeo: `*[_type == "pageSeo" && ${published}]{path, title, description, "ogImage": ogImage.asset->url, canonical, noindex}`,
  redirects: `*[_type == "redirect" && ${published}]{source, destination, permanent}`,
  blogs: `*[_type == "blogPost" && ${published}] | order(coalesce(date, _createdAt) desc){title, "slug": slug.current, excerpt, author, date, category, "image": image.asset->url, seo}`,
  reports: `*[_type == "report" && ${published}] | order(coalesce(date, _createdAt) desc){title, "slug": slug.current, description, "fileUrl": file.asset->url, seo}`,
  interviews: `*[_type == "interview" && ${published}] | order(_createdAt asc){_id, eyebrow, title, description, speakerName, speakerRole, duration, "thumbnail": thumbnail.asset->url, thumbnailAlt, videoUrl}`,
  services: `*[_type == "service" && ${published}] | order(_createdAt asc){name, "slug": slug.current, tagline, intro, positioning, approach[]{title, body}, offerings[]{title, body}, situations, offeringsNote, audience, seo}`,
  portfolio: `*[_type == "portfolioProject" && ${published}] | order(_createdAt asc){name, "slug": slug.current, company, type, location, developerGroup, landArea, saleableArea, invested, status, locationTagline, highlights, metrics[]{label, value}, "image": image.asset->url, imageAlt, sections, seo}`,
  faqs: `*[_type == "faq" && ${published}] | order(order asc){question, answer}`,
  team: `*[_type == "teamMember" && ${published}] | order(order asc){name, role, group, "photo": photo.asset->url, photoAlt, bio, credentials, linkedin}`,
  industryData: `*[_type == "industryDataPoint" && ${published}] | order(order asc){value, label, source, category}`,
};

async function query(groq) {
  const url = `https://${projectId}.api.sanity.io/${API_VERSION}/data/query/${dataset}?query=${encodeURIComponent(groq)}`;
  const res = await fetch(url);
  if (!res.ok) throw new Error(`Sanity query failed (${res.status}) for ${groq.slice(0, 40)}…`);
  const json = await res.json();
  return json.result;
}

async function main() {
  if (!projectId || projectId === "your-project-id") {
    writeBaseline();
    console.log("[cms] Sanity not configured — using bundled static content.");
    return;
  }

  const results = {};
  await Promise.all(
    Object.entries(QUERIES).map(async ([key, groq]) => {
      try {
        results[key] = await query(groq);
      } catch (err) {
        console.warn(`[cms] ${key}: ${err.message}`);
        results[key] = key === "settings" ? null : [];
      }
    })
  );

  const team = results.team ?? [];
  const cms = {
    settings: results.settings ?? null,
    pageSeo: (results.pageSeo ?? []).map((p) => ({ ...p, ogImage: p.ogImage ?? null })),
    redirects: results.redirects ?? [],
    blogs: (results.blogs ?? []).map((b) => ({
      slug: b.slug,
      title: b.title,
      excerpt: b.excerpt ?? "",
      author: b.author ?? "",
      date: b.date ?? new Date().toISOString(),
      category: b.category ?? "",
      image: b.image ?? null,
      seo: b.seo
        ? {
            metaTitle: b.seo.metaTitle ?? null,
            metaDescription: b.seo.metaDescription ?? null,
            ogImage: b.seo.ogImage ?? null,
            noindex: b.seo.noindex ?? false,
          }
        : null,
    })),
    reports: (results.reports ?? []).map((r) => ({
      slug: r.slug,
      title: r.title,
      description: r.description ?? "",
      href: r.fileUrl ?? "",
      seo: r.seo
        ? { metaTitle: r.seo.metaTitle ?? null, metaDescription: r.seo.metaDescription ?? null, ogImage: r.seo.ogImage ?? null, noindex: r.seo.noindex ?? false }
        : null,
    })),
    interviews: (results.interviews ?? []).map((i) => ({
      id: i._id,
      eyebrow: i.eyebrow ?? "",
      title: i.title,
      description: i.description ?? "",
      speaker: { name: i.speakerName ?? "", role: i.speakerRole ?? "" },
      duration: i.duration ?? "",
      thumbnail: i.thumbnail ?? "",
      thumbnailAlt: i.thumbnailAlt ?? i.title,
      videoUrl: i.videoUrl ?? undefined,
    })),
    services: results.services ?? [],
    portfolio: (results.portfolio ?? []).map((p) => ({
      id: p.slug ?? p.name?.toLowerCase().replace(/\s+/g, "-") ?? "",
      name: p.name,
      company: p.company ?? "",
      type: p.type ?? "",
      location: p.location ?? "",
      developerGroup: p.developerGroup ?? "",
      landArea: p.landArea ?? "",
      saleableArea: p.saleableArea ?? "",
      invested: p.invested ?? "",
      status: p.status ?? "",
      locationTagline: p.locationTagline ?? "",
      highlights: p.highlights ?? [],
      metrics: p.metrics ?? [],
      sections: (p.sections ?? []).map((s) => {
        if (s._type === "tableSection") {
          return { kind: "table", title: s.title, columns: s.columns ?? [], rows: (s.rows ?? []).map((r) => r.cells ?? []) };
        }
        if (s._type === "columnsSection") {
          return { kind: "columns", title: s.title, columns: (s.columns ?? []).map((c) => ({ title: c.title, items: c.items ?? [] })) };
        }
        if (s._type === "proseSection") {
          return { kind: "prose", title: s.title, body: s.body ?? "" };
        }
        return { kind: "bullets", title: s.title, items: (s.items ?? []).map((it) => ({ title: it.title ?? undefined, body: it.body ?? "" })) };
      }),
      image: p.image ?? "",
      imageAlt: p.imageAlt ?? p.name,
      seo: p.seo ?? null,
    })),
    faqs: results.faqs ?? [],
    team: {
      leadership: team.filter((m) => m.group === "leadership"),
      teamMembers: team.filter((m) => m.group !== "leadership"),
    },
    industryData: results.industryData ?? [],
  };

  mkdirSync(OUT_DIR, { recursive: true });
  writeFileSync(OUT, JSON.stringify(cms, null, 2));
  const counts = Object.entries(cms)
    .filter(([, v]) => Array.isArray(v))
    .map(([k, v]) => `${k}: ${v.length}`)
    .join(", ");
  console.log(`[cms] Content fetched from Sanity (${counts}).`);
}

main().catch((err) => {
  console.warn(`[cms] Falling back to bundled static content: ${err.message}`);
  writeBaseline();
});
