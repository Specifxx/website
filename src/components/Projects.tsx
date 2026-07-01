"use client";

import { useMemo, useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { ArrowUpRight, Check, ExternalLink } from "lucide-react";
import { GithubIcon } from "./ui/Icons";
import { SectionHeading } from "./ui/SectionHeading";
import { Reveal } from "./ui/Reveal";
import {
  domains,
  gridProjects,
  spotlightProjects,
  type Project,
} from "@/data/projects";

function SpotlightCard({ project, index }: { project: Project; index: number }) {
  return (
    <Reveal delay={index * 0.1}>
      <article className="card-glow relative flex h-full flex-col overflow-hidden rounded-2xl border border-[var(--border)] bg-surface p-7 sm:p-8">
        <div className="pointer-events-none absolute -right-16 -top-16 h-44 w-44 rounded-full bg-accent/10 blur-3xl" />

        <div className="relative mb-6 flex items-start justify-between gap-4">
          <div>
            <span className="inline-flex items-center gap-1.5 rounded-full border border-accent/40 bg-accent/10 px-3 py-1 font-mono text-[0.65rem] uppercase tracking-wider text-accent">
              <span className="relative flex h-1.5 w-1.5">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-accent opacity-75" />
                <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-accent" />
              </span>
              Featured · Live
            </span>
            <h3 className="mt-4 text-2xl font-semibold tracking-tight text-foreground">
              {project.title}
            </h3>
            {project.audience ? (
              <p className="mt-1 font-mono text-xs text-accent">
                {project.audience}
              </p>
            ) : null}
          </div>
          {project.metric ? (
            <div className="shrink-0 text-right">
              <div className="font-mono text-3xl font-semibold text-accent">
                {project.metric.value}
              </div>
              <div className="text-[0.65rem] uppercase tracking-wide text-faint">
                {project.metric.label}
              </div>
            </div>
          ) : null}
        </div>

        <p className="relative text-sm leading-relaxed text-muted">
          {project.description}
        </p>

        {project.highlights ? (
          <ul className="relative mt-5 space-y-2.5">
            {project.highlights.map((h) => (
              <li key={h} className="flex items-start gap-2.5 text-sm text-foreground/90">
                <Check className="mt-0.5 h-4 w-4 shrink-0 text-accent" />
                <span>{h}</span>
              </li>
            ))}
          </ul>
        ) : null}

        <div className="relative mt-6 flex flex-wrap gap-2">
          {project.tags.map((tag) => (
            <span
              key={tag}
              className="rounded-md bg-[var(--surface-raised)] px-2.5 py-1 font-mono text-[0.68rem] text-muted"
            >
              {tag}
            </span>
          ))}
        </div>

        <div className="relative mt-7 flex items-center gap-3 border-t border-[var(--border)] pt-6">
          {project.demo ? (
            <a
              href={project.demo}
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center gap-2 rounded-lg bg-accent px-4 py-2.5 text-sm font-medium text-on-accent shadow-sm shadow-accent/20 transition-transform hover:-translate-y-0.5"
            >
              <ExternalLink className="h-4 w-4" />
              Visit {project.title}
            </a>
          ) : null}
          {project.repo ? (
            <a
              href={project.repo}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-sm text-muted transition-colors hover:text-foreground"
            >
              <GithubIcon className="h-4 w-4" />
              Code
            </a>
          ) : null}
          <span className="ml-auto truncate font-mono text-xs text-faint">
            {project.demo?.replace(/^https?:\/\//, "")}
          </span>
        </div>
      </article>
    </Reveal>
  );
}

function ProjectCard({ project }: { project: Project }) {
  return (
    <motion.article
      layout
      initial={{ opacity: 0, scale: 0.97 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.97 }}
      transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
      className="card-glow group flex flex-col rounded-2xl border border-[var(--border)] bg-surface p-6"
    >
      <div className="mb-5 flex items-start justify-between gap-4">
        <div className="flex flex-wrap items-center gap-2">
          <span className="rounded-full border border-[var(--border-strong)] px-3 py-1 font-mono text-[0.65rem] uppercase tracking-wider text-muted">
            {project.domain}
          </span>
          {project.demo ? (
            <span className="inline-flex items-center gap-1.5 rounded-full border border-accent/40 bg-accent/10 px-2.5 py-1 font-mono text-[0.6rem] uppercase tracking-wider text-accent">
              <span className="h-1.5 w-1.5 rounded-full bg-accent" />
              Live
            </span>
          ) : null}
          {project.experimental ? (
            <span className="rounded-full border border-[var(--border-strong)] px-2.5 py-1 font-mono text-[0.6rem] uppercase tracking-wider text-faint">
              Personal R&D
            </span>
          ) : null}
        </div>
        {project.metric ? (
          <div className="text-right">
            <div className="font-mono text-lg font-semibold text-accent">
              {project.metric.value}
            </div>
            <div className="text-[0.65rem] uppercase tracking-wide text-faint">
              {project.metric.label}
            </div>
          </div>
        ) : null}
      </div>

      <h3 className="text-xl font-semibold tracking-tight text-foreground">
        {project.title}
      </h3>
      <p className="mt-2.5 text-sm leading-relaxed text-muted">{project.blurb}</p>

      <div className="mt-5 flex flex-wrap gap-2">
        {project.tags.map((tag) => (
          <span
            key={tag}
            className="rounded-md bg-[var(--surface-raised)] px-2.5 py-1 font-mono text-[0.68rem] text-muted"
          >
            {tag}
          </span>
        ))}
      </div>

      {project.repo || project.demo ? (
        <div className="mt-6 flex items-center gap-4 border-t border-[var(--border)] pt-5">
          {project.repo ? (
            <a
              href={project.repo}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-sm text-muted transition-colors hover:text-foreground"
            >
              <GithubIcon className="h-4 w-4" />
              Code
            </a>
          ) : null}
          {project.demo ? (
            <a
              href={project.demo}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-sm text-accent transition-colors hover:text-foreground"
            >
              <ExternalLink className="h-4 w-4" />
              Live demo
            </a>
          ) : null}
          <ArrowUpRight className="ml-auto h-4 w-4 text-faint transition-all group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-accent" />
        </div>
      ) : null}
    </motion.article>
  );
}

export function Projects() {
  const [filter, setFilter] = useState<(typeof domains)[number]>("All");

  const visible = useMemo(
    () =>
      filter === "All"
        ? gridProjects
        : gridProjects.filter((p) => p.domain === filter),
    [filter]
  );

  return (
    <section
      id="projects"
      className="relative border-y border-[var(--border)] bg-background-soft"
    >
      <div className="mx-auto max-w-6xl px-5 py-24 sm:px-8 sm:py-32">
        <SectionHeading
          index="03"
          kicker="Portfolio"
          title="Featured Projects"
          description="My flagship work is a family of live price-comparison platforms used by thousands across the trading-card-game community — backed by daily data pipelines and built end to end. Below: AI tools, quant systems, and full-stack products across the rest of my portfolio."
        />

        <div className="mb-16 grid gap-5 md:grid-cols-2">
          {spotlightProjects.map((project, i) => (
            <SpotlightCard key={project.slug} project={project} index={i} />
          ))}
        </div>

        <Reveal className="mb-8">
          <h3 className="text-lg font-semibold tracking-tight text-foreground">
            More projects
          </h3>
          <p className="mt-1 text-sm text-muted">
            Quant systems, machine learning, and full-stack builds.
          </p>
        </Reveal>

        <Reveal className="mb-10 flex flex-wrap gap-2">
          {domains.map((d) => (
            <button
              key={d}
              onClick={() => setFilter(d)}
              className={`rounded-full border px-4 py-1.5 text-sm transition-colors ${
                filter === d
                  ? "border-accent bg-accent/10 text-accent"
                  : "border-[var(--border)] text-muted hover:border-[var(--border-strong)] hover:text-foreground"
              }`}
            >
              {d}
            </button>
          ))}
        </Reveal>

        <motion.div layout className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          <AnimatePresence mode="popLayout">
            {visible.map((project) => (
              <ProjectCard key={project.slug} project={project} />
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
}
