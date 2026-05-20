import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";
import { AppShell } from "@/components/AppShell";
import { MatchReplayPlayer } from "@/components/MatchReplayPlayer";
import { ARCHIVE_GAMES } from "@/lib/archive";
import { Sparkles, Flame, ArrowUpRight, Target } from "lucide-react";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Dashboard — Capablanca Masterclass" },
      { name: "description", content: "Your elite chess training dashboard inspired by José Raúl Capablanca." },
    ],
  }),
  component: Dashboard,
});

// Months with 31 days unlock the special Hastings 1919 featured game (id 31).
// Other months rotate the daily challenge across the archive deterministically.
function pickDailyGame() {
  const d = new Date();
  const daysInMonth = new Date(d.getFullYear(), d.getMonth() + 1, 0).getDate();
  if (daysInMonth === 31) {
    return ARCHIVE_GAMES.find((g) => g.id === 31) ?? ARCHIVE_GAMES[0];
  }
  // Rotate by day-of-year across the non-Hastings entries.
  const start = new Date(d.getFullYear(), 0, 0);
  const dayOfYear = Math.floor((d.getTime() - start.getTime()) / 86400000);
  const pool = ARCHIVE_GAMES.filter((g) => g.id !== 31);
  return pool[dayOfYear % pool.length];
}

function Dashboard() {
  const progress = 42;
  const game = pickDailyGame();
  const featured = {
    caption: `${game.white} vs. ${game.black} · ${game.year}`,
    prompt: game.hint,
    matchId: `archive-${game.id}` as string | null,
    eyebrow: `${game.event} · ${game.year}`,
    title: `${game.white} vs. ${game.black}`,
    capablancaColor: (game.white.includes("Capablanca") ? "w" : "b") as "w" | "b",
  };
  const [replayOpen, setReplayOpen] = useState(false);

  return (
    <AppShell>
      <header className="mb-10">
        <div className="text-[11px] uppercase tracking-[0.28em] text-gold/80">Welcome back</div>
        <h1 className="mt-2 font-display text-4xl text-cream md:text-5xl">
          Good evening, <span className="text-gradient-gold">Student</span>
        </h1>
        <p className="mt-3 max-w-xl text-sm text-muted-foreground">
          Continue your study of the Cuban virtuoso. Precision, clarity, and the endgame await.
        </p>
      </header>

      {/* Progress */}
      <section className="rounded-2xl border border-border bg-surface p-6 shadow-luxe md:p-8">
        <div className="flex items-end justify-between gap-4">
          <div>
            <div className="text-[10px] uppercase tracking-[0.24em] text-muted-foreground">
              Mastery Progress
            </div>
            <h2 className="mt-1 font-display text-2xl text-cream">Level 1: Fundamentals</h2>
          </div>
          <div className="font-display text-3xl text-gradient-gold">{progress}%</div>
        </div>
        <div className="mt-6 h-2 overflow-hidden rounded-full bg-muted">
          <div
            className="h-full rounded-full gradient-gold transition-all"
            style={{ width: `${progress}%` }}
          />
        </div>
        <div className="mt-4 flex flex-wrap items-center justify-between gap-2 text-xs text-muted-foreground">
          <span>14 of 33 lessons complete</span>
          <span className="flex items-center gap-1.5 text-gold/90">
            <Flame className="h-3.5 w-3.5" /> 7-day streak
          </span>
        </div>
      </section>

      {/* Daily position + stats */}
      <section className="mt-6 grid gap-6 md:grid-cols-3">
        <div className="md:col-span-2 rounded-2xl border border-border bg-surface p-6 shadow-luxe md:p-8">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2 text-[10px] uppercase tracking-[0.24em] text-gold/80">
              <Sparkles className="h-3.5 w-3.5" /> Daily Capablanca Position
            </div>
            <span className="text-[11px] text-muted-foreground">{featured.caption}</span>
          </div>
          <h3 className="mt-3 font-display text-2xl text-cream">{featured.prompt}</h3>
          <ChessBoard />
          {featured.matchId ? (
            <button
              onClick={() => setReplayOpen(true)}
              className="mt-6 inline-flex items-center gap-2 rounded-lg gradient-gold px-5 py-2.5 text-sm font-medium text-primary-foreground transition hover:opacity-90 cursor-pointer"
            >
              Study the solution <ArrowUpRight className="h-4 w-4" />
            </button>
          ) : (
            <Link
              to="/openings"
              className="mt-6 inline-flex items-center gap-2 rounded-lg gradient-gold px-5 py-2.5 text-sm font-medium text-primary-foreground transition hover:opacity-90"
            >
              Study the solution <ArrowUpRight className="h-4 w-4" />
            </Link>
          )}
        </div>

        <div className="flex flex-col gap-6">
          <StatCard icon={Target} label="Puzzles solved" value="128" hint="+12 this week" />
          <StatCard icon={Flame} label="Current rating" value="1640" hint="▲ 38 pts" />
          <div className="rounded-2xl border border-border bg-surface p-5 shadow-luxe">
            <div className="text-[10px] uppercase tracking-[0.24em] text-gold/80">Next session</div>
            <p className="mt-2 font-display text-lg text-cream">The Rook Endgame</p>
            <p className="mt-1 text-xs text-muted-foreground">Module 4 · 18 minutes</p>
          </div>
        </div>
      </section>

      <MatchReplayPlayer
        matchId={replayOpen ? featured.matchId : null}
        eyebrow={featured.eyebrow}
        titleOverride={featured.title}
        capablancaColor={featured.capablancaColor}
        onClose={() => setReplayOpen(false)}
      />
    </AppShell>
  );
}

function StatCard({ icon: Icon, label, value, hint }: { icon: any; label: string; value: string; hint: string }) {
  return (
    <div className="rounded-2xl border border-border bg-surface p-5 shadow-luxe">
      <div className="flex items-center justify-between">
        <span className="text-[10px] uppercase tracking-[0.24em] text-muted-foreground">{label}</span>
        <Icon className="h-4 w-4 text-gold" />
      </div>
      <div className="mt-3 font-display text-3xl text-cream">{value}</div>
      <div className="mt-1 text-[11px] text-gold/80">{hint}</div>
    </div>
  );
}

function ChessBoard() {
  return (
    <div className="mt-5 overflow-hidden rounded-xl border border-border/80 bg-surface-elevated p-3">
      <div className="grid grid-cols-8 gap-0 overflow-hidden rounded-md">
        {Array.from({ length: 64 }).map((_, i) => {
          const r = Math.floor(i / 8);
          const c = i % 8;
          const light = (r + c) % 2 === 0;
          return (
            <div
              key={i}
              className="aspect-square"
              style={{
                background: light ? "oklch(0.88 0.05 85)" : "oklch(0.36 0.05 270)",
              }}
            />
          );
        })}
      </div>
    </div>
  );
}
