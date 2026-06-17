# Phase 2: Design System - Context

**Gathered:** 2026-06-17
**Status:** Ready for planning

<domain>
## Phase Boundary

This phase establishes the site's visual identity and responsive page shell. Concretely: define design tokens (color palette, typography scale, spacing) in the Tailwind v4 CSS config, and build the shared layout components — sticky header with navigation, footer — that every content page will inherit. Phase 3 (Site Content) fills in real page content; this phase sets the frame it all sits in.

**Not in scope here:** real page content, project cards, image optimization, contact form, or lab subdomain.

</domain>

<decisions>
## Implementation Decisions

### Page Layout Shell
- **D-01:** Content sits inside a **contained max-width column** (~1200px), centered on wide screens. Standard portfolio pattern — clean and readable.
- **D-02:** Header/nav is **sticky** — it stays visible as the visitor scrolls down long pages (Experience, Projects). Implemented via `position: sticky; top: 0`.
- **D-03:** A **minimal footer** appears on every page: Marcel's name, the year, and a link to Contact/email. No heavy footer content.
- **D-04:** Page background is **warm off-white** (e.g. `#fafaf8` or `#f5f5f0`) — softer and more personal than pure white, suits a human/professional portfolio over a corporate feel.
- **D-05:** Section spacing is **contextual**: generous vertical gaps (80–120px) for overview/landing-type sections that need to breathe; tighter spacing (48–64px) inside detail sections where content is dense.

### Navigation Design
- **D-06:** Nav contains **5 links**: About, Experience, Projects, Personal, Contact. Home is not listed explicitly — the "MM" monogram/name in the top-left acts as the Home link.
- **D-07:** Mobile nav uses a **scrollable horizontal nav bar** — links stay visible on small screens and scroll horizontally rather than collapsing behind a hamburger menu.
- **D-08:** Active page state uses a **subtle underline or highlight** (e.g. a small underline or slightly bolder weight) — visible enough for orientation, not visually loud.
- **D-09:** Top-left header slot contains an **"MM" monogram placeholder** — this is a deliberate placeholder for a real logo Marcel will design later. The implementation must make the logo swap-point clean (one component, easy to replace the monogram with an `<Image>` or SVG later without touching nav layout).

### Claude's Discretion
- Exact hex values for the warm off-white background, border colors, and accent colors are left to the planner/UI phase — Marcel has not specified an accent color palette, so the planner should propose one that fits a professional light-theme portfolio.
- Tailwind v4 CSS token variable naming convention (e.g. `--color-background`, `--color-surface`, `--color-accent-*`) is left to Claude's judgment, following Tailwind v4 CSS-only config patterns.
- Exact font scale (heading sizes, body size, line-height) is left to Claude/planner — Geist Sans is already installed and is the assumed font unless the planner has a strong reason to change.

</decisions>

<canonical_refs>
## Canonical References

**Downstream agents MUST read these before planning or implementing.**

### Project scope & requirements
- `.planning/PROJECT.md` — full vision, constraints, and locked decisions (light theme only, no dark mode toggle, design tokens centralized in Tailwind config)
- `.planning/REQUIREMENTS.md` — DSGN-01 (single light theme via centralized Tailwind tokens) and DSGN-02 (usable on mobile and desktop) — the two requirements this phase satisfies
- `.planning/ROADMAP.md` §"Phase 2: Design System" — phase goal and success criteria

### Working rules & constraints
- `CLAUDE.md` (project root) — working style rules: Marcel reviews, doesn't write code; design tokens centralized in Tailwind config (never hardcoded ad hoc); single light theme; no dark mode toggle

### Existing code baseline (Phase 1 output)
- `main/app/globals.css` — current Tailwind v4 CSS config; this is where `@theme inline` tokens live. Phase 2 expands this file with the full design token set.
- `main/app/layout.tsx` — root layout; the shared header and footer components will be wired in here
- `main/app/page.tsx` — current placeholder page; shows the bare starting point before the shell is applied

</canonical_refs>

<code_context>
## Existing Code Insights

### Reusable Assets
- **Geist Sans font** (`main/app/layout.tsx`): Already wired in via Next.js font optimization (`next/font/google` or local). Available as `--font-sans` CSS variable. Use as the primary typeface — no need to install a new font unless the planner proposes a strong alternative.
- **`@theme inline` block** (`main/app/globals.css`): The existing token variables (`--background`, `--foreground`, `--font-sans`) show the pattern. Phase 2 extends this block with the full design token set (color palette, spacing scale, etc.).

### Established Patterns
- **Tailwind v4 CSS-only config**: No `tailwind.config.ts` exists (confirmed in STATE.md). All token definitions live in `globals.css` via `@theme inline`. Downstream agents must NOT create a `tailwind.config.ts` — use the CSS-only pattern.
- **App Router layout**: `main/app/layout.tsx` is the root layout. Shared components (header, footer) are imported here and wrap `{children}`. This is the correct Next.js App Router pattern for persistent shell elements.

### Integration Points
- `main/app/layout.tsx` → import the new `<Header />` and `<Footer />` components. These wrap all page content.
- `main/app/globals.css` → extend `@theme inline` with the new design tokens. This is the single source of truth for all design tokens.
- New components will live in `main/components/` (e.g. `main/components/Header.tsx`, `main/components/Footer.tsx`) — this directory doesn't exist yet and will be created in this phase.

</code_context>

<specifics>
## Specific Ideas

- **Logo placeholder**: Marcel explicitly wants an "MM" monogram placeholder in the header's top-left, with a clean swap point for a real logo later. The planner should create a `<Logo />` or `<NavBrand />` component that is trivially swappable from text/monogram to an image/SVG without touching the nav layout.
- **Warm background tone**: Marcel specifically chose "warm off-white" (rather than crisp white or cool grey) — this signals a personal, human quality. The palette should carry this warmth through (e.g. warm-toned neutrals rather than blue-grey tones).

</specifics>

<deferred>
## Deferred Ideas

- **Color palette specifics and typography choices** — Marcel skipped these during the discuss session. The planner should propose a palette (accent color, surface hierarchy) and confirm it fits a professional light-theme portfolio. If Marcel wants to review the palette before execution, `/gsd-ui-phase 2` can produce a UI design contract with visual examples.
- **Fancier GitHub repo presentation** — carried forward from Phase 1 deferred ideas. Unrelated to design system work.

None — discussion stayed strictly within design system and page shell scope.

</deferred>

---

*Phase: 2-Design System*
*Context gathered: 2026-06-17*
