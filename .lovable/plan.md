## Problem

In `src/components/LessonPlayer.tsx` line 170, the button currently contains:

```
<ArrowLeft className="h-4 w-4" />\u00a0Back to Variants
```

JSX does not interpret `\u00a0` as an escape when it appears as plain text between tags — it renders as the 6 literal characters `\u00a0`. That's exactly what you're seeing in the preview.

## Fix

Wrap the non-breaking space in a JSX expression so the escape is interpreted as a real character:

```tsx
<ArrowLeft className="h-4 w-4" />{"\u00a0"}Back to Variants
```

Single-line change, no other files affected.
