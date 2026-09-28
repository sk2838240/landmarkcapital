import generated from "@/generated/cms.json";
import { blogs as staticBlogs, type Blog } from "@/data/blogs";
import { reports as staticReports, type Report } from "@/data/reports";
import { interviews as staticInterviews, type Interview } from "@/data/interviews";
import { services as staticServices, type Service } from "@/data/services";
import { portfolioProjects as staticPortfolio, type PortfolioProject } from "@/data/portfolio";
import { faqs as staticFaqs } from "@/data/faq";
import {
  leadership as staticLeadership,
  teamMembers as staticTeamMembers,
  type TeamMember,
} from "@/data/team";
import { industryData as staticIndustry } from "@/data/industry";
import {
  aboutGlance as staticGlance,
  portfolioStats as staticPortfolioStats,
  trackRecord as staticTrackRecord,
  type Stat,
  type GlanceStat,
} from "@/data/stats";

export type { Stat, GlanceStat } from "@/data/stats";

/**
 * CMS access layer — merges Sanity content (generated at build time into
 * src/generated/cms.json) over the bundled static data. Any collection that
 * is empty in the CMS falls back to its static counterpart, so the site
 * works identically with or without Sanity configured.
 */

type CmsSeo = {
  metaTitle?: string | null;
  metaDescription?: string | null;
  ogImage?: string | null;
  noindex?: boolean;
};

type CmsStat = {
  group?: string;
  label: string;
  numericTarget?: number;
  decimals?: number;
  prefix?: string | null;
  suffix?: string | null;
  description?: string | null;
};

type CmsTeamMember = {
  name: string;
  role?: string;
  photo?: string | null;
  photoAlt?: string | null;
  bio?: string[];
  credentials?: string | null;
  linkedin?: string | null;
};

type CmsNav = {
  label: string;
  to: string;
  activePaths?: string[] | null;
  cards?:
    | {
        label: string;
        cta?: string | null;
        to: string;
        image: string;
        alt?: string | null;
      }[]
    | null;
};

type CmsSettings = {
  brandDescription?: string | null;
  nav?: CmsNav[] | null;
  footerNav?:
    | { title: string; links: { label: string; to: string }[] }[]
    | null;
  stats?: CmsStat[] | null;
  address?: string[] | null;
  phones?: string[] | null;
  emails?: string[] | null;
  socials?: { label: string; url: string }[] | null;
  robotsTxt?: string | null;
};

export type PageSeoEntry = {
  path: string;
  title?: string | null;
  description?: string | null;
  ogImage?: string | null;
  canonical?: string | null;
  noindex?: boolean;
};

export type RedirectEntry = {
  source: string;
  destination: string;
  permanent?: boolean;
};

const data = generated as {
  settings: CmsSettings | null;
  pageSeo: PageSeoEntry[];
  redirects: RedirectEntry[];
  blogs: (Blog & { seo?: CmsSeo | null })[];
  reports: (Report & { seo?: CmsSeo | null })[];
  interviews: Interview[];
  services: Service[];
  portfolio: PortfolioProject[];
  faqs: { question: string; answer: string }[];
  team: { leadership: CmsTeamMember[]; teamMembers: CmsTeamMember[] };
  industryData: { value: string; label: string; source?: string | null; category?: string | null }[];
};

const list = <T,>(v: T[] | null | undefined): T[] | null =>
  v && v.length > 0 ? v : null;

export function getBlogs(): (Blog & { seo?: CmsSeo | null })[] {
  return list(data.blogs) ?? staticBlogs;
}

export function getBlog(slug: string) {
  return getBlogs().find((b) => b.slug === slug);
}

export function getInterviews(): Interview[] {
  return list(data.interviews) ?? staticInterviews;
}

export function getReports(): (Report & { seo?: CmsSeo | null })[] {
  return list(data.reports) ?? staticReports;
}

export function getReport(slug: string) {
  return getReports().find((r) => r.slug === slug);
}

export function getServices(): Service[] {
  return list(data.services) ?? staticServices;
}

export function getService(slug: string) {
  return getServices().find((s) => s.slug === slug);
}

export function getPortfolioProjects(): PortfolioProject[] {
  return list(data.portfolio) ?? staticPortfolio;
}

export function getFaqs() {
  return list(data.faqs) ?? staticFaqs;
}

export function getIndustryData() {
  return list(data.industryData) ?? staticIndustry;
}

function formatStat(stat: CmsStat): Stat {
  const decimals = stat.decimals ?? 0;
  const value =
    (stat.prefix ?? "") +
    (stat.numericTarget ?? 0).toLocaleString("en-IN", {
      minimumFractionDigits: decimals,
      maximumFractionDigits: decimals,
    }) +
    (stat.suffix ?? "");
  return {
    label: stat.label,
    value,
    suffix: undefined,
    decimals,
    numericTarget: stat.numericTarget ?? 0,
    description: stat.description ?? "",
  };
}

export function getTrackRecord(): Stat[] {
  const cms = list((data.settings?.stats ?? []).filter((s) => s.group === "track"));
  return cms ? cms.map(formatStat) : staticTrackRecord;
}

export function getPortfolioStats(): Stat[] {
  const cms = list((data.settings?.stats ?? []).filter((s) => s.group === "portfolio"));
  return cms ? cms.map(formatStat) : staticPortfolioStats;
}

export function getAboutGlance(): GlanceStat[] {
  const cms = list((data.settings?.stats ?? []).filter((s) => s.group === "about"));
  return cms
    ? cms.map((s) => ({
        label: s.label,
        numericTarget: s.numericTarget ?? 0,
        prefix: s.prefix ?? undefined,
        suffix: s.suffix ?? undefined,
        description: s.description ?? undefined,
      }))
    : staticGlance;
}

export function getTeam(): { leadership: TeamMember[]; teamMembers: TeamMember[] } {
  const cms = list(data.team.leadership) ?? list(data.team.teamMembers);
  if (!cms) return { leadership: staticLeadership, teamMembers: staticTeamMembers };
  const mapMember = (m: CmsTeamMember): TeamMember => ({
    id: m.name.toLowerCase().replace(/\s+/g, "-"),
    name: m.name,
    role: m.role ?? "",
    category: "team",
    bio: m.bio ?? [],
    credentials: m.credentials ?? undefined,
    linkedin: m.linkedin ?? undefined,
    photo: m.photo ?? undefined,
  });
  return {
    leadership: (list(data.team.leadership) ?? []).map((m) => ({
      ...mapMember(m),
      category: "leadership" as const,
    })),
    teamMembers: (list(data.team.teamMembers) ?? []).map(mapMember),
  };
}

export function getNavigation(): CmsNav[] | null {
  return list(data.settings?.nav ?? null);
}

export function getFooterNav() {
  return list(data.settings?.footerNav ?? null);
}

export function getPageSeoMap(): Record<string, PageSeoEntry> {
  return Object.fromEntries((data.pageSeo ?? []).map((p) => [p.path, p]));
}

export function getRedirects(): RedirectEntry[] {
  return data.redirects ?? [];
}

export function getSiteSettings(): CmsSettings | null {
  return data.settings;
}
