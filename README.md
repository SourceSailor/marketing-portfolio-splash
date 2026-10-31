# Kyle Pickard — splash page

One-page interim portfolio. Vite + React + Tailwind CSS v4. Images from Cloudinary, deployed on Vercel.

## Run

```bash
npm install
npm run dev       # http://localhost:5173
npm run build     # output in dist/
npm run preview
```

## Edit content

Everything lives in `src/content.js`: copy, stats, media IDs, contact details.
Search for `CONFIRM` to find the lines that need your sign-off before you send the link.

Images are Cloudinary public IDs (cloud `kylepickard`), built with the same `cldUrl`
helper as the main site (`src/lib/cloudinary.js`), so an ID that works there works here.

- `hero.slides`: hero slideshow frames, in order
- `pipeline.cards`: the four "One person. The whole pipeline." cards (image + icon per card)
- `disciplines[].feature.image`: the featured image in each section
- `disciplines[].photos`: the polaroid strip. `image` is the ID, `caption` is the handwritten line
- `youtubeId`: the part after `v=` in a YouTube URL. Setting it turns the card into a play button
- `linkedin` / `resume`: hidden until set

Anything left `null` shows a soft gradient in its place, so nothing looks broken.

## Fonts

Self-hosted Google Fonts via Fontsource (`src/fonts.js`): Fraunces for headlines and
big numbers (set up in `src/font-options.css`), Instrument Sans for body text, and
Caveat for the polaroid captions. No requests to Google at runtime.

## Ported from the main site

`Hero` + `HeroSlideshow`, the discipline strip (`DisciplineIndex`, plus the CSS for
`.palette` / `.explore-work-card` / `.explore-work-text-banner`), and the polaroid
strip (`PhotoStrip`) come from the main repo's `HomeHero`, `HeroSlideshow`,
`Disciplines`, and `FeaturedPhotos`. Each file's header comment lists what changed.

## Deploy

Push to a new GitHub repo, import it in Vercel (it detects Vite, no config needed),
then enable Analytics in the Vercel project's Analytics tab.

Use the production URL (`project-name.vercel.app`) when you share it. Preview URLs
for other branches sit behind Vercel's login.
