import { ArrowUpRight, Mail, MapPin } from "lucide-react";
import { GithubIcon } from "./ui/Icons";
import { Reveal } from "./ui/Reveal";
import { profile } from "@/data/profile";

export function Contact() {
  return (
    <section id="contact" className="relative overflow-hidden">
      <div className="aurora !opacity-30" />
      <div className="relative mx-auto max-w-6xl px-5 py-28 sm:px-8 sm:py-36">
        <Reveal className="mx-auto max-w-2xl text-center">
          <p className="mono-label mb-5">05 · Contact</p>
          <h2 className="text-balance text-4xl font-semibold tracking-tight sm:text-5xl">
            Let&apos;s build something that{" "}
            <span className="text-gradient">measures up</span>.
          </h2>
          <p className="mx-auto mt-6 max-w-xl text-base leading-relaxed text-muted">
            I&apos;m open to quant developer, data science, and software
            engineering roles. If you have a problem worth solving, my inbox is
            open.
          </p>

          <div className="mt-10 flex flex-wrap items-center justify-center gap-3">
            <a
              href={`mailto:${profile.email}`}
              className="group inline-flex items-center gap-2 rounded-lg bg-foreground px-6 py-3.5 text-sm font-medium text-[#05060a] transition-transform hover:-translate-y-0.5"
            >
              <Mail className="h-4 w-4" />
              {profile.email}
            </a>
            <a
              href={profile.github}
              target="_blank"
              rel="noreferrer"
              className="group inline-flex items-center gap-2 rounded-lg border border-[var(--border-strong)] bg-surface/60 px-6 py-3.5 text-sm font-medium text-foreground backdrop-blur transition-colors hover:border-accent"
            >
              <GithubIcon className="h-4 w-4" />
              @{profile.githubUser}
              <ArrowUpRight className="h-3.5 w-3.5 text-muted transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </a>
          </div>

          <div className="mt-8 inline-flex items-center gap-2 text-xs text-faint">
            <MapPin className="h-3.5 w-3.5" />
            {profile.location}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
