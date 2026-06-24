"use client";

import { useEffect, useState } from "react";
import type { OpeningHours } from "@/lib/types";
import { getOpenState, summarizeHours } from "@/lib/hours";
import { cn } from "@/lib/utils";
import { Icon } from "./Icon";

/**
 * Live "open now" pill. Computed only after mount so the server and client
 * markup match (the open state depends on the current time).
 */
export function OpenBadge({
  hours,
  className,
}: {
  hours: OpeningHours;
  className?: string;
}) {
  const [state, setState] = useState<ReturnType<typeof getOpenState> | null>(null);
  useEffect(() => {
    const tick = () => setState(getOpenState(hours));
    tick();
    const id = setInterval(tick, 60_000);
    return () => clearInterval(id);
  }, [hours]);

  if (!state) {
    return (
      <span
        className={cn(
          "inline-flex items-center gap-2 text-xs text-stone",
          className,
        )}
      >
        <Icon name="clock" size={14} /> Horaires
      </span>
    );
  }

  return (
    <span
      className={cn(
        "inline-flex items-center gap-2 text-xs font-medium",
        state.isOpen ? "text-palm" : "text-clay",
        className,
      )}
    >
      <span
        className={cn(
          "h-1.5 w-1.5 rounded-full",
          state.isOpen ? "bg-palm" : "bg-clay",
        )}
        aria-hidden
      />
      {state.label}
    </span>
  );
}

/** Static, accessible weekly hours table. Safe to render on the server. */
export function HoursList({
  hours,
  className,
}: {
  hours: OpeningHours;
  className?: string;
}) {
  const rows = summarizeHours(hours);
  return (
    <dl className={cn("space-y-1.5 text-sm", className)}>
      {rows.map((row) => {
        const [label, value] = row.split(": ");
        return (
          <div key={row} className="flex justify-between gap-6 border-b border-charcoal/8 pb-1.5">
            <dt className="text-stone">{label}</dt>
            <dd className="font-medium text-charcoal">{value}</dd>
          </div>
        );
      })}
    </dl>
  );
}
