# PROJECT.md — Marcel Malbrich Personal Website

## 1. Vision

A long-running, iteratively-built personal website that serves three purposes:

1. **Portfolio / extended LinkedIn** — A professional, recruiter-friendly site showing who Marcel is, what he's worked on, and what he's capable of. Open focus on project management / system development, but kept broad enough for adjacent roles (consultancy, PM, digital transformation).
2. **Learning vehicle** — Marcel has no coding background but is comfortable with AI-assisted ("vibe") coding. The project is also a way to learn the *concepts and structure* of how websites are built (terminology, architecture, how pieces fit together) without needing to write code by hand.
3. **Hidden playground / lab** — A separate, non-linked space to experiment, build small interactive tools, test ideas, and get feedback before anything "graduates" into the main site.

This is explicitly a **2-3 month, step-by-step build**, done in short sessions (roughly 2-3 prompts per Claude Code session, ~daily). Architecture and setup quality come first; content and polish are layered on over time.

---

## 2. Identity & Branding

- **Name / identity:** Marcel Malbrich (own name as the brand — no separate company brand for now)
- **Primary domain candidate:** `marcelmalbrich.com` (fallback: `.de` if `.com` unavailable)
- **One domain, one identity** — used for the main site, email, and as the base for the hidden subdomain
- **Email:** `you@marcelmalbrich.com` (provider TBD — see Roadmap Phase 1)
- **Design mode:** Single mode only (no dark/light toggle). Light theme preferred.
- **Design process:** Marcel will iterate on visual direction using Claude (chat-based design exploration) before/alongside implementation. Animations and interactivity are welcome, especially in the playground.

---

## 3. Site Structure

### 3.1 Main site (`marcelmalbrich.com`)

| Section | Purpose | Notes |
|---|---|---|
| **Home / Landing** | First impression, summary, navigation | Professional tone, photo optional |
| **About** | Who Marcel is, professional summary | Extended-LinkedIn style |
| **Experience / CV** | Structured career timeline | Built from uploaded CV/resume (Word/PDF), page-based timeline layout |
| **Projects** | Flagship project showcase | See 3.3 below — long-card format |
| **Personal / Hobbies** | Sailing, confirmation-class teaching, other hobbies | Professional tone throughout — "getting to know Marcel" but framed appropriately for recruiters/peers |
| **Contact** | Contact details / form | Simple, no backend complexity initially |

No blog/writing section for now (optional AI-assisted "notes" feature may be considered later, but explicitly deprioritized).

### 3.2 Hidden playground (`lab.marcelmalbrich.com` — subdomain)

- Not linked from the main site navigation (discoverable only via direct URL)
- Independent deployment — can be rebuilt/experimented on without risk to the main site
- Purpose: test interactive features, AI-powered widgets, design experiments, mini-tools
- **Graduation path:** when something works and gets good feedback, either:
  - Move the feature into the main site's codebase, or
  - Keep it on the lab subdomain and add a link to it from the main site's Projects section (decided case-by-case)

### 3.3 Flagship Projects (long-card format: a few images, what it was, what Marcel did, what he learned)

1. **Hometown Festival** — Project/event work for a large festival in Marcel's hometown. Material to be provided by Marcel (likely "Hayo" branded — to be confirmed/clarified).
2. **PPM Rollout** — Rolling out a Project Portfolio Management application into an organization (Marcel's current work context). 
   - **Confidentiality:** Treat as sensitive by default. Content should focus on *structure, approach, and outcomes* (what was achieved, how it was implemented) rather than specific company data, internal tools, or proprietary details. Marcel will confirm exact boundaries with his employer; until then, draft conservatively and flag anything borderline.
3. **Cookbook App** — Personal AI-assisted ("vibe coded") side project. Good showcase of hands-on AI-driven product development.
4. **(Optional/earlier) Wasserkunst / Henmarsell — "Fischturm/Fischsäule"** — A small e-commerce brand Marcel ran with his brother (aquarium product, sold via Amazon and a dedicated `.eu` site). Useful as an example of entrepreneurial experience / early business venture. Include as a smaller card if desired.

### 3.4 Personal section content (long-card style, brief but present)
- Sailing
- Teaching confirmation classes (small group teaching/mentoring experience)
- Other hobbies (TBD as Marcel provides material)

---

## 4. Technical Decisions

| Decision | Choice | Rationale |
|---|---|---|
| Framework | **Next.js** | Strong portfolio fit, huge ecosystem/documentation (helps Claude Code work effectively), good learning resources for structure/concepts |
| Hosting | **Vercel** | Free tier suitable for this scale, native custom domain + subdomain support, extremely stable long-term, minimal maintenance |
| Styling | Tailwind CSS (to be confirmed during setup) | Pairs well with Next.js, widely documented |
| Domain registrar | TBD (Phase 1) | Will compare options when purchasing `marcelmalbrich.com` |
| Email | TBD (Phase 1) | Likely Google Workspace or registrar-based email forwarding/hosting — to be decided alongside domain purchase |
| Repo/version control | GitHub (recommended) | Needed for Vercel deployment; also gives Marcel visibility into project history |
| Lab/playground deployment | Separate Vercel project on `lab.` subdomain | Keeps experiments isolated from production site |

---

## 5. Learning Goals (ongoing, woven into sessions)

Marcel wants to:
- Understand the **structure and concepts** of how a website is built (pages, components, layouts, deployment, domains, DNS) — not deep coding.
- Review and guide what's built rather than write code himself.
- Pick up vocabulary/concepts incrementally as we build, with brief explanations when new concepts are introduced.

**Practice for Claude Code sessions:** when introducing a new structural concept (e.g. "this is a component," "this is how routing works," "this is what DNS does"), give a short, plain-language explanation inline — don't assume prior knowledge, but don't over-explain either.

---

## 6. Explicit Constraints / Out of Scope (for now)

- No social media integration
- No e-commerce
- No blog/writing section (static content only)
- No dark/light mode toggle (light only)
- Avoid backend complexity early on (e.g. contact form should start simple — mailto or a simple form service, not a custom backend)

---

## 7. Content Still Needed From Marcel

- [ ] CV/resume file (Word or PDF) → for Experience/CV timeline
- [ ] Written summaries for: Festival project, PPM rollout (sanitized)
- [ ] Cookbook app material (screenshots, description, what was learned)
- [ ] Wasserkunst/Henmarsell material if including (photos, links, short description)
- [ ] Personal section material: sailing, confirmation-class teaching, other hobbies (photos + short notes)
- [ ] Confirmation on domain choice (`.com` vs `.de`) once availability is checked
- [ ] Design direction preferences (after Marcel explores with Claude)

---

## 8. Status

This document reflects decisions made as of the initial planning conversation. Update this file as decisions evolve — it is the source of truth for project scope and identity, and should be kept in sync with ROADMAP.md and CLAUDE.md.
