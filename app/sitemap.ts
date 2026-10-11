import type { MetadataRoute } from "next";
import { site } from "@/lib/data";

const base = process.env.NEXT_PUBLIC_SITE_URL ?? "https://marktravel.af";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    ...site.nav.map((n) => ({ url: base + n.href })),
    ...site.posts.map((p) => ({ url: `${base}/blogs/${p.slug}`, lastModified: p.date })),
  ];
}
