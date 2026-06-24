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
  country: "Maroc",
  tagline: "Vivez Marrakech en une seule destination",
  description:
    "Une destination lifestyle sur l'avenue Mohamed VI : shopping, restauration, Kidzo et Le Souk Al Madinah a Marrakech.",
  url: "https://www.menaramall.com",
  address: {
    street: "Avenue Mohamed VI",
    district: "",
    city: "Marrakech",
    postalCode: "",
    country: "Maroc",
  },
  geo: { lat: 31.6186366, lng: -8.0092535 },
  phone: "" as string,
  email: "info@menaramall.com",
  leasingEmail: "info@menaramall.com",
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
  { label: "Boutiques", href: "/shops" },
  { label: "Restaurants", href: "/dining" },
  { label: "Kidzo", href: "/entertainment" },
  { label: "Le Souk", href: "/le-souk" },
] as const;

export const footerNav = {
  explore: [
    { label: "Boutiques", href: "/shops" },
    { label: "Restaurants", href: "/dining" },
    { label: "Kidzo", href: "/entertainment" },
    { label: "Le Souk", href: "/le-souk" },
    { label: "Offres", href: "/offers" },
  ],
  essentials: [
    { label: "Services", href: "/services" },
    { label: "Recherche", href: "/search" },
    { label: "Contact", href: "/contact" },
  ],
  business: [
    { label: "Location & partenariats", href: "/leasing" },
    { label: "Medias & publicite", href: "/leasing#media" },
    { label: "Contact", href: "/contact" },
  ],
} as const;

export const legalNav = [
  { label: "Politique de confidentialite", href: "/contact" },
  { label: "Conditions d'utilisation", href: "/contact" },
  { label: "Preferences cookies", href: "/contact" },
] as const;

export const locales = [
  { code: "fr", label: "Français", dir: "ltr" },
  { code: "en", label: "English", dir: "ltr" },
  { code: "ar", label: "العربية", dir: "rtl" },
] as const;
