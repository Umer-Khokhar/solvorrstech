import services from "@/lib/services.json";
import { Heading } from ".";
import { FadeIn, StaggerContainer, StaggerItem, TiltCard } from "./animations";

const Services = () => {
  return (
    <section id="features" className="py-20 lg:py-32 overflow-hidden bg-n-8 relative transition-colors duration-300">
        {/* Background Atmosphere */}
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
            <div className="absolute top-1/4 left-1/4 w-[600px] h-[600px] bg-color-1/5 blur-[120px] rounded-full mix-blend-multiply dark:mix-blend-screen opacity-50" />
            <div className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] bg-purple-500/5 blur-[120px] rounded-full mix-blend-multiply dark:mix-blend-screen opacity-50" />
        </div>

      <div className="container relative z-10">
        <FadeIn>
          <Heading
            className="max-w-3xl mb-16 lg:mb-24 mx-auto text-center md:text-left"
            title="Digital Solutions That Drive Growth"
          />
        </FadeIn>

        <StaggerContainer 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10 perspective-2000"
          delayChildren={0.1}
          staggerChildren={0.2}
        >
          {services.map((service, index) => (
            <StaggerItem key={index}>
              <TiltCard service={service} />
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
};

export default Services;

