<!-- refreshed: 2026-06-16 -->
# Architecture

**Analysis Date:** 2026-06-16

> **PRE-CODE SNAPSHOT — NOTHING DESCRIBED BELOW IS IMPLEMENTED.**
> This repository contains only planning documents (`CLAUDE.md`, `PROJECT.md`, `ROADMAP.md`) and two draft content files under `Content/`. There is no Next.js project, no components, no routing, no deployment config. This document describes the **architecture Marcel and Claude Code intend to build**, as specified in `CLAUDE.md` and `PROJECT.md`. It is forward-looking only — use it to understand the target shape of the system, not to navigate existing code (there is none to navigate).

## Planned System Overview

```text
┌─────────────────────────────────────────────────────────────┐
│                  marcelmalbrich.com (main site)               │
│                  Next.js App Router + Tailwind                │
├──────────────────┬──────────────────┬───────────────────────┤
│   Home / About    │   Experience/CV  │   Projects (long-card) │
│   Personal        │   Contact        │   shared card component│
└──────────────────┴──────────────────┴───────────────────────┘
                              │
                              │  separate, independent deployment
                              ▼
┌─────────────────────────────────────────────────────────────┐
│              lab.marcelmalbrich.com (hidden playground)       │
│         Separate Next.js project / Vercel deployment          │
│         Not linked from main site nav — direct URL only       │
└─────────────────────────────────────────────────────────────┘
```

Both sites deploy independently to Vercel, each as its own Vercel project, connected to a subdomain of the same root domain (`marcelmalbrich.com` / `lab.marcelmalbrich.com`). This isolation is intentional: per `CLAUDE.md` Lab/Playground Rules, "changes here should never affect the main site's stability."

## Component Responsibilities (planned)

| Component | Responsibility | Status |
|-----------|----------------|--------|
| Main site pages (Home, About, Experience, Projects, Personal, Contact) | Public-facing portfolio content | Not yet created — planned per `PROJECT.md` section 3.1 |
| "Long card" component | Reusable display unit for Projects and Personal sections (images + summary + what was learned) | Not yet created — planned per `PROJECT.md` section 3.3, `ROADMAP.md` step 3.3 |
| Project/content data objects | Structured data (JSON/TS) feeding the long-card component, so adding a project is a data change, not a code change | Not yet created — required pattern per `CLAUDE.md` Technical Conventions |
| Lab app | Isolated experimental playground, separate deployment | Not yet created — planned per `PROJECT.md` section 3.2, `ROADMAP.md` Phase 5 |
| Tailwind config | Centralized design tokens (colors, fonts, spacing) | Not yet created — required pattern per `CLAUDE.md` |

## Intended Pattern

**Overall:** Static/content-driven Next.js site using the App Router, with a content/layout separation pattern for repeatable sections (projects, personal items).

**Key Characteristics (as specified, not yet built):**
- Content (text, project data) kept separate from layout/components — e.g., project entries as structured data feeding a shared "long card" component, so adding a new project later is a data change only (`CLAUDE.md` Technical Conventions).
- Single design mode — no dark/light toggle, light theme only (`PROJECT.md` section 2, `CLAUDE.md`).
- Design tokens centralized in Tailwind config rather than hardcoded ad hoc styles (`CLAUDE.md`).
- Two fully independent deployments (main + lab) to contain risk from experimentation (`CLAUDE.md` Lab/Playground Rules).
- No backend complexity for the contact form — mailto or a lightweight third-party form service only, explicitly avoiding custom backend services (`PROJECT.md` section 6, `CLAUDE.md` "Things NOT to add").

## Planned Layers

**Pages/Routes layer:**
- Purpose: top-level routed pages — Home, About, Experience, Projects, Personal, Contact
- Location: will live under Next.js App Router conventions (e.g. `app/` directory) once scaffolded — `ROADMAP.md` step 1.1
- Status: not yet created

**Components layer:**
- Purpose: shared UI building blocks — header/nav, footer, page container, long-card component
- Location: planned `components/` directory (implied by Next.js conventions, not yet explicit in docs)
- Status: not yet created — `ROADMAP.md` step 1.2 (layout shell), step 3.3 (long-card component)

**Content/data layer:**
- Purpose: structured project and content data feeding shared components
- Location: not yet specified — likely JSON/TS objects per `CLAUDE.md`; currently only markdown drafts exist in `Content/`
- Status: only raw markdown drafts exist (`Content/koch-projekt-website-content.md`, `Content/portfolio-content-draft-PPM.md`); these have not been converted into structured data or wired into any component

## Data Flow (planned, not implemented)

Not applicable yet — no request/render pipeline exists. Once Phase 1 scaffolding is complete, the expected flow will be: Next.js App Router resolves a route → page component renders → shared layout components (header/footer) wrap content → project/personal data objects are mapped into long-card components.

## Architectural Constraints (anticipated, per docs)

- **Deployment isolation:** Lab subdomain must never be allowed to affect main site stability or share a deployment — explicit rule in `CLAUDE.md`.
- **No backend complexity:** Contact form must avoid custom backend services per `PROJECT.md` section 6 and `CLAUDE.md` "Things NOT to add."
- **Out of scope (do not introduce without confirming a scope change):** social media integration, e-commerce, blog/writing section, dark/light toggle — explicitly listed in `CLAUDE.md`.

## Anti-Patterns to Avoid (per project conventions)

### Hardcoding styles outside Tailwind config

**What happens:** Ad hoc inline/hardcoded colors or fonts instead of using centralized design tokens.
**Why it's wrong:** `CLAUDE.md` explicitly requires design tokens centralized in Tailwind config; ad hoc styling breaks that single source of truth as the site grows.
**Do this instead:** Define colors/fonts/spacing once in the Tailwind config and reference tokens everywhere.

### Mixing content into component code

**What happens:** Writing project descriptions or personal content directly inside page/component files.
**Why it's wrong:** `CLAUDE.md` requires content (text, project data) to be separated from layout/components so that adding a new project is a data change, not a code change.
**Do this instead:** Model project/personal entries as structured data objects consumed by a shared long-card component.

## Cross-Cutting Concerns (planned)

**Logging:** Not specified anywhere in planning docs.
**Validation:** Not specified — likely minimal given static-content nature of the site.
**Authentication:** None planned.
**Accessibility:** Explicit requirement in `CLAUDE.md` — "Always include alt text for images; check color contrast against the chosen palette," also reflected in `ROADMAP.md` step 4.3.

---

*Architecture analysis: 2026-06-16 — describes planned target architecture only; no implementation exists yet.*
