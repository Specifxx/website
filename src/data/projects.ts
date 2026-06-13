export type Project = {
  slug: string;
  title: string;
  blurb: string;
  description: string;
  domain: "Quant" | "ML / Data" | "Software";
  tags: string[];
  repo: string;
  demo?: string;
  featured?: boolean;
  metric?: { label: string; value: string };
};

export const projects: Project[] = [
  {
    slug: "skinport-trading-bot",
    title: "Skinport Trading Bot",
    blurb:
      "Sub-second arbitrage engine that snipes underpriced liquid items on a live marketplace.",
    description:
      "A real-time trading bot that continuously scans an online marketplace, identifies mispriced liquid items, and executes purchases in under a second to capture spread. Profits through arbitrage on the gap between listing and fair value.",
    domain: "Quant",
    tags: ["JavaScript", "Algorithmic Trading", "Arbitrage", "WebSockets", "Automation"],
    repo: "https://github.com/Specifxx/Skinport-trading-bot",
    featured: true,
    metric: { label: "Reaction time", value: "<1s" },
  },
  {
    slug: "csgoroll-profit-generator",
    title: "Statistical Edge Engine",
    blurb:
      "Probabilistic modelling + web scraping to maintain a measurable house-beating edge.",
    description:
      "A statistics-driven automation that combines web scraping with probability modelling to maintain a consistent 5–10% player edge against an online roulette platform. Achieved a documented 124% ROI over the tracked period.",
    domain: "Quant",
    tags: ["Python", "Statistics", "Probability", "Web Scraping", "Backtesting"],
    repo: "https://github.com/Specifxx/CSGORoll-Profit-Generator",
    featured: true,
    metric: { label: "Realized ROI", value: "124%" },
  },
  {
    slug: "parkinsons-prediction",
    title: "Parkinson's Disease Prediction",
    blurb:
      "ML pipeline predicting Parkinson's progression from biomedical voice measurements.",
    description:
      "COMP9417 major project: an end-to-end machine-learning pipeline that predicts Parkinson's disease indicators from biomedical voice features, covering feature engineering, model selection, and rigorous evaluation.",
    domain: "ML / Data",
    tags: ["Python", "scikit-learn", "Machine Learning", "Healthcare", "Feature Engineering"],
    repo: "https://github.com/Specifxx/COMP9417-Major-Project---Parkinson-s-Disease-Prediction",
    featured: true,
  },
  {
    slug: "chrome-dino-rl",
    title: "Chrome Dino — RL + Computer Vision",
    blurb:
      "Reinforcement-learning agent that masters the Chrome Dino game from raw pixels.",
    description:
      "A reinforcement-learning agent that learns to play the Chrome Dino game, using computer vision to extract game state from the screen in real time and an RL policy to time jumps and ducks.",
    domain: "ML / Data",
    tags: ["Python", "Reinforcement Learning", "Computer Vision", "OpenCV"],
    repo: "https://github.com/Specifxx/Mastering-the-Chrome-Dino-Game-using-RL-and-CV",
    featured: true,
  },
  {
    slug: "compare-empire",
    title: "CompareEmpire",
    blurb:
      "Price-comparison platform aggregating deals across categories and subsidiaries.",
    description:
      "A full-stack price-comparison platform — your destination to compare prices across categories, with sub-brands including RiftCompare and CamCompare. Built and deployed end-to-end on Vercel.",
    domain: "Software",
    tags: ["TypeScript", "Next.js", "Full-Stack", "Vercel"],
    repo: "https://github.com/Specifxx/CompareEmpire",
    demo: "https://compare-empire.vercel.app",
    featured: true,
  },
  {
    slug: "tcg-empire",
    title: "TCGEmpire",
    blurb: "Trading-card-game marketplace and price platform, live on Vercel.",
    description:
      "A full-stack TypeScript platform for the trading-card-game market, focused on pricing and discovery. Deployed and live.",
    domain: "Software",
    tags: ["TypeScript", "Next.js", "Full-Stack", "Vercel"],
    repo: "https://github.com/Specifxx/TCGEmpire",
    demo: "https://tcg-empire.vercel.app",
  },
  {
    slug: "predictive-modelling",
    title: "Predictive Modelling Project",
    blurb:
      "Econometrics major project applying regression and classification to real data.",
    description:
      "ECON3203 major project: a predictive-modelling study applying statistical learning, regression, and classification techniques to a real-world dataset, with emphasis on model interpretability and validation.",
    domain: "ML / Data",
    tags: ["Jupyter", "Predictive Modelling", "Econometrics", "Regression"],
    repo: "https://github.com/Specifxx/ECON3203-2022T3-Major-Project-Predictive-Modelling",
  },
  {
    slug: "collab-tool",
    title: "Collaborative Messaging Platform",
    blurb:
      "Discord-like collaboration tool with a custom bot API and game integration.",
    description:
      "COMP1531 major project: a Discord-style collaborative messaging tool. Contributed the bot API and an in-channel Hangman game feature, working across the backend REST API and feature integration.",
    domain: "Software",
    tags: ["TypeScript", "REST API", "Backend", "Teamwork"],
    repo: "https://github.com/Specifxx/COMP1531-2023T1-Major-Project",
  },
];

export const domains = ["All", "Quant", "ML / Data", "Software"] as const;
