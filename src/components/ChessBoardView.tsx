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

const FLAT_GLYPH: Record<string, string> = {
  wK: "♔", wQ: "♕", wR: "♖", wB: "♗", wN: "♘", wP: "♙",
  bK: "♚", bQ: "♛", bR: "♜", bB: "♝", bN: "♞", bP: "♟",
};

type BoardProps = {
  fen: string;
  perspective: "2.5d" | "2d";
  lastMove?: { from: string; to: string } | null;
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

export function ChessBoardView({ fen, perspective, lastMove }: BoardProps) {
  const board = useMemo(() => parseFen(fen), [fen]);
  const isIso = perspective === "2.5d";

  return (
    <div className="relative mx-auto w-full max-w-[560px]" style={{ perspective: "1600px" }}>
      {/* Oak outer frame */}
      <div
        className={cn(
          "relative rounded-xl p-3 md:p-4 transition-all duration-500",
        )}
        style={{
          background: isIso
            ? "linear-gradient(135deg, oklch(0.55 0.08 60), oklch(0.42 0.07 55))"
            : "linear-gradient(135deg, oklch(0.34 0.04 270), oklch(0.28 0.04 270))",
          boxShadow: isIso
            ? "0 30px 60px -20px rgba(0,0,0,0.7), inset 0 0 0 2px oklch(0.65 0.09 65)"
            : "0 10px 30px -10px rgba(0,0,0,0.6)",
          transform: isIso ? "rotateX(22deg)" : "rotateX(0deg)",
          transformStyle: "preserve-3d",
          transition: "transform 500ms ease-out, background 500ms ease-out",
        }}
      >
        <div className="relative">
          <div className="grid grid-cols-8 overflow-hidden rounded-md ring-1 ring-black/40">
            {board.map((row, r) =>
              row.map((piece, c) => {
                const isLight = (r + c) % 2 === 0;
                const square = FILES[c] + (8 - r);
                const isLastMove =
                  lastMove && (square === lastMove.from || square === lastMove.to);

                let bg: string;
                if (isIso) {
                  bg = isLight
                    ? "linear-gradient(135deg, oklch(0.92 0.04 80), oklch(0.86 0.05 75))"
                    : "linear-gradient(135deg, oklch(0.42 0.05 50), oklch(0.32 0.05 45))";
                } else {
                  bg = isLight ? "oklch(0.88 0.04 85)" : "oklch(0.45 0.06 260)";
                }

                return (
                  <div
                    key={square}
                    className="relative aspect-square"
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
                        className="absolute inset-0 flex items-center justify-center"
                      >

                        {isIso ? (
                          <img
                            src={STAUNTON[piece]}
                            alt={piece}
                            draggable={false}
                            className="h-[78%] w-[78%] select-none"
                            style={{
                              filter:
                                "drop-shadow(2px 6px 4px rgba(0,0,0,0.55)) drop-shadow(0 2px 1px rgba(0,0,0,0.3))",
                            }}
                          />
                        ) : (
                          <span
                            className={cn(
                              "select-none font-chess leading-none",
                              piece.startsWith("w") ? "text-stone-50" : "text-stone-900",
                            )}
                            style={{
                              fontSize: "min(7vw, 44px)",
                              textShadow: piece.startsWith("w")
                                ? "0 1px 0 rgba(0,0,0,0.45)"
                                : "0 1px 0 rgba(255,255,255,0.15)",
                            }}
                          >
                            {FLAT_GLYPH[piece]}
                          </span>
                        )}
                      </div>
                    )}
                  </div>
                );
              }),
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
