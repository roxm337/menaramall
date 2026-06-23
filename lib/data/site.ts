import type { OpeningHours } from "@/lib/types";

/**
 * Global site configuration.
 *
 * NOTE FOR THE MENARA MALL TEAM — verify before launch:
 *  • exact street address & postal code
 *  • official phone / email
 *  • social handles
 *  • public trading hours (incl. Ramadan & public-holiday variations)
 */
export const site = {
  name: "Menara Mall",
  shortName: "Menara",
  city: "Marrakech",
  country: "Morocco",
  tagline: "Experience Marrakech in One Destination",
  description:
    "A premium lifestyle destination on Avenue Mohammed VI — shopping, dining, family entertainment and Moroccan discovery in the heart of Marrakech.",
  url: "https://www.menaramall.ma",
  // [VERIFY] address
  address: {
    street: "Avenue Mohammed VI",
    district: "Hivernage",
    city: "Marrakech",
    postalCode: "40000",
    country: "Morocco",
  },
  geo: { lat: 31.6225, lng: -8.0228 }, // [VERIFY] approximate
  // [VERIFY] contact details
  phone: "+212 5 24 00 00 00",
  email: "hello@menaramall.ma",
  leasingEmail: "leasing@menaramall.ma",
  eventsEmail: "events@menaramall.ma",
  social: {
    instagram: "https://instagram.com/menaramall",
    facebook: "https://facebook.com/menaramall",
    tiktok: "https://tiktok.com/@menaramall",
    youtube: "https://youtube.com/@menaramall",
  },
} as const;

/** Standard mall trading hours (Mon-first). [VERIFY] with management. */
export const mallHours: OpeningHours = [
  { open: "10:00", close: "22:00" }, // Mon
  { open: "10:00", close: "22:00" }, // Tue
  { open: "10:00", close: "22:00" }, // Wed
  { open: "10:00", close: "22:00" }, // Thu
  { open: "10:00", close: "23:00" }, // Fri
  { open: "10:00", close: "23:00" }, // Sat
  { open: "10:00", close: "22:00" }, // Sun
];

export const primaryNav = [
  { label: "Shops", href: "/shops" },
  { label: "Dining", href: "/dining" },
  { label: "Entertainment", href: "/entertainment" },
  { label: "Le Souk", href: "/le-souk" },
  { label: "Events", href: "/events" },
  { label: "Visit", href: "/visit" },
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
    { label: "Plan Your Visit", href: "/visit" },
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
