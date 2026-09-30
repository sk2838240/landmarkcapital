export type Blog = {
  slug: string;
  title: string;
  excerpt: string;
  author: string;
  date: string;
  category?: string;
  image?: string | null;
};

export const blogs: Blog[] = [
  {
    slug: "landmark-aligns-with-india-real-estate",
    title:
      "How Landmark Capital Aligns With India\u2019s Evolving Real Estate and Investment Landscape",
    excerpt:
      "India\u2019s real estate sector has entered a phase of institutionalization, professional asset management, and yield-focused investing. Regulatory reforms, growing transparency, and the rise of long-term capital have shifted the market away from fragmented development toward professionally managed real estate assets.",
    author: "Ashish Joshi",
    date: "2026-01-20",
    category: "Market",
  },
  {
    slug: "sebi-brokers-investor-money",
    title: "SEBI\u2019s Plan to Separate Brokers from Investors Trade Money",
    excerpt:
      "Brokers have been enjoying a dream run as the numbers of Demat accounts in India have more than doubled in the last two and a half years. From 40.9 million in March 2020, they have now crossed 110 million.",
    author: "Harshita Singh",
    date: "2023-01-02",
    category: "Regulation",
  },
  {
    slug: "rising-interest-rates-real-estate",
    title: "Rising Interest Rates and Impact on Real Estate",
    excerpt:
      "Countries worldwide are fighting with rising prices and falling growth. Central banks worldwide are dealing with rising inflation and the common way to tackle the same is through increasing interest rates.",
    author: "Manish Maloo",
    date: "2022-12-30",
    category: "Market",
  },
  {
    slug: "rise-of-indias-e-marketplaces",
    title: "The Rise Of India\u2019s E-Marketplaces",
    excerpt:
      "India has emerged as a hotspot to e-commerce platforms in recent times. Researches suggest India\u2019s online marketplaces could be making sales worth as much as $350 billion a year by 2027.",
    author: "Neeta Joshi",
    date: "2022-12-28",
    category: "E-commerce",
  },
  {
    slug: "black-horse-indian-real-estate",
    title: "Big boxes turn out to be the black horse for the Indian real estate industry",
    excerpt:
      "The Indian Warehousing industry which is considered to be among the fastest growing hubs for large modern warehouses in the world and at par with the United States, China and Japan today, seemed a far cry from the development in western countries almost more than a decade ago.",
    author: "Ashish Joshi",
    date: "2022-05-24",
    category: "Warehousing",
  },
  {
    slug: "multimodal-warehousing",
    title: "Multimodal warehousing: How convergence and streamlining can change the game",
    excerpt:
      "Multimodal warehousing, the movement and storage of cargo from origin to destination by several modes of transport under a single contract, has become hot cake for investment after government focus.",
    author: "Ashish Joshi",
    date: "2022-04-28",
    category: "Warehousing",
  },
  {
    slug: "ev-indian-logistic-sector",
    title: "EV Adoption To Accelerate In The Indian Logistic Sector",
    excerpt:
      "India\u2019s environmental pollution has reached the threshold level, which is a cause of great alarm. In the interest of the future of India, e-mobility seems the only viable option in the given circumstances.",
    author: "Ashish Joshi",
    date: "2022-04-20",
    category: "Logistics",
  },
  {
    slug: "preserving-the-planet-esg",
    title: "Preserving The Planet, ESG Funds in Focus",
    excerpt:
      "Over the past few years, Environmental, Social and Governance (ESG) factors have become crucial in business decisions all around the world. From macro perspectives, ESG has widened its ambit to operations including warehousing.",
    author: "Ashish Joshi",
    date: "2022-04-20",
    category: "ESG",
  },
  {
    slug: "warehousing-outlook-2022",
    title: "Warehousing Outlook 2022",
    excerpt:
      "The warehousing and logistics segment of real estate that has emerged as a relatively risk immune to the shocks of the Covid19 pandemic is expected to gain further strength and attract more investment.",
    author: "Ashish Joshi",
    date: "2022-03-29",
    category: "Warehousing",
  },
  {
    slug: "input-cost-conundrum",
    title: "Input Cost Conundrum for Warehousing Industry",
    excerpt:
      "The Economies around the World in general and Industries like Real Estate, Automobiles, FMCD and FMCG, in particular, are ravaged by rising commodity prices.",
    author: "Ashish Joshi",
    date: "2022-03-24",
    category: "Industry",
  },
  {
    slug: "quick-commerce-going-dark",
    title: "Quick Commerce: Going Dark Is Just The Start",
    excerpt:
      "Quick-commerce has become the buzzword in India\u2019s e-commerce market, promising delivering products in a jiffy. The Indian market opportunity of Q-commerce is estimated to be $0.3 billion in terms of overall GMV.",
    author: "Shelly Patwari",
    date: "2022-03-21",
    category: "E-commerce",
  },
  {
    slug: "warehousing-vs-residential",
    title: "Warehousing vs. Residential \u2014 Which is the more attractive asset class?",
    excerpt:
      "Real Estate is one of the most traditional and recognized alternate investment classes. Real Estate is broadly divided into Residential (RRE) and Commercial (CRE).",
    author: "Drumil Gana",
    date: "2021-09-09",
    category: "Investment",
  },
  {
    slug: "evergrande-debt-fueled-growth",
    title: "China\u2019s Evergrande \u2014 Poster Child Of Debt-Fueled Growth",
    excerpt:
      "US$ 300 Bn debt, operations across 280 cities and 1,400 ongoing projects \u2014 that\u2019s China\u2019s real estate giant Evergrande, a Fortune 500 company.",
    author: "Ashish Joshi",
    date: "2021-09-24",
    category: "Global",
  },
  {
    slug: "grade-a-warehousing",
    title: "Grade A Warehousing \u2014 The Way Forward",
    excerpt:
      "Warehousing forms the core component of supply chain of any company that relies heavily on efficient distribution of its products encompassing the entire chain right from factories to shops to end-users.",
    author: "Manish Maloo",
    date: "2021-09-16",
    category: "Warehousing",
  },
  {
    slug: "textile-pli-scheme",
    title: "Textile PLI Scheme \u2014 All You Need To Know",
    excerpt:
      "On 8 September 2021, the Union Cabinet approved the PLI scheme worth \u20B910,683 crore for the textile sector. The scheme aims to restore India\u2019s dominant market position in global textile exporter rankings.",
    author: "Shelly Patwari",
    date: "2021-09-15",
    category: "Policy",
  },
  {
    slug: "pli-scheme-private-investments",
    title: "PLI Scheme \u2014 Kick-Start To Private Investments",
    excerpt:
      "As the COVID-19 pandemic hit the economy in 2020, the importance of being \u2018Atmanirbhar\u2019 came into focus. In the Union Budget 2021\u201322, the Finance Minister announced an outlay of \u20B91.97 lakh crore.",
    author: "Shelly Patwari",
    date: "2021-09-15",
    category: "Policy",
  },
  {
    slug: "global-trade-container-shortage",
    title: "Global Trade Nightmare \u2014 Container Shortage",
    excerpt:
      "Global shipping companies are facing a very unique challenge, Finding containers to ship goods. China is paying premium to get the containers back to fill them for exports.",
    author: "Ashish Joshi",
    date: "2021-09-09",
    category: "Logistics",
  },
  {
    slug: "ecommerce-impact-warehousing",
    title: "E-Commerce impact on Warehousing",
    excerpt:
      "In recent years, E-commerce has been the biggest driver of warehousing globally as well as in India. Globally, an additional 138 Million Sq. Mts will be required to support e-commerce growth over the next five years.",
    author: "Drumil Gana",
    date: "2021-09-09",
    category: "Warehousing",
  },
  {
    slug: "ocean-freight-rate-spike",
    title: "Ocean Freight Rate Spike \u2014 Reasons",
    excerpt:
      "The exporters and importers are baffled by the abnormal rise in freight rate in container shipping business. The freight rate from China to Europe or North America, for a 40 ft container has gone up from US$ 2,000 to US$ 12,000.",
    author: "Ashish Joshi",
    date: "2021-09-09",
    category: "Logistics",
  },
  {
    slug: "gdp-growth-miracle-or-mirage",
    title: "20% GDP Growth \u2014 Miracle or Mirage?",
    excerpt:
      "The Ministry of Statistics released GDP data for the first quarter of FY 2021\u201322. India\u2019s GDP grew 20.1% year-on-year in Q1, broadly in line with market expectations.",
    author: "Shelly Patwari",
    date: "2021-09-09",
    category: "Economy",
  },
  {
    slug: "emerging-trend-warehousing-logistics",
    title: "Emerging Trend In 2021 And Beyond \u2014 Warehousing & Logistics",
    excerpt:
      "The year 2019 and 2020 have been watershed years in the history of the modern world. Year 2021 is going to be the year of recovery and consolidation across industries.",
    author: "Ashish Joshi",
    date: "2021-09-09",
    category: "Warehousing",
  },
];

export function getBlog(slug: string) {
  return blogs.find((b) => b.slug === slug);
}
