# Phase 1: Foundation & Deployment Pipeline - Pattern Map

**Mapped:** 2026-06-16
**Files analyzed:** 9 (new — no modifications, nothing exists yet)
**Analogs found:** 0 / 9

## Summary

This is a greenfield infrastructure phase. The repository currently contains only planning/content documents (`CLAUDE.md`, `PROJECT.md`, `ROADMAP.md`, `.planning/`, `Content/*.md`) and a bare `.git` directory — confirmed via directory listing. **There is no existing application code, no `package.json`, no Next.js scaffold, no components, no config files.** Codebase searches (Glob/Grep for controllers, components, services, configs) are not applicable because no such files exist to search.

Per the task instructions, this is stated explicitly rather than fabricating analogs. The planner should rely on standard Next.js (App Router) + Vercel conventions directly — there is nothing in this codebase to copy patterns from. Once Phase 1 scaffolds the Next.js app, **Phase 2 and later phases will have real analogs to reference** (e.g., the placeholder page built here becomes the analog for the future Home page layout).

## File Classification

| New File | Role | Data Flow | Closest Analog | Match Quality |
|----------|------|-----------|-----------------|---------------|
| `main/package.json` | config | N/A (manifest) | none | no analog |
| `main/next.config.js` | config | N/A | none | no analog |
| `main/tsconfig.json` (if TS chosen) | config | N/A | none | no analog |
| `main/app/layout.tsx` | component | request-response (SSR shell) | none | no analog |
| `main/app/page.tsx` (placeholder home page) | component | request-response | none | no analog |
| `main/tailwind.config.ts` / `.js` | config | N/A | none | no analog |
| `.gitignore` | config | N/A | none | no analog |
| `README.md` (repo root) | utility/docs | N/A | none | no analog |
| `vercel.json` (if needed for monorepo project root config) | config | N/A | none | no analog |

`lab/` folder is explicitly out of scope for Phase 1 per CONTEXT.md D-02 (lab deploys in Phase 4) — not included in this file list.

## Pattern Assignments

No pattern assignments are possible — there is no prior code in this repository in any role (controller, component, service, config, etc.) to extract excerpts from. All of the above files will be created using:

1. **Standard `create-next-app` scaffold output** (App Router, TypeScript or JS per Claude's discretion, Tailwind integration flag) — this is the closest thing to a "pattern source" available, but it is a tool-generated scaffold, not an existing project analog.
2. **CLAUDE.md Technical Conventions section** (project root) — locks in: Next.js App Router, Tailwind CSS, Vercel hosting, GitHub version control, single light theme, content separated from layout. These are constraints for the scaffold, not copyable code.
3. **CONTEXT.md decisions** (D-01 through D-07) — dictate repo structure (`/main`, `/lab` folders in one repo), public visibility, README requirement, and a minimal placeholder page (name + "under construction" line, plain styling, no visual polish).

## Shared Patterns

None exist yet. The following will become shared patterns starting in Phase 1 and should be documented for Phase 2+ pattern-mapping once they exist:

- **Design token centralization** — Tailwind config will hold colors/fonts (per CLAUDE.md); not yet created.
- **Content/layout separation** — project data as structured JS/TS objects feeding shared components; not yet created, relevant from Phase 3 onward.
- **Two-deployment isolation** — `/main` and `/lab` as independently building/deploying folders in one repo, each its own Vercel project (D-02). This is an infrastructure pattern (Vercel project root settings), not a code pattern.

## No Analog Found

All files in this phase have no analog — entire table below applies:

| File | Role | Data Flow | Reason |
|------|------|-----------|--------|
| `main/package.json` | config | N/A | No package.json exists anywhere in repo |
| `main/app/layout.tsx` | component | request-response | No component code exists anywhere in repo |
| `main/app/page.tsx` | component | request-response | No page code exists anywhere in repo |
| `main/tailwind.config.ts` | config | N/A | No Tailwind config exists anywhere in repo |
| `README.md` | docs | N/A | No README exists at repo root currently |
| `.gitignore` | config | N/A | Repo has a `.git` directory but no `.gitignore` was found |

**Recommendation for planner:** Since no codebase analogs exist, plan actions for this phase should reference:
- Official Next.js App Router scaffold conventions (`create-next-app` defaults) for `layout.tsx` / `page.tsx` structure
- Official Tailwind + Next.js integration docs for `tailwind.config` setup
- CONTEXT.md D-01/D-02 for the `/main`, `/lab` monorepo-folder structure and independent Vercel project linkage
- CONTEXT.md D-07 for placeholder page content/tone (minimal, no polish)

No RESEARCH.md exists for this phase either, so there are no "Code Examples" to fall back on from that source.

## Metadata

**Analog search scope:** Entire working directory (`C:\Claude_files\Website_Project`), excluding `.git` internals
**Files scanned:** Directory listing only — confirmed no source code, no `package.json`, no app/component/config files exist anywhere in the repo
**Pattern extraction date:** 2026-06-16
