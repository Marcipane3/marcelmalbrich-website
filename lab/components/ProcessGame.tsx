"use client";

import { useEffect, useRef, useState } from "react";
import {
  CREW_SIZE,
  DEFAULT_ALLOCATION,
  DEMAND_PER_TICK,
  SHIFT_LENGTH,
  STATIONS,
  averageLeadTime,
  bottleneck,
  capacities,
  createState,
  step,
  throughput,
  utilization,
  verdict,
  wip,
  type SimState,
} from "@/lib/simulation";

/**
 * ProcessGame — the playable screen. Holds the simulation state and advances
 * it on a timer; all rules live in lib/simulation.ts.
 */

const TICK_MS = { normal: 250, fast: 80 } as const;
const MAX_DOTS = 24;

type Result = { shipped: number; leadTime: number | null; allocation: number[]; variability: boolean };

const focusClass =
  "focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[color:var(--teal)]";

function Metric({ label, value }: { label: string; value: string }) {
  return (
    <div>
      <dt className="text-[length:var(--text-xs)] uppercase font-semibold tracking-[var(--ls-eyebrow)] text-ink-soft">
        {label}
      </dt>
      <dd className="mt-1 font-serif text-[length:var(--display-2xs)] text-ink tabular-nums">{value}</dd>
    </div>
  );
}

/** Units waiting in front of a station, drawn as dots. */
function Queue({ size, alert }: { size: number; alert: boolean }) {
  const dots = Math.min(size, MAX_DOTS);
  return (
    <div className="min-h-[52px]" aria-label={`${size} waiting`}>
      <div className="flex flex-wrap gap-1">
        {Array.from({ length: dots }, (_, i) => (
          <span
            key={i}
            className={`size-2.5 rounded-full ${alert ? "bg-[var(--danger)]" : "bg-[var(--slate)]"}`}
          />
        ))}
      </div>
      <p className="mt-1 text-[length:var(--text-xs)] text-ink-soft tabular-nums">
        {size === 0 ? "Nothing waiting" : `${size} waiting${size > MAX_DOTS ? ` (${MAX_DOTS} shown)` : ""}`}
      </p>
    </div>
  );
}

export function ProcessGame() {
  const [state, setState] = useState<SimState>(() => createState());
  const [allocation, setAllocation] = useState<number[]>(DEFAULT_ALLOCATION);
  const [running, setRunning] = useState(false);
  const [variability, setVariability] = useState(false);
  const [speed, setSpeed] = useState<keyof typeof TICK_MS>("normal");
  const [results, setResults] = useState<Result[]>([]);

  // The timer reads the latest settings through refs, so changing them never restarts the clock.
  const allocationRef = useRef(allocation);
  const variabilityRef = useRef(variability);
  useEffect(() => {
    allocationRef.current = allocation;
    variabilityRef.current = variability;
  }, [allocation, variability]);

  const stateRef = useRef(state);
  const finished = state.tick >= SHIFT_LENGTH;

  /** Replace the simulation state (keeps the timer's copy in sync). */
  function load(next: SimState) {
    stateRef.current = next;
    setState(next);
  }

  useEffect(() => {
    if (!running) return;
    const id = setInterval(() => {
      const next = step(stateRef.current, allocationRef.current, variabilityRef.current);
      stateRef.current = next;
      setState(next);
      // Shift over: stop the clock and record the attempt.
      if (next.tick >= SHIFT_LENGTH) {
        setRunning(false);
        const attempt: Result = {
          shipped: next.shipped,
          leadTime: averageLeadTime(next),
          allocation: allocationRef.current,
          variability: variabilityRef.current,
        };
        setResults((r) => [attempt, ...r].slice(0, 5));
      }
    }, TICK_MS[speed]);
    return () => clearInterval(id);
  }, [running, speed]);

  const assigned = allocation.reduce((a, b) => a + b, 0);
  const caps = capacities(allocation);
  const util = utilization(state);
  const bn = bottleneck(state);
  const lead = averageLeadTime(state);

  function changeWorkers(station: number, delta: number) {
    setAllocation((current) => {
      const next = [...current];
      const value = next[station] + delta;
      if (value < 0 || (delta > 0 && assigned >= CREW_SIZE)) return current;
      next[station] = value;
      return next;
    });
  }

  function reset() {
    setRunning(false);
    load(createState());
  }

  function startOrPause() {
    if (finished) {
      load(createState());
      setRunning(true);
      return;
    }
    setRunning((r) => !r);
  }

  const startLabel = finished ? "Run another shift" : running ? "Pause" : state.tick === 0 ? "Start shift" : "Resume";

  return (
    <div className="space-y-8">
      {/* Controls */}
      <div className="flex flex-wrap items-center gap-3">
        <button
          type="button"
          onClick={startOrPause}
          className={`inline-flex items-center rounded-[var(--radius-sm)] bg-brand px-5 py-3 font-semibold text-[var(--on-brand)] [box-shadow:var(--shadow-brand)] hover:bg-brand-hover transition-colors duration-[180ms] ${focusClass}`}
        >
          {startLabel}
        </button>
        <button
          type="button"
          onClick={reset}
          disabled={state.tick === 0}
          className={`inline-flex items-center rounded-[var(--radius-sm)] border border-[var(--ink)] px-5 py-3 font-semibold text-ink hover:bg-[var(--ink)] hover:text-[var(--text-on-dark)] transition-colors duration-[180ms] disabled:opacity-40 disabled:pointer-events-none ${focusClass}`}
        >
          Reset
        </button>
        <label className="inline-flex items-center gap-2 text-[length:var(--text-sm)] text-ink cursor-pointer select-none">
          <input
            type="checkbox"
            checked={variability}
            onChange={(e) => setVariability(e.target.checked)}
            className="size-4 accent-[var(--teal)]"
          />
          Real-world variability
        </label>
        <label className="inline-flex items-center gap-2 text-[length:var(--text-sm)] text-ink cursor-pointer select-none">
          <input
            type="checkbox"
            checked={speed === "fast"}
            onChange={(e) => setSpeed(e.target.checked ? "fast" : "normal")}
            className="size-4 accent-[var(--teal)]"
          />
          Fast forward
        </label>
      </div>

      {/* Live figures */}
      <div className="bg-surface border border-line rounded-[var(--radius-lg)] [box-shadow:var(--shadow-sm)] p-5 md:p-6">
        <div className="h-1.5 rounded-full bg-[var(--surface-sunk)] overflow-hidden" aria-hidden="true">
          <div
            className="h-full bg-brand transition-[width] duration-200"
            style={{ width: `${(state.tick / SHIFT_LENGTH) * 100}%` }}
          />
        </div>
        <dl className="mt-5 grid grid-cols-2 sm:grid-cols-5 gap-5">
          <Metric label="Tick" value={`${state.tick} / ${SHIFT_LENGTH}`} />
          <Metric label="Shipped" value={String(state.shipped)} />
          <Metric label="Per tick" value={throughput(state).toFixed(1)} />
          <Metric label="In progress" value={String(wip(state))} />
          <Metric label="Lead time" value={lead === null ? "—" : `${lead.toFixed(1)} ticks`} />
        </dl>
      </div>

      {/* Crew status */}
      <p className="text-ink-soft">
        <span className="font-semibold text-ink">
          {assigned} of {CREW_SIZE} workers assigned.
        </span>{" "}
        About {DEMAND_PER_TICK} orders arrive per tick.
        {assigned < CREW_SIZE && " Put the rest to work with the + buttons."}
      </p>

      {/* The line */}
      <ol className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {STATIONS.map((station, i) => {
          const isBottleneck = bn === i;
          const short = caps[i] < DEMAND_PER_TICK;
          return (
            <li
              key={station.name}
              className={`relative bg-surface border rounded-[var(--radius-lg)] [box-shadow:var(--shadow-sm)] p-5 ${isBottleneck ? "border-[var(--danger)]" : "border-line"}`}
            >
              <div className="flex items-start justify-between gap-2">
                <div>
                  <p className="text-[length:var(--text-xs)] uppercase font-semibold tracking-[var(--ls-eyebrow)] text-[var(--text-accent)]">
                    Station {i + 1}
                  </p>
                  <h3 className="mt-1 font-serif text-[length:var(--display-2xs)] text-ink">{station.name}</h3>
                </div>
                {isBottleneck && (
                  <span className="rounded-[var(--radius-pill)] bg-[var(--danger-soft)] px-2.5 py-1 text-[length:var(--text-xs)] font-semibold text-[var(--danger)]">
                    Bottleneck
                  </span>
                )}
              </div>
              <p className="mt-1 text-[length:var(--text-xs)] text-ink-soft">
                1 worker = {station.ratePerWorker} {station.ratePerWorker === 1 ? "unit" : "units"} / tick
              </p>

              {/* Worker stepper */}
              <div className="mt-4 flex items-center gap-3">
                <button
                  type="button"
                  onClick={() => changeWorkers(i, -1)}
                  disabled={allocation[i] === 0}
                  aria-label={`Remove a worker from ${station.name}`}
                  className={`grid size-9 place-items-center rounded-[var(--radius-sm)] border border-line bg-surface text-ink text-lg hover:border-[var(--teal)] disabled:opacity-40 ${focusClass}`}
                >
                  −
                </button>
                <span className="min-w-[5.5rem] text-center text-ink tabular-nums" aria-live="polite">
                  {allocation[i]} {allocation[i] === 1 ? "worker" : "workers"}
                </span>
                <button
                  type="button"
                  onClick={() => changeWorkers(i, 1)}
                  disabled={assigned >= CREW_SIZE}
                  aria-label={`Add a worker to ${station.name}`}
                  className={`grid size-9 place-items-center rounded-[var(--radius-sm)] border border-line bg-surface text-ink text-lg hover:border-[var(--teal)] disabled:opacity-40 ${focusClass}`}
                >
                  +
                </button>
              </div>
              <p className={`mt-2 text-[length:var(--text-sm)] tabular-nums ${short ? "text-[var(--danger)] font-semibold" : "text-ink-soft"}`}>
                Capacity {caps[i].toFixed(2)} / tick{short ? " — below demand" : ""}
              </p>

              {/* Queue and utilization */}
              <div className="mt-4 pt-4 border-t border-line">
                <Queue size={state.queues[i].length} alert={isBottleneck} />
                <div className="mt-3">
                  <div className="flex justify-between text-[length:var(--text-xs)] text-ink-soft">
                    <span>Busy</span>
                    <span className="tabular-nums">{Math.round(util[i] * 100)} %</span>
                  </div>
                  <div className="mt-1 h-1.5 rounded-full bg-[var(--surface-sunk)] overflow-hidden" aria-hidden="true">
                    <div className="h-full bg-[var(--slate)]" style={{ width: `${util[i] * 100}%` }} />
                  </div>
                </div>
              </div>
            </li>
          );
        })}
      </ol>

      {/* End of shift */}
      {finished && (
        <section
          aria-live="polite"
          className="rounded-[var(--radius-lg)] bg-[var(--surface-dark)] p-6 md:p-8 text-[var(--text-on-dark)] [box-shadow:var(--shadow-md)]"
        >
          <p className="uppercase text-[length:var(--text-xs)] font-semibold tracking-[var(--ls-eyebrow)] text-[var(--teal-soft)]">
            Shift over
          </p>
          <h2 className="mt-2 font-serif text-[length:var(--display-xs)]">
            {state.shipped} shipped of ~{Math.round(DEMAND_PER_TICK * SHIFT_LENGTH)} ordered
          </h2>
          <p className="mt-3 max-w-[60ch] text-white/85">{verdict(state, allocation)}</p>
        </section>
      )}

      {/* Recent attempts */}
      {results.length > 0 && (
        <section>
          <h2 className="font-serif text-[length:var(--display-2xs)] text-ink">Your last shifts</h2>
          <div className="mt-3 overflow-x-auto">
            <table className="w-full text-left text-[length:var(--text-sm)] tabular-nums">
              <thead className="text-ink-soft">
                <tr>
                  <th className="py-2 pr-4 font-semibold">Crew ({STATIONS.map((s) => s.name[0]).join("/")})</th>
                  <th className="py-2 pr-4 font-semibold">Variability</th>
                  <th className="py-2 pr-4 font-semibold">Shipped</th>
                  <th className="py-2 font-semibold">Avg lead time</th>
                </tr>
              </thead>
              <tbody className="text-ink">
                {results.map((r, i) => (
                  <tr key={i} className="border-t border-line">
                    <td className="py-2 pr-4">{r.allocation.join(" / ")}</td>
                    <td className="py-2 pr-4">{r.variability ? "On" : "Off"}</td>
                    <td className="py-2 pr-4">{r.shipped}</td>
                    <td className="py-2">{r.leadTime === null ? "—" : `${r.leadTime.toFixed(1)} ticks`}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>
      )}
    </div>
  );
}
