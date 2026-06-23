import type { MetadataRoute } from "next";
import { site } from "@/lib/data/site";
import { brands } from "@/lib/data/brands";
import { restaurants } from "@/lib/data/restaurants";
import { events } from "@/lib/data/events";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = site.url;
  const now = new Date();

  const staticRoutes = [
    "",
    "/shops",
    "/dining",
    "/entertainment",
    "/le-souk",
    "/events",
    "/offers",
    "/services",
    "/leasing",
    "/contact",
  ].map((path) => ({
    url: `${base}${path}`,
    lastModified: now,
    changeFrequency: "weekly" as const,
    priority: path === "" ? 1 : 0.8,
  }));

  const brandRoutes = brands.map((b) => ({
    url: `${base}/shops/${b.slug}`,
    lastModified: now,
    changeFrequency: "monthly" as const,
    priority: 0.6,
  }));

  const diningRoutes = restaurants.map((r) => ({
    url: `${base}/dining/${r.slug}`,
    lastModified: now,
    changeFrequency: "monthly" as const,
    priority: 0.6,
  }));

  const eventRoutes = events.map((e) => ({
    url: `${base}/events/${e.slug}`,
    lastModified: now,
    changeFrequency: "weekly" as const,
    priority: 0.6,
  }));

  return [...staticRoutes, ...brandRoutes, ...diningRoutes, ...eventRoutes];
}
