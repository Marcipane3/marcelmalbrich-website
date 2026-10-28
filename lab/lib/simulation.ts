/**
 * Process game — simulation engine (pure logic, no UI).
 *
 * A four-station line. Orders arrive at the first station, each station moves
 * finished units to the next one, and the last station ships them. The player
 * splits a fixed crew across the stations; each worker adds a station-specific
 * amount of capacity per tick. Wherever capacity is lowest, work piles up.
 *
 * Every function returns a new state instead of changing the old one, so the
 * game screen can simply re-render whatever state it holds.
 */

export type Station = {
  name: string;
  /** Units one worker finishes per tick at this station. */
  ratePerWorker: number;
};

export const STATIONS: Station[] = [
  { name: "Prepare", ratePerWorker: 1.0 },
  { name: "Assemble", ratePerWorker: 0.5 },
  { name: "Inspect", ratePerWorker: 0.75 },
  { name: "Pack", ratePerWorker: 1.5 },
];

export const CREW_SIZE = 8;
export const SHIFT_LENGTH = 120;
/** Average new orders per tick. Needs ≥ 2 / 3 / 2 / 1 workers — exactly the full crew. */
export const DEMAND_PER_TICK = 1.4;
export const DEFAULT_ALLOCATION = [2, 2, 2, 2];

export type SimState = {
  tick: number;
  /** queues[i] holds the arrival tick of every unit waiting in front of station i. */
  queues: number[][];
  /** Unused part of each station's capacity, carried within a tick (0 ≤ credit < capacity). */
  credit: number[];
  /** Fraction of an order accumulated by the steady arrival stream. */
  arrivalCredit: number;
  shipped: number;
  totalLeadTime: number;
  /** Per station, over the whole shift: units processed and capacity offered. */
  processed: number[];
  offered: number[];
  maxWip: number;
  /** Shipped units per tick, last 10 ticks — drives the live throughput figure. */
  recentShipped: number[];
  rngState: number;
};

/** Small seeded random generator (mulberry32) — same seed, same shift, so attempts are comparable. */
function nextRandom(seed: number): [number, number] {
  let t = (seed + 0x6d2b79f5) | 0;
  t = Math.imul(t ^ (t >>> 15), t | 1);
  t ^= t + Math.imul(t ^ (t >>> 7), t | 61);
  const value = ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  return [value, (seed + 0x6d2b79f5) | 0];
}

/** Poisson-distributed count (Knuth's method) — realistic, bursty order arrivals. */
function poisson(mean: number, seed: number): [number, number] {
  const limit = Math.exp(-mean);
  let product = 1;
  let count = -1;
  let state = seed;
  do {
    const [r, next] = nextRandom(state);
    state = next;
    product *= r;
    count += 1;
  } while (product > limit);
  return [count, state];
}

export function createState(seed = 42): SimState {
  return {
    tick: 0,
    queues: STATIONS.map(() => []),
    credit: STATIONS.map(() => 0),
    arrivalCredit: 0,
    shipped: 0,
    totalLeadTime: 0,
    processed: STATIONS.map(() => 0),
    offered: STATIONS.map(() => 0),
    maxWip: 0,
    recentShipped: [],
    rngState: seed,
  };
}

/** Advance the line by one tick. `variability` switches on bursty orders and uneven work speed. */
export function step(state: SimState, allocation: number[], variability: boolean): SimState {
  if (state.tick >= SHIFT_LENGTH) return state;

  const tick = state.tick + 1;
  let rng = state.rngState;
  const queues = state.queues.map((q) => [...q]);
  const credit = [...state.credit];
  const processed = [...state.processed];
  const offered = [...state.offered];

  // 1. New orders arrive in front of the first station.
  let arrivals: number;
  let arrivalCredit = state.arrivalCredit;
  if (variability) {
    [arrivals, rng] = poisson(DEMAND_PER_TICK, rng);
  } else {
    arrivalCredit += DEMAND_PER_TICK;
    arrivals = Math.floor(arrivalCredit);
    arrivalCredit -= arrivals;
  }
  for (let i = 0; i < arrivals; i++) queues[0].push(tick);

  // 2. Stations work from last to first, so a unit moves at most one station per tick.
  let shippedNow = 0;
  let leadTimeNow = 0;
  for (let s = STATIONS.length - 1; s >= 0; s--) {
    let capacity = allocation[s] * STATIONS[s].ratePerWorker;
    if (variability && capacity > 0) {
      let r: number;
      [r, rng] = nextRandom(rng);
      capacity *= 0.6 + 0.8 * r; // 60–140 % of nominal speed this tick
    }
    offered[s] += capacity;
    credit[s] += capacity;

    while (credit[s] >= 1 && queues[s].length > 0) {
      const arrivedAt = queues[s].shift() as number;
      credit[s] -= 1;
      processed[s] += 1;
      if (s === STATIONS.length - 1) {
        shippedNow += 1;
        leadTimeNow += tick - arrivedAt;
      } else {
        queues[s + 1].push(arrivedAt);
      }
    }
    // Idle capacity can't be saved up: a starved station keeps at most a partial unit.
    if (queues[s].length === 0) credit[s] = Math.min(credit[s], 0.99);
  }

  const wip = queues.reduce((sum, q) => sum + q.length, 0);
  return {
    tick,
    queues,
    credit,
    arrivalCredit,
    shipped: state.shipped + shippedNow,
    totalLeadTime: state.totalLeadTime + leadTimeNow,
    processed,
    offered,
    maxWip: Math.max(state.maxWip, wip),
    recentShipped: [...state.recentShipped, shippedNow].slice(-10),
    rngState: rng,
  };
}

/** Units currently somewhere on the line (waiting or in progress). */
export function wip(state: SimState): number {
  return state.queues.reduce((sum, q) => sum + q.length, 0);
}

/** Average ticks from order arrival to shipping, for units shipped so far. */
export function averageLeadTime(state: SimState): number | null {
  return state.shipped === 0 ? null : state.totalLeadTime / state.shipped;
}

/** Shipped units per tick over the last 10 ticks. */
export function throughput(state: SimState): number {
  if (state.recentShipped.length === 0) return 0;
  return state.recentShipped.reduce((a, b) => a + b, 0) / state.recentShipped.length;
}

/** Share of offered capacity actually used, per station, over the shift so far. */
export function utilization(state: SimState): number[] {
  return state.offered.map((cap, i) => (cap === 0 ? 0 : Math.min(1, state.processed[i] / cap)));
}

/** The station with the biggest pile of work in front of it — or null if nothing is piling up. */
export function bottleneck(state: SimState): number | null {
  let worst = -1;
  let worstSize = 3; // a queue of 3 or fewer is normal noise
  state.queues.forEach((q, i) => {
    if (q.length > worstSize) {
      worst = i;
      worstSize = q.length;
    }
  });
  return worst === -1 ? null : worst;
}

/** Capacity per tick for a given allocation (nominal, without variability). */
export function capacities(allocation: number[]): number[] {
  return allocation.map((workers, i) => workers * STATIONS[i].ratePerWorker);
}

/** End-of-shift feedback in plain words. */
export function verdict(state: SimState, allocation: number[]): string {
  const caps = capacities(allocation);
  const weakest = caps.indexOf(Math.min(...caps));
  const target = DEMAND_PER_TICK * SHIFT_LENGTH;
  const shareShipped = state.shipped / target;

  if (caps[weakest] < DEMAND_PER_TICK) {
    return `${STATIONS[weakest].name} can only handle ${caps[weakest].toFixed(2)} units per tick, but ${DEMAND_PER_TICK} arrive. The whole line can never go faster than its slowest station — move a worker there.`;
  }
  if (shareShipped >= 0.9 && wip(state) <= 6) {
    return "Balanced line. Every station keeps up with demand, so work flows through instead of piling up.";
  }
  return "Every station has enough capacity on paper, yet work still piles up. That's variability: when a station runs close to 100 % busy, every slow tick creates a queue it never catches up on.";
}
