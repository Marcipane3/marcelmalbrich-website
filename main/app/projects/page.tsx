import type { Metadata } from "next";
import { projects } from "@/content/projects";
import { ProjectCard } from "@/components/ProjectCard";

// In the App Router, this file (app/projects/page.tsx) automatically becomes the /projects URL.

export const metadata: Metadata = {
  title: "Projects — Marcel Malbrich",
  description:
    "Selected projects by Marcel Malbrich — a global system rollout, village festivals, a cookbook app and a small online business.",
};

export default function ProjectsPage() {
  return (
    <div className="mx-auto px-4 md:px-12 max-w-[1120px] py-12 md:py-16">
      <header>
        <p className="uppercase text-[length:var(--text-xs)] font-semibold tracking-[var(--ls-eyebrow)] text-[var(--text-accent)]">
          Selected work
        </p>
        <h1 className="mt-3 text-[length:var(--display-sm)] md:text-[length:var(--display-md)] text-ink">
          Things I’ve <em className="italic text-[var(--teal-deep)]">built and run</em>
        </h1>
        <p className="mt-4 text-[length:var(--text-lg)] text-ink-soft max-w-[44ch]">
          Four projects from work, my home village and my spare time — what each was, what I did and what I learned.
        </p>
      </header>

      {/* One card per entry in content/projects.ts, in data order */}
      <div className="flex flex-col gap-8 md:gap-12 mt-10 md:mt-12">
        {projects.map((project) => (
          <ProjectCard key={project.slug} project={project} />
        ))}
      </div>
    </div>
  );
}
