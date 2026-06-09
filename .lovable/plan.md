## Problem
In `LessonPlayer`, when a user has selected a Variant and is on the first move (moveIndex 0), clicking **Previous** decrements moveIndex to -1, which shows the variant's intro but does not return to the Variants picker. The progress dots already handle this correctly (the first dot calls `goBackToVariants()` when `hasVariants` is true).

## Solution
Update the Previous button behavior in `src/components/LessonPlayer.tsx` so that when a variant is active and the user is at `moveIndex === 0`, clicking Previous calls `goBackToVariants()` instead of just decrementing to -1. This mirrors the progress-dot behavior.

### Details
- Change the Previous `onClick` to: if `hasVariants && variantIndex !== null && moveIndex === 0`, call `goBackToVariants()`; otherwise decrement as today.
- Keep `canPrev` logic so the button remains enabled at moveIndex 0 in a variant (it already is, since `moveIndex > -1`).
- No changes to the Next button, commentary, or board logic.

## File changed
- `src/components/LessonPlayer.tsx` — Previous button handler