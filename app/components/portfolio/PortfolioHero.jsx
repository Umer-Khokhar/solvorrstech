import React from "react";
import Section from "../Section";
import { grid, HeroPortfolio } from "../../assets";
const PortfolioHero = () => {
  return (
    <div className={"!px-0 py-32 md:py-4  mb-8 bg-n-7"}>
    <div className={"!px-0 !py-4 bg-n-7"}>
      <div className="container ">
        <div className="relative lg:h-screen flex flex-col md:flex-row items-center lg:justify-between xl:mx-auto overflow-hidden">
          {/* content section  */}
          <div className="relative ">
            <h1 className="h1 max-w-xl mb-4 lg:mb-8">Work We're Proud Of</h1>
            <p className="body-1 text-n-3 max-w-xl mb-4">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum
              sequi nesciunt libero autem, quia possimus reprehenderit incidunt
              necessitatibus non accusamus.
            </p>
          </div>
          <div className="relative">
            <div className="relative z-1">
              <img
                src={HeroPortfolio}
                alt="portfolio image"
                width={550}
                height={390}
              />
            </div>
          </div>
        </div>
          <div className="absolute md:right-0 bottom-[2rem] md:bottom-0 lg:top-12">
        <img src={grid} className="opacity-70" alt="grid image" width={500} height={400} />
      </div>
      </div>
    </div>
    </div>
  );
};

export default PortfolioHero;
