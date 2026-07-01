import { ArrowUpRight } from "lucide-react";
import { Reveal } from "./ui/Reveal";
import { SectionHeading } from "./ui/SectionHeading";
import { about, profile } from "@/data/profile";

export function About() {
  return (
    <section id="about" className="relative mx-auto max-w-6xl px-5 py-24 sm:px-8 sm:py-32">
      <SectionHeading index="01" kicker="Profile" title="Ensuring delivery for data & AI programs" />

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
            {profile.stats.map((stat, i) => (
              <div
                key={stat.label}
                className={`flex flex-col bg-surface p-6 ${
                  profile.stats.length % 2 !== 0 && i === profile.stats.length - 1
                    ? "col-span-2"
                    : ""
                }`}
              >
                <div className="font-mono text-2xl font-semibold text-accent sm:text-3xl">
                  {stat.value}
                </div>
                <div className="mt-2 text-xs leading-snug text-muted">
                  {stat.label}
                </div>
                {"links" in stat && stat.links ? (
                  <div className="mt-3 flex flex-wrap gap-1.5">
                    {stat.links.map((link) => (
                      <a
                        key={link.url}
                        href={link.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group inline-flex items-center gap-1 rounded-full border border-[var(--border-strong)] px-2.5 py-1 text-[0.68rem] text-foreground transition-colors hover:border-accent hover:text-accent"
                      >
                        {link.label}
                        <ArrowUpRight className="h-3 w-3 text-faint transition-colors group-hover:text-accent" />
                      </a>
                    ))}
                  </div>
                ) : null}
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
