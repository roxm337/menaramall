"use client";

import { cn } from "@/lib/utils";
import { Icon } from "@/components/ui/Icon";

/** Search input used across directory pages. */
export function SearchField({
  value,
  onChange,
  placeholder,
}: {
  value: string;
  onChange: (v: string) => void;
  placeholder: string;
}) {
  return (
    <div className="flex items-center gap-3 rounded-full border border-charcoal/15 bg-white px-5 py-3 transition-colors focus-within:border-clay">
      <Icon name="search" size={19} className="shrink-0 text-stone" />
      <input
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder={placeholder}
        aria-label={placeholder}
        className="w-full bg-transparent text-sm text-charcoal outline-none placeholder:text-stone/60"
      />
      {value && (
        <button onClick={() => onChange("")} aria-label="Clear search" className="text-stone hover:text-charcoal">
          <Icon name="close" size={16} />
        </button>
      )}
    </div>
  );
}

/** Horizontal scrollable chip group for a single-select filter. */
export function ChipFilter<T extends string>({
  label,
  options,
  value,
  onChange,
  allLabel = "All",
}: {
  label: string;
  options: readonly T[];
  value: T | "all";
  onChange: (v: T | "all") => void;
  allLabel?: string;
}) {
  const chip = (active: boolean) =>
    cn(
      "shrink-0 rounded-full border px-4 py-2 text-sm font-medium transition-all",
      active
        ? "border-charcoal bg-charcoal text-ivory"
        : "border-charcoal/15 bg-white text-charcoal/75 hover:border-charcoal/40",
    );
  return (
    <div>
      <p className="mb-2 text-xs font-semibold uppercase tracking-widest text-stone">{label}</p>
      <div className="flex gap-2 overflow-x-auto pb-1 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
        <button onClick={() => onChange("all")} className={chip(value === "all")}>
          {allLabel}
        </button>
        {options.map((o) => (
          <button key={o} onClick={() => onChange(o)} className={chip(value === o)}>
            {o}
          </button>
        ))}
      </div>
    </div>
  );
}

/** Result count + active-filter summary line. */
export function ResultsBar({
  count,
  noun,
  onReset,
  hasFilters,
}: {
  count: number;
  noun: string;
  onReset: () => void;
  hasFilters: boolean;
}) {
  return (
    <div className="flex items-center justify-between gap-4">
      <p className="text-sm text-stone">
        <span className="font-medium text-charcoal">{count}</span> {noun}
        {count === 1 ? "" : "s"}
      </p>
      {hasFilters && (
        <button
          onClick={onReset}
          className="inline-flex items-center gap-1.5 text-sm font-medium text-clay hover:underline"
        >
          <Icon name="close" size={14} /> Clear filters
        </button>
      )}
    </div>
  );
}
