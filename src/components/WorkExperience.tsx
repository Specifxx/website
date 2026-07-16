import Link from "next/link";
import { Sparkles } from "lucide-react";
import { Reveal } from "./ui/Reveal";
import { SectionHeading } from "./ui/SectionHeading";
import { clientEngagements } from "@/data/experience";

export function WorkExperience() {
  return (
    <section
      id="experience"
      className="relative border-y border-[var(--border)] bg-background-soft"
    >
      <div className="mx-auto max-w-6xl px-5 py-24 sm:px-8 sm:py-32">
        <div className="flex flex-wrap items-end justify-between gap-4">
          <SectionHeading
            index="02"
            kicker="Career"
            title="Work Experience"
            description="Consulting engagements at Deloitte, most recent first. Client names are withheld per standard consulting confidentiality practice."
          />
          <Reveal delay={0.1} className="mb-12">
            <Link
              href="/ai-experience/"
              className="group inline-flex items-center gap-2 rounded-lg border border-[var(--border-strong)] bg-surface px-4 py-2.5 text-sm font-medium text-foreground transition-colors hover:border-accent hover:text-accent"
            >
              <Sparkles className="h-4 w-4 text-accent" />
              View AI Experience
            </Link>
          </Reveal>
        </div>

        <Reveal>
          <div className="relative rounded-2xl border border-[var(--border)] bg-surface p-6 sm:p-8">
            <ol className="max-h-[560px] space-y-6 overflow-y-auto pr-2 sm:max-h-[640px]">
              {clientEngagements.map((engagement) => (
                <li
                  key={`${engagement.client}-${engagement.period}`}
                  className="relative border-l border-[var(--border-strong)] pl-5"
                >
                  <span className="absolute -left-[5px] top-1.5 h-2.5 w-2.5 rounded-full border border-accent bg-background" />
                  <div className="flex flex-wrap items-baseline justify-between gap-x-3 gap-y-1">
                    <h3 className="text-sm font-semibold text-foreground">
                      {engagement.client}
                    </h3>
                    <span className="mono-label !text-[0.65rem] !text-faint">
                      {engagement.period}
                    </span>
                  </div>
                  <p className="mt-0.5 text-sm font-medium text-accent">
                    {engagement.role}
                  </p>
                  <p className="mt-2 text-sm leading-relaxed text-muted">
                    {engagement.summary}
                  </p>
                  <div className="mt-3 flex flex-wrap gap-1.5">
                    {engagement.tags.map((tag) => (
                      <span
                        key={tag}
                        className="rounded-md bg-[var(--surface-raised)] px-2 py-0.5 font-mono text-[0.65rem] text-muted"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </li>
              ))}
            </ol>
            <div className="pointer-events-none absolute inset-x-0 bottom-0 h-12 rounded-b-2xl bg-gradient-to-t from-surface to-transparent" />
          </div>
        </Reveal>
      </div>
    </section>
  );
}
