export const profile = {
  name: "Bill Yang",
  shortName: "Bill",
  roles: [
    "Data Scientist",
    "Software Engineer",
    "Quantitative Developer",
    "Full-Stack Builder",
  ],
  tagline:
    "Data Science & Software at UNSW. I build systems that find an edge — from sub-second trading bots to machine-learning pipelines and full-stack products.",
  location: "Sydney, Australia",
  email: "bill.jyang101@gmail.com",
  github: "https://github.com/Specifxx",
  githubUser: "Specifxx",
  resumeUrl: "", // drop a /resume.pdf in /public and set this to "/resume.pdf"
  available: true,
  stats: [
    { label: "Repositories shipped", value: "15+" },
    { label: "Peak strategy ROI", value: "124%" },
    { label: "Snipe latency", value: "<1s" },
    { label: "Domains", value: "DS · SWE · Quant" },
  ],
} as const;

export const about = {
  paragraphs: [
    "I'm a Data Science & Software student at UNSW with a builder's obsession for finding and exploiting structure in data. My work sits at the intersection of quantitative modelling, machine learning, and production software — whether that's a statistical edge engine, a real-time arbitrage bot, or a full-stack web platform.",
    "I like problems where milliseconds and basis points matter. I've built trading systems that react in under a second, modelled probabilistic edges that returned triple-digit ROI, and trained ML pipelines on everything from biomedical signals to reinforcement-learning agents.",
    "Currently looking for roles in quantitative development, data science, and software engineering where I can ship rigorous, measurable systems.",
  ],
  highlights: [
    "Quantitative & statistical modelling",
    "Machine learning & reinforcement learning",
    "Low-latency automation",
    "Full-stack TypeScript / Next.js",
  ],
} as const;

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
    category: "Data Science & ML",
    items: [
      "scikit-learn",
      "PyTorch",
      "Pandas",
      "NumPy",
      "OpenCV",
      "Reinforcement Learning",
    ],
  },
  {
    category: "Quant & Modelling",
    items: [
      "Statistical Arbitrage",
      "Probabilistic Modelling",
      "Predictive Modelling",
      "Econometrics",
      "Backtesting",
    ],
  },
  {
    category: "Web & Platform",
    items: ["Next.js", "React", "Node.js", "REST APIs", "Vercel", "Git"],
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
    period: "2022 — Present",
    title: "B. Data Science & Software",
    org: "UNSW Sydney",
    description:
      "Coursework and major projects across machine learning (COMP9417), software engineering (COMP1531), and econometric modelling (ECON3203). Building production-grade projects alongside academic work.",
  },
  {
    period: "Ongoing",
    title: "Independent Quant & Systems Projects",
    org: "Self-directed",
    description:
      "Designing and shipping algorithmic trading bots, statistical edge engines, and full-stack platforms — owning everything from data collection and modelling to deployment.",
  },
];
