// Compare Empire: the suite of price-comparison websites Bill builds and runs.
//
// Every number here is real and sourced. Do not round up or invent figures.
//
// LIVE figures (stores, products, last update) come from src/data/suite-live.json,
// which .github/workflows/suite-stats.yml rewrites once a day from the public
// data each site's own import commits to GitHub (scripts/suite-stats.mjs).
// The `fallback` chips below are shown only for a site the script could not
// read; Compare Empire (a private repository) always shows its own chips.
//
// HAND-KEPT figures:
//   - visitors: Vercel Web Analytics, 14 days 15–29 Oct 2026, for the nine
//     sites that had analytics switched on (sum of the per-site figures).
//   - RiftCompare traffic: Vercel Web Analytics screenshot, last 90 days.
// Update `visitorsAsOf` whenever those are refreshed.

import live from "./suite-live.json";

export const visitorsAsOf = "15–29 Oct 2026";

export type Cluster = "Trading cards" | "Hobby" | "Tech" | "Beauty";

export type LiveSite = {
  stores: number | null;
  products: number | null;
  updatedAt: string | null;
  error?: string;
};

export type SuiteSite = {
  /** Key in suite-live.json; omitted for a site the script cannot read. */
  key?: keyof typeof live.sites;
  name: string;
  url: string;
  niche: string;
  cluster: Cluster;
  /** What "products" means on this site, for the live chip: "cards & sealed", "figures"… */
  unit: string;
  /** Hand-written chips, shown only when there is no live figure. */
  fallback: string[];
  /** Brand colour used for the card's accent dot. */
  color: string;
};

export const suiteLive = live as {
  v: 1;
  fetchedAt: string;
  sites: Record<string, LiveSite>;
};

export const flagship = {
  key: "rift" as const,
  name: "RiftCompare",
  url: "https://riftcompare.com",
  niche: "Riftbound trading card game",
  description:
    "The flagship. Every Riftbound card, plus sealed product, priced across hundreds of stores in six regions, plus eBay, refreshed daily. Players search a card and land on the cheapest place to buy it.",
  metric: { value: "25k+", label: "Monthly visits" },
  highlights: [
    "Every card and sealed product, six regions, hundreds of stores",
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
    key: "dex",
    name: "DexCompare",
    url: "https://dexcompare.app",
    niche: "Pokémon TCG sealed product",
    cluster: "Trading cards",
    unit: "products",
    fallback: ["884 stores", "9,396 products", "7 regions"],
    color: "#e3350d",
  },
  {
    key: "op",
    name: "OP Compare",
    url: "https://opcompare.app",
    niche: "One Piece Card Game",
    cluster: "Trading cards",
    unit: "cards & sealed",
    fallback: ["417 stores", "7,358 cards", "6 regions"],
    color: "#c8102e",
  },
  {
    key: "mtg",
    name: "MTG Compare",
    url: "https://mtgcompare.app",
    niche: "Magic: The Gathering sealed",
    cluster: "Trading cards",
    unit: "products",
    fallback: ["799 stores", "4,777 products", "7 regions"],
    color: "#b4541c",
  },
  {
    key: "ygo",
    name: "YGO Compare",
    url: "https://ygocompare.com",
    niche: "Yu-Gi-Oh! TCG",
    cluster: "Trading cards",
    unit: "cards & sealed",
    fallback: ["475 stores", "16,496 products", "6 regions"],
    color: "#7c3aed",
  },
  {
    key: "lorcana",
    name: "Lorcana Compare",
    url: "https://lorcanacompare.com",
    niche: "Disney Lorcana",
    cluster: "Trading cards",
    unit: "cards & sealed",
    fallback: ["494 stores", "3,987 products", "6 regions"],
    color: "#2563eb",
  },
  {
    key: "bandai",
    name: "BandaiCompare",
    url: "https://bandaicompare.com",
    niche: "Union Arena, Dragon Ball Super Fusion World and Digimon",
    cluster: "Trading cards",
    unit: "cards & sealed",
    fallback: ["317 stores", "9,972 cards & sealed", "6 regions"],
    color: "#e8893a",
  },
  {
    key: "gundam",
    name: "Gundam Compare",
    url: "https://gundamcompare.com",
    niche: "Gundam Card Game and Gunpla kits",
    cluster: "Trading cards",
    unit: "cards & sealed",
    fallback: ["225 stores", "2,330 products", "2,140 kits"],
    color: "#1d4ed8",
  },
  {
    key: "cyberpunk",
    name: "Cyberpunk Compare",
    url: "https://cyberpunkcompare.com",
    niche: "Cyberpunk TCG",
    cluster: "Trading cards",
    unit: "cards & sealed",
    fallback: ["160 stores", "478 products", "6 regions"],
    color: "#eab308",
  },
  {
    key: "wargame",
    name: "WargameCompare",
    url: "https://wargamecompare.com",
    niche: "Miniature wargames",
    cluster: "Hobby",
    unit: "products",
    fallback: ["386 stores", "6,382 products", "5 regions"],
    color: "#64748b",
  },
  {
    key: "figure",
    name: "FigureCompare",
    url: "https://figurecompare.com",
    niche: "Anime figures",
    cluster: "Hobby",
    unit: "figures",
    fallback: ["135 stores", "4,513 figures", "7 regions"],
    color: "#e11d48",
  },
  {
    key: "kaeyoung",
    name: "KaeYoung",
    url: "https://kaeyoung.com",
    niche: "Korean skincare and K-beauty",
    cluster: "Beauty",
    unit: "products",
    fallback: ["137 stores", "10,886 products", "6 regions"],
    color: "#e0607e",
  },
  {
    name: "Compare Empire",
    url: "https://compareempire.com",
    niche: "Tech and appliances",
    cluster: "Tech",
    unit: "products",
    fallback: ["350+ retailers", "32 categories", "AU · US · UK"],
    color: "#0d9488",
  },
  {
    key: "cam",
    name: "CamCompare",
    url: "https://www.camcompare.app",
    niche: "Cameras and lenses",
    cluster: "Tech",
    unit: "cameras & lenses",
    fallback: ["1,033 cameras & lenses", "5 markets"],
    color: "#0f766e",
  },
];

/** Every site, flagship included. */
export const SITE_COUNT = suiteSites.length + 1;

const fmt = (n: number) => n.toLocaleString("en-AU");

/** The live chips for a site card, or its hand-written fallback. */
export function siteChips(site: SuiteSite): { chips: string[]; live: boolean } {
  const l = site.key ? suiteLive.sites[site.key] : undefined;
  if (!l || l.stores == null || l.products == null) return { chips: site.fallback, live: false };
  return { chips: [`${fmt(l.stores)} stores`, `${fmt(l.products)} ${site.unit}`], live: true };
}

/** Sum of a live figure across the sites the script read, and how many that was. */
function liveSum(field: "stores" | "products"): { total: number; sites: number } {
  let total = 0;
  let sites = 0;
  for (const s of Object.values(suiteLive.sites)) {
    const v = s[field];
    if (typeof v === "number") {
      total += v;
      sites++;
    }
  }
  return { total, sites };
}

const products = liveSum("products");
const largest = Object.entries(suiteLive.sites).reduce<{ key: string; stores: number } | null>(
  (best, [key, s]) => (typeof s.stores === "number" && (!best || s.stores > best.stores) ? { key, stores: s.stores } : best),
  null,
);
const largestName =
  largest ? (largest.key === "rift" ? flagship.name : (suiteSites.find((s) => s.key === largest.key)?.name ?? largest.key)) : null;

/** The headline strip. Live figures carry a `live` flag so the UI can say so. */
export const suiteStats = [
  { value: String(SITE_COUNT), label: "Live price-comparison websites" },
  {
    value: "22.8k",
    label: "Visitors in 14 days",
    note: `Vercel Analytics, ${visitorsAsOf}, 9 sites measured`,
  },
  {
    value: products.total >= 1000 ? `${Math.floor(products.total / 1000)}k+` : fmt(products.total),
    label: "Cards & products price-tracked",
    note: `Across the ${products.sites} sites read today`,
    live: true,
  },
  {
    value: largest ? fmt(largest.stores) : "–",
    label: "Stores on the largest site",
    note: largestName ? `${largestName}; every site reads hundreds` : "",
    live: true,
  },
  { value: "7", label: "Regions", note: "US · UK · CA · AU · NZ · EU · SG" },
] as const;

export const suiteHow = [
  "Daily imports on GitHub Actions read store catalogues, match each listing to exactly one product, and refuse anything ambiguous",
  "Static pages on Vercel's CDN with the data committed as files, so fourteen sites run for a few dollars a day",
  "Self-monitoring: every site checks its own imports, limits and uptime and emails me only when something breaks",
  "Built and operated with Claude Code as my engineering team",
];
