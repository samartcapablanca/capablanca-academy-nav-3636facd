## Problem
In the LessonPlayer sidebar, the "Go back to Variants" button currently renders inline with the SAN move badge, causing it to visually "run on" in the same line instead of breaking to a new line.

## Solution
Add a block-level wrapper or display class to the "Go back to Variants" button in `src/components/LessonPlayer.tsx` so it always starts on its own line, below the SAN move badge.

## File changed
- `src/components/LessonPlayer.tsx` — layout fix for back-to-variants button