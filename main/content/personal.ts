/**
 * Content for the /personal page.
 *
 * Each object below becomes one card on /personal, in this order.
 * To add a topic, copy an entry and edit the text.
 * To add a photo, put the file in main/public/personal/ and set image: { src, alt }.
 *
 * Rules (decided 2026-10-27): warm, short, first person; own photos only, never
 * club logos or photos from the web; no job-search or availability statements.
 *
 * This file holds content only — the look of the cards lives in
 * components/PersonalCard.tsx, so text changes never require touching layout code.
 */

/** A photo shown on the left of a card. */
export type PersonalImage = {
  /** Path to the file inside main/public, e.g. "/personal/fix.jpg". */
  src: string;
  /** Short description of the photo for screen readers and search engines. */
  alt: string;
};

/** A link at the bottom of a card. Outside websites open in a new tab. */
export type PersonalLink = {
  /** Full web address, or a path on this site such as "/projects#citchen". */
  href: string;
  /** Visible link text, without an arrow — the card adds the arrow itself. */
  label: string;
};

/** Icons available for cards that don't need a photo (drawn in components/PersonalCard.tsx). */
export type PersonalIcon = "house" | "dumbbell";

/** Everything one personal card needs. Fields marked "?" are optional. */
export type PersonalTopic = {
  /** Stable short id — used as the page anchor, e.g. /personal#football. */
  slug: string;
  /** Small uppercase label above the title (1–3 words). */
  category: string;
  /** Card headline. */
  title: string;
  /** Short line under the title, e.g. "Since 2026". */
  meta?: string;
  /** 2–4 sentences. Each string is its own paragraph. */
  text: string[];
  /** Photo for the card. */
  image?: PersonalImage;
  /** Icon instead of a photo. If neither image nor icon is set, a "Photo coming soon" placeholder shows. */
  icon?: PersonalIcon;
  /** Optional links at the bottom of the card. */
  links?: PersonalLink[];
};

export const personalIntro = {
  eyebrow: "Personal",
  /** Headline before the italic teal phrase. */
  headline: "Beyond the",
  /** Italic teal phrase that ends the headline. */
  headlineAccent: "spreadsheet",
  intro: "What I do when I’m not rolling out systems — football, skiing, staying fit and cooking.",
};

export const personalTopics: PersonalTopic[] = [
  {
    slug: "football",
    category: "Football",
    title: "Playing for Boldklubben FIX in Brønshøj",
    meta: "Since the 2026/27 season",
    text: [
      "This season I joined FIX, a football club in Brønshøj in the northwest of Copenhagen. I like the vibe — open, friendly people who push each other to get better.",
      "The team is all Danes, and that was part of the point: better Danish, the slang and the culture around the game. The club also washes all our kit, which I’m not complaining about.",
    ],
    links: [{ href: "https://www.boldklubbenfix.dk", label: "Boldklubben FIX" }],
  },
  {
    slug: "skiing",
    category: "Skiing",
    title: "Every winter since I was six",
    text: [
      "I’ve skied almost every winter since I was about six — purely for fun. My home turf is Tirol in Austria, above all the Zillertal.",
      "Next on the list: freeskiing, and a first trip to Norway.",
    ],
  },
  {
    slug: "fitness",
    category: "Staying fit",
    title: "Running, race-biking, squash — and core work",
    text: [
      "I run, ride a race bike and play squash. Recently I’ve put more time into strength training, mostly core, to stay stable and fit.",
    ],
    icon: "dumbbell",
  },
  {
    slug: "cooking",
    category: "Cooking",
    title: "Cooking — and the app that came out of it",
    text: [
      "I’m working on becoming a better cook. That hobby turned into a side project: Citchen, my own cookbook app, with my recipes, a shopping list and a step-by-step cooking mode.",
    ],
    links: [
      { href: "https://marcipane3.github.io/Citchen/", label: "Try the app" },
      { href: "/projects#citchen", label: "More on the projects page" },
    ],
  },
  {
    slug: "home",
    category: "Currently",
    title: "Looking for our first home in Copenhagen",
    text: [],
    icon: "house",
  },
];
