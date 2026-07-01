import { Activity, BookOpen, Footprints, Spade, Volleyball, Waves } from "lucide-react";
import type { ComponentType } from "react";
import { Reveal } from "./ui/Reveal";
import { SectionHeading } from "./ui/SectionHeading";
import { hobbies, type Hobby } from "@/data/profile";

const ICONS: Record<Hobby["icon"], ComponentType<{ className?: string }>> = {
  activity: Activity,
  volleyball: Volleyball,
  book: BookOpen,
  cards: Spade,
  footprints: Footprints,
  waves: Waves,
};

export function Hobbies() {
  return (
    <section id="hobbies" className="mx-auto max-w-6xl px-5 py-24 sm:px-8 sm:py-32">
      <SectionHeading
        index="07"
        kicker="Off the Clock"
        title="Hobbies & Interests"
        description="A few things I spend time on outside of work and code."
      />

      <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {hobbies.map((hobby, i) => {
          const Icon = ICONS[hobby.icon];
          return (
            <Reveal key={hobby.title} delay={i * 0.05}>
              <div className="h-full rounded-2xl border border-[var(--border)] bg-surface p-6">
                <span className="grid h-9 w-9 place-items-center rounded-md border border-[var(--border-strong)] bg-[var(--surface-raised)] text-accent">
                  <Icon className="h-4 w-4" />
                </span>
                <h3 className="mt-4 text-sm font-semibold text-foreground">
                  {hobby.title}
                </h3>
                {hobby.detail ? (
                  <p className="mt-1.5 text-sm leading-relaxed text-muted">
                    {hobby.detail}
                  </p>
                ) : null}
              </div>
            </Reveal>
          );
        })}
      </div>
    </section>
  );
}
