/** Tiny classnames joiner (no dependency). Filters falsey values. */
export function cn(...parts: Array<string | false | null | undefined>): string {
  return parts.filter(Boolean).join(" ");
}

/** Deterministic 0..1 hash from a string — used to vary placeholder art. */
export function hashUnit(input: string): number {
  let h = 2166136261;
  for (let i = 0; i < input.length; i++) {
    h ^= input.charCodeAt(i);
    h = Math.imul(h, 16777619);
  }
  return ((h >>> 0) % 1000) / 1000;
}

export function formatDateRange(date: string, endDate?: string): string {
  const fmt = (d: string) =>
    new Date(`${d}T00:00:00`).toLocaleDateString("en-GB", {
      day: "numeric",
      month: "long",
      year: "numeric",
    });
  if (!endDate || endDate === date) return fmt(date);
  const a = new Date(`${date}T00:00:00`);
  const b = new Date(`${endDate}T00:00:00`);
  const sameMonth =
    a.getMonth() === b.getMonth() && a.getFullYear() === b.getFullYear();
  if (sameMonth) {
    const month = a.toLocaleDateString("en-GB", { month: "long", year: "numeric" });
    return `${a.getDate()}–${b.getDate()} ${month}`;
  }
  return `${fmt(date)} – ${fmt(endDate)}`;
}

export function shortDate(date: string): { day: string; month: string } {
  const d = new Date(`${date}T00:00:00`);
  return {
    day: d.toLocaleDateString("en-GB", { day: "2-digit" }),
    month: d.toLocaleDateString("en-GB", { month: "short" }).toUpperCase(),
  };
}
