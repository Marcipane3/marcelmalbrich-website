---
phase: "02"
plan: "01"
subsystem: design-system
tags: [design-tokens, tailwind-v4, typography, css-variables, next-font]
dependency_graph:
  requires: []
  provides: [design-token-set, font-loading, tailwind-theme-bridge]
  affects: [all-pages, header, footer, components]
tech_stack:
  added: []
  patterns: [css-custom-properties, tailwind-v4-theme-inline, next-font-google]
key_files:
  created: []
  modified:
    - main/app/globals.css
    - main/app/layout.tsx
decisions:
  - "Font families loaded via next/font/google (Newsreader + Public Sans) — pre-downloaded at build time, zero client-side font requests in production"
  - "All raw tokens declared in :root; @theme inline bridges to Tailwind utility names — two-layer pattern keeps raw CSS values available independently of Tailwind"
  - "No tailwind.config.ts created — Tailwind v4 CSS-only config via @theme inline is the correct approach for this scaffold"
metrics:
  duration: "~15 minutes"
  completed_date: "2026-06-17"
  tasks_completed: 2
  tasks_total: 2
---

# Phase 02 Plan 01: Design Token Foundation Summary

Replaced the minimal Next.js scaffold placeholder with the complete Marcel Malbrich design system — full Tailwind v4 @theme inline token set (colors, typography, spacing, radii, shadows, motion) and Newsreader + Public Sans font loading via next/font/google.

## What Was Built

**Task 1 — layout.tsx (commit e0df280):** Removed the Geist font import entirely. Added `Newsreader` (weights 400/500/600, normal + italic, CSS variable `--font-newsreader`) and `Public_Sans` (weights 400/500/600/700, CSS variable `--font-public-sans`) via `next/font/google`. Both variables are injected into the `<html>` element className so they are available as CSS custom properties at the document root.

**Task 2 — globals.css (commit 9493133):** Rewrote the file with three sections: `@import "tailwindcss"`, a `:root` block with every raw token from the design handoff, and an `@theme inline` block that bridges Tailwind utility classes to those variables.

Token coverage in `:root`:
- 14 base color ramps (bg, surface, ink, slate, teal family, line)
- 8 status colors with soft pairs
- 18 semantic alias variables (text-*, surface-*, border, brand, focus-ring)
- 3 font family stacks + 4 weight tokens
- 4 body/UI size tokens + 6 display size tokens
- 3 line-height + 4 letter-spacing tokens
- 12 spacing steps (4px grid)
- 4 layout tokens (container, gutter, section-y)
- 5 radius tokens
- 6 shadow tokens
- 5 motion tokens (2 easing curves, 3 durations)

`@theme inline` maps: 12 color utilities + font-sans and font-serif bridged from next/font CSS variables.

`body` rule: background `#F4F7F7`, color `--ink`, font-family `--font-sans`, font-size 17px, line-height 1.6.

## Verification Results

- `npx tsc --noEmit` — exit 0, no errors
- `npm run build` — exit 0, compiled successfully in 3.7s, all static pages generated
- No `prefers-color-scheme` block anywhere in globals.css
- No Geist or geist-sans reference in either file
- `--bg: #F4F7F7` confirmed in :root
- `--teal: #1F9488` confirmed in :root
- Both `newsreader.variable` and `publicSans.variable` in html className

## Deviations from Plan

None — plan executed exactly as written.

## Known Stubs

None. All tokens are the real, final design values from the handoff document. No placeholder values.

## Threat Flags

None. Both files are static build-time assets with no user input surface. Google Fonts are pre-downloaded at build time by next/font — no client-side font requests in production (T-02-02 accepted per threat register).

## Self-Check: PASSED

Files exist:
- main/app/layout.tsx — FOUND
- main/app/globals.css — FOUND

Commits exist:
- e0df280 (Task 1: font replacement in layout.tsx) — FOUND
- 9493133 (Task 2: design token set in globals.css) — FOUND
