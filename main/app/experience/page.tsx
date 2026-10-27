import type { Metadata } from "next";
import Link from "next/link";
import { timelineSections, languages, type TimelineEntry } from "@/content/experience";
import { TimelineItem } from "@/components/TimelineItem";

// In the App Router, this file (app/experience/page.tsx) automatically becomes the /experience URL.

export const metadata: Metadata = {
  title: "Experience — Marcel Malbrich",
  description:
    "Marcel Malbrich’s path so far — work, education, volunteering and languages, from a corporate apprenticeship to owning a global system rollout.",
};

/** True when an entry has anything to show below its header. */
function hasDetails(entry: TimelineEntry) {
  return Boolean(entry.note || (entry.points && entry.points.length > 0) || entry.link);
}

/** Note, bullet points and link for one timeline entry (all optional). */
function EntryDetails({ entry }: { entry: TimelineEntry }) {
  return (
    <>
      {entry.note && <p className="text-[length:var(--text-sm)]">{entry.note}</p>}
      {entry.points && entry.points.length > 0 && (
        <ul className="list-disc pl-5 space-y-2 marker:text-[var(--teal)]">
          {entry.points.map((point) => (
            <li key={point}>{point}</li>
          ))}
        </ul>
      )}
      {entry.link && (
        <Link
          href={entry.link.href}
          className="inline-flex items-center gap-1 font-semibold text-[length:var(--text-sm)] text-[var(--text-accent)] hover:underline underline-offset-4 rounded-sm focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[color:var(--teal)]"
        >
          {entry.link.label}
          <span aria-hidden="true">→</span>
        </Link>
      )}
    </>
  );
}

const sectionClass = "pt-10 md:pt-12 border-t border-line";
const sectionHeadingClass = "text-[length:var(--display-2xs)] md:text-[length:var(--display-xs)] text-ink";

export default function ExperiencePage() {
  return (
    <div className="mx-auto px-4 md:px-12 max-w-[1120px] py-12 md:py-16">
      <header>
        <p className="uppercase text-[length:var(--text-xs)] font-semibold tracking-[var(--ls-eyebrow)] text-[var(--text-accent)]">
          Experience
        </p>
        <h1 className="mt-3 text-[length:var(--display-sm)] md:text-[length:var(--display-md)] text-ink">
          Where I’ve <em className="italic text-[var(--teal-deep)]">learned the trade</em>
        </h1>
        <p className="mt-4 text-[length:var(--text-lg)] text-ink-soft max-w-[44ch]">
          Engineering school, a corporate apprenticeship, a small business of my own — and now owning a global system rollout.
        </p>
      </header>

      <div className="flex flex-col gap-12 md:gap-16 mt-10 md:mt-12 max-w-[var(--container-sm)]">
        {/* One timeline per section in content/experience.ts, in data order */}
        {timelineSections.map((section) => (
          <section key={section.id} aria-labelledby={`${section.id}-heading`} className={sectionClass}>
            <h2 id={`${section.id}-heading`} className={sectionHeadingClass}>
              {section.title}
            </h2>
            <ol className="mt-6 md:mt-8">
              {section.entries.map((entry, index) => (
                <TimelineItem
                  key={entry.id}
                  role={entry.role}
                  company={entry.company}
                  period={entry.period}
                  last={index === section.entries.length - 1}
                >
                  {hasDetails(entry) ? <EntryDetails entry={entry} /> : undefined}
                </TimelineItem>
              ))}
            </ol>
          </section>
        ))}

        {/* Languages: a compact list, not timeline entries */}
        <section aria-labelledby="languages-heading" className={sectionClass}>
          <h2 id="languages-heading" className={sectionHeadingClass}>
            Languages
          </h2>
          <ul className="mt-6 flex flex-wrap gap-x-8 gap-y-3">
            {languages.map((language) => (
              <li key={language.name}>
                <span className="font-semibold text-ink">{language.name}</span>{" "}
                <span className="text-ink-soft">({language.level})</span>
              </li>
            ))}
          </ul>
        </section>
      </div>
    </div>
  );
}
