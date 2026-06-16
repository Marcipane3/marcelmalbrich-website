# Roadmap: Marcel Malbrich Personal Website

## Overview

The site is built in four horizontal layers, in order: get the technical foundation live (repo, deploy pipeline, custom domain) with a placeholder page; establish the single light-theme design system (Tailwind tokens, responsive shell); fill in every real content page (Home, About, Experience, Projects with three entries, Personal/Hobbies, Contact); then build the separate, unlinked lab subdomain with its first live experiment. Each phase produces something Marcel can see live in a browser before moving to the next.

## Phases

**Phase Numbering:**
- Integer phases (1, 2, 3): Planned milestone work
- Decimal phases (2.1, 2.2): Urgent insertions (marked with INSERTED)

Decimal phases appear between their surrounding integers in numeric order.

- [ ] **Phase 1: Foundation & Deployment Pipeline** - Repo, Next.js scaffold, and custom domain live on Vercel with a placeholder page
- [ ] **Phase 2: Design System** - Single light theme via centralized Tailwind tokens, applied to a responsive page shell
- [ ] **Phase 3: Site Content** - All real pages and project entries live on the main site
- [ ] **Phase 4: Hidden Lab** - Separate lab subdomain deployment with one working experiment

## Phase Details

### Phase 1: Foundation & Deployment Pipeline
**Goal**: The technical foundation exists — code lives in GitHub, deploys automatically to Vercel, and is reachable at the real custom domain.
**Depends on**: Nothing (first phase)
**Requirements**: INFRA-01, INFRA-02, INFRA-03
**Success Criteria** (what must be TRUE):
  1. Visiting `marcelmalbrich.com` shows a live page served by Vercel (even if placeholder content)
  2. Pushing a change to the GitHub repo's main branch results in an automatic new deployment, with no manual deploy step
  3. The codebase's full history is tracked in GitHub, visible to Marcel
**Plans**: TBD

Plans:
- [ ] 01-01: TBD

### Phase 2: Design System
**Goal**: The site has one consistent, professional visual identity that holds up on any screen size.
**Depends on**: Phase 1
**Requirements**: DSGN-01, DSGN-02
**Success Criteria** (what must be TRUE):
  1. Every page uses the same light color palette and typography, defined once in the Tailwind config rather than hardcoded per page
  2. There is no dark mode toggle or alternate theme anywhere on the site
  3. A visitor can read and navigate the site comfortably on both a phone-sized and desktop-sized screen
**Plans**: TBD
**UI hint**: yes

Plans:
- [ ] 02-01: TBD

### Phase 3: Site Content
**Goal**: A recruiter or peer can browse the live site and come away with a clear, accurate picture of who Marcel is, his career, his projects, and how to reach him.
**Depends on**: Phase 2
**Requirements**: PAGE-01, PAGE-02, PAGE-03, PAGE-04, PAGE-05, PROJ-01, PROJ-02, PROJ-03, PROJ-04
**Success Criteria** (what must be TRUE):
  1. Visitor lands on a Home page with a summary and can navigate to every other section from there
  2. Visitor can read Marcel's professional summary on an About page
  3. Visitor can see a structured Experience/CV timeline reflecting Marcel's real career history
  4. Visitor can browse a Projects page showing Hometown Festival, PPM Rollout (sanitized), and Cookbook App, each in a shared long-card layout with images, what it was, what Marcel did, and what he learned
  5. Visitor can view a Personal/Hobbies page (sailing, confirmation-class teaching, other hobbies) in the same long-card style, and can contact Marcel via a simple mailto link or lightweight form
**Plans**: TBD
**UI hint**: yes

Plans:
- [ ] 03-01: TBD

### Phase 4: Hidden Lab
**Goal**: Marcel has a private, working space to publish experimental builds without any risk to the main site's stability or professional presentation.
**Depends on**: Phase 1
**Requirements**: LAB-01, LAB-02, LAB-03
**Success Criteria** (what must be TRUE):
  1. `lab.marcelmalbrich.com` is live as its own Vercel project, deployed independently from the main site
  2. No link to the lab exists anywhere in the main site's navigation or pages — it's reachable only by typing the URL directly
  3. At least one interactive experiment (widget, AI-powered demo, or animation prototype) works when visited in the lab
**Plans**: TBD
**UI hint**: yes

Plans:
- [ ] 04-01: TBD

## Progress

**Execution Order:**
Phases execute in numeric order: 1 → 2 → 3 → 4

(Phase 4 depends only on Phase 1's deployment pipeline being established — its content/design are independent of Phases 2-3 and could in practice run in parallel, but is sequenced last per the locked horizontal-layers build order.)

| Phase | Plans Complete | Status | Completed |
|-------|----------------|--------|-----------|
| 1. Foundation & Deployment Pipeline | 0/TBD | Not started | - |
| 2. Design System | 0/TBD | Not started | - |
| 3. Site Content | 0/TBD | Not started | - |
| 4. Hidden Lab | 0/TBD | Not started | - |
