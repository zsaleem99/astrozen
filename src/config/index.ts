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
    { text: "LinkedIn", href: "https://www.linkedin.com/in/zohairsaleem/" },
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
      "Commercial real estate advisor at NAI Advent with a focus on multifamily and land. I work with investors, owners, and developers — providing property valuations, acquisition advisory, asset disposition, and market intelligence.",
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
      position: "Associate, Capital Markets",
      startDate: "Aug 2025",
      endDate: "Present",
      summary: [
        "Support the origination and execution of investment sales transactions involving income-producing commercial properties, including multifamily, retail, and mixed-use assets.",
        "Conduct property-level financial analysis including NOI underwriting, cap rate benchmarking, and cash-on-cash return modeling to support client advisory and deal positioning.",
        "Prepare offering memorandums, broker opinion of value (BOV) packages, and investment summaries for prospective buyers and institutional clients.",
        "Identify and qualify acquisition targets and potential vendors through proactive market canvassing, ownership research, and relationship development.",
        "Monitor market activity including comparable sales, cap rate trends, and investor sentiment across Calgary's commercial property sectors.",
      ],
    },
    {
      company: "Colliers",
      position: "Analyst",
      startDate: "Oct 2023",
      endDate: "Jun 2025",
      summary: [
        "Conducted in-depth market research and trend analysis on Calgary's office sector, with exposure to multifamily and retail asset classes.",
        "Contributed to quarterly market reports by collecting, verifying, and interpreting lease comps, availabilities, and property-level data.",
        "Supported brokers in identifying potential leads and positioning properties for maximum visibility and strategic advantage.",
      ],
    },
  ],
  listings: [
    {
      name: "VIVA Homes — Arbour Lake Townhomes",
      address: "Calgary, AB",
      type: "Multifamily",
      size: "32 Units",
      price: "$11,500,000",
      status: "available",
      image: "/Arbour Lake_Viva Townhomes_Atco.png",
    },
  ],
  about: {
    description: `Zohair Saleem is a commercial real estate advisor at NAI Advent, one of the world's largest managed networks of independent commercial real estate firms spanning over 400 offices across 60 countries.

With multiple years of experience across brokerage, valuation, and market research, Zohair brings a rigorous, data-driven approach to every mandate. His clients include listed property funds, private equity investors, corporate occupiers, and high-net-worth individuals seeking trusted advisory on acquisitions, disposals, and portfolio strategy.

NAI Advent operates across all major commercial property sectors — office, industrial, retail, and mixed-use — providing clients with integrated advisory services backed by the resources and reach of a global network.`,
    image: "/alejandro-big.jpg",
  },
};
