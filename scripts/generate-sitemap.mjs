// Writes public/sitemap.xml before each build.
// Set NEXT_PUBLIC_BASE_URL to the live domain so the URLs are correct.
import fs from "node:fs";

const siteUrl = (process.env.NEXT_PUBLIC_BASE_URL || "http://localhost:3000").replace(/\/$/, "");
const today = new Date().toISOString().split("T")[0];

const routes = [
  ["/", "weekly", "1.0"],
  ["/menu/", "weekly", "0.9"],
  ["/reservations/", "monthly", "0.8"],
  ["/events/", "monthly", "0.7"],
  ["/contact/", "monthly", "0.7"],
  ["/about/", "monthly", "0.5"],
  ["/gallery/", "monthly", "0.5"],
];

const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${routes
  .map(
    ([path, freq, priority]) =>
      `  <url><loc>${siteUrl}${path}</loc><lastmod>${today}</lastmod><changefreq>${freq}</changefreq><priority>${priority}</priority></url>`
  )
  .join("\n")}
</urlset>
`;

fs.writeFileSync(new URL("../public/sitemap.xml", import.meta.url), xml);
console.log(`sitemap.xml written for ${siteUrl}`);
