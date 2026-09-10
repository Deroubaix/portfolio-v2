export function baseUrl() {
  const raw = process.env.NEXT_PUBLIC_BASE_URL || "http://localhost:3000";
  return raw.replace(/\/+$/, "");
}
