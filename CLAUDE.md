# CLAUDE.md — Instructions for Claude Code Sessions

This file is read by Claude Code at the start of each session in this project. It sets context, working style, and ground rules.

---

## Project Context

This is **Marcel Malbrich's personal website** — a long-running (2-3 month), step-by-step build. See `PROJECT.md` for full vision/scope and `ROADMAP.md` for the phased plan. Always check `ROADMAP.md` for the current phase/step before starting work, and update checkboxes as items are completed.

**Two sites in this project:**

1. **Main site** — professional portfolio ("extended LinkedIn"), at `marcelmalbrich.com`
2. **Lab/playground** — hidden experimental site, at `lab.marcelmalbrich.com` (separate deployment, not linked from main site)

---

## Working Style — IMPORTANT

Marcel has **no coding background**. He is learning *concepts and structure*, not syntax. Follow these rules in every session:

1. **Explain structural concepts briefly when introducing them** — e.g., when creating a new component, a one- or two-sentence plain-language note on what a "component" is and why it's used here. Don't over-explain repeatedly once a concept has been introduced.
2. **Keep sessions small.** Aim for work that fits in 2-3 prompts. At the start of a session, propose a small, concrete goal (e.g., "today let's do step 3.2") rather than attempting multiple roadmap phases at once.
3. **Marcel reviews, doesn't write code.** Summarize what changed and why in plain terms after each step. Avoid dumping raw code into explanations unless Marcel asks to see it.
4. **Always confirm before:**
   - Connecting/changing domain or DNS settings
   - Deploying to production (vs. preview)
   - Any step involving payment (domain purchase, hosting upgrades)
5. **Update `ROADMAP.md`** (check off completed items) and add a one-line entry to the Session Log at the end of each session.
6. **If a decision in `PROJECT.md` needs to change** (e.g., domain name, hosting, stack), update `PROJECT.md` directly rather than letting decisions drift undocumented.

---

## Technical Conventions

- **Framework:** Next.js (App Router) + Tailwind CSS
- **Hosting:** Vercel
- **Design:** Single light theme, no dark mode toggle. Design tokens (colors, fonts) centralized in Tailwind config — don't hardcode styles ad hoc.
- **Content:** Where possible, separate content (text, project data) from layout/components — e.g., project entries as structured data (JSON/TS objects) feeding into a shared "long card" component, so adding a new project later is just adding data, not new code.
- **Images:** Use Next.js `Image` component for optimization once real images are provided.
- **Accessibility:** Always include alt text for images; check color contrast against the chosen palette.

---

## Confidentiality Note (PPM Project)

The PPM rollout project content must stay general/structural — describe approach, methodology, and outcomes, not specific company names, internal tool names, proprietary screenshots, or confidential data. If unsure whether something is shareable, flag it for Marcel rather than including it.

---

## Lab/Playground Rules

- Lab is a **separate deployment** — changes here should never affect the main site's stability.
- Lab is **not linked** from main site navigation. Access is via direct subdomain URL only.
- When something in the lab works well and gets good feedback, discuss with Marcel whether to:
  (a) port it into the main site's codebase, or
  (b) leave it on the lab subdomain and add a link from the main site's Projects section.

---

## Things NOT to add (current scope)

- Social media links/integration
- E-commerce functionality
- Blog/writing section
- Dark/light mode toggle
- Complex backend services for the contact form (keep it simple — mailto or a lightweight form service)

If Marcel asks for any of these, treat it as a scope change — confirm and update `PROJECT.md` accordingly rather than just building it.

---

## Quick Reference — Current Status

> Update this section as the project progresses so each new session has an at-a-glance summary.

- **Current phase:** Phase 0 — Foundations & Setup
- **Domain status:** Not yet purchased (`marcelmalbrich.com` candidate)
- **Repo status:** Not yet created
- **Deployment status:** Not yet started
- **Design direction:** Not yet decided (light theme confirmed; specifics TBD)

<!-- GSD:project-start source:PROJECT.md -->

## Project

**Marcel Malbrich Personal Website**

A personal website for Marcel Malbrich serving three purposes: a professional portfolio ("extended LinkedIn") at `marcelmalbrich.com`, a learning vehicle for understanding web development concepts and structure (Marcel has no coding background and reviews/guides rather than writes code), and a hidden, unlinked experimental playground at `lab.marcelmalbrich.com`. This is a 2-3 month, step-by-step build done in small sessions.

**Core Value:** The main site must work as a credible, professional portfolio that a recruiter or peer can browse and come away with a clear, accurate picture of who Marcel is and what he's capable of.

### Constraints

- **Tech stack**: Next.js (App Router) + Tailwind CSS — chosen for strong portfolio fit, ecosystem/documentation depth (helps AI-assisted work), and good learning resources for structure/concepts.
- **Hosting**: Vercel — free tier fits this scale, native custom domain + subdomain support, low maintenance.
- **Version control**: GitHub — needed for Vercel deployment and to give Marcel visibility into project history.
- **Timeline**: 2-3 month build, sessions sized to roughly 2-3 prompts each — Marcel is learning concepts as he goes, not racing to ship.
- **Confidentiality**: PPM Rollout content must stay sanitized — structure/approach/outcomes only.
- **Working style**: Marcel reviews and guides; he does not write code. Each new structural concept (component, routing, deployment, DNS, etc.) should get a brief plain-language explanation when first introduced.
- **Design**: Single light theme only, no dark mode toggle. Design tokens centralized in Tailwind config, not hardcoded ad hoc.

<!-- GSD:project-end -->

<!-- GSD:stack-start source:codebase/STACK.md -->

## Technology Stack

## Languages

- TypeScript/JavaScript — not yet present; will be introduced when the Next.js project is scaffolded (Roadmap step 1.1)
- Tailwind CSS — "to be confirmed during setup" per `PROJECT.md` section 4, but treated as the working assumption in `CLAUDE.md`

## Runtime

- Node.js — version not yet decided; no `.nvmrc` or `.node-version` file exists
- Not yet chosen (npm/pnpm/yarn) — no lockfile present

## Frameworks

- Next.js, App Router — per `CLAUDE.md` "Technical Conventions" and `PROJECT.md` section 4. Chosen for "strong portfolio fit, huge ecosystem/documentation ... good learning resources for structure/concepts."
- Tailwind CSS — per `CLAUDE.md`: "Design tokens (colors, fonts) centralized in Tailwind config — don't hardcode styles ad hoc."
- None specified anywhere in planning docs. No testing framework decision has been made.
- Next.js built-in tooling (implied by framework choice) — not yet configured

## Key Dependencies

## Configuration

- No environment variables or `.env` files exist yet.
- No build config files exist yet (no `next.config.js`, `tailwind.config.js`, `tsconfig.json`, etc.)

## Platform Requirements

- Claude Code session-based, AI-assisted ("vibe coding") workflow per `PROJECT.md` section 1 — Marcel has no coding background and reviews/guides rather than writes code directly.
- Vercel hosting — per `PROJECT.md` section 4: "Free tier suitable for this scale, native custom domain + subdomain support, extremely stable long-term, minimal maintenance."
- Two separate Vercel deployments planned: main site (`marcelmalbrich.com`) and lab subdomain (`lab.marcelmalbrich.com`), per `CLAUDE.md` and `PROJECT.md` section 3.2/4.

## Actual Files Present Today

<!-- GSD:stack-end -->

<!-- GSD:conventions-start source:CONVENTIONS.md -->

## Conventions

Conventions not yet established. Will populate as patterns emerge during development.
<!-- GSD:conventions-end -->

<!-- GSD:architecture-start source:ARCHITECTURE.md -->

## Architecture

## Planned System Overview

```text

```

## Component Responsibilities (planned)

| Component | Responsibility | Status |
|-----------|----------------|--------|
| Main site pages (Home, About, Experience, Projects, Personal, Contact) | Public-facing portfolio content | Not yet created — planned per `PROJECT.md` section 3.1 |
| "Long card" component | Reusable display unit for Projects and Personal sections (images + summary + what was learned) | Not yet created — planned per `PROJECT.md` section 3.3, `ROADMAP.md` step 3.3 |
| Project/content data objects | Structured data (JSON/TS) feeding the long-card component, so adding a project is a data change, not a code change | Not yet created — required pattern per `CLAUDE.md` Technical Conventions |
| Lab app | Isolated experimental playground, separate deployment | Not yet created — planned per `PROJECT.md` section 3.2, `ROADMAP.md` Phase 5 |
| Tailwind config | Centralized design tokens (colors, fonts, spacing) | Not yet created — required pattern per `CLAUDE.md` |

## Intended Pattern

- Content (text, project data) kept separate from layout/components — e.g., project entries as structured data feeding a shared "long card" component, so adding a new project later is a data change only (`CLAUDE.md` Technical Conventions).
- Single design mode — no dark/light toggle, light theme only (`PROJECT.md` section 2, `CLAUDE.md`).
- Design tokens centralized in Tailwind config rather than hardcoded ad hoc styles (`CLAUDE.md`).
- Two fully independent deployments (main + lab) to contain risk from experimentation (`CLAUDE.md` Lab/Playground Rules).
- No backend complexity for the contact form — mailto or a lightweight third-party form service only, explicitly avoiding custom backend services (`PROJECT.md` section 6, `CLAUDE.md` "Things NOT to add").

## Planned Layers

- Purpose: top-level routed pages — Home, About, Experience, Projects, Personal, Contact
- Location: will live under Next.js App Router conventions (e.g. `app/` directory) once scaffolded — `ROADMAP.md` step 1.1
- Status: not yet created
- Purpose: shared UI building blocks — header/nav, footer, page container, long-card component
- Location: planned `components/` directory (implied by Next.js conventions, not yet explicit in docs)
- Status: not yet created — `ROADMAP.md` step 1.2 (layout shell), step 3.3 (long-card component)
- Purpose: structured project and content data feeding shared components
- Location: not yet specified — likely JSON/TS objects per `CLAUDE.md`; currently only markdown drafts exist in `Content/`
- Status: only raw markdown drafts exist (`Content/koch-projekt-website-content.md`, `Content/portfolio-content-draft-PPM.md`); these have not been converted into structured data or wired into any component

## Data Flow (planned, not implemented)

## Architectural Constraints (anticipated, per docs)

- **Deployment isolation:** Lab subdomain must never be allowed to affect main site stability or share a deployment — explicit rule in `CLAUDE.md`.
- **No backend complexity:** Contact form must avoid custom backend services per `PROJECT.md` section 6 and `CLAUDE.md` "Things NOT to add."
- **Out of scope (do not introduce without confirming a scope change):** social media integration, e-commerce, blog/writing section, dark/light toggle — explicitly listed in `CLAUDE.md`.

## Anti-Patterns to Avoid (per project conventions)

### Hardcoding styles outside Tailwind config

### Mixing content into component code

## Cross-Cutting Concerns (planned)

<!-- GSD:architecture-end -->

<!-- GSD:skills-start source:skills/ -->

## Project Skills

No project skills found. Add skills to any of: `.claude/skills/`, `.agents/skills/`, `.cursor/skills/`, `.github/skills/`, or `.codex/skills/` with a `SKILL.md` index file.
<!-- GSD:skills-end -->

<!-- GSD:workflow-start source:GSD defaults -->

## GSD Workflow Enforcement

Before using Edit, Write, or other file-changing tools, start work through a GSD command so planning artifacts and execution context stay in sync.

Use these entry points:

- `/gsd-quick` for small fixes, doc updates, and ad-hoc tasks
- `/gsd-debug` for investigation and bug fixing
- `/gsd-execute-phase` for planned phase work

Do not make direct repo edits outside a GSD workflow unless the user explicitly asks to bypass it.
<!-- GSD:workflow-end -->

<!-- GSD:profile-start -->

## Developer Profile

> Profile not yet configured. Run `/gsd-profile-user` to generate your developer profile.
> This section is managed by `generate-claude-profile` -- do not edit manually.
<!-- GSD:profile-end -->
