import React from "react";
import { TrendingUp, RefreshCw, Target, ClipboardList } from "lucide-react";
import Image from "next/image";
import { TechBackground } from "../";
import { StaggerContainer, StaggerItem } from "../animations/Stagger";
import FadeIn from "../animations/FadeIn";

const ServiceProcess = ({ serviceProccess }) => {
  // Fallback static icons to ensure we always have an icon
  const staticIcons = [
    "./icons/icon1.svg",
    "./icons/icon2.svg",
    "./icons/icon3.svg",
    "./icons/icon4.svg",
  ];

  // Use dynamic data if available, otherwise fallback to empty array (shouldn't happen if parent checks)
  // Limit to 4 items as requested
  const processItems = (serviceProccess || [])
    .slice(0, 4)
    .map((item, index) => ({
      title: item.title,
      text: item.description, // Map description to text
      // Use dynamic image if available, otherwise fallback to static icon based on index
      icon: item.image || staticIcons[index % staticIcons.length],
      number: `0${index + 1}`,
    }));

  return (
    <div className="w-full relative py-12 md:py-32 px-4 bg-white dark:bg-n-8">
      <TechBackground />
      <div className="content text-center mb-12 md:mb-20">
        <FadeIn>
          <h2 className="text-3xl md:text-4xl mb-4 lg:text-5xl font-bold text-n-1">
            The Way We Deliver
          </h2>
          <p className="text-n-4 body-1 max-w-2xl mx-auto">
            We combine planning, execution, and continuous improvement to ensure
            every project succeeds.
          </p>
        </FadeIn>
      </div>

      <div className="container relative">
        {/* Background pattern image */}
        <div className="absolute hidden inset-0 xl:flex items-start justify-start pointer-events-none px-4">
          <Image
            src="/process-shape.png"
            width={800}
            height={600}
            className="w-full h-auto opacity-100 dark:invert"
            alt="Process shape"
          />
        </div>

        {/* Process cards overlaid on top */}
        <StaggerContainer className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 place-items-start gap-6 lg:gap-8 relative z-10 py-8">
          {processItems.map((item, index) => (
            <StaggerItem
              key={index}
              className="flex flex-col justify-start items-start bg-transparent rounded-lg p-6 xl:p-4"
            >
              {/* Icon and Number */}
              <div className="w-full flex justify-between items-start mb-4">
                <div className="w-16 h-16">
                  <Image
                    src={item.icon}
                    alt={item.title}
                    width={64}
                    height={64}
                    className="xl:w-full w-12 h-auto"
                  />
                </div>
                <div className="text-3xl font-bold text-n-1 opacity-25 dark:text-white">
                  {item.number}
                </div>
              </div>

              {/* Content */}
              <h3 className="text-lg xl:text-xl font-bold mb-3 text-n-1">
                {item.title}
              </h3>
              <p className="text-sm md:text-base text-n-4 dark:text-gray-300 max-w-xs">
                {item.text}
              </p>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </div>
  );
};

export default ServiceProcess;
