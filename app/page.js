import { Services, Collaboration, Hero, OurStory, Working } from "@/app/components";
import { ButtonGradient } from "./assets/svg";
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
      <div className="pt-[4.75rem] lg:pt-[5.25rem] overflow-hidden">
        <Hero/>
        <Services />
        <TechBackground />
        <OurStory />
        <Collaboration />
        <Working />
        <WhyChooseUs />
          <MasonryTestimonials />
          <Faqs />
          <Cta />
      </div>
      <ButtonGradient/>
    </>
  );
};

export default Home;
