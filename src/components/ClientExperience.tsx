"use client";

import { useState } from "react";
import { Briefcase } from "lucide-react";
import { Modal } from "./ui/Modal";
import { clientEngagements } from "@/data/experience";

export function ClientExperience() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <button
        onClick={() => setOpen(true)}
        className="group inline-flex items-center gap-2 rounded-lg border border-[var(--border-strong)] bg-surface/60 px-5 py-3 text-sm font-medium text-foreground backdrop-blur transition-colors hover:border-accent"
      >
        <Briefcase className="h-4 w-4 text-accent" />
        Client Experience
        <span className="rounded-full bg-[var(--surface-raised)] px-2 py-0.5 font-mono text-[0.65rem] text-muted">
          {clientEngagements.length}
        </span>
      </button>

      <Modal
        open={open}
        onClose={() => setOpen(false)}
        title="Client Engagements"
        subtitle="Selected consulting work at Deloitte. Client names are withheld per standard confidentiality practice."
      >
        <ol className="space-y-6">
          {clientEngagements.map((engagement) => (
            <li
              key={`${engagement.client}-${engagement.period}`}
              className="relative border-l border-[var(--border-strong)] pl-5"
            >
              <span className="absolute -left-[5px] top-1.5 h-2.5 w-2.5 rounded-full border border-accent bg-background" />
              <div className="flex flex-wrap items-baseline justify-between gap-x-3 gap-y-1">
                <h4 className="text-sm font-semibold text-foreground">
                  {engagement.client}
                </h4>
                <span className="mono-label !text-[0.65rem] !text-faint">
                  {engagement.period}
                </span>
              </div>
              <p className="mt-0.5 text-sm font-medium text-accent">
                {engagement.role}
              </p>
              <p className="mt-2 text-sm leading-relaxed text-muted">
                {engagement.summary}
              </p>
              <div className="mt-3 flex flex-wrap gap-1.5">
                {engagement.tags.map((tag) => (
                  <span
                    key={tag}
                    className="rounded-md bg-[var(--surface-raised)] px-2 py-0.5 font-mono text-[0.65rem] text-muted"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </li>
          ))}
        </ol>
      </Modal>
    </>
  );
}
