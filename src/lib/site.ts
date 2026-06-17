// Central site configuration used by metadata, sitemap, robots, and JSON-LD.
// Set NEXT_PUBLIC_SITE_URL in your environment for production (e.g. on Vercel).

export const siteConfig = {
  name: "Rudra Techno",
  // Used as <title> template suffix and brand name throughout.
  title: "Rudra Techno — Custom Websites & Software, Built for You",
  description:
    "Rudra Techno designs and builds high-performance websites and software for growing businesses. Request a project, track progress in real time, chat with your team, and pay securely.",
  url:
    process.env.NEXT_PUBLIC_SITE_URL?.replace(/\/$/, "") ||
    "https://rudratechno.com",
  ogImage: "/opengraph-image",
  keywords: [
    "Rudra Techno",
    "custom website development",
    "custom software development",
    "web development agency",
    "SaaS development",
    "RudraWeb Analyzer",
    "SEO audit tool",
    "Next.js development",
  ],
  twitter: "@rudratechno",
};

export type SiteConfig = typeof siteConfig;
