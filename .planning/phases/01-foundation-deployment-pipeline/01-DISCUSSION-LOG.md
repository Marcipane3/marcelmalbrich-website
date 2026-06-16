# Phase 1: Foundation & Deployment Pipeline - Discussion Log

> **Audit trail only.** Do not use as input to planning, research, or execution agents.
> Decisions are captured in CONTEXT.md — this log preserves the alternatives considered.

**Date:** 2026-06-16
**Phase:** 1-Foundation & Deployment Pipeline
**Areas discussed:** Repo structure, Domain & registrar, GitHub repo visibility, Placeholder page content

---

## Repo Structure

| Option | Description | Selected |
|--------|-------------|----------|
| One repo, two folders | Single GitHub repo with `/main` and `/lab` as separate Next.js apps, each its own Vercel project | ✓ |
| Two separate repos | Main site and lab each get their own GitHub repo entirely, for maximum isolation | |

**User's choice:** One repo, two folders.
**Notes:** Marcel also specified the repo should live under his existing GitHub account, `https://github.com/Marcipane3`, and confirmed the repo should be public. He also mentioned wanting the repo to include a `README.md`, and separately referenced a friend's repo that pairs a README with a more polished "fancy" HTML overview page — clarified afterward that this was about making the *GitHub repo itself* look impressive, not the live website. Captured as a deferred idea, not Phase 1 scope.

---

## GitHub Repo Visibility

| Option | Description | Selected |
|--------|-------------|----------|
| Public | Code visible to anyone browsing GitHub | ✓ |
| Private | Code hidden, only Marcel has access | |

**User's choice:** Public — given directly while answering the repo structure follow-up ("Public is fine").
**Notes:** No separate question was needed; resolved as part of the repo structure discussion.

---

## Placeholder Page Content

| Option | Description | Selected |
|--------|-------------|----------|
| Minimal placeholder | Name + "site under construction" line, plain styling | ✓ |
| Polished "in progress" page | More designed-looking page with tagline/subtle styling | |
| Something else | Free text | |

**User's choice:** Minimal placeholder.
**Notes:** An initial round of this question was answered based on a misreading of Marcel's earlier "HTML mask" comment — he clarified that comment was about the GitHub repo's presentation (README + fancy HTML), not the live website. Re-asked cleanly afterward; Marcel confirmed minimal is correct for the live placeholder page, since Phase 2 replaces it with the real design system shortly after.

---

## Domain & Registrar

| Option | Description | Selected |
|--------|-------------|----------|
| .com | Matches PROJECT.md's stated preference, internationally recognizable | (moot — already owned) |
| .de | German-specific TLD | (moot — already owned) |
| Check both, decide on availability/pricing | Defer TLD choice to execution time | (moot — already owned) |

**User's choice:** N/A — domain already purchased.
**Notes:** Marcel revealed he already bought `marcelmalbrich.com`. Follow-up question identified the registrar as **Cloudflare**. This resolves the domain/registrar gray area entirely for Phase 1 — no purchase decision needed, only DNS connection to Vercel (which still requires Marcel's confirmation per `CLAUDE.md`'s domain/DNS rule before being executed).

---

## Claude's Discretion

- Package manager (npm/pnpm/yarn)
- Exact Node.js version pinning
- Precise DNS record configuration steps to connect Cloudflare-managed domain to Vercel (technical steps only — the act of connecting still requires Marcel's confirmation before execution, per `CLAUDE.md`)

## Deferred Ideas

- Fancier GitHub repo presentation (README.md + a more polished/"fancy" HTML overview page, inspired by a friend's repo) — backlog item, not Phase 1 scope.
