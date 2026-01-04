"use client"
import React from "react";
import MagicButton from "./design/MagicButton";

const coreValues = [
  {
    name: "Innovation", 
    icon: "./icons/innovation.webp", 
    description: "Continuously refining SEO to stay ahead of search engine updates."
  },
  {
    name: "Client Focused", 
    icon: "./icons/client.webp", 
    description: "Your success drives us; we craft custom SEO solutions for impact."
  },
  {
    name: "Transparency", 
    icon: "./icons/transparency.webp", 
    description: "Clear communication and honest reporting at every step."
  },
]
const PortfolioSection = () => {

  return (
    <div>
      <div className="max-w-[90%] mx-auto bg-gradient-to-r p-16 md:p-28 flex flex-col items-center justify-center rounded-4xl from-color-1/10 via-color-2/10 to-color-3/10">
      <div className="max-w-6xl mx-auto h-full">
        <div className="heading text-center">
          <h2 className="h3 font-semibold mb-20">Committed to Your Business Success</h2>
        </div>
        <div className="relative flex items-center flex-col md:flex-row justify-between gap-16">
          <div className="max-w-[400px]">
            <h4 className="h5 font-semibold mb-5">Core Values</h4>
            <ul className="flex items-start justify-center gap-8 flex-col">
              {coreValues.map((value, index) => (
                <li className="flex items-center gap-4" key={index}>
                  <div className="bg-n-8 dark:bg-color-2 shadow-xl rounded-full p-3 m-auto">
                  <img src={value.icon} alt={value.name} width={55} height={55}/>
                  </div>
                  <p><b>{value.name}</b>: {value.description}</p>
                </li>
              ))}
            </ul>
          </div>
          <div className="self-stretch bg-n-2/25 w-[1.5px]"></div>
          <div className="max-w-[400px] flex flex-col gap-16">
            <div>
              <h4 className="h5 font-semibold mb-1">Our Mission</h4>
              <p>Our mission is to boost online presence with cutting-edge SEO, driving organic traffic, increasing visibility, and delivering measurable results.</p>
            </div>
            <div>
              <h4 className="h5 font-semibold mb-1">Our Vision</h4>
              <p>Our mission is to boost online presence with cutting-edge SEO, driving organic traffic, increasing visibility, and delivering measurable results.</p>
            </div>
          </div>
        </div>
        </div>
        <div className="mt-10 md:mt-20">
       <MagicButton children="Learn more About Us" />
        </div>
      </div>
    </div>
  );
};

export default PortfolioSection;
