import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { CompareEmpireFull } from "./CompareEmpire";

export function CompareEmpirePage() {
  return (
    <div className="flex min-h-screen flex-col bg-background text-foreground">
      <header className="border-b border-[var(--border)]">
        <div className="mx-auto flex max-w-6xl items-center px-5 py-5 sm:px-8">
          <Link
            href="/"
            className="group flex items-center gap-2.5 text-sm font-medium text-muted transition-colors hover:text-foreground"
          >
            <ArrowLeft className="h-4 w-4 transition-transform group-hover:-translate-x-0.5" />
            Back to site
          </Link>
        </div>
      </header>
      <main className="flex-1">
        <CompareEmpireFull />
      </main>
    </div>
  );
}
