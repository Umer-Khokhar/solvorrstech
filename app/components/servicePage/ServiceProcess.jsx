import React from 'react';
import { TrendingUp, RefreshCw, Target, ClipboardList } from 'lucide-react';
import { TechBackground } from "../";

const process = [
  {
    title: "Initial website audit",
    text: "Assess your website's SEO performance and backlink.",
    icon: "./icons/icon1.svg",
    number: "01"
  },
  {
    title: "Competitor analysis",
    text: "Analyze link strategies to find valuable opportunities.",
    icon: "./icons/icon2.svg",
    number: "02"
  },
  {
    title: "Targeted campaign",
    text: "Connect with relevant sites to secure quality backlinks.",
    icon: "./icons/icon3.svg",
    number: "03"
  },
  {
    title: "Reporting",
    text: "Track performance and provide regular progress updates.",
    icon: "./icons/icon4.svg",
    number: "04"
  },
];

const ServiceProcess = () => {
  return (
    <div className='w-full relative py-12 md:py-32 px-4 bg-white dark:bg-n-8'>
      <TechBackground />
      <div className="content text-center mb-12 md:mb-20">
        <h2 className="text-3xl md:text-4xl mb-4 lg:text-5xl font-bold text-gray-900">The Way We Deliver</h2>
        <p className='text-n-4 body-1 max-w-2xl mx-auto'>We combine planning, execution, and continuous improvement to ensure every project succeeds.</p>
      </div>
      
      <div className='container relative'>
        {/* Background pattern image */}
        <div className='absolute hidden inset-0 xl:flex items-start justify-start pointer-events-none px-4'>
          <img 
            src="./process-shape.png" 
            className='w-full h-auto opacity-100 dark:invert' 
            alt="Process shape" 
          />
        </div>

        {/* Process cards overlaid on top */}
        <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 place-items-start gap-6 lg:gap-8 relative z-10 py-8'>
          {process.map((item, index) => (
            <div key={index} className='flex flex-col justify-start items-start bg-transparent rounded-lg p-6 xl:p-4'>
              {/* Icon */}
              <div className={`w-16 h-16 mb-4`}>
                <img src={item.icon} alt={item.title} className='xl:w-full w-12 h-auto'/>
              </div>
              
              {/* Content */}
              <h3 className='text-lg xl:text-xl font-bold mb-3 text-n-1'>{item.title}</h3>
              <p className='text-sm md:text-base text-n-4 dark:text-gray-300 max-w-xs'>
                {item.text}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ServiceProcess;