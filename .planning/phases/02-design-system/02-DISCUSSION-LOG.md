# Phase 2: Design System - Discussion Log

> **Audit trail only.** Do not use as input to planning, research, or execution agents.
> Decisions are captured in CONTEXT.md — this log preserves the alternatives considered.

**Date:** 2026-06-17
**Phase:** 2-Design System
**Areas discussed:** Page layout shell, Navigation design

---

## Page Layout Shell

### Content width
| Option | Description | Selected |
|--------|-------------|----------|
| Contained column | Max-width container (~1200px), centered on wide screens | ✓ |
| Full-width | Content stretches edge-to-edge | |
| Narrow/editorial | Narrow column (~800px), like longform article | |

**User's choice:** Contained column
**Notes:** Standard for portfolio/editorial — clean and readable.

---

### Header behavior
| Option | Description | Selected |
|--------|-------------|----------|
| Sticky — stays at top | Nav stays visible as visitor scrolls | ✓ |
| Static — scrolls away | Nav disappears on scroll | |
| You decide | Leave to Claude / planner | |

**User's choice:** Sticky
**Notes:** Agreed as more usable on longer pages (Experience, Projects).

---

### Footer
| Option | Description | Selected |
|--------|-------------|----------|
| Yes — minimal footer | Name, year, Contact link | ✓ |
| No footer | Pages just end | |
| You decide | Leave to Claude / planner | |

**User's choice:** Yes — minimal footer

---

### Page background
| Option | Description | Selected |
|--------|-------------|----------|
| Crisp white (#ffffff) | Clean, high-contrast, modern | |
| Warm off-white (#fafaf8 or #f5f5f0) | Softer, warmer, more personal feel | ✓ |
| Light grey (#f4f4f5) | Neutral, muted, common in tech/dev portfolios | |

**User's choice:** Warm off-white
**Notes:** Suits a personal/human portfolio over a corporate one.

---

### Section spacing
| Option | Description | Selected |
|--------|-------------|----------|
| Generous spacing | Large vertical gaps (80–120px) throughout | |
| Moderate spacing | Medium gaps (48–64px) throughout | |
| You decide | Leave to Claude / planner | |

**User's choice:** Freeform — "Depends on the context - high level overviews with general spacing, when I go in details then less spacing"
**Notes:** Contextual spacing — generous for overview/landing sections, tighter for detail sections. This is a design decision that informs how the planner handles spacing utilities and section components.

---

## Navigation Design

### Nav link set
| Option | Description | Selected |
|--------|-------------|----------|
| All 6 pages | Home, About, Experience, Projects, Personal, Contact | |
| 5 pages — skip Home | About, Experience, Projects, Personal, Contact (logo = Home) | ✓ |
| Grouped/condensed | Dropdowns or grouped links | |

**User's choice:** 5 pages — skip Home in nav
**Notes:** "MM" monogram/logo in top-left acts as the Home link.

---

### Mobile nav behavior
| Option | Description | Selected |
|--------|-------------|----------|
| Hamburger menu | Tap icon → menu slides/drops open | |
| Scrollable horizontal nav bar | Links scroll horizontally on small screens | ✓ |
| You decide | Leave to Claude / planner | |

**User's choice:** Scrollable horizontal nav bar
**Notes:** Prefers visible links over a hidden hamburger.

---

### Active page state
| Option | Description | Selected |
|--------|-------------|----------|
| Subtle underline or highlight | Small underline or bolder weight on current page link | ✓ |
| More prominent | Filled background or strong color change | |
| No active state | All links look the same | |

**User's choice:** Subtle underline or highlight

---

### Header identity (top-left)
| Option | Description | Selected |
|--------|-------------|----------|
| Name only — "Marcel Malbrich" | Text byline linking Home | |
| Initials monogram — "MM" | Small styled mark | |
| Nothing — nav links only | No home link in header | |

**User's choice:** Freeform — "MM with a logo which I will design later. just put a placeholder"
**Notes:** Wants "MM" monogram as a clean placeholder, with a deliberate swap point for a real logo later. Planner should create a swappable `<Logo />` or `<NavBrand />` component.

---

## Claude's Discretion

- Exact hex values for warm off-white background, border colors, and accent colors — planner/UI phase proposes a full palette
- Tailwind v4 CSS token naming convention — follow Tailwind v4 CSS-only config patterns
- Font scale (heading sizes, body size, line-height) — Geist Sans assumed, planner confirms
- Hover states and transition durations for nav links

## Deferred Ideas

- Color palette specifics and typography choices — Marcel skipped these areas; deferred to planner or `/gsd-ui-phase 2`
- Fancier GitHub repo presentation — carried from Phase 1 deferred, unrelated to design system
