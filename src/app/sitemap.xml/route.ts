import { NextResponse } from "next/server";
import { caseStudies } from "../../content/case-studies";
import { baseUrl } from "../../lib/base-url";

export async function GET() {
  const base = baseUrl();
  const lastmod = new Date().toISOString();

  // /cv is deliberately absent: that page sets robots.index = false.
  const paths = ["/", ...caseStudies.map((s) => `/case-studies/${s.id}`)];

  const urls = paths
    .map(
      (path) => `  <url>
    <loc>${base}${path}</loc>
    <lastmod>${lastmod}</lastmod>
  </url>`,
    )
    .join("\n");

  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls}
</urlset>`;

  return new NextResponse(sitemap, {
    headers: { "Content-Type": "application/xml" },
  });
}
