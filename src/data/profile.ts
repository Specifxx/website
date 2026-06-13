export const profile = {
  name: "Bill Yang",
  shortName: "Bill",
  roles: [
    "Data & AI Specialist",
    "Data Scientist",
    "Machine Learning Engineer",
    "Software Engineer",
  ],
  tagline:
    "Data & AI Specialist at Deloitte. I turn data into decisions — and build systems with an edge, from machine-learning pipelines to sub-second trading bots.",
  location: "Sydney, Australia",
  email: "bill.jyang101@gmail.com",
  github: "https://github.com/Specifxx",
  githubUser: "Specifxx",
  linkedin: "https://www.linkedin.com/in/billyangdata/",
  linkedinUser: "billyangdata",
  resumeUrl: "", // drop a /resume.pdf in /public and set this to "/resume.pdf"
  available: false,
  stats: [
    { label: "Currently", value: "Deloitte" },
    { label: "Repositories shipped", value: "15+" },
    { label: "Peak strategy ROI", value: "124%" },
    { label: "Snipe latency", value: "<1s" },
  ],
} as const;

export const about = {
  paragraphs: [
    "I'm a Data & AI Specialist at Deloitte, where I help turn messy, real-world data into decisions — building machine-learning models, analytics, and data products for clients across industries.",
    "Outside of client work, I build systems that find an edge: real-time trading bots that react in under a second, statistical models with measurable returns, and full-stack products shipped end to end. I like problems where milliseconds and basis points matter.",
    "I trained in Data Science & Software at UNSW, and I'm always up for talking shop on applied AI, data engineering, and quantitative systems.",
  ],
  highlights: [
    "Applied AI & machine learning",
    "Data science & analytics",
    "Quantitative & statistical modelling",
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
    category: "Data Science & AI",
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
    category: "Engineering & Platform",
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
    period: "Present",
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
