export function CardSkeleton() {
  return (
    <div className="overflow-hidden rounded-[var(--radius-xl2)] bg-white ring-1 ring-charcoal/8">
      <div className="skeleton aspect-[4/3] w-full" />
      <div className="space-y-3 p-6">
        <div className="skeleton h-6 w-2/3 rounded-full" />
        <div className="skeleton h-3 w-1/3 rounded-full" />
        <div className="skeleton h-3 w-full rounded-full" />
        <div className="skeleton h-3 w-5/6 rounded-full" />
      </div>
    </div>
  );
}

export function CardSkeletonGrid({ count = 6 }: { count?: number }) {
  return (
    <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
      {Array.from({ length: count }).map((_, i) => (
        <CardSkeleton key={i} />
      ))}
    </div>
  );
}
