/**
 * The list of experiments shown on the lab's front page.
 * To add one: build it under app/<slug>/page.tsx, then add an entry here.
 */

export type Experiment = {
  slug: string;
  title: string;
  summary: string;
  /** e.g. "Playable", "Prototype", "Work in progress". */
  status: string;
};

export const experiments: Experiment[] = [
  {
    slug: "process-game",
    title: "Find the bottleneck",
    summary:
      "Run a four-station production line for one shift. Split eight workers across the stations and watch where work piles up.",
    status: "Playable",
  },
];
