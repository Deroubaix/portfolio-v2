/** @type {import('next').NextConfig} */

// The Vercel aliases serve the same build as the real domain, and Google had
// indexed one of them above marishaderoubaix.com with metadata from the 2023
// portfolio. A canonical tag was not enough to dislodge it, so these send the
// aliases to the real address instead.
//
// The git branch URL is deliberately absent. A 308 is cached hard by browsers,
// so leaving one Vercel address unredirected keeps a working way into the
// deployment if the domain itself ever breaks.
const VERCEL_ALIASES = [
  "marishaderoubaix.vercel.app",
  "portfolio-v2-marishas-projects.vercel.app",
];

const nextConfig = {
  distDir: process.env.NEXT_DIST_DIR || ".next",

  async redirects() {
    return VERCEL_ALIASES.map((host) => ({
      source: "/:path*",
      has: [{ type: "host", value: host }],
      destination: "https://marishaderoubaix.com/:path*",
      permanent: true,
    }));
  },
};

export default nextConfig;
