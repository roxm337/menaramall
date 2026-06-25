"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { ArtImage } from "@/components/ui/ArtImage";
import { Icon, type IconName } from "@/components/ui/Icon";
import { getLocaleFromPathname, localizeHref } from "@/lib/i18n";

export interface Experience {
  title: string;
  description: string;
  href: string;
  icon: IconName;
  art: string;
  imageSrc?: string;
  tone?: "sand" | "clay" | "palm" | "charcoal" | "gold";
}

export function ExperienceCard({ exp, large = false }: { exp: Experience; large?: boolean }) {
  const locale = getLocaleFromPathname(usePathname());
  return (
    <Link
      href={localizeHref(exp.href, locale)}
      className="group relative flex h-full overflow-hidden rounded-[var(--radius-xl2)] shadow-[0_18px_40px_-30px_rgba(23,23,23,0.4)] transition-shadow duration-500 ease-[var(--ease-luxe)] hover:shadow-[0_36px_70px_-30px_rgba(23,23,23,0.5)]"
    >
      <ArtImage
        art={exp.art}
        src={exp.imageSrc}
        tone={exp.tone}
        ratio={large ? "wide" : "portrait"}
        rounded={false}
        scrim
        className="w-full transition-transform duration-[1.2s] ease-[var(--ease-luxe)] group-hover:scale-[1.05]"
      />
      <div className="absolute inset-0 z-10 flex flex-col justify-end p-7">
        <span className="mb-4 flex h-11 w-11 items-center justify-center rounded-full bg-white/15 text-white backdrop-blur-sm ring-1 ring-white/25">
          <Icon name={exp.icon} size={20} />
        </span>
        <h3 className="text-3xl text-white">{exp.title}</h3>
        <p className="mt-2 max-w-xs text-sm leading-relaxed text-white/80">
          {exp.description}
        </p>
        <span className="mt-4 inline-flex items-center gap-1.5 text-sm font-medium text-gold-soft">
          {locale === "en" ? "Explore" : locale === "ar" ? "استكشف" : "Explorer"}
          <Icon name="arrow-right" size={15} className="transition-transform duration-300 group-hover:translate-x-1" />
        </span>
      </div>
    </Link>
  );
}
