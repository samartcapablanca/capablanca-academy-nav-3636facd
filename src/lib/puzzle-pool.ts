// Unified puzzle pool that combines the Open Archive and any Milestone Archive
// games that have been enriched with puzzle data. Both pages keep their own
// pages and presentation, but every game shares the same shape and is eligible
// to surface as the Daily Capablanca Position on the dashboard.

import { ARCHIVE_GAMES } from "./archive";
import { ARCHIVE as MILESTONES } from "./milestones";

export type PuzzleEntry = {
  /** ID used to look up the replay lesson via getLesson() / MatchReplayPlayer. */
  matchId: string;
  white: string;
  black: string;
  event: string;
  year: number;
  opening: string;
  result: "1-0" | "0-1" | "½-½";
  puzzleFen: string;
  winningMove: string;
  hint: string;
  successText: string;
  /** Where the puzzle came from — useful for badges / analytics. */
  source: "open-archive" | "milestone";
};

const openArchivePuzzles: PuzzleEntry[] = ARCHIVE_GAMES.map((g) => ({
  matchId: `archive-${g.id}`,
  white: g.white,
  black: g.black,
  event: g.event,
  year: g.year,
  opening: g.opening,
  result: g.result,
  puzzleFen: g.puzzleFen,
  winningMove: g.winningMove,
  hint: g.hint,
  successText: g.successText,
  source: "open-archive",
}));

const milestonePuzzles: PuzzleEntry[] = MILESTONES.flatMap((node) =>
  node.tournaments.flatMap((t) =>
    t.games
      .filter(
        (g): g is typeof g & { puzzleFen: string; winningMove: string; hint: string; successText: string } =>
          Boolean(g.puzzleFen && g.winningMove && g.hint && g.successText),
      )
      .map<PuzzleEntry>((g) => ({
        matchId: g.id,
        white: g.white,
        black: g.black,
        event: `${t.name} (Game ${g.num})`,
        year: Number(t.year),
        opening: g.opening,
        result: g.result,
        puzzleFen: g.puzzleFen,
        winningMove: g.winningMove,
        hint: g.hint,
        successText: g.successText,
        source: "milestone",
      })),
  ),
);

export const PUZZLE_POOL: PuzzleEntry[] = [...openArchivePuzzles, ...milestonePuzzles];

/** Pick a random puzzle from the unified pool. */
export function pickRandomPuzzle(): PuzzleEntry {
  return PUZZLE_POOL[Math.floor(Math.random() * PUZZLE_POOL.length)];
}
