import Link from "next/link";

const CTA = () => {
  return (
    <section className="py-24 md:py-32">
      <div className="container">
        <div className="relative overflow-hidden rounded-3xl border border-primary/20 bg-primary px-8 py-16 text-center md:px-16 md:py-20">
          {/* Single restrained glow, no scattered shapes */}
          <div
            aria-hidden
            className="pointer-events-none absolute inset-x-0 top-0 h-1/2 bg-[radial-gradient(60%_100%_at_50%_0%,rgba(255,255,255,0.18),transparent_70%)]"
          />
          <div className="relative mx-auto max-w-2xl">
            <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl md:text-[40px] md:leading-[1.15]">
              Have a project in mind?
            </h2>
            <p className="mx-auto mt-5 max-w-xl text-lg leading-relaxed text-white/80">
              Tell us what you&apos;re building. We&apos;ll get back within one
              business day with a clear scope and a quote.
            </p>
            <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
              <Link
                href="/signup"
                className="inline-flex w-full items-center justify-center rounded-lg bg-white px-7 py-3.5 text-base font-semibold text-primary shadow-sm transition-all duration-200 hover:bg-white/90 hover:shadow-md sm:w-auto"
              >
                Start a project
              </Link>
              <Link
                href="/contact"
                className="inline-flex w-full items-center justify-center rounded-lg border border-white/30 px-7 py-3.5 text-base font-semibold text-white transition-colors duration-200 hover:bg-white/10 sm:w-auto"
              >
                Talk to us
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTA;
