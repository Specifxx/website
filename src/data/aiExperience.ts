export type AiEngagement = {
  client: string;
  role: string;
  period: string;
  context: string;
  contributions: string[];
  stack: string[];
  impact: string;
};

// Curated from Bill's full consulting history — only the engagements with a
// direct AI/ML/GenAI component are included here. General delivery/BA work
// (testing strategy, EDM tooling, data platform builds, etc.) lives in the
// main Work Experience timeline instead. Ordered most recent first.
export const professionalAiExperience: AiEngagement[] = [
  {
    client: "Australian State Government Insurance Company",
    role: "Data Analyst / Engineer — GenAI-Powered Legacy Migration",
    period: "Mar 2025 – Jun 2025",
    context:
      "A large-scale migration of on-premise data into a new Snowflake Enterprise Data Warehouse required converting a huge volume of legacy SAS scripts into SQL — a slow, error-prone task by hand.",
    contributions: [
      "Built a GenAI workflow using Anthropic's Claude 3.7 to convert legacy SAS scripts into Snowflake SQL at scale",
      "Owned PII-masking across hundreds of SAS files, designing a Python Regex–based solution to identify and mask/map sensitive data",
      "Supported the ETL team writing SQL stored procedures across 3 staging layers and 1 target layer to migrate data into production",
    ],
    stack: ["Claude 3.7", "Python (Regex)", "Snowflake SQL", "SAS"],
    impact:
      "Delivered productionised code in 50% less time than planned and a 50% reduction in resourcing cost — efficient enough that Bill was moved onto the ETL stream to support further activities off the back of it.",
  },
  {
    client: "Big 4 Australian Bank",
    role: "Business Analyst — Generative AI Risk & Compliance MVP",
    period: "Aug 2024 – Sep 2024",
    context:
      "16,000+ compliance incidents are reported annually at this bank; 75% require a compliance assessment taking 2.5–5 hours to complete by hand. The client needed a GenAI copilot to cut that time down.",
    contributions: [
      "Gathered requirements and translated them into delivery, bridging gaps between data scientists, solution architects, and Risk & Compliance business stakeholders",
      "Ran end-to-end testing and drove sign-off on production-gating artefacts (Test Plan, Test Approach, Detailed Technical Design, Test Completion Report)",
      "Ran daily standups and scrum ceremonies — backlog grooming, RAID tracking — to keep the build on schedule",
    ],
    stack: ["GenAI Copilot", "Confluence / Jira", "Agile / Scrum"],
    impact:
      "Shipped the first of 5 pioneer GenAI use cases piloted into production at the bank, establishing a repeatable GenAI solution pattern the Data Insights function could reuse for future use cases.",
  },
  {
    client: "Big 4 Australian Bank",
    role: "Gen AI Engineer — Policy Simplification POC",
    period: "Jul 2024 – Aug 2024",
    context:
      "The bank needed to summarise long, dense policy documents without losing their original intent or meaning — a task where getting the fidelity/compression trade-off wrong is costly.",
    contributions: [
      "Deployed LLM API endpoints in Azure ML Studio to summarise lengthy policy documents",
      "Built a chunking pipeline to break large PDF documents into inputs the endpoint could consume",
      "Designed evaluation metrics and acceptance criteria to benchmark GPT-4o, GPT-4, GPT-3.5, and Llama 3 on summarisation quality and length reduction",
    ],
    stack: ["Azure ML Studio", "GPT-4o / GPT-4 / GPT-3.5", "Llama 3", "Python"],
    impact:
      "Delivered a working POC alongside a model-agnostic evaluation framework the bank could reuse to benchmark future LLMs on document-compression tasks.",
  },
  {
    client: "Major Australian Property Development Company",
    role: "Data Strategy Consultant — ML & MLOps Advisory",
    period: "Jan 2023 – Feb 2023",
    context:
      "The client's Data Science team had built predictive ML models but needed help improving, communicating, and deriving ongoing value from them.",
    contributions: [
      "Evaluated the client's existing predictive ML modelling and MLOps processes",
      "Outlined recommendations to streamline modelling and MLOps workflows in Python",
      "Delivered a roadmap for more effective stakeholder communication and migration away from legacy systems",
    ],
    stack: ["Python", "MLOps Advisory", "Predictive Modelling"],
    impact:
      "Delivered a technical report and stakeholder presentation that gave the client's data science function a concrete roadmap for maturing its ML practice.",
  },
];

export type PersonalAiPractice = {
  title: string;
  period: string;
  description: string;
  highlights: string[];
  stack: string[];
};

export const personalAiExperience: PersonalAiPractice[] = [
  {
    title: "Agentic Development with Claude Code",
    period: "Ongoing",
    description:
      "Bill uses Claude Code as a daily agentic pair-programmer across every personal project he ships — not as an autocomplete tool, but as an agent that plans, edits, runs builds/tests, and drives git/CI end-to-end. This site is itself a live example: it was designed, built, content-audited, and deployed through extended agentic sessions with Claude Code — multi-step planning, tool-orchestrated edits across a whole codebase, automated verification (lint, build, Playwright-driven visual/responsiveness audits), and GitHub Actions deploys, all driven conversationally. The same practice is behind RiftCompare (riftcompare.com), a live Riftbound TCG price-comparison platform with 10,000+ monthly visits — Claude Code has been a hands-on development partner across its scraping pipeline, UI, and deployment, with Bill directing the architecture and reviewing every change.",
    highlights: [
      "Comfortable directing multi-step agentic workflows: planning, execution, and verification loops rather than single-shot prompts",
      "Hands-on with tool-use/orchestration patterns — file edits, shell commands, browser automation, CI/CD — chained together to ship real, deployed product",
      "RiftCompare (riftcompare.com) — a real, live product with real traffic, not a demo — built and iterated on with Claude Code as a development partner",
    ],
    stack: ["Claude Code", "Agentic workflows", "CI/CD", "Playwright"],
  },
];
