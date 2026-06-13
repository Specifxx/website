import { profile } from "@/data/profile";

export function Footer() {
  return (
    <footer className="border-t border-[var(--border)]">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 px-5 py-8 text-sm text-faint sm:flex-row sm:px-8">
        <p className="font-mono text-xs">
          © {new Date().getFullYear()} {profile.name}. Built with Next.js &amp;
          Tailwind.
        </p>
        <div className="flex items-center gap-5">
          <a
            href={profile.linkedin}
            target="_blank"
            rel="noreferrer"
            className="transition-colors hover:text-foreground"
          >
            LinkedIn
          </a>
          <a
            href={profile.github}
            target="_blank"
            rel="noreferrer"
            className="transition-colors hover:text-foreground"
          >
            GitHub
          </a>
          <a
            href={`mailto:${profile.email}`}
            className="transition-colors hover:text-foreground"
          >
            Email
          </a>
          <a href="#top" className="transition-colors hover:text-foreground">
            Back to top ↑
          </a>
        </div>
      </div>
    </footer>
  );
}
