import {
  Services,
  Collaboration,
  Hero,
  OurStory,
  Work,
} from "@/app/components";
import { ButtonGradient } from "./assets/svg";

export const metadata = {
  title: "Solvorr Tech | Custom Dashboards, Automation & Integrations",
  description:
    "Custom dashboards, workflow automation, and integrated business systems designed to centralize operations, reduce manual work, and support scalable growth.",
  alternates: {
    canonical: "https://www.solvorrtech.com",
  },
  openGraph: {
    title: "Solvorr Tech | Custom Dashboards, Automation & Integrations",
    description:
      "Custom dashboards, workflow automation, and integrated business systems designed to centralize operations, reduce manual work, and support scalable growth.",
    url: "https://www.solvorrtech.com",
    siteName: "Solvorr Tech",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Solvorr Tech | Custom Dashboards, Automation & Integrations",
    description:
      "Custom dashboards, workflow automation, and integrated business systems to centralize operations and support scalable growth.",
    creator: "@solvorrtech",
  },
};

import PortfolioSection from "@/app/components/PortfolioSection";
import { robot } from "./assets";
import MasonryTestimonials from "@/app/components/Testimonials";
import Faqs from "@/app/components/Faqs";
import Cta from "@/app/components/Cta";
import WhyChooseUs from "./components/WhyChooseUs";
import { TechBackground } from "@/app/components/index.js";
const Home = () => {
  return (
    <>
      <div className="overflow-hidden">
        <Hero />
        <Services />
        <OurStory />
        <Collaboration />
        <Work />
        <WhyChooseUs />
        <MasonryTestimonials />
        <Faqs />
        <Cta />
      </div>
      <ButtonGradient />
    </>
  );
};

export default Home;
