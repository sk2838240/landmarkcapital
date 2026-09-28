import { defineConfig } from "sanity";
import { structureTool, type StructureResolver } from "sanity/structure";
import { visionTool } from "@sanity/vision";
import { schemaTypes } from "./schemaTypes";

const projectId = import.meta.env.SANITY_STUDIO_PROJECT_ID ?? "your-project-id";
const dataset = import.meta.env.SANITY_STUDIO_DATASET ?? "production";

const structure: StructureResolver = (S) =>
  S.list()
    .title("Landmark Capital")
    .items([
      S.listItem()
        .title("Site Settings")
        .id("siteSettings")
        .child(
          S.document().schemaType("siteSettings").documentId("siteSettings")
        ),
      S.divider(),
      S.documentTypeListItem("blogPost").title("Blog Posts"),
      S.documentTypeListItem("report").title("Reports"),
      S.documentTypeListItem("interview").title("Videos & Interviews"),
      S.documentTypeListItem("service").title("Services"),
      S.documentTypeListItem("portfolioProject").title("Portfolio Projects"),
      S.documentTypeListItem("industryDataPoint").title("Industry Data"),
      S.divider(),
      S.documentTypeListItem("faq").title("FAQs"),
      S.documentTypeListItem("teamMember").title("Team"),
      S.divider(),
      S.documentTypeListItem("pageSeo").title("Page SEO"),
      S.documentTypeListItem("redirect").title("Redirects"),
    ]);

export default defineConfig({
  name: "landmark-capital",
  title: "Landmark Capital",
  projectId,
  dataset,
  plugins: [structureTool({ structure }), visionTool()],
  schema: { types: schemaTypes },
});
