import React from "react";
import { Wrench, Cpu, Lightbulb, Eye } from "lucide-react";
import Image from "next/image";
import { FadeIn, StaggerContainer, StaggerItem, BlurIn } from "./animations";

export default function WhyChooseUs() {
  const features = [
    {
      icon: Wrench,
      title: "Advanced Tools",
      description:
        "We use cutting-edge software solutions to help you with your business",
      color: "text-blue-400",
      bg: "bg-blue-500/10",
    },
    {
      icon: Cpu,
      title: "Innovation",
      description:
        "Stay updated on the latest trends and technologies, ensuring we provide innovative and impactful solutions.",
      color: "text-purple-400",
      bg: "bg-purple-500/10",
    },
    {
      icon: Lightbulb,
      title: "Creative Ideas",
      description:
        "Every project we undertake is more than a task; it's a canvas where advancement excels and where ideas converge.",
      color: "text-amber-400",
      bg: "bg-amber-500/10",
    },
    {
      icon: Eye,
      title: "Our Mission & Vision",
      description:
        "Our mission at MDP is crystal clear: to be the catalyst that transforms businesses into digital powerhouses.",
      color: "text-emerald-400",
      bg: "bg-emerald-500/10",
    },
  ];

  return (
    <div className="relative py-24 lg:py-32 px-4 overflow-hidden bg-n-8 transition-colors duration-300">
      {/* Background Gradients */}
      <div className="absolute top-0 left-1/4 w-[50rem] h-[50rem] bg-indigo-500/20 rounded-full blur-[10rem] pointer-events-none mix-blend-screen" />
      <div className="absolute bottom-0 right-1/4 w-[40rem] h-[40rem] bg-purple-500/20 rounded-full blur-[8rem] pointer-events-none mix-blend-screen" />

      <div className="relative container mx-auto z-10">
        {/* Header */}
        <FadeIn>
          <div className="text-center max-w-3xl mx-auto mb-20">
            <span className="inline-block py-1 px-3 rounded-full bg-n-7 border border-n-6 text-xs font-code uppercase tracking-wider text-n-3 mb-4">
              Why Choose Us
            </span>
            <h2 className="h2 mb-6">
              We Build Digital <br className="hidden md:block" />
              <span className="text-gradient">Experiences That Matter</span>
            </h2>
            <p className="body-1 text-n-4">
               Partner with us to transform your vision into reality with cutting-edge technology and creative excellence.
            </p>
          </div>
        </FadeIn>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left side - 3D Illustration */}
          <BlurIn delay={0.3} className="relative order-2 lg:order-1 flex justify-center">
            <div className="relative z-10 w-full max-w-[500px] aspect-square">
               <div className="absolute inset-0 bg-gradient-to-tr from-blue-500/30 to-purple-500/30 rounded-full blur-3xl opacity-40 animate-pulse" />
              <Image
                src={"/choose.webp"}
                alt="Why Choose Us Illustration"
                fill
                className="object-contain drop-shadow-2xl hover:scale-105 transition-transform duration-700 ease-out"
              />
            </div>
          </BlurIn>

          {/* Right side - Features */}
          <StaggerContainer className="order-1 lg:order-2 grid gap-6" delayChildren={0.5}>
            {features.map((feature, idx) => {
              const Icon = feature.icon;
              return (
                <StaggerItem key={idx}>
                  <div 
                    className="group relative p-6 rounded-2xl bg-n-8/50 border border-n-6 hover:border-color-1/50 transition-colors duration-300 overflow-hidden backdrop-blur-sm"
                  >
                    <div className="absolute inset-0 bg-gradient-to-r from-color-1/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
                    
                    <div className="relative flex items-start gap-6">
                      <div className={`w-14 h-14 rounded-xl ${feature.bg} flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300`}>
                        <Icon className={`w-7 h-7 ${feature.color}`} strokeWidth={2} />
                      </div>
                      <div>
                        <h3 className="h5 text-n-1 group-hover:text-color-1 transition-colors duration-300 mb-2">
                          {feature.title}
                        </h3>
                        <p className="body-2 text-n-4 leading-relaxed group-hover:text-n-3 transition-colors duration-300">
                          {feature.description}
                        </p>
                      </div>
                    </div>
                  </div>
                </StaggerItem>
              );
            })}
          </StaggerContainer>
        </div>
      </div>
    </div>
  );
}

