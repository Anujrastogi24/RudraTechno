import Breadcrumb from "@/components/Common/Breadcrumb";
import Link from "next/link";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Products",
  description:
    "Products built by Rudra Techno, including RudraWeb Analyzer — an instant website and SEO audit tool.",
  alternates: { canonical: "/products" },
  openGraph: {
    title: "Products | Rudra Techno",
    description:
      "Products built by Rudra Techno, including RudraWeb Analyzer — an instant website and SEO audit tool.",
    url: "/products",
    type: "website",
  },
};

const features = [
  {
    title: "SEO audit",
    description:
      "Scans titles, meta tags, headings, structured data, and indexability — then flags exactly what's hurting your rankings.",
  },
  {
    title: "Accessibility checks",
    description:
      "Catches missing alt text, color-contrast issues, and ARIA problems so your site works for everyone.",
  },
  {
    title: "Best-practice scan",
    description:
      "Reviews HTTPS, mobile-friendliness, broken links, and modern web standards in a single pass.",
  },
  {
    title: "Actionable report",
    description:
      "Every issue comes with a clear, prioritized fix — no jargon, just what to change and why it matters.",
  },
  {
    title: "Score & tracking",
    description:
      "Get an overall health score for any URL and re-run anytime to track improvements over time.",
  },
  {
    title: "Instant results",
    description:
      "Paste a URL and get a full breakdown in seconds — no install, no signup required to start.",
  },
];

const productJsonLd = {
  "@context": "https://schema.org",
  "@type": "SoftwareApplication",
  name: "RudraWeb Analyzer",
  applicationCategory: "WebApplication",
  operatingSystem: "Web",
  description:
    "An instant website and SEO audit tool that scans any URL and returns a clear, prioritized report on SEO, accessibility, and web best practices.",
  brand: { "@type": "Brand", name: "Rudra Techno" },
  publisher: { "@type": "Organization", name: "Rudra Techno" },
  offers: { "@type": "Offer", price: "0", priceCurrency: "USD" },
};

const ProductsPage = () => {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(productJsonLd) }}
      />
      <Breadcrumb
        pageName="Products"
        description="Software products built and owned by Rudra Techno — crafted with the same quality we deliver to our clients."
        path="/products"
      />

      <section className="pb-16 pt-4 md:pb-20 lg:pb-28">
        <div className="container">
          {/* Featured product: RudraWeb Analyzer */}
          <div className="rounded-md border border-body-color/10 bg-white p-8 shadow-one dark:border-white/10 dark:bg-gray-dark md:p-12">
            <span className="mb-4 inline-block rounded-full bg-primary/10 px-4 py-1 text-sm font-medium text-primary">
              Website / SEO Audit Tool
            </span>
            <h2 className="mb-4 text-3xl font-bold text-black dark:text-white sm:text-4xl">
              RudraWeb Analyzer
            </h2>
            <p className="mb-6 max-w-[760px] text-base leading-relaxed text-body-color dark:text-body-color-dark md:text-lg">
              RudraWeb Analyzer is our own product: an instant website and SEO
              audit tool. Enter any URL and get a clear, prioritized report on
              SEO, accessibility, and web best practices — so you know exactly
              what to fix to rank higher and load faster.
            </p>
            <div className="flex flex-col gap-4 sm:flex-row">
              <Link
                href="/signup"
                className="rounded-xs bg-primary px-8 py-4 text-base font-semibold text-white duration-300 ease-in-out hover:bg-primary/80"
              >
                Try RudraWeb Analyzer
              </Link>
              <Link
                href="/contact"
                className="rounded-xs bg-black px-8 py-4 text-base font-semibold text-white duration-300 ease-in-out hover:bg-black/90 dark:bg-white/10 dark:hover:bg-white/5"
              >
                Request a Demo
              </Link>
            </div>
          </div>

          {/* Feature grid */}
          <div className="mt-12 grid grid-cols-1 gap-x-8 gap-y-10 md:grid-cols-2 lg:grid-cols-3">
            {features.map((feature) => (
              <div
                key={feature.title}
                className="rounded-md border border-body-color/10 bg-white p-8 shadow-one dark:border-white/10 dark:bg-gray-dark"
              >
                <h3 className="mb-3 text-xl font-bold text-black dark:text-white">
                  {feature.title}
                </h3>
                <p className="text-base leading-relaxed text-body-color dark:text-body-color-dark">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default ProductsPage;
