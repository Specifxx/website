export type Domain = "AI / ML" | "Quant" | "Software";

export type Project = {
  slug: string;
  title: string;
  blurb: string;
  description: string;
  domain: Domain;
  tags: string[];
  repo?: string;
  demo?: string;
  featured?: boolean;
  spotlight?: boolean;
  experimental?: boolean;
  audience?: string;
  highlights?: string[];
  metric?: { label: string; value: string };
};

export const projects: Project[] = [
  // ── Spotlight: the flagship live products ──────────────────────────────
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
    metric: { label: "Monthly visits", value: "10k+" },
    highlights: [
      "Daily multi-retailer scraping and price normalisation across dozens of stores and eBay",
      "Full card database with search across singles and sealed products (boxes, packs, Proving Grounds, Nexus Night)",
      "Direct buy-through links that send players to the cheapest retailer",
      "10,000+ monthly visits from the Riftbound community",
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
    tags: ["TypeScript", "Next.js", "Web Scraping", "Data Pipeline", "Vercel"],
    demo: "https://dexcompare.app",
    metric: { label: "Monthly visits", value: "2k+" },
  },

  // ── AI / ML ────────────────────────────────────────────────────────────
  {
    slug: "parkinsons-prediction",
    title: "Parkinson's Disease Prediction",
    blurb:
      "ML pipeline predicting Parkinson's progression from biomedical voice measurements.",
    description:
      "COMP9417 major project: an end-to-end machine-learning pipeline that predicts Parkinson's disease indicators from biomedical voice features, covering feature engineering, model selection, and rigorous evaluation.",
    domain: "AI / ML",
    tags: ["Python", "scikit-learn", "Machine Learning", "Healthcare"],
    repo: "https://github.com/Specifxx/COMP9417-Major-Project---Parkinson-s-Disease-Prediction",
  },
  {
    slug: "chrome-dino-rl",
    title: "Chrome Dino — RL + Computer Vision",
    blurb:
      "Reinforcement-learning agent that masters the Chrome Dino game from raw pixels.",
    description:
      "A reinforcement-learning agent that learns to play the Chrome Dino game, using computer vision to extract game state from the screen in real time and an RL policy to time jumps and ducks.",
    domain: "AI / ML",
    tags: ["Python", "Reinforcement Learning", "Computer Vision", "OpenCV"],
    repo: "https://github.com/Specifxx/Mastering-the-Chrome-Dino-Game-using-RL-and-CV",
  },
  {
    slug: "predictive-modelling",
    title: "Predictive Modelling Project",
    blurb:
      "Econometrics major project applying regression and classification to real data.",
    description:
      "ECON3203 major project: a predictive-modelling study applying statistical learning, regression, and classification techniques to a real-world dataset, with emphasis on model interpretability and validation.",
    domain: "AI / ML",
    tags: ["Jupyter", "Predictive Modelling", "Econometrics", "Regression"],
    repo: "https://github.com/Specifxx/ECON3203-2022T3-Major-Project-Predictive-Modelling",
  },

  // ── Quant & Trading ────────────────────────────────────────────────────
  {
    slug: "alpha-engine",
    title: "Alpha Engine",
    blurb:
      "Formula-driven equity analysis app: a 5-factor model, blended price targets, and an ODTE upside radar.",
    description:
      "A stock-analysis web app that ranks US and Australian equities with a transparent 5-factor model, blends four valuation approaches into price targets, and runs an ODTE (0–2 day) upside radar to filter names that have already made their expected move.",
    domain: "Quant",
    tags: ["Next.js 16", "React 19", "TypeScript", "Recharts", "Vercel"],
    repo: "https://github.com/Specifxx/janestreetmaxxing",
    demo: "https://janestreetmaxxing.vercel.app",
    featured: true,
  },
  {
    slug: "betarb",
    title: "Betarb",
    blurb:
      "Sports-analytics odds engine that models table-tennis outcomes and benchmarks its predictions against market pricing.",
    description:
      "A self-hosted analytics pipeline for Czech Liga Pro table-tennis: scrapes historical results, engineers player-form and fatigue features, and blends Elo ratings with logistic regression and gradient boosting into independent match-outcome probabilities — benchmarked against market pricing to measure model calibration.",
    domain: "Quant",
    tags: ["Python", "FastAPI", "Elo + ML", "Playwright", "SQLite"],
    repo: "https://github.com/Specifxx/Betarb",
    featured: true,
    experimental: true,
  },
  {
    slug: "skinport-trading-bot",
    title: "Skinport Trading Bot",
    blurb:
      "Sub-second arbitrage engine that reacts to real-time price discrepancies on a live marketplace.",
    description:
      "A real-time trading bot that continuously monitors a live marketplace's order flow, detects listings priced below fair value, and executes purchases in under a second — an exercise in low-latency market-data processing and automated execution.",
    domain: "Quant",
    tags: ["JavaScript", "Algorithmic Trading", "Arbitrage", "WebSockets"],
    repo: "https://github.com/Specifxx/Skinport-trading-bot",
    metric: { label: "Reaction time", value: "<1s" },
    experimental: true,
  },
  {
    slug: "csgoroll-profit-generator",
    title: "Statistical Edge Engine",
    blurb:
      "Probabilistic modelling and backtesting engine for detecting measurable statistical edges in randomized processes.",
    description:
      "A statistics-driven research project combining automated data collection with probability modelling to detect and backtest a measurable statistical edge in a randomized online game — focused on rigorous backtesting methodology and edge quantification rather than any single outcome.",
    domain: "Quant",
    tags: ["Python", "Statistics", "Probability", "Backtesting"],
    repo: "https://github.com/Specifxx/CSGORoll-Profit-Generator",
    experimental: true,
  },
  {
    slug: "value-spread-betting",
    title: "Odds Arbitrage Scanner",
    blurb:
      "Real-time odds-monitoring pipeline that benchmarks Australian sportsbook pricing against a reference market and alerts on statistical edges.",
    description:
      "An automation that continuously compares real-time odds across a reference market and Australian sportsbooks, flagging statistically significant pricing discrepancies above a configurable threshold and pushing alerts — an exercise in real-time data-pipeline engineering and automated monitoring.",
    domain: "Quant",
    tags: ["Node.js", "Express", "Odds Modelling", "Automation"],
    repo: "https://github.com/Specifxx/valuespreadbetting",
    experimental: true,
  },

  // ── Software & Platforms ───────────────────────────────────────────────
  {
    slug: "airfare-compare",
    title: "AirfareCompare",
    blurb:
      "Flight comparison that ranks fares on the true all-in price, with layover scoring and carbon impact.",
    description:
      "A flight-comparison platform that ranks airfares by their true all-in price — including taxes, baggage and seat fees — with honest price history, layover-quality scoring, multi-airport search and carbon-impact rankings, tackling the transparency gaps in tools like Google Flights and Skyscanner.",
    domain: "Software",
    tags: ["Next.js", "TypeScript", "Tailwind", "Vercel"],
    repo: "https://github.com/Specifxx/AirfareCompare",
    demo: "https://airfare-compare.vercel.app",
    featured: true,
  },
  {
    slug: "protocol",
    title: "Protocol",
    blurb:
      "Zero-dependency supplement tracker with real-time supply alerts and one-tap cheapest-price reorder.",
    description:
      "A full-stack supplement-tracking and biohacking app for Australian users: real-time supply tracking, automatic low-stock alerts, and one-tap reordering at the cheapest verified retailer price — built from scratch on Node.js with zero npm dependencies and custom HMAC-signed sessions.",
    domain: "Software",
    tags: ["Node.js", "Zero-Dependency", "Custom Auth", "Vanilla JS"],
    repo: "https://github.com/Specifxx/Protocol",
  },
  {
    slug: "buzzer",
    title: "Buzzer",
    blurb:
      "Automated print-on-demand studio turning NBA data into minimalist posters, published daily via Shopify.",
    description:
      "An automated print-on-demand business that renders minimalist data-art from iconic NBA moments using only factual data (scores, dates, coordinates). It scores moments, renders posters with Cairo, and publishes drafts to Shopify via Printify on a daily GitHub Actions cron.",
    domain: "Software",
    tags: ["Python", "Cairo", "NBA API", "Shopify / Printify", "Automation"],
    repo: "https://github.com/Specifxx/Buzzer",
    demo: "https://specifxx.github.io/Buzzer/",
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

export const domains = ["All", "AI / ML", "Quant", "Software"] as const;
