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
    role: "Director — Legal & Compliance",
    category: "leadership",
    photo: "/team/ravindra-gupta.jpeg",
    bio: [
      "25+ years of experience across Company Law, FEMA, SEBI, corporate restructuring, joint ventures, and private equity transactions",
      "Leads pre-investment strategy, including deal origination, diligence, structuring, and execution, with a focus on North India",
      "Former Head – Legal & Compliance at Milestone Capital Advisors Ltd. and senior leader at Future Group",
      "Has led legal diligence and documentation for 50+ private equity transactions aggregating over INR 50 billion and 10+ million sq. ft. of real estate transactions across India",
    ],
    credentials:
      "Company Secretary, Insolvency Professional (IBBI), Registered Valuer (Securities/Financial Assets), and Certified Anti-Money Laundering Manager (NISM–SEBI)",
  },
  {
    id: "tulshiram-patil",
    name: "Deepalidevi Pathak",
    role: "Head – Legal",
    category: "team",
    photo: "/team/tulshiram-patil.jpg",
    bio: [
      "15+ years of experience in Real Estate properties and Legal matters",
      "Expert knowledge on laws and regulation related to Land matters",
      "Facilitated in acquiring 1100+ acre of land",
    ],
    credentials: "MBA, LLB, B.Sc",
  },
  {
    id: "prashant-deshmukh",
    name: "Ravindra Gupta",
    role: "Head – Land Acquisition & Liasoning",
    category: "team",
    photo: "/team/prashant-deshmukh.png",
    bio: [
      "13+ years of experience in handling land acquisition",
      "Expert in Deal Negotiation and finalization",
      "Liaison with Collection Office, SDO/SDM and Tahsildar",
    ],
    credentials: "LLB",
  },
  {
    id: "dhrumil-ganna",
    name: "Vikram Mohite",
    role: "Principal – Investment",
    category: "team",
    photo: "/team/dhrumil-ganna.jpg",
    bio: [
      "7 years of experience in deal structuring and risk management",
      "Responsible for deal sourcing and execution",
    ],
    credentials: "Chartered Accountant and CFA Level III Candidate",
  },
  {
    id: "neeta-dwivedi-joshi",
    name: "Drumil Gana",
    role: "AVP – Investment",
    category: "team",
    photo: "/team/neeta-dwivedi.jpeg",
    bio: [
      "6+ years of experience across investor engagement, investment lifecycle management, and financial analysis",
      "Leads investor engagement across domestic and global markets, acting as a bridge between investors and the investment team",
      "Actively involved in pre-investment evaluation, feasibility analysis, transaction execution, and post-investment monitoring",
      "Supports deal sourcing, fund oversight, and builds strong relationships with landowners and developers to drive quality deal flow",
      "Previously worked at a tax consulting firm with experience in taxation advisory and regulatory compliance",
    ],
    credentials: "Chartered Accountant with a Bachelor’s degree in Commerce from Mumbai University",
    linkedin: "https://in.linkedin.com/in/neeta-dwivedi-joshi-b9340729",
  },
  {
    id: "gourav-kundalia",
    name: "Neeta Joshi",
    role: "Investment Manager",
    category: "team",
    photo: "/team/gourav-kundalia.jpeg",
    bio: [
      "4+ years of experience in private equity real estate and financial analysis",
      "Currently focuses on deal sourcing, evaluation and preparation of Investment Memorandum",
      "Supports investment and strategy teams with data-driven insights for long-term capital allocation decisions and investment monitoring",
      "Previously associated with Allcargo Logistics, with experience across financial accounting, taxation, and FP&A",
    ],
    credentials:
      "Chartered Accountant and CFA Level II cleared with strong expertise in financial analysis, investment evaluation, and fund management",
  },
  {
    id: "mahesh-hegde",
    name: "Gourav Kundalia",
    role: "Project Manager",
    category: "team",
    photo: "/team/mahesh-hegde.jpeg",
    bio: [
      "37+ years of experience in civil engineering across diverse infrastructure and real estate projects",
      "Diploma in Civil Engineering with extensive expertise across execution, billing, planning, and overall project management",
      "Experience spans across architects, clients, contractors, and PMC services, providing a holistic industry perspective",
      "Associated with leading organizations including Hegde and Hegde (Architects), Konkan Railway, Buildmet Ltd, NCC Ltd, L&T, Tefilah Infrastructure, and Tata Projects/TQ Cert Services",
      "Delivered projects across infrastructure, industrial, commercial, and high-end residential developments",
    ],
  },
];

export const leadership = team.filter((m) => m.category === "leadership");
export const teamMembers = team.filter((m) => m.category === "team");
