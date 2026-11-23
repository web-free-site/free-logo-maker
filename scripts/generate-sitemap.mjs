import fs from "node:fs";
import path from "node:path";

const SITE = "https://free-logo-maker.web-free.site";

const paths = [
  "/",
  "/privacy/",
  "/terms/",
  "/about/",
  "/contact/",
  "/how-to-make-a-logo/",
  "/free-logo-maker-no-sign-up/",
  "/download-logo-as-svg/",
];

function url(loc) {
  return `  <url>\n    <loc>${loc}</loc>\n    <changefreq>weekly</changefreq>\n    <priority>0.8</priority>\n  </url>`;
}

const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${paths.map((p) => url(`${SITE}${p}`)).join("\n")}
</urlset>
`;

const outDir = path.join(process.cwd(), "out");
fs.mkdirSync(outDir, { recursive: true });
fs.writeFileSync(path.join(outDir, "sitemap.xml"), xml);
fs.copyFileSync(
  path.join(process.cwd(), "public", "robots.txt"),
  path.join(outDir, "robots.txt"),
);
console.log("Sitemap written to out/sitemap.xml");