# Holiday Gallery: Croatia 2025

A photo-gallery web app for a family trip to Croatia, built with Next.js, React and
Material UI and deployed to GitHub Pages as a static export.

## Features

- **Demo login with roles.** A username and password are checked against a small
  in-repo user list. The `tristan` account sees every photo; other accounts see only the
  photos tagged for general viewing. This runs entirely in the browser and is meant to
  show role-based filtering, **not to protect anything**.
- **Searchable gallery.** Photo cards filter live by title or description.
- **Live weather.** The home page shows the current temperature and humidity in Croatia,
  taken from the current hour of the [Open-Meteo](https://open-meteo.com/) forecast (no API key needed).
- **Light and dark themes** with custom MUI themes. The chosen theme, search text and
  session are saved in `localStorage` through a persisted
  [Zustand](https://github.com/pmndrs/zustand) store.
- **Date picker** (MUI X) and a full-width hero image.

## Tech stack

| Area | Tools |
|---|---|
| Framework | Next.js 15 (App Router), React 19, TypeScript |
| UI | Material UI 7, MUI X Date Pickers, Emotion |
| State | Zustand with `persist` middleware |
| Data | Open-Meteo weather API (`openmeteo` client) |
| Deploy | GitHub Actions → GitHub Pages |

## Run locally

```bash
yarn install       # or npm install
yarn dev           # http://localhost:3000
```

## Deployment

Each push to `main` runs [.github/workflows/nextjs.yml](.github/workflows/nextjs.yml),
which builds a static export and publishes it to GitHub Pages. The site is served under
`/holiday-react`, so set `isLocal` in [src/isLocal.ts](src/isLocal.ts) to `false` before
deploying. This applies the matching `basePath` in [next.config.ts](next.config.ts).

## Project structure

```
src/app/            routes: / (login), /home, /gallery, /dev
src/components/     TopBar, ActionBar, Gallery, GalleryCard, SummaryCard, ...
src/components/imageData.ts   photo metadata (title, date, description, role)
src/db/db.ts        demo user list
src/store.ts        persisted Zustand store
src/theme.ts        light and dark MUI themes
public/             photos and the Lobster font
```

## License

Code: [MIT](LICENSE). The photos are personal and are not covered by the license.
