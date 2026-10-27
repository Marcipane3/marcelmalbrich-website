import type { ReactNode } from "react";

/**
 * TimelineItem — one entry on the Experience timeline.
 *
 * Draws a teal dot (the "node") on a thin vertical line (the "rail") on the
 * left, and the role, organization and dates on the right. Extra details
 * (note, bullet points, link) are passed in as children.
 *
 * It renders a list item (li), so it must sit inside an ordered list (ol).
 * Set `last` on the final entry of a list to hide the rail below it.
 *
 * No CV text lives here — everything arrives via props and children from
 * the page, which reads it from content/experience.ts.
 */

type TimelineItemProps = {
  /** Heading of the entry (job title, degree or role). */
  role: string;
  /** When it happened, e.g. "Oct 2023 — Present". */
  period: string;
  /** Organization (and place), shown before the dates. */
  company?: string;
  /** True for the final entry in a list — drops the trailing rail. */
  last?: boolean;
  /** Optional details shown under the header. */
  children?: ReactNode;
};

export function TimelineItem({ role, period, company, last = false, children }: TimelineItemProps) {
  return (
    <li className="grid grid-cols-[auto_1fr] gap-x-4 md:gap-x-6">
      {/* Left column: decorative node and rail */}
      <div aria-hidden="true" className="flex flex-col items-center">
        <span className="mt-1.5 md:mt-2 size-3 shrink-0 rounded-full bg-brand ring-4 ring-brand-tint" />
        {!last && <span className="mt-2 w-px flex-1 bg-[color:var(--line-strong)]" />}
      </div>

      {/* Right column: role, organization · period, then details */}
      <div className={last ? "min-w-0" : "min-w-0 pb-10 md:pb-12"}>
        <h3 className="text-[length:var(--text-lg)] md:text-[length:var(--display-2xs)] text-ink">
          {role}
        </h3>
        <p className="mt-1 text-[length:var(--text-sm)] text-ink-soft">
          {company && (
            <>
              <span className="font-medium text-ink">{company}</span>
              {" · "}
            </>
          )}
          {period}
        </p>
        {children && <div className="mt-3 space-y-3 text-ink-soft">{children}</div>}
      </div>
    </li>
  );
}
