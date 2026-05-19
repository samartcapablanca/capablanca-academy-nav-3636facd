import { useMemo } from "react";
import { cn } from "@/lib/utils";

// Realistic Staunton SVGs (Wikimedia / Cburnett, CC-BY-SA 3.0)
const STAUNTON: Record<string, string> = {
  wK: "https://upload.wikimedia.org/wikipedia/commons/4/42/Chess_klt45.svg",
  wQ: "https://upload.wikimedia.org/wikipedia/commons/1/15/Chess_qlt45.svg",
  wR: "https://upload.wikimedia.org/wikipedia/commons/7/72/Chess_rlt45.svg",
  wB: "https://upload.wikimedia.org/wikipedia/commons/b/b1/Chess_blt45.svg",
  wN: "https://upload.wikimedia.org/wikipedia/commons/7/70/Chess_nlt45.svg",
  wP: "https://upload.wikimedia.org/wikipedia/commons/4/45/Chess_plt45.svg",
  bK: "https://upload.wikimedia.org/wikipedia/commons/f/f0/Chess_kdt45.svg",
  bQ: "https://upload.wikimedia.org/wikipedia/commons/4/47/Chess_qdt45.svg",
  bR: "https://upload.wikimedia.org/wikipedia/commons/f/ff/Chess_rdt45.svg",
  bB: "https://upload.wikimedia.org/wikipedia/commons/9/98/Chess_bdt45.svg",
  bN: "https://upload.wikimedia.org/wikipedia/commons/e/ef/Chess_ndt45.svg",
  bP: "https://upload.wikimedia.org/wikipedia/commons/c/c7/Chess_pdt45.svg",
};

type BoardProps = {
  fen: string;
  lastMove?: { from: string; to: string } | null;
  interactive?: boolean;
  onSquareDrop?: (from: string, to: string) => void;
  /** Square to flash. kind 'success' = green pulse, 'error' = red shake */
  feedback?: { square: string; kind: "success" | "error" } | null;
};

// Parse FEN placement field into 8x8 grid of piece codes (e.g. "wK") or null.
function parseFen(fen: string): (string | null)[][] {
  const placement = fen.split(" ")[0];
  const rows = placement.split("/");
  return rows.map((row) => {
    const squares: (string | null)[] = [];
    for (const ch of row) {
      if (/\d/.test(ch)) {
        for (let i = 0; i < parseInt(ch, 10); i++) squares.push(null);
      } else {
        const color = ch === ch.toUpperCase() ? "w" : "b";
        squares.push(color + ch.toUpperCase());
      }
    }
    return squares;
  });
}

const FILES = ["a", "b", "c", "d", "e", "f", "g", "h"];

export function ChessBoardView({
  fen,
  lastMove,
  interactive = false,
  onSquareDrop,
  feedback = null,
}: BoardProps) {
  const board = useMemo(() => parseFen(fen), [fen]);

  return (
    <div className="relative mx-auto w-full max-w-[560px]">
      {/* Wooden outer frame */}
      <div
        className="relative rounded-xl p-3 md:p-4"
        style={{
          background:
            "linear-gradient(135deg, oklch(0.55 0.08 60), oklch(0.42 0.07 55))",
          boxShadow:
            "0 30px 60px -20px rgba(0,0,0,0.7), inset 0 0 0 2px oklch(0.65 0.09 65)",
        }}
      >
        <div className="grid grid-cols-8 overflow-hidden rounded-md ring-1 ring-black/40">
          {board.map((row, r) =>
            row.map((piece, c) => {
              const isLight = (r + c) % 2 === 0;
              const square = FILES[c] + (8 - r);
              const isLastMove =
                lastMove && (square === lastMove.from || square === lastMove.to);
              const fbHere = feedback && feedback.square === square ? feedback : null;

              const bg = isLight ? "oklch(0.90 0.035 80)" : "oklch(0.46 0.06 55)";

              return (
                <div
                  key={square}
                  className={cn(
                    "relative aspect-square",
                    fbHere?.kind === "success" && "square-flash-success",
                    fbHere?.kind === "error" && "square-flash-error",
                  )}
                  onDragOver={interactive ? (e) => e.preventDefault() : undefined}
                  onDrop={
                    interactive
                      ? (e) => {
                          e.preventDefault();
                          const from = e.dataTransfer.getData("text/plain");
                          if (from && from !== square) onSquareDrop?.(from, square);
                        }
                      : undefined
                  }
                  style={{
                    background: bg,
                    boxShadow: isLastMove
                      ? "inset 0 0 0 3px oklch(0.82 0.15 85 / 0.85)"
                      : undefined,
                  }}
                >
                  {/* coordinate labels */}
                  {c === 0 && (
                    <span
                      className={cn(
                        "pointer-events-none absolute left-0.5 top-0 text-[8px] font-semibold md:text-[10px]",
                        isLight ? "text-stone-700/70" : "text-stone-100/70",
                      )}
                    >
                      {8 - r}
                    </span>
                  )}
                  {r === 7 && (
                    <span
                      className={cn(
                        "pointer-events-none absolute bottom-0 right-0.5 text-[8px] font-semibold md:text-[10px]",
                        isLight ? "text-stone-700/70" : "text-stone-100/70",
                      )}
                    >
                      {FILES[c]}
                    </span>
                  )}

                  {piece && (
                    <div
                      className={cn(
                        "absolute inset-0 flex items-center justify-center",
                        interactive && "cursor-grab active:cursor-grabbing",
                      )}
                      draggable={interactive}
                      onDragStart={
                        interactive
                          ? (e) => {
                              e.dataTransfer.setData("text/plain", square);
                              e.dataTransfer.effectAllowed = "move";
                            }
                          : undefined
                      }
                    >
                      <img
                        src={STAUNTON[piece]}
                        alt={piece}
                        draggable={false}
                        className="h-[82%] w-[82%] select-none"
                        style={{
                          filter:
                            "drop-shadow(0 1px 1px rgba(0,0,0,0.35))",
                        }}
                      />
                    </div>
                  )}
                </div>
              );
            }),
          )}
        </div>
      </div>
    </div>
  );
}
