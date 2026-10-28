import Link from "next/link";
import { hero, stats, featured, contactCta } from "@/content/home";
import { projects } from "@/content/projects";

// In the App Router, app/page.tsx is the home page (/). Its title and description come from layout.tsx.

const eyebrowClass =
  "uppercase text-[length:var(--text-xs)] font-semibold tracking-[var(--ls-eyebrow)] text-[var(--text-accent)]";
const focusClass =
  "focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[color:var(--teal)]";
const textLinkClass = `inline-flex items-center gap-1 font-semibold text-[length:var(--text-sm)] text-[var(--text-accent)] hover:underline underline-offset-4 rounded-sm ${focusClass}`;

/** Large "MM" initials disc — stands in for a portrait until Marcel supplies a photo. */
function PortraitPlaceholder() {
  return (
    <div
      role="img"
      aria-label="Marcel Malbrich — portrait coming soon"
      className="grid place-items-center size-40 md:size-64 rounded-full font-serif font-semibold text-[length:var(--display-md)] md:text-[length:var(--display-lg)] text-[var(--on-brand)] [box-shadow:var(--shadow-brand)]"
      style={{ background: "linear-gradient(140deg, var(--teal-bright), var(--teal-deep))" }}
    >
      <span aria-hidden="true">MM</span>
    </div>
  );
}

export default function Home() {
  // Look up the featured projects by slug, keeping the order set in content/home.ts.
  const featuredProjects = featured.slugs
    .map((slug) => projects.find((project) => project.slug === slug))
    .filter((project) => project !== undefined);

  return (
    <div className="mx-auto px-4 md:px-12 max-w-[1120px] py-12 md:py-20">
      {/* Hero: text left, portrait right (desktop); portrait on top (mobile) */}
      <section className="grid gap-10 md:grid-cols-[3fr_2fr] md:items-center">
        <div className="order-2 md:order-1">
          <p className={`${eyebrowClass} flex items-center gap-3`}>
            <span aria-hidden="true" className="h-0.5 w-6 bg-brand" />
            {hero.eyebrow}
          </p>
          <h1 className="mt-4 text-[length:var(--display-sm)] md:text-[length:var(--display-md)] text-ink">
            {hero.headline}{" "}
            <em className="italic text-[var(--teal-deep)]">{hero.headlineAccent}</em>
          </h1>
          <p className="mt-5 text-[length:var(--text-lg)] text-ink-soft max-w-[52ch]">{hero.intro}</p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Link
              href={hero.primaryCta.href}
              className={`inline-flex items-center gap-2 rounded-[var(--radius-sm)] bg-brand px-5 py-3 font-semibold text-[var(--on-brand)] [box-shadow:var(--shadow-brand)] hover:bg-brand-hover transition-colors duration-[180ms] ${focusClass}`}
            >
              {hero.primaryCta.label}
              <span aria-hidden="true">→</span>
            </Link>
            <Link
              href={hero.secondaryCta.href}
              className={`inline-flex items-center rounded-[var(--radius-sm)] border border-[var(--ink)] px-5 py-3 font-semibold text-ink hover:bg-[var(--ink)] hover:text-[var(--text-on-dark)] transition-colors duration-[180ms] ${focusClass}`}
            >
              {hero.secondaryCta.label}
            </Link>
          </div>
        </div>
        <div className="order-1 md:order-2 flex md:justify-center">
          <PortraitPlaceholder />
        </div>
      </section>

      {/* Credibility figures */}
      <dl className="mt-12 md:mt-16 pt-8 border-t border-line grid grid-cols-1 sm:grid-cols-3 gap-6 sm:gap-8">
        {stats.map((stat) => (
          <div key={stat.label}>
            <dt className="sr-only">{stat.label}</dt>
            <dd>
              <span className="block font-serif text-[length:var(--display-xs)] md:text-[length:var(--display-sm)] text-ink">
                {stat.value}
              </span>
              <span className="block mt-1 text-[length:var(--text-sm)] text-ink-soft">{stat.label}</span>
            </dd>
          </div>
        ))}
      </dl>

      {/* Featured projects: short teasers linking to the full cards on /projects */}
      <section aria-labelledby="featured-title" className="mt-16 md:mt-24">
        <div className="flex flex-wrap items-end justify-between gap-4">
          <div>
            <p className={eyebrowClass}>{featured.eyebrow}</p>
            <h2
              id="featured-title"
              className="mt-2 text-[length:var(--display-xs)] md:text-[length:var(--display-sm)] text-ink"
            >
              {featured.title}
            </h2>
          </div>
          <Link href={featured.allLink.href} className={textLinkClass}>
            {featured.allLink.label}
            <span aria-hidden="true">→</span>
          </Link>
        </div>

        <ul className="mt-8 grid gap-6 md:grid-cols-3">
          {featuredProjects.map((project) => (
            <li key={project.slug}>
              <Link
                href={`/projects#${project.slug}`}
                className={`group flex h-full flex-col bg-surface border border-line rounded-[var(--radius-lg)] [box-shadow:var(--shadow-sm)] p-6 hover:-translate-y-0.5 hover:[box-shadow:var(--shadow-md)] transition duration-[180ms] ${focusClass}`}
              >
                <span className={eyebrowClass}>{project.category}</span>
                <span className="mt-2 font-serif text-[length:var(--display-2xs)] text-ink group-hover:text-[var(--teal-deep)] transition-colors duration-[180ms]">
                  {project.title}
                </span>
                <span className="mt-3 flex-1 text-ink-soft">{project.summary}</span>
                <span className="mt-5 inline-flex items-center gap-1 font-semibold text-[length:var(--text-sm)] text-[var(--text-accent)]">
                  Read more <span aria-hidden="true">→</span>
                </span>
              </Link>
            </li>
          ))}
        </ul>
      </section>

      {/* Contact call to action */}
      <section className="mt-16 md:mt-24 rounded-[var(--radius-lg)] bg-[var(--surface-dark)] p-8 md:p-12 text-[var(--text-on-dark)] [box-shadow:var(--shadow-md)] flex flex-col md:flex-row md:items-center md:justify-between gap-6">
        <div>
          <h2 className="text-[length:var(--display-xs)] md:text-[length:var(--display-sm)]">
            {contactCta.headline}{" "}
            <em className="italic text-[var(--teal-soft)]">{contactCta.headlineAccent}</em>
          </h2>
          <p className="mt-3 max-w-[48ch] text-white/80">{contactCta.text}</p>
        </div>
        <Link
          href={contactCta.cta.href}
          className={`shrink-0 self-start md:self-auto inline-flex items-center gap-2 rounded-[var(--radius-sm)] bg-brand px-5 py-3 font-semibold text-[var(--on-brand)] hover:bg-brand-hover transition-colors duration-[180ms] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[color:var(--teal-soft)]`}
        >
          {contactCta.cta.label}
          <span aria-hidden="true">→</span>
        </Link>
      </section>
    </div>
  );
}
