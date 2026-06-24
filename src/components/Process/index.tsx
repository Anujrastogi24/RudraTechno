import SectionTitle from "../Common/SectionTitle";

const steps = [
  {
    number: "01",
    title: "Discover & scope",
    description:
      "We start with a short call to understand your goals, then turn them into a clear, fixed scope and timeline.",
  },
  {
    number: "02",
    title: "Design & prototype",
    description:
      "You see clickable designs early — we refine the look and flow together before a single line of production code.",
  },
  {
    number: "03",
    title: "Build & track",
    description:
      "Our team builds in focused sprints while you follow every milestone live from your project dashboard.",
  },
  {
    number: "04",
    title: "Launch & support",
    description:
      "We ship, monitor, and keep iterating — with ongoing maintenance and a real team a message away.",
  },
];

const Process = () => {
  return (
    <section id="process" className="py-24 md:py-32">
      <div className="container">
        <SectionTitle
          title="From idea to launch, without the guesswork"
          paragraph="A clear, transparent process that keeps you in the loop at every step — no black boxes, no surprises."
          center
        />

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {steps.map((step) => (
            <div
              key={step.number}
              className="rounded-2xl border border-gray-200 bg-white p-8 transition-all duration-200 hover:border-primary/30 hover:shadow-lg dark:border-white/10 dark:bg-white/[0.03] dark:hover:border-primary/40"
            >
              <span className="text-sm font-semibold tracking-wider text-primary">
                {step.number}
              </span>
              <h3 className="mt-4 mb-3 text-lg font-semibold text-black dark:text-white">
                {step.title}
              </h3>
              <p className="text-base leading-relaxed text-body-color dark:text-body-color-dark">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Process;
