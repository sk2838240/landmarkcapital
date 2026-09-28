import { seoFields, serviceStep, metricItem, navItem, footerColumn, socialLink, statItem } from "./objects";
import {
  blogPost,
  report,
  interview,
  service,
  portfolioProject,
  industryDataPoint,
  faq,
  teamMember,
  pageSeo,
  redirect,
} from "./documents";
import { siteSettings } from "./siteSettings";

export const schemaTypes = [
  // Objects
  seoFields,
  serviceStep,
  metricItem,
  navItem,
  footerColumn,
  socialLink,
  statItem,
  // Documents
  siteSettings,
  blogPost,
  report,
  interview,
  service,
  portfolioProject,
  industryDataPoint,
  faq,
  teamMember,
  pageSeo,
  redirect,
];
