/**
 * Content for the /about page.
 *
 * Bio paragraphs, skill groups (shown as pills) and a short pointer to /personal.
 * Career details live on /experience, so this page stays short.
 *
 * This file holds content only — the layout lives in app/about/page.tsx.
 */

/** A labelled group of skills, shown as a row of pills. */
export type SkillGroup = {
  title: string;
  skills: string[];
};

export const aboutIntro = {
  eyebrow: "About",
  /** Headline before the italic teal phrase. */
  headline: "Between business",
  /** Italic teal phrase that ends the headline. */
  headlineAccent: "and IT",
  intro: "I make systems fit the way people actually work — and then make people want to use them.",
};

/** Each string is its own paragraph. */
export const bio: string[] = [
  "I grew up in Bordenau, a village near Hannover, and studied industrial engineering in a dual program with Continental. In 2023 I moved to Copenhagen for my master’s at DTU — and stayed.",
  "Today I’m a business process analyst at a biologics manufacturer. I own its project portfolio management system across sites on three continents — not as the developer, but as the person who makes it fit: fit-gap workshops, process redesign, training, super-user networks and the documentation that keeps it running without me.",
  "The part I enjoy most comes after go-live: teaching, following up, and hearing that something now simply works and has made someone’s day more structured.",
  "I’m structured, fast and hands-on. I prefer shipping a working first version and improving it with the people who use it — and I learn a new domain by asking a lot of questions.",
];

export const skillsHeading = {
  eyebrow: "What I bring",
  title: "Skills",
};

export const skillGroups: SkillGroup[] = [
  {
    title: "Implementation & adoption",
    skills: [
      "Fit-gap analysis",
      "Process modeling",
      "Requirements & user stories",
      "Train-the-trainer",
      "SOPs & governance",
      "Change management",
      "Agile delivery",
    ],
  },
  {
    title: "Platforms & data",
    skills: ["Power Apps", "Power Automate", "Power BI", "Dataverse", "SQL", "Python"],
  },
  {
    title: "Modeling & AI",
    skills: ["Linear & mixed-integer programming", "Simulation", "AI-assisted development"],
  },
];

export const beyondWork = {
  eyebrow: "Beyond work",
  text: "Outside work I play football at a club in Brønshøj, ski every winter and cook my way through my own cookbook app.",
  link: { href: "/personal", label: "More on the personal page" },
};
