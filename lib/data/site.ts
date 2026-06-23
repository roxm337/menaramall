import type { OpeningHours } from "@/lib/types";

/**
 * Global site configuration.
 *
 * Official public information is sourced from https://www.menaramall.com/.
 * Some operational details, such as phone number, unit locations, parking rates
 * and Ramadan/public-holiday variations, are not currently published there.
 */
export const site = {
  name: "Menara Mall",
  shortName: "Menara",
  city: "Marrakech",
  country: "Morocco",
  tagline: "Experience Marrakech in One Destination",
  description:
    "A lifestyle destination on Avenue Mohamed VI — shopping, dining, Kidzo, Le Souq Al Madinah and visitor experiences in Marrakech.",
  url: "https://www.menaramall.com",
  address: {
    street: "Avenue Mohamed VI",
    district: "",
    city: "Marrakech",
    postalCode: "",
    country: "Morocco",
  },
  geo: { lat: 31.6186366, lng: -8.0092535 },
  phone: "" as string,
  email: "info@menaramall.com",
  leasingEmail: "info@menaramall.com",
  eventsEmail: "info@menaramall.com",
  social: {
    instagram: "https://instagram.com",
    facebook: "https://facebook.com",
    tiktok: "",
    youtube: "",
  },
} as const;

/** Shops trading hours from the official footer (Mon-first). */
export const mallHours: OpeningHours = [
  { open: "10:00", close: "22:00" }, // Mon
  { open: "10:00", close: "22:00" }, // Tue
  { open: "10:00", close: "22:00" }, // Wed
  { open: "10:00", close: "22:00" }, // Thu
  { open: "10:00", close: "22:00" }, // Fri
  { open: "10:00", close: "22:00" }, // Sat
  { open: "10:00", close: "22:00" }, // Sun
];

/** Food Court & Kidzo hours from the official footer (Mon-first). */
export const foodCourtHours: OpeningHours = [
  { open: "10:00", close: "00:00" },
  { open: "10:00", close: "00:00" },
  { open: "10:00", close: "00:00" },
  { open: "10:00", close: "00:00" },
  { open: "10:00", close: "01:00" },
  { open: "10:00", close: "01:00" },
  { open: "10:00", close: "00:00" },
];

/** Carrefour Market hours from the official footer (Mon-first). */
export const carrefourHours: OpeningHours = [
  { open: "09:00", close: "23:00" },
  { open: "09:00", close: "23:00" },
  { open: "09:00", close: "23:00" },
  { open: "09:00", close: "23:00" },
  { open: "09:00", close: "23:00" },
  { open: "09:00", close: "23:00" },
  { open: "09:00", close: "23:00" },
];

export const primaryNav = [
  { label: "Shops", href: "/shops" },
  { label: "Dining", href: "/dining" },
  { label: "Entertainment", href: "/entertainment" },
  { label: "Le Souk", href: "/le-souk" },
  { label: "Events", href: "/events" },
] as const;

export const footerNav = {
  explore: [
    { label: "Shops", href: "/shops" },
    { label: "Dining", href: "/dining" },
    { label: "Entertainment", href: "/entertainment" },
    { label: "Le Souk", href: "/le-souk" },
    { label: "Events", href: "/events" },
    { label: "Offers", href: "/offers" },
  ],
  visit: [
    { label: "Services", href: "/services" },
    { label: "Search", href: "/search" },
    { label: "Contact", href: "/contact" },
  ],
  business: [
    { label: "Leasing & Partnerships", href: "/leasing" },
    { label: "Events & Activations", href: "/leasing#events" },
    { label: "Media & Advertising", href: "/leasing#media" },
    { label: "Contact", href: "/contact" },
  ],
} as const;

export const legalNav = [
  { label: "Privacy Policy", href: "/contact" },
  { label: "Terms of Use", href: "/contact" },
  { label: "Cookie Preferences", href: "/contact" },
] as const;

export const locales = [
  { code: "en", label: "English", dir: "ltr" },
  { code: "fr", label: "Français", dir: "ltr" },
  { code: "ar", label: "العربية", dir: "rtl" },
] as const;
