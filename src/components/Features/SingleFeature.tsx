import { Feature } from "@/types/feature";

const SingleFeature = ({ feature }: { feature: Feature }) => {
  const { icon, title, paragraph } = feature;
  return (
    <div className="group flex items-start gap-5 rounded-2xl border border-gray-200 bg-white p-8 transition-all duration-200 hover:-translate-y-1 hover:border-primary/30 hover:shadow-lg dark:border-white/10 dark:bg-white/[0.03] dark:hover:border-primary/40">
      <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-primary/10 text-primary transition-colors group-hover:bg-primary group-hover:text-white">
        <span className="[&_svg]:h-6 [&_svg]:w-6">{icon}</span>
      </div>
      <div>
        <h3 className="mb-3 text-xl font-semibold text-black dark:text-white">
          {title}
        </h3>
        <p className="text-base leading-relaxed text-body-color dark:text-body-color-dark">
          {paragraph}
        </p>
      </div>
    </div>
  );
};

export default SingleFeature;
