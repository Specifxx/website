import { Award } from "lucide-react";
import { Reveal } from "./ui/Reveal";
import { SectionHeading } from "./ui/SectionHeading";
import { certificationCount, certifications } from "@/data/experience";

export function Certifications() {
  return (
    <section
      id="certifications"
      className="mx-auto max-w-6xl px-5 py-24 sm:px-8 sm:py-32"
    >
      <SectionHeading
        index="05"
        kicker="Credentials"
        title="Certifications"
        description={`${certificationCount} professional certifications across cloud, data engineering, and AI/ML.`}
      />

      <div className="grid gap-5 lg:grid-cols-3">
        {certifications.map((group, i) => (
          <Reveal
            key={group.issuer}
            delay={i * 0.06}
            className={group.certs.length > 5 ? "lg:col-span-2" : ""}
          >
            <div className="h-full rounded-2xl border border-[var(--border)] bg-surface p-6">
              <div className="mb-5 flex items-center gap-3">
                <span className="grid h-8 w-8 shrink-0 place-items-center rounded-md border border-[var(--border-strong)] bg-[var(--surface-raised)] text-accent">
                  <Award className="h-4 w-4" />
                </span>
                <div>
                  <h3 className="text-sm font-semibold text-foreground">
                    {group.issuer}
                  </h3>
                  <p className="text-xs text-faint">
                    {group.certs.length}{" "}
                    {group.certs.length === 1 ? "certification" : "certifications"}
                  </p>
                </div>
              </div>
              <ul
                className={`space-y-2 ${
                  group.certs.length > 5 ? "sm:columns-2 sm:gap-x-6 [&>li]:break-inside-avoid" : ""
                }`}
              >
                {group.certs.map((cert) => (
                  <li
                    key={cert}
                    className="flex items-start gap-2.5 text-sm leading-snug text-muted"
                  >
                    <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-accent" />
                    <span>{cert}</span>
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
