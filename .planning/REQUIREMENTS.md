# Requirements: Marcel Malbrich Personal Website

**Defined:** 2026-06-16
**Core Value:** The main site must work as a credible, professional portfolio that a recruiter or peer can browse and come away with a clear, accurate picture of who Marcel is and what he's capable of.

## v1 Requirements

Requirements for initial release. Each maps to roadmap phases.

### Infrastructure

- [ ] **INFRA-01**: Site is live and reachable at the custom domain `marcelmalbrich.com`
- [ ] **INFRA-02**: Codebase is version-controlled in a GitHub repository
- [ ] **INFRA-03**: Site auto-deploys to Vercel from the GitHub repo

### Pages

- [ ] **PAGE-01**: Visitor can view a Home/landing page with summary and navigation to all sections
- [ ] **PAGE-02**: Visitor can view an About page with Marcel's professional summary
- [ ] **PAGE-03**: Visitor can view a structured Experience/CV timeline built from Marcel's uploaded CV
- [ ] **PAGE-04**: Visitor can view a Personal/Hobbies page (sailing, confirmation-class teaching, other hobbies) in long-card style
- [ ] **PAGE-05**: Visitor can contact Marcel via a simple contact method (mailto link or lightweight form service, no custom backend)

### Projects

- [ ] **PROJ-01**: Visitor can view a Projects page listing entries in a shared "long card" component (images, what it was, what Marcel did, what he learned)
- [ ] **PROJ-02**: Projects page includes the Hometown Festival project entry
- [ ] **PROJ-03**: Projects page includes the PPM Rollout project entry, written in sanitized/structural form (no confidential employer detail)
- [ ] **PROJ-04**: Projects page includes the Cookbook App project entry

### Design

- [ ] **DSGN-01**: Site uses a single light theme applied via centralized Tailwind design tokens (no dark mode toggle)
- [ ] **DSGN-02**: Site is usable and readable on both mobile and desktop screen sizes

### Lab

- [ ] **LAB-01**: A hidden lab subdomain (`lab.marcelmalbrich.com`) is deployed as its own separate Vercel project
- [ ] **LAB-02**: Lab subdomain is not linked from the main site's navigation (direct-URL access only)
- [ ] **LAB-03**: Lab includes at least one working interactive experiment (widget, AI-powered demo, or animation prototype)

## v2 Requirements

Deferred to future release. Tracked but not in current roadmap.

### Projects

- **PROJ-05**: Projects page includes a smaller Wasserkunst/Henmarsell entrepreneurial-experience card (only if Marcel provides material)

### Content

- **CONT-01**: Downloadable CV/resume PDF generated from the Experience timeline data
- **CONT-02**: Lightweight "now page" or project-log, if Marcel's appetite for writing grows

## Out of Scope

Explicitly excluded. Documented to prevent scope creep.

| Feature | Reason |
|---------|--------|
| Social media links/integration | Explicitly excluded per project scope |
| E-commerce functionality | Explicitly excluded per project scope |
| Blog/writing section | Explicitly excluded per project scope |
| Dark/light mode toggle | Single light theme only, by design |
| Custom backend for the contact form | Keep simple — mailto or a lightweight form service only |

## Traceability

Populated during roadmap creation.

| Requirement | Phase | Status |
|-------------|-------|--------|
| INFRA-01 | Phase 1 | Pending |
| INFRA-02 | Phase 1 | Pending |
| INFRA-03 | Phase 1 | Pending |
| PAGE-01 | Phase 3 | Pending |
| PAGE-02 | Phase 3 | Pending |
| PAGE-03 | Phase 3 | Pending |
| PAGE-04 | Phase 3 | Pending |
| PAGE-05 | Phase 3 | Pending |
| PROJ-01 | Phase 3 | Pending |
| PROJ-02 | Phase 3 | Pending |
| PROJ-03 | Phase 3 | Pending |
| PROJ-04 | Phase 3 | Pending |
| DSGN-01 | Phase 2 | Pending |
| DSGN-02 | Phase 2 | Pending |
| LAB-01 | Phase 4 | Pending |
| LAB-02 | Phase 4 | Pending |
| LAB-03 | Phase 4 | Pending |

**Coverage:**
- v1 requirements: 17 total
- Mapped to phases: 17
- Unmapped: 0

---
*Requirements defined: 2026-06-16*
*Last updated: 2026-06-16 after initial definition*
