import type { DayHours, OpeningHours } from "@/lib/types";
import type { Locale } from "@/lib/i18n";

export const DAY_LABELS: Record<Locale, readonly string[]> = {
  fr: ["Lundi", "Mardi", "Mercredi", "Jeudi", "Vendredi", "Samedi", "Dimanche"],
  en: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
  ar: ["الاثنين", "الثلاثاء", "الأربعاء", "الخميس", "الجمعة", "السبت", "الأحد"],
};

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
export function getOpenState(hours: OpeningHours, locale: Locale = "fr", now = new Date()): OpenState {
  const idx = mondayIndex(now.getDay());
  const today = hours[idx] ?? null;
  const mins = now.getHours() * 60 + now.getMinutes();
  const dayLabels = DAY_LABELS[locale];

  if (today) {
    const open = toMinutes(today.open);
    let close = toMinutes(today.close);
    if (close === 0) close = 24 * 60; // "00:00" means midnight
    if (mins >= open && mins < close) {
      return {
        isOpen: true,
        label:
          locale === "en"
            ? `Open now · closes at ${today.close === "00:00" ? "midnight" : today.close}`
            : locale === "ar"
              ? `مفتوح الآن · يغلق عند ${today.close === "00:00" ? "منتصف الليل" : today.close}`
              : `Ouvert maintenant · ferme a ${today.close === "00:00" ? "minuit" : today.close}`,
        todayHours: today,
      };
    }
    if (mins < open) {
      return {
        isOpen: false,
        label:
          locale === "en"
            ? `Closed · opens at ${today.open}`
            : locale === "ar"
              ? `مغلق · يفتح عند ${today.open}`
              : `Ferme · ouvre a ${today.open}`,
        todayHours: today,
      };
    }
  }

  // Find the next day with hours.
  for (let i = 1; i <= 7; i++) {
    const next = hours[(idx + i) % 7];
    if (next) {
      const dayLabel =
        i === 1
          ? locale === "en"
            ? "tomorrow"
            : locale === "ar"
              ? "غدًا"
              : "demain"
          : dayLabels[(idx + i) % 7];
      return {
        isOpen: false,
        label:
          locale === "en"
            ? `Closed · opens at ${next.open} ${dayLabel}`
            : locale === "ar"
              ? `مغلق · يفتح عند ${next.open} ${dayLabel}`
              : `Ferme · ouvre a ${next.open} ${dayLabel}`,
        todayHours: today,
      };
    }
  }
  return {
    isOpen: false,
    label:
      locale === "en"
        ? "Hours unavailable"
        : locale === "ar"
          ? "المواعيد غير متاحة"
          : "Horaires indisponibles",
    todayHours: today,
  };
}

/** Group identical consecutive days into ranges for compact display. */
export function summarizeHours(hours: OpeningHours, locale: Locale = "fr"): string[] {
  const dayLabels = DAY_LABELS[locale];
  const fmt = (d: DayHours | null) =>
    d
      ? `${d.open} – ${d.close === "00:00" ? "00:00" : d.close}`
      : locale === "en"
        ? "Closed"
        : locale === "ar"
          ? "مغلق"
          : "Ferme";
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
          ? dayLabels[start]
          : `${dayLabels[start].slice(0, 3)} – ${dayLabels[i - 1].slice(0, 3)}`;
      out.push(`${label}: ${fmt(hours[start])}`);
      start = i;
    }
  }
  return out;
}
