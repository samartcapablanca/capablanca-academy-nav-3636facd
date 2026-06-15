Lesson 2-3 fails to load because its `startFen` has an invalid last rank.

Current: `8/ppp4k/8/PPP5/8/8/8/6K w - - 0 1`
The last rank `6K` only specifies 7 squares; chess.js rejects the FEN and the LessonPlayer throws.

Fix: change the last rank to `6K1` so it totals 8 squares.

New FEN: `8/ppp4k/8/PPP5/8/8/8/6K1 w - - 0 1`

Single edit to `src/lib/lessons.ts` line 3843.