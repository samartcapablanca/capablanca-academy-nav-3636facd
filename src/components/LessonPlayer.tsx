import { useEffect, useMemo, useState } from "react";
import { Chess } from "chess.js";
import { ChevronLeft, ChevronRight, Lightbulb, Box, Square, X } from "lucide-react";
import { ChessBoardView } from "./ChessBoardView";
import { getLesson } from "@/lib/lessons";
import { cn } from "@/lib/utils";

type Props = {
  lessonId: string | null;
  onClose: () => void;
  eyebrow?: string;
  titleOverride?: string;
};

export function LessonPlayer({ lessonId, onClose }: Props) {
  const lesson = useMemo(() => (lessonId ? getLesson(lessonId) : null), [lessonId]);
  const [moveIndex, setMoveIndex] = useState(-1); // -1 = starting position, 0..n-1 after move k
  const [perspective, setPerspective] = useState<"2.5d" | "2d">("2.5d");

  // Reset state when opening a new lesson
  useEffect(() => {
    if (lessonId) setMoveIndex(-1);
  }, [lessonId]);

  // Lock body scroll while open
  useEffect(() => {
    if (!lessonId) return;
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = prev;
    };
  }, [lessonId]);

  // Compute board state for current moveIndex. chess.js is stateful;
  // we rebuild from scratch each time to guarantee perspective switches
  // and back/forward navigation never desync.
  const { fen, lastMove, applied } = useMemo(() => {
    if (!lesson) return { fen: new Chess().fen(), lastMove: null as null | { from: string; to: string }, applied: 0 };
    const game = new Chess();
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
        // Invalid SAN in lesson data — stop applying further moves.
        break;
      }
    }
    return { fen: game.fen(), lastMove: last, applied: count };
  }, [lesson, moveIndex]);

  if (!lessonId || !lesson) return null;

  const commentary =
    moveIndex < 0
      ? lesson.intro
      : lesson.moves[Math.min(moveIndex, lesson.moves.length - 1)].commentary;

  const total = lesson.moves.length;
  const canPrev = moveIndex > -1;
  const canNext = moveIndex < total - 1;

  return (
    <div className="fixed inset-0 z-50 flex flex-col bg-background/95 backdrop-blur-sm animate-fade-in">
      {/* Header */}
      <div className="flex items-center justify-between border-b border-border bg-sidebar px-4 py-3 md:px-8">
        <div className="min-w-0">
          <div className="text-[10px] uppercase tracking-[0.24em] text-gold/80">
            Lesson {lessonId}
          </div>
          <h2 className="truncate font-display text-lg text-cream md:text-xl">{lesson.title}</h2>
        </div>
        <div className="flex items-center gap-2">
          <button
            onClick={() => setPerspective((p) => (p === "2.5d" ? "2d" : "2.5d"))}
            className="flex items-center gap-2 rounded-lg border border-border bg-surface px-3 py-2 text-xs font-medium text-cream transition hover:border-gold/50 hover:text-gold cursor-pointer"
            aria-label="Toggle perspective"
          >
            {perspective === "2.5d" ? (
              <>
                <Box className="h-4 w-4 text-gold" /> <span className="hidden sm:inline">2.5D</span>
              </>
            ) : (
              <>
                <Square className="h-4 w-4 text-gold" /> <span className="hidden sm:inline">2D</span>
              </>
            )}
          </button>
          <button
            onClick={onClose}
            className="flex h-9 w-9 items-center justify-center rounded-lg border border-border bg-surface text-muted-foreground transition hover:text-cream cursor-pointer"
            aria-label="Close lesson"
          >
            <X className="h-4 w-4" />
          </button>
        </div>
      </div>

      {/* Body: 75/25 on desktop, stacked on mobile */}
      <div className="flex flex-1 flex-col overflow-y-auto md:flex-row">
        {/* Board: left 75% */}
        <div className="flex flex-1 items-center justify-center bg-background p-4 md:basis-3/4 md:p-8">
          <ChessBoardView fen={fen} perspective={perspective} lastMove={lastMove} />
        </div>

        {/* Sidebar: right 25% */}
        <aside className="flex flex-col border-t border-border bg-sidebar md:basis-1/4 md:border-l md:border-t-0">
          <div className="flex-1 overflow-y-auto p-5 md:p-6">
            <div className="rounded-2xl border border-border bg-surface p-5 shadow-luxe">
              <div className="flex items-center gap-2 text-[10px] uppercase tracking-[0.24em] text-gold/80">
                <Lightbulb className="h-3.5 w-3.5" /> Master's Commentary
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
                    onClick={() => setMoveIndex(idx)}
                    className={cn(
                      "h-2 rounded-full transition-all cursor-pointer",
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
              onClick={() => canNext && setMoveIndex((i) => i + 1)}
              disabled={!canNext}
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
