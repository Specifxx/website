import { Reveal } from "./ui/Reveal";
import { SectionHeading } from "./ui/SectionHeading";
import { timeline } from "@/data/profile";

export function Timeline() {
  return (
    <section
      id="path"
      className="relative border-t border-[var(--border)] bg-background-soft"
    >
      <div className="mx-auto max-w-6xl px-5 py-24 sm:px-8 sm:py-32">
        <SectionHeading index="06" kicker="Trajectory" title="Education & experience" />

        <div className="relative ml-2 border-l border-[var(--border-strong)] pl-8 sm:ml-3 sm:pl-10">
          {timeline.map((item, i) => (
            <Reveal key={item.title} delay={i * 0.08}>
              <div className="relative pb-12 last:pb-0">
                <span className="absolute -left-[2.6rem] top-1.5 grid h-4 w-4 place-items-center rounded-full border border-accent bg-background sm:-left-[3.1rem]">
                  <span className="h-1.5 w-1.5 rounded-full bg-accent" />
                </span>
                <p className="mono-label mb-2">{item.period}</p>
                <h3 className="text-lg font-semibold text-foreground">
                  {item.title}
                </h3>
                <p className="text-sm font-medium text-accent">{item.org}</p>
                <p className="mt-3 max-w-2xl text-sm leading-relaxed text-muted">
                  {item.description}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
