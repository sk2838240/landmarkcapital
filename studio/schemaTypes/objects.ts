import { defineType, defineField } from "sanity";

/** Shared SEO & meta fields — included on every content edit screen. */
export const seoFields = defineType({
  name: "seo",
  title: "SEO & Meta",
  type: "object",
  options: { collapsible: true, collapsed: false },
  fields: [
    defineField({
      name: "metaTitle",
      title: "Meta title",
      type: "string",
      description:
        "Full tab/search title. Overrides the document title when filled. Leave empty to use the document title + site name.",
    }),
    defineField({
      name: "metaDescription",
      title: "Meta description",
      type: "text",
      rows: 3,
      description: "Shown in search results and social previews.",
    }),
    defineField({
      name: "ogImage",
      title: "Social share image (OG)",
      type: "image",
      description: "1200×630 recommended. Falls back to the site's default OG image.",
    }),
    defineField({
      name: "noindex",
      title: "Hide from search engines",
      type: "boolean",
      initialValue: false,
      description: "Adds noindex,nofollow to the page.",
    }),
  ],
});

export const serviceStep = defineType({
  name: "serviceStep",
  title: "Step / item",
  type: "object",
  fields: [
    defineField({ name: "title", title: "Title", type: "string", validation: (r) => r.required() }),
    defineField({ name: "body", title: "Body", type: "text", rows: 3 }),
  ],
});

export const metricItem = defineType({
  name: "metricItem",
  title: "Metric",
  type: "object",
  fields: [
    defineField({ name: "label", title: "Label", type: "string", validation: (r) => r.required() }),
    defineField({ name: "value", title: "Value", type: "string", validation: (r) => r.required() }),
  ],
});

export const navItem = defineType({
  name: "navItem",
  title: "Header nav item",
  type: "object",
  fields: [
    defineField({ name: "label", title: "Label", type: "string", validation: (r) => r.required() }),
    defineField({
      name: "to",
      title: "Link",
      type: "string",
      description: 'e.g. "/about". A representative landing page for dropdown items.',
      validation: (r) => r.required(),
    }),
    defineField({
      name: "activePaths",
      title: "Active paths",
      type: "array",
      of: [{ type: "string" }],
      description:
        "Exact paths that mark this item active in the header. Overrides link-prefix matching.",
    }),
    defineField({
      name: "cards",
      title: "Mega menu cards",
      type: "array",
      of: [
        {
          type: "object",
          fields: [
            defineField({ name: "label", title: "Label", type: "string", validation: (r) => r.required() }),
            defineField({ name: "cta", title: "CTA text", type: "string", description: 'e.g. "Explore →"' }),
            defineField({ name: "to", title: "Link", type: "string", validation: (r) => r.required() }),
            defineField({
              name: "image",
              title: "Card image",
              type: "image",
              options: { hotspot: true },
              fields: [defineField({ name: "alt", title: "Alt text", type: "string" })],
            }),
          ],
        },
      ],
      description: "Turns this nav item into a card-style mega menu on hover.",
    }),
  ],
});

export const footerColumn = defineType({
  name: "footerColumn",
  title: "Footer column",
  type: "object",
  fields: [
    defineField({ name: "title", title: "Column title", type: "string", validation: (r) => r.required() }),
    defineField({
      name: "links",
      title: "Links",
      type: "array",
      of: [
        {
          type: "object",
          fields: [
            defineField({ name: "label", title: "Label", type: "string", validation: (r) => r.required() }),
            defineField({ name: "to", title: "Link", type: "string", validation: (r) => r.required() }),
          ],
        },
      ],
    }),
  ],
});

export const socialLink = defineType({
  name: "socialLink",
  title: "Social link",
  type: "object",
  fields: [
    defineField({ name: "label", title: "Label", type: "string", validation: (r) => r.required() }),
    defineField({ name: "url", title: "URL", type: "url", validation: (r) => r.required() }),
  ],
});

export const statItem = defineType({
  name: "statItem",
  title: "Stat",
  type: "object",
  fields: [
    defineField({
      name: "group",
      title: "Section",
      type: "string",
      options: {
        list: [
          { title: "Homepage — track record", value: "track" },
          { title: "Homepage — portfolio", value: "portfolio" },
          { title: "About — at a glance", value: "about" },
        ],
      },
    }),
    defineField({ name: "label", title: "Label", type: "string", validation: (r) => r.required() }),
    defineField({
      name: "numericTarget",
      title: "Number",
      type: "number",
      description: "The figure to display — formatted automatically (e.g. 4000 → ₹4,000 Cr).",
    }),
    defineField({ name: "decimals", title: "Decimal places", type: "number", initialValue: 0 }),
    defineField({ name: "prefix", title: "Prefix", type: "string", description: "e.g. ₹" }),
    defineField({ name: "suffix", title: "Suffix", type: "string", description: "e.g. Cr, M+, +" }),
    defineField({ name: "description", title: "Description", type: "string" }),
  ],
});
