import type { OpeningHours, Restaurant, RestaurantType } from "@/lib/types";
import { sourceRestaurants } from "@/lib/data/source-api";

const dining: OpeningHours = [
  { open: "10:00", close: "00:00" },
  { open: "10:00", close: "00:00" },
  { open: "10:00", close: "00:00" },
  { open: "10:00", close: "00:00" },
  { open: "10:00", close: "01:00" },
  { open: "10:00", close: "01:00" },
  { open: "10:00", close: "00:00" },
];

const featuredRestaurants = new Set(["PAUL", "Burger King", "Costa Coffee", "Kasbah Café", "Papa John’s"]);
const restaurantMeta = new Map<string, [RestaurantType, string]>([
  ["Happy Yog", ["Dessert", "Frozen yogurt · Crêpes"]],
  ["Le Box", ["Fast Food", "Sushi · Burgers · Pasta"]],
  ["Bollywood Café", ["Restaurant", "Indian"]],
  ["Pizza Factory", ["Fast Food", "Pizza"]],
  ["Bella Italia", ["Restaurant", "Italian"]],
  ["Tacos Français", ["Fast Food", "French tacos"]],
  ["Kebab & Tacos", ["Fast Food", "Kebab · Tacos"]],
  ["Oriental Legend", ["Dessert", "Artisanal ice cream"]],
  ["Alwardeh Alshamieh", ["Dessert", "Oriental pastries"]],
  ["Burger King", ["Fast Food", "Burgers"]],
  ["Kaspas Desserts", ["Dessert", "Desserts · Milkshakes"]],
  ["Costa Coffee", ["Café", "Coffee · Pastries"]],
  ["Carteer Square", ["Fast Food", "Kebabs · Pizza · Pasta"]],
  ["Victor", ["Restaurant", "Moroccan · International"]],
  ["Kasbah Café", ["Café", "Moroccan · International"]],
  ["PAUL", ["Café", "French bakery"]],
  ["Papa John’s", ["Fast Food", "Pizza · Tex-Mex"]],
  ["Venezia Ice", ["Dessert", "Artisanal ice cream"]],
]);

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

export const restaurants: Restaurant[] = sourceRestaurants.map((item) => {
  const name = item.title.trim();
  const [type, cuisine] = restaurantMeta.get(name) ?? ["Restaurant", "Dining"];

  return {
    id: "r-official-" + item.id,
    name,
    slug: slugify(name),
    monogram: monogram(name),
    cuisine,
    type,
    floor: "Food Court",
    locationLabel: "Menara Mall · Restaurants & cafés",
    description: item.description.trim(),
    openingHours: dining,
    reservationUrl: "/contact",
    featured: featuredRestaurants.has(name),
    tags: [type, "Food Court"],
    heroArt: name + " at Menara Mall Marrakech",
    imageSrc: item.imageUrl,
    gallery: [item.imageUrl],
  };
});

export const cuisineTypes = ["Restaurant", "Café", "Fast Food", "Dessert"] as const;

export function getRestaurant(slug: string): Restaurant | undefined {
  return restaurants.find((r) => r.slug === slug);
}

export function relatedRestaurants(r: Restaurant, limit = 3): Restaurant[] {
  return restaurants
    .filter((x) => x.slug !== r.slug && x.type === r.type)
    .concat(restaurants.filter((x) => x.slug !== r.slug && x.type !== r.type))
    .slice(0, limit);
}
