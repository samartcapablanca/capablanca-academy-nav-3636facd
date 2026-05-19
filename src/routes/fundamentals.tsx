import { createFileRoute } from "@tanstack/react-router";
import { AppShell } from "@/components/AppShell";
import { CheckCircle2, Circle, Lock, PlayCircle } from "lucide-react";

export const Route = createFileRoute("/fundamentals")({
  head: () => ({
    meta: [
      { title: "Level 1: Fundamentals — Capablanca Masterclass" },
      { name: "description", content: "Structured training modules teaching the Capablanca approach to chess fundamentals." },
    ],
  }),
  component: Fundamentals,
});

const MODULES = [
  { n: 1, title: "The Geometry of the Board", lessons: 6, status: "done" },
  { n: 2, title: "Piece Activity Before Material", lessons: 5, status: "done" },
  { n: 3, title: "Pawn Structures: Islands & Chains", lessons: 7, status: "active" },
  { n: 4, title: "The Rook Endgame", lessons: 6, status: "todo" },
  { n: 5, title: "Simplification as a Weapon", lessons: 5, status: "todo" },
  { n: 6, title: "King Activity in the Endgame", lessons: 4, status: "locked" },
] as const;

function Fundamentals() {
  return (
    <AppShell>
      <header className="mb-10">
        <div className="text-[11px] uppercase tracking-[0.28em] text-gold/80">Level 1</div>
        <h1 className="mt-2 font-display text-4xl text-cream md:text-5xl">Fundamentals</h1>
        <p className="mt-3 max-w-2xl text-sm text-muted-foreground">
          Six progressive modules teaching the disarming clarity that defined Capablanca's style.
          Start with the geometry of the board and end with kings that win endings.
        </p>
      </header>

      <div className="grid gap-4">
        {MODULES.map((m) => (
          <ModuleRow key={m.n} {...m} />
        ))}
      </div>
    </AppShell>
  );
}

function ModuleRow({ n, title, lessons, status }: { n: number; title: string; lessons: number; status: string }) {
  const Icon = status === "done" ? CheckCircle2 : status === "locked" ? Lock : status === "active" ? PlayCircle : Circle;
  return (
    <div className="group flex items-center gap-5 rounded-2xl border border-border bg-surface p-5 shadow-luxe transition hover:border-gold/40 md:p-6">
      <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-xl border border-border bg-surface-elevated font-display text-2xl text-gradient-gold">
        {String(n).padStart(2, "0")}
      </div>
      <div className="min-w-0 flex-1">
        <div className="flex items-center gap-2 text-[10px] uppercase tracking-[0.22em] text-muted-foreground">
          Module {n} · {lessons} lessons
        </div>
        <h3 className="mt-1 font-display text-xl text-cream">{title}</h3>
      </div>
      <Icon className={`h-6 w-6 shrink-0 ${status === "done" ? "text-gold" : status === "active" ? "text-cream" : "text-muted-foreground"}`} />
    </div>
  );
}
