const SectionTitle = ({
  title,
  paragraph,
  width = "640px",
  center,
  mb = "64px",
}: {
  title: string;
  paragraph: string;
  width?: string;
  center?: boolean;
  mb?: string;
}) => {
  return (
    <div
      className={`w-full ${center ? "mx-auto text-center" : ""}`}
      style={{ maxWidth: width, marginBottom: mb }}
    >
      <h2 className="mb-4 text-3xl font-bold tracking-tight text-black sm:text-4xl md:text-[40px] md:leading-[1.15] dark:text-white">
        {title}
      </h2>
      <p className="text-base leading-relaxed text-body-color md:text-lg dark:text-body-color-dark">
        {paragraph}
      </p>
    </div>
  );
};

export default SectionTitle;
