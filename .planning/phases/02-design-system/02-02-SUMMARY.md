---
phase: "02"
plan: "02"
status: complete
completed: 2026-10-27
---

# 02-02 Summary — Header, Footer, page shell

**Built (2026-06-17):** `main/components/Header.tsx` (sticky translucent nav, swappable MM monogram), `main/components/NavLinks.tsx` (client component, active-page underline), `main/components/Footer.tsx`; both wired into `main/app/layout.tsx`.

**Fixed at review (2026-10-27):**
- `page.tsx` rendered a second `<main>` inside the layout's `<main>` — replaced with `<div>`.
- h1–h3 rendered in Public Sans: no base rule applied the serif. Added an h1–h3 rule in `globals.css` (Newsreader, weight 500, display tracking) per handoff §3.
- Mobile nav showed a grey horizontal scrollbar — hidden; links still swipe.
- Added `.claude/launch.json` for local preview.

**Verified:** desktop and 375px mobile in browser preview; sticky header; one `<main>`; body background `#F4F7F7`; `npm run build` passes. Approved by Marcel 2026-10-27.

**Known, expected:** nav links 404 until Phase 3 creates the pages.
