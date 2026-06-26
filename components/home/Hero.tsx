"use client";

import { useEffect, useRef, useState } from "react";
import {
  AnimatePresence,
  motion,
  useReducedMotion,
  useScroll,
  useTransform,
} from "framer-motion";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { OpenBadge } from "@/components/ui/OpeningHours";
import { ArtImage } from "@/components/ui/ArtImage";
import { mallHours } from "@/lib/data/site";
import { officialMedia } from "@/lib/data/official-media";

export function Hero({ locale = "fr" }: { locale?: "fr" | "en" | "ar" }) {
  const copy =
    locale === "en"
      ? {
          title: "Experience Marrakech",
          subtitle: "in one destination",
          lede:
            "Discover premium shopping, terrace dining, family entertainment, and Moroccan craftsmanship in one essential Menara Mall address.",
          shops: "Explore shops",
          contact: "Contact us",
          scroll: "Scroll",
        }
      : locale === "ar"
        ? {
            title: "عِش مراكش",
            subtitle: "في وجهة واحدة",
            lede:
              "اكتشف التسوق الراقي، والمطاعم ذات التراس، والترفيه العائلي، والحرف المغربية في عنوان واحد لا غنى عنه داخل منارة مول.",
            shops: "استكشف المتاجر",
            contact: "اتصل بنا",
            scroll: "مرر",
          }
        : {
            title: "Vivez Marrakech",
            subtitle: "en une seule destination",
            lede:
              "Decouvrez shopping premium, restaurants en terrasse, loisirs en famille et artisanat marocain au sein d'une adresse incontournable, au coeur de Menara Mall.",
            shops: "Explorer les boutiques",
            contact: "Contactez-nous",
            scroll: "Defiler",
          };
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
    [1, reduce ? 1 : 1.05],
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
            initial={
              reduce
                ? { opacity: 1, scale: 1.04, y: "0%" }
                : { opacity: 0, scale: 1.02, y: "4%" }
            }
            animate={{
              opacity: 1,
              scale: reduce ? 1.04 : 1.18,
              y: reduce ? "0%" : "-3%",
            }}
            exit={{
              opacity: 0,
              scale: reduce ? 1.04 : 1.12,
              y: reduce ? "0%" : "-1%",
            }}
            transition={{
              opacity: { duration: reduce ? 0.45 : 1.2, ease: [0.22, 1, 0.36, 1] },
              scale: { duration: reduce ? 0.45 : 6.5, ease: [0.16, 1, 0.3, 1] },
              y: { duration: reduce ? 0.45 : 6.5, ease: [0.16, 1, 0.3, 1] },
            }}
            className="absolute inset-0 will-change-transform"
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
                className="block h-full rounded-full bg-brand-soft"
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
                className="eyebrow text-brand-soft"
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
                {copy.title}
                <span className="mt-2 block text-white/92">
                  {copy.subtitle}
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
                className="mt-7 h-px w-28 origin-left bg-gradient-to-r from-brand-soft via-brand-soft/70 to-transparent"
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
                {copy.lede}
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
                  variant="brand"
                  size="lg"
                  icon="arrow-right"
                  className="shadow-[0_24px_50px_-22px_rgba(180,58,50,0.5)]"
                >
                  {copy.shops}
                </Button>
                <Button href="/contact" variant="light" size="lg" icon="mail">
                  {copy.contact}
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
                {/* Top hairline sheen + ambient brand glow */}
                <div className="pointer-events-none absolute inset-x-6 top-0 h-px bg-gradient-to-r from-transparent via-white/45 to-transparent" />
                <div className="pointer-events-none absolute -right-12 -top-12 h-44 w-44 rounded-full bg-brand/25 blur-3xl" />
                <div className="pointer-events-none absolute -bottom-16 -left-10 h-40 w-40 rounded-full bg-clay/25 blur-3xl" />

              </div>
            </motion.aside>
          </div>

        </Container>
      </motion.div>

      <div className="absolute inset-x-0 bottom-5 z-10 hidden justify-center sm:flex">
        <motion.span
          animate={reduce ? {} : { y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          className="hero-scroll-cue hero-scroll-cue--brand text-[0.65rem] uppercase tracking-[0.3em] text-white/50"
        >
          {copy.scroll}
        </motion.span>
      </div>
    </section>
  );
}
