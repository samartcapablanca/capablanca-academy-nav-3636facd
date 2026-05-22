import { createFileRoute } from "@tanstack/react-router";
import { useMemo, useState } from "react";
import { Chess } from "chess.js";
import { AppShell } from "@/components/AppShell";
import { ChessBoardView } from "@/components/ChessBoardView";
import { MatchReplayPlayer } from "@/components/MatchReplayPlayer";
import { pickRandomPuzzle, type PuzzleEntry } from "@/lib/puzzle-pool";
import { Sparkles, Flame, ArrowUpRight, Target, CheckCircle2, Lightbulb } from "lucide-react";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Dashboard — Capablanca Masterclass" },
      { name: "description", content: "Your elite chess training dashboard inspired by José Raúl Capablanca." },
    ],
  }),
  component: Dashboard,
});

// Pick a random puzzle from the unified pool (Open Archive + enriched Milestones).
function pickDailyGame(): PuzzleEntry {
  return pickRandomPuzzle();
}

function stripSan(san: string) {
  return san.replace(/[+#?!]/g, "").trim();
}

function Dashboard() {
  const progress = 42;
  const game = useMemo(() => pickDailyGame(), []);

  // Puzzle board state
  const [fen, setFen] = useState<string>(game.puzzleFen);
  const [lastMove, setLastMove] = useState<{ from: string; to: string } | null>(null);
  const [feedback, setFeedback] = useState<{ square: string; kind: "success" | "error" } | null>(null);
  const [solved, setSolved] = useState(false);
  const [hint, setHint] = useState<string | null>(null);

  // Dashboard metrics
  const [rating, setRating] = useState(1640);
  const [puzzlesSolved, setPuzzlesSolved] = useState(128);
  const [streakLit, setStreakLit] = useState(true);
  const [ratingBump, setRatingBump] = useState(0); // controls floating +15
  const [solvedBump, setSolvedBump] = useState(0);

  const [replayOpen, setReplayOpen] = useState(false);

  const expectedTurn = game.puzzleFen.split(" ")[1] as "w" | "b";

  function handleDrop(from: string, to: string) {
    if (solved) return;
    const chess = new Chess(fen);
    if (chess.turn() !== expectedTurn) return;

    let move;
    try {
      move = chess.move({ from, to, promotion: "q" });
    } catch {
      move = null;
    }

    if (!move) {
      // Illegal move — snap back, show hint
      setFeedback({ square: from, kind: "error" });
      setHint(game.hint);
      setTimeout(() => setFeedback(null), 600);
      return;
    }

    const played = stripSan(move.san);
    const target = stripSan(game.winningMove);

    if (played === target) {
      setFen(chess.fen());
      setLastMove({ from: move.from, to: move.to });
      setFeedback({ square: move.to, kind: "success" });
      setSolved(true);
      setHint(null);

      // Bump metrics with floating animation
      setRating((r) => r + 15);
      setPuzzlesSolved((n) => n + 1);
      setStreakLit(true);
      const k = Date.now();
      setRatingBump(k);
      setSolvedBump(k);

      setTimeout(() => setFeedback(null), 900);
    } else {
      // Legal but wrong — snap back, shake, show hint
      setFeedback({ square: move.to, kind: "error" });
      setHint(game.hint);
      setTimeout(() => setFeedback(null), 600);
    }
  }

  function resetPuzzle() {
    setFen(game.puzzleFen);
    setLastMove(null);
    setFeedback(null);
    setSolved(false);
    setHint(null);
  }

  const sideToMove = expectedTurn === "w" ? "White" : "Black";

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
          <div className="h-full rounded-full gradient-gold transition-all" style={{ width: `${progress}%` }} />
        </div>
        <div className="mt-4 flex flex-wrap items-center justify-between gap-2 text-xs text-muted-foreground">
          <span>14 of 33 lessons complete</span>
          <span className="flex items-center gap-1.5 text-gold/90">
            <Flame className="h-3.5 w-3.5" /> 7-day streak
          </span>
        </div>
      </section>

      {/* Daily puzzle + stats */}
      <section className="mt-6 grid gap-6 md:grid-cols-3">
        <div className="md:col-span-2 rounded-2xl border border-border bg-surface p-6 shadow-luxe md:p-8">
          <div className="flex flex-wrap items-center justify-between gap-2">
            <div className="flex items-center gap-2 text-[10px] uppercase tracking-[0.24em] text-gold/80">
              <Sparkles className="h-3.5 w-3.5" /> Daily Capablanca Position
            </div>
            <span className="text-[11px] text-muted-foreground">
              {game.event} · {game.year}
            </span>
          </div>

          <h3 className="mt-3 font-display text-2xl text-cream">
            {game.white} <span className="text-muted-foreground">vs.</span> {game.black}
          </h3>
          <p className="mt-1 text-xs uppercase tracking-[0.22em] text-gold/70">
            {game.opening} · {sideToMove} to move
          </p>

          <div className="mt-5">
            <ChessBoardView
              fen={fen}
              lastMove={lastMove}
              interactive={!solved}
              onSquareDrop={handleDrop}
              feedback={feedback}
            />
          </div>

          {/* Hint / Success block */}
          <div className="mt-5 min-h-[64px]">
            {solved ? (
              <div className="flex items-start gap-3 rounded-xl border border-gold/40 bg-gold/5 p-4 animate-fade-in">
                <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-gold" />
                <div>
                  <div className="text-[10px] uppercase tracking-[0.22em] text-gold/80">
                    Master's verdict
                  </div>
                  <p className="mt-1 text-sm text-cream">{game.successText}</p>
                </div>
              </div>
            ) : hint ? (
              <div className="flex items-start gap-3 rounded-xl border border-border bg-surface-elevated p-4 animate-fade-in">
                <Lightbulb className="mt-0.5 h-5 w-5 shrink-0 text-gold" />
                <div>
                  <div className="text-[10px] uppercase tracking-[0.22em] text-muted-foreground">
                    Hint
                  </div>
                  <p className="mt-1 text-sm text-cream/90">{hint}</p>
                </div>
              </div>
            ) : (
              <p className="text-sm text-muted-foreground">
                What's Raúl's next move? Drag a piece to play.
              </p>
            )}
          </div>

          <div className="mt-6 flex flex-wrap items-center gap-3">
            <button
              onClick={() => setReplayOpen(true)}
              className="inline-flex items-center gap-2 rounded-lg gradient-gold px-5 py-2.5 text-sm font-medium text-primary-foreground transition hover:opacity-90 cursor-pointer"
            >
              Study the full game <ArrowUpRight className="h-4 w-4" />
            </button>
            {solved && (
              <button
                onClick={resetPuzzle}
                className="text-xs uppercase tracking-[0.22em] text-muted-foreground transition hover:text-cream"
              >
                Reset puzzle
              </button>
            )}
          </div>
        </div>

        <div className="flex flex-col gap-6">
          <StatCard
            icon={Target}
            label="Puzzles solved"
            value={String(puzzlesSolved)}
            hint="+12 this week"
            bumpKey={solvedBump}
            bumpText="+1"
          />
          <StatCard
            icon={Flame}
            label="Current rating"
            value={String(rating)}
            hint="▲ 38 pts"
            bumpKey={ratingBump}
            bumpText="+15"
          />
          <div className="rounded-2xl border border-border bg-surface p-5 shadow-luxe">
            <div className="flex items-center justify-between">
              <div className="text-[10px] uppercase tracking-[0.24em] text-gold/80">7-day streak</div>
              <Flame
                className={`h-4 w-4 transition ${streakLit ? "text-gold drop-shadow-[0_0_8px_oklch(0.82_0.16_85)]" : "text-muted-foreground"}`}
              />
            </div>
            <p className="mt-2 font-display text-lg text-cream">
              {streakLit ? "Flame burning bright" : "Solve today to keep it"}
            </p>
            <p className="mt-1 text-xs text-muted-foreground">Daily Capablanca · {game.event}</p>
          </div>
        </div>
      </section>

      <MatchReplayPlayer
        matchId={replayOpen ? game.matchId : null}
        eyebrow={`${game.event} · ${game.year}`}
        titleOverride={`${game.white} vs. ${game.black}`}
        capablancaColor={game.white.includes("Capablanca") ? "w" : "b"}
        onClose={() => setReplayOpen(false)}
      />
    </AppShell>
  );
}

function StatCard({
  icon: Icon,
  label,
  value,
  hint,
  bumpKey,
  bumpText,
}: {
  icon: any;
  label: string;
  value: string;
  hint: string;
  bumpKey?: number;
  bumpText?: string;
}) {
  return (
    <div className="relative overflow-visible rounded-2xl border border-border bg-surface p-5 shadow-luxe">
      <div className="flex items-center justify-between">
        <span className="text-[10px] uppercase tracking-[0.24em] text-muted-foreground">{label}</span>
        <Icon className="h-4 w-4 text-gold" />
      </div>
      <div className="relative mt-3 font-display text-3xl text-cream">
        {value}
        {bumpKey ? (
          <span
            key={bumpKey}
            className="pointer-events-none absolute -right-2 -top-3 font-display text-sm text-gold rating-float"
          >
            {bumpText}
          </span>
        ) : null}
      </div>
      <div className="mt-1 text-[11px] text-gold/80">{hint}</div>
    </div>
  );
}
