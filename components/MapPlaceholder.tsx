import { Icon } from "@/components/ui/Icon";

/**
 * Stylised interactive-map placeholder showing a venue's position inside the
 * mall. Swap for a real wayfinding/floor-plan integration when available.
 */
export function MapPlaceholder({
  locationLabel,
  floor,
}: {
  locationLabel: string;
  floor: string;
}) {
  return (
    <div className="relative overflow-hidden rounded-[var(--radius-xl2)] bg-ivory-deep ring-1 ring-charcoal/10">
      <div className="zellige absolute inset-0 opacity-[0.18]" />
      {/* Abstract corridors */}
      <svg className="absolute inset-0 h-full w-full" viewBox="0 0 400 240" fill="none" aria-hidden>
        <rect x="20" y="20" width="360" height="200" rx="10" stroke="#2a4bc0" strokeOpacity="0.3" strokeWidth="2" />
        <path d="M200 20v200M20 120h360" stroke="#5f6672" strokeOpacity="0.35" strokeWidth="2" strokeDasharray="6 6" />
        <rect x="40" y="40" width="120" height="60" rx="6" fill="#a9b6d6" fillOpacity="0.4" />
        <rect x="240" y="40" width="120" height="60" rx="6" fill="#a9b6d6" fillOpacity="0.4" />
        <rect x="40" y="140" width="120" height="60" rx="6" fill="#a9b6d6" fillOpacity="0.4" />
        <rect x="240" y="140" width="120" height="60" rx="6" fill="#a9b6d6" fillOpacity="0.4" />
      </svg>
      {/* Pin */}
      <div className="relative flex aspect-[5/3] flex-col items-center justify-center p-6 text-center">
        <span className="flex h-12 w-12 animate-pulse items-center justify-center rounded-full bg-clay text-white shadow-lg">
          <Icon name="map-pin" size={24} />
        </span>
        <p className="mt-3 font-display text-lg text-charcoal">{locationLabel}</p>
        <p className="text-xs text-stone">{floor}</p>
        <p className="mt-2 text-[0.65rem] uppercase tracking-widest text-stone/70">
          Guidage interactif · bientot disponible
        </p>
      </div>
    </div>
  );
}
