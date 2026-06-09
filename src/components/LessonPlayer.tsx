import { useEffect, useMemo, useState } from "react";
import { Chess } from "chess.js";
import { ChevronLeft, ChevronRight, Lightbulb, X, ArrowLeft } from "lucide-react";
import { ChessBoardView } from "./ChessBoardView";
import { getLesson } from "@/lib/lessons";
import { cn } from "@/lib/utils";

type Props = {
  lessonId: string | null;
  onClose: () => void;
  eyebrow?: string;
  titleOverride?: string;
};

export function LessonPlayer({ lessonId, onClose, eyebrow, titleOverride }: Props) {
  const lesson = useMemo(() => (lessonId ? getLesson(lessonId) : null), [lessonId]);
  const hasVariants = !!lesson?.variants?.length;

  const [variantIndex, setVariantIndex] = useState<number | null>(null);
  const [moveIndex, setMoveIndex] = useState(-1); // -1 = starting position

  // Reset state when opening a new lesson
  useEffect(() => {
    if (lessonId) {
      setVariantIndex(null);
      setMoveIndex(-1);
    }
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

  // Determine the active move list (linear lesson or selected variant)
  const currentMoves = useMemo(() => {
    if (!lesson) return [];
    if (lesson.variants && variantIndex !== null) {
      return lesson.variants[variantIndex]?.line ?? [];
    }
    return lesson.moves ?? [];
  }, [lesson, variantIndex]);

  const isChoosing = hasVariants && variantIndex === null;

  // Compute board state for current moveIndex
  const { fen, lastMove, applied } = useMemo(() => {
    if (!lesson) return { fen: new Chess().fen(), lastMove: null as null | { from: string; to: string }, applied: 0 };
    const game = lesson.startFen ? new Chess(lesson.startFen) : new Chess();
    let last: { from: string; to: string } | null = null;
    let count = 0;
    if (!isChoosing) {
      for (let i = 0; i <= moveIndex && i < currentMoves.length; i++) {
        try {
          const m = game.move(currentMoves[i].san);
          if (m) {
            last = { from: m.from, to: m.to };
            count++;
          }
        } catch {
          break;
        }
      }
    }
    return { fen: game.fen(), lastMove: last, applied: count };
  }, [lesson, moveIndex, currentMoves, isChoosing]);

  if (!lessonId || !lesson) return null;

  const total = currentMoves.length;
  const commentary = isChoosing
    ? lesson.intro
    : moveIndex < 0
      ? lesson.intro
      : currentMoves[Math.min(moveIndex, total - 1)]?.commentary;

  const canPrev = !isChoosing && moveIndex > -1;
  const canNext = !isChoosing && moveIndex < total - 1;
  const atEnd = !isChoosing && total > 0 && moveIndex === total - 1;

  const goBackToVariants = () => {
    setVariantIndex(null);
    setMoveIndex(-1);
  };

  return (
    <div className="fixed inset-0 z-50 flex flex-col bg-background/95 backdrop-blur-sm animate-fade-in">
      {/* Header */}
      <div className="flex items-center justify-between border-b border-border bg-sidebar px-4 py-3 md:px-8">
        <div className="min-w-0">
          <div className="text-[10px] uppercase tracking-[0.24em] text-gold/80">
            {eyebrow ?? `Lesson ${lessonId}`}
          </div>
          <h2 className="truncate font-display text-lg text-cream md:text-xl">{titleOverride ?? lesson.title}</h2>
        </div>
        <button
          onClick={onClose}
          className="flex h-9 w-9 items-center justify-center rounded-lg border border-border bg-surface text-muted-foreground transition hover:text-cream cursor-pointer"
          aria-label="Close lesson"
        >
          <X className="h-4 w-4" />
        </button>
      </div>

      {/* Body */}
      <div className="flex flex-1 flex-col overflow-y-auto md:flex-row">
        {/* Board */}
        <div className="flex flex-1 items-center justify-center bg-background p-4 md:basis-3/4 md:p-8">
          <ChessBoardView fen={fen} lastMove={lastMove} />
        </div>

        {/* Sidebar */}
        <aside className="flex flex-col border-t border-border bg-sidebar md:basis-1/4 md:border-l md:border-t-0">
          <div className="flex-1 overflow-y-auto p-5 md:p-6">
            <div className="rounded-2xl border border-border bg-surface p-5 shadow-luxe">
              <div className="flex items-center gap-2 text-[10px] uppercase tracking-[0.24em] text-gold/80">
                <Lightbulb className="h-3.5 w-3.5" /> Master's Commentary
              </div>
              <p
                key={`${variantIndex ?? "v"}-${moveIndex}`}
                className="mt-3 font-display text-base leading-relaxed text-cream animate-fade-in md:text-lg"
              >
                {commentary}
              </p>

              {!isChoosing && moveIndex >= 0 && applied > 0 && (
                <div className="mt-4 inline-flex items-center gap-2 rounded-md border border-border bg-surface-elevated px-3 py-1.5 font-mono text-xs text-gold">
                  {Math.floor(moveIndex / 2) + 1}
                  {moveIndex % 2 === 0 ? "." : "..."} {currentMoves[moveIndex].san}
                </div>
              )}

              {/* Variant picker */}
              {isChoosing && (
                <div className="mt-5">
                  {lesson.prompt && (
                    <p className="mb-3 text-sm text-muted-foreground">{lesson.prompt}</p>
                  )}
                  <ul className="flex flex-col gap-2">
                    {lesson.variants!.map((v, i) => (
                      <li key={i}>
                        <button
                          type="button"
                          onClick={() => {
                            setVariantIndex(i);
                            setMoveIndex(0);
                          }}
                          className="text-left text-gold hover:underline cursor-pointer font-normal"
                        >
                          {v.label}
                        </button>
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {/* Back-to-variants link at end of a variant */}
              {hasVariants && atEnd && (
                <button
                  type="button"
                  onClick={goBackToVariants}
                  className="mt-5 inline-flex items-center gap-1.5 text-gold hover:underline cursor-pointer font-normal"
                >
                  <ArrowLeft className="h-4 w-4" /> Go back to Variants
                </button>
              )}
            </div>

            {/* Progress dots (hidden during variant picker) */}
            {!isChoosing && total > 0 && (
              <div className="mt-5 flex flex-wrap items-center gap-1.5">
                {Array.from({ length: total + 1 }).map((_, i) => {
                  const idx = i - 1;
                  const active = idx === moveIndex;
                  const past = idx < moveIndex;
                  return (
                    <button
                      key={i}
                      onClick={() => {
                        if (idx === -1 && hasVariants) {
                          goBackToVariants();
                        } else {
                          setMoveIndex(idx);
                        }
                      }}
                      className={cn(
                        "h-2 rounded-full transition-all cursor-pointer",
                        active ? "w-6 bg-gold" : past ? "w-2 bg-gold/50" : "w-2 bg-muted",
                      )}
                      aria-label={`Go to move ${idx + 1}`}
                    />
                  );
                })}
              </div>
            )}
          </div>

          {/* Nav buttons (hidden during variant picker) */}
          {!isChoosing && (
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
          )}
        </aside>
      </div>
    </div>
  );
}
