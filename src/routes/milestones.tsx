import { createFileRoute } from "@tanstack/react-router";
import { AppShell } from "@/components/AppShell";
import { Trophy } from "lucide-react";

export const Route = createFileRoute("/milestones")({
  head: () => ({
    meta: [
      { title: "Milestone Archive — Capablanca Masterclass" },
      { name: "description", content: "A chronological timeline of Capablanca's legendary tournament matches." },
    ],
  }),
  component: Milestones,
});

const EVENTS = [
  { year: "1901", title: "Defeats National Champion Juan Corzo", place: "Havana", note: "Age 13. A prodigy announces himself." },
  { year: "1909", title: "Defeats Frank Marshall in a Match", place: "United States", note: "+8 −1 =14. The young Cuban arrives." },
  { year: "1911", title: "Tournament Victory at San Sebastián", place: "Spain", note: "First international super-tournament. First place." },
  { year: "1921", title: "World Championship vs. Emanuel Lasker", place: "Havana", note: "Becomes the 3rd World Chess Champion." },
  { year: "1922", title: "London Tournament Victory", place: "London", note: "Undefeated. Drafts the London Rules." },
  { year: "1927", title: "Loses Title to Alekhine", place: "Buenos Aires", note: "An immortal rivalry deepens." },
  { year: "1936", title: "Triumph at Moscow & Nottingham", place: "USSR / UK", note: "Late-career brilliance, tied with Botvinnik." },
] as const;

function Milestones() {
  return (
    <AppShell>
      <header className="mb-12">
        <div className="text-[11px] uppercase tracking-[0.28em] text-gold/80">Legacy</div>
        <h1 className="mt-2 font-display text-4xl text-cream md:text-5xl">Milestone Archive</h1>
        <p className="mt-3 max-w-2xl text-sm text-muted-foreground">
          A chronological journey through the tournaments and matches that shaped the legend.
        </p>
      </header>

      <ol className="relative ml-3 border-l border-border">
        {EVENTS.map((e, i) => (
          <li key={i} className="relative pb-10 pl-8 last:pb-0">
            <span className="absolute -left-[11px] flex h-5 w-5 items-center justify-center rounded-full gradient-gold shadow-luxe">
              <Trophy className="h-2.5 w-2.5 text-primary-foreground" />
            </span>
            <div className="rounded-2xl border border-border bg-surface p-5 shadow-luxe md:p-6">
              <div className="flex flex-wrap items-baseline justify-between gap-2">
                <h3 className="font-display text-xl text-cream">{e.title}</h3>
                <span className="font-display text-2xl text-gradient-gold">{e.year}</span>
              </div>
              <div className="mt-1 text-[11px] uppercase tracking-[0.22em] text-gold/80">{e.place}</div>
              <p className="mt-3 text-sm text-muted-foreground">{e.note}</p>
            </div>
          </li>
        ))}
      </ol>
    </AppShell>
  );
}
