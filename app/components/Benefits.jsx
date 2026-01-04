import services from "@/lib/services.json";
import Link from "next/link";
import { ArrowRight, Code, Layout, Zap } from "lucide-react";
import { Heading } from "./";
import { ImageClipPath, CardShapeOne } from "./design/ClipPaths";

const Benefits = () => {
  return (
    <div id="features" className={"pt-[5rem] py-12 xl:py-16"}>
      <ImageClipPath />
      <div className="container relative z-2">
        <Heading
          className="w-full md:max-w-md lg:max-w-2xl"
          title="Expert Web Solutions: From Code to Completion"
        />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mx-auto gap-10 mb-10">
          {services.map((benefit, index) => (
            <div
              key={index}
              className={`group relative p-4 md:p-6 backdrop-blur-sm dark:border border-n-2/10  rounded-3xl transition-all duration-500 hover:scale-[1.02]  hover:border-color-1/50 shadow-2xl
                }`}
            >
              {/* Gradient Orb Background */}
              <div
                className={`absolute -top-20 -right-20 w-64 h-64 bg-gradient-to-br ${benefit.gradient} blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-700 rounded-full`}
              ></div>

              {/* Content Container */}
              <div className="relative z-10 flex flex-col h-full">
                {/* Icon Badge */}
                <div className="flex items-start text-center justify-between">
                  <div
                    className={`w-11 h-11 md:w-14 md:h-14 bg-color-1 rounded-lg md:rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg`}
                  >
                    <Code className="w-6 h-6 md:w-7 md:h-7 text-white" />
                  </div>

                  <p className="text-4xl sm:text-5xl font-bold text-n-5">0{index + 1}</p>
                </div>

                {/* Text Content */}
                <div className="flex flex-col gap-3 mb-6">
                  <h3 className="text-2xl font-bold group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-n-2 group-hover:to-n-4 transition-all duration-300">
                    {benefit.title}
                  </h3>
                  <p className="text-n-4 leading-relaxed text-sm">
                    {benefit.text}
                  </p>
                </div>

                {/* Image Container with Clip Path */}
                <div className="relative mt-auto">
                  <div
                    className="relative w-full h-48 md:h-72 overflow-hidden rounded-2xl group-hover:rounded-3xl transition-all duration-500"
                    style={{ clipPath: "url(#monitor-shape)" }}
                  >
                    {/* Overlay Gradient */}
                    <div
                      className={`absolute inset-0 bg-gradient-to-t bg-black opacity-40 group-hover:opacity-60 transition-opacity duration-500 z-10`}
                    ></div>

                    {/* Image */}
                    <img
                      src={benefit.imageUrl}
                      alt={benefit.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                    />

                    {/* Scan Line Effect */}
                    <div className="absolute inset-0 bg-gradient-to-b from-transparent via-white/5 to-transparent translate-y-[-100%] group-hover:translate-y-[100%] transition-transform duration-1000 z-20"></div>
                  </div>

                  {/* Floating Button */}
                  <button
                    className={`absolute bottom-0 left-1/2 -translate-x-1/2 flex items-center gap-3`}
                  >
                    Get Started
                    <ArrowRight className="w-5 h-5 group-hover/btn:translate-x-1 transition-transform duration-300" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Benefits;
