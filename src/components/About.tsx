import { Reveal } from "./ui/Reveal";
import { SectionHeading } from "./ui/SectionHeading";
import { about, profile } from "@/data/profile";

export function About() {
  return (
    <section id="about" className="relative mx-auto max-w-6xl px-5 py-24 sm:px-8 sm:py-32">
      <SectionHeading index="01" kicker="Profile" title="Building systems with an edge" />

      <div className="grid gap-12 lg:grid-cols-[1.4fr_1fr]">
        <Reveal className="space-y-5">
          {about.paragraphs.map((p, i) => (
            <p
              key={i}
              className={`leading-relaxed ${
                i === 0 ? "text-lg text-foreground" : "text-base text-muted"
              }`}
            >
              {p}
            </p>
          ))}

          <ul className="grid grid-cols-1 gap-x-6 gap-y-3 pt-3 sm:grid-cols-2">
            {about.highlights.map((h) => (
              <li key={h} className="flex items-center gap-3 text-sm text-foreground">
                <span className="h-1.5 w-1.5 rotate-45 bg-accent" />
                {h}
              </li>
            ))}
          </ul>
        </Reveal>

        <Reveal delay={0.1}>
          <div className="grid grid-cols-2 gap-px overflow-hidden rounded-xl border border-[var(--border)] bg-[var(--border)]">
            {profile.stats.map((stat) => (
              <div key={stat.label} className="bg-surface p-6">
                <div className="font-mono text-2xl font-semibold text-accent sm:text-3xl">
                  {stat.value}
                </div>
                <div className="mt-2 text-xs leading-snug text-muted">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
