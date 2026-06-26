"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import type { Restaurant } from "@/lib/types";
import { ArtImage } from "@/components/ui/ArtImage";
import { Badge } from "@/components/ui/Badge";
import { OpenBadge } from "@/components/ui/OpeningHours";
import { Icon } from "@/components/ui/Icon";
import { getLocaleFromPathname, getUiText, localizeHref } from "@/lib/i18n";
import { tr, restaurantDescriptions, localizeDescription } from "@/lib/i18n-content";

export function RestaurantCard({ restaurant: r }: { restaurant: Restaurant }) {
  const locale = getLocaleFromPathname(usePathname());
  const t = getUiText(locale);
  const description = localizeDescription(restaurantDescriptions, r.name, r.description, locale);
  return (
    <Link
      href={localizeHref(`/dining/${r.slug}`, locale)}
      className="lift group flex h-full flex-col overflow-hidden rounded-[var(--radius-xl2)] bg-white ring-1 ring-charcoal/8"
    >
      <div className="relative">
        <ArtImage art={r.heroArt} src={r.imageSrc} ratio="card" rounded={false} scrim />
        <div className="absolute left-4 top-4 flex flex-wrap gap-2">
          {r.tags?.includes("New") && <Badge tone="brand">{tr("New", locale)}</Badge>}
          <Badge tone="gold">{tr(r.type, locale)}</Badge>
          {r.tags?.includes("Terrasse") && <Badge tone="palm">{t.common.terrace}</Badge>}
        </div>
        <div className="absolute bottom-4 left-5 right-5">
          <p className="eyebrow text-gold-soft">{tr(r.cuisine, locale)}</p>
          <h3 className="mt-1 text-2xl leading-tight text-white">{r.name}</h3>
        </div>
      </div>
      <div className="flex flex-1 flex-col p-6">
        <p className="inline-flex items-center gap-1.5 text-xs text-stone">
          <Icon name="map-pin" size={13} /> {tr(r.locationLabel, locale)}
        </p>
        <p className="mt-3 line-clamp-2 flex-1 text-sm leading-relaxed text-stone">
          {description}
        </p>
        <div className="mt-5 flex items-center justify-between border-t border-charcoal/8 pt-4">
          <OpenBadge hours={r.openingHours} />
          <span className="inline-flex items-center gap-1 text-xs font-medium text-clay">
            {t.common.view} <Icon name="arrow-right" size={14} />
          </span>
        </div>
      </div>
    </Link>
  );
}
