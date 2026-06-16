# Marcel Malbrich — Personal Website

A personal website serving three purposes:

1. **Professional portfolio** ("extended LinkedIn") at `marcelmalbrich.com` — a credible site a recruiter or peer can browse to get a clear, accurate picture of who Marcel is and what he's capable of.
2. **Learning vehicle** — Marcel has no coding background; this project is built step-by-step over 2-3 months as a way to learn web development concepts and structure, reviewing and directing AI-assisted ("vibe coding") work rather than writing code directly.
3. **Hidden experimental playground** at `lab.marcelmalbrich.com` — a separate, unlinked deployment for trying out interactive widgets, AI-powered demos, and animation prototypes.

## Tech Stack

- **Framework:** [Next.js](https://nextjs.org/) (App Router) + TypeScript
- **Styling:** [Tailwind CSS](https://tailwindcss.com/)
- **Hosting:** [Vercel](https://vercel.com/)
- **Version control:** GitHub

## Repo Layout

- `main/` — the production portfolio site (`marcelmalbrich.com`)
- `lab/` — experimental playground (`lab.marcelmalbrich.com`), arriving in a later phase — not present yet

Each folder deploys as its own independent Vercel project so that lab experiments can never affect the main site's stability.

## Status

Currently in active, incremental development. See `.planning/` for the full roadmap and phase plans.
