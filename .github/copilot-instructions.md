This repository is an Accessible Astro starter built with Astro 5.x, Tailwind 4, SCSS and TypeScript.
Use these focused instructions so an AI coding agent is immediately productive.

1) Big picture
- Astro static site with component-driven pages under `src/pages`, `src/layouts`, and `src/components`.
- MDX + content collections power dynamic content (see `src/content.config.ts` and `src/content/`).
- Styling is Tailwind (entry: `src/styles/tailwind.css`) plus custom SCSS (`src/assets/scss/index.scss`).
- Public assets live in `/public` and are referenced directly (images used with `astro:assets` `Image` or plain URLs).
- Third-party UI: `accessible-astro-components` is used for many interactive pieces (Header, Link, DarkMode, Accordion).

2) Key files and patterns (read before changing behavior)
- `astro.config.mjs` — integrations (MDX, sitemap, astro-icon), Vite aliases (@components, @layouts, @assets, @content, @pages).
- `package.json` — dev scripts: `npm run dev` (dev server), `npm run build` (outputs `./dist`), `npm run preview`.
- `src/layouts/DefaultLayout.astro` — global imports, page wrapper and where `SiteMeta`, `Header`, `Footer`, and global CSS/SCSS are loaded.
- `src/content.config.ts` — content collection definitions and loaders (use when adding blog/portfolio collections).
- `src/components/*` — components follow simple .astro props-based pattern. Examples: `Header.astro`, `Hero.astro`, `Navigation.astro`.

3) Import conventions and aliases
- Use configured Vite aliases in imports. Examples:
  - `import Header from '@components/Header.astro'`
  - `import DefaultLayout from '@layouts/DefaultLayout.astro'`
- Images in `public/` can be referenced as `/image-name.webp` or with `Image` from `astro:assets` for optimization.

4) Accessibility and behavior expectations
- Follow existing semantic markup and aria usage. Many components intentionally include aria attributes (see `Header.astro`, `Navigation.astro`).
- Preserve WCAG-minded utilities: `SkipLink`, focus outlines, and `prefers-reduced-motion` checks.

5) Adding pages or components — quick examples
- New page skeleton (in `src/pages/`): import `DefaultLayout` and use it as wrapper. See `src/pages/index.astro` for a full example.
- New component: add `.astro` file under `src/components`, accept props via `Astro.props`, and export default by file name.

6) Build / run / debug
- Local dev: `npm install` then `npm run dev` (starts Astro dev server, default port shown in terminal).
- Production build: `npm run build`. Preview built output: `npm run preview`.
- Lint/format: devDependencies include ESLint and Prettier plugins; run via your editor or add scripts if needed.

7) Integration notes and gotchas
- The project relies on `accessible-astro-components` (external package) — keep versions in sync when upgrading.
- Vite aliases are set in `astro.config.mjs`; changing them requires a dev server restart.
- Site metadata and SEO handled by `SiteMeta.astro` and `DefaultLayout` props — update those for global changes.
- Content collections use `astro:content` loader patterns; to add a new collection, register it in `src/content.config.ts`.

8) Tests & CI
- This repo contains no automated test suite by default. CI expectations are minimal; keep changes small and verify locally with `npm run dev` and `npm run build`.

9) When making PR changes, verify:
- Dev server runs without errors (`npm run dev`) and key pages render (home, blog, portfolio, accessible-components).
- No regressions in accessibility attributes (aria, landmarks, focus order) in components you touch.
- Imports use Vite aliases (avoid relative import churn when an alias exists).

If anything above is unclear or you want me to expand a specific section (examples for new collections, component prop patterns, or a small PR checklist), tell me which area and I will iterate.
