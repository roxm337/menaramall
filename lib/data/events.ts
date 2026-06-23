import type { MallEvent } from "@/lib/types";

/**
 * Sample editorial event calendar. Dates are illustrative placeholders —
 * the Menara Mall team should maintain these via the CMS.
 */
export const events: MallEvent[] = [
  {
    id: "e-souk-nights",
    title: "Souk Nights: Artisan Showcase",
    slug: "souk-nights-artisan-showcase",
    date: "2026-07-12",
    endDate: "2026-07-14",
    startTime: "18:00",
    endTime: "23:00",
    location: "Le Souk · Ground Floor",
    category: "Culture",
    description:
      "Three evenings celebrating Marrakech craftsmanship with live artisan demonstrations, music and limited-edition pieces.",
    longDescription:
      "Watch master artisans at work — leather, brass, ceramics and weaving — as Le Souk comes alive after dark. Each evening features live gnawa-inspired music, mint-tea pouring and a curated pop-up of one-of-a-kind pieces created on site.",
    registrationUrl: "/contact",
    featured: true,
    heroArt: "Evening souk lit with lanterns, artisans at work, festive crowd",
  },
  {
    id: "e-summer-family",
    title: "Summer Family Festival",
    slug: "summer-family-festival",
    date: "2026-07-26",
    startTime: "11:00",
    endTime: "20:00",
    location: "Central Court & Kidzo",
    category: "Family",
    description:
      "A full day of shows, games and hands-on workshops for children, with character meet-and-greets across the mall.",
    longDescription:
      "From storytelling corners to science shows and a roaming parade, the Summer Family Festival turns the Central Court into a playground for all ages. Kidzo hosts free trial sessions throughout the day.",
    registrationUrl: "/contact",
    featured: true,
    heroArt: "Joyful family festival, balloons and stage, bright daytime light",
  },
  {
    id: "e-fashion-edit",
    title: "The Autumn Fashion Edit",
    slug: "autumn-fashion-edit",
    date: "2026-09-19",
    startTime: "17:00",
    endTime: "21:00",
    location: "Central Court",
    category: "Fashion",
    description:
      "An evening runway preview of the season's collections from Menara Mall's leading fashion houses.",
    longDescription:
      "Discover the autumn/winter looks first. Stylists curate head-to-toe edits live on the runway, with personal-styling sessions and exclusive same-night offers from participating boutiques.",
    registrationUrl: "/contact",
    featured: true,
    heroArt: "Runway show at dusk, models, warm spotlights, elegant audience",
  },
  {
    id: "e-jazz-terrace",
    title: "Jazz on the Terrace",
    slug: "jazz-on-the-terrace",
    date: "2026-08-08",
    startTime: "20:00",
    endTime: "23:30",
    location: "Second Floor · Terrace",
    category: "Music",
    description:
      "Live jazz under the Marrakech sky, paired with a special menu from our terrace restaurants.",
    registrationUrl: "/contact",
    heroArt: "Open-air terrace jazz trio at night, string lights, city skyline",
  },
  {
    id: "e-craft-workshop",
    title: "Zellige Mosaic Workshop",
    slug: "zellige-mosaic-workshop",
    date: "2026-08-23",
    startTime: "15:00",
    endTime: "17:30",
    location: "Le Souk · Atelier",
    category: "Workshop",
    description:
      "A hands-on workshop with a master mosaicist — design and take home your own zellige tile.",
    registrationUrl: "/contact",
    heroArt: "Hands placing coloured zellige tiles, workshop table, focused light",
  },
  {
    id: "e-back-to-school",
    title: "Back-to-School Days",
    slug: "back-to-school-days",
    date: "2026-09-05",
    endDate: "2026-09-13",
    startTime: "10:00",
    endTime: "22:00",
    location: "Across the Mall",
    category: "Seasonal",
    description:
      "A week of family offers, kids' activities and everything you need for the new school year.",
    registrationUrl: "/offers",
    heroArt: "Bright back-to-school display, stationery and kidswear, cheerful",
  },
  {
    id: "e-eid-celebration",
    title: "Eid Celebration Bazaar",
    slug: "eid-celebration-bazaar",
    date: "2026-03-20",
    startTime: "11:00",
    endTime: "23:00",
    location: "Central Court & Le Souk",
    category: "Seasonal",
    description:
      "A festive bazaar of gifts, sweets and décor to celebrate Eid with family. (Past event)",
    heroArt: "Festive Eid bazaar, gift stalls, lanterns and sweets, warm crowd",
  },
];

export const eventCategories = [
  "Family",
  "Culture",
  "Music",
  "Fashion",
  "Seasonal",
  "Workshop",
] as const;

export function getEvent(slug: string): MallEvent | undefined {
  return events.find((e) => e.slug === slug);
}

/** Reference "today" for splitting upcoming vs past. Uses the system clock. */
export function isUpcoming(e: MallEvent, now = new Date()): boolean {
  const end = new Date(`${e.endDate ?? e.date}T23:59:59`);
  return end >= now;
}
