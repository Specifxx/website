import { Reveal } from "./Reveal";

type SectionHeadingProps = {
  index: string;
  kicker: string;
  title: string;
  description?: string;
};

export function SectionHeading({
  index,
  kicker,
  title,
  description,
}: SectionHeadingProps) {
  return (
    <Reveal className="mb-12 max-w-2xl">
      <div className="mb-4 flex items-center gap-3">
        <span className="mono-label">{index}</span>
        <span className="h-px w-10 bg-[var(--border-strong)]" />
        <span className="mono-label !text-[var(--muted)]">{kicker}</span>
      </div>
      <h2 className="text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
        {title}
      </h2>
      {description ? (
        <p className="mt-4 text-base leading-relaxed text-muted">{description}</p>
      ) : null}
    </Reveal>
  );
}
