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
      { label: "Transactions", to: "/transactions" },
      { label: "Team", to: "/leadership" },
    ],
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
    label: "Strategies",
    to: "/strategies",
    activePaths: ["/strategies", "/strategies/lvf", "/strategies/deal-by-deal"],
    children: [
      { label: "Overview", to: "/strategies" },
      { label: "LVF", to: "/strategies/lvf" },
      { label: "Managed Accounts", to: "/strategies/deal-by-deal" },
    ],
  },
  { label: "Opportunities", to: "/opportunities" },
  {
    label: "Insights",
    to: "/insights",
    children: [
      { label: "Research & Insights", to: "/insights" },
      { label: "FAQ", to: "/insights/faq" },
    ],
  },
];
