import { BASE_URL } from "@/lib/constants";
import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Clément RICATTE",
    short_name: "AvaN0x",
    description: "Site de Clément RICATTE",
    start_url: BASE_URL,
    display: "standalone",
    theme_color: "#ffffff",
    background_color: "#100b1e",
    icons: [
      {
        src: "favicon.ico",
        sizes: "64x64 32x32 24x24 16x16",
        type: "image/x-icon",
      },
      {
        src: "https://avatars3.githubusercontent.com/u/27494805",
        type: "image/png",
        sizes: "192x192",
      },
      {
        src: "https://avatars3.githubusercontent.com/u/27494805",
        type: "image/png",
        sizes: "512x512",
      },
    ],
  };
}
