# Sanity CMS — setup & usage

The site is CMS-ready: every content section (blogs, reports, videos/interviews, services, portfolio, FAQs, team, stats, header, footer) reads from Sanity when configured, and falls back to the bundled static content when it is not. Nothing breaks without Sanity.

## Architecture

```
Sanity Studio (studio/) ──publish──▶ Sanity Content Lake
                                          │
                              webhook → Vercel rebuild
                                          ▼
scripts/fetch-cms.mjs  ──writes──▶ src/generated/cms.json
                                          ▼
src/lib/cmsData.ts (merge) ──▶ pages/components (unchanged UI)
```

- **Build-time content**: `predev` / `prebuild` run `scripts/fetch-cms.mjs`, which fetches published documents and writes `src/generated/cms.json` (gitignored).
- **Static fallback**: any CMS collection that is empty falls back to the matching file in `src/data/` — the site works identically without Sanity configured.
- **No database**: Sanity hosts the datastore; you deploy only the Studio (static) and use the API.

## One-time setup

1. **Create the Sanity project**: sign up at [sanity.io](https://www.sanity.io) → Manage → Create project (name it e.g. "Landmark Capital", dataset `production`).
2. **Configure the Studio**:
   - `cp studio/.env.example studio/.env` and fill `SANITY_STUDIO_PROJECT_ID`
   - `cd studio && npm install && npm run dev` — the Studio opens at localhost:3333 with all edit screens (Blog Posts, Reports, Videos & Interviews, Services, Portfolio Projects, Industry Data, FAQs, Team, Page SEO, Redirects, Site Settings).
3. **Seed the existing content** (imports the 21 blogs + services, portfolio, FAQs, team, stats, navigation, footer, robots.txt defaults):
   - Create an API token at sanity.io/manage → API → Tokens (Editor rights)
   - `cp .env.example .env` and fill `VITE_SANITY_PROJECT_ID` + `SANITY_API_TOKEN`
   - `npm run cms:import`
4. **Configure the site**: add `VITE_SANITY_PROJECT_ID` + `VITE_SANITY_DATASET=production` to Vercel env vars, then redeploy.
5. **Publish webhook** (optional but recommended): sanity.io/manage → API → Webhooks → POST to your Vercel deploy hook URL, trigger on create/update/delete. Content then goes live automatically ~1–3 min after publishing.
6. **Host the Studio online** (optional): `cd studio && npm run deploy` — serves at `landmarkcapital.sanity.studio`.

## What editors can edit

| Edit screen | Content |
|---|---|
| Site Settings | Header nav (with mega-menu cards + active paths), footer columns, stats (all sections), address, phones, emails, socials, robots.txt |
| Blog Posts | Everything per post + full SEO & Meta fields; permalink `/blog/{slug}` |
| Reports | Description, PDF upload, SEO fields; permalink `/report/{slug}` |
| Services | Tagline, intro, approach steps, offerings, situations, audience, SEO; permalink `/service/{slug}` |
| Portfolio Projects | All project fields, highlights, metrics, image + gallery, SEO |
| Videos & Interviews | Thumbnail, duration, speaker, video URL/file, SEO |
| Industry Data | Figure, label, source article, category |
| FAQs | Question/answer pairs (feeds the FAQPage schema) |
| Team | Name, role, section, photo, bio, credentials, LinkedIn |
| Page SEO | One entry per static page (path, title, description, OG image, canonical override, noindex) |
| Redirects | From path → to path/URL, permanent flag (applied client-side) |

## SEO behaviour

- **Auto canonicalization** — every page canonicalizes to `domain + path` unless a Page SEO entry sets a canonical override.
- **Precedence** — a document's own SEO fields (e.g. a blog's Meta title) win over Page SEO entries; Page SEO entries win over the built-in defaults. Static pages (Home, About, …) are governed by Page SEO entries.
- **Sitemap & robots.txt** — served dynamically from `/api/sitemap` and `/api/robots` (rewritten in `vercel.json`), generated from CMS content with a static fallback.
- **Redirects** — CMS redirects resolve in the app before the 404 page shows. For hard 301s on legacy paths, keep the existing rules in `vercel.json`.
