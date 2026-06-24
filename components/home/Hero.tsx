"use client";

import { useEffect, useRef, useState } from "react";
import {
  AnimatePresence,
  motion,
  useReducedMotion,
  useScroll,
  useTransform,
} from "framer-motion";
import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { Icon, type IconName } from "@/components/ui/Icon";
import { OpenBadge } from "@/components/ui/OpeningHours";
import { ArtImage } from "@/components/ui/ArtImage";
import { mallHours } from "@/lib/data/site";
import { officialMedia } from "@/lib/data/official-media";

/** The four worlds surfaced in the hero directory panel. */
const heroWorlds: { label: string; meta: string; href: string; icon: IconName }[] = [
  { label: "Mode & beauté", meta: "Boutiques & enseignes", href: "/shops", icon: "bag" },
  { label: "Restaurants & cafés", meta: "Food court & terrasses", href: "/dining", icon: "utensils" },
  { label: "Kidzo en famille", meta: "Loisirs & divertissement", href: "/entertainment", icon: "baby" },
  { label: "Artisans du Souk", meta: "Le Souq Al Madinah", href: "/le-souk", icon: "sparkles" },
];

export function Hero() {
  const ref = useRef<HTMLDivElement>(null);
  const reduce = useReducedMotion();
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });
  const y = useTransform(
    scrollYProgress,
    [0, 1],
    ["0%", reduce ? "0%" : "18%"],
  );
  const imageScale = useTransform(
    scrollYProgress,
    [0, 1],
    [1, reduce ? 1 : 1.08],
  );
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);
  const contentY = useTransform(
    scrollYProgress,
    [0, 1],
    ["0%", reduce ? "0%" : "10%"],
  );

  // Crossfade through the live menaramall.com hero slides.
  const slides = officialMedia.heroSlides;
  const [active, setActive] = useState(0);
  useEffect(() => {
    if (reduce || slides.length < 2) return;
    const id = setInterval(
      () => setActive((i) => (i + 1) % slides.length),
      6500,
    );
    return () => clearInterval(id);
  }, [reduce, slides.length]);

  return (
    <section
      ref={ref}
      className="relative h-[100svh] min-h-[640px] overflow-hidden bg-charcoal"
    >
      <motion.div style={{ y, scale: imageScale }} className="absolute inset-0">
        <AnimatePresence initial={false}>
          <motion.div
            key={active}
            initial={{ opacity: reduce ? 1 : 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1.6, ease: [0.16, 1, 0.3, 1] }}
            className="absolute inset-0 animate-kenburns"
          >
            <ArtImage
              art="Menara Mall Marrakech official hero photography"
              src={slides[active]}
              ratio="hero"
              rounded={false}
              className="!absolute inset-0 h-full w-full !rounded-none"
            />
          </motion.div>
        </AnimatePresence>
      </motion.div>

      {/* Slide indicators */}
      {!reduce && slides.length > 1 && (
        <div className="absolute bottom-6 right-6 z-20 hidden items-center gap-2 sm:flex">
          {slides.map((_, i) => (
            <button
              key={i}
              type="button"
              aria-label={`Show slide ${i + 1}`}
              onClick={() => setActive(i)}
              className="group/dot h-2 overflow-hidden rounded-full bg-white/25 transition-all duration-500"
              style={{ width: i === active ? 28 : 8 }}
            >
              <motion.span
                className="block h-full rounded-full bg-gold-soft"
                initial={false}
                animate={{ scaleX: i === active ? 1 : 0 }}
                style={{ originX: 0 }}
                transition={{ duration: i === active ? 6.5 : 0.3, ease: "linear" }}
              />
            </button>
          ))}
        </div>
      )}
      <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(10,16,28,0.52)_0%,rgba(10,16,28,0.28)_18%,rgba(14,12,12,0.26)_42%,rgba(12,11,12,0.9)_100%)]" />
      <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(8,12,18,0.62)_0%,rgba(8,12,18,0.42)_28%,rgba(8,12,18,0.14)_54%,rgba(8,12,18,0.3)_100%)]" />
      <div className="absolute inset-0 z-[1] opacity-[0.13] mix-blend-screen">
        <div className="hero-lattice absolute right-[6%] top-[20%] hidden h-[24rem] w-[24rem] lg:block" />
      </div>
      <div className="pointer-events-none absolute inset-x-0 top-0 z-[1] h-28 bg-[linear-gradient(180deg,rgba(255,255,255,0.05),transparent)]" />

      <motion.div
        style={{ opacity, y: contentY }}
        className="relative z-10 flex h-full flex-col justify-end pb-12 sm:pb-16 lg:pb-18"
      >
        <Container size="wide" className="flex flex-col">
          <div className="grid items-end gap-8 lg:grid-cols-[minmax(0,1.1fr)_minmax(16rem,20rem)] lg:gap-10">
            <div className="max-w-4xl pt-28 sm:pt-32 lg:pt-24">
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                className="eyebrow text-gold-soft"
              >
                Marrakech · Avenue Mohamed VI
              </motion.p>

              <motion.h1
                initial={{ opacity: 0, y: 28 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.9,
                  delay: 0.1,
                  ease: [0.16, 1, 0.3, 1],
                }}
                className="mt-5 max-w-[20ch] text-balance font-medium leading-[0.95] tracking-[-0.02em] text-white"
                style={{
                  fontSize: "clamp(2.8rem, 5.7vw, 4.4rem)",
                  lineHeight: "0.95",
                }}
              >
                Vivez Marrakech
                <span className="mt-2 block text-white/92">
                  en une seule destination
                </span>
              </motion.h1>

              <motion.div
                initial={{ opacity: 0, scaleX: 0.65 }}
                animate={{ opacity: 1, scaleX: 1 }}
                transition={{
                  duration: 0.8,
                  delay: 0.18,
                  ease: [0.16, 1, 0.3, 1],
                }}
                className="mt-7 h-px w-28 origin-left bg-gradient-to-r from-gold-soft via-gold-soft/70 to-transparent"
              />

              <motion.p
                initial={{ opacity: 0, y: 24 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.9,
                  delay: 0.24,
                  ease: [0.16, 1, 0.3, 1],
                }}
                className="mt-7 max-w-2xl text-pretty text-base leading-relaxed text-white/82 sm:text-[1.1rem]"
              >
                Decouvrez shopping premium, restaurants en terrasse, loisirs
                en famille et artisanat marocain au sein d'une adresse
                incontournable, au coeur de Menara Mall.
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.9,
                  delay: 0.34,
                  ease: [0.16, 1, 0.3, 1],
                }}
                className="mt-9 flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:items-center"
              >
                <Button
                  href="/shops"
                  variant="gold"
                  size="lg"
                  icon="arrow-right"
                  className="shadow-[0_24px_50px_-22px_rgba(231,161,46,0.6)]"
                >
                  Explorer les boutiques
                </Button>
                <Button href="/contact" variant="light" size="lg" icon="mail">
                  Contactez-nous
                </Button>
                <span className="mt-1 inline-flex items-center sm:ml-3 sm:mt-0">
                  <span className="rounded-full border border-white/12 bg-white/10 px-4 py-2 backdrop-blur-md">
                    <OpenBadge hours={mallHours} className="!text-white" />
                  </span>
                </span>
              </motion.div>
            </div>

            <motion.aside
              initial={{ opacity: 0, x: 24 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{
                duration: 0.9,
                delay: 0.42,
                ease: [0.16, 1, 0.3, 1],
              }}
              className="hidden lg:block lg:pb-4"
            >
              <div className="relative overflow-hidden rounded-[1.6rem] border border-white/12 bg-[linear-gradient(160deg,rgba(20,26,38,0.66),rgba(14,18,28,0.36))] p-1.5 shadow-[0_30px_70px_-30px_rgba(0,0,0,0.7)] backdrop-blur-xl">
                {/* Top hairline sheen + ambient saffron glow */}
                <div className="pointer-events-none absolute inset-x-6 top-0 h-px bg-gradient-to-r from-transparent via-white/45 to-transparent" />
                <div className="pointer-events-none absolute -right-12 -top-12 h-44 w-44 rounded-full bg-gold/20 blur-3xl" />
                <div className="pointer-events-none absolute -bottom-16 -left-10 h-40 w-40 rounded-full bg-clay/25 blur-3xl" />

                <div className="relative px-5 pt-5">
                  <div className="flex items-center justify-between">
                    <p className="eyebrow text-gold-soft">Dans Menara</p>
                    <span className="inline-flex items-center gap-1.5 rounded-full border border-white/12 bg-white/5 px-2.5 py-1 text-[0.6rem] uppercase tracking-[0.2em] text-white/60">
                      <Icon name="compass" size={11} className="text-gold-soft" />
                      4 univers
                    </span>
                  </div>
                  <p className="mt-3 max-w-[24ch] text-[0.98rem] leading-7 text-white/82">
                    Shopping, restauration, loisirs et artisanat dans une même
                    adresse.
                  </p>
                </div>

                <div className="relative mt-4 space-y-1.5 p-1.5">
                  {heroWorlds.map((world, i) => (
                    <motion.div
                      key={world.label}
                      initial={{ opacity: 0, x: reduce ? 0 : 16 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{
                        duration: 0.6,
                        delay: 0.52 + i * 0.08,
                        ease: [0.16, 1, 0.3, 1],
                      }}
                    >
                      <Link
                        href={world.href}
                        className="group/row relative flex items-center gap-3.5 overflow-hidden rounded-2xl border border-white/8 bg-white/[0.03] px-3.5 py-3 transition-colors duration-300 hover:border-white/20 hover:bg-white/[0.06]"
                      >
                        {/* Hover sweep */}
                        <span className="pointer-events-none absolute inset-y-0 left-0 w-0 bg-gradient-to-r from-gold/15 to-transparent transition-[width] duration-500 ease-[var(--ease-luxe)] group-hover/row:w-full" />
                        <span className="relative flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-[linear-gradient(140deg,rgba(42,75,192,0.6),rgba(231,161,46,0.28))] text-white ring-1 ring-white/15 transition-transform duration-300 group-hover/row:scale-105">
                          <Icon name={world.icon} size={17} />
                        </span>
                        <span className="relative min-w-0 flex-1">
                          <span className="block text-[0.92rem] font-medium leading-tight text-white/92">
                            {world.label}
                          </span>
                          <span className="mt-0.5 block text-[0.72rem] leading-tight text-white/45">
                            {world.meta}
                          </span>
                        </span>
                        <Icon
                          name="arrow-up-right"
                          size={15}
                          className="relative shrink-0 text-white/35 transition-all duration-300 group-hover/row:-translate-y-0.5 group-hover/row:translate-x-0.5 group-hover/row:text-gold-soft"
                        />
                      </Link>
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.aside>
          </div>

        </Container>
      </motion.div>

      <div className="absolute inset-x-0 bottom-5 z-10 hidden justify-center sm:flex">
        <motion.span
          animate={reduce ? {} : { y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          className="hero-scroll-cue text-[0.65rem] uppercase tracking-[0.3em] text-white/50"
        >
          Defiler
        </motion.span>
      </div>
    </section>
  );
}
