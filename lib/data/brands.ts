import type { Brand, BrandCategory, Floor, OpeningHours } from "@/lib/types";
import { sourceShopping, sourceShoppingCategories } from "@/lib/data/source-api";

const std: OpeningHours = [
  { open: "10:00", close: "22:00" },
  { open: "10:00", close: "22:00" },
  { open: "10:00", close: "22:00" },
  { open: "10:00", close: "22:00" },
  { open: "10:00", close: "22:00" },
  { open: "10:00", close: "22:00" },
  { open: "10:00", close: "22:00" },
];

const grocery: OpeningHours = [
  { open: "09:00", close: "23:00" },
  { open: "09:00", close: "23:00" },
  { open: "09:00", close: "23:00" },
  { open: "09:00", close: "23:00" },
  { open: "09:00", close: "23:00" },
  { open: "09:00", close: "23:00" },
  { open: "09:00", close: "23:00" },
];

const featuredBrands = new Set(["Carrefour Market", "DeFacto", "LC WAIKIKI", "Yves Rocher", "MINISO", "Uno"]);

function slugify(value: string): string {
  return value
    .trim()
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/[’']/g, "")
    .replace(/&/g, "and")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "");
}

function monogram(value: string): string {
  return value
    .replace(/[’']/g, "")
    .trim()
    .split(/\s+/)
    .slice(0, 2)
    .map((part) => part[0])
    .join("")
    .toUpperCase()
    .slice(0, 3) || "MM";
}

function categoryFor(title: string, sourceCategory: string): BrandCategory {
  const lower = title.toLowerCase();
  if (title === "Carrefour Market") return "Supermarche";
  if (sourceCategory === "Beauté et bien être") return "Beaute";
  if (sourceCategory === "High-Tech & Accessoires") return "High-Tech";
  if (sourceCategory === "Jouets & Loisirs") return "Enfants";
  if (sourceCategory === "Supermarche") return "Supermarche";
  if (sourceCategory === "Divers") return lower.includes("galerie") ? "Artisanat marocain" : "Services";
  return "Mode";
}

function tagsFor(title: string, description: string, sourceCategory: string): string[] {
  const haystack = title + " " + description;
  const tags = [sourceCategory];
  if (/bijou|jewellery|jewelry/i.test(haystack)) tags.push("Bijoux");
  if (/barber|coiffure|salon/i.test(haystack)) tags.push("Salon");
  if (/apple|téléphone|telecom|accessoires|high-tech|vape/i.test(haystack)) tags.push("Tech");
  return [...new Set(tags)];
}

function floorFor(title: string): Floor {
  return title === "Carrefour Market" ? "Rez-de-chaussee" : "Galerie marchande";
}

export const brands: Brand[] = sourceShopping.map((item) => {
  const name = item.title.trim();
  const isCarrefour = name === "Carrefour Market";

  return {
    id: "b-official-" + item.id,
    name,
    slug: slugify(name),
    monogram: monogram(name),
    category: categoryFor(name, item.categorie),
    floor: floorFor(name),
    locationLabel: isCarrefour ? "Menara Mall · Carrefour Market" : "Menara Mall · Galerie marchande officielle",
    description: item.description.trim(),
    openingHours: isCarrefour ? grocery : std,
    featured: featuredBrands.has(name),
    tags: tagsFor(name, item.description, item.categorie),
    heroArt: name + " a Menara Mall Marrakech",
    imageSrc: item.imageUrl,
    gallery: [item.imageUrl],
  };
});

export const brandCategories = [
  "Mode",
  "Beaute",
  "Bijoux",
  "Enfants",
  "Maison",
  "Sport",
  "High-Tech",
  "Services",
  "Artisanat marocain",
  "Supermarche",
  "Loisirs",
] as const;

export const sourceBrandCategories = sourceShoppingCategories;
export const floors = ["Rez-de-chaussee", "1er etage", "2e etage", "Galerie marchande", "Food Court", "Le Souk"] as const;

export function getBrand(slug: string): Brand | undefined {
  return brands.find((b) => b.slug === slug);
}

export function relatedBrands(brand: Brand, limit = 3): Brand[] {
  return brands
    .filter((b) => b.slug !== brand.slug && b.category === brand.category)
    .concat(brands.filter((b) => b.slug !== brand.slug && b.category !== brand.category))
    .slice(0, limit);
}
