import { siteConfig } from "@/lib/site";
import Link from "next/link";

const Breadcrumb = ({
  pageName,
  description,
  path,
}: {
  pageName: string;
  description: string;
  path?: string;
}) => {
  const breadcrumbJsonLd = path
    ? {
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        itemListElement: [
          {
            "@type": "ListItem",
            position: 1,
            name: "Home",
            item: siteConfig.url,
          },
          {
            "@type": "ListItem",
            position: 2,
            name: pageName,
            item: `${siteConfig.url}${path}`,
          },
        ],
      }
    : null;

  return (
    <section className="relative overflow-hidden border-b border-gray-200 pt-36 pb-16 md:pt-44 md:pb-20 dark:border-white/10">
      {breadcrumbJsonLd && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
        />
      )}
      {/* Single restrained top glow */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-x-0 top-0 -z-10 h-64 bg-[radial-gradient(50%_60%_at_50%_0%,rgba(74,108,247,0.08),transparent_70%)]"
      />
      <div className="container">
        <div className="mx-auto max-w-2xl text-center">
          <nav
            aria-label="Breadcrumb"
            className="mb-5 flex items-center justify-center gap-2 text-sm font-medium"
          >
            <Link
              href="/"
              className="text-body-color transition-colors hover:text-primary dark:text-body-color-dark"
            >
              Home
            </Link>
            <span className="text-gray-300 dark:text-white/30">/</span>
            <span className="text-primary">{pageName}</span>
          </nav>
          <h1 className="text-3xl font-bold tracking-tight text-black sm:text-4xl md:text-5xl dark:text-white">
            {pageName}
          </h1>
          <p className="mx-auto mt-5 max-w-xl text-base leading-relaxed text-body-color md:text-lg dark:text-body-color-dark">
            {description}
          </p>
        </div>
      </div>
    </section>
  );
};

export default Breadcrumb;
