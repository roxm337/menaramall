import type { DayHours, OpeningHours } from "@/lib/types";

export const DAY_LABELS = [
  "Lundi",
  "Mardi",
  "Mercredi",
  "Jeudi",
  "Vendredi",
  "Samedi",
  "Dimanche",
] as const;

/** Convert JS getDay() (0=Sun) to our Monday-first index (0=Mon). */
function mondayIndex(jsDay: number): number {
  return (jsDay + 6) % 7;
}

function toMinutes(t: string): number {
  const [h, m] = t.split(":").map(Number);
  return h * 60 + m;
}

export interface OpenState {
  isOpen: boolean;
  label: string;
  todayHours: DayHours | null;
}

/**
 * Compute whether a venue is open right now. Handles past-midnight closing
 * times (e.g. open until 00:00). `now` is injectable for testing/SSR safety.
 */
export function getOpenState(hours: OpeningHours, now = new Date()): OpenState {
  const idx = mondayIndex(now.getDay());
  const today = hours[idx] ?? null;
  const mins = now.getHours() * 60 + now.getMinutes();

  if (today) {
    const open = toMinutes(today.open);
    let close = toMinutes(today.close);
    if (close === 0) close = 24 * 60; // "00:00" means midnight
    if (mins >= open && mins < close) {
      return {
        isOpen: true,
        label: `Ouvert maintenant · ferme a ${today.close === "00:00" ? "minuit" : today.close}`,
        todayHours: today,
      };
    }
    if (mins < open) {
      return {
        isOpen: false,
        label: `Ferme · ouvre a ${today.open}`,
        todayHours: today,
      };
    }
  }

  // Find the next day with hours.
  for (let i = 1; i <= 7; i++) {
    const next = hours[(idx + i) % 7];
    if (next) {
      const dayLabel = i === 1 ? "demain" : DAY_LABELS[(idx + i) % 7];
      return {
        isOpen: false,
        label: `Ferme · ouvre a ${next.open} ${dayLabel}`,
        todayHours: today,
      };
    }
  }
  return { isOpen: false, label: "Horaires indisponibles", todayHours: today };
}

/** Group identical consecutive days into ranges for compact display. */
export function summarizeHours(hours: OpeningHours): string[] {
  const fmt = (d: DayHours | null) =>
    d ? `${d.open} – ${d.close === "00:00" ? "00:00" : d.close}` : "Ferme";
  const out: string[] = [];
  let start = 0;
  for (let i = 1; i <= 7; i++) {
    const prev = hours[i - 1];
    const cur = hours[i];
    const same =
      i < 7 &&
      ((prev === null && cur === null) ||
        (prev && cur && prev.open === cur.open && prev.close === cur.close));
    if (!same) {
      const label =
        start === i - 1
          ? DAY_LABELS[start]
          : `${DAY_LABELS[start].slice(0, 3)} – ${DAY_LABELS[i - 1].slice(0, 3)}`;
      out.push(`${label}: ${fmt(hours[start])}`);
      start = i;
    }
  }
  return out;
}
