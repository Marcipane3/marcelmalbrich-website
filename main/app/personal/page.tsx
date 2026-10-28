import type { Metadata } from "next";
import { personalIntro, personalTopics } from "@/content/personal";
import { PersonalCard } from "@/components/PersonalCard";

// In the App Router, this file (app/personal/page.tsx) automatically becomes the /personal URL.

export const metadata: Metadata = {
  title: "Personal — Marcel Malbrich",
  description:
    "Marcel Malbrich outside work — football in Brønshøj, skiing, staying fit and cooking.",
};

export default function PersonalPage() {
  return (
    <div className="mx-auto px-4 md:px-12 max-w-[1120px] py-12 md:py-16">
      <header>
        <p className="uppercase text-[length:var(--text-xs)] font-semibold tracking-[var(--ls-eyebrow)] text-[var(--text-accent)]">
          {personalIntro.eyebrow}
        </p>
        <h1 className="mt-3 text-[length:var(--display-sm)] md:text-[length:var(--display-md)] text-ink">
          {personalIntro.headline}{" "}
          <em className="italic text-[var(--teal-deep)]">{personalIntro.headlineAccent}</em>
        </h1>
        <p className="mt-4 text-[length:var(--text-lg)] text-ink-soft max-w-[44ch]">
          {personalIntro.intro}
        </p>
      </header>

      {/* One card per entry in content/personal.ts, in data order */}
      <div className="flex flex-col gap-8 md:gap-10 mt-10 md:mt-12">
        {personalTopics.map((topic) => (
          <PersonalCard key={topic.slug} topic={topic} />
        ))}
      </div>
    </div>
  );
}
