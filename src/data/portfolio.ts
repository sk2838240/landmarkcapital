export type PortfolioProject = {
  id: string;
  name: string;
  company: string;
  type: string;
  location: string;
  developerGroup: string;
  landArea: string;
  saleableArea: string;
  invested: string;
  status: string;
  highlights: string[];
  metrics: { label: string; value: string }[];
  image: string;
  imageAlt: string;
};

export const portfolioProjects: PortfolioProject[] = [
  {
    id: "ambience-parkview",
    name: "Ambience Parkview",
    company: "Archon Buildtech Pvt. Ltd.",
    type: "Mixed Use Development",
    location: "Gachibowli, Hyderabad",
    developerGroup: "Koncept Ambience",
    landArea: "4.4 acres",
    saleableArea: "9.84 lakh sq ft",
    invested: "₹100 Cr",
    status: "Under construction",
    highlights: [
      "Strategically positioned 5 km from Hitec City, strong rental demand from Hyderabad's technology corridor",
      "Close to the University of Hyderabad, ISB and IIIT, a knowledge ecosystem attracting professionals and families",
      "Near Outer Ring Road with seamless city connectivity and direct airport access",
      "Tower A fully completed (21 of 21 floors); Tower B at 16 of 21; clubhouse complete with commercial tower progressing",
      "62% sales achievement, 5,66,895 sq ft sold across 243 units",
    ],
    metrics: [
      { label: "Total revenue", value: "₹900 Cr" },
      { label: "Net profit", value: "₹216 Cr" },
      { label: "Investment multiple", value: "2.16x" },
    ],
    image: "/media/portfolio/ambience-parkview.jpg",
    imageAlt: "Ambience Parkview mixed-use development, Gachibowli, Hyderabad",
  },
  {
    id: "ambience-courtyard",
    name: "Ambience Courtyard",
    company: "Housz Buildtech LLP",
    type: "Residential Apartments",
    location: "Manikonda, Hyderabad",
    developerGroup: "Koncept Ambience",
    landArea: "8 acres",
    saleableArea: "13 lakh sq ft",
    invested: "₹125 Cr",
    status: "Completed",
    highlights: [
      "Near Lanco Hills Tech Park, direct access to major employment centres and strong rental demand",
      "Proximity to Chaitanya School and Pavithra International School, attractive for families",
      "Well-served by quality healthcare including Preetam and Prerana Hospitals",
      "95% sales achievement, 821 of 864 units sold",
      "9 completed towers, all ready for possession",
    ],
    metrics: [
      { label: "Total revenue", value: "₹800 Cr" },
      { label: "Net profit", value: "₹300 Cr" },
      { label: "Investment multiple", value: "2.4x" },
    ],
    image: "/media/portfolio/ambience-courtyard.jpg",
    imageAlt: "Ambience Courtyard residential towers, Manikonda, Hyderabad",
  },
  {
    id: "sadahalli-villas",
    name: "Villa Development",
    company: "Koncept Landmark Infra Pvt. Ltd.",
    type: "Residential / Row Houses",
    location: "Sadahalli, Bangalore",
    developerGroup: "Koncept Ambience",
    landArea: "36 acres",
    saleableArea: "10.5 lakh sq ft",
    invested: "₹120 Cr",
    status: "Under development",
    highlights: [
      "Prime location near Kempegowda International Airport, strong connectivity and appreciation potential",
      "Close to Prestige Tech Cloud and major IT employers, demand from tech professionals",
      "Benefits from Satellite Town Ring Road and the upcoming Namma Metro Blue Line extension",
      "Land acquisition complete, all 36 acres secured with clear titles",
      "Backed by world-class retail, healthcare and education infrastructure nearby",
    ],
    metrics: [
      { label: "Revenue target", value: "₹1,052 Cr" },
      { label: "Expected profit", value: "₹269 Cr" },
      { label: "Investment multiple", value: "2.2x" },
    ],
    image: "/media/portfolio/sadahalli-villas.jpg",
    imageAlt: "Villa development site, Sadahalli, Bangalore",
  },
  {
    id: "doddaballapur-plots",
    name: "Plotted Development",
    company: "Koncept Landmark Developers Pvt. Ltd.",
    type: "Plotted Development",
    location: "Doddaballapur, Bangalore",
    developerGroup: "Koncept Ambience",
    landArea: "22 acres",
    saleableArea: "5.2 lakh sq ft",
    invested: "₹35 Cr",
    status: "Planning stage",
    highlights: [
      "Only 24 km from Kempegowda International Airport, attractive for investors and end-users",
      "Satellite Town Ring Road and Bengaluru Business Corridor passing through Doddaballapur",
      "Foxconn's iPhone assembly plant creating significant employment and residential demand",
      "Market launch targeted within 3–6 months, sales completion 6–12 months post-launch",
    ],
    metrics: [
      { label: "Revenue target", value: "₹104 Cr" },
      { label: "Projected profit", value: "₹44 Cr" },
    ],
    image: "/media/portfolio/doddaballapur-plots.jpg",
    imageAlt: "Plotted development master plan, Doddaballapur, Bangalore",
  },
  {
    id: "krishna-industrial-park",
    name: "Krishna Landmark Industrial Park",
    company: "Greybox Landmark Industrial Pvt Ltd",
    type: "Industrial Park",
    location: "Mankoli, Bhiwandi",
    developerGroup: "Krishna Group",
    landArea: "16.5 acres",
    saleableArea: "11 lakh sq ft",
    invested: "₹50 Cr",
    status: "Under development",
    highlights: [
      "Well-connected Mankoli location with direct access to the Mumbai-Agra highway",
      "Bhiwandi–Dombivli Road connectivity for industrial logistics",
      "Virar–Alibaug corridor, Samruddhi Highway and Thane–Bhiwandi–Kalyan metro line planned nearby",
    ],
    metrics: [],
    image: "/media/portfolio/krishna-industrial-park.jpg",
    imageAlt: "Krishna Landmark Industrial Park, Mankoli, Bhiwandi",
  },
  {
    id: "sai-krishna-warehousing",
    name: "Sai Krishna Warehousing",
    company: "Sai Krishna Warehousing Pvt Ltd",
    type: "Warehousing",
    location: "Dhamangaon, Bhiwandi",
    developerGroup: "Krishna Group",
    landArea: "54 acres",
    saleableArea: "13 lakh sq ft",
    invested: "₹60 Cr",
    status: "Leased and operating",
    highlights: [
      "Dhamangaon stands as the fastest growing warehousing hub in MMR",
      "Proximity to the Samruddhi Expressway enhances connectivity",
      "Warehouses leased to Zepto, NMK Textiles, TCI and Drona Logitech",
    ],
    metrics: [],
    image: "/media/portfolio/sai-krishna-warehousing.jpg",
    imageAlt: "Sai Krishna Warehousing facilities, Dhamangaon, Bhiwandi",
  },
];
