# Technology Stack

**Analysis Date:** 2026-06-16

> **PRE-CODE SNAPSHOT — READ THIS FIRST**
> No application code exists in this repository yet. This project is in **Phase 0 — Foundations & Setup** per `ROADMAP.md`. The repository currently contains only planning/content documents:
> - `CLAUDE.md` — working-style instructions for Claude Code sessions
> - `PROJECT.md` — vision, scope, and technical decisions
> - `ROADMAP.md` — phased build plan
> - `Content/koch-projekt-website-content.md` — draft content
> - `Content/portfolio-content-draft-PPM.md` — draft content
>
> Everything below describes the **planned/intended** stack as documented in `CLAUDE.md` and `PROJECT.md` (section 4, "Technical Decisions"). None of it has been implemented, installed, or scaffolded. There is no `package.json`, no `node_modules`, no framework files, no lockfile, and no build configuration of any kind. Do not assume any of the following is runnable — treat this document as a target/spec, not a description of working software.

## Languages

**Primary (planned):**
- TypeScript/JavaScript — not yet present; will be introduced when the Next.js project is scaffolded (Roadmap step 1.1)

**Markup/Styling (planned):**
- Tailwind CSS — "to be confirmed during setup" per `PROJECT.md` section 4, but treated as the working assumption in `CLAUDE.md`

## Runtime

**Environment:**
- Node.js — version not yet decided; no `.nvmrc` or `.node-version` file exists

**Package Manager:**
- Not yet chosen (npm/pnpm/yarn) — no lockfile present

## Frameworks

**Core (planned):**
- Next.js, App Router — per `CLAUDE.md` "Technical Conventions" and `PROJECT.md` section 4. Chosen for "strong portfolio fit, huge ecosystem/documentation ... good learning resources for structure/concepts."

**Styling (planned):**
- Tailwind CSS — per `CLAUDE.md`: "Design tokens (colors, fonts) centralized in Tailwind config — don't hardcode styles ad hoc."

**Testing:**
- None specified anywhere in planning docs. No testing framework decision has been made.

**Build/Dev:**
- Next.js built-in tooling (implied by framework choice) — not yet configured

## Key Dependencies

None — no dependencies have been installed. No `package.json` exists.

## Configuration

**Environment:**
- No environment variables or `.env` files exist yet.

**Build:**
- No build config files exist yet (no `next.config.js`, `tailwind.config.js`, `tsconfig.json`, etc.)

## Platform Requirements

**Development:**
- Claude Code session-based, AI-assisted ("vibe coding") workflow per `PROJECT.md` section 1 — Marcel has no coding background and reviews/guides rather than writes code directly.

**Production (planned):**
- Vercel hosting — per `PROJECT.md` section 4: "Free tier suitable for this scale, native custom domain + subdomain support, extremely stable long-term, minimal maintenance."
- Two separate Vercel deployments planned: main site (`marcelmalbrich.com`) and lab subdomain (`lab.marcelmalbrich.com`), per `CLAUDE.md` and `PROJECT.md` section 3.2/4.

## Actual Files Present Today

```
CLAUDE.md
PROJECT.md
ROADMAP.md
Content/koch-projekt-website-content.md
Content/portfolio-content-draft-PPM.md
```

No other files exist in the repository (verified via filesystem scan on 2026-06-16, excluding `.git`).

---

*Stack analysis: 2026-06-16 — reflects planning intent only, not an implemented stack.*
