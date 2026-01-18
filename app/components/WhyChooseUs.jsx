import React from "react";
import { Wrench, Cpu, Lightbulb, Eye } from "lucide-react";
import Image from "next/image";

export default function WhyChooseUs() {
  const features = [
    {
      icon: Wrench,
      title: "Advanced Tools",
      description:
        "We use cutting-edge software solutions! to help you with your business",
      color: "#FF9800",
    },
    {
      icon: Cpu,
      title: "Innovation",
      description:
        "Stay Updated On The Latest Trends And Technologies, Ensuring We Provide Innovative And Impactful Solutions.",
      color: "#FF9800",
    },
    {
      icon: Lightbulb,
      title: "Creative Ideas",
      description:
        "Every project we undertake is more than a task; and it's a canvas where advancement excels and where ideas converge to create digital masterpieces.",
      color: "#FF9800",
    },
    {
      icon: Eye,
      title: "Our Mission & Vision",
      description:
        "Our mission at MDP is crystal clear: to be the catalyst that transforms businesses into digital powerhouses.",
      color: "#FF9800",
    },
  ];

  return (
    <div className="relative py-16 px-4 overflow-hidden">
      {/* Curved lines background pattern */}
      <div className="absolute inset-0 opacity-10">
        <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern
              id="curves"
              x="0"
              y="0"
              width="100"
              height="100"
              patternUnits="userSpaceOnUse"
            >
              <path
                d="M0,50 Q25,20 50,50 T100,50"
                stroke="white"
                strokeWidth="0.5"
                fill="none"
              />
              <path
                d="M0,70 Q25,40 50,70 T100,70"
                stroke="white"
                strokeWidth="0.5"
                fill="none"
              />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#curves)" />
        </svg>
      </div>

      {/* Circular pattern top right */}
      <div className="absolute top-12 right-12 w-32 h-32 opacity-20">
        <div className="relative w-full h-full">
          {[...Array(24)].map((_, i) => (
            <div
              key={i}
              className="absolute top-1/2 left-1/2 w-16 h-0.5 bg-n-1 origin-left"
              style={{
                transform: `rotate(${i * 15}deg)`,
              }}
            />
          ))}
          <div className="absolute top-1/2 left-1/2 w-12 h-12 bg-white rounded-full transform -translate-x-1/2 -translate-y-1/2" />
        </div>
      </div>

      <div className="relative container mx-auto">
        {/* Header */}
        <h2 className="h2 font-bold text-center mb-16">Why Choose Us!</h2>

        <div className="grid lg:grid-cols-2 gap-8 items-center">
          {/* Left side - Features */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {features.map((feature, idx) => {
              const Icon = feature.icon;
              return (
                <div key={idx} className="space-y-4">
                  <div className="flex items-start gap-4">
                    <div
                      className="w-12 h-12 rounded-lg flex items-center justify-center flex-shrink-0"
                    >
                      <Icon className="w-12 h-12 text-color-1" strokeWidth={2.5} />
                    </div>
                    <div>
                      <h3 className="text-n-2 h4  mb-2">
                        {feature.title}
                      </h3>
                      <p className="text-n-4 text-base leading-relaxed">
                        {feature.description}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Right side - 3D Illustration */}
          <div className="relative flex items-center justify-center lg:justify-end">
            <Image
              src={"/choose.webp"}
              alt="whychooseus"
              width={500}
              height={500}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
