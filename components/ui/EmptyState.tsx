import { Icon, type IconName } from "./Icon";

export function EmptyState({
  icon = "search",
  title,
  message,
  action,
}: {
  icon?: IconName;
  title: string;
  message: string;
  action?: React.ReactNode;
}) {
  return (
    <div className="flex flex-col items-center justify-center rounded-[var(--radius-xl2)] border border-dashed border-charcoal/15 bg-cream/60 px-6 py-20 text-center">
      <span className="mb-5 flex h-14 w-14 items-center justify-center rounded-full bg-charcoal/5 text-clay">
        <Icon name={icon} size={26} />
      </span>
      <h3 className="text-2xl text-charcoal">{title}</h3>
      <p className="mt-2 max-w-sm text-sm text-stone">{message}</p>
      {action && <div className="mt-6">{action}</div>}
    </div>
  );
}
