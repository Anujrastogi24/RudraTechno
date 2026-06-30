import Breadcrumb from "@/components/Common/Breadcrumb";
import Features from "@/components/Features";
import Pricing from "@/components/Pricing";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Services",
  description:
    "Custom website development, web & mobile apps, SaaS products, and ongoing support — delivered by Rudra Techno.",
  alternates: { canonical: "/services" },
  openGraph: {
    title: "Services | Rudra Techno",
    description:
      "Custom website development, web & mobile apps, SaaS products, and ongoing support — delivered by Rudra Techno.",
    url: "/services",
    type: "website",
  },
};

const services = [
  {
    title: "Custom Website Development",
    description:
      "Marketing sites, landing pages, and corporate websites — fast, responsive, and SEO-ready.",
  },
  {
    title: "Web Application Development",
    description:
      "Dashboards, portals, and internal tools built on a modern, scalable stack.",
  },
  {
    title: "Mobile App Development",
    description:
      "Cross-platform apps that share one codebase across iOS and Android.",
  },
  {
    title: "SaaS Product Engineering",
    description:
      "End-to-end SaaS builds: auth, billing, multi-tenancy, and analytics.",
  },
  {
    title: "UI/UX Design",
    description:
      "Premium, startup-grade interfaces with light/dark themes and micro-interactions.",
  },
  {
    title: "Maintenance & Support",
    description:
      "Ongoing updates, monitoring, and feature work after launch.",
  },
];

const ServicesPage = () => {
  return (
    <>
      <Breadcrumb
        pageName="Our Services"
        description="From a single landing page to a full SaaS platform, Rudra Techno designs, builds, and ships software tailored to your requirements."
        path="/services"
      />

      <section className="py-16 md:py-20 lg:py-28">
        <div className="container">
          <div className="grid grid-cols-1 gap-x-8 gap-y-10 md:grid-cols-2 lg:grid-cols-3">
            {services.map((service) => (
              <div
                key={service.title}
                className="rounded-md border border-body-color/10 bg-white p-8 shadow-one dark:border-white/10 dark:bg-gray-dark"
              >
                <h3 className="mb-4 text-xl font-bold text-black dark:text-white">
                  {service.title}
                </h3>
                <p className="text-base leading-relaxed text-body-color">
                  {service.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Features />
      <Pricing />
    </>
  );
};

export default ServicesPage;
