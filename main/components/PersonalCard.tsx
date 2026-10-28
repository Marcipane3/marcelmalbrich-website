import Image from "next/image";
import Link from "next/link";
import type { PersonalIcon, PersonalLink, PersonalTopic } from "@/content/personal";

/**
 * PersonalCard — the "long card" used on /personal.
 *
 * Same look as ProjectCard (white surface, media left, eyebrow + serif title right)
 * but shorter: hobbies get a few sentences, not "What I did / What I learned".
 * All visible text comes from content/personal.ts.
 */

/** Lucide-style line icons (24px grid, 1.75 stroke), inlined so no icon library is needed. */
function Icon({ name }: { name: PersonalIcon }) {
  const common = {
    width: 48,
    height: 48,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: 1.75,
    strokeLinecap: "round" as const,
    strokeLinejoin: "round" as const,
    "aria-hidden": true,
  };
  if (name === "house") {
    return (
      <svg {...common}>
        <path d="M3 10.5 12 3l9 7.5" />
        <path d="M5 9.5V20a1 1 0 0 0 1 1h4v-6h4v6h4a1 1 0 0 0 1-1V9.5" />
      </svg>
    );
  }
  return (
    <svg {...common}>
      <path d="M6.5 6.5v11" />
      <path d="M17.5 6.5v11" />
      <path d="M3.5 9v6" />
      <path d="M20.5 9v6" />
      <path d="M6.5 12h11" />
    </svg>
  );
}

/** Photo, icon tile, or "Photo coming soon" placeholder — in that order of preference. */
function PersonalMedia({ topic }: { topic: PersonalTopic }) {
  const frame = "relative aspect-[4/3] overflow-hidden rounded-[var(--radius-md)]";

  if (topic.image) {
    return (
      <div className={frame}>
        <Image
          src={topic.image.src}
          alt={topic.image.alt}
          fill
          sizes="(min-width: 768px) 30vw, 100vw"
          className="object-cover"
        />
      </div>
    );
  }

  if (topic.icon) {
    return (
      <div className={`${frame} grid place-items-center bg-brand-tint text-[var(--teal-deep)]`}>
        <Icon name={topic.icon} />
      </div>
    );
  }

  return (
    <div
      role="img"
      aria-label={`${topic.title} — photo coming soon`}
      className={frame}
      style={{
        background: "linear-gradient(150deg, var(--slate), var(--slate-deep) 55%, var(--ink))",
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

const linkClass =
  "inline-flex items-center gap-1 font-semibold text-[length:var(--text-sm)] text-[var(--text-accent)] hover:underline underline-offset-4 rounded-sm focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[color:var(--teal)]";

/** Internal links (starting with "/") stay in the tab; outside websites open a new one. */
function CardLink({ link }: { link: PersonalLink }) {
  if (link.href.startsWith("/")) {
    return (
      <Link href={link.href} className={linkClass}>
        {link.label}
        <span aria-hidden="true">→</span>
      </Link>
    );
  }
  return (
    <a href={link.href} target="_blank" rel="noopener noreferrer" className={linkClass}>
      {link.label}
      <span aria-hidden="true">↗</span>
      <span className="sr-only">(opens in a new tab)</span>
    </a>
  );
}

export function PersonalCard({ topic }: { topic: PersonalTopic }) {
  const titleId = `${topic.slug}-title`;

  return (
    <article
      id={topic.slug}
      aria-labelledby={titleId}
      className="scroll-mt-20 bg-surface border border-line rounded-[var(--radius-lg)] [box-shadow:var(--shadow-sm)] p-6 md:p-8"
    >
      <div className="grid gap-6 md:gap-10 md:grid-cols-[2fr_3fr] md:items-center">
        <PersonalMedia topic={topic} />

        <div>
          <p className="uppercase text-[length:var(--text-xs)] font-semibold tracking-[var(--ls-eyebrow)] text-[var(--text-accent)]">
            {topic.category}
          </p>
          <h2
            id={titleId}
            className="mt-2 text-[length:var(--display-2xs)] md:text-[length:var(--display-xs)] text-ink"
          >
            {topic.title}
          </h2>
          {topic.meta && (
            <p className="mt-2 text-[length:var(--text-sm)] text-ink-soft">{topic.meta}</p>
          )}
          {topic.text.length > 0 && (
            <div className="mt-4 space-y-3 text-ink-soft">
              {topic.text.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
            </div>
          )}
          {topic.links && topic.links.length > 0 && (
            <div className="mt-5 flex flex-wrap gap-x-6 gap-y-2">
              {topic.links.map((link) => (
                <CardLink key={link.href} link={link} />
              ))}
            </div>
          )}
        </div>
      </div>
    </article>
  );
}
