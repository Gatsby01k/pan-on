import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "VlaDDoS PAN",
    short_name: "VlaDDoS PAN",
    description: "Private affiliate network for iGaming, crypto, CPA, and revenue share partnerships.",
    start_url: "/",
    display: "standalone",
    background_color: "#05060a",
    theme_color: "#05060a",
    icons: [
      {
        src: "/vladdos-crown.png",
        sizes: "512x512",
        type: "image/png",
      },
    ],
  };
}
