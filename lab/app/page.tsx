import Link from "next/link";
import { experiments } from "@/lib/experiments";

export default function LabHome() {
  return (
    <div className="mx-auto px-4 md:px-12 max-w-[1120px] py-12 md:py-16">
      <p className="uppercase text-[length:var(--text-xs)] font-semibold tracking-[var(--ls-eyebrow)] text-[var(--text-accent)]">
        Lab
      </p>
      <h1 className="mt-3 text-[length:var(--display-sm)] md:text-[length:var(--display-md)] text-ink">
        Things I’m <em className="italic text-[var(--teal-deep)]">trying out</em>
      </h1>
      <p className="mt-4 text-[length:var(--text-lg)] text-ink-soft max-w-[48ch]">
        Small experiments and prototypes. Some will grow up and move to the main site, some won’t — that’s the point.
      </p>

      <ul className="mt-10 grid gap-6 md:grid-cols-2">
        {experiments.map((experiment) => (
          <li key={experiment.slug}>
            <Link
              href={`/${experiment.slug}`}
              className="group flex h-full flex-col bg-surface border border-line rounded-[var(--radius-lg)] [box-shadow:var(--shadow-sm)] p-6 hover:-translate-y-0.5 hover:[box-shadow:var(--shadow-md)] transition duration-[180ms] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[color:var(--teal)]"
            >
              <span className="self-start rounded-[var(--radius-pill)] bg-brand-tint px-2.5 py-1 text-[length:var(--text-xs)] font-semibold text-[var(--teal-deep)]">
                {experiment.status}
              </span>
              <span className="mt-3 font-serif text-[length:var(--display-2xs)] text-ink group-hover:text-[var(--teal-deep)] transition-colors duration-[180ms]">
                {experiment.title}
              </span>
              <span className="mt-2 flex-1 text-ink-soft">{experiment.summary}</span>
              <span className="mt-5 inline-flex items-center gap-1 font-semibold text-[length:var(--text-sm)] text-[var(--text-accent)]">
                Open <span aria-hidden="true">→</span>
              </span>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
