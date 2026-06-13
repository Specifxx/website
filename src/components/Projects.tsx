"use client";

import { useMemo, useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { ArrowUpRight, ExternalLink } from "lucide-react";
import { GithubIcon } from "./ui/Icons";
import { SectionHeading } from "./ui/SectionHeading";
import { Reveal } from "./ui/Reveal";
import { domains, projects, type Project } from "@/data/projects";

function ProjectCard({ project }: { project: Project }) {
  return (
    <motion.article
      layout
      initial={{ opacity: 0, scale: 0.97 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.97 }}
      transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
      className={`card-glow group flex flex-col rounded-2xl border border-[var(--border)] bg-surface p-6 ${
        project.featured ? "sm:col-span-1" : ""
      }`}
    >
      <div className="mb-5 flex items-start justify-between gap-4">
        <span className="rounded-full border border-[var(--border-strong)] px-3 py-1 font-mono text-[0.65rem] uppercase tracking-wider text-muted">
          {project.domain}
        </span>
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

      <div className="mt-6 flex items-center gap-4 border-t border-[var(--border)] pt-5">
        <a
          href={project.repo}
          target="_blank"
          rel="noreferrer"
          className="inline-flex items-center gap-1.5 text-sm text-muted transition-colors hover:text-foreground"
        >
          <GithubIcon className="h-4 w-4" />
          Code
        </a>
        {project.demo ? (
          <a
            href={project.demo}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-1.5 text-sm text-accent transition-colors hover:text-foreground"
          >
            <ExternalLink className="h-4 w-4" />
            Live demo
          </a>
        ) : null}
        <ArrowUpRight className="ml-auto h-4 w-4 text-faint transition-all group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-accent" />
      </div>
    </motion.article>
  );
}

export function Projects() {
  const [filter, setFilter] = useState<(typeof domains)[number]>("All");

  const visible = useMemo(
    () =>
      filter === "All"
        ? projects
        : projects.filter((p) => p.domain === filter),
    [filter]
  );

  return (
    <section
      id="work"
      className="relative border-y border-[var(--border)] bg-background-soft"
    >
      <div className="mx-auto max-w-6xl px-5 py-24 sm:px-8 sm:py-32">
        <SectionHeading
          index="02"
          kicker="Selected Work"
          title="Projects that ship and measure"
          description="A curated slice of what I've built — from quant systems and ML pipelines to deployed full-stack products. Every project links to its source."
        />

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

        <motion.div
          layout
          className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3"
        >
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
