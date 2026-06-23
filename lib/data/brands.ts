import type { Brand, OpeningHours } from "@/lib/types";

// Standard retail hours, reused across most brands.
const std: OpeningHours = [
  { open: "10:00", close: "22:00" },
  { open: "10:00", close: "22:00" },
  { open: "10:00", close: "22:00" },
  { open: "10:00", close: "22:00" },
  { open: "10:00", close: "23:00" },
  { open: "10:00", close: "23:00" },
  { open: "10:00", close: "22:00" },
];

const grocery: OpeningHours = [
  { open: "09:00", close: "23:00" },
  { open: "09:00", close: "23:00" },
  { open: "09:00", close: "23:00" },
  { open: "09:00", close: "23:00" },
  { open: "09:00", close: "23:30" },
  { open: "09:00", close: "23:30" },
  { open: "09:00", close: "23:00" },
];

/**
 * Sample brand directory. Placeholder content written in a premium voice —
 * brand names are illustrative and must be confirmed by the Menara Mall team.
 */
export const brands: Brand[] = [
  {
    id: "b-carrefour",
    name: "Carrefour",
    slug: "carrefour",
    monogram: "CF",
    category: "Supermarket",
    floor: "Ground Floor",
    locationLabel: "Ground Floor · Anchor",
    description:
      "The mall's flagship hypermarket — fresh Moroccan produce, everyday essentials, international groceries and homeware under one expansive roof.",
    openingHours: grocery,
    phone: "+212 5 24 00 01 10",
    website: "https://www.carrefour.ma",
    featured: true,
    tags: ["Groceries", "Fresh produce", "Family"],
    heroArt: "Bright hypermarket aisle, abundant fresh produce, warm overhead light",
  },
  {
    id: "b-zara",
    name: "Zara",
    slug: "zara",
    monogram: "ZA",
    category: "Fashion",
    floor: "First Floor",
    locationLabel: "First Floor · East Wing",
    description:
      "Contemporary ready-to-wear for women, men and children, with the latest seasonal collections refreshed continuously.",
    openingHours: std,
    website: "https://www.zara.com",
    instagram: "https://instagram.com/zara",
    featured: true,
    tags: ["Womenswear", "Menswear", "Trending"],
    heroArt: "Minimalist fashion boutique interior, soft daylight on rails of clothing",
  },
  {
    id: "b-mango",
    name: "Mango",
    slug: "mango",
    monogram: "MG",
    category: "Fashion",
    floor: "First Floor",
    locationLabel: "First Floor · East Wing",
    description:
      "Mediterranean-inspired fashion with an effortless, elevated sensibility for the modern wardrobe.",
    openingHours: std,
    website: "https://shop.mango.com",
    featured: true,
    tags: ["Womenswear", "Editorial"],
    heroArt: "Warm-toned fashion showroom, linen garments, gallery lighting",
  },
  {
    id: "b-sephora",
    name: "Sephora",
    slug: "sephora",
    monogram: "SE",
    category: "Beauty",
    floor: "Ground Floor",
    locationLabel: "Ground Floor · Central Court",
    description:
      "A curated world of prestige skincare, fragrance and makeup with expert beauty advisors and live discovery stations.",
    openingHours: std,
    website: "https://www.sephora.com",
    instagram: "https://instagram.com/sephora",
    featured: true,
    tags: ["Skincare", "Fragrance", "Makeup"],
    heroArt: "Glossy beauty hall, backlit fragrance shelves, marble counters",
  },
  {
    id: "b-swarovski",
    name: "Swarovski",
    slug: "swarovski",
    monogram: "SW",
    category: "Jewelry",
    floor: "Ground Floor",
    locationLabel: "Ground Floor · Central Court",
    description:
      "Precision-cut crystal jewellery and accessories that catch the Marrakech light with quiet brilliance.",
    openingHours: std,
    website: "https://www.swarovski.com",
    tags: ["Crystal", "Gifts"],
    heroArt: "Jewel-box boutique, faceted crystal under focused spotlights",
  },
  {
    id: "b-mac",
    name: "M·A·C Cosmetics",
    slug: "mac-cosmetics",
    monogram: "MC",
    category: "Beauty",
    floor: "Ground Floor",
    locationLabel: "Ground Floor · Central Court",
    description:
      "Professional artistry makeup loved by makeup artists worldwide — bold colour, expert masterclasses and try-before-you-buy stations.",
    openingHours: std,
    website: "https://www.maccosmetics.com",
    tags: ["Makeup", "Masterclass"],
    heroArt: "Dark, dramatic makeup studio with mirror lights and colour palettes",
  },
  {
    id: "b-h-m",
    name: "H&M",
    slug: "h-and-m",
    monogram: "HM",
    category: "Fashion",
    floor: "First Floor",
    locationLabel: "First Floor · West Wing",
    description:
      "Accessible fashion and design for the whole family, from wardrobe staples to statement seasonal pieces.",
    openingHours: std,
    website: "https://www.hm.com",
    tags: ["Family", "Affordable"],
    heroArt: "Spacious high-street fashion floor, neat displays, bright light",
  },
  {
    id: "b-lc-waikiki",
    name: "LC Waikiki",
    slug: "lc-waikiki",
    monogram: "LC",
    category: "Fashion",
    floor: "First Floor",
    locationLabel: "First Floor · West Wing",
    description:
      "Everyday family fashion with great value — dependable essentials for women, men, kids and babies.",
    openingHours: std,
    tags: ["Family", "Kids"],
    heroArt: "Family clothing store, colourful kidswear section, friendly lighting",
  },
  {
    id: "b-defacto",
    name: "DeFacto",
    slug: "defacto",
    monogram: "DF",
    category: "Fashion",
    floor: "First Floor",
    locationLabel: "First Floor · West Wing",
    description:
      "Trend-led, easy-to-wear collections that move with the season at an approachable price.",
    openingHours: std,
    tags: ["Trending", "Casual"],
    heroArt: "Casual fashion store, denim wall, contemporary fixtures",
  },
  {
    id: "b-electroplanet",
    name: "Electroplanet",
    slug: "electroplanet",
    monogram: "EP",
    category: "Electronics",
    floor: "Ground Floor",
    locationLabel: "Ground Floor · West Wing",
    description:
      "Morocco's destination for electronics, smart home, appliances and gaming, with knowledgeable in-store specialists.",
    openingHours: std,
    website: "https://www.electroplanet.ma",
    featured: true,
    tags: ["Tech", "Appliances", "Gaming"],
    heroArt: "Modern electronics showroom, glowing screen wall, clean displays",
  },
  {
    id: "b-decathlon",
    name: "Decathlon",
    slug: "decathlon",
    monogram: "DC",
    category: "Sports",
    floor: "Second Floor",
    locationLabel: "Second Floor · North Wing",
    description:
      "Everything for sport and the outdoors — from football and fitness to hiking the Atlas Mountains.",
    openingHours: std,
    website: "https://www.decathlon.ma",
    tags: ["Sport", "Outdoor", "Family"],
    heroArt: "Bright sporting-goods hall, bicycles and equipment, active mood",
  },
  {
    id: "b-jacadi",
    name: "Jacadi Paris",
    slug: "jacadi-paris",
    monogram: "JA",
    category: "Kids",
    floor: "First Floor",
    locationLabel: "First Floor · Family Court",
    description:
      "Refined French childrenswear and nursery pieces crafted with timeless elegance and gentle fabrics.",
    openingHours: std,
    tags: ["Childrenswear", "Gifts"],
    heroArt: "Soft pastel childrenswear boutique, delicate folded garments",
  },
  {
    id: "b-yves-rocher",
    name: "Yves Rocher",
    slug: "yves-rocher",
    monogram: "YR",
    category: "Beauty",
    floor: "Ground Floor",
    locationLabel: "Ground Floor · Central Court",
    description:
      "Botanical beauty and skincare rooted in plant science — naturally derived rituals for face, body and hair.",
    openingHours: std,
    tags: ["Botanical", "Skincare"],
    heroArt: "Green-accented natural beauty store, botanical displays",
  },
  {
    id: "b-deco-maison",
    name: "Dar Déco",
    slug: "dar-deco",
    monogram: "DD",
    category: "Home",
    floor: "Second Floor",
    locationLabel: "Second Floor · North Wing",
    description:
      "Contemporary homeware with a Moroccan soul — textiles, tableware and décor to bring warmth to every room.",
    openingHours: std,
    tags: ["Homeware", "Décor"],
    heroArt: "Styled home-décor showroom, woven textiles and ceramics, warm light",
  },
  {
    id: "b-atlas-artisan",
    name: "Atlas Artisan",
    slug: "atlas-artisan",
    monogram: "AA",
    category: "Moroccan Craft",
    floor: "Ground Floor",
    locationLabel: "Ground Floor · Le Souk",
    description:
      "Handcrafted Moroccan treasures — leather, brass, ceramics and woven goods, each piece made by Marrakech artisans.",
    openingHours: std,
    featured: true,
    tags: ["Handmade", "Le Souk", "Gifts"],
    heroArt: "Artisan craft stall, brass lanterns and leather goods, amber glow",
  },
  {
    id: "b-attar-perfumes",
    name: "Maison Attar",
    slug: "maison-attar",
    monogram: "MA",
    category: "Moroccan Craft",
    floor: "Ground Floor",
    locationLabel: "Ground Floor · Le Souk",
    description:
      "A perfumer's atelier of traditional Moroccan attars, rose and orange-blossom essences, and bespoke fragrance blending.",
    openingHours: std,
    tags: ["Fragrance", "Le Souk", "Artisanal"],
    heroArt: "Apothecary perfume atelier, glass bottles, rose petals, soft amber light",
  },
];

export const brandCategories = [
  "Fashion",
  "Beauty",
  "Jewelry",
  "Kids",
  "Home",
  "Sports",
  "Electronics",
  "Services",
  "Moroccan Craft",
  "Supermarket",
  "Entertainment",
] as const;

export const floors = ["Ground Floor", "First Floor", "Second Floor"] as const;

export function getBrand(slug: string): Brand | undefined {
  return brands.find((b) => b.slug === slug);
}

export function relatedBrands(brand: Brand, limit = 3): Brand[] {
  return brands
    .filter((b) => b.slug !== brand.slug && b.category === brand.category)
    .concat(brands.filter((b) => b.slug !== brand.slug && b.category !== brand.category))
    .slice(0, limit);
}
