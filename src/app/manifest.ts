import type { MetadataRoute } from "next";

import { site } from "@/data/site";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: `${site.name} — ${site.owner}`,
    short_name: site.name,
    description: site.description,
    start_url: "/",
    display: "standalone",
    background_color: "#050506",
    theme_color: "#050506",
    icons: [{ src: "/mark.svg", sizes: "any", type: "image/svg+xml", purpose: "any" }],
  };
}
