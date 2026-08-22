# Media assets

Drop the Fund Manager feature video here as:

    ashish-joshi.mp4

The Home page "Leadership" spotlight (`src/components/sections/LeadershipSpotlight.tsx`)
references it via `src/data/media.ts` → `media.founder.src` (`/media/ashish-joshi.mp4`).

Until the file exists, the poster image (the existing headshot at
`/team/ashish-joshi.jpg`) is shown and the play button is inert — no errors.

Recommended: H.264 MP4, 16:9, ≤ 1080p, web-optimized (faststart).
To use a YouTube/Vimeo link instead of a self-hosted file, replace the
`<video>` in `LeadershipSpotlight.tsx` with an `<iframe>` embed.
