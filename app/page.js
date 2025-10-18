import { Benefits, Collaboration, Hero, Working } from "@/app/components";
import { ButtonGradient } from "./assets/svg";
import PortfolioSection from "@/app/components/PortfolioSection";
import { robot } from "./assets";
import MasonryTestimonials from "@/app/components/Testimonials";
import Faqs from "@/app/components/Faqs";
import Cta from "@/app/components/Cta";
const Home = () => {
  return (
    <>
      <div className="pt-[4.75rem] lg:pt-[5.25rem] overflow-hidden">
        <Hero/>
        <Benefits />
        <Collaboration />
        <Working />
        <PortfolioSection />
          <MasonryTestimonials />
          <Faqs />
          <Cta />
      </div>
      <ButtonGradient/>
    </>
  );
};

export default Home;
