# Extend All Milestone Games to Full Historical Scores

## Goal

Replace the truncated 15–25 ply excerpts in `src/lib/lessons.ts` with the complete historical games for all 26 milestone entries, and make sure "Guess the Move" still triggers correctly in each replay.

## Scope

All 26 games across the three eras:

- **Marshall Match 1909** — g1, g7, g10, g23
- **San Sebastián 1911** — g1, g4, g9, g14
- **Havana WCC 1921** — g1, g5, g10, g11, g14
- **London 1922** — g1, g5, g8, g13
- **Alekhine WCC 1927** — g1, g11, g21, g32, g34
- **Nottingham 1936** — g1, g4, g9, g13

## Approach

1. **One game at a time, validated.** For each game I'll write the full SAN move list from the historical record, then run it through chess.js. If any move fails, I fix it before moving on — the app never ships an illegal sequence.
2. **Preserve teaching commentary.** Existing commentary on early moves stays. New moves get shorter notes — only key turning points get detailed commentary so the sidebar doesn't become a wall of text.
3. **Guess the Move stays intact.** Every game keeps its `guessMoveIndex` and `guessHint`. Where the existing index pointed to a move near the old (truncated) end, I'll re-anchor it to the actual famous moment in the full game (e.g. Capablanca's winning combination, not a generic developing move).
4. **End-of-game marker.** The final move's commentary will state the result clearly — "Marshall resigned" / "and mate follows" / "draw agreed" — so users know the replay is complete.

## Technical details

- All validation runs through a one-off script (`/tmp/validate-games.ts`) that loads each `moves[].san` array into a fresh `Chess()` and walks ply-by-ply. Any rejected move is reported with the FEN at that point so I can correct it.
- `MatchReplayPlayer.tsx` already clamps to the last legal move, but with this pass every game should reach its real end with no clamping.
- No schema changes. No UI changes. Only data edits to `src/lib/lessons.ts`.

## Execution order

Because this is large, I'll work in 6 batches (one per tournament) and verify each batch before moving on:

1. Marshall 1909 (4 games)
2. San Sebastián 1911 (4 games)
3. Havana 1921 (5 games)
4. London 1922 (4 games)
5. Alekhine 1927 (5 games)
6. Nottingham 1936 (4 games)

After each batch I run the validator. After batch 6 I run it across all 26 games and report results.

## Honest caveat

A handful of the lesser-documented games (some Marshall match games, San Sebastián side games) have multiple sources with minor disagreements on late endgame moves. Where my recall is uncertain I will truncate to the last move I can confirm legal and note "game continued; full score uncertain in source" rather than fabricate moves. This will be rare — the championship games and tournament headliners are well documented.

## Out of scope

- Open Archive puzzles (already complete, single-position puzzles, no full game replay).
- Fundamentals lessons (instructional, not historical games).
- Any UI changes.
