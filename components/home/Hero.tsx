"use client";

import { useRef } from "react";
import Link from "next/link";
import { motion, useReducedMotion, useScroll, useTransform } from "framer-motion";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { OpenBadge } from "@/components/ui/OpeningHours";
import { Icon, type IconName } from "@/components/ui/Icon";
import { mallHours } from "@/lib/data/site";

const quickLinks: { label: string; href: string; icon: IconName }[] = [
  { label: "Shop", href: "/shops", icon: "bag" },
  { label: "Dine", href: "/dining", icon: "utensils" },
  { label: "Play", href: "/entertainment", icon: "play" },
  { label: "Visit", href: "/visit", icon: "map-pin" },
];

export function Hero() {
  const ref = useRef<HTMLDivElement>(null);
  const reduce = useReducedMotion();
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], ["0%", reduce ? "0%" : "18%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

  return (
    <section ref={ref} className="relative h-[100svh] min-h-[640px] overflow-hidden bg-charcoal">
      {/* Cinematic background plate with slow ken-burns + scroll parallax */}
      <motion.div style={{ y }} className="absolute inset-0">
        <div className="absolute inset-0 animate-kenburns">
          <div className="absolute inset-0 bg-[linear-gradient(135deg,#9c5a3c,#b76e4c_40%,#1f5c4a_120%)]" />
          <div className="zellige absolute inset-0 opacity-[0.14] mix-blend-overlay" />
          <div
            className="absolute inset-0 opacity-40 mix-blend-soft-light"
            style={{ backgroundImage: "radial-gradient(120% 90% at 70% 0%, rgba(255,255,255,0.85), transparent 55%)" }}
          />
        </div>
      </motion.div>
      <div className="absolute inset-0 bg-gradient-to-t from-charcoal/90 via-charcoal/35 to-charcoal/45" />

      <motion.div style={{ opacity }} className="relative z-10 flex h-full flex-col justify-end pb-16 sm:pb-20">
        <Container className="flex flex-col">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="eyebrow text-gold-soft"
          >
            Marrakech · Avenue Mohammed VI
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 28 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            className="mt-5 max-w-5xl text-balance text-white"
            style={{ fontSize: "var(--text-display)", lineHeight: "var(--text-display--line-height)" }}
          >
            Experience Marrakech in One Destination
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.22, ease: [0.16, 1, 0.3, 1] }}
            className="mt-6 max-w-xl text-lg leading-relaxed text-white/80 sm:text-xl"
          >
            Discover shopping, dining, leisure, Moroccan craft and family moments
            at the heart of Menara Mall.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.34, ease: [0.16, 1, 0.3, 1] }}
            className="mt-9 flex flex-col gap-3 sm:flex-row sm:items-center"
          >
            <Button href="/shops" variant="gold" size="lg" icon="arrow-right">
              Explore Shops
            </Button>
            <Button href="/visit" variant="light" size="lg" icon="map-pin">
              Plan Your Visit
            </Button>
            <span className="mt-1 inline-flex items-center sm:ml-4 sm:mt-0">
              <span className="rounded-full bg-white/10 px-4 py-2 backdrop-blur-sm">
                <OpenBadge hours={mallHours} className="!text-white" />
              </span>
            </span>
          </motion.div>

          {/* Quick links */}
          <motion.nav
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.46, ease: [0.16, 1, 0.3, 1] }}
            aria-label="Quick links"
            className="mt-12 grid grid-cols-2 gap-px overflow-hidden rounded-2xl bg-white/10 ring-1 ring-white/15 sm:max-w-2xl sm:grid-cols-4"
          >
            {quickLinks.map((q) => (
              <Link
                key={q.href}
                href={q.href}
                className="group flex items-center gap-3 bg-charcoal/20 px-5 py-4 text-white backdrop-blur-sm transition-colors hover:bg-white/10"
              >
                <Icon name={q.icon} size={20} className="text-gold-soft" />
                <span className="text-sm font-medium">{q.label}</span>
                <Icon name="arrow-up-right" size={15} className="ml-auto opacity-0 transition-opacity group-hover:opacity-100" />
              </Link>
            ))}
          </motion.nav>
        </Container>
      </motion.div>

      {/* Scroll cue */}
      <div className="absolute inset-x-0 bottom-5 z-10 hidden justify-center sm:flex">
        <motion.span
          animate={reduce ? {} : { y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          className="text-[0.65rem] uppercase tracking-[0.3em] text-white/50"
        >
          Scroll
        </motion.span>
      </div>
    </section>
  );
}
