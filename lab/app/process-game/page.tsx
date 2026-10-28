import type { Metadata } from "next";
import { ProcessGame } from "@/components/ProcessGame";

export const metadata: Metadata = {
  title: "Find the bottleneck — Lab",
  description: "A small production-line game about bottlenecks, flow and variability.",
};

export default function ProcessGamePage() {
  return (
    <div className="mx-auto px-4 md:px-12 max-w-[1120px] py-12 md:py-16">
      <header>
        <p className="uppercase text-[length:var(--text-xs)] font-semibold tracking-[var(--ls-eyebrow)] text-[var(--text-accent)]">
          Experiment · Process game
        </p>
        <h1 className="mt-3 text-[length:var(--display-sm)] md:text-[length:var(--display-md)] text-ink">
          Find the <em className="italic text-[var(--teal-deep)]">bottleneck</em>
        </h1>
        <div className="mt-4 max-w-[62ch] space-y-3 text-[length:var(--text-lg)] text-ink-soft">
          <p>
            You run a small production line for one shift of 120 ticks. Orders arrive at Prepare and travel through
            Assemble, Inspect and Pack. Each station works at a different speed per worker.
          </p>
          <p>
            Split your eight workers so the line ships as much as possible — with as little work waiting around as
            possible. Then switch on real-world variability and see what changes.
          </p>
        </div>
      </header>

      <div className="mt-10">
        <ProcessGame />
      </div>

      <section className="mt-16 pt-10 border-t border-line max-w-[62ch]">
        <h2 className="font-serif text-[length:var(--display-xs)] text-ink">What’s going on</h2>
        <ul className="mt-4 list-disc pl-5 space-y-2 text-ink-soft marker:text-[var(--teal)]">
          <li>
            <span className="text-ink font-semibold">The slowest station sets the pace.</span> Extra workers anywhere
            else only make the pile in front of the bottleneck grow faster.
          </li>
          <li>
            <span className="text-ink font-semibold">More waiting means longer lead times.</span> Work in progress
            divided by throughput is roughly how long each order spends on the line (Little’s Law).
          </li>
          <li>
            <span className="text-ink font-semibold">Full on paper isn’t enough.</span> With variability, a station
            that’s busy almost all the time can’t catch up after a slow tick — so queues grow even in a balanced line.
          </li>
        </ul>
      </section>
    </div>
  );
}
