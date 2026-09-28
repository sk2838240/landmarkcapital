export type IndustryDataPoint = {
  value: string;
  label: string;
  /** Blog slug (under /blog/…) this data point comes from */
  source: string;
  category: string;
};

/** Key data points drawn from Landmark's published research. */
export const industryData: IndustryDataPoint[] = [
  {
    value: "110M+",
    label: "Demat accounts in India — more than doubled from 40.9 million in March 2020",
    source: "sebi-brokers-investor-money",
    category: "Regulation",
  },
  {
    value: "$350B",
    label: "India's online marketplaces could be making sales worth as much as this a year by 2027",
    source: "rise-of-indias-e-marketplaces",
    category: "E-commerce",
  },
  {
    value: "138M sq mt",
    label: "Additional warehousing required to support e-commerce growth over the next five years",
    source: "ecommerce-impact-warehousing",
    category: "Warehousing",
  },
  {
    value: "$12,000",
    label: "Ocean freight for a 40 ft container from China to Europe or North America — up from $2,000",
    source: "ocean-freight-rate-spike",
    category: "Logistics",
  },
  {
    value: "20.1%",
    label: "India's year-on-year GDP growth in Q1 FY 2021–22, broadly in line with market expectations",
    source: "gdp-growth-miracle-or-mirage",
    category: "Economy",
  },
];
