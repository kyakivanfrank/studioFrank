import type { MetadataRoute } from "next";

import { projects } from "@/data/projects";
import { site } from "@/data/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();

  const pages: MetadataRoute.Sitemap = (
    [
      { url: site.url, changeFrequency: "monthly", priority: 1 },
      { url: `${site.url}/portfolio`, changeFrequency: "monthly", priority: 0.9 },
      { url: `${site.url}/services`, changeFrequency: "yearly", priority: 0.8 },
      { url: `${site.url}/about`, changeFrequency: "yearly", priority: 0.7 },
      { url: `${site.url}/contact`, changeFrequency: "yearly", priority: 0.6 },
    ] satisfies MetadataRoute.Sitemap
  ).map((page) => ({ ...page, lastModified }));

  const projectPages: MetadataRoute.Sitemap = projects.map((p) => ({
    url: `${site.url}/portfolio/${p.slug}`,
    lastModified,
    changeFrequency: "yearly",
    priority: 0.7,
  }));

  return [...pages, ...projectPages];
}
