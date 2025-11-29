import React from "react";
import { Heading, Section } from "./";
import { check, service1, service2, service3 } from "../assets";
import {brainwaveServices, brainwaveServicesIcons, choseUsServices} from "../constants";

const PortfolioSection = () => {
  return (
    <div className={`py-[4rem]`}>
      <div className="container">
        <Heading
          title={`Who We Are`}
          text={`Explore our recent projects to discover how we've empowered businesses to achieve their digital goals, enhance their online presence, and drive long-term growth.`}
        />
        <div className="relative">
          <div className="relative z-1 flex items-center h-[39rem] mb-5 border border-n-1/20 rounded-3xl overflow-hidden xl:h-[46rem] lg:p-20">
            <div className="absolute top-0 left-0 w-full h-full md:w-4/5 xl:w-auto">
              <img
                className="w-full h-full object-cover md:object-right"
                src={service1}
                width={800}
                height={700}
                alt="service_one"
                loading="lazy"
              />
            </div>
            <div className="relative z-1 max-w-[24rem] px-8 lg:px-3 ml-auto">
              <h4 className="h3 mb-5">About Us</h4>
              <p className="text-n-3 body-2 mb-4">
                We are a team of web experts helping small businesses with custom websites, dashboards, and API integrations. Soon, we’ll also offer SEO and digital marketing to boost your growth.
              </p>
              <ul className="flex gap-3 flex-col">
                {brainwaveServices.map((item, index) => (
                  <li
                    key={index}
                    className="flex gap-4 border-t border-n-6 py-3"
                  >
                    <img src={check} alt="check image" loading="lazy" />
                    <p>{item}</p>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
        <div className="relative z-1 grid max-w-[100%] gap-5 lg:grid-cols-2">
          <div className="relative min-h-[39rem] border border-n-1/10 rounded-3xl overflow-hidden">
            <div className="absolute inset-0">
              <img
                src={service2}
                className="w-full h-full object-cover opacity-60"
                alt="Project no. 2"
                loading="lazy"
              />
            </div>
            <div className="absolute inset-0 px-8 py-6 flex flex-col justify-end">
              <h4 className="h3 mb-5">Why Choose Us?</h4>
              <p className="text-n-3 body-2 mb-8">
                We provide affordable, scalable, and tailored solutions for small businesses. With a skilled team and a commitment to quality, we build user-friendly websites, custom dashboards, and APIs to help you
              </p>
              <ul className={'flex flex-col gap-6'}>
                {choseUsServices.map((item) => (
                    <li className={'flex gap-4 border-b  border-n-1/20 pb-4'} key={item.id}>
                      <img src={check} alt="check image" loading="lazy"/>
                      <p>{item.title}</p>
                    </li>
                ))}
              </ul>
            </div>
          </div>
          <div className="relative p-4 z-1 xl:min-h-[40rem] border border-n-1/20 rounded-3xl">
            <div className="py-12 px-4 xl:px-8">
              <h4 className="h3 mb-4">Our Team</h4>
              <p className="body-2 text-n-3 mb-8">TWe are a dedicated team of professionals, specialising in web development, custom dashboards, Wordpress eCommerce,  API integrations and SEO. Together, we create efficient and scalable solutions to help small businesses grow.</p>
              <ul className="flex items-center w-full justify-between ">
                {brainwaveServicesIcons.map((icon, index) => (
                  <li key={index} className="flex justify-center  items-center w-[2.8rem] md:w-[3.5rem] h-[2.8rem] md:h-[3.5rem] bg-n-6 rounded-2xl">
                    <div className="flex justify-center items-center">
                      <img
                        src={icon}
                        width={24}
                        height={24}
                        alt={icon}
                        loading="lazy"
                      />
                    </div>
                  </li>
                ))}
              </ul>
            </div>
            <div className="relative h-[15rem] sm:h-[23rem] lg:h-[25rem] rounded-3xl bg-n-8 overflow-hidden">
              <img 
              className="w-full h-full object-cover"
              src={service3} 
              alt="project 3" 
              loading="lazy"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PortfolioSection;
