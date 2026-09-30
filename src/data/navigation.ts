export type NavItem = {
  label: string;
  to: string;
  children?: NavItem[];
  /** Exact paths that mark this item active in the navbar; overrides the `to` prefix check */
  activePaths?: string[];
  /** Mega-menu cards (from the CMS Site Settings); falls back to the built-in card sets */
  cards?: { label: string; to: string; image: string; alt?: string }[];
};

export const nav: NavItem[] = [
  {
    label: "About",
    to: "/about",
    children: [
      { label: "Overview", to: "/about" },
      { label: "Team", to: "/leadership" },
      { label: "News Room", to: "/newsroom" },
    ],
  },
  {
    label: "Available Structures",
    to: "/structures/aif",
    activePaths: ["/structures", "/structures/aif", "/structures/lvf", "/structures/managed-accounts"],
    children: [
      { label: "AIF", to: "/structures/aif" },
      { label: "LVF", to: "/structures/lvf" },
      { label: "Managed Accounts", to: "/structures/managed-accounts" },
    ],
  },
  {
    label: "Our Funds",
    to: "/funds/multiplier",
    activePaths: ["/funds/multiplier", "/funds/opportunity"],
    children: [
      { label: "Multiplier Fund", to: "/funds/multiplier" },
      { label: "Opportunity Fund", to: "/funds/opportunity" },
    ],
  },
  {
    label: "Current Portfolio",
    to: "/portfolio",
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
