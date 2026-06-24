import Breadcrumb from "@/components/Common/Breadcrumb";
import Contact from "@/components/Contact";

import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Tell us about your project. We'll get back within one business day with a clear scope and a quote.",
};

const ContactPage = () => {
  return (
    <>
      <Breadcrumb
        pageName="Contact Us"
        description="Tell us what you're building. We'll get back within one business day with a clear scope and a quote — no obligation."
      />

      <Contact />
    </>
  );
};

export default ContactPage;
