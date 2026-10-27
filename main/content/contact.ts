/**
 * Content for the /contact page.
 *
 * Only public contact routes live here — email and LinkedIn.
 * Never add a phone number or home address (the repo and the site are public).
 *
 * This file holds content only — the look of the page lives in
 * app/contact/page.tsx, so text changes never require touching layout code.
 */

/** One way to reach Marcel, shown as a row in the contact panel. */
export type ContactChannel = {
  /** Small uppercase label above the value, e.g. "Email". */
  label: string;
  /** Visible text, e.g. the address or profile path. */
  value: string;
  /** Where the link goes — a mailto: or https:// address. */
  href: string;
  /** True if the link should open in a new tab (outside websites). */
  external?: boolean;
};

export const contactIntro = {
  eyebrow: "Get in touch",
  /** Headline before the italic teal phrase. */
  headline: "Let’s",
  /** Italic teal phrase that ends the headline. */
  headlineAccent: "talk",
  intro:
    "A question about one of my projects, an idea to compare notes on, or just a hello — email is the quickest way to reach me. You can also find me on LinkedIn.",
};

/** The address used for the "Write me an email" button and the copy button. */
export const email = "marcel.malbrich@gmail.com";

export const channels: ContactChannel[] = [
  {
    label: "Email",
    value: email,
    href: `mailto:${email}`,
  },
  {
    label: "LinkedIn",
    value: "linkedin.com/in/marcel-malbrich",
    href: "https://www.linkedin.com/in/marcel-malbrich",
    external: true,
  },
];

/** Short line under the panel. */
export const basedIn = "Based in Copenhagen, Denmark.";
