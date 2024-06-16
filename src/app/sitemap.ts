import { BASE_URL } from "@/lib/constants";
import type { MetadataRoute } from "next";

const staticRoutes = [
  { url: "", priority: 1 },
  { url: "/contact", priority: 0.8 },
];

export default function sitemap(): MetadataRoute.Sitemap {
  return staticRoutes.map((route) => ({
    url: `${BASE_URL}${route.url}`,
    priority: route.priority,
  }));
}
