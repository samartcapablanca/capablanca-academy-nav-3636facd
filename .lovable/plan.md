## Problem
Lessons 1-8 and 1-9 originally had identical intro text. A previous text edit replaced both occurrences, but the user only wanted lesson 1-8 updated.

## Fix
In `src/lib/lessons.ts`, revert lesson 1-9's intro (line 793) back to the original:

> "In this position, White wins by using his King to push back the Black King and capture his pawn. Then by coming from file h and squeeze out the Black King from file g, clearing the path to promotion."

Leave lesson 1-8's intro (line 726) as-is with the new shorter wording.

## File changed
- `src/lib/lessons.ts` — restore lesson 1-9 intro only