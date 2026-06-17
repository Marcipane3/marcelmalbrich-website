# Marcel Malbrich Portfolio — Design System Handoff for Claude Code

A complete, self-contained reference for building a website or webpage with the **Marcel Malbrich** portfolio design system. Everything below — tokens, fonts, components, rules, and copy voice — is what you need to design on-brand without guessing.

> **Who/what this dresses:** a personal job-hunting / personal-branding portfolio for **Marcel Malbrich**, an industrial engineer & business-process analyst working in **project portfolio management (PPM)**. Sections: Home, About, Experience/CV, Projects, Hobbies, Contact.
>
> **The look:** warm-editorial layout (serif headlines, generous whitespace, friendly "MM" monogram) on a **cool slate-and-teal palette** over soft off-white. **Light theme only — no dark mode.**

---

## 1. How to consume the system

The design system ships as **global CSS tokens** + a **compiled React component bundle**.

### Global CSS
Link the single entry point — it `@import`s fonts + all tokens:
```html
<link rel="stylesheet" href="styles.css">
```
`styles.css` pulls in `tokens/fonts.css` (Newsreader + Public Sans from Google Fonts), `tokens/colors.css`, `tokens/typography.css`, and `tokens/spacing.css`. After this, every CSS variable below is available globally.

### Components (React)
The compiled bundle exposes all components on a window namespace:
```html
<!-- React UMD + ReactDOM UMD + Babel standalone must load FIRST -->
<script src="_ds_bundle.js"></script>
<script type="text/babel">
  const { Button, ProjectCard, SectionHeading, /* … */ } = window.MarcelMalbrichPortfolioDesignSystem_f1ca43;
</script>
```
- **Namespace:** `window.MarcelMalbrichPortfolioDesignSystem_f1ca43`
- The bundle calls `React.createElement`, so React + ReactDOM UMD must be loaded before it.
- The loader is async — read the namespace inside a `DOMContentLoaded` / `window.onload` handler, not an inline parser-blocking script.
- **Do NOT** `<script src>` the raw `.jsx`/`.tsx` files — their `export` is unreachable from inline script. Always go through `_ds_bundle.js`.

### Required script tags (pinned)
```html
<script src="https://unpkg.com/react@18.3.1/umd/react.development.js" integrity="sha384-hD6/rw4ppMLGNu3tX5cjIb+uRZ7UkRJ6BPkLpg4hAu/6onKUg4lLsHAs9EBPT82L" crossorigin="anonymous"></script>
<script src="https://unpkg.com/react-dom@18.3.1/umd/react-dom.development.js" integrity="sha384-u6aeetuaXnQ38mYT8rp6sbXaQe3NL9t+IBXmnYxwkUI2Hw4bsp2Wvmx4yRQF1uAm" crossorigin="anonymous"></script>
<script src="https://unpkg.com/@babel/standalone@7.29.0/babel.min.js" integrity="sha384-m08KidiNqLdpJqLq95G/LEi8Qvjl/xUYll3QILypMoQ65QorJ9Lvtp2RXYGBFj1y" crossorigin="anonymous"></script>
```

> **For a production (non-prototype) build:** you don't have to use the compiled bundle — the components are plain React in `components/**/*.jsx`. Port them into your framework and keep `styles.css` / the tokens as your global theme. The token names and component APIs below are the contract either way.

### Reference files to read
- `ui_kits/portfolio/index.html` — the canonical example: an interactive 5-page portfolio (Home · About · Experience · Work · Contact) composed entirely from these components.
- `templates/portfolio/index.html` — a single-page homepage template (hero + featured work + contact) you can copy and fill in.
- Each component has a `.prompt.md` (usage) and `.d.ts` (exact prop types) beside its `.jsx`.

---

## 2. Color tokens

Cool & calm. Soft off-white page, white cards, deep ink text. **Teal is the single brand accent**; **slate** is the cool structural dark. One accent — resist adding a second hue.

### Base ramps
| Token | Value | Use |
|---|---|---|
| `--bg` | `#F4F7F7` | page background |
| `--surface` | `#FFFFFF` | cards, raised panels |
| `--surface-sunk` | `#EEF3F3` | wells, subtle fills |
| `--ink` | `#1C2A33` | primary text / darkest |
| `--ink-soft` | `#56656E` | secondary text |
| `--ink-mute` | `#8A97A0` | tertiary text, captions |
| `--slate` | `#3E5563` | cool structural dark (feature blocks, photos) |
| `--slate-deep` | `#2C3E48` | darker slate (gradient ends) |
| `--teal` | `#1F9488` | brand accent — actions, links, marks |
| `--teal-deep` | `#15756B` | hover/pressed teal, italic headline phrase |
| `--teal-bright` | `#2AA093` | gradient highlight |
| `--teal-soft` | `#E4F1EF` | tinted fill behind teal text/icons |
| `--line` | `#E2EAEA` | hairlines & borders |
| `--line-strong` | `#CDD9D9` | stronger border (card hover) |

### Status (muted to sit in the cool palette)
| Token | Value | Soft pair |
|---|---|---|
| `--success` | `#2E9E6B` | `--success-soft` `#E3F3EB` |
| `--warning` | `#C98A2B` | `--warning-soft` `#F7EEDD` |
| `--danger` | `#C2483B` | `--danger-soft` `#F7E6E3` |
| `--info` | `#1F9488` | `--info-soft` `#E4F1EF` |

### Semantic aliases (prefer these in components)
`--text-strong` (=ink) · `--text-body` (=ink-soft) · `--text-muted` (=ink-mute) · `--text-accent` (=teal-deep) · `--text-on-dark` (#fff)
`--surface-page` · `--surface-card` · `--surface-raised` · `--surface-well` · `--surface-dark` (=slate)
`--border` (=line) · `--border-strong` (=line-strong)
`--brand` (=teal) · `--brand-hover` (=teal-deep) · `--brand-tint` (=teal-soft) · `--on-brand` (#fff)
`--focus-ring` = `color-mix(in srgb, var(--teal) 45%, transparent)`

**The one recurring rich surface** is a slate→ink linear gradient on feature blocks & photo placeholders, always at **140–150°**, e.g. `linear-gradient(150deg,#5b7a88,#3E5563 55%,#1C2A33)`.

---

## 3. Typography

Two families. **Newsreader** (display serif) for all headlines; **Public Sans** (sans) for everything functional.

### Families & weights
- `--font-serif`: `"Newsreader", Georgia, "Times New Roman", serif` — headlines h1–h3, pull quotes, the "MM" mark, stat figures. Weight **500** for headings, **600** for the mark; *italic* for the teal accent phrase.
- `--font-sans`: `"Public Sans", system-ui, …` — body, nav, labels, buttons, forms, meta. Weights 400/500/600/700.
- `--font-mono`: `ui-monospace, "SF Mono", Menlo, Consolas, monospace`.
- Weight tokens: `--w-regular: 400` · `--w-medium: 500` · `--w-semibold: 600` · `--w-bold: 700`.

### Body / UI scale (sans)
`--text-xs: 13px` · `--text-sm: 15px` · `--text-base: 17px` (default body) · `--text-lg: 20px` (lead)
Body is **17px / 1.6**.

### Display scale (serif headlines)
`--display-2xs: 24px` · `--display-xs: 30px` · `--display-sm: 36px` · `--display-md: 44px` · `--display-lg: 56px` · `--display-xl: 68px`

### Line height & letter spacing
`--lh-tight: 1.08` · `--lh-snug: 1.2` · `--lh-normal: 1.6`
`--ls-display: -0.01em` (display tightens slightly) · `--ls-tight: -0.02em` · `--ls-normal: 0` · `--ls-eyebrow: 0.12em`

### Eyebrow / kicker preset
`--eyebrow-size: 13px` · `--eyebrow-weight: 600`, uppercase, teal, `0.12em` tracking.

### Helper classes (optional)
`.t-display`, `.t-eyebrow`, `.t-body` are provided in `typography.css` if you'd rather not wire the vars by hand.

---

## 4. Spacing, layout, radii, shadows, motion

### Spacing scale (4px base grid)
`--space-1: 4px` · `-2: 8` · `-3: 12` · `-4: 16` · `-5: 20` · `-6: 24` · `-8: 32` · `-10: 40` · `-12: 48` · `-16: 64` · `-20: 80` · `-24: 96`

### Layout
- `--container: 1120px` (max content width)
- `--container-sm: 760px` (reading column)
- `--gutter: 48px`
- `--section-y: 64px` (vertical rhythm between sections)
- Sections separated by 64px rhythm + a single hairline (`--line`) — not heavy dividers.
- Reading width: ~44ch for leads, ~54ch for body.

### Radii
`--radius-sm: 8px` · `--radius-md: 12px` (inputs) · `--radius-lg: 16px` (cards) · `--radius-xl: 24px` (feature blocks, portraits) · `--radius-pill: 999px` (pills/buttons)

### Shadows (cool, slate-tinted, restrained)
- `--shadow-xs`: `0 1px 2px rgba(28,42,51,.05)`
- `--shadow-sm`: `0 1px 3px rgba(28,42,51,.07)` — rests on cards
- `--shadow-md`: `0 18px 36px -22px rgba(28,42,51,.40)` — hover-lift
- `--shadow-lg`: `0 24px 50px -20px rgba(28,42,51,.42)` — floats portraits
- `--shadow-brand`: `0 6px 16px -6px rgba(31,148,136,.55)` — teal glow, reserved for the monogram & brand icon-button
- `--shadow-press`: `0 2px 0` — paired with a `-deep` color for the button's tactile "stacked" look

### Motion
- `--ease`: `cubic-bezier(.4,0,.2,1)` · `--ease-out`: `cubic-bezier(.16,1,.3,1)`
- `--dur-fast: .12s` · `--dur: .18s` · `--dur-slow: .3s`
- Calm and quick. Cards & primary buttons **lift 1–4px** on hover; primary buttons darken teal. **No bounces, no parallax, no infinite loops.** Smooth-scroll on in-page nav.

### Hover / press states
- Links: muted → ink, or gain a teal underline.
- Primary button: teal → teal-deep + 1px lift.
- Ghost button: fills ink, text flips to off-white.
- Cards: 4px lift + stronger shadow + border darkens to `--line-strong`.
- Inputs: border → teal + 3px translucent teal focus ring.

---

## 5. Components

All on `window.MarcelMalbrichPortfolioDesignSystem_f1ca43`. Extra props (e.g. native HTML attrs, `style`, `className`) pass through unless noted.

### Button
Action button. Use **exactly ONE primary per view**; pair primary + ghost for the hero CTA row.
```jsx
<Button variant="primary" size="lg">See my work</Button>
<Button variant="ghost">Download CV</Button>
<Button variant="subtle" iconLeft={<DownloadIcon/>}>Résumé</Button>
<Button variant="link" iconRight="→">View all projects</Button>
```
- `variant`: `primary` (teal, stacked 2px shadow) · `ghost` (ink outline, fills on hover) · `subtle` (white, hairline) · `link` (teal inline) — default `primary`
- `size`: `sm` · `md` (default) · `lg`
- `as`: render as another element, e.g. `"a"`
- `iconLeft` / `iconRight`: ReactNode
- `full`: stretch to container width

### IconButton
Single-icon button (social links, nav, card actions). Always pass `label` for a11y. Feed it a Lucide SVG (24px, 1.75 stroke).
```jsx
<IconButton label="LinkedIn" variant="subtle"><LinkedinIcon/></IconButton>
<IconButton label="Email" variant="brand" round><MailIcon/></IconButton>
```
- `variant`: `subtle` (white + hairline, default) · `ghost` (transparent) · `brand` (teal fill)
- `size`: `sm` 32 · `md` 40 (default) · `lg` 48px
- `round`: pill vs rounded-square
- `label`: sets aria-label + title

### Card
Generic raised white surface. Add `interactive` for clickable hover-lift. (For project showcases use **ProjectCard**.)
```jsx
<Card padding={32}>…</Card>
<Card interactive>…</Card>
```
- `interactive`: hover-lift + pointer cursor (default false)
- `padding`: inner px (default 24)
- White surface, hairline border, soft shadow, 16px radius — **never** a colored left-border accent.

### ProjectCard
Projects-grid showcase: image header, uppercase category, serif title, one-line blurb. Whole card is a link with hover-lift. Lay three across in `repeat(3,1fr)` with `gap: var(--space-6)`.
```jsx
<ProjectCard
  category="Portfolio governance"
  title="Roadmap rebuild for a 200-project portfolio"
  description="A prioritization framework that cut delivery delays by a third."
  image="/projects/roadmap.jpg"
  href="/work/roadmap"
/>
```
- `title` (required) · `category` · `description` · `href` (default `#`)
- `image`: header image URL. Omit to get a slate→ink gradient placeholder.
- `imageBg`: custom gradient/background when no image.

### Eyebrow
Uppercase teal kicker above a section heading. One per section.
```jsx
<Eyebrow rule>Industrial Engineer · PPM</Eyebrow>
<Eyebrow>Selected work</Eyebrow>
```
- `rule`: short leading teal rule (hero variant)

### SectionHeading
Standard section header — composes Eyebrow internally. Keep titles short (they're serif & large).
```jsx
<SectionHeading kicker="Selected work" title="Projects I'm proud of" link="View all →" href="/work" />
<SectionHeading align="center" kicker="Get in touch" title="Life outside of work" />
```
- `title` (required) · `kicker` · `link` · `href` (default `#`)
- `align`: `row` (title left, link right; default) · `center`
- `size`: title px (default 36)

### StatBlock
Serif figure + small caption (hero credibility metrics). Lay several in a flex row with `gap: var(--space-8)`.
```jsx
<StatBlock value="8+" label="Years in PPM" />
<StatBlock value="40+" label="Projects steered" />
```
- `value` (required) · `label` (required)

### TimelineItem
One role on the Experience/CV timeline — teal node on a vertical rail. Stack several; mark the final one `last` to drop the trailing line.
```jsx
<TimelineItem role="Senior PPM Analyst" company="Acme Industrial" period="2022 — Present">
  Lead portfolio prioritization across 5 business units; built the capacity model the PMO runs on.
</TimelineItem>
<TimelineItem role="Process Analyst" company="Vornic Group" period="2019 — 2022" last>
  Mapped and streamlined intake for 40+ annual projects.
</TimelineItem>
```
- `role` (required) · `period` (required) · `company` · `last` · children = notes

### Avatar
Circular portrait; falls back to teal-gradient initials from `name` (serif, matches the MM wordmark).
```jsx
<Avatar name="Marcel Malbrich" size={56} />
<Avatar src="/me.jpg" name="Marcel Malbrich" size={72} ring />
```
- `src` · `name` (drives initials + alt) · `size` px (default 48) · `ring` (white ring + shadow, for over photos)

### Badge
Small status label — availability, project status, categories.
```jsx
<Badge tone="brand" dot>Open to new roles</Badge>
<Badge tone="success">Shipped</Badge>
<Badge tone="neutral">2025</Badge>
```
- `tone`: `neutral` (default) · `brand` · `success` · `warning` · `danger`
- `dot`: leading colored dot — for live/availability states

### Tag
Pill for skills, topics, filter chips (About skill list, project meta). Group in a flex row with `gap: var(--space-2)`.
```jsx
<Tag>Portfolio strategy</Tag>
<Tag variant="accent">Process mapping</Tag>
<Tag variant="solid">Featured</Tag>
```
- `variant`: `default` (white + hairline) · `accent` (teal tint) · `solid` (slate fill)

### Input
Labelled single-line text field (contact form). Teal focus ring, 1.5px border, 12px radius. Accepts all native input attrs.
```jsx
<Input label="Your name" placeholder="Jane Doe" />
<Input label="Email" type="email" hint="I'll only use this to reply." />
```
- `label` · `hint` · + native (`type`, `placeholder`, `required`, …)

### Textarea
Multi-line field matching Input, vertically resizable.
```jsx
<Textarea label="Message" rows={5} placeholder="Tell me about your project…" />
```
- `label` · `hint` · `rows` (default 4) · + native attrs

---

## 6. Iconography & logo

- **Icon set:** [Lucide](https://lucide.dev) — 24px, **1.75 stroke**, round caps/joins. (Flagged substitution — no icon set was supplied; swap if preferred.) A small inline subset (Mail, LinkedIn, GitHub, Arrow, Download, Pin) is in `ui_kits/portfolio/SiteChrome.jsx`; pull the full set from the Lucide CDN/npm for production.
- Icons are sparing & functional: social links, contact rows, the "→" affordance. They inherit `currentColor`; in tinted contexts they sit in a `--brand-tint` rounded-square chip with teal-deep glyphs.
- **No emoji.** No unicode-as-icon (except a plain "→" arrow). No filled/duotone styles.
- **Logo / monogram:** "MM" serif monogram in a teal-gradient circle. Assets: `assets/logo/mm-mark.svg` (96px mark) and `assets/logo/wordmark.svg` (horizontal lockup). The inline version used in the template:
  ```jsx
  <span style={{width:38,height:38,borderRadius:'50%',background:'linear-gradient(140deg,var(--teal-bright),var(--teal-deep))',color:'#fff',display:'grid',placeItems:'center',fontFamily:'var(--font-serif)',fontWeight:600,boxShadow:'var(--shadow-brand)'}}>MM</span>
  ```

---

## 7. Copy & voice (content fundamentals)

- **Voice:** warm, first-person, confident-but-humble. Marcel is "**I**"; the reader is "**you**." e.g. *"Hi, I'm Marcel. I help organizations run better projects."*
- **Tone:** plain-spoken & concrete, never corporate-jargon-y. Short declaratives. A little dry wit welcome: *"Good process is just empathy, organized."*
- **Casing:** **Sentence case everywhere** — headlines, buttons, nav. The only uppercase is the **eyebrow/kicker** label and small meta labels. **Never Title Case headlines.**
- **Headlines** lean editorial with an *italic teal phrase* to land the point: "Let's build something *worth shipping.*"
- **Eyebrows/kickers:** 1–3 words, uppercase, teal — "Selected work", "Get in touch".
- **Buttons:** verb-first & short — "See my work", "Download CV", "Say hello".
- **Body:** generous but disciplined — one idea per paragraph, ~2–3 sentences. Cap reading width.
- **Numbers/metrics:** sparing, only when real & credible ("8+ years", "cut delivery delays by a third"). No invented stat dashboards.
- **Emoji:** none — warmth comes from words, serif type, and color.
- **Punctuation:** em dashes for asides ("—" with spaces). Ampersands fine in labels ("Data & dashboards").

---

## 8. Non-negotiables (quick checklist)

- ✅ Light theme only. Cool off-white page, **teal as the only accent**, **slate** for dark blocks.
- ✅ **Newsreader** serif for all headlines (with an italic teal phrase); **Public Sans** for everything functional.
- ✅ Sentence case everywhere; uppercase only for eyebrows/kickers. First person ("I"), warm and plain-spoken. **No emoji.**
- ✅ Cards: white, 1px hairline border, soft cool shadow, 16px radius — **never** a colored left-border accent.
- ✅ Motion calm (120–180ms), hover = small lift. No bounces, no parallax, no infinite loops, no gradient-purple clichés.
- ✅ The only translucent/blurred surface is the **sticky nav** (translucent off-white + 10px backdrop blur). Everything else is opaque.
- ✅ Backgrounds mostly flat off-white. The one rich surface is the slate→ink gradient (140–150°) on feature blocks & photo frames.
- ✅ Photos sit in rounded frames with a white 6px inset border + soft drop shadow; placeholders are honest slate-gradient blocks labeled with what belongs there.
- ✅ Icons: Lucide, 24px, 1.75 stroke. Use sparingly.

---

## 9. Page structure reference

The canonical 5-page site (`ui_kits/portfolio/index.html`) and its parts:
- `SiteChrome.jsx` — sticky nav (translucent + blur), footer, inline Lucide subset, MM mark.
- `PageHero.jsx` — reusable page hero (eyebrow + serif headline).
- `HomePage.jsx` — hero with portrait + stat row, featured projects, contact CTA.
- `AboutPage.jsx` — bio, skills as Tags, "beyond the spreadsheet" hobbies.
- `ExperiencePage.jsx` — CV timeline via TimelineItem.
- `ProjectsPage.jsx` — ProjectCard grid (3 across).
- `ContactPage.jsx` — contact form (Input/Textarea) + slate contact panel.

When in doubt about assembly, layout proportions, or spacing, open `ui_kits/portfolio/index.html` and `templates/portfolio/index.html` and follow them.
