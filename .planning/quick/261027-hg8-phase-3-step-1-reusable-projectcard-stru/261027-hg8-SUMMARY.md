---
phase: quick-261027-hg8
plan: "01"
subsystem: main-site / projects page
tags: [projects, long-card, content-data, nextjs]
requires: [Phase 2 layout shell, globals.css tokens]
provides: [Project data contract, ProjectCard component, /projects route]
affects: [main/content/projects.ts, main/components/ProjectCard.tsx, main/app/projects/page.tsx]
tech-stack:
  added: []
  patterns: [content-as-typed-data feeding one reusable component, next/image with gradient placeholder fallback]
key-files:
  created:
    - main/content/projects.ts
    - main/components/ProjectCard.tsx
    - main/app/projects/page.tsx
  modified: []
decisions:
  - Used outline-[color:var(--teal)] (explicit type hint) instead of outline-[var(--teal)] so Tailwind v4 cannot misread it as an outline width
  - Tags kept as a local non-exported TagList helper inside ProjectCard.tsx until another page needs them
requirements: [PROJ-01, PROJ-02, PROJ-03, PROJ-04, PROJ-05]
metrics:
  duration: ~4 min
  completed: 2026-10-27
  tasks: 3
  files: 3
---

# Quick 261027-hg8: Reusable ProjectCard + /projects page Summary

Typed project data file with four entries (anonymous PPM rollout, Bordenau festivals, Citchen with v2 app link, henmarsell), one reusable long-card component that renders any entry, and a static /projects page mapping data to cards.

## What the three files do (plain language)

- **`main/content/projects.ts`** — the content. Every word on the project cards lives here as a list of four entries, in display order. It also defines the "shape" every entry must have (title, role, summary, bullets, optional tags/photo/link), so a typo in a field name is caught before the site builds.
- **`main/components/ProjectCard.tsx`** — the layout. One reusable building block that knows how *a* project card looks: image area, small teal label, serif title, period/role line, summary, "What it was / What I did / What I learned", tag pills, and an optional "Try the app ↗" link that opens in a new tab. It contains no project text of its own.
- **`main/app/projects/page.tsx`** — the page. Because it sits in a folder called `projects`, Next.js serves it at `/projects`. It shows the heading "Things I’ve *built and run*", the intro sentence, then one card per entry from the data file.

## How to change things later (data-only)

- **Add a project:** copy one `{ ... }` entry in `main/content/projects.ts`, paste it where it should appear in the list, edit the text. No other file changes.
- **Add a photo:** put the image in `main/public/projects/` (e.g. `citchen.jpg`) and add `image: { src: "/projects/citchen.jpg", alt: "short description" }` to that entry. The placeholder disappears automatically.
- **Add/remove a link:** add or delete the `link: { href, label }` line on an entry.

## Commits

| Task | Commit | Description |
|------|--------|-------------|
| 1 | 408dd57 | Typed project data with four entries |
| 2 | dadfa69 | Reusable ProjectCard long-card component |
| 3 | 9f51ddf | /projects page rendering cards from data |

## Verification

- `npx tsc --noEmit` — clean
- `npx eslint app/projects components/ProjectCard.tsx content/projects.ts` — clean
- `npm run build` — succeeds; `/projects` listed as static (○)
- Prerendered `.next/server/app/projects.html` contains all checked strings (title metadata, "biologics", "Hajo dreht auf", Citchen, henmarsell, "Photo coming soon" x4, `noopener noreferrer`, `Citchen/v2/`); exactly one `target="_blank"` link
- Confidentiality grep over `main/` (employer, vendors, party, site cities, old shop domain — term list kept out of the public repo) — no matches
- No hex colours and no `border-l-` classes in ProjectCard.tsx
- Spot-checked built CSS: arbitrary token classes (shadow, display sizes, eyebrow tracking, 2fr/3fr grid, reading width, focus outline colour) all generated

## Pending human review

- **Browser check (plan's human-check, skipped per orchestrator instruction):** open http://localhost:3000/projects at desktop width and at 375px. Expect: four cards in order PPM, festivals, Citchen, henmarsell; desktop placeholder left / title right with "What I did" and "What I learned" side by side; at 375px placeholder above text, single column, no horizontal scroll; "Try the app ↗" only on Citchen and opens in a new tab; no coloured left border. Marcel must approve the card wording before any deploy.

## Open content item

- **Citchen has no period/date.** Marcel to confirm the start year. The GitHub repo was created May 2026, but that may not be when the project began. When confirmed, add `period: "2026–present"` (or similar) to the Citchen entry.

## Deviations from Plan

None in substance. One minor class-level choice: the focus outline uses `outline-[color:var(--teal)]` rather than the plan's `outline-[var(--teal)]` to force Tailwind v4 to treat it as a colour (verified in built CSS as `outline-color:var(--teal)`).

## Known Stubs

- All four cards use the intentional "Photo coming soon" gradient placeholder (no `image` set in `main/content/projects.ts`) — photos not yet supplied; tracked in STATE.md blockers. Replacing is data-only.

## Self-Check: PASSED

- FOUND: main/content/projects.ts, main/components/ProjectCard.tsx, main/app/projects/page.tsx
- FOUND commits: 408dd57, dadfa69, 9f51ddf
