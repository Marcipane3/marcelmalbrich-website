# Codebase Structure

**Analysis Date:** 2026-06-16

> **PRE-CODE SNAPSHOT.** The "Directory Layout" section below is the actual, complete current state of the repository — there is nothing hidden or summarized. The "Planned Structure" section describes what `CLAUDE.md` and `ROADMAP.md` say will be built starting in Phase 1. Do not treat the planned structure as already existing.

## Current Directory Layout (actual, as of 2026-06-16)

```
Website_Project/
├── CLAUDE.md                              # Claude Code session instructions (working style, conventions, scope rules)
├── PROJECT.md                             # Vision, scope, identity, technical decisions (source of truth for project intent)
├── ROADMAP.md                             # Phased build plan with checkboxes + session log
└── Content/
    ├── koch-projekt-website-content.md    # Draft content (festival/project material)
    └── portfolio-content-draft-PPM.md     # Draft content (PPM rollout project, sanitized)
```

No `.git` directory is present — this is not yet a git repository. No `package.json`, `node_modules`, `app/`, `pages/`, `components/`, `public/`, or any framework/config files exist.

## Directory Purposes (actual)

**Repository root:**
- Purpose: holds the three planning/governance documents only
- Contains: `CLAUDE.md`, `PROJECT.md`, `ROADMAP.md`
- Key files: all three — read in that order at the start of any session (per `CLAUDE.md` instructions) to get current phase/status before doing anything else

**`Content/`:**
- Purpose: raw draft text for site content, written before any page/component exists to render it
- Contains: two markdown files with draft project descriptions
- Key files: `koch-projekt-website-content.md` (festival project draft), `portfolio-content-draft-PPM.md` (PPM rollout project draft — must stay sanitized per confidentiality note in `CLAUDE.md`)
- Note: this content has not been structured into data objects or wired into any component — it is prose, not yet site-ready data

## Planned Structure (target — not yet built)

Per `CLAUDE.md` Technical Conventions and `ROADMAP.md` Phase 1 ("Initialize Next.js project with Tailwind CSS; explain folder structure (pages/routes, components, public assets)"), the eventual structure for the **main site** is expected to resemble:

```
(main site — not yet created)
app/                      # Next.js App Router routes
├── page.tsx              # Home
├── about/page.tsx         # About
├── experience/page.tsx    # Experience / CV (structured timeline)
├── projects/page.tsx      # Projects (long-card list)
├── personal/page.tsx      # Personal / Hobbies (long-card list)
└── contact/page.tsx       # Contact (mailto or lightweight form service)

components/               # Shared UI: header/nav, footer, page container, long-card component
data/ or content/         # Structured project/personal entries (JSON/TS), separate from layout
public/                   # Static assets (images, favicon)
tailwind.config.*         # Centralized design tokens (colors, fonts, spacing)
```

The **lab/playground** (`lab.marcelmalbrich.com`) is planned as either a fully separate Next.js project or a separate route group, deployed as its own Vercel project (`ROADMAP.md` Phase 5, step 5.1). Its internal structure is undecided until that phase begins.

None of the above paths exist yet. Exact naming (e.g. `data/` vs `content/`) has not been decided in the planning docs and should be confirmed with Marcel before scaffolding (per `CLAUDE.md` decision-update rule: update `PROJECT.md` if a structural decision changes).

## Naming Conventions

Not yet established — no code exists to derive conventions from. When Phase 1 scaffolding begins, conventions should be defined explicitly and documented here (and cross-referenced in `CLAUDE.md` Technical Conventions if they affect working style).

## Where to Add New Code (today)

Currently, the only valid additions to this repository are:
- More draft content files under `Content/` (e.g. for Cookbook app, Wasserkunst/Henmarsell, Personal/Hobbies material) — per outstanding items in `PROJECT.md` section 7
- Updates to `PROJECT.md` if scope/decisions change
- Checkbox updates and session log entries in `ROADMAP.md` after each session, per `CLAUDE.md` instructions

Do not create `app/`, `components/`, or any Next.js scaffolding until Phase 1 of `ROADMAP.md` is explicitly started — Phase 0 (domain, email, GitHub repo, Vercel account) should be completed first per the roadmap's stated ordering ("Phase 0-2 should be done before heavy content work").

## Special Directories

**`Content/`:**
- Purpose: holds raw, unstructured draft text for site sections before implementation
- Generated: No — manually written/provided by Marcel
- Committed: Yes (no `.gitignore` exists yet, and no repo exists yet either)

---

*Structure analysis: 2026-06-16 — actual structure is complete and accurate; planned structure is aspirational per CLAUDE.md/ROADMAP.md and not yet implemented.*
