import Image from "next/image";
import { cn, hashUnit } from "@/lib/utils";

/**
 * Art-directed image placeholder.
 *
 * The brief calls for premium photography with clear art direction, but no
 * media assets ship yet. Rather than risk broken images, this renders an
 * elegant, deterministic tonal "plate" (gradient + zellige wash + grain +
 * cinematic light) seeded from the `art` string. The art-direction note is
 * preserved as the accessible label and can be surfaced as a caption.
 *
 * SWAP POINT: replace the inner markup with `next/image` once the Menara Mall
 * team supplies real assets — the props map cleanly to image src/alt.
 */
const tones: Record<string, [string, string, string]> = {
  sand: ["#c7d0e6", "#a9b6d6", "#7c8dbe"],
  clay: ["#4a66cc", "#2a4bc0", "#1b2f86"],
  palm: ["#1fa38c", "#16887a", "#0a4a40"],
  charcoal: ["#2c3543", "#1b2330", "#0e131c"],
  gold: ["#f0c26b", "#e7a12e", "#b27a1e"],
  ivory: ["#f6f6f1", "#e3e3db", "#c9cbc0"],
};
const toneKeys = Object.keys(tones);

type Ratio = "hero" | "wide" | "portrait" | "square" | "card" | "tall";
const ratioClass: Record<Ratio, string> = {
  hero: "aspect-[16/10] sm:aspect-[2/1]",
  wide: "aspect-[16/9]",
  portrait: "aspect-[4/5]",
  square: "aspect-square",
  card: "aspect-[4/3]",
  tall: "aspect-[3/4]",
};

interface ArtImageProps {
  art: string;
  ratio?: Ratio;
  tone?: keyof typeof tones;
  className?: string;
  rounded?: boolean;
  /** Show the art-direction note as a small corner caption (for editors). */
  showNote?: boolean;
  /** Large centred monogram watermark. */
  monogram?: string;
  /** Optional real image source. When omitted, the deterministic art plate is used. */
  src?: string;
  /** Optional overlaid scrim for text legibility. */
  scrim?: boolean;
  children?: React.ReactNode;
}

export function ArtImage({
  art,
  ratio = "card",
  tone,
  className,
  rounded = true,
  showNote = false,
  monogram,
  src,
  scrim = false,
  children,
}: ArtImageProps) {
  const seed = hashUnit(art);
  const key = tone ?? (toneKeys[Math.floor(seed * toneKeys.length)] as keyof typeof tones);
  const [c1, c2, c3] = tones[key];
  const angle = 120 + Math.floor(seed * 80);

  return (
    <div
      role="img"
      aria-label={art}
      className={cn(
        "relative isolate overflow-hidden bg-charcoal",
        ratioClass[ratio],
        rounded && "rounded-[var(--radius-xl2)]",
        className,
      )}
    >
      {src ? (
        <Image
          src={encodeURI(src)}
          alt={art}
          fill
          sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
          className="object-cover"
        />
      ) : (
        <>
          {/* Base tonal gradient */}
          <div
            className="absolute inset-0"
            style={{ backgroundImage: `linear-gradient(${angle}deg, ${c1}, ${c2} 55%, ${c3})` }}
          />
          {/* Cinematic light streak */}
          <div
            className="absolute inset-0 opacity-40 mix-blend-soft-light"
            style={{
              backgroundImage: `radial-gradient(120% 80% at ${20 + seed * 60}% 0%, rgba(255,255,255,0.9), transparent 60%)`,
            }}
          />
          {/* Zellige texture wash */}
          <div className="zellige absolute inset-0 opacity-[0.12] mix-blend-overlay" />
          {/* Film grain */}
          <div
            className="absolute inset-0 opacity-[0.10] mix-blend-overlay"
            style={{
              backgroundImage:
                "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='120' height='120'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='2'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E\")",
            }}
          />
          {/* Vignette */}
          <div className="absolute inset-0 shadow-[inset_0_0_120px_rgba(0,0,0,0.35)]" />
        </>
      )}
      {scrim && (
        <div className="absolute inset-0 bg-gradient-to-t from-charcoal/70 via-charcoal/10 to-transparent" />
      )}

      {monogram && (
        <span className="absolute inset-0 flex items-center justify-center font-display text-[clamp(3rem,9vw,7rem)] font-medium text-white/15 select-none">
          {monogram}
        </span>
      )}

      {showNote && (
        <span className="absolute bottom-3 left-3 right-3 z-10 text-[0.62rem] leading-snug tracking-wide text-white/70">
          <span className="eyebrow text-gold-soft">Art direction</span>
          <br />
          {art}
        </span>
      )}

      {children && <div className="absolute inset-0 z-10">{children}</div>}
    </div>
  );
}
