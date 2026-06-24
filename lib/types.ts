/**
 * Content models for Menara Mall.
 *
 * These mirror the CMS data structures so the sample data in `lib/data/*`
 * can be swapped for a headless CMS (Sanity, Contentful, Strapi…) without
 * touching the components. Every list page reads from these typed arrays.
 */

/** A single day's trading hours. `null` means closed that day. */
export interface DayHours {
  open: string; // "10:00"
  close: string; // "22:00"
}

/** Monday-first weekly schedule. Index 0 = Monday … 6 = Sunday. */
export type OpeningHours = (DayHours | null)[];

export type BrandCategory =
  | "Mode"
  | "Beaute"
  | "Bijoux"
  | "Enfants"
  | "Maison"
  | "Sport"
  | "High-Tech"
  | "Services"
  | "Artisanat marocain"
  | "Supermarche"
  | "Loisirs";

export type Floor =
  | "Rez-de-chaussee"
  | "1er etage"
  | "2e etage"
  | "Galerie marchande"
  | "Food Court"
  | "Le Souk";

export interface Brand {
  id: string;
  name: string;
  slug: string;
  /** Short uppercase monogram used by the art-directed logo placeholder. */
  monogram: string;
  category: BrandCategory;
  floor: Floor;
  locationLabel: string;
  description: string;
  openingHours: OpeningHours;
  phone?: string;
  website?: string;
  instagram?: string;
  featured?: boolean;
  tags?: string[];
  /** Art-direction note for the hero placeholder image. */
  heroArt: string;
  /** Official or CMS-hosted image URL. Falls back to `heroArt` placeholder when absent. */
  imageSrc?: string;
  gallery?: string[];
}

export type RestaurantType = "Restaurant" | "Cafe" | "Restauration rapide" | "Dessert";

export interface Restaurant {
  id: string;
  name: string;
  slug: string;
  monogram: string;
  cuisine: string;
  type: RestaurantType;
  floor: Floor;
  locationLabel: string;
  description: string;
  openingHours: OpeningHours;
  phone?: string;
  reservationUrl?: string;
  menuUrl?: string;
  featured?: boolean;
  tags?: string[];
  heroArt: string;
  imageSrc?: string;
  gallery?: string[];
}

export type OfferCategory =
  | "Mode"
  | "Beaute"
  | "Restauration"
  | "High-Tech"
  | "Famille"
  | "Maison";

export interface Offer {
  id: string;
  title: string;
  slug: string;
  brand: string;
  brandSlug?: string;
  description: string;
  validFrom: string;
  validUntil: string;
  terms: string;
  category: OfferCategory;
  featured?: boolean;
  heroArt: string;
}

export interface Service {
  id: string;
  title: string;
  /** Lucide-style icon key resolved in the Icon component. */
  icon: string;
  description: string;
  location: string;
}
