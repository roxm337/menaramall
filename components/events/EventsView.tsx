"use client";

import { useMemo, useState } from "react";
import type { EventCategory, MallEvent } from "@/lib/types";
import { EventCard } from "@/components/cards/EventCard";
import { EmptyState } from "@/components/ui/EmptyState";
import { cn } from "@/lib/utils";

export function EventsView({
  upcoming,
  past,
  categories,
}: {
  upcoming: MallEvent[];
  past: MallEvent[];
  categories: readonly EventCategory[];
}) {
  const [tab, setTab] = useState<"upcoming" | "past">("upcoming");
  const [category, setCategory] = useState<EventCategory | "all">("all");

  const source = tab === "upcoming" ? upcoming : past;
  const list = useMemo(
    () =>
      source
        .filter((e) => (category === "all" ? true : e.category === category))
        .sort((a, b) =>
          tab === "upcoming" ? a.date.localeCompare(b.date) : b.date.localeCompare(a.date),
        ),
    [source, category, tab],
  );

  return (
    <div>
      <div className="flex flex-col gap-5 sm:flex-row sm:items-center sm:justify-between">
        {/* Tabs */}
        <div className="inline-flex rounded-full bg-charcoal/5 p-1">
          {(["upcoming", "past"] as const).map((t) => (
            <button
              key={t}
              onClick={() => setTab(t)}
              className={cn(
                "rounded-full px-5 py-2 text-sm font-medium capitalize transition-colors",
                tab === t ? "bg-charcoal text-ivory" : "text-charcoal/70 hover:text-charcoal",
              )}
            >
              {t} ({t === "upcoming" ? upcoming.length : past.length})
            </button>
          ))}
        </div>
        {/* Category */}
        <div className="flex gap-2 overflow-x-auto pb-1 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
          <button
            onClick={() => setCategory("all")}
            className={cn(
              "shrink-0 rounded-full border px-4 py-2 text-sm font-medium transition-all",
              category === "all" ? "border-charcoal bg-charcoal text-ivory" : "border-charcoal/15 text-charcoal/75 hover:border-charcoal/40",
            )}
          >
            All
          </button>
          {categories.map((c) => (
            <button
              key={c}
              onClick={() => setCategory(c)}
              className={cn(
                "shrink-0 rounded-full border px-4 py-2 text-sm font-medium transition-all",
                category === c ? "border-charcoal bg-charcoal text-ivory" : "border-charcoal/15 text-charcoal/75 hover:border-charcoal/40",
              )}
            >
              {c}
            </button>
          ))}
        </div>
      </div>

      <div className="mt-10">
        {list.length === 0 ? (
          <EmptyState
            icon="calendar"
            title={tab === "upcoming" ? "No upcoming events here yet" : "No past events to show"}
            message="Check back soon — the Menara Mall calendar is always being updated with new moments."
          />
        ) : (
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {list.map((e) => (
              <EventCard key={e.id} event={e} past={tab === "past"} />
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
