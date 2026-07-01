const TECH = [
  "Python",
  "TypeScript",
  "Next.js",
  "React",
  "PyTorch",
  "scikit-learn",
  "FastAPI",
  "Claude / LLMs",
  "Prisma",
  "Playwright",
  "Tailwind",
  "Node.js",
  "SQL",
  "Recharts",
  "Vercel",
  "Web Scraping",
  "Reinforcement Learning",
  "Elo Modelling",
];

export function TechMarquee() {
  return (
    <div className="relative overflow-hidden border-y border-[var(--border)] bg-background-soft py-5">
      <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-24 bg-gradient-to-r from-background-soft to-transparent" />
      <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-24 bg-gradient-to-l from-background-soft to-transparent" />
      <div className="marquee-track flex w-max">
        {[...TECH, ...TECH].map((tech, i) => (
          <span
            key={i}
            className="mx-6 flex items-center gap-3 whitespace-nowrap font-mono text-sm text-muted"
          >
            {tech}
            <span className="h-1 w-1 rounded-full bg-[var(--accent)]" />
          </span>
        ))}
      </div>
    </div>
  );
}
