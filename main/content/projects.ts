/**
 * Project data for the /projects page.
 *
 * Each object below becomes one card on /projects, in this order.
 * To add a project, copy an entry and edit the text.
 * To add a photo, put the file in main/public/projects/ and set image: { src, alt }.
 *
 * This file holds content only — the look of the cards lives in
 * components/ProjectCard.tsx, so text changes never require touching layout code.
 */

/** A photo shown at the top-left of a card. */
export type ProjectImage = {
  /** Path to the file inside main/public, e.g. "/projects/citchen.jpg". */
  src: string;
  /** Short description of the photo for screen readers and search engines. */
  alt: string;
};

/** An outbound link shown at the bottom of a card (opens in a new tab). */
export type ProjectLink = {
  /** Full web address, e.g. "https://example.com". */
  href: string;
  /** Visible link text, without an arrow — the card adds the arrow itself. */
  label: string;
};

/** Everything one project card needs. Fields marked "?" are optional. */
export type Project = {
  /** Stable short id — used as the page anchor, e.g. /projects#citchen. */
  slug: string;
  /** Small uppercase label above the title (1–3 words). */
  category: string;
  /** Card headline. */
  title: string;
  /** When it happened, e.g. "2021–2025". Leave out if unknown. */
  period?: string;
  /** Marcel’s role in the project. */
  role: string;
  /** One-line summary shown under the title. */
  summary: string;
  /** Short paragraph for the “What it was” section. */
  whatItWas: string;
  /** Bullet points for the “What I did” section. */
  whatIDid: string[];
  /** Bullet points for the “What I learned” section. */
  whatILearned: string[];
  /** Small skill/topic pills at the bottom of the card. */
  tags?: string[];
  /** Photo for the card. Leave out to show the “Photo coming soon” placeholder. */
  image?: ProjectImage;
  /** Optional outbound link. Leave out for no link. */
  link?: ProjectLink;
};

export const projects: Project[] = [
  {
    slug: "ppm-rollout",
    category: "Process & systems",
    title: "Bringing five sites onto one project portfolio system",
    period: "2023–present",
    role: "Business-side system owner",
    summary:
      "Helping a global biologics manufacturer run all of its projects on one shared platform — site by site.",
    whatItWas:
      "A multi-year rollout of a project portfolio management system built on Microsoft Power Platform. It replaced fragmented, site-specific tracking with one shared way of running projects. Five sites across Europe, the US and Japan are live, with one more in preparation — around 50 users managing roughly 150 projects.",
    whatIDid: [
      "Acted as the bridge between project managers, finance and the implementation team — turning business needs into system requirements, and system changes into ways of working.",
      "Ran fit-gap analyses and redesigned core processes, captured in SOPs adopted across sites.",
      "Prepared and led on-site training and go-lives, and built a network of super users at each site.",
      "Designed 15 Power BI reports that cut KPI reporting from about an hour to minutes.",
    ],
    whatILearned: [
      "The hard part of a rollout isn’t the configuration — it’s getting sites with different working cultures to agree on one way of doing things.",
      "A standard only sticks if it makes someone’s job easier on day one, not “eventually.”",
      "Every question a user has to ask twice is a documentation gap, not a training gap.",
    ],
    tags: ["Power Apps", "Power BI", "Process design", "Change management", "Training"],
  },
  {
    slug: "bordenau-festivals",
    category: "Community events",
    title: "Village festivals for around 1,000 guests",
    period: "2017–2019 · 2023–2025",
    role: "Organizing team — finance, funding & volunteers",
    summary:
      "Two festival series in my home village of Bordenau, run by volunteers for around 1,000 guests.",
    whatItWas:
      "First came “Color My Life” (2017–2019), a Holi-style color festival where guests throw colored powder. After a COVID break we started “Hajo dreht auf” (2023–2025) — roughly “Hajo turns it up,” named after a local man. It’s more themed and decorated: a cozy atmosphere rather than a party out of the box. Alongside the festivals, I’m an elected member of Bordenau’s local council.",
    whatIDid: [
      "Owned finance and funding — budgeting and fundraising, with plenty of work long before and after each festival.",
      "Organized all volunteers for the festival day and the week of preparation before it.",
    ],
    whatILearned: [
      "Everyone has a day job, nobody reports to you, and the date doesn’t move — the best stakeholder-management training I’ve had.",
      "Contingency planning matters more than the plan itself — the value is in having already thought through what happens when something goes wrong.",
      "Community projects succeed when people feel ownership, not when the plan looks good on paper.",
    ],
    tags: ["Event management", "Budgeting & fundraising", "Volunteer coordination"],
  },
  {
    slug: "citchen",
    category: "Side project",
    title: "Citchen — my personal cookbook app",
    period: "May 2026–present",
    role: "Solo project, built with Claude Code",
    summary:
      "An installable, offline-first cookbook app I designed and built with AI — try it yourself.",
    whatItWas:
      "It started with wanting to cook better. Citchen (spelled that way on purpose) is an installable, offline-first web app with around 105 recipes, a shopping list grouped by supermarket aisle, meal planning, pantry stock and a step-by-step cooking mode. Recipes sync through your own Google Drive, the interface switches between German, English, Spanish and Danish, and optional AI features run on your own API key — no server involved.",
    whatIDid: [
      "Defined the scope and made the architecture decisions — offline-first, no backend, and bring-your-own-key for the AI features.",
      "Built it almost entirely through AI-assisted development with Claude Code, working in phases with clear checkpoints.",
      "Rebuilt it from the ground up as a second version, keeping every feature from the first.",
    ],
    whatILearned: [
      "With AI writing the code, the skill that matters is knowing what to ask for — and spotting when the answer is wrong.",
      "Early architecture choices — no server, data in your own Drive — kept the app simple to run and free to share.",
      "Building something end to end surfaces a hundred small decisions you never see when you only review someone else’s spec.",
    ],
    tags: ["Progressive web app", "AI-assisted development", "Claude Code", "Offline-first"],
    link: {
      href: "https://marcipane3.github.io/Citchen/v2/",
      label: "Try the app",
    },
  },
  {
    slug: "henmarsell",
    category: "Entrepreneurship",
    title: "henmarsell — an online shop for pond fish towers",
    period: "2021–2025",
    role: "Co-founder, with my brother Henrik",
    summary:
      "A small online business I co-founded with my brother Henrik — and later sold to our manufacturer.",
    whatItWas:
      "We sold pond “fish towers”: a plexiglass column held under negative pressure, so the water stays inside it above the pond surface. Goldfish and other pond fish swim up into it, where you can see them from further away — and they look larger. The towers were made by a German manufacturer; we sold them through our own web shop and on Amazon.",
    whatIDid: [
      "Owned sourcing, pricing, marketing and fulfillment.",
      "Set up and ran both sales channels — our own web shop and Amazon.",
      "Sold the business to the manufacturer for €15,000, after it had generated around €50,000 of value.",
    ],
    whatILearned: [
      "Small businesses run on logistics and iteration, not big strategic moves — small, consistent decisions on listings, pricing and shipping compound.",
      "Running something end to end, with your own money and time on the line, builds a different kind of confidence than working inside someone else’s system.",
    ],
    tags: ["E-commerce", "Amazon", "Pricing & marketing"],
  },
];
