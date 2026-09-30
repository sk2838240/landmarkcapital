export type Stat = {
  label: string;
  value: string;
  suffix?: string;
  decimals?: number;
  numericTarget: number;
  description: string;
};

export type GlanceStat = {
  label: string;
  numericTarget: number;
  prefix?: string;
  suffix?: string;
  description?: string;
};

export const portfolioStats: Stat[] = [
  {
    label: "Warehousing",
    value: "3.5",
    suffix: "M+",
    decimals: 1,
    numericTarget: 3.5,
    description: "Square feet across strategic industrial corridors",
  },
  {
    label: "Residential",
    value: "3.8",
    suffix: "M+",
    decimals: 1,
    numericTarget: 3.8,
    description: "Square feet in residential projects targeting emerging urban markets",
  },
  {
    label: "Plotting",
    value: "3.5",
    suffix: "M+",
    decimals: 1,
    numericTarget: 3.5,
    description: "Square feet in land development with exceptional growth potential",
  },
];

export const trackRecord: Stat[] = [
  {
    label: "Transactions",
    value: "45",
    suffix: "+",
    decimals: 0,
    numericTarget: 45,
    description: "Executed across India",
  },
  {
    label: "Investments",
    value: "₹4,000",
    suffix: "Cr",
    decimals: 0,
    numericTarget: 4000,
    description: "Cumulative managed",
  },
  {
    label: "Major Cities",
    value: "12",
    suffix: "",
    decimals: 0,
    numericTarget: 12,
    description: "Pan-India presence",
  },
];

export const principles = [
  "Operational Investor",
  "Underpenetrated Markets",
  "Digitalization",
  "Consumption Pattern",
  "Patient Capital",
  "Selected Deals",
];

/** About page, firm at a glance */
export const aboutGlance: GlanceStat[] = [
  { label: "Years of discipline", numericTarget: 30, suffix: "+" },
  { label: "Transactions executed", numericTarget: 45, suffix: "+" },
  { label: "Cumulative managed", numericTarget: 4000, prefix: "₹", suffix: " Cr" },
  { label: "Major Indian cities", numericTarget: 12 },
];
