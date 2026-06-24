import Link from "next/link";

const Hero = () => {
  return (
    <section
      id="home"
      className="relative overflow-hidden bg-white dark:bg-gray-dark"
    >
      {/* Subtle top glow — single, restrained accent (no floating shapes) */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-x-0 top-0 -z-10 h-[480px] bg-[radial-gradient(60%_60%_at_50%_0%,rgba(74,108,247,0.10),transparent_70%)]"
      />

      <div className="container">
        <div className="mx-auto max-w-3xl pt-36 pb-24 text-center md:pt-44 md:pb-32">
          <Link
            href="/products"
            className="mb-8 inline-flex items-center gap-2 rounded-full border border-gray-200 bg-white/60 px-4 py-1.5 text-sm font-medium text-gray-600 backdrop-blur transition-colors hover:border-gray-300 dark:border-white/10 dark:bg-white/5 dark:text-white/70"
          >
            <span className="h-1.5 w-1.5 rounded-full bg-primary" />
            New — RudraWeb Analyzer
            <span aria-hidden>→</span>
          </Link>

          <h1 className="text-4xl font-bold leading-[1.1] tracking-tight text-black sm:text-5xl md:text-6xl dark:text-white">
            Custom websites &amp; software,
            <br className="hidden sm:block" /> built for you
          </h1>

          <p className="mx-auto mt-6 max-w-xl text-lg leading-relaxed text-body-color dark:text-body-color-dark">
            Rudra Techno designs and ships high-performance digital products —
            track every milestone in real time and launch with confidence.
          </p>

          <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Link
              href="/signup"
              className="inline-flex w-full items-center justify-center rounded-lg bg-primary px-7 py-3.5 text-base font-semibold text-white shadow-sm transition-all duration-200 hover:bg-primary/90 hover:shadow-md sm:w-auto"
            >
              Start a project
            </Link>
            <Link
              href="/portfolio"
              className="inline-flex w-full items-center justify-center rounded-lg border border-gray-200 bg-white px-7 py-3.5 text-base font-semibold text-black transition-colors duration-200 hover:bg-gray-50 sm:w-auto dark:border-white/15 dark:bg-white/5 dark:text-white dark:hover:bg-white/10"
            >
              View our work
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
