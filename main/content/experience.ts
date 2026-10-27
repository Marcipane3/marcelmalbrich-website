/**
 * Timeline data for the /experience page.
 *
 * Each section below becomes one timeline on /experience, in this order
 * (Work, Education, Volunteering), followed by the languages list.
 * To add a role, copy an entry inside the right section and edit the text.
 * The newest entry goes first in each section.
 *
 * This file holds content only — the look of each entry lives in
 * components/TimelineItem.tsx, so text changes never require touching layout code.
 */

/** A link to another page on this site, shown at the bottom of an entry. */
export type TimelineLink = {
  /** Address on this site, e.g. "/projects#henmarsell" (jumps to that project card). */
  href: string;
  /** Visible link text, without an arrow — the page adds the arrow itself. */
  label: string;
};

/** Everything one timeline entry needs. Fields marked "?" are optional. */
export type TimelineEntry = {
  /** Stable short id — only used internally to tell entries apart. */
  id: string;
  /** Heading of the entry: the job title, degree or role. */
  role: string;
  /** Organization (and place), shown next to the dates. */
  company?: string;
  /** When it happened, written like "Oct 2023 — Present". Use "Ongoing" if there are no dates. */
  period: string;
  /** One short line shown above the bullet points. */
  note?: string;
  /** Bullet points describing the entry. */
  points?: string[];
  /** Optional link to another page on this site. */
  link?: TimelineLink;
};

/** One timeline on the page, e.g. Work or Education. */
export type TimelineSection = {
  /** Short id used for the section heading anchor: "work", "education" or "volunteering". */
  id: string;
  /** Section heading shown on the page. */
  title: string;
  /** Entries in this section, newest first. */
  entries: TimelineEntry[];
};

/** One spoken language and how well Marcel speaks it. */
export type Language = {
  /** Name of the language. */
  name: string;
  /** Level, e.g. native or a CEFR level such as C1. */
  level: string;
};

export const timelineSections: TimelineSection[] = [
  {
    id: "work",
    title: "Work",
    entries: [
      {
        id: "agc-biologics",
        role: "Business process analyst",
        company: "AGC Biologics, Copenhagen",
        period: "Oct 2023 — Present",
        note: "Part-time alongside my MSc until August 2025, full-time since.",
        points: [
          "I own the company’s project and portfolio management system end to end — fit-gap, process redesign, configuration, rollout and adoption.",
          "Led on-site workshops, training and train-the-trainer at every go-live, and wrote the SOPs and documentation that let the system run without me.",
          "Built Power BI reports and automated flows — KPI reporting went from about an hour to minutes.",
          "Present to site heads and VPs monthly; lead two students who build reports and automations.",
        ],
        link: { href: "/projects#ppm-rollout", label: "More on the projects page" },
      },
      {
        id: "henmarsell",
        role: "Co-founder",
        company: "henmarsell",
        period: "Jun 2021 — Dec 2025",
        points: [
          "Ran an online shop for pond fish towers with my brother, from sourcing and pricing to marketing and fulfillment — and sold it to our manufacturer.",
        ],
        link: { href: "/projects#henmarsell", label: "More on the projects page" },
      },
      {
        id: "continental",
        role: "Corporate student",
        company: "Continental AG, Germany",
        period: "Sep 2019 — Feb 2023",
        points: [
          "Dual study program with rotations through supply chain management (KPI reporting), industrial engineering (automated report creation), technical customer service (a global customer survey on digital services) and the innovation lab (a feasibility study on text recognition for used tires).",
          "Started with an apprenticeship as industrial clerk (2019–2021).",
        ],
      },
    ],
  },
  {
    id: "education",
    title: "Education",
    entries: [
      {
        id: "dtu-msc",
        role: "MSc Engineering, Industrial Engineering and Management",
        company: "Technical University of Denmark (DTU)",
        period: "Sep 2023 — Aug 2025",
        points: [
          "Thesis on linear and mixed-integer programming for portfolio optimization — graded 12, the top Danish grade.",
          "Optimization, simulation, data analytics, lean and change management; one semester of courses at Copenhagen Business School.",
        ],
      },
      {
        id: "hannover-beng",
        role: "BEng Industrial Engineering and Technical Sales (dual)",
        company: "University of Applied Sciences Hannover",
        period: "Sep 2019 — Feb 2023",
        points: ["Thesis on reducing machine downtime in tire production."],
      },
      {
        id: "siue-summer",
        role: "Summer Financial Institute",
        company: "Southern Illinois University Edwardsville",
        period: "2022",
        points: ["Corporate finance and accounting."],
      },
      {
        id: "ihk-apprenticeship",
        role: "Apprenticeship, industrial clerk",
        company: "IHK Hannover, at Continental AG",
        period: "Sep 2019 — Jun 2021",
      },
    ],
  },
  {
    id: "volunteering",
    title: "Volunteering",
    entries: [
      {
        id: "dtu-ambassador",
        role: "International student ambassador",
        company: "DTU",
        period: "2024 — 2025",
        points: [
          "Advised incoming international MSc students through DTU’s student-to-student program.",
        ],
      },
      {
        id: "local-council",
        role: "Elected member of the local council",
        company: "Bordenau, Germany",
        period: "Ongoing",
        points: ["Alongside the council work, I’ve co-organized the village’s festivals."],
        link: { href: "/projects#bordenau-festivals", label: "More on the projects page" },
      },
    ],
  },
];

export const languages: Language[] = [
  { name: "German", level: "native" },
  { name: "English", level: "C1" },
  { name: "Danish", level: "B2" },
  { name: "French", level: "A2" },
];
