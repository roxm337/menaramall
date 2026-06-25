import Image from "next/image";
import Link from "next/link";
import { cn } from "@/lib/utils";

export function Logo({
  tone = "dark",
  compact = false,
  className,
}: {
  tone?: "dark" | "light";
  compact?: boolean;
  className?: string;
}) {
  const src = tone === "light" ? "/logo_white.jpeg" : "/logo_red.png";
  const width = compact ? 140 : 176;
  const height = compact ? 44 : 56;

  return (
    <Link
      href="/"
      aria-label="Menara Mall — home"
      className={cn(
        "group inline-flex items-center transition-all duration-500",
        className,
      )}
    >
      <Image
        src={src}
        alt="Menara Mall"
        width={width}
        height={height}
        priority
        className={cn(
          "h-auto w-auto object-contain transition-all duration-500",
          compact ? "max-h-11" : "max-h-14",
        )}
      />
    </Link>
  );
}
