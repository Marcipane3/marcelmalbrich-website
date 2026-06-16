# Marcel Malbrich Personal Website

## What This Is

A personal website for Marcel Malbrich serving three purposes: a professional portfolio ("extended LinkedIn") at `marcelmalbrich.com`, a learning vehicle for understanding web development concepts and structure (Marcel has no coding background and reviews/guides rather than writes code), and a hidden, unlinked experimental playground at `lab.marcelmalbrich.com`. This is a 2-3 month, step-by-step build done in small sessions.

## Core Value

The main site must work as a credible, professional portfolio that a recruiter or peer can browse and come away with a clear, accurate picture of who Marcel is and what he's capable of.

## Requirements

### Validated

(None yet — ship to validate)

### Active

- [ ] Home/landing page with summary and navigation to all sections
- [ ] About page with professional summary
- [ ] Experience/CV page with structured career timeline (built from uploaded CV)
- [ ] Projects page using a shared "long card" component (image(s), what it was, what Marcel did, what he learned)
- [ ] Project entry: Hometown Festival
- [ ] Project entry: PPM Rollout (sanitized — structure/approach/outcomes only, no confidential specifics)
- [ ] Project entry: Cookbook App (AI-assisted side project)
- [ ] Personal/Hobbies page (sailing, confirmation-class teaching, other hobbies) in long-card style
- [ ] Contact page with simple contact method (mailto or lightweight form service — no custom backend)
- [ ] Single light theme applied via centralized design tokens (Tailwind config) — no dark mode toggle
- [ ] Site deployed to production on custom domain `marcelmalbrich.com` via Vercel
- [ ] Hidden lab subdomain (`lab.marcelmalbrich.com`) deployed as a separate project, not linked from main site navigation
- [ ] First lab experiment (interactive widget, AI-powered demo, or animation prototype) live in the lab

### Out of Scope

- Social media links/integration — explicitly excluded per project scope
- E-commerce functionality — explicitly excluded per project scope
- Blog/writing section — explicitly excluded per project scope (a lightweight "notes" feature was floated but deprioritized)
- Dark/light mode toggle — single light theme only, by design
- Complex backend for the contact form — keep to mailto or a simple form service (e.g. Formspree), no custom backend
- Wasserkunst/Henmarsell project card — optional/maybe; only add if Marcel provides material, treat as a smaller card if included

## Context

- Marcel has no coding background but is comfortable with AI-assisted ("vibe") coding — he reviews and directs, Claude/AI implements.
- Prior planning was done outside GSD: root-level `PROJECT.md`, `ROADMAP.md`, and `CLAUDE.md` already captured the full vision, site structure, and a phased plan (Phase 0 Foundations → Phase 1 Scaffolding → Phase 2 Design → Phase 3 Content → Phase 4 Polish/Launch → Phase 5 Lab). This GSD setup formally replaces that system as the source of truth; the root files' content has been folded in here and into the roadmap.
- A `.planning/codebase/` snapshot already exists (from a prior `/gsd-map-codebase` run) confirming the repo currently contains only planning/content docs — no code, no `package.json`, no git history before this initialization.
- Draft content already exists under `Content/`: `koch-projekt-website-content.md` (festival project) and `portfolio-content-draft-PPM.md` (PPM rollout, sanitized). This is raw prose, not yet structured into data feeding any component.
- Still needed from Marcel: CV/resume file, written summaries for festival and PPM projects (PPM draft exists but needs final sanitization confirmation), Cookbook app material, optional Wasserkunst material, personal section material (sailing, teaching, hobbies), final domain choice confirmation (`.com` vs `.de`), design direction preferences.
- The PPM Rollout project touches Marcel's employer (AGC Biologics, a CDMO) — content must stay general/structural per confidentiality rules: no specific company names, internal tool names, proprietary screenshots, or confidential data.

## Constraints

- **Tech stack**: Next.js (App Router) + Tailwind CSS — chosen for strong portfolio fit, ecosystem/documentation depth (helps AI-assisted work), and good learning resources for structure/concepts.
- **Hosting**: Vercel — free tier fits this scale, native custom domain + subdomain support, low maintenance.
- **Version control**: GitHub — needed for Vercel deployment and to give Marcel visibility into project history.
- **Timeline**: 2-3 month build, sessions sized to roughly 2-3 prompts each — Marcel is learning concepts as he goes, not racing to ship.
- **Confidentiality**: PPM Rollout content must stay sanitized — structure/approach/outcomes only.
- **Working style**: Marcel reviews and guides; he does not write code. Each new structural concept (component, routing, deployment, DNS, etc.) should get a brief plain-language explanation when first introduced.
- **Design**: Single light theme only, no dark mode toggle. Design tokens centralized in Tailwind config, not hardcoded ad hoc.

## Key Decisions

| Decision | Rationale | Outcome |
|----------|-----------|---------|
| Replace pre-existing hand-rolled planning system (root PROJECT.md/ROADMAP.md) with GSD | Marcel chose to fully migrate to GSD's workflow rather than run two parallel planning systems | — Pending |
| Next.js + Tailwind CSS as the stack | Strong portfolio fit, large ecosystem/documentation, good for AI-assisted learning-by-building | — Pending |
| Vercel for hosting, two separate deployments (main + lab) | Free tier sufficient, native subdomain support, isolates lab experiments from main site stability | — Pending |
| Lab subdomain not linked from main site nav | Keeps experimental work private/discoverable only via direct URL until it's ready to graduate | — Pending |
| PPM Rollout project content kept sanitized/structural | Confidentiality — avoid exposing employer-specific or proprietary details | — Pending |
| Domain registrar and email provider | Not yet decided — to be compared during Phase 0 work | — Pending |

## Evolution

This document evolves at phase transitions and milestone boundaries.

**After each phase transition** (via `/gsd-transition`):
1. Requirements invalidated? → Move to Out of Scope with reason
2. Requirements validated? → Move to Validated with phase reference
3. New requirements emerged? → Add to Active
4. Decisions to log? → Add to Key Decisions
5. "What This Is" still accurate? → Update if drifted

**After each milestone** (via `/gsd-complete-milestone`):
1. Full review of all sections
2. Core Value check — still the right priority?
3. Audit Out of Scope — reasons still valid?
4. Update Context with current state

---
*Last updated: 2026-06-16 after initialization (migrated from pre-existing root-level PROJECT.md)*
