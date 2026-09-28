import { createContext, useContext } from "react";
import { Helmet } from "react-helmet-async";
import { useLocation } from "react-router-dom";
import type { PageSeoEntry } from "@/lib/cmsData";

const SITE_NAME = "Landmark Capital";
export const SITE_URL = "https://www.landmarkcapital.in";
const DEFAULT_DESCRIPTION =
  "Institutional real estate investing backed by research, governance and aligned execution. SEBI-registered Alternative Investment Fund manager operating across warehousing, residential, industrial and plotted development in India.";
const DEFAULT_OG_IMAGE = `${SITE_URL}/og-image.jpg`;

/** Page-level SEO overrides (from the Page SEO edit screens in the CMS). */
const SeoOverridesContext = createContext<Record<string, PageSeoEntry>>({});
export const SeoOverridesProvider = SeoOverridesContext.Provider;

type Props = {
  title: string;
  description?: string;
  /** Override canonical path (defaults to current location). */
  path?: string;
  image?: string | null;
  /** JSON-LD structured data. May be a single object or an array. */
  jsonLd?: object | object[];
  /** If true, "Landmark Capital" is not appended to the tab title. */
  raw?: boolean;
  noindex?: boolean;
  /** Open Graph type — use "article" for blog posts. */
  ogType?: "website" | "article";
  /** ISO publish date, rendered as article:published_time when ogType is "article". */
  publishedTime?: string;
  /**
   * True when title/description already come from a CMS document's own SEO
   * fields — page-level overrides from Page SEO docs are then skipped.
   */
  fromCms?: boolean;
};

export function Seo({
  title,
  description = DEFAULT_DESCRIPTION,
  path,
  image,
  jsonLd,
  raw = false,
  noindex = false,
  ogType = "website",
  publishedTime,
  fromCms = false,
}: Props) {
  const location = useLocation();
  const overrides = useContext(SeoOverridesContext);
  const canonicalPath = path ?? location.pathname;
  const pageSeo = fromCms ? undefined : overrides[canonicalPath];

  const canonical = pageSeo?.canonical || `${SITE_URL}${canonicalPath}`;
  const pageTitle = pageSeo?.title
    ? pageSeo.title
    : raw
      ? title
      : `${title} — ${SITE_NAME}`;
  const effectiveDescription = pageSeo?.description ?? description;
  const effectiveImage = pageSeo?.ogImage ?? image ?? DEFAULT_OG_IMAGE;
  const effectiveNoindex = noindex || Boolean(pageSeo?.noindex);
  const jsonLdArray = jsonLd
    ? Array.isArray(jsonLd)
      ? jsonLd
      : [jsonLd]
    : [];

  return (
    <Helmet>
      <title>{pageTitle}</title>
      <meta name="description" content={effectiveDescription} />
      <link rel="canonical" href={canonical} />
      {effectiveNoindex && <meta name="robots" content="noindex,nofollow" />}
      <meta property="og:type" content={ogType} />
      {ogType === "article" && publishedTime && (
        <meta property="article:published_time" content={publishedTime} />
      )}
      <meta property="og:site_name" content={SITE_NAME} />
      <meta property="og:locale" content="en_IN" />
      <meta property="og:title" content={pageTitle} />
      <meta property="og:description" content={effectiveDescription} />
      <meta property="og:url" content={canonical} />
      <meta property="og:image" content={effectiveImage} />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={pageTitle} />
      <meta name="twitter:description" content={effectiveDescription} />
      <meta name="twitter:image" content={effectiveImage} />
      {jsonLdArray.map((data, i) => (
        <script key={i} type="application/ld+json">
          {JSON.stringify(data)}
        </script>
      ))}
    </Helmet>
  );
}

export const orgJsonLd = {
  "@context": "https://schema.org",
  "@type": "FinancialService",
  name: SITE_NAME,
  legalName: "Landmark Capital Advisors Pvt Ltd",
  url: SITE_URL,
  logo: `${SITE_URL}/landmark-logo.png`,
  description: DEFAULT_DESCRIPTION,
  address: {
    "@type": "PostalAddress",
    streetAddress: "608-B Wing, Express Zone, Western Express Highway, Goregaon (E)",
    addressLocality: "Mumbai",
    postalCode: "400097",
    addressCountry: "IN",
  },
  contactPoint: [
    {
      "@type": "ContactPoint",
      telephone: "+91-22-6236-6266",
      contactType: "investor relations",
      email: "dhananjay@landmarkcapital.in",
      areaServed: "IN",
    },
    {
      "@type": "ContactPoint",
      contactType: "compliance",
      email: "compliance@landmarkcapital.in",
      areaServed: "IN",
    },
  ],
  sameAs: ["https://www.linkedin.com/company/landmark-capital-advisors"],
} as const;

export const financialProductJsonLd = (opts: {
  name: string;
  description: string;
  sebiRegistration?: string;
  category?: string;
  path: string;
}) => ({
  "@context": "https://schema.org",
  "@type": "FinancialProduct",
  name: opts.name,
  description: opts.description,
  provider: {
    "@type": "FinancialService",
    name: SITE_NAME,
  },
  url: `${SITE_URL}${opts.path}`,
  ...(opts.category && { category: opts.category }),
  ...(opts.sebiRegistration && { identifier: opts.sebiRegistration }),
});

export const serviceJsonLd = (opts: {
  name: string;
  description: string;
  path: string;
}) => ({
  "@context": "https://schema.org",
  "@type": "Service",
  name: opts.name,
  description: opts.description,
  serviceType: opts.name,
  provider: {
    "@type": "FinancialService",
    name: SITE_NAME,
    url: SITE_URL,
  },
  areaServed: "IN",
  url: `${SITE_URL}${opts.path}`,
});

export const articleJsonLd = (opts: {
  title: string;
  description: string;
  author: string;
  datePublished: string;
  path: string;
  image?: string;
}) => ({
  "@context": "https://schema.org",
  "@type": "Article",
  headline: opts.title,
  description: opts.description,
  author: { "@type": "Person", name: opts.author },
  datePublished: opts.datePublished,
  url: `${SITE_URL}${opts.path}`,
  publisher: {
    "@type": "Organization",
    name: SITE_NAME,
    logo: {
      "@type": "ImageObject",
      url: `${SITE_URL}/landmark-logo.png`,
    },
  },
  ...(opts.image && { image: opts.image }),
});
