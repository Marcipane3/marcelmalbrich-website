import type { Metadata } from "next";
import { contactIntro, channels, email, basedIn } from "@/content/contact";
import { CopyEmailButton } from "@/components/CopyEmailButton";

// In the App Router, this file (app/contact/page.tsx) automatically becomes the /contact URL.

export const metadata: Metadata = {
  title: "Contact — Marcel Malbrich",
  description: "How to reach Marcel Malbrich — by email or on LinkedIn.",
};

export default function ContactPage() {
  return (
    <div className="mx-auto px-4 md:px-12 max-w-[1120px] py-12 md:py-16">
      <header>
        <p className="uppercase text-[length:var(--text-xs)] font-semibold tracking-[var(--ls-eyebrow)] text-[var(--text-accent)]">
          {contactIntro.eyebrow}
        </p>
        <h1 className="mt-3 text-[length:var(--display-sm)] md:text-[length:var(--display-md)] text-ink">
          {contactIntro.headline}{" "}
          <em className="italic text-[var(--teal-deep)]">{contactIntro.headlineAccent}</em>
        </h1>
        <p className="mt-4 text-[length:var(--text-lg)] text-ink-soft max-w-[44ch]">
          {contactIntro.intro}
        </p>
        <a
          href={`mailto:${email}`}
          className="mt-8 inline-flex items-center gap-2 rounded-[var(--radius-sm)] bg-brand px-5 py-3 font-semibold text-[var(--on-brand)] shadow-[var(--shadow-brand)] hover:bg-brand-hover transition-colors duration-[180ms] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[color:var(--teal)]"
        >
          Write me an email
          <span aria-hidden="true">→</span>
        </a>
      </header>

      {/* Slate contact panel: one row per channel in content/contact.ts */}
      <section
        aria-label="Contact details"
        className="mt-12 md:mt-16 max-w-[640px] rounded-[var(--radius-lg)] bg-[var(--surface-dark)] p-6 md:p-8 text-[var(--text-on-dark)] shadow-[var(--shadow-md)]"
      >
        <ul className="divide-y divide-white/15">
          {channels.map((channel) => (
            <li
              key={channel.label}
              className="flex flex-col gap-3 py-5 first:pt-0 last:pb-0 sm:flex-row sm:items-center sm:justify-between"
            >
              <div className="min-w-0">
                <p className="uppercase text-[length:var(--text-xs)] font-semibold tracking-[var(--ls-eyebrow)] text-[var(--teal-soft)]">
                  {channel.label}
                </p>
                <a
                  href={channel.href}
                  {...(channel.external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
                  className="mt-1 inline-block break-words text-[length:var(--text-base)] sm:text-[length:var(--text-lg)] font-medium hover:underline underline-offset-4 rounded-sm focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[color:var(--teal-soft)]"
                >
                  {channel.value}
                  {channel.external && <span aria-hidden="true"> ↗</span>}
                  {channel.external && <span className="sr-only"> (opens in a new tab)</span>}
                </a>
              </div>
              {channel.href.startsWith("mailto:") && <CopyEmailButton email={email} />}
            </li>
          ))}
        </ul>
      </section>

      <p className="mt-6 text-[length:var(--text-sm)] text-ink-soft">{basedIn}</p>
    </div>
  );
}
