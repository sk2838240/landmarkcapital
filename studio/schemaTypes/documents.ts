import { defineType, defineField } from "sanity";
import { seoFields, serviceStep, metricItem } from "./objects";

export const blogPost = defineType({
  name: "blogPost",
  title: "Blog Post",
  type: "document",
  groups: [
    { name: "content", title: "Content", default: true },
    { name: "seo", title: "SEO" },
  ],
  fields: [
    defineField({ name: "title", title: "Title", type: "string", group: "content", validation: (r) => r.required() }),
    defineField({
      name: "slug",
      title: "Slug",
      type: "slug",
      group: "content",
      options: { source: "title", maxLength: 96 },
      description: "Permalink: /blog/{slug}",
      validation: (r) => r.required(),
    }),
    defineField({
      name: "excerpt",
      title: "Excerpt",
      type: "text",
      rows: 4,
      group: "content",
      description: "Short summary — also the meta description fallback.",
    }),
    defineField({ name: "author", title: "Author", type: "string", group: "content" }),
    defineField({ name: "date", title: "Published date", type: "datetime", group: "content" }),
    defineField({
      name: "category",
      title: "Category",
      type: "string",
      group: "content",
      options: {
        list: [
          "Market",
          "Regulation",
          "E-commerce",
          "Warehousing",
          "Logistics",
          "ESG",
          "Industry",
          "Investment",
          "Global",
          "Policy",
          "Economy",
        ],
      },
    }),
    defineField({
      name: "image",
      title: "Cover image",
      type: "image",
      group: "content",
      options: { hotspot: true },
      fields: [defineField({ name: "alt", title: "Alt text", type: "string" })],
    }),
    defineField({
      name: "body",
      title: "Article body",
      type: "array",
      of: [{ type: "block" }],
      group: "content",
      description: "Full article content (rich text).",
    }),
    defineField({ name: "seo", title: "SEO & Meta", type: "seo", group: "seo" }),
  ],
});

export const report = defineType({
  name: "report",
  title: "Report",
  type: "document",
  groups: [
    { name: "content", title: "Content", default: true },
    { name: "seo", title: "SEO" },
  ],
  fields: [
    defineField({ name: "title", title: "Title", type: "string", group: "content", validation: (r) => r.required() }),
    defineField({
      name: "slug",
      title: "Slug",
      type: "slug",
      group: "content",
      options: { source: "title", maxLength: 96 },
      description: "Permalink: /report/{slug}",
      validation: (r) => r.required(),
    }),
    defineField({
      name: "description",
      title: "Description",
      type: "text",
      rows: 4,
      group: "content",
      description: "Also the meta description fallback.",
    }),
    defineField({
      name: "file",
      title: "Report file (PDF)",
      type: "file",
      group: "content",
      description: "Downloadable report document.",
    }),
    defineField({ name: "date", title: "Published date", type: "datetime", group: "content" }),
    defineField({ name: "seo", title: "SEO & Meta", type: "seo", group: "seo" }),
  ],
});

export const interview = defineType({
  name: "interview",
  title: "Video / Interview",
  type: "document",
  groups: [
    { name: "content", title: "Content", default: true },
    { name: "seo", title: "SEO" },
  ],
  fields: [
    defineField({ name: "title", title: "Title", type: "string", group: "content", validation: (r) => r.required() }),
    defineField({
      name: "eyebrow",
      title: "Eyebrow",
      type: "string",
      group: "content",
      description: 'e.g. "In conversation", "Investor letter"',
    }),
    defineField({ name: "description", title: "Description", type: "text", rows: 3, group: "content" }),
    defineField({ name: "speakerName", title: "Speaker name", type: "string", group: "content" }),
    defineField({ name: "speakerRole", title: "Speaker role", type: "string", group: "content" }),
    defineField({
      name: "duration",
      title: "Duration",
      type: "string",
      group: "content",
      description: 'e.g. "12:34"',
    }),
    defineField({
      name: "thumbnail",
      title: "Thumbnail",
      type: "image",
      group: "content",
      options: { hotspot: true },
      fields: [defineField({ name: "alt", title: "Alt text", type: "string" })],
    }),
    defineField({
      name: "videoUrl",
      title: "Video URL",
      type: "url",
      group: "content",
      description: "YouTube/Vimeo embed URL or self-hosted MP4 link.",
    }),
    defineField({ name: "videoFile", title: "Video file (upload)", type: "file", group: "content" }),
    defineField({ name: "seo", title: "SEO & Meta", type: "seo", group: "seo" }),
  ],
});

export const service = defineType({
  name: "service",
  title: "Service",
  type: "document",
  groups: [
    { name: "content", title: "Content", default: true },
    { name: "seo", title: "SEO" },
  ],
  fields: [
    defineField({ name: "name", title: "Service name", type: "string", group: "content", validation: (r) => r.required() }),
    defineField({
      name: "slug",
      title: "Slug",
      type: "slug",
      group: "content",
      options: { source: "name", maxLength: 96 },
      description: "Permalink: /service/{slug}",
      validation: (r) => r.required(),
    }),
    defineField({ name: "tagline", title: "Tagline (hero title)", type: "string", group: "content" }),
    defineField({ name: "intro", title: "Intro (hero subtitle)", type: "text", rows: 4, group: "content" }),
    defineField({ name: "positioning", title: "Positioning paragraph", type: "text", rows: 4, group: "content" }),
    defineField({
      name: "approach",
      title: "Our approach — steps",
      type: "array",
      of: [{ type: "serviceStep" }],
      group: "content",
    }),
    defineField({
      name: "offerings",
      title: "What we do — items",
      type: "array",
      of: [{ type: "serviceStep" }],
      group: "content",
    }),
    defineField({
      name: "situations",
      title: "Typical situations we see",
      type: "array",
      of: [{ type: "string" }],
      group: "content",
    }),
    defineField({
      name: "offeringsNote",
      title: "Note after offerings",
      type: "text",
      rows: 2,
      group: "content",
    }),
    defineField({ name: "audience", title: "Who it's for", type: "text", rows: 3, group: "content" }),
    defineField({ name: "seo", title: "SEO & Meta", type: "seo", group: "seo" }),
  ],
});

export const portfolioProject = defineType({
  name: "portfolioProject",
  title: "Portfolio Project",
  type: "document",
  groups: [
    { name: "content", title: "Content", default: true },
    { name: "detail", title: "Detail Page" },
    { name: "seo", title: "SEO" },
  ],
  fields: [
    defineField({ name: "name", title: "Project name", type: "string", group: "content", validation: (r) => r.required() }),
    defineField({
      name: "slug",
      title: "Slug",
      type: "slug",
      group: "content",
      options: { source: "name", maxLength: 96 },
      description: "Permalink: /portfolio/{slug}",
      validation: (r) => r.required(),
    }),
    defineField({ name: "company", title: "Project SPV / company", type: "string", group: "content" }),
    defineField({ name: "type", title: "Project type", type: "string", group: "content" }),
    defineField({ name: "location", title: "Location", type: "string", group: "content" }),
    defineField({ name: "developerGroup", title: "Developer group", type: "string", group: "content" }),
    defineField({ name: "landArea", title: "Land area", type: "string", group: "content" }),
    defineField({ name: "saleableArea", title: "Saleable area", type: "string", group: "content" }),
    defineField({ name: "invested", title: "Invested amount", type: "string", group: "content" }),
    defineField({
      name: "status",
      title: "Status",
      type: "string",
      group: "content",
      options: {
        list: [
          "Under construction",
          "Completed",
          "Under development",
          "Planning stage",
          "Leased and operating",
        ],
      },
    }),
    defineField({
      name: "locationTagline",
      title: "Hero sub-line (detail page)",
      type: "string",
      group: "content",
      description: 'e.g. "Gachibowli, Hyderabad | Mixed Use Development"',
    }),
    defineField({
      name: "intro",
      title: "Hero introduction (detail page)",
      type: "text",
      rows: 3,
      group: "content",
      description: "Opening paragraph shown in the project page hero, justified.",
    }),
    defineField({
      name: "highlights",
      title: "Highlights",
      type: "array",
      of: [{ type: "string" }],
      group: "content",
    }),
    defineField({
      name: "metrics",
      title: "Financial metrics",
      type: "array",
      of: [{ type: "metricItem" }],
      group: "content",
    }),
    defineField({
      name: "image",
      title: "Main image",
      type: "image",
      group: "content",
      options: { hotspot: true },
      fields: [defineField({ name: "alt", title: "Alt text", type: "string" })],
    }),
    defineField({
      name: "gallery",
      title: "Image gallery",
      type: "array",
      of: [
        {
          type: "image",
          options: { hotspot: true },
          fields: [defineField({ name: "alt", title: "Alt text", type: "string" })],
        },
      ],
      group: "content",
    }),
    defineField({
      name: "sections",
      title: "Detail page sections",
      type: "array",
      group: "detail",
      of: [
        {
          type: "object",
          name: "bulletsSection",
          title: "Titled bullets",
          fields: [
            defineField({ name: "title", title: "Section title", type: "string", validation: (r) => r.required() }),
            defineField({
              name: "items",
              title: "Items",
              type: "array",
              of: [
                {
                  type: "object",
                  fields: [
                    defineField({ name: "title", title: "Item title", type: "string" }),
                    defineField({ name: "body", title: "Item body", type: "text", rows: 3 }),
                  ],
                },
              ],
            }),
          ],
        },
        {
          type: "object",
          name: "tableSection",
          title: "Table",
          fields: [
            defineField({ name: "title", title: "Section title", type: "string", validation: (r) => r.required() }),
            defineField({ name: "columns", title: "Column headers", type: "array", of: [{ type: "string" }] }),
            defineField({
              name: "rows",
              title: "Rows",
              type: "array",
              of: [
                {
                  type: "object",
                  fields: [
                    defineField({ name: "cells", title: "Cells", type: "array", of: [{ type: "string" }] }),
                  ],
                },
              ],
            }),
          ],
        },
        {
          type: "object",
          name: "columnsSection",
          title: "List columns",
          fields: [
            defineField({ name: "title", title: "Section title", type: "string", validation: (r) => r.required() }),
            defineField({
              name: "columns",
              title: "Columns",
              type: "array",
              of: [
                {
                  type: "object",
                  fields: [
                    defineField({ name: "title", title: "Column title", type: "string", validation: (r) => r.required() }),
                    defineField({ name: "items", title: "Items", type: "array", of: [{ type: "string" }] }),
                  ],
                },
              ],
            }),
          ],
        },
        {
          type: "object",
          name: "proseSection",
          title: "Text section",
          fields: [
            defineField({ name: "title", title: "Section title", type: "string", validation: (r) => r.required() }),
            defineField({ name: "body", title: "Body", type: "text", rows: 4 }),
          ],
        },
      ],
      description: "Sections rendered on the project's own page, in order.",
    }),
    defineField({ name: "seo", title: "SEO & Meta", type: "seo", group: "seo" }),
  ],
});

export const industryDataPoint = defineType({
  name: "industryDataPoint",
  title: "Industry Data Point",
  type: "document",
  groups: [
    { name: "content", title: "Content", default: true },
    { name: "seo", title: "SEO" },
  ],
  fields: [
    defineField({
      name: "value",
      title: "Value (figure)",
      type: "string",
      group: "content",
      description: 'e.g. "$350B", "110M+"',
      validation: (r) => r.required(),
    }),
    defineField({ name: "label", title: "Label", type: "text", rows: 2, group: "content", validation: (r) => r.required() }),
    defineField({
      name: "source",
      title: "Source article slug",
      type: "string",
      group: "content",
      description: "Blog slug under /blog/… that this data point comes from.",
    }),
    defineField({ name: "category", title: "Category", type: "string", group: "content" }),
    defineField({ name: "order", title: "Sort order", type: "number", group: "content" }),
    defineField({ name: "seo", title: "SEO & Meta", type: "seo", group: "seo" }),
  ],
});

export const faq = defineType({
  name: "faq",
  title: "FAQ",
  type: "document",
  fields: [
    defineField({ name: "question", title: "Question", type: "string", validation: (r) => r.required() }),
    defineField({ name: "answer", title: "Answer", type: "text", rows: 4, validation: (r) => r.required() }),
    defineField({ name: "order", title: "Sort order", type: "number" }),
  ],
});

export const teamMember = defineType({
  name: "teamMember",
  title: "Team Member",
  type: "document",
  fields: [
    defineField({ name: "name", title: "Name", type: "string", validation: (r) => r.required() }),
    defineField({ name: "role", title: "Role", type: "string", validation: (r) => r.required() }),
    defineField({
      name: "group",
      title: "Section",
      type: "string",
      options: {
        list: [
          { title: "Leadership", value: "leadership" },
          { title: "Team", value: "team" },
        ],
      },
      initialValue: "team",
    }),
    defineField({
      name: "photo",
      title: "Photo",
      type: "image",
      options: { hotspot: true },
      fields: [defineField({ name: "alt", title: "Alt text", type: "string" })],
    }),
    defineField({ name: "bio", title: "Bio (one point per line)", type: "array", of: [{ type: "string" }] }),
    defineField({ name: "credentials", title: "Credentials", type: "string" }),
    defineField({ name: "linkedin", title: "LinkedIn URL", type: "url" }),
    defineField({ name: "order", title: "Sort order", type: "number" }),
  ],
});

export const pageSeo = defineType({
  name: "pageSeo",
  title: "Page SEO",
  type: "document",
  fields: [
    defineField({
      name: "path",
      title: "Page path",
      type: "string",
      description: 'e.g. "/" for the homepage, "/about", "/insights/faq". One entry per page.',
      validation: (r) => r.required().custom((value: unknown) =>
        typeof value === "string" && value.startsWith("/")
          ? true
          : "Path must start with /"
      ),
    }),
    defineField({
      name: "title",
      title: "Page title",
      type: "string",
      description: "Full tab/search title — overrides the page's built-in title.",
    }),
    defineField({ name: "description", title: "Meta description", type: "text", rows: 3 }),
    defineField({ name: "ogImage", title: "Social share image (OG)", type: "image" }),
    defineField({
      name: "canonical",
      title: "Canonical URL override",
      type: "url",
      description: "Absolute URL. Leave empty for auto canonicalization (domain + path).",
    }),
    defineField({
      name: "noindex",
      title: "Hide from search engines",
      type: "boolean",
      initialValue: false,
    }),
  ],
});

export const redirect = defineType({
  name: "redirect",
  title: "Redirect",
  type: "document",
  fields: [
    defineField({
      name: "source",
      title: "From path",
      type: "string",
      description: 'Old path, e.g. "/old-page"',
      validation: (r) => r.required().custom((value: unknown) =>
        typeof value === "string" && value.startsWith("/")
          ? true
          : "Path must start with /"
      ),
    }),
    defineField({
      name: "destination",
      title: "To path or URL",
      type: "string",
      description: 'Internal path ("/new-page") or absolute URL (https://…).',
      validation: (r) => r.required(),
    }),
    defineField({
      name: "permanent",
      title: "Permanent",
      type: "boolean",
      initialValue: true,
      description:
        "Applied client-side on the site. For hard server-side 301s, also add the rule in vercel.json.",
    }),
  ],
});
