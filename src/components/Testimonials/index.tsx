import { Testimonial } from "@/types/testimonial";
import SectionTitle from "../Common/SectionTitle";
import SingleTestimonial from "./SingleTestimonial";

const testimonialData: Testimonial[] = [
  {
    id: 1,
    name: "Priya Sharma",
    designation: "Founder, Lumen Studio",
    content:
      "Rudra Techno rebuilt our site in three weeks. Page speed went from sluggish to instant, and inbound leads have nearly doubled since launch.",
    image: "/images/testimonials/auth-01.png",
    star: 5,
  },
  {
    id: 2,
    name: "David Mensah",
    designation: "CEO, Northbridge SaaS",
    content:
      "They shipped our entire dashboard — auth, billing, the works. Being able to track every milestone in real time made the whole process painless.",
    image: "/images/testimonials/auth-02.png",
    star: 5,
  },
  {
    id: 3,
    name: "Aisha Khan",
    designation: "Marketing Lead, Verde Co.",
    content:
      "Clean design, clear communication, and they actually hit deadlines. RudraWeb Analyzer also caught SEO issues we'd missed for months.",
    image: "/images/testimonials/auth-03.png",
    star: 5,
  },
];

const Testimonials = () => {
  return (
    <section className="bg-gray-light py-24 md:py-32 dark:bg-bg-color-dark">
      <div className="container">
        <SectionTitle
          title="Trusted by teams that ship"
          paragraph="We partner with founders and teams to design, build, and grow digital products that perform."
          center
        />

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {testimonialData.map((testimonial) => (
            <SingleTestimonial key={testimonial.id} testimonial={testimonial} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
