# Branching Lesson Variants

Add a generic optional `variants` shape to lessons. When a lesson has variants, the user first picks one as a blue chess-book-style link, then replays it with the existing Previous/Next controls and progress dots — identical to how a linear lesson plays today. Any lesson that defines `variants` automatically gets this behavior.

## 1. Data model — `src/lib/lessons.ts`

Make `moves` optional and add `variants` / `prompt`:

```ts
export type LessonVariant = {
  label: string;
  line: LessonMove[];
};

export type LessonContent = {
  title: string;
  intro: string;
  startFen?: string;
  moves?: LessonMove[];          // optional now
  variants?: LessonVariant[];    // new
  prompt?: string;               // shown above variant list
  guessMoveIndex?: number;
  guessHint?: string;
};
```

Replace lesson `"1-7"` with the branching JSON provided (title, intro, startFen, prompt, two variants). All other lessons keep their `moves` arrays and behavior unchanged.

## 2. Player — `src/components/LessonPlayer.tsx`

Add a small state machine alongside the existing replay logic:

- `mode`: `"choosing"` | `"playing"`
- `variantIndex`: `number | null`
- `currentMoves = lesson.variants?.[variantIndex]?.line ?? lesson.moves ?? []`
- On lesson open: `mode = "choosing"` if `lesson.variants` is present, else `"playing"`. Reset `variantIndex = null`, `moveIndex = -1`.

### Choosing mode (variant lessons only)
- Board renders `startFen` with no moves applied.
- Sidebar shows `intro`, then `prompt`, then each variant as a stacked button styled `font-bold text-blue-600 hover:underline cursor-pointer`.
- Prev/Next nav and progress dots hidden — user must pick a variant first.
- Clicking a variant sets `variantIndex`, switches `mode = "playing"`, `moveIndex = -1`.

### Playing mode
- Drives off `currentMoves`. Board, commentary, Previous/Next, and progress dots work exactly as today, for both linear lessons and the chosen variant (dots count `currentMoves.length + 1`).
- When `lesson.variants` is set AND `moveIndex === currentMoves.length - 1`, render a `← Go back to Variants` link below the commentary in the same blue link style. Click → `mode = "choosing"`, `variantIndex = null`, `moveIndex = -1`.

Linear lessons (no `variants`) keep their current UI exactly.

## 3. No other files change

`fundamentals.tsx` and `MatchReplayPlayer.tsx` are untouched. `text-blue-600` is stock Tailwind so no token additions needed.

## Out of scope

- Converting other lessons to branching format (authors can add `variants` later and it just works).
- Lesson-completion persistence (deferred).
- Guess-the-Move integration with variants.
