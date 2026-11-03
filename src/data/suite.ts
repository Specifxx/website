// Compare Empire: the suite of price-comparison websites Bill builds and runs.
//
// Every number here is real and sourced. Do not round up or invent figures:
//   - stores / products / regions: each site's own committed price data and
//     health monitors, read 3 Nov 2026 (stores = stores with a priced listing in
//     the latest import; products = items in the site's live catalogue).
//   - visitors: Vercel Web Analytics, 14 days 15–29 Oct 2026, for the nine
//     sites that had analytics switched on (sum of the per-site figures).
//   - RiftCompare traffic: Vercel Web Analytics screenshot, last 90 days.
// Update `asOf` whenever the figures are refreshed.

export const suiteAsOf = "3 Nov 2026";

export type Cluster = "Trading cards" | "Hobby" | "Tech";

export type SuiteSite = {
  name: string;
  url: string;
  niche: string;
  cluster: Cluster;
  /** Short, factual stat chips shown on the card. */
  stats: string[];
  /** Brand colour used for the card's accent dot. */
  color: string;
};

export const suiteStats = [
  { value: "12", label: "Live price-comparison websites" },
  {
    value: "22.8k",
    label: "Visitors in 14 days",
    note: "Vercel Analytics, 15–29 Oct 2026, 9 sites measured",
  },
  {
    value: "61k+",
    label: "Cards & products price-tracked",
    note: "Across the 11 catalogue sites",
  },
  {
    value: "884",
    label: "Stores on the largest site",
    note: "DexCompare; every site reads hundreds",
  },
  { value: "7", label: "Regions", note: "US · UK · CA · AU · NZ · EU · SG" },
] as const;

export const flagship = {
  name: "RiftCompare",
  url: "https://riftcompare.com",
  niche: "Riftbound trading card game",
  description:
    "The flagship. Every Riftbound card, plus sealed product, priced across 281 stores in six regions, plus eBay, refreshed daily. Players search a card and land on the cheapest place to buy it.",
  metric: { value: "25k+", label: "Monthly visits" },
  highlights: [
    "1,741 cards plus sealed product, 281 stores, 6 regions",
    "13,211 visitors in the 14 days to 29 Oct, the most in the suite",
    "44,939 visitors in the last 90 days, up 689%, earning through retailer affiliate links",
    "Price history, alerts, collection tracker and a Pro tier on Stripe",
  ],
  proof: {
    src: "/riftcompare-analytics.png",
    alt: "Vercel Analytics for riftcompare.com over the last 90 days: 44,939 visitors (+689%) and 126,263 page views (+459%), with daily traffic climbing from ~200 to 1,000+",
    caption:
      "Vercel Analytics · last 90 days (Jul–Oct 2026) · 44,939 visitors · 126,263 page views",
    width: 1578,
    height: 486,
  },
} as const;

export const suiteSites: SuiteSite[] = [
  {
    name: "DexCompare",
    url: "https://dexcompare.app",
    niche: "Pokémon TCG sealed product",
    cluster: "Trading cards",
    stats: ["884 stores", "9,396 products", "7 regions"],
    color: "#e3350d",
  },
  {
    name: "OP Compare",
    url: "https://opcompare.app",
    niche: "One Piece Card Game",
    cluster: "Trading cards",
    stats: ["417 stores", "7,358 cards", "6 regions"],
    color: "#c8102e",
  },
  {
    name: "MTG Compare",
    url: "https://mtgcompare.app",
    niche: "Magic: The Gathering sealed",
    cluster: "Trading cards",
    stats: ["799 stores", "4,777 products", "7 regions"],
    color: "#b4541c",
  },
  {
    name: "YGO Compare",
    url: "https://ygocompare.com",
    niche: "Yu-Gi-Oh! TCG",
    cluster: "Trading cards",
    stats: ["475 stores", "16,496 products", "6 regions"],
    color: "#7c3aed",
  },
  {
    name: "Lorcana Compare",
    url: "https://lorcanacompare.com",
    niche: "Disney Lorcana",
    cluster: "Trading cards",
    stats: ["494 stores", "3,987 products", "6 regions"],
    color: "#2563eb",
  },
  {
    name: "Gundam Compare",
    url: "https://gundamcompare.com",
    niche: "Gundam Card Game and Gunpla kits",
    cluster: "Trading cards",
    stats: ["225 stores", "2,330 products", "2,140 kits"],
    color: "#1d4ed8",
  },
  {
    name: "Cyberpunk Compare",
    url: "https://cyberpunkcompare.com",
    niche: "Cyberpunk TCG",
    cluster: "Trading cards",
    stats: ["138 stores", "478 products", "6 regions"],
    color: "#eab308",
  },
  {
    name: "WargameCompare",
    url: "https://wargamecompare.com",
    niche: "Miniature wargames",
    cluster: "Hobby",
    stats: ["386 stores", "6,382 products", "5 regions"],
    color: "#64748b",
  },
  {
    name: "FigureCompare",
    url: "https://figurecompare.com",
    niche: "Anime figures",
    cluster: "Hobby",
    stats: ["135 stores", "4,513 figures", "7 regions"],
    color: "#e11d48",
  },
  {
    name: "Compare Empire",
    url: "https://compareempire.com",
    niche: "Tech and appliances",
    cluster: "Tech",
    stats: ["350+ retailers", "32 categories", "AU · US · UK"],
    color: "#0d9488",
  },
  {
    name: "CamCompare",
    url: "https://www.camcompare.app",
    niche: "Cameras and lenses",
    cluster: "Tech",
    stats: ["1,033 cameras & lenses", "5 markets"],
    color: "#0f766e",
  },
];

export const suiteHow = [
  "Daily imports on GitHub Actions read store catalogues, match each listing to exactly one product, and refuse anything ambiguous",
  "Static pages on Vercel's CDN with the data committed as files, so twelve sites run for a few dollars a day",
  "Self-monitoring: every site checks its own imports, limits and uptime and emails me only when something breaks",
  "Built and operated with Claude Code as my engineering team",
];
