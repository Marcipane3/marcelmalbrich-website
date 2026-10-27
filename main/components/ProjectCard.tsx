import Image from "next/image";
import type { Project } from "@/content/projects";

/**
 * ProjectCard — the reusable "long card" used on /projects.
 *
 * A component is a reusable building block: this one file defines how ONE
 * project looks, and the page renders it once per entry in the data file
 * (content/projects.ts). All visible text comes from that data — nothing
 * project-specific lives here — so adding or editing a project never needs
 * a change to this file.
 */

/** Small pill list for skills/topics (kept local until another page needs it). */
function TagList({ tags }: { tags: string[] }) {
  return (
    <ul className="flex flex-wrap gap-2">
      {tags.map((tag) => (
        <li
          key={tag}
          className="bg-surface border border-line rounded-[var(--radius-pill)] px-3 py-1 text-[length:var(--text-xs)] font-medium text-ink-soft"
        >
          {tag}
        </li>
      ))}
    </ul>
  );
}

/** Photo if one is set in the data, otherwise a slate-to-ink gradient placeholder. */
function ProjectMedia({ project }: { project: Project }) {
  if (project.image) {
    return (
      <div className="relative aspect-[4/3] overflow-hidden rounded-[var(--radius-md)]">
        <Image
          src={project.image.src}
          alt={project.image.alt}
          fill
          sizes="(min-width: 768px) 40vw, 100vw"
          className="object-cover"
        />
      </div>
    );
  }

  return (
    <div
      role="img"
      aria-label={`${project.title} — photo coming soon`}
      className="relative aspect-[4/3] overflow-hidden rounded-[var(--radius-md)]"
      style={{
        background:
          "linear-gradient(150deg, var(--slate), var(--slate-deep) 55%, var(--ink))",
      }}
    >
      <span
        aria-hidden="true"
        className="absolute inset-0 grid place-items-center text-[length:var(--text-xs)] font-medium text-[var(--text-on-dark)]"
      >
        Photo coming soon
      </span>
    </div>
  );
}

/** Bulleted section ("What I did" / "What I learned"). */
function BulletSection({ heading, items }: { heading: string; items: string[] }) {
  return (
    <div>
      <h3 className="text-[length:var(--text-lg)] text-ink mb-3">{heading}</h3>
      <ul className="list-disc pl-5 space-y-2 marker:text-[var(--teal)]">
        {items.map((item) => (
          <li key={item} className="text-ink-soft">
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
}

export function ProjectCard({ project }: { project: Project }) {
  const titleId = `${project.slug}-title`;
  const meta = [project.period, project.role].filter(Boolean).join(" · ");
  const hasTags = Boolean(project.tags && project.tags.length > 0);
  const hasFooter = hasTags || Boolean(project.link);

  return (
    <article
      id={project.slug}
      aria-labelledby={titleId}
      className="scroll-mt-20 bg-surface border border-line rounded-[var(--radius-lg)] [box-shadow:var(--shadow-sm)] p-6 md:p-10"
    >
      {/* Header: image left (desktop) / on top (mobile), text beside/below */}
      <div className="grid gap-6 md:gap-10 md:grid-cols-[2fr_3fr] md:items-center">
        <ProjectMedia project={project} />

        <div>
          <p className="uppercase text-[length:var(--text-xs)] font-semibold tracking-[var(--ls-eyebrow)] text-[var(--text-accent)]">
            {project.category}
          </p>
          <h2
            id={titleId}
            className="mt-2 text-[length:var(--display-2xs)] md:text-[length:var(--display-xs)] text-ink"
          >
            {project.title}
          </h2>
          {meta && (
            <p className="mt-2 text-[length:var(--text-sm)] text-ink-soft">{meta}</p>
          )}
          <p className="mt-4 text-[length:var(--text-lg)] text-ink">{project.summary}</p>
        </div>
      </div>

      {/* Sections: What it was / What I did / What I learned */}
      <div className="mt-8 pt-8 border-t border-line">
        <div className="max-w-[var(--container-sm)]">
          <h3 className="text-[length:var(--text-lg)] text-ink mb-3">What it was</h3>
          <p className="text-ink-soft">{project.whatItWas}</p>
        </div>

        <div className="grid gap-8 md:grid-cols-2 md:gap-10 mt-8">
          <BulletSection heading="What I did" items={project.whatIDid} />
          <BulletSection heading="What I learned" items={project.whatILearned} />
        </div>
      </div>

      {/* Footer: tag pills and optional outbound link */}
      {hasFooter && (
        <div className="mt-8 pt-6 border-t border-line flex flex-wrap items-center justify-between gap-4">
          {hasTags && project.tags && <TagList tags={project.tags} />}
          {project.link && (
            <a
              href={project.link.href}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1 font-semibold text-[length:var(--text-sm)] text-[var(--text-accent)] hover:underline underline-offset-4 rounded-sm focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[color:var(--teal)]"
            >
              {project.link.label}
              <span aria-hidden="true">↗</span>
              <span className="sr-only">(opens in a new tab)</span>
            </a>
          )}
        </div>
      )}
    </article>
  );
}
