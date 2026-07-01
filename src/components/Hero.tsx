"use client";

import { motion } from "motion/react";
import { ArrowDown, ArrowUpRight, MapPin } from "lucide-react";
import { profile } from "@/data/profile";
import { GithubIcon, LinkedinIcon } from "./ui/Icons";
import { ClientExperience } from "./ClientExperience";

export function Hero() {
  return (
    <section
      id="top"
      className="relative flex min-h-[100svh] items-center overflow-hidden pt-16"
    >
      <div className="aurora" />
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-background to-transparent" />

      <div className="relative mx-auto w-full max-w-6xl px-5 sm:px-8">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="max-w-3xl"
        >
          {profile.available ? (
            <div className="mb-7 inline-flex items-center gap-2.5 rounded-full border border-[var(--border-strong)] bg-surface px-3.5 py-1.5 text-xs text-muted shadow-sm">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-accent opacity-75" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-accent" />
              </span>
              Open to 2026 roles · Quant · DS · SWE
            </div>
          ) : null}

          <p className="mono-label mb-5">{profile.location}</p>

          <h1 className="text-balance text-5xl font-semibold leading-[1.02] tracking-tight sm:text-7xl">
            <span className="text-gradient">{profile.name}</span>
          </h1>

          <p className="mt-5 text-2xl font-medium text-foreground sm:text-3xl">
            {profile.title}
          </p>

          <p className="mt-7 max-w-2xl text-pretty text-base leading-relaxed text-muted sm:text-lg">
            {profile.tagline}
          </p>

          <div className="mt-9 flex flex-wrap items-center gap-3">
            <a
              href="#work"
              className="group inline-flex items-center gap-2 rounded-lg bg-accent px-5 py-3 text-sm font-medium text-on-accent shadow-sm shadow-accent/20 transition-transform hover:-translate-y-0.5"
            >
              View selected work
              <ArrowDown className="h-4 w-4 transition-transform group-hover:translate-y-0.5" />
            </a>
            <ClientExperience />
            <a
              href={profile.linkedin}
              target="_blank"
              rel="noreferrer"
              className="group inline-flex items-center gap-2 rounded-lg border border-[var(--border-strong)] bg-surface px-5 py-3 text-sm font-medium text-foreground transition-colors hover:border-accent hover:text-accent"
            >
              <LinkedinIcon className="h-4 w-4" />
              LinkedIn
              <ArrowUpRight className="h-3.5 w-3.5 text-muted transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </a>
            <a
              href={profile.github}
              target="_blank"
              rel="noreferrer"
              className="group inline-flex items-center gap-2 rounded-lg border border-[var(--border-strong)] bg-surface px-5 py-3 text-sm font-medium text-foreground transition-colors hover:border-accent hover:text-accent"
            >
              <GithubIcon className="h-4 w-4" />
              GitHub
              <ArrowUpRight className="h-3.5 w-3.5 text-muted transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </a>
          </div>

          <div className="mt-14 flex items-center gap-2 text-xs text-faint">
            <MapPin className="h-3.5 w-3.5" />
            Based in {profile.location} · Working globally
          </div>
        </motion.div>
      </div>
    </section>
  );
}
