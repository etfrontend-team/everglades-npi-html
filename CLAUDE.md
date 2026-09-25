# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
# Watch/compile Tailwind CSS
npm run build

# Copy Swiper vendor files to dist/
npm run vendor

# Lint + format all files
npm run lint:fix
```

No test suite. No dev server — open `pages/*.html` directly in browser or use a static file server.

## Architecture

Plain HTML/CSS/JS site with Tailwind v4. No framework, no bundler beyond Tailwind CLI.

```
pages/          # HTML pages (one file per page)
assets/
  css/          # app.css (entry + @theme), base.css, component.css, layout.css, utilities.css
  js/           # app.js (entry), one file per feature (header.js, footer.js, slider.js …)
  images/       # WebP/AVIF only, subfolders by context (footer/, nav-dropdown/)
  icons/        # SVG icons (referenced via <img>, never inline)
  fonts/        # WOFF2 files — must exist on disk or @font-face breaks layout
dist/           # Build output (Tailwind compiled CSS + vendor JS) — not committed
rules/          # html-css-js-rules.md — canonical coding rules for this project
```

### CSS architecture

`app.css` is the Tailwind entry point. It holds `@theme{}` (all design tokens) and imports the other CSS files in order: `base.css → component.css → layout.css → utilities.css`.

- **base.css** — resets, heading scales, `.title-*` / `.content-*` color wrappers, container classes
- **component.css** — buttons, inputs, form elements
- **layout.css** — header and footer styles only
- **utilities.css** — section helpers and one-off utility classes

All styles use `@apply` with Tailwind v4 utilities. No raw CSS except `@font-face`. No CSS variables in `:root` — only `@theme{}`.

### JS architecture

`app.js` is the entry point: imports and calls each feature's `init` function. No logic lives in `app.js`. Every feature file (`header.js`, `footer.js`, `slider.js`, …) exports a single default `init` function. ES modules only (`export default`). Load via `<script type="module" src="/assets/js/app.js">`.

### Design tokens (app.css `@theme{}`)

| Token group | Examples |
|---|---|
| Colors | `midnight` `coral` `aqua` `limestone` `teal` `chartreuse` `gold` |
| Font families | `font-heading` (loos-extrawide) `font-body` (turnip) |
| Font sizes | `text-heading-1` (64px) → `text-heading-6` (12px), `text-24` … `text-12` |
| Breakpoints | `max-1440:` `max-1199:` `max-1024:` `max-768:` `max-425:` etc. |
| Spacing | `--spacing: 1px` (1 spacing unit = 1px, so `px-100` = 100px) |

All new values (colors, sizes, radii) must be added to `@theme{}` first, then referenced via `@apply`.

## Git hooks (pre-commit / pre-push)

Pre-commit runs automatically on staged files:
1. **check-headings.mjs** — enforces h1-first and no skipped heading levels in HTML
2. **check-assets.sh** — rejects images > 1 MB, videos > 10 MB
3. **lint-staged** — ESLint fix + Prettier on changed files

Pre-push repeats the asset size check against all tracked files.

ESLint enforces on HTML: `aria-label`, `role="link"`, `href`, `target` on every `<a>`; `type`, `aria-label` on every `<button>`; `width`, `height`, `loading="lazy"` on every `<img>`; single `<h1>`; `<main>` must exist; no `javascript:` hrefs.

## Rules reference

`rules/html-css-js-rules.md` is the authoritative source. Key constraints:

- No classes on `body`, `html`, `header`, `footer` tags — style via CSS selectors
- No inline `style="..."` anywhere
- Headings wrapped in `.title .title-{color}`, paragraphs in `.content .content-{color}`
- Only three container classes allowed: `.container-fluid`, `.container-fluid-md`, `.container-fluid-lg` — never invent per-section padding wrappers
- Section Y-axis padding goes on the `<section>` tag as `pt-*/pb-*` utilities; never a shared padding class
- Section background color goes on the `<section>` tag as `bg-{color}` utility; never a CSS rule
- Restricted HTML-side Tailwind classes: `p-*`, `m-*`, `pt-*`, `pb-*`, `bg-*` (section only), `max-w-*`, `flex`, `flex-col`, `flex-row`, `gap`, `grid`, `grid-cols-*` — everything else goes in CSS via `@apply`
- No arbitrary values `[]` anywhere
- No `h-*` / `w-*` / `min-h-*` / `min-w-*` fixed sizing
- Images: WebP/AVIF only, exported from Figma and saved to `assets/images/`, never Figma-hosted URLs
- Icons: `<img>` tags only, never inline SVG
- One `<nav>` for all screen sizes; responsive via CSS
- Animations: only `transform` and `opacity`; prefer CSS over JS; use `IntersectionObserver` for scroll effects
- No `console.log`, `debugger`, or `alert` in committed JS

## Figma workflow

New values (color, font size, spacing) from Figma → add to `@theme{}` in `app.css` first → reference via `@apply`. Never hardcode in component/utility CSS. Font files must be downloaded to `assets/fonts/` as `.woff2` before any `@font-face` referencing them.
