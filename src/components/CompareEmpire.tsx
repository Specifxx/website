import Image from "next/image";
import { ArrowUpRight, Check, Crown } from "lucide-react";
import { Reveal } from "./ui/Reveal";
import { SectionHeading } from "./ui/SectionHeading";
import {
  SITE_COUNT,
  flagship,
  siteChips,
  suiteHow,
  suiteLive,
  suiteSites,
  suiteStats,
  visitorsAsOf,
  type Cluster,
  type SuiteSite,
} from "@/data/suite";

const fetchedOn = new Date(suiteLive.fetchedAt).toLocaleDateString("en-AU", {
  day: "numeric",
  month: "short",
  year: "numeric",
  timeZone: "Australia/Sydney",
});


function host(url: string) {
  return url.replace(/^https?:\/\/(www\.)?/, "").replace(/\/$/, "");
}

function SiteCard({ site }: { site: SuiteSite }) {
  const { chips, live } = siteChips(site);
  return (
    <a
      href={site.url}
      target="_blank"
      rel="noopener noreferrer"
      className="card-glow group flex h-full flex-col rounded-2xl border border-[var(--border)] bg-surface p-5"
    >
      <div className="flex items-start justify-between gap-3">
        <div className="flex items-center gap-2.5">
          <span
            aria-hidden
            className="h-2.5 w-2.5 shrink-0 rounded-full"
            style={{ background: site.color }}
          />
          <h4 className="font-semibold tracking-tight text-foreground">
            {site.name}
          </h4>
        </div>
        <ArrowUpRight className="h-4 w-4 shrink-0 text-faint transition-all group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-accent" />
      </div>
      <p className="mt-1.5 text-sm text-muted">{site.niche}</p>
      <div className="mt-4 flex flex-wrap gap-1.5">
        {chips.map((s) => (
          <span
            key={s}
            className="rounded-md bg-[var(--surface-raised)] px-2 py-0.5 font-mono text-[0.68rem] text-muted"
          >
            {s}
          </span>
        ))}
        {live ? (
          <span
            title={`Read from the site's own price data on ${fetchedOn}`}
            className="inline-flex items-center gap-1 rounded-md border border-accent/30 px-1.5 py-0.5 font-mono text-[0.62rem] uppercase tracking-wider text-accent"
          >
            <span aria-hidden className="h-1.5 w-1.5 rounded-full bg-accent" />
            Live
          </span>
        ) : null}
      </div>
      <span className="mt-auto pt-4 font-mono text-[0.7rem] text-faint">
        {host(site.url)}
      </span>
    </a>
  );
}

function ClusterBlock({
  cluster,
  cols,
  className = "",
}: {
  cluster: Cluster;
  cols: string;
  className?: string;
}) {
  const sites = suiteSites.filter((s) => s.cluster === cluster);
  // The flagship sits above the grid but counts toward the card sites.
  const count = cluster === "Trading cards" ? sites.length + 1 : sites.length;
  return (
    <div className={className}>
      <Reveal className="mb-4 flex items-baseline gap-3">
        <h3 className="text-lg font-semibold tracking-tight text-foreground">
          {cluster}
        </h3>
        <span className="font-mono text-xs text-faint">
          {count} {count === 1 ? "site" : "sites"}
        </span>
      </Reveal>
      <div className={`grid gap-4 sm:grid-cols-2 ${cols}`}>
        {sites.map((site, i) => (
          <Reveal key={site.name} delay={(i % 4) * 0.05} className="h-full">
            <SiteCard site={site} />
          </Reveal>
        ))}
      </div>
    </div>
  );
}

export function CompareEmpire() {
  return (
    <section id="compare-empire" className="relative overflow-hidden">
      <div className="aurora opacity-50" />
      <div className="relative mx-auto max-w-6xl px-5 py-24 sm:px-8 sm:py-32">
        <SectionHeading
          index="02"
          kicker="Founder · Compare Empire"
          title={`Compare Empire: a suite of ${SITE_COUNT} websites`}
          description="Price comparison sites that people actually use. Each one reads hundreds of independent stores every day, matches every listing to the right product and shows the cheapest place to buy, in the shopper's own currency. I design, build and run all fourteen. The store and product counts below are read from each site's own data every day."
        />

        {/* Suite stats */}
        <Reveal>
          <dl className="grid grid-cols-2 gap-px overflow-hidden rounded-2xl border border-[var(--border)] bg-[var(--border)] sm:grid-cols-3 lg:grid-cols-5">
            {suiteStats.map((s, i) => (
              <div
                key={s.label}
                className={`flex flex-col bg-surface p-5 ${
                  i === 0 ? "col-span-2 sm:col-span-1" : ""
                }`}
              >
                <dt className="order-2 mt-1.5 text-xs leading-snug text-muted">
                  {s.label}
                  {"live" in s ? (
                    <span className="ml-1.5 inline-flex items-center gap-1 align-middle font-mono text-[0.6rem] uppercase tracking-wider text-accent">
                      <span aria-hidden className="h-1.5 w-1.5 rounded-full bg-accent" />
                      Live
                    </span>
                  ) : null}
                  {"note" in s ? (
                    <span className="mt-1 block text-[0.68rem] text-faint">
                      {s.note}
                    </span>
                  ) : null}
                </dt>
                <dd className="order-1 font-mono text-3xl font-semibold tracking-tight text-accent">
                  {s.value}
                </dd>
              </div>
            ))}
          </dl>
        </Reveal>

        {/* Flagship */}
        <Reveal delay={0.05} className="mt-6">
          <article className="relative overflow-hidden rounded-2xl border border-accent/30 bg-surface p-6 sm:p-8">
            <div className="pointer-events-none absolute -right-20 -top-20 h-56 w-56 rounded-full bg-accent/10 blur-3xl" />
            <div className="relative grid gap-8 lg:grid-cols-[1fr_1.15fr] lg:items-center">
              <div>
                <span className="inline-flex items-center gap-1.5 rounded-full border border-accent/40 bg-accent/10 px-3 py-1 font-mono text-[0.65rem] uppercase tracking-wider text-accent">
                  <Crown className="h-3 w-3" />
                  Flagship · Live
                </span>
                <div className="mt-4 flex flex-wrap items-end justify-between gap-4">
                  <div>
                    <h3 className="text-3xl font-semibold tracking-tight text-foreground">
                      {flagship.name}
                    </h3>
                    <p className="mt-1 font-mono text-xs text-accent">
                      {flagship.niche}
                    </p>
                  </div>
                  <div className="text-right">
                    <div className="font-mono text-3xl font-semibold text-accent">
                      {flagship.metric.value}
                    </div>
                    <div className="text-[0.65rem] uppercase tracking-wide text-faint">
                      {flagship.metric.label}
                    </div>
                  </div>
                </div>
                <p className="mt-5 text-sm leading-relaxed text-muted">
                  {flagship.description}
                </p>
                <ul className="mt-5 space-y-2.5">
                  {flagship.highlights.map((h) => (
                    <li
                      key={h}
                      className="flex items-start gap-2.5 text-sm text-foreground/90"
                    >
                      <Check className="mt-0.5 h-4 w-4 shrink-0 text-accent" />
                      <span>{h}</span>
                    </li>
                  ))}
                </ul>
                <a
                  href={flagship.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group mt-7 inline-flex items-center gap-2 rounded-lg bg-accent px-4 py-2.5 text-sm font-medium text-on-accent shadow-sm shadow-accent/20 transition-transform hover:-translate-y-0.5"
                >
                  Visit RiftCompare
                  <ArrowUpRight className="h-4 w-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                </a>
              </div>
              <figure>
                <div className="overflow-hidden rounded-xl border border-[var(--border)] bg-white p-3">
                  <Image
                    src={flagship.proof.src}
                    alt={flagship.proof.alt}
                    width={flagship.proof.width}
                    height={flagship.proof.height}
                    className="h-auto w-full"
                  />
                </div>
                <figcaption className="mt-2 font-mono text-[0.65rem] text-faint">
                  {flagship.proof.caption}
                </figcaption>
              </figure>
            </div>
          </article>
        </Reveal>

        {/* The rest of the suite: cards get a full row, hobby and tech share one */}
        <ClusterBlock cluster="Trading cards" className="mt-12" cols="lg:grid-cols-4" />
        <div className="mt-12 grid gap-12 lg:grid-cols-5 lg:gap-6">
          <ClusterBlock cluster="Hobby" cols="" className="lg:col-span-2" />
          <ClusterBlock cluster="Tech" cols="" className="lg:col-span-2" />
          <ClusterBlock cluster="Beauty" cols="sm:grid-cols-1" />
        </div>

        {/* How it runs */}
        <Reveal className="mt-14">
          <div className="rounded-2xl border border-[var(--border)] bg-background-soft p-6 sm:p-8">
            <h3 className="text-lg font-semibold tracking-tight text-foreground">
              How one person runs fourteen sites
            </h3>
            <ul className="mt-4 grid gap-3 sm:grid-cols-2">
              {suiteHow.map((h) => (
                <li key={h} className="flex items-start gap-2.5 text-sm text-muted">
                  <span className="mt-2 h-1.5 w-1.5 shrink-0 rotate-45 bg-accent" />
                  <span>{h}</span>
                </li>
              ))}
            </ul>
            <p className="mt-5 font-mono text-[0.68rem] text-faint">
              Store and product counts are read from each site&apos;s own published price data once a day
              (last read {fetchedOn}); visitor figures are from Vercel Analytics, {visitorsAsOf}.
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
