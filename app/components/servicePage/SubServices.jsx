"use client"
import { services } from "../../constants";
import Link from "next/link";
import { Heading } from "../";
import Arrow from "../../assets/svg/Arrow";
import { GradientLight } from "../design/Benefits";
import SubClip from "@/app/assets/svg/SubClip";
import { useState } from "react";

const SubServices = ({ subServices }) => {
    const [ activeService, setActiveService ] = useState(0)
  return (
    <div id="sub-services" className={"pt-[5rem] py-12 xl:py-16"}>
      <div className="container relative z-2">
        <h2 className="h2 text-center mb-8">
          Build Smart Systems With Solvorr
        </h2>

        <div className="relative w-full h-auto px-6">
  {/* Background Image */}
  <div
    style={{ backgroundImage: "url('/services/sub-bg.webp')" }}
    className="absolute inset-0 bg-cover bg-center bg-no-repeat rounded-3xl"
  ></div>
  
  <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-8 p-6 w-full h-auto">
    {/* Left Side - Service Titles */}
    <div className="flex flex-col justify-center gap-8">
      {subServices.map((service, index) => (
        <div key={index} className="group cursor-pointer" onClick={() => setActiveService(index)}>
          <h3 className={`${activeService === index ? "text-white/90" : "text-white/60"} text-lg hover:text-white md:text-4xl lg:text-4xl font-light border-b border-white/30 hover:border-white transition-all duration-300 py-6`}>
            {service.title}
            <span className="text-xl ml-4 text-white/60">
              /0{index + 1}
            </span>
          </h3>
        </div>
      ))}
    </div>

    {/* Right Side - Service Details Card */}
    <div className="flex items-center h-full justify-center w-full">
      <div className="bg-white/95 backdrop-blur-sm h-full rounded-3xl p-8 md:p-12 max-w-xl w-full shadow-2xl">
        {/* Icon */}
        <div className="w-20 h-20 bg-blue-400 rounded-2xl flex items-center justify-center mb-6">
          <img 
            src={subServices[activeService]?.icon} 
            alt={subServices[activeService]?.title}
            className="w-12 h-12"
          />
        </div>

        {/* Title */}
        <h3 className="text-3xl font-semibold text-gray-900 mb-4">
          {subServices[activeService]?.title}
        </h3>

        {/* Description */}
        <p className="text-gray-600 text-lg mb-8 leading-relaxed">
          {subServices[activeService]?.description}
        </p>

        {/* Feature List */}
        <ul className="space-y-4 mb-8">
          {subServices[0]?.features?.map((feature, idx) => (
            <li key={idx} className="flex items-start gap-3">
              <div className="w-5 h-5 rounded-full border-2 border-gray-400 mt-1 flex-shrink-0"></div>
              <span className="text-gray-700 text-lg">{feature}</span>
            </li>
          ))}
        </ul>

        {/* View Details Button */}
        <button className="px-8 py-3 border-2 border-gray-900 rounded-full text-gray-900 font-medium hover:bg-gray-900 hover:text-white transition-colors">
          View Details
        </button>
      </div>
    </div>
  </div>
</div>
      </div>
    </div>
  );
};

export default SubServices;
