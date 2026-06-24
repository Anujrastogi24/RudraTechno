import Link from "next/link";

const PricingBox = (props: {
  price: string;
  duration: string;
  packageName: string;
  subtitle: string;
  popular?: boolean;
  children: React.ReactNode;
}) => {
  const { price, duration, packageName, subtitle, popular, children } = props;

  return (
    <div
      className={`relative flex h-full flex-col rounded-2xl border bg-white p-8 transition-all duration-200 dark:bg-white/[0.03] ${
        popular
          ? "border-primary shadow-lg dark:border-primary"
          : "border-gray-200 hover:border-primary/30 hover:shadow-lg dark:border-white/10 dark:hover:border-primary/40"
      }`}
    >
      {popular && (
        <span className="absolute -top-3 left-8 rounded-full bg-primary px-3 py-1 text-xs font-semibold tracking-wide text-white uppercase">
          Most popular
        </span>
      )}

      <h4 className="mb-1 text-lg font-semibold text-black dark:text-white">
        {packageName}
      </h4>
      <p className="mb-6 text-sm text-body-color dark:text-body-color-dark">
        {subtitle}
      </p>

      <div className="mb-6 flex items-baseline gap-1">
        <span className="text-sm font-medium text-body-color">from</span>
        <span className="text-4xl font-bold tracking-tight text-black dark:text-white">
          ${price}
        </span>
        <span className="text-base font-medium text-body-color">
          /{duration}
        </span>
      </div>

      <Link
        href="/signup"
        className={`mb-8 flex w-full items-center justify-center rounded-lg px-5 py-3 text-sm font-semibold transition-all duration-200 ${
          popular
            ? "bg-primary text-white hover:bg-primary/90 hover:shadow-md"
            : "border border-gray-200 text-black hover:bg-gray-50 dark:border-white/15 dark:text-white dark:hover:bg-white/5"
        }`}
      >
        Start a project
      </Link>

      <div className="flex flex-1 flex-col gap-1 border-t border-gray-200/70 pt-6 dark:border-white/10">
        {children}
      </div>
    </div>
  );
};

export default PricingBox;
