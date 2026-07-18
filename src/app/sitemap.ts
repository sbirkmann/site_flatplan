import { MetadataRoute } from "next";
import { blogPosts } from "@/lib/blog";
import { site } from "@/lib/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const staticRoutes: { path: string; priority: number; changeFrequency: "weekly" | "monthly" }[] = [
    { path: "", priority: 1.0, changeFrequency: "weekly" },
    { path: "/features", priority: 0.9, changeFrequency: "monthly" },
    { path: "/funktionen/3d-grundrisse", priority: 0.9, changeFrequency: "monthly" },
    { path: "/funktionen/lead-generierung", priority: 0.9, changeFrequency: "monthly" },
    { path: "/funktionen/pdf-expose", priority: 0.8, changeFrequency: "monthly" },
    { path: "/funktionen/integrationen", priority: 0.8, changeFrequency: "monthly" },
    { path: "/branchen/bautraeger", priority: 0.9, changeFrequency: "monthly" },
    { path: "/branchen/immobilienmakler", priority: 0.9, changeFrequency: "monthly" },
    { path: "/branchen/projektentwicklung", priority: 0.9, changeFrequency: "monthly" },
    { path: "/use-cases/neubauvertrieb", priority: 0.8, changeFrequency: "monthly" },
    { path: "/use-cases/virtuelle-besichtigung", priority: 0.8, changeFrequency: "monthly" },
    { path: "/preise", priority: 0.8, changeFrequency: "monthly" },
    { path: "/referenzen", priority: 0.8, changeFrequency: "monthly" },
    { path: "/vorteile", priority: 0.7, changeFrequency: "monthly" },
    { path: "/faq", priority: 0.7, changeFrequency: "monthly" },
    { path: "/blog", priority: 0.8, changeFrequency: "weekly" },
    { path: "/wissen/glossar", priority: 0.6, changeFrequency: "monthly" },
    { path: "/ueber-uns", priority: 0.5, changeFrequency: "monthly" },
    { path: "/kontakt", priority: 0.8, changeFrequency: "monthly" },
  ];

  return [
    ...staticRoutes.map((route) => ({
      url: `${site.url}${route.path}`,
      changeFrequency: route.changeFrequency,
      priority: route.priority,
    })),
    ...blogPosts.map((post) => ({
      url: `${site.url}/blog/${post.slug}`,
      lastModified: new Date(`${post.date}T12:00:00Z`),
      changeFrequency: "monthly" as const,
      priority: 0.6,
    })),
  ];
}
