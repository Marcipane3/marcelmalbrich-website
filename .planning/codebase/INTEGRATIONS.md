# External Integrations

**Analysis Date:** 2026-06-16

> **PRE-CODE SNAPSHOT.** No external integrations exist in this repository — there is no application code to integrate anything into. Everything listed below is a **planned, not implemented** integration, sourced from `PROJECT.md` and `ROADMAP.md`. Treat this as a forward-looking checklist, not a description of working connections.

## APIs & External Services

**Contact form (planned, not implemented):**
- Candidate: Formspree or similar lightweight form service — mentioned explicitly in `ROADMAP.md` step 3.9: "simple contact method (mailto link or lightweight form service, e.g. Formspree)"
- `CLAUDE.md` constraint: "keep it simple — mailto or a lightweight form service" — explicitly rules out a custom backend for the contact form.
- No service has been selected or configured. No API keys or SDK exist.

## Data Storage

**Databases:**
- None planned. This is a static/content-driven site; `PROJECT.md` section 6 specifies "static content only" (no blog/writing backend).

**File Storage:**
- Not yet decided. Project mentions future need for images (CV, project photos, hobby photos) per `PROJECT.md` section 7, but no storage/CDN solution has been chosen — will likely use Next.js `public/` assets and the Next.js `Image` component per `CLAUDE.md` conventions.

**Caching:**
- None — not applicable at this stage.

## Authentication & Identity

- None planned. This is a public-facing static portfolio site with no login/auth requirements mentioned anywhere in planning docs.

## Monitoring & Observability

- None planned or mentioned in `PROJECT.md`/`ROADMAP.md`. Likely candidate later: Vercel's built-in analytics, but this is not documented as a decision.

## CI/CD & Deployment (planned, not implemented)

**Hosting:**
- Vercel — per `PROJECT.md` section 4 ("Hosting: Vercel"). Two separate Vercel projects planned: main site and lab subdomain.

**Version Control:**
- GitHub — per `PROJECT.md` section 4 ("Repo/version control: GitHub (recommended) — Needed for Vercel deployment"). `ROADMAP.md` step 0.4 confirms repo creation has not yet happened ("Create GitHub account/repo for the project (if Marcel doesn't have one)").
- Note: this local working directory is **not currently a git repository** (confirmed during environment check) — no `.git` folder.

**CI Pipeline:**
- None — will rely on Vercel's git-push-to-deploy model once GitHub + Vercel are connected (Roadmap steps 0.5, 1.3).

## Domain & DNS (planned, not implemented)

- Primary domain candidate: `marcelmalbrich.com` (fallback `.de`) — not yet purchased, per `ROADMAP.md` step 0.2 and `PROJECT.md` section 7 ("Confirmation on domain choice ... once availability is checked").
- Registrar: undecided — candidates listed in `ROADMAP.md` step 0.2: Namecheap, Squarespace Domains, Cloudflare Registrar, IONOS (for `.de`).
- DNS configuration for connecting the domain to Vercel and setting up the `lab.` subdomain: not yet started (`ROADMAP.md` steps 1.4, 5.2).
- `CLAUDE.md` explicitly requires Marcel's confirmation before any DNS/domain changes are made.

## Email (planned, not implemented)

- Domain-based email (`you@marcelmalbrich.com`) — provider undecided. Candidates per `PROJECT.md` section 4: Google Workspace, registrar-based forwarding/hosting. `ROADMAP.md` step 0.3.

## Environment Configuration

- No environment variables exist yet. No secrets, API keys, or `.env` files are present in the repository.

## Webhooks & Callbacks

- None — not applicable; no code exists to receive or send any.

---

*Integration audit: 2026-06-16 — all items above are planning intentions, not implemented connections.*
