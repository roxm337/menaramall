import type { SVGProps } from "react";

/**
 * A small, consistent line-icon set drawn inline (no icon dependency, no
 * network). Stroke uses `currentColor` so icons inherit text colour.
 */
const paths: Record<string, React.ReactNode> = {
  search: <><circle cx="11" cy="11" r="7" /><path d="m20 20-3.5-3.5" /></>,
  menu: <><path d="M3 6h18M3 12h18M3 18h18" /></>,
  close: <><path d="M6 6l12 12M18 6 6 18" /></>,
  "arrow-right": <><path d="M5 12h14M13 6l6 6-6 6" /></>,
  "arrow-up-right": <><path d="M7 17 17 7M8 7h9v9" /></>,
  "chevron-down": <><path d="m6 9 6 6 6-6" /></>,
  "chevron-right": <><path d="m9 6 6 6-6 6" /></>,
  "map-pin": <><path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" /><circle cx="12" cy="10" r="3" /></>,
  clock: <><circle cx="12" cy="12" r="9" /><path d="M12 7v5l3 2" /></>,
  phone: <><path d="M5 4h4l2 5-3 2a12 12 0 0 0 5 5l2-3 5 2v4a2 2 0 0 1-2 2A16 16 0 0 1 3 6a2 2 0 0 1 2-2Z" /></>,
  mail: <><rect x="3" y="5" width="18" height="14" rx="2" /><path d="m3 7 9 6 9-6" /></>,
  globe: <><circle cx="12" cy="12" r="9" /><path d="M3 12h18M12 3c2.5 2.5 2.5 15 0 18M12 3c-2.5 2.5-2.5 15 0 18" /></>,
  instagram: <><rect x="3" y="3" width="18" height="18" rx="5" /><circle cx="12" cy="12" r="4" /><circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none" /></>,
  facebook: <><path d="M14 8h2V5h-2a3 3 0 0 0-3 3v2H9v3h2v6h3v-6h2l1-3h-3V8a1 1 0 0 1 1-1Z" /></>,
  tiktok: <><path d="M15 4c.5 2.5 2 4 4.5 4.2V11C17.7 11 16 10.3 15 9.2V15a5 5 0 1 1-5-5v2.7a2.3 2.3 0 1 0 2.3 2.3V4Z" /></>,
  youtube: <><rect x="3" y="6" width="18" height="12" rx="3" /><path d="m11 9 4 3-4 3z" fill="currentColor" stroke="none" /></>,
  car: <><path d="M5 13l1.5-4.5A2 2 0 0 1 8.4 7h7.2a2 2 0 0 1 1.9 1.5L19 13M5 13h14v4H5z" /><circle cx="8" cy="17" r="1.4" /><circle cx="16" cy="17" r="1.4" /></>,
  shield: <><path d="M12 3l7 3v5c0 4.5-3 8-7 10-4-2-7-5.5-7-10V6z" /><path d="m9 12 2 2 4-4" /></>,
  info: <><circle cx="12" cy="12" r="9" /><path d="M12 11v5M12 8h.01" /></>,
  baby: <><circle cx="12" cy="7" r="3" /><path d="M6 21c0-4 3-6 6-6s6 2 6 6M9 7h.01M15 7h.01" /></>,
  moon: <><path d="M20 14a8 8 0 1 1-9-11 6 6 0 0 0 9 11Z" /></>,
  accessibility: <><circle cx="12" cy="5" r="1.6" /><path d="M5 8h14M9 8v4l-2 6M15 8v4l2 6M12 12v0" /></>,
  wifi: <><path d="M3 9a15 15 0 0 1 18 0M6 12.5a10 10 0 0 1 12 0M9 16a5 5 0 0 1 6 0" /><circle cx="12" cy="19" r="1" fill="currentColor" stroke="none" /></>,
  banknote: <><rect x="3" y="7" width="18" height="10" rx="2" /><circle cx="12" cy="12" r="2" /><path d="M6 10v0M18 14v0" /></>,
  droplet: <><path d="M12 3s6 6 6 10a6 6 0 0 1-12 0c0-4 6-10 6-10Z" /></>,
  calendar: <><rect x="3" y="5" width="18" height="16" rx="2" /><path d="M3 9h18M8 3v4M16 3v4" /></>,
  sparkles: <><path d="M12 4l1.6 4.4L18 10l-4.4 1.6L12 16l-1.6-4.4L6 10l4.4-1.6zM18 15l.8 2 2 .8-2 .8-.8 2-.8-2-2-.8 2-.8z" /></>,
  tag: <><path d="M4 12V5a1 1 0 0 1 1-1h7l8 8-7 7z" /><circle cx="8.5" cy="8.5" r="1.3" /></>,
  check: <><path d="m5 12 4 4 10-10" /></>,
  star: <><path d="m12 4 2.4 5 5.6.7-4 3.9 1 5.4-5-2.7-5 2.7 1-5.4-4-3.9 5.6-.7z" /></>,
  utensils: <><path d="M5 3v7a2 2 0 0 0 4 0V3M7 13v8M17 3c-1.5 0-2.5 2-2.5 5s1 4 2.5 4m0-9v18" /></>,
  bag: <><path d="M6 8h12l1 12H5zM9 8V6a3 3 0 0 1 6 0v2" /></>,
  ticket: <><path d="M4 7h16v3a2 2 0 0 0 0 4v3H4v-3a2 2 0 0 0 0-4z" /><path d="M14 7v10" strokeDasharray="2 2" /></>,
  play: <><circle cx="12" cy="12" r="9" /><path d="m10 9 5 3-5 3z" fill="currentColor" stroke="none" /></>,
  heart: <><path d="M12 20s-7-4.5-7-9.5A3.5 3.5 0 0 1 12 7a3.5 3.5 0 0 1 7 3.5C19 15.5 12 20 12 20Z" /></>,
  compass: <><circle cx="12" cy="12" r="9" /><path d="m15 9-2 4-4 2 2-4z" /></>,
  bus: <><rect x="4" y="5" width="16" height="12" rx="2" /><path d="M4 11h16M8 17v2M16 17v2" /><circle cx="8" cy="14" r="1" fill="currentColor" stroke="none" /><circle cx="16" cy="14" r="1" fill="currentColor" stroke="none" /></>,
  download: <><path d="M12 4v10m0 0 4-4m-4 4-4-4M5 19h14" /></>,
  plus: <><path d="M12 5v14M5 12h14" /></>,
  minus: <><path d="M5 12h14" /></>,
};

export type IconName = keyof typeof paths;

interface IconProps extends SVGProps<SVGSVGElement> {
  name: IconName;
  size?: number;
}

export function Icon({ name, size = 20, ...props }: IconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.6}
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      {...props}
    >
      {paths[name]}
    </svg>
  );
}
