import type { SiteConfig, SiteContent } from "../types";

export const SITE_CONFIG: SiteConfig = {
  title: "Zohair Saleem — Commercial Real Estate | NAI Advent",
  author: "Zohair Saleem",
  description:
    "Commercial real estate advisory and brokerage services by Zohair Saleem at NAI Advent. Property valuations, purchaser representation, asset disposition, market intelligence, and consultancy.",
  lang: "en",
  siteLogo: "/alejandro-small.jpg",
  navLinks: [
    { text: "Services", href: "#services" },
    { text: "Listings", href: "#listings" },
    { text: "Reports", href: "#reports" },
    { text: "Experience", href: "#experience" },
    { text: "About", href: "#about" },
    { text: "Contact", href: "#contact" },
  ],
  socialLinks: [
    { text: "LinkedIn", href: "#" },
    { text: "Email", href: "mailto:zohair@naiadvent.com" },
  ],
  socialImage: "/zen-og.png",
  canonicalURL: "https://naiadvent.com",
};

export const SITE_CONTENT: SiteContent = {
  hero: {
    name: "Zohair Saleem",
    specialty: "Commercial Real Estate Advisor",
    summary:
      "Senior advisor at NAI Advent — part of the world's largest managed network of independent commercial real estate firms. I deliver institutional-grade valuations, strategic acquisition advisory, and data-driven market intelligence for investors and occupiers across all commercial asset classes.",
    email: "zohair@naiadvent.com",
  },
  services: [
    {
      name: "Property Valuations",
      description:
        "Independent, defensible valuations across all commercial asset classes — office, retail, industrial, and mixed-use. Delivered with rigorous methodology and transparent market evidence to support investment decisions, financing, and compliance.",
      icon: "📊",
    },
    {
      name: "Purchaser Representation",
      description:
        "Strategic acquisition advisory for buyers and investors. From target identification and due diligence through to negotiation and close — your interests represented at every stage of the transaction.",
      icon: "🤝",
    },
    {
      name: "Asset Disposition",
      description:
        "Comprehensive on-market and off-market disposition strategies designed to maximise asset value. We leverage deep buyer networks, precise market timing, and proven positioning expertise to deliver superior outcomes.",
      icon: "🏢",
    },
    {
      name: "Market Intel & Data",
      description:
        "Granular market intelligence, trend analysis, and benchmarking data to inform investment decisions. Backed by proprietary transaction databases, rental surveys, and ongoing field research across key commercial nodes.",
      icon: "📈",
    },
    {
      name: "Consultancy",
      description:
        "Strategic real estate consultancy for occupiers, investors, and developers. Portfolio rationalisation, highest-and-best-use studies, lease advisory, and investment strategy — tailored to your specific objectives.",
      icon: "💡",
    },
  ],
  experience: [
    {
      company: "NAI Advent",
      position: "Senior Commercial Real Estate Advisor",
      startDate: "Jan 2020",
      endDate: "Present",
      summary: [
        "Lead advisor on commercial property transactions across office, industrial, and retail sectors — completing significant deal volume across major Cape Town nodes since joining the firm.",
        "Conduct independent property valuations for institutional clients, banks, and private investors using DCF, income capitalisation, and comparable sales methodologies.",
        "Author of the firm's Quarterly Rent Survey and Quarterly Transaction Analysis & Market Insights publications, widely referenced by investors and industry stakeholders.",
      ],
    },
    {
      company: "JLL South Africa",
      position: "Commercial Property Broker",
      startDate: "Mar 2016",
      endDate: "Dec 2019",
      summary: [
        "Specialised in office and industrial leasing across major nodes, advising corporate occupiers on space strategy, lease restructuring, and market positioning.",
        "Managed a portfolio of landlord mandates across substantial commercial GLA, consistently achieving above-market rental rates and minimising vacancy periods.",
        "Built long-term client relationships with listed property funds, private equity houses, and institutional landlords.",
      ],
    },
    {
      company: "Rode & Associates",
      position: "Property Analyst",
      startDate: "Jun 2014",
      endDate: "Feb 2016",
      summary:
        "Contributed to South Africa's leading independent property research house — producing market reports, rental data analysis, and capitalisation rate studies across all commercial property sectors. Research referenced by major financial institutions and property funds.",
    },
  ],
  listings: [
    {
      name: "Century City Office Park",
      address: "Century City, Cape Town",
      type: "Office",
      size: "1,850 sqm",
      price: "R 485 / sqm",
      status: "available",
    },
    {
      name: "Parow Industrial Estate",
      address: "Parow, Cape Town",
      type: "Industrial",
      size: "4,200 sqm",
      price: "R 78 / sqm",
      status: "available",
    },
    {
      name: "Claremont Retail Strip",
      address: "Claremont, Cape Town",
      type: "Retail",
      size: "620 sqm",
      price: "R 320 / sqm",
      status: "under-offer",
    },
  ],
  about: {
    description: `Zohair Saleem is a senior commercial real estate advisor at NAI Advent — one of South Africa's most respected commercial property brokerages and part of the NAI Global network, the world's largest managed network of independent commercial real estate firms spanning over 400 offices across 60 countries.

With over a decade of experience across brokerage, valuation, and market research, Zohair brings a rigorous, data-driven approach to every mandate. His clients include listed property funds, private equity investors, corporate occupiers, and high-net-worth individuals seeking trusted advisory on acquisitions, disposals, and portfolio strategy.

NAI Advent operates across all major commercial property sectors — office, industrial, retail, and mixed-use — providing clients with integrated advisory services backed by the resources and reach of a global network.`,
    image: "/alejandro-big.jpg",
  },
};
