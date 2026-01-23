// components/Work.jsx
"use client";

import { ArrowUpRight, ChevronLeft, ChevronRight } from "lucide-react";
import { Swiper, SwiperSlide } from "swiper/react";
import { roadmap } from "../constants";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { motion } from "framer-motion";
import { FadeIn, BlurIn } from "./animations";
import { TechBackground } from ".";
import Button from "./Button";

const ProjectCard = ({ project }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="group relative h-[520px] w-full overflow-hidden rounded-[2.5rem] bg-white/90 dark:bg-n-8/40 backdrop-blur-3xl border border-n-2/10 dark:border-white/10 transition-all duration-500 hover:bg-white dark:hover:bg-white/5 hover:shadow-[0_40px_80px_-15px_rgba(0,0,0,0.1)] dark:hover:shadow-2xl dark:hover:shadow-color-1/10 hover:-translate-y-2 shadow-[0_10px_30px_-10px_rgba(0,0,0,0.05)]"
    >
      {/* Background Glow */}
      <div className="absolute -top-24 -right-24 w-64 h-64 bg-color-1/5 blur-[100px] rounded-full group-hover:bg-color-1/10 transition-colors duration-500" />

      {/* Image Container */}
      <div className="relative h-[280px] w-full overflow-hidden">
        <img
          src={project.imageUrl.src || project.imageUrl}
          alt={project.title}
          className="h-full w-full object-cover transition-transform duration-1000 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-white/95 dark:from-n-8/80 via-transparent to-transparent" />

        {/* Status Tag */}
        {project.status && (
          <div className="absolute top-6 left-6 px-4 py-1.5 rounded-full bg-white/90 dark:bg-n-8/90 backdrop-blur-md border border-n-1/5 dark:border-white/10 shadow-sm">
            <span className="text-[10px] font-bold uppercase tracking-widest text-color-1">
              {project.status === "done" ? "Live Project" : "In Progress"}
            </span>
          </div>
        )}
      </div>

      {/* Content */}
      <div className="relative p-8 flex flex-col h-[240px]">
        <div className="mb-2">
          <span className="text-[10px] font-bold font-code uppercase tracking-[0.2em] text-n-1/40 dark:text-white/40">
            {project.date}
          </span>
        </div>

        <h3 className="h5 font-bold text-n-1 dark:text-white mb-3 group-hover:text-color-1 transition-colors duration-300">
          {project.title}
        </h3>

        <p className="body-2 text-n-3 dark:text-white/60 line-clamp-3 mb-6">
          {project.text}
        </p>

        {/* Footer */}
        <div className="mt-auto flex items-center justify-between pt-6 border-t border-n-1/5 dark:border-white/5">
          <Button
            variant="ghost"
            size="sm"
            className="group/btn px-0 hover:bg-transparent"
            rightIcon={
              <div className="w-8 h-8 rounded-full border border-n-1/10 dark:border-white/10 flex items-center justify-center group-hover/btn:bg-color-1 group-hover/btn:border-transparent group-hover/btn:text-white transition-all duration-300">
                <ArrowUpRight className="w-4 h-4 group-hover/btn:rotate-45 transition-transform" />
              </div>
            }
          >
            <span className="text-xs font-bold uppercase tracking-wider text-n-1 dark:text-white group-hover/btn:text-color-1 transition-colors">
              View Case Study
            </span>
          </Button>
        </div>
      </div>
    </motion.div>
  );
};

export default function Work() {
  return (
    <section className="section relative py-24 lg:py-32 overflow-hidden bg-n-8/5 dark:bg-transparent">
      <div className="container relative z-2">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-16 lg:mb-20">
          <div className="max-w-[600px]">
            <FadeIn>
              <h2 className="h2 font-bold mb-6">
                Real Projects.{" "}
                <span className="text-color-1">Real Results.</span>
              </h2>
            </FadeIn>
            <BlurIn delay={0.2}>
              <p className="body-1 text-n-1/60 dark:text-white/60">
                A showcase of digital experiences we've crafted for
                forward-thinking brands. From minimalist portfolios to complex
                web ecosystems.
              </p>
            </BlurIn>
          </div>

          <FadeIn delay={0.4}>
            <div className="flex gap-4">
              <button className="swiper-prev w-12 h-12 rounded-full border border-n-1/10 dark:border-white/10 flex items-center justify-center hover:bg-color-1 hover:border-transparent hover:text-white transition-all duration-300 cursor-pointer">
                <ChevronLeft className="w-6 h-6" />
              </button>
              <button className="swiper-next w-12 h-12 rounded-full border border-n-1/10 dark:border-white/10 flex items-center justify-center hover:bg-color-1 hover:border-transparent hover:text-white transition-all duration-300 cursor-pointer">
                <ChevronRight className="w-6 h-6" />
              </button>
            </div>
          </FadeIn>
        </div>

        <div className="relative">
          <Swiper
            modules={[Autoplay, Navigation, Pagination]}
            spaceBetween={30}
            slidesPerView={1.2}
            centeredSlides={false}
            loop={true}
            autoplay={{
              delay: 4000,
              disableOnInteraction: false,
              pauseOnMouseEnter: true,
            }}
            navigation={{
              prevEl: ".swiper-prev",
              nextEl: ".swiper-next",
            }}
            pagination={{
              clickable: true,
              dynamicBullets: true,
            }}
            breakpoints={{
              640: {
                slidesPerView: 2.2,
              },
              1024: {
                slidesPerView: 3,
              },
            }}
            className="!pb-16"
          >
            {roadmap.map((project, index) => (
              <SwiperSlide key={project.id}>
                <ProjectCard project={project} />
              </SwiperSlide>
            ))}
          </Swiper>

          {/* Custom Pagination Style Overrides */}
          <style jsx global>{`
            .swiper-pagination-bullet {
              background: var(--color-n-1) !important;
              opacity: 0.2 !important;
              width: 10px !important;
              height: 10px !important;
            }
            .dark .swiper-pagination-bullet {
              background: white !important;
            }
            .swiper-pagination-bullet-active {
              background: var(--color-color-1) !important;
              opacity: 1 !important;
              width: 24px !important;
              border-radius: 5px !important;
              transition: all 0.3s ease !important;
            }
          `}</style>
        </div>
      </div>
    </section>
  );
}
