The variant picker links in `LessonPlayer.tsx` currently use `text-blue-600`, which stands out too much against the dark luxury palette.

Change:
1. In the variant picker `<button>` list — swap `text-blue-600` for `text-cream`, keep `font-bold` and `hover:underline cursor-pointer`.
2. In the "Go back to Variants" `<button>` — same swap: `text-cream` instead of `text-blue-600`, retaining bold and underline hover.

This makes variant links visually consistent with the regular move commentary color while remaining clearly interactive.