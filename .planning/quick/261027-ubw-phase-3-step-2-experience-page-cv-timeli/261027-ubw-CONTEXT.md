# Quick 261027-ubw — Context (locked decisions)

## Task boundary

Build the `/experience` page: a CV timeline. Nothing else (no About, Home, Personal or Contact work).

- `main/content/experience.ts` — typed content data (same pattern and comment style as `main/content/projects.ts`)
- `main/components/TimelineItem.tsx` — reusable timeline entry (handoff spec: `Content/CLAUDE_CODE_HANDOFF.md` §5 "TimelineItem" — teal node on a vertical rail, `last` drops the trailing line; props `role`, `period`, `company?`, `last?`, children = notes)
- `main/app/experience/page.tsx` — page, same hero pattern and container as `main/app/projects/page.tsx`

## Implementation decisions

- **Employers are named** with job titles, LinkedIn-style (Marcel, 2026-10-27). Role descriptions stay general.
- **Never on the site:** phone, street address, birthdate, availability / job-search statements ("available from…", "why this role"), political association membership, implementation-partner/vendor names, individual site city names.
- **Do not add a "Download CV" button** — the repo is public and the CV must never be committed.
- Content source is the curated text below (taken from Marcel's CV by the orchestrator). The CV PDF itself is git-ignored; do not read or copy from it.
- Styling only through existing tokens in `main/app/globals.css` (no hex colours, no new hardcoded values).
- Sections on the page, in order: **Work** → **Education** → **Volunteering** → **Languages** (languages as a compact list, not timeline items).
- Dates use the handoff format "2023 — Present" style, i.e. month + year: e.g. "Oct 2023 — Present".
- The henmarsell entry links to `/projects#henmarsell` ("More on the projects page").

## Curated content (public-safe, use verbatim; light polish allowed)

Hero: eyebrow "Experience" · headline "Where I’ve *learned the trade*" (italic teal phrase) · intro "Engineering school, a corporate apprenticeship, a small business of my own — and now owning a global system rollout."

### Work

1. **Business Process Analyst** — AGC Biologics, Copenhagen — Oct 2023 — Present
   Note line: "Part-time alongside my MSc until August 2025, full-time since."
   - I own the company’s project and portfolio management system end to end — fit-gap, process redesign, configuration, rollout and adoption.
   - Led on-site workshops, training and train-the-trainer at every go-live, and wrote the SOPs and documentation that let the system run without me.
   - Built Power BI reports and automated flows — KPI reporting went from about an hour to minutes.
   - Present to site heads and VPs monthly; lead two students who build reports and automations.
   Link: "More on the projects page" → `/projects#ppm-rollout`

2. **Co-founder** — henmarsell — Jun 2021 — Dec 2025
   - Ran an online shop for pond fish towers with my brother, from sourcing and pricing to marketing and fulfilment — and sold it to our manufacturer.
   Link: "More on the projects page" → `/projects#henmarsell`

3. **Corporate student** — Continental AG, Germany — Sep 2019 — Feb 2023
   - Dual study programme with rotations through supply chain management (KPI reporting), industrial engineering (automated report creation), technical customer service (a global customer survey on digital services) and the innovation lab (a feasibility study on text recognition for used tyres).
   - Started with an apprenticeship as industrial clerk (2019–2021).

### Education

1. **MSc Engineering, Industrial Engineering and Management** — Technical University of Denmark (DTU) — Sep 2023 — Aug 2025
   - Thesis on linear and mixed-integer programming for portfolio optimisation — graded 12, the top Danish grade.
   - Optimisation, simulation, data analytics, lean and change management; one semester of courses at Copenhagen Business School.
2. **BEng Industrial Engineering and Technical Sales (dual)** — University of Applied Sciences Hannover — Sep 2019 — Feb 2023
   - Thesis on reducing machine downtime in tyre production.
3. **Summer Financial Institute** — Southern Illinois University Edwardsville — 2022
   - Corporate finance and accounting.
4. **Apprenticeship, Industrial Clerk** — IHK Hannover, at Continental AG — Sep 2019 — Jun 2021

### Volunteering

1. **International Student Ambassador** — DTU — 2024 — 2025
   - Advised incoming international MSc students through DTU’s student-to-student programme.
2. **Elected member of the local council** — Bordenau, Germany — ongoing (no dates; omit period if the type requires one, use "Ongoing")
   - Alongside organising the village’s festivals — see the projects page.

### Languages

German (native) · English (C1) · Danish (B2) · French (A2)

## Canonical references

- `Content/CLAUDE_CODE_HANDOFF.md` §5 TimelineItem, §7 Copy & voice, §9 page structure
- `main/content/projects.ts`, `main/components/ProjectCard.tsx`, `main/app/projects/page.tsx` — patterns to mirror
- `main/app/globals.css` — tokens
