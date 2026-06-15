// Runs before `vite dev` and `vite build` (predev/prebuild hooks); writes public/sitemap.xml.
import { writeFileSync } from "fs";
import { resolve } from "path";

const BASE_URL = "https://www.glamro.it";

interface SitemapEntry {
  path: string;
  changefreq?: "always" | "hourly" | "daily" | "weekly" | "monthly" | "yearly" | "never";
  priority?: string;
}

const services = [
  "parrucchiere-a-domicilio",
  "estetista-a-domicilio",
  "make-up-artist-a-domicilio",
  "massaggiatore-a-domicilio",
];

const cities = [
  "senigallia",
  "ancona",
  "brindisi",
  "rimini",
  "riccione",
  "bologna",
  "gallipoli",
];

const entries: SitemapEntry[] = [
  { path: "/", changefreq: "weekly", priority: "1.0" },
  { path: "/clients", changefreq: "monthly", priority: "0.8" },
  { path: "/professionals", changefreq: "monthly", priority: "0.8" },
  { path: "/lavora-con-noi", changefreq: "monthly", priority: "0.9" },
  { path: "/candidatura-professionisti", changefreq: "monthly", priority: "0.9" },
  { path: "/prenota-consulenza", changefreq: "monthly", priority: "0.9" },
  ...services.map((s) => ({ path: `/servizi/${s}`, changefreq: "monthly" as const, priority: "0.8" })),
  ...cities.map((c) => ({ path: `/citta/${c}`, changefreq: "monthly" as const, priority: "0.7" })),
  { path: "/about", changefreq: "monthly", priority: "0.5" },
  { path: "/faq", changefreq: "monthly", priority: "0.6" },
  { path: "/contact", changefreq: "monthly", priority: "0.6" },
  { path: "/privacy", changefreq: "yearly", priority: "0.3" },
  { path: "/terms", changefreq: "yearly", priority: "0.3" },
  { path: "/cookie-policy", changefreq: "yearly", priority: "0.3" },
  { path: "/legal-notice", changefreq: "yearly", priority: "0.3" },
];

function generateSitemap(items: SitemapEntry[]) {
  const urls = items.map((e) =>
    [
      `  <url>`,
      `    <loc>${BASE_URL}${e.path}</loc>`,
      e.changefreq ? `    <changefreq>${e.changefreq}</changefreq>` : null,
      e.priority ? `    <priority>${e.priority}</priority>` : null,
      `  </url>`,
    ]
      .filter(Boolean)
      .join("\n"),
  );
  return [
    `<?xml version="1.0" encoding="UTF-8"?>`,
    `<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">`,
    ...urls,
    `</urlset>`,
  ].join("\n");
}

writeFileSync(resolve("public/sitemap.xml"), generateSitemap(entries));
console.log(`sitemap.xml written (${entries.length} entries)`);
