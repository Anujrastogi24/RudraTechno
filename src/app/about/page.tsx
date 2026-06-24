import AboutSectionOne from "@/components/About/AboutSectionOne";
import AboutSectionTwo from "@/components/About/AboutSectionTwo";
import Breadcrumb from "@/components/Common/Breadcrumb";

import { Metadata } from "next";

export const metadata: Metadata = {
  title: "About",
  description:
    "Rudra Techno is a product studio that designs and builds custom websites and software for growing businesses.",
};

const AboutPage = () => {
  return (
    <>
      <Breadcrumb
        pageName="About Rudra Techno"
        description="We're a product studio that designs and builds custom websites and software — pairing senior engineering with clear, transparent delivery."
      />
      <AboutSectionOne />
      <AboutSectionTwo />
    </>
  );
};

export default AboutPage;
