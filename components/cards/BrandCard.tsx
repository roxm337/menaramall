"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import type { Brand } from "@/lib/types";
import { ArtImage } from "@/components/ui/ArtImage";
import { Badge } from "@/components/ui/Badge";
import { OpenBadge } from "@/components/ui/OpeningHours";
import { Icon } from "@/components/ui/Icon";
import { getLocaleFromPathname, localizeHref } from "@/lib/i18n";

export function BrandCard({ brand }: { brand: Brand }) {
  const locale = getLocaleFromPathname(usePathname());
  return (
    <Link
      href={localizeHref(`/shops/${brand.slug}`, locale)}
      className="lift group flex h-full flex-col overflow-hidden rounded-[var(--radius-xl2)] bg-white ring-1 ring-charcoal/8"
    >
      <div className="relative">
        <ArtImage
          art={brand.heroArt}
          src={brand.imageSrc}
          ratio="card"
          monogram={brand.monogram}
          rounded={false}
        />
        <div className="absolute left-4 top-4 flex gap-2">
          <Badge tone="gold">{brand.category}</Badge>
          {brand.featured && <Badge tone="clay">{locale === "en" ? "Featured" : locale === "ar" ? "مميز" : "A la une"}</Badge>}
        </div>
      </div>
      <div className="flex flex-1 flex-col p-6">
        <div className="flex items-start justify-between gap-3">
          <h3 className="text-2xl leading-tight text-charcoal">{brand.name}</h3>
          <span className="mt-1 shrink-0 text-clay transition-transform duration-300 group-hover:translate-x-1">
            <Icon name="arrow-up-right" size={20} />
          </span>
        </div>
        <p className="mt-1 inline-flex items-center gap-1.5 text-xs text-stone">
          <Icon name="map-pin" size={13} /> {brand.locationLabel}
        </p>
        <p className="mt-3 line-clamp-2 flex-1 text-sm leading-relaxed text-stone">
          {brand.description}
        </p>
        <div className="mt-5 border-t border-charcoal/8 pt-4">
          <OpenBadge hours={brand.openingHours} />
        </div>
      </div>
    </Link>
  );
}
