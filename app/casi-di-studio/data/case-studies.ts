export type CaseStudy = {
  slug: string
  number: string
  title: string
  industry: string
  clientProfile: string
  duration: string
  context: string
  challenge: string
  approach: string
  impact: string[]
}

export const caseStudies: CaseStudy[] = [
  {
    slug: "leadership-vision-alignment",
    number: "01",
    title: "Leadership Vision Alignment",
    industry: "Entertainment",
    clientProfile: "Mid-Cap Enterprise",
    duration: "12+ Months",
    context:
      "In the fast-paced entertainment sector, strategic agility is paramount. The client's executive team was at a crossroads, debating whether to pursue a strictly commercial growth trajectory or retain a legacy non-profit core within their corporate mission.",
    challenge:
      "Competing strategic visions resulted in leadership gridlock. This fundamental misalignment stalled critical long-term investments and prevented the formation of a unified corporate strategy.",
    approach:
      "Fiume engineered a bespoke strategic decision-making framework to break the deadlock. We scoped the core strategic dilemmas, gathered structured stakeholder intelligence, and facilitated targeted prioritization workshops with the C-suite to objectively evaluate trade-offs.",
    impact: [
      "Forged unanimous executive alignment on a unified corporate vision.",
      "Unlocked stalled decision-making, enabling the immediate rollout of a cohesive long-term strategic plan.",
    ],
  },
  {
    slug: "okr-implementation",
    number: "02",
    title: "Strategic Prioritization & OKR Implementation",
    industry: "High Technology",
    clientProfile: "Large Enterprise",
    duration: "12+ Months",
    context:
      "Following a period of hyper-growth, the client faced escalating organizational complexity that strained their traditional decision-making structures.",
    challenge:
      "The executive leadership suffered from decision fatigue when evaluating overlapping business opportunities. The absence of a standardized prioritization framework led to fragmented resource allocation and misalignment with the Board of Directors.",
    approach:
      "Fiume introduced and embedded the Objectives and Key Results (OKR) methodology across the Executive Leadership Team. We conducted rigorous market trend analyses, quantified high-value opportunities, and led alignment sessions with SVPs to synthesize these into a prioritized strategic roadmap.",
    impact: [
      "Successfully embedded a scalable OKR framework across senior leadership.",
      "Dramatically increased decision-making velocity and executive alignment.",
      "Delivered a clear, prioritized strategic roadmap that secured full Board endorsement.",
    ],
  },
  {
    slug: "governance-process-optimization",
    number: "03",
    title: "Governance & Process Optimization",
    industry: "Banking & Financial Services",
    clientProfile: "Global Financial Institution",
    duration: "12+ Months",
    context:
      "A leading financial institution was experiencing critical delays in product launches, bogged down by labyrinthine governance structures and heavy-handed risk management protocols.",
    challenge:
      "Redundant governance layers and process bottlenecks were crippling the product development lifecycle, driving an urgent mandate to slash time-to-market by up to 66%.",
    approach:
      "Fiume led an end-to-end transformation program. We benchmarked industry best practices, audited the existing risk processes, and engineered a lean governance framework. We drafted a new governance charter, updated standard operating procedures, and executed a successful pilot before managing the enterprise-wide rollout and training.",
    impact: [
      "Achieved a massive reduction in new product time-to-market by systematically eliminating operational bottlenecks.",
      "Established crystal-clear roles and responsibilities, securing strong executive endorsement.",
      "Fostered highly agile collaboration between product owners, risk teams, and senior leadership.",
    ],
  },
  {
    slug: "market-sizing-fundraising",
    number: "04",
    title: "Market Sizing & Fundraising Strategy",
    industry: "Artificial Intelligence / InsurTech",
    clientProfile: "Seed/Series A Startup",
    duration: "12 Months",
    context:
      "The CEO of an innovative AI-driven automotive insurance startup needed to position the company for a major capital raise.",
    challenge:
      "To attract institutional investors, the startup urgently needed to quantify its market opportunity, professionalize its financial reporting, and craft a compelling equity story.",
    approach:
      "Fiume partnered directly with the CEO to architect a comprehensive investor readiness strategy. We conducted deep-dive market research to accurately size the TAM and TOM. Concurrently, we completely restructured their P&L, balance sheet, and financial reporting systems, culminating in the creation of a premium, investor-ready pitch deck.",
    impact: [
      "Successfully secured a significant, confidential round of funding.",
      "Transformed opaque financials into highly transparent, institutional-grade reporting.",
      "Equipped leadership with a high-impact narrative and collateral for investor roadshows.",
    ],
  },
  {
    slug: "talent-acquisition-strategy",
    number: "05",
    title: "Data-Driven Talent Acquisition Strategy",
    industry: "Retail / FMCG",
    clientProfile: "Mid-Cap Supermarket Chain",
    duration: "3 Weeks (20 Days)",
    context:
      "Operating in a highly constrained labor market, the client was facing critical staffing shortages. Legacy recruitment agencies and traditional hiring channels were failing to yield qualified candidates.",
    challenge:
      "The company needed to rapidly pivot its talent acquisition strategy to bypass ineffective traditional channels and immediately capture a higher volume of quality applicants.",
    approach:
      "Fiume designed and deployed a disruptive, data-driven social media recruitment engine. We collaborated with leadership to define strict candidate personas, optimized digital ad spend, and launched highly targeted campaigns. Simultaneously, we built a custom data management pipeline to rapidly capture, screen, and filter inbound applications.",
    impact: [
      "Generated a record 700+ qualified applications within just 20 days.",
      "Dramatically reduced Cost Per Hire compared to traditional agency fees.",
      "Streamlined and modernized the end-to-end candidate evaluation process.",
    ],
  },
]

export function getCaseStudyBySlug(slug: string): CaseStudy | undefined {
  return caseStudies.find((cs) => cs.slug === slug)
}
