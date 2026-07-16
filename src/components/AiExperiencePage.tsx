import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, Download, Sparkles } from "lucide-react";
import { profile } from "@/data/profile";
import { professionalAiExperience, personalAiExperience } from "@/data/aiExperience";
import { Reveal } from "./ui/Reveal";

export function AiExperiencePage() {
  return (
    <div className="flex min-h-screen flex-col bg-background text-foreground">
      <header className="border-b border-[var(--border)]">
        <div className="mx-auto flex max-w-4xl flex-wrap items-center justify-between gap-4 px-5 py-5 sm:px-8">
          <Link
            href="/"
            className="group flex items-center gap-2.5 text-sm font-medium text-muted transition-colors hover:text-foreground"
          >
            <ArrowLeft className="h-4 w-4 transition-transform group-hover:-translate-x-0.5" />
            Back to site
          </Link>
          <a
            href="/ai-experience.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-lg bg-accent px-4 py-2 text-sm font-medium text-on-accent shadow-sm shadow-accent/20 transition-transform hover:-translate-y-0.5"
          >
            <Download className="h-4 w-4" />
            Download PDF
          </a>
        </div>
      </header>

      <main className="flex-1">
        <div className="mx-auto max-w-4xl px-5 py-16 sm:px-8 sm:py-20">
          <Reveal>
            <div className="mb-4 flex items-center gap-3">
              <span className="mono-label">AI Experience</span>
              <span className="h-px w-10 bg-[var(--border-strong)]" />
              <span className="mono-label !text-[var(--muted)]">
                {profile.name}
              </span>
            </div>
            <h1 className="text-balance text-4xl font-semibold tracking-tight sm:text-5xl">
              AI &amp; GenAI <span className="text-gradient">Engineering Experience</span>
            </h1>
            <p className="mt-6 max-w-2xl text-pretty text-base leading-relaxed text-muted sm:text-lg">
              A curated view of Bill&apos;s hands-on AI work — from deploying and
              evaluating LLM API endpoints to building GenAI workflows in
              production and advising on ML/MLOps practice — plus his personal
              practice building with Claude as an agentic development partner.
              Ordered most recent first.
            </p>
          </Reveal>

          <div className="mt-16">
            <Reveal>
              <h2 className="mb-2 text-xs font-semibold uppercase tracking-widest text-faint">
                Professional Engagements
              </h2>
              <p className="mb-8 text-sm text-muted">
                Deloitte consulting engagements with a direct AI/ML/GenAI
                component. Client names withheld per standard consulting
                confidentiality practice, consistent with the main CV.
              </p>
            </Reveal>

            <div className="space-y-6">
              {professionalAiExperience.map((eng, i) => (
                <Reveal key={`${eng.client}-${eng.period}`} delay={i * 0.05}>
                  <article className="card-glow rounded-2xl border border-[var(--border)] bg-surface p-6 sm:p-7">
                    <div className="flex flex-wrap items-baseline justify-between gap-x-3 gap-y-1">
                      <h3 className="text-base font-semibold text-foreground">
                        {eng.client}
                      </h3>
                      <span className="mono-label !text-[0.65rem] !text-faint">
                        {eng.period}
                      </span>
                    </div>
                    <p className="mt-0.5 text-sm font-medium text-accent">
                      {eng.role}
                    </p>
                    <p className="mt-3 text-sm leading-relaxed text-muted">
                      {eng.context}
                    </p>
                    <ul className="mt-4 space-y-1.5">
                      {eng.contributions.map((c) => (
                        <li
                          key={c}
                          className="flex items-start gap-2.5 text-sm leading-relaxed text-muted"
                        >
                          <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-accent" />
                          <span>{c}</span>
                        </li>
                      ))}
                    </ul>
                    <div className="mt-4 flex flex-wrap gap-1.5">
                      {eng.stack.map((tag) => (
                        <span
                          key={tag}
                          className="rounded-md bg-[var(--surface-raised)] px-2 py-0.5 font-mono text-[0.65rem] text-muted"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                    <div className="mt-4 rounded-lg border border-accent/25 bg-accent/5 px-4 py-3">
                      <p className="text-sm leading-relaxed text-foreground">
                        <span className="font-semibold text-accent">Impact — </span>
                        {eng.impact}
                      </p>
                    </div>
                  </article>
                </Reveal>
              ))}
            </div>
          </div>

          <div className="mt-16">
            <Reveal>
              <h2 className="mb-2 flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-faint">
                <Sparkles className="h-3.5 w-3.5 text-accent" />
                Personal AI Practice
              </h2>
              <p className="mb-8 text-sm text-muted">
                Separate from client delivery — how Bill builds with AI on his
                own time, including using Claude Code as a daily agentic
                development partner.
              </p>
            </Reveal>

            <div className="space-y-6">
              {personalAiExperience.map((item, i) => (
                <Reveal key={item.title} delay={i * 0.05}>
                  <article className="card-glow rounded-2xl border border-dashed border-[var(--border-strong)] bg-surface p-6 sm:p-7">
                    <div className="flex flex-wrap items-baseline justify-between gap-x-3 gap-y-1">
                      <h3 className="text-base font-semibold text-foreground">
                        {item.title}
                      </h3>
                      <span className="mono-label !text-[0.65rem] !text-faint">
                        {item.period}
                      </span>
                    </div>
                    <p className="mt-3 text-sm leading-relaxed text-muted">
                      {item.description}
                    </p>
                    <ul className="mt-4 space-y-1.5">
                      {item.highlights.map((h) => (
                        <li
                          key={h}
                          className="flex items-start gap-2.5 text-sm leading-relaxed text-muted"
                        >
                          <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-accent" />
                          <span>{h}</span>
                        </li>
                      ))}
                    </ul>
                    <div className="mt-4 flex flex-wrap gap-1.5">
                      {item.stack.map((tag) => (
                        <span
                          key={tag}
                          className="rounded-md bg-[var(--surface-raised)] px-2 py-0.5 font-mono text-[0.65rem] text-muted"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </article>
                </Reveal>
              ))}
            </div>
          </div>

          <Reveal className="mt-16 rounded-2xl border border-[var(--border)] bg-surface p-6 text-center sm:p-8">
            <div className="mx-auto flex h-11 w-11 items-center justify-center rounded-full ring-4 ring-accent/15">
              <Image
                src="/bill-yang.png"
                alt={`Portrait of ${profile.name}`}
                width={44}
                height={44}
                className="h-11 w-11 rounded-full object-cover"
              />
            </div>
            <p className="mt-4 text-sm leading-relaxed text-muted">
              Want to talk through any of these in more detail?
            </p>
            <a
              href={`mailto:${profile.email}`}
              className="mt-3 inline-flex items-center gap-2 rounded-lg bg-accent px-5 py-2.5 text-sm font-medium text-on-accent shadow-sm shadow-accent/20 transition-transform hover:-translate-y-0.5"
            >
              Get in touch — {profile.email}
            </a>
          </Reveal>
        </div>
      </main>

      <footer className="border-t border-[var(--border)]">
        <div className="mx-auto flex max-w-4xl flex-col items-center justify-between gap-4 px-5 py-8 text-sm text-faint sm:flex-row sm:px-8">
          <p className="font-mono text-xs">
            © {new Date().getFullYear()} {profile.name}
          </p>
          <Link href="/" className="transition-colors hover:text-foreground">
            ← Back to billyang.site
          </Link>
        </div>
      </footer>
    </div>
  );
}
