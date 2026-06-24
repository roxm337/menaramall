"use client";

import { useEffect, useRef, useState } from "react";
import { Icon } from "@/components/ui/Icon";
import { cn } from "@/lib/utils";

export function Carousel({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const [paused, setPaused] = useState(false);

  const scrollByAmount = (direction: 1 | -1) => {
    const el = ref.current;
    if (!el) return;
    el.scrollBy({
      left: direction * Math.round(el.clientWidth * 0.85),
      behavior: "smooth",
    });
  };

  useEffect(() => {
    if (paused) return;

    const id = window.setInterval(() => {
      const el = ref.current;
      if (!el) return;

      const amount = Math.round(el.clientWidth * 0.85);
      const maxScrollLeft = el.scrollWidth - el.clientWidth;
      const nextLeft = el.scrollLeft + amount;

      el.scrollTo({
        left: nextLeft >= maxScrollLeft - 4 ? 0 : nextLeft,
        behavior: "smooth",
      });
    }, 3500);

    return () => window.clearInterval(id);
  }, [paused]);

  return (
    <div
      className={cn("relative", className)}
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      <div className="absolute right-0 top-[-4.5rem] hidden gap-2 sm:flex">
        <button
          type="button"
          onClick={() => scrollByAmount(-1)}
          aria-label="Precedent"
          className="flex h-11 w-11 items-center justify-center rounded-full border border-charcoal/10 bg-white text-charcoal transition-colors hover:border-charcoal/30"
        >
          <Icon name="chevron-left" size={18} />
        </button>
        <button
          type="button"
          onClick={() => scrollByAmount(1)}
          aria-label="Suivant"
          className="flex h-11 w-11 items-center justify-center rounded-full border border-charcoal/10 bg-white text-charcoal transition-colors hover:border-charcoal/30"
        >
          <Icon name="chevron-right" size={18} />
        </button>
      </div>

      <div
        ref={ref}
        className="flex snap-x snap-mandatory gap-6 overflow-x-auto pb-3 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
      >
        {children}
      </div>
    </div>
  );
}
