import services from "@/lib/services.json";

export default function sitemap() {
  const baseUrl = "https://www.solvorrtech.com";

  // Static routes
  const routes = [
    "",
    "/about",
    "/portfolio",
    "/blog",
    "/contact",
    "/case-studies",
  ].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: "monthly",
    priority: route === "" ? 1 : 0.8,
  }));

  // Dynamic service routes
  const serviceRoutes = services.map((service) => ({
    url: `${baseUrl}/${service.slug}`,
    lastModified: new Date(),
    changeFrequency: "weekly",
    priority: 0.9,
  }));

  return [...routes, ...serviceRoutes];
}
