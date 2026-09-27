export type Report = {
  slug: string;
  title: string;
  description: string;
  href: string;
};

export const reports: Report[] = [
  {
    slug: "tax-reckoner",
    title: "Tax Reckoner",
    description:
      "A practical reference on the tax treatment of real estate investment structures in India — rates, deductions and structuring implications at a glance.",
    href: "/Tax%20Reckoner.pdf",
  },
];

export function getReport(slug: string) {
  return reports.find((r) => r.slug === slug);
}
