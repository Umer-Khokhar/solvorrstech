import { Services, Hero, OurStory } from "@/app/components";
import { ButtonGradient } from "./assets/svg";
import dynamic from "next/dynamic";

const Collaboration = dynamic(
  () => import("@/app/components").then((mod) => mod.Collaboration),
  { ssr: true },
);
const Work = dynamic(() => import("@/app/components").then((mod) => mod.Work), {
  ssr: true,
});
const WhyChooseUs = dynamic(() => import("./components/WhyChooseUs"), {
  ssr: true,
});
const MasonryTestimonials = dynamic(
  () => import("@/app/components/Testimonials"),
  { ssr: true },
);
const Faqs = dynamic(() => import("@/app/components/Faqs"), { ssr: true });
const Cta = dynamic(() => import("@/app/components/Cta"), { ssr: true });

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
