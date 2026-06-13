export type Project = {
  slug: string;
  title: string;
  blurb: string;
  description: string;
  domain: "Quant" | "ML / Data" | "Software";
  tags: string[];
  repo?: string;
  demo?: string;
  featured?: boolean;
  spotlight?: boolean;
  audience?: string;
  highlights?: string[];
  metric?: { label: string; value: string };
};

export const projects: Project[] = [
  {
    slug: "riftcompare",
    title: "RiftCompare",
    blurb:
      "Live price-comparison engine for Riftbound, the League of Legends TCG — used by thousands of players.",
    description:
      "A live price-comparison platform for Riftbound (the League of Legends trading card game). It aggregates and normalises prices for every card across dozens of retailers plus eBay (AU / NZ / US), refreshes daily, and routes players straight to the cheapest place to buy singles and sealed product.",
    domain: "Software",
    audience: "Riftbound · League of Legends TCG",
    tags: ["TypeScript", "Next.js", "Web Scraping", "Data Pipeline", "Vercel"],
    demo: "https://riftcompare.com",
    spotlight: true,
    featured: true,
    metric: { label: "Community visits", value: "10k+" },
    highlights: [
      "Daily multi-retailer scraping and price normalisation across dozens of stores and eBay",
      "Full card database with search across singles and sealed products (boxes, packs, Proving Grounds, Nexus Night)",
      "Direct buy-through links that send players to the cheapest retailer",
      "10,000+ organic visits from the Riftbound community",
    ],
  },
  {
    slug: "dexcompare",
    title: "DexCompare",
    blurb:
      "Pokémon TCG price-comparison platform with a live card-value checker across 29+ stores.",
    description:
      "A price-comparison platform for the Pokémon Trading Card Game. It tracks live prices for a comprehensive card database across 29+ US retailers and eBay, with a free value checker that surfaces real market value and the cheapest place to buy by card name and collector number.",
    domain: "Software",
    audience: "Pokémon TCG",
    tags: ["TypeScript", "Next.js", "Web Scraping", "Data Pipeline", "Vercel"],
    demo: "https://dexcompare.app",
    spotlight: true,
    featured: true,
    metric: { label: "Community visits", value: "2k+" },
    highlights: [
      "Live prices aggregated across 29+ US retailers and eBay US",
      "Free card-value checker by card name and collector number",
      "Compare singles, booster boxes, ETBs and bundles in one place",
      "2,000+ visits from Pokémon collectors and players",
    ],
  },
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
  },
  {
    slug: "compare-empire",
    title: "CompareEmpire",
    blurb:
      "The platform behind RiftCompare and DexCompare — a reusable price-comparison engine.",
    description:
      "The umbrella platform powering RiftCompare, DexCompare and more: a reusable price-comparison engine that scrapes, normalises and serves live pricing across retailers, deployed as multiple consumer-facing sites.",
    domain: "Software",
    tags: ["TypeScript", "Next.js", "Full-Stack", "Vercel"],
    repo: "https://github.com/Specifxx/CompareEmpire",
    demo: "https://compare-empire.vercel.app",
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

export const spotlightProjects = projects.filter((p) => p.spotlight);
export const gridProjects = projects.filter((p) => !p.spotlight);

export const domains = ["All", "Quant", "ML / Data", "Software"] as const;
