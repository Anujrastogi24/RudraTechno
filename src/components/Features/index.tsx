import SectionTitle from "../Common/SectionTitle";
import SingleFeature from "./SingleFeature";
import featuresData from "./featuresData";

const Features = () => {
  return (
    <section id="features" className="py-24 md:py-32">
      <div className="container">
        <SectionTitle
          title="Everything you need to ship"
          paragraph="From first wireframe to launch and beyond — one team handling design, engineering, and growth so you can focus on your business."
          center
        />

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {featuresData.map((feature) => (
            <SingleFeature key={feature.id} feature={feature} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
