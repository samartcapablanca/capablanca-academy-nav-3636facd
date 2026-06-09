Two small fixes in `src/components/LessonPlayer.tsx`:

1. **Clicking a variant advances to its first move.** In the variant picker `<button>` onClick, set `setMoveIndex(0)` instead of `-1` so the board plays the first move of the chosen line and shows its commentary immediately.

2. **First progress dot returns to the variant picker.** When `hasVariants` is true, the leftmost dot (idx = -1) should call `setVariantIndex(null)` and `setMoveIndex(-1)` (i.e. `goBackToVariants()`) instead of just jumping to the start position. For non-variant lessons, behavior of the -1 dot is unchanged (jumps to starting position).

No other behavior changes; styling and the rest of the flow stay the same.