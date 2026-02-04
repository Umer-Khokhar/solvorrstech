import React from "react";
import { techStackWebDev } from "../../assets/index";
import TechIcon from "./TechIcon";
import FadeIn from "../animations/FadeIn";

const TechStack = ({ technologies }) => {
  const icons =
    technologies && technologies.length > 0 ? technologies : techStackWebDev;

  return (
    <section className={"relative py-20 md:py-32 overflow-hidden"}>
      {/* Background Decorations */}
      <div className="absolute top-1/4 left-0 w-[500px] h-[500px] bg-color-1/5 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-0 w-[500px] h-[500px] bg-color-2/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="container relative z-10">
        <div className={"text-center mb-20"}>
          <FadeIn>
            <span className="tagline mb-4 block text-color-1">
              Technologies
            </span>
            <h2 className="h2 mb-6">
              Our Premium <span className="text-gradient">Tech Stack</span>
            </h2>
            <p className={"text-n-3 dark:text-n-4 body-2 max-w-2xl mx-auto "}>
              We leverage a modern, high-performance tech stack to build
              scalable, future-proof digital solutions tailored to your business
              needs.
            </p>
          </FadeIn>
        </div>

        <div
          className={
            "grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 lg:grid-cols-8 xl:grid-cols-9 gap-4 md:gap-6"
          }
        >
          {icons.map((icon, index) => (
            <TechIcon key={index} icon={icon} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default TechStack;
