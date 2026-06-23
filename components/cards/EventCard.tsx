import Link from "next/link";
import type { MallEvent } from "@/lib/types";
import { ArtImage } from "@/components/ui/ArtImage";
import { Badge } from "@/components/ui/Badge";
import { Icon } from "@/components/ui/Icon";
import { formatDateRange, shortDate } from "@/lib/utils";

export function EventCard({ event, past = false }: { event: MallEvent; past?: boolean }) {
  const d = shortDate(event.date);
  return (
    <Link
      href={`/events/${event.slug}`}
      className="lift group flex h-full flex-col overflow-hidden rounded-[var(--radius-xl2)] bg-white ring-1 ring-charcoal/8"
    >
      <div className="relative">
        <ArtImage art={event.heroArt} ratio="wide" rounded={false} scrim />
        <div className="absolute left-5 top-5 flex h-16 w-16 flex-col items-center justify-center rounded-2xl bg-white/95 text-charcoal shadow-lg backdrop-blur">
          <span className="font-display text-2xl leading-none">{d.day}</span>
          <span className="text-[0.6rem] font-semibold tracking-widest text-clay">{d.month}</span>
        </div>
        <div className="absolute right-5 top-5">
          <Badge tone={past ? "neutral" : "gold"}>{past ? "Past" : event.category}</Badge>
        </div>
      </div>
      <div className="flex flex-1 flex-col p-6">
        <h3 className="text-2xl leading-tight text-charcoal">{event.title}</h3>
        <div className="mt-3 space-y-1.5 text-xs text-stone">
          <p className="inline-flex items-center gap-1.5">
            <Icon name="calendar" size={13} /> {formatDateRange(event.date, event.endDate)}
          </p>
          <p className="inline-flex items-center gap-1.5">
            <Icon name="clock" size={13} /> {event.startTime} – {event.endTime}
          </p>
          <p className="inline-flex items-center gap-1.5">
            <Icon name="map-pin" size={13} /> {event.location}
          </p>
        </div>
        <p className="mt-4 line-clamp-2 flex-1 text-sm leading-relaxed text-stone">
          {event.description}
        </p>
        <span className="mt-5 inline-flex items-center gap-1.5 text-sm font-medium text-clay">
          {past ? "View recap" : "Discover event"}
          <Icon name="arrow-right" size={15} className="transition-transform duration-300 group-hover:translate-x-1" />
        </span>
      </div>
    </Link>
  );
}
