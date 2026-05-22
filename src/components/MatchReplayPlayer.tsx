import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import { Chess } from "chess.js";
import {
  ChevronLeft,
  ChevronRight,
  Lightbulb,
  X,
  Sparkles,
} from "lucide-react";
import { toast } from "sonner";
import { ChessBoardView } from "./ChessBoardView";
import { Switch } from "@/components/ui/switch";
import { getLesson } from "@/lib/lessons";
import { cn } from "@/lib/utils";

type Props = {
  /** Lesson/game id (maps into LESSONS). null to close. */
  matchId: string | null;
  onClose: () => void;
  eyebrow?: string;
  titleOverride?: string;
  /** Which side did Capablanca play in this match? */
  capablancaColor: "w" | "b";
};

// Tiny, dependency-free success chime via Web Audio API.
function playSuccessChime() {
  try {
    const Ctx =
      (window as unknown as { AudioContext?: typeof AudioContext; webkitAudioContext?: typeof AudioContext })
        .AudioContext ??
      (window as unknown as { webkitAudioContext?: typeof AudioContext }).webkitAudioContext;
    if (!Ctx) return;
    const ctx = new Ctx();
    const now = ctx.currentTime;
    [
      [659.25, 0],   // E5
      [880.0, 0.09], // A5
    ].forEach(([freq, t]) => {
      const o = ctx.createOscillator();
      const g = ctx.createGain();
      o.type = "triangle";
      o.frequency.value = freq;
      g.gain.setValueAtTime(0.0001, now + t);
      g.gain.exponentialRampToValueAtTime(0.18, now + t + 0.02);
      g.gain.exponentialRampToValueAtTime(0.0001, now + t + 0.35);
      o.connect(g).connect(ctx.destination);
      o.start(now + t);
      o.stop(now + t + 0.4);
    });
    setTimeout(() => ctx.close().catch(() => {}), 800);
  } catch {
    // ignore
  }
}

export function MatchReplayPlayer({
  matchId,
  onClose,
  eyebrow,
  titleOverride,
  capablancaColor,
}: Props) {
  const lesson = useMemo(() => (matchId ? getLesson(matchId) : null), [matchId]);
  const [moveIndex, setMoveIndex] = useState(-1);
  
  const [guessMode, setGuessMode] = useState(false);
  const [feedback, setFeedback] =
    useState<{ square: string; kind: "success" | "error" } | null>(null);
  const feedbackTimer = useRef<ReturnType<typeof setTimeout> | null>(null);
  const autoTimer = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    if (matchId) {
      setMoveIndex(-1);
      setGuessMode(false);
      setFeedback(null);
    }
    return () => {
      if (feedbackTimer.current) clearTimeout(feedbackTimer.current);
      if (autoTimer.current) clearTimeout(autoTimer.current);
    };
  }, [matchId]);

  // Guess Mode auto-disables whenever we're not sitting on the designated
  // guess target (e.g. after a successful guess advances the board, or after
  // the user navigates away from the target with Prev/Next).
  useEffect(() => {
    if (!lesson) return;
    if (typeof lesson.guessMoveIndex !== "number") return;
    if (moveIndex + 1 !== lesson.guessMoveIndex && guessMode) {
      setGuessMode(false);
      setFeedback(null);
    }
  }, [moveIndex, lesson, guessMode]);

  useEffect(() => {
    if (!matchId) return;
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = prev;
    };
  }, [matchId]);

  // Build position from scratch at every moveIndex change — guarantees
  // perspective switches and back/forward navigation never desync.
  const { fen, lastMove, turn, applied } = useMemo(() => {
    if (!lesson)
      return {
        fen: new Chess().fen(),
        lastMove: null as null | { from: string; to: string },
        turn: "w" as "w" | "b",
        applied: 0,
      };
    const game = lesson.startFen ? new Chess(lesson.startFen) : new Chess();
    let last: { from: string; to: string } | null = null;
    let count = 0;
    for (let i = 0; i <= moveIndex && i < lesson.moves.length; i++) {
      try {
        const m = game.move(lesson.moves[i].san);
        if (m) {
          last = { from: m.from, to: m.to };
          count++;
        }
      } catch {
        break;
      }
    }
    return { fen: game.fen(), lastMove: last, turn: game.turn(), applied: count };
  }, [lesson, moveIndex]);

  // Compute the expected next move (from/to) by replaying into a clone.
  const nextExpected = useMemo(() => {
    if (!lesson) return null;
    const ni = moveIndex + 1;
    if (ni >= lesson.moves.length) return null;
    const g = lesson.startFen ? new Chess(lesson.startFen) : new Chess();
    for (let i = 0; i <= moveIndex && i < lesson.moves.length; i++) {
      try {
        g.move(lesson.moves[i].san);
      } catch {
        return null;
      }
    }
    try {
      const m = g.move(lesson.moves[ni].san);
      return m ? { from: m.from, to: m.to, san: lesson.moves[ni].san } : null;
    } catch {
      return null;
    }
  }, [lesson, moveIndex]);

  // Count how many moves in this lesson actually apply cleanly to the start
  // position. If the SAN list contains a bad move, we clamp the player to the
  // last legal one so the board, commentary, and progress dots stay in sync.
  const playableTotal = useMemo(() => {
    if (!lesson) return 0;
    const g = lesson.startFen ? new Chess(lesson.startFen) : new Chess();
    let n = 0;
    for (const mv of lesson.moves) {
      try {
        if (!g.move(mv.san)) break;
        n++;
      } catch {
        break;
      }
    }
    return n;
  }, [lesson]);

  const total = playableTotal;
  const canPrev = moveIndex > -1;
  const canNext = moveIndex < total - 1;

  // In Guess Mode, the Next button is locked while it's Capablanca's turn
  // — and, if the lesson designates a specific guess target, only at that
  // exact move index.
  const atDesignatedTarget =
    typeof lesson?.guessMoveIndex === "number"
      ? moveIndex + 1 === lesson.guessMoveIndex
      : true;
  const lockedForGuess =
    !!lesson &&
    guessMode &&
    !!nextExpected &&
    turn === capablancaColor &&
    atDesignatedTarget;

  const advance = useCallback(() => setMoveIndex((i) => i + 1), []);

  const handleSquareDrop = useCallback(
    (from: string, to: string) => {
      if (!lesson || !nextExpected) return;
      // Only intercept when it's Capablanca's turn AND, if a designated
      // guess target exists, we're sitting on exactly that move.
      const isCapaTurn = turn === capablancaColor;
      const designated =
        typeof lesson.guessMoveIndex === "number"
          ? moveIndex + 1 === lesson.guessMoveIndex
          : true;
      if (!guessMode || !isCapaTurn || !designated) {
        return;
      }
      const correct = from === nextExpected.from && to === nextExpected.to;
      if (correct) {
        if (feedbackTimer.current) clearTimeout(feedbackTimer.current);
        setFeedback({ square: to, kind: "success" });
        playSuccessChime();
        advance();
        // Guess succeeded — disable Guess the Move so playback resumes
        // normally and the toggle locks again until the next target.
        setGuessMode(false);
        feedbackTimer.current = setTimeout(() => setFeedback(null), 900);
        if (autoTimer.current) clearTimeout(autoTimer.current);
        autoTimer.current = setTimeout(() => {
          setMoveIndex((i) => {
            if (!lesson) return i;
            return i + 1 < lesson.moves.length ? i + 1 : i;
          });
        }, 1500);
      } else {
        if (feedbackTimer.current) clearTimeout(feedbackTimer.current);
        setFeedback({ square: from, kind: "error" });
        toast.error("That wasn't Capablanca's choice.", {
          description:
            lesson.guessHint ?? "Scan the board and try again!",
        });
        feedbackTimer.current = setTimeout(() => setFeedback(null), 500);
      }
    },
    [advance, capablancaColor, guessMode, lesson, moveIndex, nextExpected, turn],
  );

  if (!matchId || !lesson) return null;

  const commentary =
    moveIndex < 0
      ? lesson.intro
      : lesson.moves[Math.min(moveIndex, Math.max(total - 1, 0))].commentary;

  return (
    <div className="fixed inset-0 z-50 flex flex-col bg-background/95 backdrop-blur-sm animate-fade-in">
      {/* Header */}
      <div className="flex items-center justify-between border-b border-border bg-sidebar px-4 py-3 md:px-8">
        <div className="min-w-0">
          <div className="text-[10px] uppercase tracking-[0.24em] text-gold/80">
            {eyebrow ?? "Match Replay"}
          </div>
          <h2 className="truncate font-display text-lg text-cream md:text-xl">
            {titleOverride ?? lesson.title}
          </h2>
        </div>
        <button
          onClick={onClose}
          className="flex h-9 w-9 items-center justify-center rounded-lg border border-border bg-surface text-muted-foreground transition hover:text-cream cursor-pointer"
          aria-label="Close match"
        >
          <X className="h-4 w-4" />
        </button>
      </div>

      {/* Body */}
      <div className="flex flex-1 flex-col overflow-y-auto md:flex-row">
        {/* Board */}
        <div className="flex flex-1 items-center justify-center bg-background p-4 md:basis-3/4 md:p-8">
          <div className="w-full">
            <ChessBoardView
              fen={fen}
              
              lastMove={lastMove}
              interactive={guessMode}
              onSquareDrop={handleSquareDrop}
              feedback={feedback}
            />
            {lockedForGuess && (
              <p className="mt-5 text-center text-xs uppercase tracking-[0.28em] text-gold/80 animate-fade-in">
                Your move — play as Capablanca
              </p>
            )}
          </div>
        </div>

        {/* Sidebar */}
        <aside className="flex flex-col border-t border-border bg-sidebar md:basis-1/4 md:border-l md:border-t-0">
          <div className="flex-1 overflow-y-auto p-5 md:p-6">
            {/* Guess the Move toggle */}
            {(() => {
              const hasGuessTarget = typeof lesson.guessMoveIndex === "number";
              const atGuessPoint =
                hasGuessTarget && moveIndex + 1 === lesson.guessMoveIndex;
              const switchDisabled = hasGuessTarget && !atGuessPoint;
              return (
                <div
                  className={cn(
                    "flex items-start justify-between gap-4 rounded-2xl border bg-surface-elevated/60 p-4 transition",
                    switchDisabled ? "border-border opacity-60" : "border-gold/25",
                  )}
                >
                  <div className="min-w-0">
                    <div
                      className={cn(
                        "flex items-center gap-2 text-[10px] uppercase tracking-[0.24em]",
                        switchDisabled ? "text-muted-foreground" : "text-gold",
                      )}
                    >
                      <Sparkles className="h-3.5 w-3.5" /> Guess the Move
                    </div>
                    <p className="mt-1.5 text-xs leading-relaxed text-muted-foreground">
                      {switchDisabled
                        ? "Unlocks when Capablanca's signature moment arrives."
                        : guessMode
                          ? "Drag Capablanca's piece to play his move."
                          : "Toggle on to play Capablanca's move yourself."}
                    </p>
                  </div>
                  <Switch
                    checked={guessMode}
                    disabled={switchDisabled}
                    onCheckedChange={(v) => {
                      setGuessMode(v);
                      setFeedback(null);
                    }}
                    className="mt-1 data-[state=checked]:bg-gold"
                  />
                </div>
              );
            })()}

            {/* Raúl's Strategy commentary */}
            <div className="mt-5 rounded-2xl border border-border bg-surface p-5 shadow-luxe">
              <div className="flex items-center gap-2 text-[10px] uppercase tracking-[0.24em] text-gold/80">
                <Lightbulb className="h-3.5 w-3.5" /> Raúl's Strategy
              </div>
              <p
                key={moveIndex}
                className="mt-3 font-display text-base leading-relaxed text-cream animate-fade-in md:text-lg"
              >
                {commentary}
              </p>
              {moveIndex >= 0 && applied > 0 && (
                <div className="mt-4 inline-flex items-center gap-2 rounded-md border border-border bg-surface-elevated px-3 py-1.5 font-mono text-xs text-gold">
                  {Math.floor(moveIndex / 2) + 1}
                  {moveIndex % 2 === 0 ? "." : "..."} {lesson.moves[moveIndex].san}
                </div>
              )}
            </div>

            {/* Progress dots */}
            <div className="mt-5 flex flex-wrap items-center gap-1.5">
              {Array.from({ length: total + 1 }).map((_, i) => {
                const idx = i - 1;
                const active = idx === moveIndex;
                const past = idx < moveIndex;
                return (
                  <button
                    key={i}
                    onClick={() => !lockedForGuess && setMoveIndex(idx)}
                    disabled={lockedForGuess}
                    className={cn(
                      "h-2 rounded-full transition-all",
                      lockedForGuess ? "cursor-not-allowed opacity-60" : "cursor-pointer",
                      active ? "w-6 bg-gold" : past ? "w-2 bg-gold/50" : "w-2 bg-muted",
                    )}
                    aria-label={`Go to move ${idx + 1}`}
                  />
                );
              })}
            </div>
          </div>

          {/* Nav buttons */}
          <div className="grid grid-cols-2 gap-3 border-t border-border bg-sidebar p-4 md:p-5">
            <button
              onClick={() => canPrev && setMoveIndex((i) => i - 1)}
              disabled={!canPrev}
              className="flex items-center justify-center gap-2 rounded-xl border border-border bg-surface px-4 py-4 text-sm font-medium text-cream transition hover:border-gold/50 hover:text-gold disabled:cursor-not-allowed disabled:opacity-40 cursor-pointer"
            >
              <ChevronLeft className="h-5 w-5" /> Previous
            </button>
            <button
              onClick={() => canNext && !lockedForGuess && advance()}
              disabled={!canNext || lockedForGuess}
              title={lockedForGuess ? "Play Capablanca's move to continue" : undefined}
              className="flex items-center justify-center gap-2 rounded-xl gradient-gold px-4 py-4 text-sm font-semibold text-primary-foreground shadow-luxe transition hover:opacity-90 disabled:cursor-not-allowed disabled:opacity-40 cursor-pointer"
            >
              Next <ChevronRight className="h-5 w-5" />
            </button>
          </div>
        </aside>
      </div>
    </div>
  );
}
