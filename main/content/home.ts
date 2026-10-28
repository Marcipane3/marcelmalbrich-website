/**
 * Content for the home page (/).
 *
 * The featured projects are picked by slug from content/projects.ts, so their
 * text is never duplicated here — edit a project once and both pages update.
 *
 * This file holds content only — the layout lives in app/page.tsx.
 */

/** One credibility figure in the hero (serif number + small caption). */
export type Stat = {
  value: string;
  label: string;
};

export const hero = {
  /** Small uppercase line above the headline. */
  eyebrow: "Process & systems · Copenhagen",
  /** Headline before the italic teal phrase. */
  headline: "Hi, I’m Marcel. I turn scattered ways of working into",
  /** Italic teal phrase that ends the headline. */
  headlineAccent: "one shared system.",
  intro:
    "I’m an industrial engineer who sits between business and IT. For three years I’ve owned a project portfolio system rolled out across a global biologics manufacturer — from the first workshop to go-live, and long after.",
  primaryCta: { href: "/projects", label: "See my work" },
  secondaryCta: { href: "/about", label: "More about me" },
};

/** Only real, checkable numbers (handoff §7: sparing and credible). */
export const stats: Stat[] = [
  { value: "3 years", label: "owning a global system rollout" },
  { value: "150", label: "projects on one shared system" },
  { value: "3", label: "continents with live sites" },
];

export const featured = {
  eyebrow: "Selected work",
  title: "Things I’ve built and run",
  allLink: { href: "/projects", label: "All projects" },
  /** Slugs from content/projects.ts, in display order. */
  slugs: ["ppm-rollout", "citchen", "henmarsell"],
};

export const contactCta = {
  /** Headline before the italic teal phrase. */
  headline: "Want to",
  headlineAccent: "compare notes?",
  text: "Whether it’s a rollout, a process that needs untangling or a side project — I’m happy to talk.",
  cta: { href: "/contact", label: "Say hello" },
};
