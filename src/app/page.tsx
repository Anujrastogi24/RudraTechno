import ScrollUp from "@/components/Common/ScrollUp";
import CTA from "@/components/CTA";
import Features from "@/components/Features";
import Hero from "@/components/Hero";
import Pricing from "@/components/Pricing";
import Process from "@/components/Process";
import Testimonials from "@/components/Testimonials";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: {
    absolute: "Rudra Techno — Custom Websites & Software, Built for You",
  },
  description:
    "Rudra Techno is a SaaS platform that designs and builds custom websites and software. Request a project, track progress in real time, and manage delivery — all in one place.",
};

export default function Home() {
  return (
    <>
      <ScrollUp />
      <Hero />
      <Features />
      <Process />
      <Testimonials />
      <Pricing />
      <CTA />
    </>
  );
}
