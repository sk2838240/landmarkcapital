/**
 * Vercel serverless function — invoked via the vercel.json rewrite for
 * /robots.txt. Serves the robots.txt content edited in Sanity (Site
 * Settings), falling back to the built-in default.
 */

const projectId = process.env.VITE_SANITY_PROJECT_ID;
const dataset = process.env.VITE_SANITY_DATASET || "production";
const API_VERSION = "v2024-10-01";
const BASE = "https://www.landmarkcapital.in";

const DEFAULT_ROBOTS = `User-agent: *
Allow: /
Disallow: /disclaimer

Sitemap: ${BASE}/sitemap.xml`;

export default async function handler(req, res) {
  let content = DEFAULT_ROBOTS;

  if (projectId) {
    try {
      const url = `https://${projectId}.api.sanity.io/${API_VERSION}/data/query/${dataset}?query=${encodeURIComponent(
        `*[_id == "siteSettings"][0]{robotsTxt}`
      )}`;
      const r = await fetch(url);
      if (r.ok) {
        const json = await r.json();
        const txt = json.result?.robotsTxt;
        if (txt && txt.trim()) {
          content = txt.trim().includes("Sitemap:") ? txt.trim() : `${txt.trim()}\n\nSitemap: ${BASE}/sitemap.xml`;
        }
      }
    } catch {
      // fall back to the default
    }
  }

  res.setHeader("Content-Type", "text/plain");
  res.setHeader("Cache-Control", "public, max-age=0, s-maxage=3600, stale-while-revalidate=86400");
  res.status(200).send(content);
}
