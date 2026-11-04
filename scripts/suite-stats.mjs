// Reads what every Compare Empire site publishes about itself and writes
// src/data/suite-live.json, which the Compare Empire section renders.
//
// Every figure comes from a public file each site's own daily import commits
// (its data/… meta file on GitHub). Nothing is estimated: a site whose
// files cannot be read keeps the hand-written chips in src/data/suite.ts and
// is marked unread in the JSON. Run by .github/workflows/suite-stats.yml once
// a day (and by hand with `node scripts/suite-stats.mjs`).
//
// Counting rules, so the numbers mean the same thing on every card:
//   stores   = stores whose latest import read successfully
//   products = items in the site's live catalogue (cards + sealed for the card
//              sites; products, figures, cameras & lenses elsewhere)
//   updatedAt = when the site's import last wrote its data

import fs from "node:fs/promises";
import path from "node:path";
import { gunzipSync } from "node:zlib";

const RAW = "https://raw.githubusercontent.com/Specifxx";
const API = "https://api.github.com/repos/Specifxx";
const OUT = path.join(process.cwd(), "src/data/suite-live.json");

const UA = { "user-agent": "billyang.site suite-stats" };
// Only the API needs the token (rate limit); raw files are public.
const headersFor = (url) =>
  url.startsWith(API) && process.env.GITHUB_TOKEN ? { ...UA, authorization: `Bearer ${process.env.GITHUB_TOKEN}` } : UA;

async function getJson(url) {
  const res = await fetch(url, { headers: headersFor(url) });
  if (!res.ok) throw new Error(`${url}: HTTP ${res.status}`);
  return res.json();
}

// OP Compare's snapshot branch keeps its files gzipped.
async function getGzJson(url) {
  const res = await fetch(url, { headers: UA });
  if (!res.ok) throw new Error(`${url}: HTTP ${res.status}`);
  return JSON.parse(gunzipSync(Buffer.from(await res.arrayBuffer())).toString("utf8"));
}

const okStores = (stores) => Object.values(stores ?? {}).filter((s) => s && s.ok !== false).length;
const liveRows = (rows) => rows.filter((r) => !r.dormant && r.lastOkAt).length;

// One reader per site. Each returns { stores, products, updatedAt } or throws.
const READERS = {
  rift: async () => {
    const m = await getJson(`${RAW}/TCGEmpire/main/data/public/meta.json`);
    const pairs = Object.keys(m.seen?.RetailerPrice ?? {});
    return {
      stores: new Set(pairs.map((k) => k.split("|")[0])).size,
      products: (m.counts?.Card ?? 0) + (m.counts?.SealedGroupFirstSeen ?? 0),
      updatedAt: m.generatedAt,
    };
  },
  dex: async () => {
    const [m, rows] = await Promise.all([
      getJson(`${RAW}/CompareEmpire/main/apps/dexcompare-sealed/data/public/meta.json`),
      getJson(`${RAW}/CompareEmpire/main/apps/dexcompare-sealed/data/public/store-stats.json`),
    ]);
    return { stores: liveRows(rows), products: m.counts?.Product ?? 0, updatedAt: m.generatedAt };
  },
  op: async () => {
    const [m, rows] = await Promise.all([
      getJson(`${RAW}/OpCompare/snapshot/meta.json`),
      getGzJson(`${RAW}/OpCompare/snapshot/store-stats.json.gz`),
    ]);
    const stores = new Set(rows.filter((r) => r.source?.startsWith("store:") && r.offers > 0).map((r) => r.source.slice(6)));
    return {
      stores: stores.size,
      products: (m.counts?.cards ?? 0) + (m.counts?.sealed ?? 0),
      updatedAt: m.lastImportAt ?? m.generatedAt,
    };
  },
  mtg: async () => {
    const [m, rows] = await Promise.all([
      getJson(`${RAW}/mtgcompare/main/data/public/meta.json`),
      getJson(`${RAW}/mtgcompare/main/data/public/store-stats.json`),
    ]);
    return { stores: liveRows(rows), products: m.counts?.Product ?? 0, updatedAt: m.generatedAt };
  },
  wargame: async () => {
    const m = await getJson(`${RAW}/wargamecompare/main/data/meta.json`);
    const products = typeof m.products === "number" ? m.products : Object.keys(m.products ?? {}).length;
    return { stores: okStores(m.stores), products, updatedAt: m.updatedAt };
  },
  figure: async () => {
    const m = await getJson(`${RAW}/figurecompare/main/data/public/meta.json`);
    return { stores: okStores(m.stores), products: m.figures ?? 0, updatedAt: m.updatedAt };
  },
  kaeyoung: async () => {
    const m = await getJson(`${RAW}/kaeyoung/main/data/public/meta.json`);
    return { stores: okStores(m.stores), products: m.products ?? 0, updatedAt: m.updatedAt };
  },
  cam: async () => {
    const [cameras, lenses] = await Promise.all([
      getJson(`${API}/Camcompare/contents/data/cameras`),
      getJson(`${API}/Camcompare/contents/data/lenses`),
    ]);
    const products = [...cameras, ...lenses].filter((f) => f.name.endsWith(".json")).length;
    const retailers = new Set();
    let updatedAt = null;
    for (const market of ["us", "uk", "eu", "au", "sg"]) {
      const o = await getJson(`${RAW}/Camcompare/main/data/offers/${market}.json`);
      for (const r of o.offers ?? []) if (r.retailer && r.retailer !== "ebay" && r.retailer !== "amazon") retailers.add(r.retailer);
      if (o.generatedAt && (!updatedAt || o.generatedAt > updatedAt)) updatedAt = o.generatedAt;
    }
    return { stores: retailers.size, products, updatedAt };
  },
};

// The card-engine sites all publish the same meta.json shape.
for (const [key, repo] of [
  ["gundam", "GundamCompare"],
  ["lorcana", "lorcanacompare"],
  ["ygo", "ygocompare"],
  ["cyberpunk", "cyberpunkcompare"],
  ["bandai", "bandaicompare"],
]) {
  READERS[key] = async () => {
    const m = await getJson(`${RAW}/${repo}/main/data/public/meta.json`);
    return {
      stores: okStores(m.stores),
      products: (m.counts?.cards ?? 0) + (m.counts?.sealed ?? 0),
      updatedAt: m.updatedAt,
    };
  };
}

async function main() {
  const sites = {};
  let failures = 0;
  for (const [key, read] of Object.entries(READERS)) {
    try {
      const r = await read();
      sites[key] = r;
      console.log(`${key.padEnd(10)} ${String(r.stores).padStart(5)} stores ${String(r.products).padStart(7)} products  ${r.updatedAt ?? "?"}`);
    } catch (e) {
      failures++;
      sites[key] = { stores: null, products: null, updatedAt: null, error: String(e.message ?? e) };
      console.warn(`${key.padEnd(10)} unread: ${e.message ?? e}`);
    }
  }
  const out = { v: 1, fetchedAt: new Date().toISOString(), sites };
  await fs.writeFile(OUT, JSON.stringify(out, null, 1) + "\n");
  console.log(`wrote ${path.relative(process.cwd(), OUT)} (${Object.keys(sites).length} sites, ${failures} unread)`);
  // Every site unread means GitHub itself was unreachable: keep yesterday's file.
  if (failures === Object.keys(READERS).length) process.exit(1);
}

main();
