import type { Metadata } from "next";
import Link from "next/link";
import { aboutIntro, bio, skillsHeading, skillGroups, beyondWork } from "@/content/about";
import { TagList } from "@/components/TagList";

// In the App Router, this file (app/about/page.tsx) automatically becomes the /about URL.

export const metadata: Metadata = {
  title: "About — Marcel Malbrich",
  description:
    "Marcel Malbrich — industrial engineer between business and IT, owning a global project portfolio system rollout from Copenhagen.",
};

const eyebrowClass =
  "uppercase text-[length:var(--text-xs)] font-semibold tracking-[var(--ls-eyebrow)] text-[var(--text-accent)]";

export default function AboutPage() {
  return (
    <div className="mx-auto px-4 md:px-12 max-w-[1120px] py-12 md:py-16">
      <header>
        <p className={eyebrowClass}>{aboutIntro.eyebrow}</p>
        <h1 className="mt-3 text-[length:var(--display-sm)] md:text-[length:var(--display-md)] text-ink">
          {aboutIntro.headline}{" "}
          <em className="italic text-[var(--teal-deep)]">{aboutIntro.headlineAccent}</em>
        </h1>
        <p className="mt-4 text-[length:var(--text-lg)] text-ink-soft max-w-[44ch]">{aboutIntro.intro}</p>
      </header>

      {/* Bio: one idea per paragraph, capped reading width */}
      <section aria-label="Bio" className="mt-10 md:mt-12 max-w-[var(--container-sm)] space-y-5 text-[length:var(--text-lg)] text-ink">
        {bio.map((paragraph) => (
          <p key={paragraph}>{paragraph}</p>
        ))}
      </section>

      {/* Skills as pill rows, one row per group in content/about.ts */}
      <section aria-labelledby="skills-title" className="mt-12 md:mt-16 pt-10 md:pt-12 border-t border-line">
        <p className={eyebrowClass}>{skillsHeading.eyebrow}</p>
        <h2
          id="skills-title"
          className="mt-2 text-[length:var(--display-xs)] md:text-[length:var(--display-sm)] text-ink"
        >
          {skillsHeading.title}
        </h2>
        <div className="mt-8 grid gap-8 md:grid-cols-3">
          {skillGroups.map((group) => (
            <div key={group.title}>
              <h3 className="text-[length:var(--text-lg)] text-ink mb-3">{group.title}</h3>
              <TagList tags={group.skills} />
            </div>
          ))}
        </div>
      </section>

      {/* Short pointer to the personal page */}
      <section aria-label={beyondWork.eyebrow} className="mt-12 md:mt-16 pt-10 md:pt-12 border-t border-line">
        <p className={eyebrowClass}>{beyondWork.eyebrow}</p>
        <p className="mt-3 max-w-[var(--container-sm)] text-[length:var(--text-lg)] text-ink-soft">{beyondWork.text}</p>
        <Link
          href={beyondWork.link.href}
          className="mt-4 inline-flex items-center gap-1 font-semibold text-[length:var(--text-sm)] text-[var(--text-accent)] hover:underline underline-offset-4 rounded-sm focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[color:var(--teal)]"
        >
          {beyondWork.link.label}
          <span aria-hidden="true">→</span>
        </Link>
      </section>
    </div>
  );
}
