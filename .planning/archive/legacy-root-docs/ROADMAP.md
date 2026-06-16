# ROADMAP.md — Marcel Malbrich Personal Website

Each phase is broken into small steps sized for roughly 2-3 prompts per session. Check items off as completed. Order can flex, but **Phase 0-2 should be done before heavy content work** — getting the foundation right matters more than speed.

---

## Phase 0 — Foundations & Setup (no code yet)

- [ ] **0.1** Confirm domain choice and check availability (`marcelmalbrich.com`, fallback `.de`)
- [ ] **0.2** Purchase domain (registrar TBD — compare Namecheap, Google Domains successor/Squarespace Domains, Cloudflare Registrar, IONOS for `.de`)
- [ ] **0.3** Set up email on the domain (decide provider — Google Workspace vs. simple forwarding vs. registrar email)
- [ ] **0.4** Create GitHub account/repo for the project (if Marcel doesn't have one) — explain what a repo is and why it's needed
- [ ] **0.5** Create Vercel account, connect to GitHub

*Concepts introduced: domains, DNS, repositories, deployment*

---

## Phase 1 — Project Scaffolding (Claude Code)

- [ ] **1.1** Initialize Next.js project with Tailwind CSS; explain folder structure (pages/routes, components, public assets) in plain terms
- [ ] **1.2** Set up basic layout shell: header/nav, footer, page container — empty placeholder pages for Home, About, Experience, Projects, Personal, Contact
- [ ] **1.3** Connect repo to Vercel, deploy a "hello world" version, confirm it's live on a Vercel-provided URL
- [ ] **1.4** Connect custom domain (`marcelmalbrich.com`) to the Vercel deployment; explain DNS records briefly

*Concepts introduced: components, routing, layouts, deployment pipeline*

---

## Phase 2 — Design Direction

- [ ] **2.1** Explore visual direction with Marcel (colors, typography, overall feel) — light theme, professional but with personality
- [ ] **2.2** Apply chosen design tokens (colors, fonts, spacing) globally via Tailwind config
- [ ] **2.3** Build out Home page layout with placeholder content to validate the design direction
- [ ] **2.4** Decide on small interactive/animation touches (subtle, not gimmicky) — candidates to prototype later in the lab

*Concepts introduced: design tokens, responsive design basics*

---

## Phase 3 — Core Content Pages

- [ ] **3.1** About page — write and lay out professional summary
- [ ] **3.2** Experience/CV page — Marcel uploads CV (Word/PDF); build structured timeline component
- [ ] **3.3** Projects page — build the "long card" component (image(s) + summary + what was learned)
- [ ] **3.4** Add Project 1 (Festival) using Marcel's written summary
- [ ] **3.5** Add Project 2 (PPM rollout) — sanitized version per confidentiality guidelines in PROJECT.md
- [ ] **3.6** Add Project 3 (Cookbook app)
- [ ] **3.7** (Optional) Add Wasserkunst/Henmarsell as a smaller card
- [ ] **3.8** Personal/Hobbies page — sailing, confirmation-class teaching, other hobbies (long-card style, brief)
- [ ] **3.9** Contact page — simple contact method (mailto link or lightweight form service, e.g. Formspree)

---

## Phase 4 — Polish & Launch

- [ ] **4.1** Cross-check all pages on mobile and desktop
- [ ] **4.2** Add metadata (page titles, favicon, social preview image) for professional polish
- [ ] **4.3** Basic accessibility pass (contrast, alt text on images)
- [ ] **4.4** Final review with Marcel — this becomes the "v1 public" version
- [ ] **4.5** Share link with peers/friends for informal feedback

---

## Phase 5 — Hidden Playground / Lab (`lab.marcelmalbrich.com`)

- [ ] **5.1** Set up second Next.js project (or separate route group) for the lab
- [ ] **5.2** Deploy to Vercel as a separate project, connect `lab.` subdomain
- [ ] **5.3** Build first experiment (candidate: small interactive widget, AI-powered demo, or animation prototype)
- [ ] **5.4** Establish lightweight process: experiment → get feedback → decide graduate-to-main or stay-in-lab-with-link

*This phase can run in parallel with Phase 3/4 once Phase 1 is stable, if Marcel wants variety across sessions.*

---

## Phase 6 — Ongoing / Future Modules (not yet scheduled)

Ideas to revisit later, intentionally not scoped yet:
- Downloadable CV/resume PDF generation from the timeline data
- More interactive elements graduated from the lab
- Additional projects as they come up
- Possible "now page" or lightweight project-log (if Marcel's appetite for writing grows — currently deprioritized)

---

## Session Log

Use this space (or a separate `SESSION_LOG.md`) to jot what was done each session, so the next session can pick up cleanly:

- Session 1 (date): _e.g. "Set up PROJECT.md, ROADMAP.md, CLAUDE.md — planning only, no code yet"_
