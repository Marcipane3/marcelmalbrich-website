---
phase: quick-261027-ubw
plan: "01"
subsystem: main-site / experience page
tags: [experience, timeline, cv, content-data, nextjs]
requires: [Phase 2 layout shell, globals.css tokens, ProjectCard anchors from 261027-hg8]
provides: [Experience data contract, TimelineItem component, /experience route, anchor offset on project cards]
affects: [main/content/experience.ts, main/components/TimelineItem.tsx, main/app/experience/page.tsx, main/components/ProjectCard.tsx]
tech-stack:
  added: []
  patterns: [content-as-typed-data feeding one reusable component (second use), decorative aria-hidden timeline rail, scroll-margin for anchors under a sticky header]
key-files:
  created:
    - main/content/experience.ts
    - main/components/TimelineItem.tsx
    - main/app/experience/page.tsx
  modified:
    - main/components/ProjectCard.tsx
decisions:
  - Job titles in sentence case and US spelling to match the projects page (planner discretion, awaiting Marcel's approval)
  - Council entry bullet reworded and given a real link to /projects#bordenau-festivals (planner discretion)
  - scroll-mt-20 added to the ProjectCard article so anchor jumps clear the 56px sticky header
requirements: [PAGE-03]
metrics:
  duration: ~5 min
  completed: 2026-10-27
  tasks: 3
  files: 4
---

# Quick 261027-ubw: Experience page (CV timeline) Summary

Typed timeline data (Work 3, Education 4, Volunteering 2, plus four languages), one reusable TimelineItem component (teal dot on a thin vertical line), and a static /experience page that maps the data into three timelines and a compact languages row. The nav link to /experience no longer 404s.

## What the files do (plain language)

- **`main/content/experience.ts`** — the content. Every word on the timelines lives here: three sections (Work, Education, Volunteering) holding their entries in display order, plus the languages list. It also defines the "shape" of an entry (role, organization, dates, optional note, bullets and link), so a typo in a field name is caught before the site builds.
- **`main/components/TimelineItem.tsx`** — the layout of *one* entry. It draws the teal dot and the grey line on the left, and the role heading, "organization · dates" line and any details on the right. The `last` setting removes the line under the final entry of a section, so the line doesn't trail off into nothing. It contains no CV text.
- **`main/app/experience/page.tsx`** — the page. Because it sits in a folder called `experience`, Next.js serves it at `/experience`. It shows the heading "Where I’ve *learned the trade*", the intro sentence, then one timeline per section from the data file, then the languages as a simple row ("German (native) English (C1) …").
- **`main/components/ProjectCard.tsx`** (one class added) — `scroll-mt-20` tells the browser "when a link jumps to this card, stop 80px above it". Without it, clicking "More on the projects page" would land with the card's top hidden under the sticky header (56px tall).

## How to change things later (data-only)

- **Add a role:** in `main/content/experience.ts`, copy one `{ ... }` entry inside the right section and paste it at the **top** of that section (newest first). Edit the text. The dot, line and spacing adjust automatically — no other file changes.
- **Fix a sentence or date:** edit the text in the same file. Dates follow the pattern "Oct 2023 — Present" (spaced long dash).
- **Add/remove a link:** add or delete the `link: { href: "...", label: "..." }` line on an entry. Use `/projects#<card-id>` to jump to a project card.
- **Add a language:** add `{ name: "...", level: "..." }` to the `languages` list.

## For Marcel to approve

Each of these is a one-line edit in `main/content/experience.ts` if you want it reverted:

1. **US spelling** (matches the projects page): fulfillment, program (twice), optimization (twice), co-organized, tires (twice). Your curated text used UK spelling.
2. **Sentence-case job titles:** "Business process analyst", "International student ambassador", "Apprenticeship, industrial clerk". Official degree, program and institution names keep their own capitals (e.g. "MSc Engineering, Industrial Engineering and Management", "Summer Financial Institute").
3. **Council entry:** the bullet now reads "Alongside the council work, I’ve co-organized the village’s festivals." and has a real "More on the projects page →" link to the festivals card, instead of the trailing "— see the projects page".
4. **Council period** shows "Ongoing" (the layout needs a date line on every entry).

## Commits

| Task | Commit | Description |
|------|--------|-------------|
| 1 | f836fa4 | Typed experience timeline data |
| 2 | 48eb080 | Reusable TimelineItem component |
| 3 | d1220d5 | /experience page + scroll-mt-20 on ProjectCard |

Nothing pushed, nothing deployed.

## Verification

- `npx tsc --noEmit` — clean
- `npx eslint app/experience components/TimelineItem.tsx components/ProjectCard.tsx content/experience.ts` — clean
- `npm run build` — succeeds; `/experience` listed as static (○)
- Prerendered `.next/server/app/experience.html`: all checked strings present (metadata title, hero phrase, roles, employers, dates, languages, the three `/projects#` links); section headings in order Work → Education → Volunteering → Languages; 9 `h3`, 4 `h2`; no "Download CV" or PDF reference
- `.next/server/app/projects.html` still has ids ppm-rollout, henmarsell, bordenau-festivals; ProjectCard diff is a single line
- Privacy gate (confidential term list pulled at runtime from an earlier commit, plus generic phone/address/postcode/availability/political/birthdate/download/PDF patterns) over `main/content`, `main/components`, `main/app` — no matches; no PDF tracked or present in `main/`
- Spot-checked built CSS: `scroll-mt-20`, `ring-brand-tint`, `size-3`, `grid-cols-[auto_1fr]`, line-strong rail colour all generated
- TimelineItem.tsx: no hex colours, no arbitrary px/rem values, no `border-l-`, no client directive

## Pending human review

- **Browser check (plan's human-check, skipped per orchestrator instruction):** open http://localhost:3000/experience at desktop width and at 375px. Expect: hero styled like /projects; sections Work, Education, Volunteering, Languages in that order; each entry has a teal dot aligned with the first line of the role, joined by a thin grey line that stops at the last entry of each section; languages as a compact row, not a timeline; at 375px no horizontal scroll and long degree names wrap cleanly; each "More on the projects page →" link opens /projects with the right card's top fully visible below the header.
- **Wording approval:** Marcel to approve the copy, especially the four items under "For Marcel to approve", before any deploy.

## Deviations from Plan

None in code. One verification note: on this Windows Git Bash, `grep -qiF "download cv"` crashed (Aborted) inside the plan's combined command, which made its negated check pass without really running. Re-checked separately (case-insensitive search via `LC_ALL=C grep` and Node): no "download cv" and no ".pdf" in the built HTML. The privacy-gate greps were also re-run individually to confirm they exited with "no match" (exit 1) rather than crashing, and a planted test string confirmed the pattern does match when it should.

## Known Stubs

None. Every entry is wired to real data.

## Self-Check: PASSED

- FOUND: main/content/experience.ts, main/components/TimelineItem.tsx, main/app/experience/page.tsx
- FOUND commits: f836fa4, 48eb080, d1220d5
