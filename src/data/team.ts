export type TeamMember = {
  id: string;
  name: string;
  role: string;
  category: "leadership" | "team";
  bio: string[];
  credentials?: string;
  linkedin?: string;
  photo?: string;
};

export const team: TeamMember[] = [
  {
    id: "ashish-joshi",
    name: "Ashish Joshi",
    role: "Managing Partner & Fund Manager",
    category: "leadership",
    photo: "/team/ashish-joshi.jpg",
    bio: [
      "25+ years of experience in Real Estate, Logistics and Telecom industry",
      "Ex-Managing Partner at Milestone Capital Advisors",
      "Built a real estate AUM of INR 3,000 Crores across 7 real estate funds",
      "Involved in fund raising, sourcing and closing deals pan India with successful exits at attractive IRRs",
    ],
    credentials: "Chartered Accountant and Cost Accountant",
    linkedin: "https://www.linkedin.com/in/ashish-joshi-85a1ab5/",
  },
  {
    id: "ravindra-gupta",
    name: "Ravindra Gupta",
    role: "Head of Legal & Compliance",
    category: "leadership",
    photo: "/team/ravindra-gupta.jpeg",
    bio: [
      "20+ yrs in legal and regulatory matters",
      "Company Secretary & IBBI-Registered Valuer",
    ],
  },
  {
    id: "dhrumil-ganna",
    name: "Dhrumil Ganna",
    role: "Principal, Investments",
    category: "team",
    photo: "/team/dhrumil-ganna.jpg",
    bio: [
      "7+ yrs in deal structuring, analysis & risk management",
      "Formerly with E&Y",
    ],
  },
  {
    id: "neeta-dwivedi-joshi",
    name: "Neeta Dwivedi Joshi",
    role: "Investment Manager",
    category: "team",
    photo: "/team/neeta-dwivedi.jpeg",
    bio: [
      "3+ yrs across pre- and post-investment operations and statutory compliance",
    ],
  },
  {
    id: "gourav-kundalia",
    name: "Gourav Kundalia",
    role: "Investment Manager",
    category: "team",
    photo: "/team/gourav-kundalia.jpeg",
    bio: [
      "5+ yrs overseeing post-investment monitoring and portfolio coordination",
    ],
  },
  {
    id: "rohit-chauhan",
    name: "Rohit Chauhan",
    role: "Investment Manager",
    category: "team",
    photo: "/team/rohit-chauhan.jpg",
    bio: [
      "8+ yrs in alternative asset management & fund administration",
      "Structured Category I/II/III AIFs",
    ],
  },
];

export const leadership = team.filter((m) => m.category === "leadership");
export const teamMembers = team.filter((m) => m.category === "team");
