export const profile = {
  name: "Bill Yang",
  shortName: "Bill",
  title: "Senior Consultant, Data & AI at Novigi",
  tagline:
    "By day I lead delivery of data and AI programs, from the C-suite to the engineers. The rest of the time I build Compare Empire, a suite of 14 price-comparison websites that shoppers in seven regions use every day.",
  venture: { name: "Compare Empire", detail: "Founder · 14 live sites" },
  location: "Sydney, Australia",
  email: "Bill.jyang.r@gmail.com",
  github: "https://github.com/Specifxx",
  githubUser: "Specifxx",
  linkedin: "https://www.linkedin.com/in/billyangdata/",
  linkedinUser: "billyangdata",
  resumeUrl: "/resume.pdf", // add the actual file at public/resume.pdf
  available: false,
  stats: [
    { label: "Currently", value: "Novigi" },
    { label: "Compare Empire sites live", value: "14" },
    {
      label: "Visitors across the suite in 14 days (15–29 Oct 2026)",
      value: "22.8k",
    },
    {
      label: "Monthly visits to the flagship",
      value: "25k+",
      links: [{ label: "RiftCompare", url: "https://riftcompare.com" }],
    },
  ],
} as const;

export const about = {
  paragraphs: [
    "I'm a Senior Consultant, Data & AI at Novigi. I make sure complex data and AI programs actually land: I keep the C-suite and the engineers on the same page and turn vague business problems into shipped outcomes.",
    "Outside client work I founded Compare Empire, a suite of 14 price-comparison websites for trading cards, hobby gear, tech and K-beauty. RiftCompare is the flagship; DexCompare, OP Compare, MTG Compare, CamCompare and the rest each track hundreds of stores a day. I run the whole thing as one person, with Claude Code as my engineering team.",
    "I studied Data Science & Software at UNSW. Happy to talk delivery, stakeholder management, applied AI, or how to run fourteen websites for a few dollars a day.",
  ],
  highlights: [
    "Delivery & program management",
    "Stakeholder & executive engagement",
    "Technical fluency: data engineering & AI",
    "Founder and operator: 14 live websites",
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
    period: "Aug 2026 – Present",
    title: "Senior Consultant, Data & AI",
    org: "Novigi",
    description:
      "Leading data and AI consulting engagements for clients as a Senior Consultant.",
  },
  {
    period: "Feb 2023 – Aug 2026",
    title: "Data & AI Specialist",
    org: "Deloitte",
    description:
      "Delivered data and AI solutions for clients — building machine-learning models, analytics, and data products that drove measurable business outcomes.",
  },
  {
    period: "2022 — 2025",
    title: "B. Data Science & Software",
    org: "UNSW Sydney",
    description:
      "Studied across machine learning (COMP9417), software engineering (COMP1531), and econometric modelling (ECON3203), shipping production-grade projects alongside coursework.",
  },
  {
    period: "2026 – Present",
    title: "Founder",
    org: "Compare Empire",
    description:
      "Built and run a suite of 14 price-comparison websites (RiftCompare, DexCompare, OP Compare, MTG Compare and more) across seven regions, from data pipelines and product matching to SEO, affiliate partnerships and operations.",
  },
  {
    period: "Ongoing",
    title: "Independent Quant & Systems Projects",
    org: "Self-directed",
    description:
      "Designing and shipping algorithmic trading bots, statistical edge engines, and full-stack platforms — owning everything from data collection and modelling to deployment.",
  },
];
