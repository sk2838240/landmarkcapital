export type NavItem = {
  label: string;
  to: string;
  children?: NavItem[];
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
    label: "Strategies",
    to: "/strategies",
    children: [
      { label: "Overview", to: "/strategies" },
      { label: "Multiplier Fund", to: "/strategies/multiplier" },
      { label: "Opportunity Fund", to: "/strategies/opportunity" },
      { label: "LVF", to: "/strategies/lvf" },
      { label: "Direct SPV", to: "/strategies/spv" },
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
  { label: "Contact", to: "/contact" },
];
