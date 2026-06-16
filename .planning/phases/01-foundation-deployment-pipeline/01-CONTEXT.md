# Phase 1: Foundation & Deployment Pipeline - Context

**Gathered:** 2026-06-16
**Status:** Ready for planning

<domain>
## Phase Boundary

The technical foundation exists — code lives in GitHub, deploys automatically to Vercel, and is reachable at the real custom domain (`marcelmalbrich.com`), serving a placeholder page. This phase delivers infrastructure only: repo setup, Next.js scaffold, Vercel deployment, domain connection. No real design system (Phase 2) or real content (Phase 3) is in scope here.

</domain>

<decisions>
## Implementation Decisions

### Repo Structure
- **D-01:** Single GitHub repo holds both the main site and the future lab app as separate folders (e.g. `/main`, `/lab`) — not two separate repos. One history, one place to look, since Marcel is the only one working in it.
- **D-02:** Each folder deploys as its own independent Vercel project (main → `marcelmalbrich.com`, lab → `lab.marcelmalbrich.com` in Phase 4). No shared runtime or build step between them — preserves the "lab changes never affect main site stability" rule from `CLAUDE.md`.
- **D-03:** Repo is created under Marcel's existing GitHub account: `https://github.com/Marcipane3`.
- **D-04:** Repo is **public**.
- **D-05:** Repo includes a `README.md` describing the project.

### Domain & Registrar
- **D-06:** Domain is already purchased — `marcelmalbrich.com`, bought via **Cloudflare**. No domain purchase or registrar selection decision needed in this phase; DNS setup will point the Cloudflare-managed domain at Vercel. (No `.de` fallback needed — `.com` was available and is secured.)

### Placeholder Page
- **D-07:** The live placeholder page for this phase is **minimal**: Marcel's name + a short "site under construction" line, plain styling. This is functional proof the deploy pipeline works end-to-end — no visual polish, since Phase 2 builds the real design system immediately after and would replace any polish done here.

### Claude's Discretion
- Package manager choice (npm/pnpm/yarn), exact Node.js version pinning, and the precise DNS record configuration steps to point Cloudflare at Vercel are left to the planner/executor's technical judgment, following standard Next.js + Vercel conventions. Marcel does not need to weigh in on these.

</decisions>

<canonical_refs>
## Canonical References

**Downstream agents MUST read these before planning or implementing.**

### Project scope & requirements
- `.planning/PROJECT.md` — full vision, constraints, and locked stack decisions (Next.js + Tailwind, Vercel hosting, GitHub version control, two-deployment lab isolation)
- `.planning/REQUIREMENTS.md` — INFRA-01, INFRA-02, INFRA-03 requirement definitions for this phase
- `.planning/ROADMAP.md` §"Phase 1: Foundation & Deployment Pipeline" — phase goal and success criteria

### Working rules & confirmation gates
- `CLAUDE.md` (project root) — "Always confirm before" rules: connecting/changing domain or DNS settings, deploying to production, any step involving payment. Domain is already purchased (no payment step needed in this phase), but DNS connection to Vercel still requires Marcel's confirmation before executing.

### Pre-code snapshot (confirms nothing is built yet)
- `.planning/codebase/STACK.md` — confirms no `package.json`, no lockfile, no Node version chosen yet; planned stack is Next.js App Router + Tailwind
- `.planning/codebase/ARCHITECTURE.md` — confirms no app code exists; documents the planned main/lab separation pattern
- `.planning/codebase/INTEGRATIONS.md` — confirms repo is not yet a git repository; domain/registrar/CI all previously undecided (now partially resolved by this discussion — domain is bought)

</canonical_refs>

<code_context>
## Existing Code Insights

### Reusable Assets
- None — repository contains only planning/content documents (`CLAUDE.md`, `PROJECT.md`, `ROADMAP.md`, `Content/*.md`). No application code exists yet.

### Established Patterns
- None yet implemented. Planned pattern (not yet built): content/data separated from layout/components, centralized Tailwind design tokens. Not relevant until Phase 2/3.

### Integration Points
- This phase establishes the only integration points that matter at this stage: GitHub repo → Vercel auto-deploy → custom domain DNS. Everything else (components, pages, design tokens) is out of scope until later phases.

</code_context>

<specifics>
## Specific Ideas

- GitHub account to use: `https://github.com/Marcipane3`
- Domain already secured: `marcelmalbrich.com` via Cloudflare — this phase's DNS work connects it to Vercel, it does not purchase or choose a registrar.

</specifics>

<deferred>
## Deferred Ideas

- **Fancier GitHub repo presentation** — Marcel mentioned a friend's repo that explains the project both through a `README.md` and a more polished/"fancy" HTML overview page, to make the repo itself look more impressive to a visitor browsing GitHub. This is a nice-to-have for repo presentation, not part of Phase 1's scope (which only requires a `README.md`). Revisit later, possibly alongside Phase 4 (Hidden Lab) or as its own small backlog item.

### Reviewed Todos (not folded)
None — no pending todos matched this phase.

</deferred>

---

*Phase: 1-Foundation & Deployment Pipeline*
*Context gathered: 2026-06-16*
