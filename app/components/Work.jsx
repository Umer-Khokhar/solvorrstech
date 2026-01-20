// components/ProjectCarousel.tsx
"use client";
import { ArrowRight } from "lucide-react";
import { Swiper, SwiperSlide } from "swiper/react";
import { roadmap } from "../constants";
import { Autoplay, EffectFade, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import { Projects } from ".";
import { CardShapeTwo } from "./design/ClipPaths";
import { FadeIn, BlurIn } from "./animations";

// Mock data – replace with your actual projects
const getLoopableSlides = (items) => {
  if (items.length < 5) {
    // Duplicate until we have at least 6 items
    let result = [...items];
    while (result.length < 6) {
      result = [...result, ...items];
    }
    return result;
  }
  return items;
};

const loopableRoadmap = getLoopableSlides(roadmap);


export default function Work() {
  return (
    <div className="md-py-32 py-12 transition-colors duration-300">
      <FadeIn>
        <div className="text-center max-w-xl mx-auto">
          <h2 className="h2 font-semibold">Real Projects. Real Clients. Real Results.</h2>
        </div>
      </FadeIn>
      
      <BlurIn delay={0.3}>
        <div className="w-full flex gap-5 mx-auto px-4 py-8">
          <CardShapeTwo />
          <Swiper
            modules={[Autoplay, Pagination]}
            spaceBetween={20}
            slidesPerView={2.7}
            centeredSlides={true}
            loop={true}
            autoplay={{
              delay: 2800,
              pauseOnMouseEnter: false,
              disableOnInteraction: true,
            }}
            pagination={{
              clickable: true,
              // dynamicBullets: true,
            }}
            className="mySwiper"
          >
            {loopableRoadmap.map((project, index) => (
              <SwiperSlide key={index}>
                <div className="w-auto h-full relative p-4 rounded-2xl bg-n-7 border-color-1/20 dark:hover:border-color-1/50  transition-all duration-150 border group shadow dark:shadow-n-4/20">
                  <div
                    className="w-full h-[525px] relative"
                    style={{ clipPath: "url(#card-shape-2)" }}
                  >
                    <img
                      src="https://ainex-react.vercel.app/_next/image?url=%2Fimages%2Fproject%2Fproject-4.webp&w=640&q=75"
                      alt="image"
                      className="w-full h-full object-cover group-hover:scale-105 duration-500 transition-all"
                    />
                  </div>
                  <div className="flex items-center justify-between pt-4">
                    <h3 className="text-3xl font-bold">
                      {project.title}
                    </h3>
                    <button className="bg-n-8 p-4 transition-all duration-200 cursor-pointer rounded-full group group-hover:bg-color-1">
                      <ArrowRight className=" -rotate-40 w-8 h-8 hover:-rotate-0 transition-all duration-150" />
                    </button>
                  </div>
                </div>
                
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </BlurIn>
    </div>
  );
}

