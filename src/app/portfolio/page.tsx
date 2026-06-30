import Breadcrumb from "@/components/Common/Breadcrumb";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Portfolio",
  description:
    "Selected case studies and projects delivered by Rudra Techno across SaaS, e-commerce, and internal tooling.",
  alternates: { canonical: "/portfolio" },
  openGraph: {
    title: "Portfolio | Rudra Techno",
    description:
      "Selected case studies and projects delivered by Rudra Techno across SaaS, e-commerce, and internal tooling.",
    url: "/portfolio",
    type: "website",
  },
};

const caseStudies = [
  {
    client: "EduNova",
    category: "EdTech SaaS",
    summary:
      "A multi-tenant learning platform with role-based dashboards for schools, teachers, and students.",
    result: "40% faster onboarding for new institutions.",
  },
  {
    client: "MovieCinema",
    category: "Booking Platform",
    summary:
      "A movie discovery and seat-booking web app with real-time availability.",
    result: "Sub-2s page loads on a serverless stack.",
  },
  {
    client: "Ocean Placement",
    category: "Recruitment Portal",
    summary:
      "A candidate–employer marketplace with applicant tracking and messaging.",
    result: "3x increase in completed applications.",
  },
  {
    client: "School Homepage",
    category: "Marketing Website",
    summary:
      "A fast, accessible institutional website with a content-managed news section.",
    result: "100/100 Lighthouse accessibility score.",
  },
];

const PortfolioPage = () => {
  return (
    <>
      <Breadcrumb
        pageName="Portfolio"
        description="A selection of websites and software Rudra Techno has designed and delivered. Each project is built to its client's exact requirements."
        path="/portfolio"
      />

      <section className="py-16 md:py-20 lg:py-28">
        <div className="container">
          <div className="grid grid-cols-1 gap-x-8 gap-y-10 md:grid-cols-2">
            {caseStudies.map((study) => (
              <div
                key={study.client}
                className="rounded-md border border-body-color/10 bg-white p-8 shadow-one dark:border-white/10 dark:bg-gray-dark"
              >
                <span className="mb-3 inline-block rounded-full bg-primary/10 px-4 py-1 text-sm font-medium text-primary">
                  {study.category}
                </span>
                <h3 className="mb-3 text-2xl font-bold text-black dark:text-white">
                  {study.client}
                </h3>
                <p className="mb-4 text-base leading-relaxed text-body-color">
                  {study.summary}
                </p>
                <p className="text-base font-semibold text-black dark:text-white">
                  {study.result}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default PortfolioPage;
