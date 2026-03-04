import React from "react";

export const metadata = {
  title: "About Us | Solvorr Tech",
  description:
    "Learn about Solvorr Tech — our story, core values, and the team behind your custom dashboards, automation, and business systems.",
  alternates: {
    canonical: "https://www.solvorrtech.com/about",
  },
  openGraph: {
    title: "About Us | Solvorr Tech",
    description:
      "Learn about Solvorr Tech — our story, core values, and the team behind your custom dashboards, automation, and business systems.",
    url: "https://www.solvorrtech.com/about",
    siteName: "Solvorr Tech",
    type: "website",
  },
};
import { AboutHero, OurStory } from "../components";
import CoreValuesSection from "@/app/components/About/CoreValues";
import TeamSection from "@/app/components/About/TeamSection";
import TestimonialGrid from "@/app/components/Testimonials";
import WhyChooseUs from "../components/WhyChooseUs";

const page = () => {
  return (
    <>
      <AboutHero />
      <OurStory />
      <CoreValuesSection />
      <WhyChooseUs />
      <TeamSection />
      <TestimonialGrid />
    </>
  );
};

export default page;
