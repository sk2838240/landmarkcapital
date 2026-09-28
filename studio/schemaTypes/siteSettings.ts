import { defineType, defineField } from "sanity";
import { navItem, footerColumn, socialLink, statItem } from "./objects";

/** Singleton document — header, footer, stats, contact and file settings. */
export const siteSettings = defineType({
  name: "siteSettings",
  title: "Site Settings",
  type: "document",
  groups: [
    { name: "header", title: "Header", default: true },
    { name: "footer", title: "Footer" },
    { name: "stats", title: "Stats" },
    { name: "files", title: "Files & SEO" },
  ],
  fields: [
    defineField({ name: "brandDescription", title: "Footer brand description", type: "text", rows: 3, group: "footer" }),
    defineField({ name: "nav", title: "Header navigation", type: "array", of: [{ type: "navItem" }], group: "header" }),
    defineField({
      name: "footerNav",
      title: "Footer navigation columns",
      type: "array",
      of: [{ type: "footerColumn" }],
      group: "footer",
    }),
    defineField({ name: "stats", title: "Stats (all sections)", type: "array", of: [{ type: "statItem" }], group: "stats" }),
    defineField({
      name: "address",
      title: "Registered office address lines",
      type: "array",
      of: [{ type: "string" }],
      group: "footer",
    }),
    defineField({ name: "phones", title: "Phone numbers", type: "array", of: [{ type: "string" }], group: "footer" }),
    defineField({ name: "emails", title: "Email addresses", type: "array", of: [{ type: "string" }], group: "footer" }),
    defineField({ name: "socials", title: "Social links", type: "array", of: [{ type: "socialLink" }], group: "footer" }),
    defineField({
      name: "robotsTxt",
      title: "robots.txt content",
      type: "text",
      rows: 8,
      group: "files",
      description:
        "Served verbatim at /robots.txt (the Sitemap line is appended automatically). Leave empty to use the built-in default.",
    }),
  ],
});
