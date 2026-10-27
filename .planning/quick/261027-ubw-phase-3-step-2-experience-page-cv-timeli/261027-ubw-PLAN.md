---
phase: quick-261027-ubw
plan: "01"
type: execute
wave: 1
depends_on: []
files_modified:
  - main/content/experience.ts
  - main/components/TimelineItem.tsx
  - main/app/experience/page.tsx
  - main/components/ProjectCard.tsx
autonomous: true
requirements:
  - PAGE-03

must_haves:
  truths:
    - "Visitor opening /experience sees the eyebrow 'Experience', a serif h1 'Where I’ve learned the trade' with 'learned the trade' as the italic teal phrase, and the intro sentence (same hero pattern as /projects)"
    - "Below the hero, four sections appear in this order: Work, Education, Volunteering, Languages (D-07)"
    - "Work, Education and Volunteering are vertical timelines: each entry shows a teal node on a vertical rail, the role as a serif heading, then 'organization · period', then optional note, bullets and link; the last entry of each section has no trailing rail line"
    - "Work lists, in order: Business process analyst at AGC Biologics, Copenhagen (Oct 2023 — Present), Co-founder at henmarsell (Jun 2021 — Dec 2025), Corporate student at Continental AG, Germany (Sep 2019 — Feb 2023); Education has 4 entries, Volunteering 2, Languages shows German (native), English (C1), Danish (B2), French (A2) as a compact list"
    - "'More on the projects page' links go to /projects#ppm-rollout, /projects#henmarsell and /projects#bordenau-festivals, and the target card lands fully visible below the sticky header"
    - "No phone number, street address, birthdate, availability/job-search statement, political party, implementation-partner name, rollout site city other than Copenhagen, Download CV button or PDF exists anywhere in main/ (D-03, D-04)"
    - "Adding a role later only requires appending one object to main/content/experience.ts — no component or page edits"
    - "At 375px width nothing scrolls horizontally and each node lines up with the first line of its role heading"
  artifacts:
    - path: "main/content/experience.ts"
      provides: "Typed timeline data (sections + entries) and languages list — all Experience copy lives here"
      exports: ["TimelineLink", "TimelineEntry", "TimelineSection", "Language", "timelineSections", "languages"]
      contains: "AGC Biologics, Copenhagen"
    - path: "main/components/TimelineItem.tsx"
      provides: "Reusable timeline entry (li) with teal node, vertical rail, role/company/period header and children slot; `last` drops the rail"
      exports: ["TimelineItem"]
      contains: "last"
    - path: "main/app/experience/page.tsx"
      provides: "/experience route: hero, three timeline sections mapped from data, languages list, page metadata"
      exports: ["metadata", "default"]
      contains: "Experience — Marcel Malbrich"
    - path: "main/components/ProjectCard.tsx"
      provides: "Anchor offset so /projects#slug jumps land below the sticky header"
      contains: "scroll-mt-20"
  key_links:
    - from: "main/app/experience/page.tsx"
      to: "main/content/experience.ts"
      via: "import of timelineSections and languages"
      pattern: "from \"@/content/experience\""
    - from: "main/app/experience/page.tsx"
      to: "main/components/TimelineItem.tsx"
      via: "section.entries.map rendering one TimelineItem per entry, last = final index"
      pattern: "entries\\.map"
    - from: "main/app/experience/page.tsx"
      to: "next/link"
      via: "internal 'More on the projects page' links to /projects#slug"
      pattern: "from \"next/link\""
    - from: "main/content/experience.ts"
      to: "main/components/ProjectCard.tsx"
      via: "link hrefs /projects#ppm-rollout, #henmarsell, #bordenau-festivals match ProjectCard article id={project.slug}"
      pattern: "/projects#"
---

<objective>
Build the Experience page of the main site: a typed data file holding the whole CV timeline (work, education, volunteering, languages), one reusable TimelineItem component (teal node on a vertical rail), and the /experience route that maps the data into three timeline sections plus a compact languages list.

Purpose: Delivers requirement PAGE-03 / Phase 3 success criterion 3 ("Visitor can see a structured Experience/CV timeline reflecting Marcel's real career history"). The nav already links to /experience, which currently 404s. Same content/layout split as /projects: Marcel can add a role or fix a sentence by editing data only.

Output:
- `main/content/experience.ts` — types + `timelineSections` + `languages` with the exact copy from `<copy>`
- `main/components/TimelineItem.tsx` — reusable timeline entry (server component)
- `main/app/experience/page.tsx` — /experience page with metadata
- `main/components/ProjectCard.tsx` — one-class change only (`scroll-mt-20`) so the new links land below the sticky header
</objective>

<execution_context>
@$HOME/.claude/gsd-core/workflows/execute-plan.md
@$HOME/.claude/gsd-core/templates/summary.md
</execution_context>

<context>
@.planning/STATE.md
@./CLAUDE.md
@.planning/quick/261027-ubw-phase-3-step-2-experience-page-cv-timeli/261027-ubw-CONTEXT.md
@main/content/projects.ts
@main/components/ProjectCard.tsx
@main/app/projects/page.tsx
@main/app/globals.css

Handoff reference (read only these parts of `Content/CLAUDE_CODE_HANDOFF.md`): §5 "TimelineItem" (props `role` required, `period` required, `company`, `last`, children = notes; teal node on a vertical rail, `last` drops the trailing line), §7 "Copy & voice" (sentence case, first person, em dashes with spaces, no emoji), §8 "Non-negotiables".

Note for executor:
- The CV PDF in `Content/` is git-ignored. Do NOT open, read, copy, reference by filename or commit it. Every fact you need is in `<copy>` below. `Content/New folder/` and `Content/personal-content-draft.md` are also git-ignored and irrelevant here.
- Repo is PUBLIC. Do not write any confidential term (implementation-partner names, a political party name, rollout site cities, the CV's filename) into any file, comment, commit message or SUMMARY. The privacy gate in Task 3 pulls its term list from an existing commit at runtime precisely so that no list is committed again.
- Do NOT edit Header.tsx, Footer.tsx, NavLinks.tsx, layout.tsx, globals.css, app/projects/page.tsx, content/projects.ts, CLAUDE.md or PROJECT.md. The only allowed change to ProjectCard.tsx is adding the single class `scroll-mt-20` (Task 3). No git push, no deploy.

<decisions>
Locked decisions from CONTEXT.md, numbered here in CONTEXT order for traceability:
- D-01 Scope: `main/content/experience.ts`, `main/components/TimelineItem.tsx` (handoff §5 props), `main/app/experience/page.tsx` mirroring the /projects hero and container. No About/Home/Personal/Contact work.
- D-02 Employers are named with job titles, LinkedIn-style; role descriptions stay general. (PROJECT.md Key Decisions already records: Experience names AGC Biologics, the PPM project card stays anonymous.)
- D-03 Never on the site: phone, street address, birthdate, availability / job-search statements ("available from…", "why this role"), political association membership, implementation-partner/vendor names, individual rollout site city names.
- D-04 No "Download CV" button; the CV is never committed.
- D-05 Content comes only from the curated text (reproduced in `<copy>`); the CV PDF is not read.
- D-06 Styling only through existing tokens in globals.css — no hex colours, no new hardcoded values.
- D-07 Section order Work → Education → Volunteering → Languages; languages as a compact list, not timeline items.
- D-08 Dates as month + year with spaced em dash, e.g. "Oct 2023 — Present".
- D-09 henmarsell links to `/projects#henmarsell`; the curated AGC entry links to `/projects#ppm-rollout`. Label "More on the projects page".

Planner discretion (record these in the SUMMARY so Marcel can approve or revert — each is a one-line data edit):
- Light polish under "light polish allowed": US spelling to match the projects page (fulfillment, program, optimization, organizing, tires); job titles in sentence case per handoff §7 "never Title Case headlines" (Business process analyst, Apprenticeship, industrial clerk, International student ambassador) while official degree, program and institution names keep their own capitalization.
- Council entry: the curated "— see the projects page" becomes a real link (`/projects#bordenau-festivals`, same label as D-09) and the bullet is reworded so it stands without that tail.
- `scroll-mt-20` on the ProjectCard article: the header is sticky and 56px tall (`h-14`), so without an offset the new anchor links would land with the card top hidden under it.
</decisions>

<interfaces>
Existing conventions (use directly, no exploration needed):
- Path alias `@/*` → `main/*`. Import as `@/content/experience`, `@/components/TimelineItem`.
- Container convention (Header, Footer, /projects): `mx-auto px-4 md:px-12 max-w-[1120px]`, page vertical padding `py-12 md:py-16`.
- Components are named exports, pages default exports, server components by default (no "use client" — no hooks needed here).
- Hero pattern to copy exactly from `main/app/projects/page.tsx`: eyebrow `p` (`uppercase text-[length:var(--text-xs)] font-semibold tracking-[var(--ls-eyebrow)] text-[var(--text-accent)]`), `h1` (`mt-3 text-[length:var(--display-sm)] md:text-[length:var(--display-md)] text-ink`) with `em className="italic text-[var(--teal-deep)]"`, intro `p` (`mt-4 text-[length:var(--text-lg)] text-ink-soft max-w-[44ch]`).
- Bridge colour utilities (globals.css `@theme inline`): `bg-surface`, `bg-brand` (teal), `brand-tint` (teal-soft), `text-ink`, `text-ink-soft`, `text-ink-mute`, `border-line`. Anything else: arbitrary value with a CSS variable and a type hint where Tailwind v4 could misread it — `text-[length:var(--text-sm)]` for font sizes, `bg-[color:var(--line-strong)]` for colours, `outline-[color:var(--teal)]` for outline colour (verified in the hg8 build).
- Tailwind default spacing/size scale (`mt-1.5`, `size-3`, `gap-x-4`, `pb-10` …) is the accepted token-aligned scale in this repo; it counts as tokens, arbitrary `[12px]`-style values do not (D-06).
- globals.css has an UNLAYERED `h1, h2, h3` rule setting serif family, weight, letter-spacing and line-height (`--lh-snug` = 1.2). It beats Tailwind utilities, so never put font-family/weight/line-height/tracking classes on headings — size and colour classes work.
- Lint: `react/no-unescaped-entities` is active. Use typographic apostrophes (’) in JSX text and TS strings; the copy contains no straight quotes.
- ProjectCard renders `article id={project.slug}`; existing slugs: `ppm-rollout`, `bordenau-festivals`, `citchen`, `henmarsell`.

Contract this plan creates (Task 1 writes it, Tasks 2–3 consume it):

```typescript
// main/content/experience.ts
export type TimelineLink = { href: string; label: string };   // internal link on this site, e.g. "/projects#henmarsell"; label without arrow
export type TimelineEntry = {
  id: string;            // stable short id, used only as the React key
  role: string;          // heading of the entry
  company?: string;      // organization (+ place), shown next to the period
  period: string;        // "Oct 2023 — Present" (D-08); "Ongoing" when there are no dates
  note?: string;         // one short line shown above the bullets
  points?: string[];     // bullet points
  link?: TimelineLink;   // optional internal link
};
export type TimelineSection = { id: string; title: string; entries: TimelineEntry[] };  // id: "work" | "education" | "volunteering"
export type Language = { name: string; level: string };
export const timelineSections: TimelineSection[];  // page order = array order
export const languages: Language[];

// main/components/TimelineItem.tsx
type TimelineItemProps = { role: string; period: string; company?: string; last?: boolean; children?: ReactNode };
export function TimelineItem(props: TimelineItemProps): JSX.Element;  // renders an <li>; must sit inside an <ol>
```
</interfaces>
</context>

<copy>
Exact copy. Use verbatim (polish already applied). Typographic apostrophes (’) and spaced em dashes (—) exactly as written. Double-quoted TS string literals. Array order = page order. Fields marked "(none)" are left out of the object entirely.

=== Page (Task 3) ===
eyebrow: Experience
h1: Where I’ve learned the trade   (the phrase "learned the trade" is the italic teal accent phrase)
intro: Engineering school, a corporate apprenticeship, a small business of my own — and now owning a global system rollout.
metadata.title: Experience — Marcel Malbrich
metadata.description: Marcel Malbrich’s path so far — work, education, volunteering and languages, from a corporate apprenticeship to owning a global system rollout.
languages section heading: Languages

=== Section 1 — id: work · title: Work ===
1. id: agc-biologics
   role: Business process analyst
   company: AGC Biologics, Copenhagen
   period: Oct 2023 — Present
   note: Part-time alongside my MSc until August 2025, full-time since.
   points:
   - I own the company’s project and portfolio management system end to end — fit-gap, process redesign, configuration, rollout and adoption.
   - Led on-site workshops, training and train-the-trainer at every go-live, and wrote the SOPs and documentation that let the system run without me.
   - Built Power BI reports and automated flows — KPI reporting went from about an hour to minutes.
   - Present to site heads and VPs monthly; lead two students who build reports and automations.
   link: href /projects#ppm-rollout · label More on the projects page
2. id: henmarsell
   role: Co-founder
   company: henmarsell
   period: Jun 2021 — Dec 2025
   note: (none)
   points:
   - Ran an online shop for pond fish towers with my brother, from sourcing and pricing to marketing and fulfillment — and sold it to our manufacturer.
   link: href /projects#henmarsell · label More on the projects page
3. id: continental
   role: Corporate student
   company: Continental AG, Germany
   period: Sep 2019 — Feb 2023
   note: (none)
   points:
   - Dual study program with rotations through supply chain management (KPI reporting), industrial engineering (automated report creation), technical customer service (a global customer survey on digital services) and the innovation lab (a feasibility study on text recognition for used tires).
   - Started with an apprenticeship as industrial clerk (2019–2021).
   link: (none)

=== Section 2 — id: education · title: Education ===
1. id: dtu-msc
   role: MSc Engineering, Industrial Engineering and Management
   company: Technical University of Denmark (DTU)
   period: Sep 2023 — Aug 2025
   points:
   - Thesis on linear and mixed-integer programming for portfolio optimization — graded 12, the top Danish grade.
   - Optimization, simulation, data analytics, lean and change management; one semester of courses at Copenhagen Business School.
2. id: hannover-beng
   role: BEng Industrial Engineering and Technical Sales (dual)
   company: University of Applied Sciences Hannover
   period: Sep 2019 — Feb 2023
   points:
   - Thesis on reducing machine downtime in tire production.
3. id: siue-summer
   role: Summer Financial Institute
   company: Southern Illinois University Edwardsville
   period: 2022
   points:
   - Corporate finance and accounting.
4. id: ihk-apprenticeship
   role: Apprenticeship, industrial clerk
   company: IHK Hannover, at Continental AG
   period: Sep 2019 — Jun 2021
   points: (none)
(No note and no link on any education entry.)

=== Section 3 — id: volunteering · title: Volunteering ===
1. id: dtu-ambassador
   role: International student ambassador
   company: DTU
   period: 2024 — 2025
   points:
   - Advised incoming international MSc students through DTU’s student-to-student program.
   link: (none)
2. id: local-council
   role: Elected member of the local council
   company: Bordenau, Germany
   period: Ongoing
   points:
   - Alongside the council work, I’ve co-organized the village’s festivals.
   link: href /projects#bordenau-festivals · label More on the projects page

=== Languages (name · level) ===
German · native
English · C1
Danish · B2
French · A2
</copy>

<tasks>

<task type="auto">
  <name>Task 1: Create the typed experience data file with all timeline entries and languages</name>
  <files>main/content/experience.ts</files>
  <read_first>main/content/projects.ts (file-header comment style, JSDoc-per-field style, string formatting) — plus this plan's `<interfaces>` contract and `<copy>` section.</read_first>
  <action>
Create `main/content/experience.ts`. This implements D-01/D-05: all Experience text lives here as typed data, taken only from `<copy>` (never from the CV PDF), so adding a role later is a data-only change.

1. File-header comment in the same plain-language style as projects.ts, saying: the sections below become the timelines on /experience in this order; to add a role, copy an entry inside the right section and edit the text; the newest entry goes first in each section; the look lives in components/TimelineItem.tsx, so text changes never touch layout code.
2. Export the four types exactly as in the `<interfaces>` contract (`TimelineLink`, `TimelineEntry`, `TimelineSection`, `Language`) with a short plain-language JSDoc on each field (Marcel reads these files to learn the structure). Do not put example values written as `role: "…"` or `level: "…"` inside comments (the verify counts those patterns).
3. Export `const timelineSections: TimelineSection[]` with exactly three sections in this order (D-07): `{ id: "work", title: "Work" }`, `{ id: "education", title: "Education" }`, `{ id: "volunteering", title: "Volunteering" }`, each holding the entries from `<copy>` in the listed order. Copy every string verbatim. Keep each `role: "…"` and `level: "…"` on a single line. Leave fields marked "(none)" out of the object. Periods use exactly the strings in `<copy>` (D-08). The council entry's period is "Ongoing" (period is required by the handoff spec).
4. Links (D-09 plus the council link from planner discretion): set `link` only on agc-biologics (`/projects#ppm-rollout`), henmarsell (`/projects#henmarsell`) and local-council (`/projects#bordenau-festivals`), each with label "More on the projects page" and no arrow in the data.
5. Export `const languages: Language[]` with the four languages in `<copy>` order, levels exactly "native", "C1", "B2", "A2".
6. Privacy (D-02, D-03): employers are named only as written in `<copy>`. Do not add anything beyond `<copy>` — no phone, address, birthdate, availability or job-search sentence, party, implementation-partner name or rollout site city. This applies to code comments too: do not mention downloads, PDFs, availability or politics in comments (the greps scan comments).
  </action>
  <verify>
    <automated>cd main && npx tsc --noEmit && grep -q "export const timelineSections" content/experience.ts && grep -q "export const languages" content/experience.ts && test "$(grep -v '^\s*\*' content/experience.ts | grep -c 'role: "')" -eq 9 && test "$(grep -v '^\s*\*' content/experience.ts | grep -c 'level: "')" -eq 4 && test "$(grep -v '^\s*\*' content/experience.ts | grep -c 'More on the projects page')" -eq 3 && grep -qF '/projects#ppm-rollout' content/experience.ts && grep -qF '/projects#henmarsell' content/experience.ts && grep -qF '/projects#bordenau-festivals' content/experience.ts && grep -qF 'Oct 2023 — Present' content/experience.ts && ! grep -niE 'available from|availability|why this role|politi|partei|download|\.pdf' content/experience.ts && echo OK</automated>
  </verify>
  <done>`main/content/experience.ts` type-checks and exports `TimelineLink`, `TimelineEntry`, `TimelineSection`, `Language`, `timelineSections`, `languages`; exactly 9 role lines and 4 level lines; exactly 3 "More on the projects page" links with the three hrefs; dates in "Oct 2023 — Present" style; no availability, political or download text; command prints OK.</done>
</task>

<task type="auto">
  <name>Task 2: Build the reusable TimelineItem component (teal node on a vertical rail)</name>
  <files>main/components/TimelineItem.tsx</files>
  <read_first>main/components/ProjectCard.tsx (comment style, class conventions, link/bullet styling), main/app/globals.css (token names), handoff §5 TimelineItem and §8 non-negotiables</read_first>
  <action>
Create `main/components/TimelineItem.tsx` exporting `function TimelineItem({ role, period, company, last = false, children }: TimelineItemProps)` with the props from the `<interfaces>` contract (handoff §5, D-01). Import `ReactNode` as a type from "react". Server component, no "use client". Start with a short plain-language comment: what the component draws (one entry on the Experience timeline), that it renders an `li` so it must sit inside an `ol`, that `last` hides the rail below the final entry, and that it contains no CV text — everything arrives via props and children.

Structure:
1. Outer `li`: two-column grid `grid grid-cols-[auto_1fr] gap-x-4 md:gap-x-6` — left column is the rail, right column the text.
2. Rail column: a `div` with `aria-hidden="true"` (purely decorative) and `flex flex-col items-center`.
   - Node: a `span` with `mt-1.5 md:mt-2 size-3 shrink-0 rounded-full bg-brand ring-4 ring-brand-tint` (teal dot with a soft teal halo). The top margin centres the 12px node on the first line of the role heading: mobile heading line is 20px × 1.2 = 24px (offset 6px = `mt-1.5`), desktop 24px × 1.2 ≈ 29px (offset 8px = `md:mt-2`).
   - Rail: only when `last` is false, a `span` with `mt-2 w-px flex-1 bg-[color:var(--line-strong)]` — a 1px line that stretches to the bottom of the entry.
3. Text column: a `div` with `min-w-0` (prevents horizontal overflow at 375px) plus `pb-10 md:pb-12` when not `last` (space before the next entry; the rail runs through it).
   - `h3` with `role`, sized `text-[length:var(--text-lg)] md:text-[length:var(--display-2xs)] text-ink` (serif comes from the global rule; do not add font classes).
   - Meta `p` with `mt-1 text-[length:var(--text-sm)] text-ink-soft`: when `company` is set, a `span` with `font-medium text-ink` containing the company followed by the text " · ", then `period`. Without company, only the period.
   - Children: only when `children` is provided, wrap them in a `div` with `mt-3 space-y-3 text-ink-soft`.
4. Design rules (D-06, handoff §8): no hex colours, no arbitrary pixel/rem values (`[12px]`, `[0.5rem]` …), no coloured left border (`border-l-*`), no hover effects (entries are not clickable). Teal is used only for the decorative node and halo; all text uses `text-ink`/`text-ink-soft` for AA contrast.
  </action>
  <verify>
    <automated>cd main && npx tsc --noEmit && grep -q "export function TimelineItem" components/TimelineItem.tsx && grep -q "<li" components/TimelineItem.tsx && grep -q 'aria-hidden="true"' components/TimelineItem.tsx && grep -q "last" components/TimelineItem.tsx && grep -q "bg-brand" components/TimelineItem.tsx && ! grep -nE "#[0-9A-Fa-f]{3,8}\b" components/TimelineItem.tsx && ! grep -nE "\[[0-9.]+(px|rem)\]" components/TimelineItem.tsx && ! grep -n "border-l-" components/TimelineItem.tsx && ! grep -n "use client" components/TimelineItem.tsx && ! grep -nE "AGC|Continental|DTU|henmarsell|Bordenau" components/TimelineItem.tsx && echo OK</automated>
  </verify>
  <done>TimelineItem.tsx type-checks; renders an `li` with a decorative teal node, a rail that is omitted when `last` is true, a serif role heading, a company · period line and an optional children block; contains no hex colours, no arbitrary px/rem values, no left-border accent, no client directive and no CV text; command prints OK.</done>
</task>

<task type="auto">
  <name>Task 3: Create the /experience page, add the anchor offset, then build and run the privacy gate</name>
  <files>main/app/experience/page.tsx, main/components/ProjectCard.tsx</files>
  <read_first>main/app/projects/page.tsx (hero, container, metadata pattern — mirror it), main/components/ProjectCard.tsx (link styling to reuse; the article className to extend)</read_first>
  <action>
A. Create `main/app/experience/page.tsx` (one-line comment for Marcel: in the App Router, the folder `experience` with a `page.tsx` inside automatically becomes the /experience URL). Implements D-01, D-07, D-09.
1. Export `const metadata: Metadata` (type import from "next") with the title and description from `<copy>`.
2. Default-export `ExperiencePage()`. Outer `div` uses exactly the /projects container and padding (`mx-auto px-4 md:px-12 max-w-[1120px] py-12 md:py-16`). Hero `header` copied from the /projects pattern with the `<copy>` eyebrow, h1 ("Where I’ve " + `em` "learned the trade") and intro.
3. Below the hero, one content column `flex flex-col gap-12 md:gap-16 mt-10 md:mt-12 max-w-[var(--container-sm)]` (760px reading width). Inside it, map `timelineSections` (imported from `@/content/experience`) in array order. Each section is a `section` with `aria-labelledby={`${section.id}-heading`}` and `pt-10 md:pt-12 border-t border-line`, containing an `h2` with `id={`${section.id}-heading`}`, text `section.title`, classes `text-[length:var(--display-2xs)] md:text-[length:var(--display-xs)] text-ink`, followed by an `ol` with `mt-6 md:mt-8` that maps `section.entries` to `TimelineItem` (from `@/components/TimelineItem`) with `key={entry.id}`, `role`, `company`, `period`, and `last={index === section.entries.length - 1}`.
4. Children per entry: pass children only when the entry has a note, at least one point, or a link (otherwise pass none, so the IHK entry gets no empty block). Build them with a small non-exported helper in this page file, e.g. `EntryDetails({ entry }: { entry: TimelineEntry })`, rendering in order: the note as a `p` in `text-[length:var(--text-sm)]`; the points as `ul` with `list-disc pl-5 space-y-2 marker:text-[var(--teal)]` (same as ProjectCard bullets, items keyed by their text); the link as a `Link` from "next/link" with `href={entry.link.href}`, the label, then `span aria-hidden="true"` with "→" (handoff arrow; internal link, so no new tab and no `target`). Link classes copied from the ProjectCard link: `inline-flex items-center gap-1 font-semibold text-[length:var(--text-sm)] text-[var(--text-accent)] hover:underline underline-offset-4 rounded-sm focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[color:var(--teal)]`.
5. After the mapped sections, the Languages section (D-07, compact list, not timeline items): same `section` wrapper with `aria-labelledby="languages-heading"`, `h2 id="languages-heading"` "Languages" with the same h2 classes, then `ul` with `mt-6 flex flex-wrap gap-x-8 gap-y-3` mapping `languages` (key = name); each `li` shows the name in `span font-semibold text-ink`, a space, and "(level)" in `span text-ink-soft` — renders as "German (native)".
6. No CV text in this file other than the `<copy>` page strings (hero, metadata, "Languages"); every entry comes from the data. No "Download CV" button, no PDF link (D-04). Tokens only (D-06); the `max-w-[1120px]` container is the existing convention, not a new value. Do not mention downloads, PDFs, availability or politics in code comments either â the privacy gate scans comments too.

B. In `main/components/ProjectCard.tsx`, add the single class `scroll-mt-20` to the `article` className (planner discretion, see `<decisions>`): it gives /projects#slug jumps an 80px offset so the card clears the 56px sticky header. Change nothing else in that file.

C. Run the full verification below. If build or lint fails, fix the cause only within this plan's four files.
  </action>
  <verify>
    <automated>cd main && npx tsc --noEmit && npx eslint app/experience components/TimelineItem.tsx components/ProjectCard.tsx content/experience.ts && npm run build &&
grep -q "scroll-mt-20" components/ProjectCard.tsx &&
H=.next/server/app/experience.html && test -f "$H" &&
{ fail=0; for s in "Experience — Marcel Malbrich" "learned the trade" "Business process analyst" "AGC Biologics, Copenhagen" "Oct 2023 — Present" "Continental AG, Germany" "Technical University of Denmark (DTU)" "Summer Financial Institute" "Elected member of the local council" "Danish" "French" "/projects#ppm-rollout" "/projects#henmarsell" "/projects#bordenau-festivals"; do grep -qF "$s" "$H" || { echo "MISSING: $s"; fail=1; }; done; [ "$fail" -eq 0 ]; } &&
O=$(for id in work education volunteering languages; do grep -ob "id=\"$id-heading\"" "$H" | head -1 | cut -d: -f1; done) && [ "$(echo "$O" | wc -l)" -eq 4 ] && [ "$O" = "$(echo "$O" | sort -n)" ] &&
[ "$(grep -o '<h3' "$H" | wc -l)" -eq 9 ] && [ "$(grep -o '<h2' "$H" | wc -l)" -eq 4 ] && ! grep -qiF "download cv" "$H" &&
{ ok=1; for a in ppm-rollout henmarsell bordenau-festivals; do grep -qF "id=\"$a\"" .next/server/app/projects.html || { echo "NO ANCHOR: $a"; ok=0; }; done; [ "$ok" -eq 1 ]; } &&
TERMS=$(git show 4960c7c:.planning/quick/261027-hg8-phase-3-step-1-reusable-projectcard-stru/261027-hg8-PLAN.md | grep -oE 'grep -r?niE "[^"]+"' | sed -E 's/^grep -r?niE "//; s/"$//' | tr '|' '\n' | grep -viE 'agc|copenhagen' | sort -u | paste -sd'|' -) && [ "$(printf '%s\n' "$TERMS" | tr '|' '\n' | wc -l)" -ge 8 ] &&
GEN='(\+|00)[0-9]{2}[ 0-9/-]{6,}|\b0[0-9]{2,4}[ /-]?[0-9]{4,}|[0-9]{2}[ .-][0-9]{2}[ .-][0-9]{2}[ .-][0-9]{2}|stra(ss|ß)e|\bstr\. ?[0-9]|[a-z](vej|gade|allé|weg)\b|\bstreet\b|available from|availability|open to work|job search|notice period|why this role|politi|partei|democrat|\bparty member|\bunion\b|born |birth|geboren|download|\.pdf' &&
POST='\b[0-9]{4,5} [A-ZÆØÅÄÖÜ][a-zæøåäöüß]+' &&
! grep -rniE "$TERMS" content components app && ! grep -rniE "$GEN" content components app && ! grep -rnE "$POST" content components app && ! git -C .. ls-files | grep -qiE '\.pdf$' && ! find . -path ./node_modules -prune -o -path ./.next -prune -o -iname '*.pdf' -print | grep -q . &&
echo ALL-OK</automated>
    <human-check>
      <test>Run `cd main && npm run dev`, open http://localhost:3000/experience. Check once at desktop width and once with browser dev tools at 375px. Click each "More on the projects page" link.</test>
      <expected>Hero matches /projects in style. Sections in order Work, Education, Volunteering, Languages. Each entry has a teal dot aligned with the first line of the role, joined by a thin grey rail that stops at the last entry of each section. Languages read "German (native) · English (C1) …" as a compact row, not a timeline. 375px: no horizontal scrollbar, long degree names wrap cleanly. Each link opens /projects with the right card's top fully visible below the header. Copy accurate — especially the polish choices listed in the SUMMARY.</expected>
      <why_human>Visual alignment of node and rail, responsive behaviour and copy accuracy cannot be fully verified by grep; Marcel must approve the wording before anything is deployed.</why_human>
    </human-check>
  </verify>
  <done>`npm run build` exits 0 and lists `/experience` as a static route; tsc and eslint clean; `scroll-mt-20` is the only change in ProjectCard.tsx (check `git diff main/components/ProjectCard.tsx` before committing: one line changed); prerendered experience HTML contains every checked string, the four section headings in order, 9 role headings, 4 h2s and no "Download CV"; projects HTML has the three anchor ids; the privacy gate finds no confidential term, phone, address, availability, political, birthdate, download or PDF match in main/ source and no PDF is tracked or present in main/; command prints ALL-OK. If `.next/server/app/experience.html` is not at that exact path in this Next.js version, locate it with `find .next/server/app -name "experience*.html"` and run the same checks against it.</done>
</task>

</tasks>

<threat_model>
## Trust Boundaries

| Boundary | Description |
|----------|-------------|
| Repo content → public website | Everything in main/content/experience.ts is published once deployed; private CV data (phone, address, birthdate, political association, job-search intent) must not cross this line |
| Planning docs → public repo | This PLAN, the SUMMARY and commit messages are public on GitHub; confidential term lists and the CV filename must not be written into them |

No user input, forms, APIs, auth, external links or package installs in this plan (next/link ships with Next.js).

## STRIDE Threat Register

| Threat ID | Category | Component | Disposition | Mitigation Plan |
|-----------|----------|-----------|-------------|-----------------|
| T-q261027ubw-01 | Information disclosure | main/content/experience.ts (personal data from CV) | mitigate | Copy fixed verbatim in `<copy>`, sourced from the curated CONTEXT text; executor forbidden to open the CV; Task 3 generic gate (phone, street, postcode, birthdate patterns) must find nothing in main/ source; Marcel reviews before deploy |
| T-q261027ubw-02 | Information disclosure | Job-search signal visible to current employer | mitigate | No availability or "why this role" text in `<copy>`; Task 1 and Task 3 grep for availability / job-search phrases must find nothing; no Download CV button and no PDF tracked or present in main/ (D-04) |
| T-q261027ubw-03 | Information disclosure | Political association and implementation-partner / rollout-site names | mitigate | Council entry names no party; Task 3 pulls the existing confidential term list from commit 4960c7c at runtime (dropping the employer and Copenhagen terms, now allowed per D-02) and greps main/ source — nothing new is committed |
| T-q261027ubw-04 | Information disclosure | Committed planning docs | mitigate | Executor note forbids writing confidential terms or the CV filename into any file, comment, commit message or SUMMARY |
| T-q261027ubw-05 | Information disclosure | Employer named on Experience while PPM card stays anonymous | accept | Marcel decision 2026-10-27, recorded in PROJECT.md Key Decisions; employer and title are already public on LinkedIn; role descriptions stay general |
</threat_model>

<verification>
- `cd main && npx tsc --noEmit` — no errors
- `cd main && npx eslint app/experience components/TimelineItem.tsx components/ProjectCard.tsx content/experience.ts` — no errors
- `cd main && npm run build` — exit 0, `/experience` listed as a static route
- Prerendered experience HTML: hero/metadata strings, all key entries, three internal links, section order Work → Education → Volunteering → Languages, 9 h3, 4 h2, no "Download CV"
- Projects HTML still exposes ids ppm-rollout, henmarsell, bordenau-festivals; ProjectCard diff is the single `scroll-mt-20` class
- Privacy gate (Task 3 command) — no confidential term, phone, address, availability, political, birthdate, download or PDF match in main/ source; no PDF tracked or present in main/
- No hex colours, arbitrary px/rem values or `border-l-` classes in TimelineItem.tsx
- Human check (end of phase): desktop + 375px layout, node/rail alignment, anchor landings, copy accuracy
</verification>

<success_criteria>
- /experience renders the hero plus Work (3), Education (4), Volunteering (2) timelines and a compact Languages list, in that order (PAGE-03, D-07)
- All CV text lives in main/content/experience.ts; TimelineItem.tsx and page.tsx contain no entry-specific copy
- Employers named with titles (D-02); dates in "Oct 2023 — Present" style (D-08); three internal links land on the right project cards below the sticky header (D-09)
- No private data, job-search statement, party, implementation-partner name, rollout site city other than Copenhagen, Download CV button or PDF (D-03, D-04, D-05)
- Visual rules met: tokens only, teal used only for the decorative node, AA-contrast text colours, no horizontal scroll at 375px (D-06)
- Build, type-check, lint and privacy gate pass; nothing pushed or deployed
</success_criteria>

<output>
Create `.planning/quick/261027-ubw-phase-3-step-2-experience-page-cv-timeli/261027-ubw-SUMMARY.md` when done. In it, for Marcel in plain language: what the three new files do and why ProjectCard got one extra class; how to add a role later (copy an entry in content/experience.ts, newest first). List under "For Marcel to approve" each polish choice from `<decisions>` (US spelling, sentence-case job titles, reworded council bullet plus its new link) so he can revert any with a one-line data edit. Do not write any confidential term or the CV filename into the SUMMARY. Nothing pushed or deployed.
</output>
