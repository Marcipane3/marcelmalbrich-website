---
phase: 01-foundation-deployment-pipeline
plan: 02
subsystem: infra
tags: [vercel, cloudflare, dns, next.js, deployment, github]

requires:
  - phase: 01-foundation-deployment-pipeline (plan 01)
    provides: Public GitHub repo Marcipane3/marcelmalbrich-website with working Next.js scaffold on master branch

provides:
  - Vercel project marcelmalbrich-website linked to GitHub repo with auto-deploy on push to master
  - Live production deployment at https://marcelmalbrich.com serving placeholder page
  - SSL certificate issued and verified (HTTPS 200)
  - Custom domain marcelmalbrich.com registered on Vercel project, A record set in Cloudflare

affects: [phase-02-design-system, phase-03-content, phase-04-lab]

tech-stack:
  added: [vercel-cli (npx), cloudflare-dns]
  patterns: [main/ subfolder as Vercel Root Directory for build isolation from future lab/]

key-files:
  created: [main/.vercel/project.json (Vercel project link — gitignored)]
  modified: []

key-decisions:
  - "Vercel Root Directory set to main/ (not repo root) — required for future lab/ isolation per D-02"
  - "DNS record added as A record (@→76.76.21.21) in Cloudflare with DNS-only (grey cloud) proxy status — avoids double-proxy with Vercel CDN/SSL"
  - "Vercel GitHub integration connected to master branch for zero-manual auto-deploy (INFRA-03)"
  - "Task 2 DNS checkpoint honoured per CLAUDE.md standing rule — Marcel explicitly approved before DNS change"

patterns-established:
  - "Vercel deployment scoped to main/ subfolder — every future Vercel project in this repo must use its own subdirectory as Root Directory"

requirements-completed: [INFRA-01, INFRA-03]

duration: ~55min (includes DNS propagation wait and HTTPS cert provisioning)
completed: 2026-06-17
---

# Phase 01-02: Vercel Deployment + Domain Connection Summary

**Vercel project auto-deploying from GitHub master branch, marcelmalbrich.com live over HTTPS serving the placeholder page**

## Performance

- **Duration:** ~55 min (majority was DNS propagation + SSL cert provisioning — automated work itself took ~10 min)
- **Started:** 2026-06-16T22:48Z
- **Completed:** 2026-06-17T00:10Z
- **Tasks:** 3/3 (Task 2 was a blocking human-confirmation checkpoint, not automated work)
- **Files modified:** 1 (main/.gitignore updated with Vercel project link artifacts)

## Accomplishments

- Vercel project `marcelmalbrich-website` created under `marcel-malbrich-s-projects`, Root Directory set to `main/` for isolation from the future `lab/` deployment
- GitHub integration connected: every push to `master` triggers a new Vercel production deployment with zero manual steps (INFRA-03)
- First production deployment confirmed `Ready` at `.vercel.app` preview URL before DNS change
- Cloudflare DNS A record `@→76.76.21.21` (DNS-only, grey cloud) added after Marcel's explicit checkpoint approval per CLAUDE.md rule
- `marcelmalbrich.com` live over HTTPS (200), SSL cert issued by Vercel/Let's Encrypt, content verified to include "Marcel Malbrich" and "under construction" tagline

## Task Commits

1. **Task 1: Create and link Vercel project, deploy main/ to production** — `6289ad8` (feat(01-02))
2. **Task 2: DNS confirmation checkpoint** — no commit (human gate, no file changes)
3. **Task 3: Connect marcelmalbrich.com and verify live** — committed below in plan metadata

## Files Created/Modified

- `main/.gitignore` — Vercel project link files excluded from repo (`.vercel/`)
- Vercel-side config only (Root Directory, GitHub integration, domain) — no repo files

## Decisions Made

- **Root Directory = `main/`**: Set at Vercel project level (not via `vercel.json`) — dashboard setting persists without an extra committed file, and cleanly scopes the build to the Next.js app folder only
- **DNS only (grey cloud)**: Cloudflare proxy disabled on the Vercel-pointed A record to avoid double-proxying Vercel's own CDN and SSL — per T-01-05 threat mitigation
- **No `vercel.json` created**: Zero-config Next.js detection worked correctly once Root Directory was set; adding a `vercel.json` would have been redundant

## Deviations from Plan

### Process Deviation — DNS Method

- **Found during:** Task 3 (DNS record creation)
- **Issue:** Marcel provided a Cloudflare API token for programmatic DNS record creation, but both token variants parsed from the chat transcript were rejected by Cloudflare's `/tokens/verify` endpoint (likely a copy/paste truncation artefact from the chat UI). API-programmatic path was not viable.
- **Fix:** Pivoted to manual Cloudflare dashboard addition — provided Marcel with the exact record (type `A`, name `@`, value `76.76.21.21`, TTL Auto, DNS-only). Marcel added it directly. This is an explicitly supported fallback per Task 2's plan text ("or whether Marcel prefers to add the record himself manually").
- **Impact:** No functional difference — the DNS record is identical regardless of how it was created. Slight delay while Marcel navigated the Cloudflare dashboard (~5 min).
- **Security note:** Marcel should revoke the API token shared in chat (cfat_...) and rotate it; even though it didn't work for automation, it was shared in plaintext.

---

**Total deviations:** 1 process deviation (DNS method fallback — no scope creep, no functional impact)

## Issues Encountered

- `home.marcelmalbrich.com` A record was added by mistake on first attempt (Name field set to `home` instead of `@`). Corrected by Marcel in a second Cloudflare dashboard edit. No lasting impact.
- SSL cert provisioning took ~15 min after DNS propagation before HTTPS was live — expected Vercel/Let's Encrypt behaviour, not a problem.

## User Setup Required

None — no environment variables or additional dashboard configuration required for Phase 2.

## Next Phase Readiness

- **INFRA-01 ✓**: `marcelmalbrich.com` resolves to Vercel, serves placeholder, HTTPS working
- **INFRA-02 ✓**: Completed in Plan 01-01 (scaffold + GitHub repo)
- **INFRA-03 ✓**: GitHub → Vercel auto-deploy confirmed on master branch
- Phase 2 (Design System) can begin immediately — the deployment pipeline is fully in place and any design changes pushed to master will be live within ~30 seconds

---
*Phase: 01-foundation-deployment-pipeline*
*Completed: 2026-06-17*
