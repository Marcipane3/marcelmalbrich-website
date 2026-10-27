# Kickoff prompt: playful layer for marcelmalbrich.com

*Paste everything below the line into a new Claude Code session in this project folder.*

---

I want to plan how my personal website can become more fun and more engaging, without losing its professional core. Read `CLAUDE.md`, `.planning/PROJECT.md`, `.planning/ROADMAP.md` (see Backlog item 999.1) and `.planning/STATE.md` first, then look at the live site at https://marcelmalbrich.com.

## Where we are

- The site is live: a calm, professional portfolio (Next.js + Tailwind on Vercel). The Projects page has four long cards; About, Experience, Personal, Contact and Home are still to come (Phase 3).
- The professional version is good, but it doesn't feel fun. It reads like "a website", not something people enjoy exploring.
- Phase 4 is a hidden lab at `lab.marcelmalbrich.com`, a separate deployment and not linked from the main site. It does not exist yet.

## What I'm after

Keep the professional site as the reliable backbone, and add a more playful, accessible way to explore who I am. Ideas I have, as inspiration only:

- **A small 2D world.** You walk around with an avatar; buildings or objects open information or mini-games. My brother built something like this.
- **A book that opens.** You turn pages chapter by chapter (career, projects, personal), with some animation.
- **Mini-games or interactive moments** that reveal content as a reward instead of a wall of text.

The design must be original: my own concept, not a copy of an existing game.

## How I want this session to run

1. **Start with the audience, not the feature.** Ask me 3–5 questions:
   - Who should the site attract (recruiters, peers, future collaborators, clients)?
   - What should they feel and do after visiting?
   - How much time will they realistically spend?
   - Which of my projects or traits should the fun layer express (process thinking, building things, community events, entrepreneurship)?
2. **Give me one strong recommendation** for the concept, plus at most two alternatives, each with a short trade-off: effort, risk, and fit with a professional portfolio.
3. **Propose where it lives.** My default assumption is to prototype it in the hidden lab first, then decide whether it moves to the main site or gets linked from the Projects page. Challenge that if there's a better route.
4. **Sketch before building.** Use throwaway mockups (e.g. `/gsd-sketch` or `/gsd-explore`) so I can react to something visual before any real code.
5. **Turn the agreed direction into a roadmap entry**: a new phase or a promoted backlog item, with small steps that each fit in 2–3 prompts.

## Constraints to respect

- **The plain pages stay the complete version.** The playful layer is optional: anyone (a recruiter on a phone, a screen-reader user) must get all the content without playing anything. Include a clear "skip / classic view" path.
- **It must not slow down or destabilise the main site.** Experiments go in the lab first.
- **Use the existing design tokens** (colours, fonts) so it feels like the same brand, just more playful.
- **Never publish private details:** no phone, address, employer-confidential details or party names (see `CLAUDE.md`).
- **I don't write code.** Explain new concepts briefly in plain language (e.g. what a canvas or game loop is) and keep each step small.
- **Ask before deploying anything to production.**

## Done looks like (for this session)

The session is done when these exist: a clear audience statement, one chosen concept with a rough sketch, a decision on where it lives (lab first or not), and a roadmap entry broken into small steps. Nothing is built or deployed yet.
