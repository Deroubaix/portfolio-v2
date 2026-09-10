import { NextResponse } from "next/server";
import { baseUrl } from "../../lib/base-url";

export async function GET() {
  const body = [
    "User-agent: *",
    "Allow: /",
    "",
    `Sitemap: ${baseUrl()}/sitemap.xml`,
    "",
  ].join("\n");

  return new NextResponse(body, {
    headers: { "Content-Type": "text/plain" },
  });
}
