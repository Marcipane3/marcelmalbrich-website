---
phase: 01-foundation-deployment-pipeline
reviewed: 2026-06-17T00:00:00Z
depth: standard
files_reviewed: 10
files_reviewed_list:
  - main/package.json
  - main/app/layout.tsx
  - main/app/page.tsx
  - main/app/globals.css
  - main/.gitignore
  - main/tsconfig.json
  - main/postcss.config.mjs
  - main/eslint.config.mjs
  - main/next.config.ts
  - README.md
findings:
  critical: 2
  warning: 2
  info: 2
  total: 6
status: issues_found
---

# Phase 01: Code Review Report

**Reviewed:** 2026-06-17
**Depth:** standard
**Files Reviewed:** 10
**Status:** issues_found

## Summary

This is the foundation scaffold for the main site — Next.js 16 (App Router), Tailwind CSS v4, TypeScript, deployed to Vercel. The structure is minimal and appropriate for Phase 1. Configuration files are sound. Two blockers require fixing before this scaffold is fit for purpose: the dark mode media query violates an explicit project constraint, and a hardcoded font declaration silently overrides the Geist font that was deliberately set up, meaning the configured typeface never actually renders.

---

## Critical Issues

### CR-01: Dark mode color block present — violates explicit project constraint

**File:** `main/app/globals.css:15-20`

**Issue:** A `@media (prefers-color-scheme: dark)` block is present and active. It overrides `--background` to near-black (`#0a0a0a`) and `--foreground` to near-white (`#ededed`) for any user whose OS or browser is set to dark mode. The project constraint in `CLAUDE.md` is unambiguous: "Single light theme, no dark mode toggle." This is not an oversight — it is a design decision that was explicitly recorded. As built, any user with system dark mode enabled will see a dark site, which is the opposite of the intended behavior.

**Fix:** Remove the entire media query block from `globals.css`:

```css
/* DELETE this entire block: */
@media (prefers-color-scheme: dark) {
  :root {
    --background: #0a0a0a;
    --foreground: #ededed;
  }
}
```

After removal, the light theme values in `:root` will apply unconditionally to all users, matching the project design decision.

---

### CR-02: Hardcoded `font-family: Arial` on body silently overrides Geist Sans

**File:** `main/app/globals.css:25`

**Issue:** The `body` rule sets `font-family: Arial, Helvetica, sans-serif`. This overrides the Geist Sans font that was set up in `layout.tsx` (imported from `next/font/google`, applied as a CSS variable `--font-geist-sans`, and registered as `--font-sans` in the `@theme inline` block). As a result, Geist Sans never renders — the site displays in Arial. The font import and variable registration become dead code. This also violates the project convention: "Design tokens (colors, fonts) centralized in Tailwind config — don't hardcode styles ad hoc."

**Fix:** Remove the explicit `font-family` line from the `body` rule in `globals.css` and use the Tailwind token instead:

```css
body {
  background: var(--background);
  color: var(--foreground);
  /* font-family is handled by the --font-sans token registered in @theme inline above */
}
```

The `@theme inline` block already maps `--font-sans: var(--font-geist-sans)`, and Tailwind's `font-sans` utility class will apply it. Alternatively, apply `font-sans` as a Tailwind class on the `<body>` element in `layout.tsx` — either approach satisfies the convention.

---

## Warnings

### WR-01: Geist Mono font loaded but never used

**File:** `main/app/layout.tsx:10-13`

**Issue:** `Geist_Mono` is imported, instantiated with a CSS variable (`--font-geist-mono`), and added to the `<html>` className. There are no elements in the current scaffold that use monospace font. This causes an unnecessary Google Fonts network request on every page load for a typeface that currently renders nothing. If the site has no code blocks or terminal-style content planned, this load is pure overhead.

**Fix:** Remove the Geist Mono import and its variable from the layout until there is actual content that needs it:

```tsx
// Remove:
import { Geist, Geist_Mono } from "next/font/google";
const geistMono = Geist_Mono({ variable: "--font-geist-mono", subsets: ["latin"] });

// Keep only:
import { Geist } from "next/font/google";
```

Also remove `${geistMono.variable}` from the `<html>` className. Re-add when monospace content exists.

---

### WR-02: `.vercel` entry duplicated in `.gitignore`

**File:** `main/.gitignore:41,43`

**Issue:** `.vercel` appears twice — on line 41 and again on line 43. Functionally harmless (Git deduplicates), but indicates an unreviewed paste or edit. A messy `.gitignore` is a maintainability signal.

**Fix:** Remove the duplicate on line 43, leaving only the single entry on line 41.

---

## Info

### IN-01: `package.json` name is `"main"` (directory name, not project name)

**File:** `main/package.json:2`

**Issue:** `"name": "main"` is the directory name, not a meaningful identifier. Since `"private": true` is set, there is no npm publishing risk. Still, a descriptive name like `"marcelmalbrich-portfolio"` makes the package self-documenting.

**Fix:**
```json
"name": "marcelmalbrich-portfolio",
```

---

### IN-02: `next.config.ts` is a stub with no content

**File:** `main/next.config.ts:4`

**Issue:** The config file contains only a comment `/* config options here */`. This is fine at Phase 1, but as the project grows (image domains for `next/image`, headers, redirects) this file will need entries. Worth tracking.

**Fix:** No change needed now. Flag for future sessions when `next/image` is introduced (requires `images.remotePatterns` if images are hosted externally) or when custom headers/redirects are added.

---

_Reviewed: 2026-06-17_
_Reviewer: Claude (gsd-code-reviewer)_
_Depth: standard_
