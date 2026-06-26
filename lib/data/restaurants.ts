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
  ["Happy Yog", ["Dessert", "Yaourt glace · Crepes"]],
  ["Le Box", ["Restauration rapide", "Sushi · Burgers · Pates"]],
  ["Bollywood Café", ["Restaurant", "Indien"]],
  ["Pizza Factory", ["Restauration rapide", "Pizza"]],
  ["Bella Italia", ["Restaurant", "Italien"]],
  ["Tacos Français", ["Restauration rapide", "Tacos francais"]],
  ["Kebab & Tacos", ["Restauration rapide", "Kebab · Tacos"]],
  ["Oriental Legend", ["Dessert", "Glace artisanale"]],
  ["Alwardeh Alshamieh", ["Dessert", "Patisseries orientales"]],
  ["Burger King", ["Restauration rapide", "Burgers"]],
  ["Kaspas Desserts", ["Dessert", "Desserts · Milkshakes"]],
  ["Costa Coffee", ["Cafe", "Cafe · Patisseries"]],
  ["Carteer Square", ["Restauration rapide", "Kebabs · Pizza · Pates"]],
  ["Victor", ["Restaurant", "Marocain · International"]],
  ["Kasbah Café", ["Cafe", "Marocain · International"]],
  ["PAUL", ["Cafe", "Boulangerie francaise"]],
  ["Papa John’s", ["Restauration rapide", "Pizza · Tex-Mex"]],
  ["Venezia Ice", ["Dessert", "Glace artisanale"]],
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

const officialRestaurants: Restaurant[] = sourceRestaurants.map((item) => {
  const name = item.title.trim();
  const [type, cuisine] = restaurantMeta.get(name) ?? ["Restaurant", "Restauration"];

  return {
    id: "r-official-" + item.id,
    name,
    slug: slugify(name),
    monogram: monogram(name),
    cuisine,
    type,
    floor: "Food Court",
    locationLabel: "Menara Mall · Restaurants et cafes",
    description: item.description.trim(),
    openingHours: dining,
    reservationUrl: "/contact",
    featured: featuredRestaurants.has(name),
    tags: [type, "Food Court"],
    heroArt: name + " a Menara Mall Marrakech",
    imageSrc: item.imageUrl,
    gallery: [item.imageUrl],
  };
});

const shawarmaAvenue: Restaurant = {
  id: "r-local-shawarma-avenue",
  name: "Shawarma Avenue",
  slug: "shawarma-avenue",
  monogram: "SA",
  cuisine: "Shawarma · Street food",
  type: "Restauration rapide",
  floor: "Food Court",
  locationLabel: "Menara Mall · Restaurants et cafes",
  description:
    "Shawarma Avenue rejoint Menara Mall avec un savoir-faire construit depuis 1999. La maison propose des shawarmas prepares avec des recettes authentiques, des ingredients de qualite et un esprit street food genereux, dans une adresse pensee pour les pauses rapides et gourmandes.",
  openingHours: dining,
  reservationUrl: "/contact",
  featured: true,
  tags: ["New", "Ouverture 26/06", "Restauration rapide", "Food Court"],
  heroArt: "Shawarma Avenue a Menara Mall Marrakech",
  imageSrc: "/restaurants/shawarmaavenue/harat.png",
  videoSrc:
    "/restaurants/shawarmaavenue/SnapReels.Net_AQMZhzZzV1hRCziMaEIsDfAXvEb3y75u3MWbBAGBGc2LTW7yeQeSYBAY1tKWK7KRVN6UdLbs_iLgt1ZQyNO2p15YQghQS47zH5E_2pE.mp4",
  videoPoster: "/restaurants/shawarmaavenue/harat.png",
  gallery: [
    "/restaurants/shawarmaavenue/harat.png",
    "/restaurants/shawarmaavenue/logo.jpg",
  ],
};

export const restaurants: Restaurant[] = [
  shawarmaAvenue,
  ...officialRestaurants,
];
export const cuisineTypes = ["Restaurant", "Cafe", "Restauration rapide", "Dessert"] as const;

export function getRestaurant(slug: string): Restaurant | undefined {
  return restaurants.find((r) => r.slug === slug);
}

export function relatedRestaurants(r: Restaurant, limit = 3): Restaurant[] {
  return restaurants
    .filter((x) => x.slug !== r.slug && x.type === r.type)
    .concat(restaurants.filter((x) => x.slug !== r.slug && x.type !== r.type))
    .slice(0, limit);
}
