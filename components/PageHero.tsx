import { Container } from "@/components/ui/Container";
import { Breadcrumbs, type Crumb } from "@/components/ui/Breadcrumbs";
import { ArtImage } from "@/components/ui/ArtImage";
import { Reveal } from "@/components/ui/Reveal";

/**
 * Cinematic interior page header. Sits beneath the fixed global header and
 * carries an eyebrow, serif title, lede and breadcrumbs over an art plate.
 */
export function PageHero({
  eyebrow,
  title,
  lede,
  art,
  tone,
  crumbs,
  children,
}: {
  eyebrow: string;
  title: string;
  lede?: string;
  art: string;
  tone?: "sand" | "clay" | "palm" | "charcoal" | "gold";
  crumbs?: Crumb[];
  children?: React.ReactNode;
}) {
  return (
    <section className="relative isolate overflow-hidden bg-charcoal pt-[var(--header-h,4.5rem)]">
      <ArtImage
        art={art}
        tone={tone}
        ratio="hero"
        rounded={false}
        className="!absolute inset-0 h-full w-full !rounded-none"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-charcoal/85 via-charcoal/45 to-charcoal/30" />
      <Container className="relative z-10 flex min-h-[44vh] flex-col justify-end py-12 sm:min-h-[52vh] sm:py-16">
        {crumbs && (
          <div className="mb-6 [&_*]:!text-white/70 [&_a:hover]:!text-white">
            <Breadcrumbs items={crumbs} />
          </div>
        )}
        <Reveal>
          <p className="eyebrow text-gold-soft">{eyebrow}</p>
          <h1
            className="mt-4 max-w-4xl text-balance text-white"
            style={{ fontSize: "var(--text-hero)", lineHeight: "var(--text-hero--line-height)" }}
          >
            {title}
          </h1>
          {lede && (
            <p className="mt-5 max-w-2xl text-lg leading-relaxed text-white/75">{lede}</p>
          )}
          {children && <div className="mt-8">{children}</div>}
        </Reveal>
      </Container>
    </section>
  );
}
