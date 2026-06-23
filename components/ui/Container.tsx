import { cn } from "@/lib/utils";

/** Page gutter + max-width wrapper. `size` controls the editorial measure. */
export function Container({
  children,
  className,
  size = "default",
  as: Tag = "div",
}: {
  children: React.ReactNode;
  className?: string;
  size?: "default" | "wide" | "narrow";
  as?: React.ElementType;
}) {
  return (
    <Tag
      className={cn(
        "mx-auto w-full px-5 sm:px-8 lg:px-12",
        size === "default" && "max-w-7xl",
        size === "wide" && "max-w-[96rem]",
        size === "narrow" && "max-w-3xl",
        className,
      )}
    >
      {children}
    </Tag>
  );
}
