import React from 'react';
import { techStackWebDev } from "../../assets/index"
const TechStack = () => {
    return (
        <section className={"py-12 md:py-28"}>
           <div className="container">
               <div className={'text-center mb-12'}>
                   <h2 className="h2 mb-3">Our Tech Stack</h2>
                   <p className={"text-n-2 body-2 max-w-2xl mx-auto "}>Equipped with the latest tools, our teams deliver impactful solutions designed to grow your business.
                   </p>
               </div>
               <div className={"grid grid-cols-4 gap-4 md:gap-8 lg:grid-cols-7"}>
                   {techStackWebDev.map((icon, index) => (
                       <div key={index} className={"w-20 lg:w-44 bg-n-7 h-auto p-4 md:p-8 border border-n-2/50 rounded-lg"}>
                           <img src={icon} alt="tech-icon" className={"w-full md:w-[60%] mx-auto"}/>
                       </div>
                   ))}
               </div>
           </div>
        </section>
    );
};

export default TechStack;