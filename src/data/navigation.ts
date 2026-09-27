export type NavItem = {
  label: string;
  to: string;
  children?: NavItem[];
  /** Exact paths that mark this item active in the navbar; overrides the `to` prefix check */
  activePaths?: string[];
};

export const nav: NavItem[] = [
  {
    label: "About",
    to: "/about",
    children: [
      { label: "Overview", to: "/about" },
      { label: "News Room", to: "/newsroom" },
      { label: "Team", to: "/leadership" },
    ],
  },
  {
    label: "Available Structures",
    to: "/strategies/aif",
    activePaths: ["/strategies", "/strategies/aif", "/strategies/lvf", "/strategies/deal-by-deal"],
    children: [
      { label: "AIF", to: "/strategies/aif" },
      { label: "LVF", to: "/strategies/lvf" },
      { label: "Managed Accounts", to: "/strategies/deal-by-deal" },
    ],
  },
  {
    label: "Current Portfolio",
    to: "/portfolio",
  },
  {
    label: "Our Funds",
    to: "/strategies/multiplier",
    activePaths: ["/strategies/multiplier", "/strategies/opportunity"],
    children: [
      { label: "Multiplier Fund", to: "/strategies/multiplier" },
      { label: "Opportunity Fund", to: "/strategies/opportunity" },
    ],
  },
  {
    label: "Insights",
    to: "/insights",
    children: [
      { label: "Research & Insights", to: "/insights" },
      { label: "FAQ", to: "/insights/faq" },
    ],
  },
];
