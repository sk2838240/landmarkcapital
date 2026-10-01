export type ProjectSection =
  | { kind: "bullets"; title: string; items: { title?: string; body: string }[] }
  | { kind: "table"; title: string; columns: string[]; rows: string[][] }
  | { kind: "columns"; title: string; columns: { title: string; items: string[] }[] }
  | { kind: "prose"; title: string; body: string };

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
  /** Hero sub-line on the detail page, e.g. "Gachibowli, Hyderabad | Mixed Use Development" */
  locationTagline: string;
  highlights: string[];
  metrics: { label: string; value: string }[];
  sections: ProjectSection[];
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
    saleableArea: "9.84 lakhs square feet",
    invested: "₹100 Cr",
    status: "Under construction",
    locationTagline: "Gachibowli, Hyderabad | Mixed Use Development",
    highlights: [
      "Strategically positioned 5 km from Hitec City, strong rental demand from Hyderabad's technology corridor",
      "Close to the University of Hyderabad, ISB and IIIT, a knowledge ecosystem attracting professionals and families",
      "Near Outer Ring Road with seamless city connectivity and direct airport access",
      "Tower A fully completed (21 of 21 floors); Tower B at 16 of 21; clubhouse complete with commercial tower progressing",
      "62% sold, 5,66,895 sq ft across 243 units",
    ],
    metrics: [
      { label: "Total revenue", value: "₹900 Cr" },
      { label: "Net profit", value: "₹216 Cr" },
      { label: "Investment multiple", value: "2.16x" },
    ],
    sections: [
      {
        kind: "bullets",
        title: "Strategic Location",
        items: [
          {
            title: "IT Hub Proximity",
            body: "Strategically positioned just 5 kilometres from Hitec City, placing residents and businesses at the heart of Hyderabad's thriving technology corridor. This proximity ensures excellent employment opportunities and strong rental demand.",
          },
          {
            title: "Educational Excellence",
            body: "Close proximity to premier educational institutions including the University of Hyderabad, Indian School of Business (ISB), and IIIT, creating a knowledge ecosystem that attracts professionals and families.",
          },
          {
            title: "Connectivity Advantage",
            body: "Strategic presence near Outer Ring Road provides seamless connectivity to other parts of the city and direct access to Rajiv Gandhi International Airport, enhancing investment appeal.",
          },
        ],
      },
      {
        kind: "table",
        title: "Construction Progress & Sales Performance",
        columns: ["Component", "Status", "Details"],
        rows: [
          ["Approvals", "Commencement Certificate received", "All regulatory approvals secured, ensuring smooth project execution and handover to buyers."],
          ["Tower A", "Fully completed", "21 floor slab completed out of 21 floors, demonstrating excellent project execution capabilities."],
          ["Tower B", "Advanced progress", "16 floor slab completed out of 21 floors, maintaining steady construction momentum."],
          ["Commercial & Clubhouse", "In progress and completed", "Commercial tower at 6 floors completed (out of 17); clubhouse fully completed with 4 floors."],
        ],
      },
      {
        kind: "bullets",
        title: "Sales Performance",
        items: [
          { title: "Total Sales Achievement", body: "62% of total saleable area sold: 5,66,895 sq ft." },
          { title: "Total Units Sold", body: "243 units sold. Strong market acceptance across residential and commercial segments." },
        ],
      },
      {
        kind: "table",
        title: "Financial Performance",
        columns: ["Metric", "Figure", "Commentary"],
        rows: [
          ["Investment", "₹100 Cr", ""],
          ["Revenue Excellence", "₹900 Cr", "Total revenue demonstrates exceptional market acceptance and premium pricing strategy success."],
          ["Profit Performance", "₹216 Cr", "Net profit showcasing efficient cost management and strong operational execution."],
          ["Investment Multiple", "2.16x", "Return on investment of ₹100 crores, significantly outperforming market benchmarks and investor expectations."],
          ["Commercial Segment Outperformance", "₹141 Cr", "Commercial component generating higher profit margins compared to residential, validating mixed-use strategy."],
        ],
      },
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
    saleableArea: "13 lakhs sq. ft.",
    invested: "₹125 Cr",
    status: "Completed",
    locationTagline: "Manikonda, Hyderabad | Residential Apartments",
    highlights: [
      "Near Lanco Hills Tech Park, direct access to major employment centres and strong rental demand",
      "Proximity to Chaitanya School and Pavithra International School, attractive for families",
      "Well-served by quality healthcare including Preetam and Prerana Hospitals",
      "95% sold, 821 of 864 units",
      "9 completed towers, all ready for possession",
    ],
    metrics: [
      { label: "Total revenue", value: "₹800 Cr" },
      { label: "Net profit", value: "₹300 Cr" },
      { label: "Investment multiple", value: "2.4x" },
    ],
    sections: [
      {
        kind: "bullets",
        title: "Location Highlights",
        items: [
          {
            title: "Business District Access",
            body: "Located near Lanco Hills Tech Park, providing direct access to major employment centres and ensuring strong rental demand from working professionals.",
          },
          {
            title: "Educational Infrastructure",
            body: "Proximity to prestigious institutions like Chaitanya School and Pavithra International School makes it attractive for families seeking quality education options.",
          },
          {
            title: "Healthcare Access",
            body: "Well-served by quality healthcare facilities including Preetam and Prerana Hospitals, ensuring comprehensive medical care for residents.",
          },
        ],
      },
      {
        kind: "bullets",
        title: "Construction & Sales Status",
        items: [
          { title: "Completed Towers", body: "9 completed towers. All towers ready for possession." },
          { title: "Sales Achievement", body: "95%: 821 units sold out of 864 total units." },
        ],
      },
      {
        kind: "table",
        title: "Outstanding Financial Returns",
        columns: ["Metric", "Figure", "Commentary"],
        rows: [
          ["Investment", "₹125 Cr", ""],
          ["Revenue Excellence", "₹800 Cr", "Total revenue demonstrates exceptional market acceptance and premium pricing strategy success."],
          ["Profit Performance", "₹300 Cr", "Net profit showcasing efficient cost management and strong operational execution."],
          ["Investment Multiple", "2.4x", "Return on investment of ₹125 crores, significantly outperforming market benchmarks and investor expectations."],
        ],
      },
    ],
    image: "/media/portfolio/ambience-courtyard.jpg",
    imageAlt: "Ambience Courtyard residential towers, Manikonda, Hyderabad",
  },
  {
    id: "sadahalli-villas",
    name: "Villa Development",
    company: "Koncept Landmark Infra Pvt. Ltd",
    type: "Residential / Row Houses",
    location: "Sadahalli, Bangalore",
    developerGroup: "Koncept Ambience",
    landArea: "36 acres",
    saleableArea: "10.5 lakh square feet",
    invested: "₹120 Cr",
    status: "Under development",
    locationTagline: "Sadahalli, Bangalore | Residential / Row Houses",
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
    sections: [
      {
        kind: "bullets",
        title: "Location Highlights",
        items: [
          {
            title: "Airport Connectivity",
            body: "Prime location near Kempegowda International Airport ensures excellent connectivity for residents and strong appreciation potential due to airport proximity.",
          },
          {
            title: "IT Ecosystem Access",
            body: "Close to Prestige Tech Cloud and other major IT companies, creating strong demand from tech professionals seeking premium residential options.",
          },
          {
            title: "Infrastructure Development",
            body: "Benefits from Satellite Town Ring Road and upcoming Namma Metro Blue Line extension, significantly enhancing long-term value proposition.",
          },
        ],
      },
      {
        kind: "columns",
        title: "Market Infrastructure",
        columns: [
          {
            title: "Retail & Entertainment",
            items: [
              "Reliance Trends (Fashion retail)",
              "DMart (Supermarket chain)",
              "Garuda Mall (Premium shopping)",
              "The Galleria Mall (Lifestyle destination)",
              "Decathlon Anubhava (Sports retail)",
            ],
          },
          {
            title: "Healthcare & Education",
            items: [
              "Nandi Multispeciality Hospital",
              "Manipal Hospital (Tertiary care)",
              "Wisdom International School",
              "VR International School",
              "Orchids The International (Premium education)",
            ],
          },
        ],
      },
      {
        kind: "bullets",
        title: "Project Status",
        items: [
          {
            title: "Land Acquisition Complete",
            body: "All 36 acres secured with clear titles, enabling smooth project execution without legal complications.",
          },
          {
            title: "Approvals In Progress",
            body: "Regulatory clearances being obtained systematically to ensure compliant and timely project delivery.",
          },
          {
            title: "Construction Planning",
            body: "Detailed engineering and construction planning underway with experienced contractors and consultants.",
          },
        ],
      },
      {
        kind: "table",
        title: "Financial Outlook",
        columns: ["Metric", "Figure", "Commentary"],
        rows: [
          ["Investment", "₹120 Cr", ""],
          ["Revenue Target", "₹1,052 Cr", "From premium villa sales."],
          ["Investment Multiple", "2.2x", "Expected return generating ₹269 crores profit."],
        ],
      },
      {
        kind: "prose",
        title: "Premium Amenities & Villa Showcase",
        body: "World-class amenities and villa designs crafted to meet luxury lifestyle expectations of affluent homebuyers. The development features resort-style amenities including swimming pools, fitness centres, landscaped gardens, and recreational facilities that enhance property values and resident satisfaction.",
      },
    ],
    image: "/media/portfolio/sadahalli-villas.jpg",
    imageAlt: "Villa development site, Sadahalli, Bangalore",
  },
  {
    id: "doddaballapur-plots",
    name: "Plotted Development",
    company: "Koncept Landmark Developers Pvt. Ltd",
    type: "Plotted Development",
    location: "Doddaballapur, Bangalore",
    developerGroup: "Koncept Ambience",
    landArea: "22 acres",
    saleableArea: "5.2 lakh square feet",
    invested: "₹35 Cr",
    status: "Planning stage",
    locationTagline: "Doddaballapur, Bangalore | Plotted Development",
    highlights: [
      "Only 24 km from Kempegowda International Airport, attractive for investors and end-users",
      "Satellite Town Ring Road and Bengaluru Business Corridor passing through Doddaballapur",
      "Foxconn's iPhone assembly plant creating significant employment and residential demand",
      "Market launch targeted within 3 to 6 months, sales completion 6 to 12 months post-launch",
    ],
    metrics: [
      { label: "Revenue target", value: "₹104 Cr" },
      { label: "Projected profit", value: "₹44 Cr" },
    ],
    sections: [
      {
        kind: "bullets",
        title: "Location Highlights",
        items: [
          {
            title: "Strategic Airport Location",
            body: "Only 24 km from Kempegowda International Airport, making it highly attractive for investors and end-users seeking airport proximity benefits.",
          },
          {
            title: "Infrastructure Catalyst",
            body: "Satellite Town Ring Road and Bengaluru Business Corridor passing through Doddaballapur will dramatically enhance connectivity and property values.",
          },
          {
            title: "Industrial Growth Driver",
            body: "Foxconn's iPhone Assembly Plant establishment creates significant employment opportunities and residential demand in the region.",
          },
        ],
      },
      {
        kind: "columns",
        title: "Market Position & Infrastructure Access",
        columns: [
          {
            title: "Transportation & Hospitality",
            items: [
              "Doddaballapur Railway Station (7 km)",
              "Kempegowda International Airport (24 km)",
              "Stayvista Premium Stays",
              "Spree Resorts (Leisure destination)",
            ],
          },
          {
            title: "Education & Healthcare",
            items: [
              "MES College of Pharmacy",
              "PKB High School",
              "Manipal Hospital network",
              "Well Worth Hospital",
            ],
          },
        ],
      },
      {
        kind: "bullets",
        title: "Project Timeline",
        items: [
          {
            title: "Planning Stage",
            body: "Project currently in detailed planning phase with comprehensive market analysis and regulatory preparation completed.",
          },
          {
            title: "Launch Timeline",
            body: "Market launch targeted within next 3 to 6 months following final approvals and infrastructure preparation.",
          },
          {
            title: "Sales Completion",
            body: "Complete sales targeted within 6 to 12 months post-launch, leveraging strong market demand and strategic location.",
          },
        ],
      },
      {
        kind: "table",
        title: "Financial Outlook",
        columns: ["Metric", "Figure", "Commentary"],
        rows: [
          ["Investment", "₹35 Cr", ""],
          ["Revenue Target", "₹104 Cr", "Expected from plot sales."],
          ["Projected Profit", "₹44 Cr", "Net profit anticipated."],
        ],
      },
      {
        kind: "bullets",
        title: "Site Development & Master Planning",
        items: [
          {
            title: "Optimal Plot Layout",
            body: "Carefully planned plot sizes and road networks ensuring efficient land use and excellent connectivity throughout the development.",
          },
          {
            title: "Community Facilities",
            body: "Well-designed clubhouse and common areas providing residents with recreational and social spaces that enhance community living.",
          },
          {
            title: "Infrastructure Development",
            body: "Complete internal infrastructure including roads, utilities, and landscaping ensuring ready-to-build plots for purchasers.",
          },
        ],
      },
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
    saleableArea: "11 lakhs sq. ft.",
    invested: "₹50 Cr",
    status: "Under development",
    locationTagline: "Mankoli, Bhiwandi | Industrial Park",
    highlights: [
      "Well-connected Mankoli location with direct access to the Mumbai-Agra highway",
      "Bhiwandi-Dombivli Road connectivity for industrial logistics",
      "Virar-Alibaug corridor, Samruddhi Highway and Thane-Bhiwandi-Kalyan metro line planned nearby",
    ],
    metrics: [],
    sections: [
      {
        kind: "bullets",
        title: "Location Key Drivers",
        items: [
          {
            body: "The project is situated in a well connected location of Mankoli, having direct access to the Mumbai-Agra highway and Bhiwandi-Dombivali Road.",
          },
          {
            body: "There are multiple infrastructure like Virar-Alibaug corridor, Samruddhi Highway, Thane-Bhiwandi-Kalyan metro line etc being planned around the location which will further boost the attractiveness.",
          },
        ],
      },
    ],
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
    saleableArea: "13 lakhs sq. ft.",
    invested: "₹60 Cr",
    status: "Leased and operating",
    locationTagline: "Dhamangaon, Bhiwandi | Warehousing",
    highlights: [
      "Dhamangaon stands as the fastest growing warehousing hub in MMR",
      "Proximity to the Samruddhi Expressway enhances connectivity",
      "Warehouses leased to Zepto, NMK Textiles, TCI and Drona Logitech",
    ],
    metrics: [],
    sections: [
      {
        kind: "bullets",
        title: "Location Key Drivers",
        items: [
          {
            body: "Dhamangaon stands as fastest growing warehousing hub in MMR.",
          },
          {
            body: "Proximity to the Samruddhi Expressway enhances its connectivity, making it an attractive location for warehousing and industrial investments.",
          },
          {
            body: "There are multiple infrastructure like Virar-Alibaug corridor, Samruddhi Highway, Thane-Bhiwandi-Kalyan metro line etc being planned around the location which will further boost the attractiveness.",
          },
        ],
      },
      {
        kind: "table",
        title: "Warehouses & Leasing",
        columns: ["Warehouse", "Leased to"],
        rows: [
          ["Warehouse B200", "NMK Textiles"],
          ["Warehouse B300", "Zepto"],
          ["Warehouse B400", "TCI and Drona Logitech"],
        ],
      },
    ],
    image: "/media/portfolio/sai-krishna-warehousing.jpg",
    imageAlt: "Sai Krishna Warehousing facilities, Dhamangaon, Bhiwandi",
  },
];
