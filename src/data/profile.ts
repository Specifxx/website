export const profile = {
  name: "Bill Yang",
  shortName: "Bill",
  title: "AI & Data Professional at Deloitte",
  tagline:
    "I ensure delivery of complex data & AI programs for financial-services, insurance, and energy clients — managing stakeholders from C-suite to engineers and turning ambiguous problems into shipped outcomes.",
  location: "Sydney, Australia",
  email: "Bill.jyang.r@gmail.com",
  github: "https://github.com/Specifxx",
  githubUser: "Specifxx",
  linkedin: "https://www.linkedin.com/in/billyangdata/",
  linkedinUser: "billyangdata",
  resumeUrl: "/resume.pdf", // add the actual file at public/resume.pdf
  available: false,
  stats: [
    { label: "Currently", value: "Deloitte" },
    { label: "Live products shipped", value: "7+" },
    {
      label: "Monthly visits across live products",
      value: "12k+",
      links: [
        { label: "RiftCompare", url: "https://riftcompare.com" },
        { label: "DexCompare", url: "https://dexcompare.app" },
      ],
    },
  ],
} as const;

export const about = {
  paragraphs: [
    "I'm an AI & Data Professional at Deloitte, ensuring delivery of complex data & AI programs for major financial-services, insurance, and energy clients — managing stakeholders from C-suite to engineers and turning ambiguous business problems into shipped outcomes.",
    "Outside of client work, I ship a lot: a family of live price-comparison platforms (RiftCompare, DexCompare), and some personal R&D in quantitative systems. I like problems where milliseconds and basis points matter.",
    "I studied Data Science & Software at UNSW, and I'm always up for talking shop on delivery, stakeholder management, and applied data & AI.",
  ],
  highlights: [
    "Delivery & program management",
    "Stakeholder & executive engagement",
    "Technical fluency: data engineering & AI",
  ],
} as const;

export type Hobby = {
  icon: "activity" | "volleyball" | "book" | "cards" | "footprints" | "waves";
  title: string;
  detail?: string;
};

export const hobbies: Hobby[] = [
  { icon: "activity", title: "Badminton" },
  { icon: "volleyball", title: "Basketball", detail: "New York Knicks fan" },
  {
    icon: "book",
    title: "Reading",
    detail:
      "Fiction & non-fiction — currently reading The Witcher; favourite non-fiction is Emotional Intelligence by Daniel Goleman",
  },
  { icon: "cards", title: "Strategy Card Games" },
  { icon: "footprints", title: "Running", detail: "In winter" },
  { icon: "waves", title: "Swimming", detail: "In summer" },
];

export type SkillGroup = {
  category: string;
  items: string[];
};

export const skills: SkillGroup[] = [
  {
    category: "Languages",
    items: ["Python", "TypeScript", "JavaScript", "SQL", "R", "C"],
  },
  {
    category: "Data Science & AI",
    items: [
      "scikit-learn",
      "PyTorch",
      "Pandas",
      "LLMs / Claude",
      "OpenCV",
      "Reinforcement Learning",
    ],
  },
  {
    category: "Quant & Modelling",
    items: [
      "Statistical Arbitrage",
      "Probabilistic Modelling",
      "Elo Rating Systems",
      "Predictive Modelling",
      "Backtesting",
    ],
  },
  {
    category: "Engineering & Platform",
    items: ["Next.js", "React", "FastAPI", "Prisma", "Playwright", "Vercel"],
  },
];

export type TimelineItem = {
  period: string;
  title: string;
  org: string;
  description: string;
};

export const timeline: TimelineItem[] = [
  {
    period: "Feb 2023 – Present",
    title: "Data & AI Specialist",
    org: "Deloitte",
    description:
      "Delivering data and AI solutions for clients — building machine-learning models, analytics, and data products that drive measurable business outcomes.",
  },
  {
    period: "2022 — 2025",
    title: "B. Data Science & Software",
    org: "UNSW Sydney",
    description:
      "Studied across machine learning (COMP9417), software engineering (COMP1531), and econometric modelling (ECON3203), shipping production-grade projects alongside coursework.",
  },
  {
    period: "Ongoing",
    title: "Independent Quant & Systems Projects",
    org: "Self-directed",
    description:
      "Designing and shipping algorithmic trading bots, statistical edge engines, and full-stack platforms — owning everything from data collection and modelling to deployment.",
  },
];
