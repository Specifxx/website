import { Reveal } from "./ui/Reveal";
import { SectionHeading } from "./ui/SectionHeading";
import { skills } from "@/data/profile";

export function Skills() {
  return (
    <section id="skills" className="mx-auto max-w-6xl px-5 py-24 sm:px-8 sm:py-32">
      <SectionHeading
        index="05"
        kicker="Toolkit"
        title="The stack I reach for"
        description="Spanning quantitative modelling, machine learning, and production engineering."
      />

      <div className="grid gap-5 md:grid-cols-2">
        {skills.map((group, i) => (
          <Reveal key={group.category} delay={i * 0.06}>
            <div className="h-full rounded-2xl border border-[var(--border)] bg-surface p-6">
              <div className="mb-5 flex items-center gap-3">
                <span className="font-mono text-xs text-faint">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <h3 className="text-sm font-semibold uppercase tracking-wider text-foreground">
                  {group.category}
                </h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {group.items.map((item) => (
                  <span
                    key={item}
                    className="rounded-lg border border-[var(--border)] bg-[var(--surface-raised)] px-3 py-1.5 text-sm text-muted transition-colors hover:border-accent hover:text-foreground"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
