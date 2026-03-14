import type { MetadataRoute } from "next";
import { insightArticles, seoLandingPages } from "@/data/seoContent";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://vladdos.com";
  const now = new Date("2026-03-14T00:00:00.000Z");

  const staticRoutes = [
    "",
    "/capabilities",
    "/infrastructure",
    "/access",
    "/for-affiliates",
    "/for-advertisers",
    "/telegram",
    "/about",
    "/contact",
    "/join",
    "/offers",
    "/case-studies",
    "/partners",
    "/faq",
    "/privacy-policy",
    "/terms",
    "/cookie-policy",
    "/insights",
  ];

  const seoRoutes = seoLandingPages.map((page) => `/${page.slug}`);
  const insightRoutes = insightArticles.map((article) => `/insights/${article.slug}`);
  const routes = [...staticRoutes, ...seoRoutes, ...insightRoutes];

  return routes.map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: now,
    changeFrequency: route === "" || route === "/join" || route.startsWith("/insights/") || seoRoutes.includes(route) ? "weekly" : "monthly",
    priority: route === "" ? 1 : route === "/join" ? 0.95 : seoRoutes.includes(route) ? 0.9 : route.startsWith("/insights/") ? 0.84 : 0.78,
  }));
}
