import SectionTitle from "../Common/SectionTitle";
import OfferList from "./OfferList";
import PricingBox from "./PricingBox";

const Pricing = () => {
  return (
    <section id="pricing" className="py-24 md:py-32">
      <div className="container">
        <SectionTitle
          title="Transparent, project-based pricing"
          paragraph="Pick a starting point — every project is scoped and quoted up front, with no surprises and no lock-in."
          center
          width="665px"
        />

        <div className="grid grid-cols-1 gap-6 lg:grid-cols-3">
          <PricingBox
            packageName="Starter"
            price="1,499"
            duration="project"
            subtitle="A polished landing page or marketing site to get you live fast."
          >
            <OfferList text="Up to 5 pages" status="active" />
            <OfferList text="Responsive, SEO-ready build" status="active" />
            <OfferList text="Contact form & analytics" status="active" />
            <OfferList text="2 rounds of revisions" status="active" />
            <OfferList text="Custom software" status="inactive" />
            <OfferList text="Dedicated team" status="inactive" />
          </PricingBox>

          <PricingBox
            packageName="Growth"
            price="4,999"
            duration="project"
            subtitle="A full website or web app with a CMS and the integrations you need."
            popular
          >
            <OfferList text="Everything in Starter" status="active" />
            <OfferList text="Custom CMS & dashboards" status="active" />
            <OfferList text="Payments & auth integration" status="active" />
            <OfferList text="Real-time project tracking" status="active" />
            <OfferList text="Priority chat support" status="active" />
            <OfferList text="Dedicated team" status="inactive" />
          </PricingBox>

          <PricingBox
            packageName="Scale"
            price="12,000"
            duration="project"
            subtitle="Custom software & multi-tenant SaaS platforms, built to grow with you."
          >
            <OfferList text="Everything in Growth" status="active" />
            <OfferList text="Custom software & SaaS" status="active" />
            <OfferList text="Role-based access & RBAC" status="active" />
            <OfferList text="Dedicated team" status="active" />
            <OfferList text="SLA & ongoing maintenance" status="active" />
            <OfferList text="Architecture consulting" status="active" />
          </PricingBox>
        </div>
      </div>
    </section>
  );
};

export default Pricing;
