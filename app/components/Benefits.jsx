import { services } from "../constants";
import Link from 'next/link'
import { Heading } from "./";
import Arrow from "../assets/svg/Arrow";
import { GradientLight } from "./design/Benefits";
import ClipPath from "../assets/svg/ClipPath";
// import {benefitCard1} from "../assets";

const Benefits = () => {
  return (
    <div id="features" className={"pt-[5rem] py-12 xl:py-16"}>
      <div className="container relative z-2">
        <Heading
          className="w-full md:max-w-md lg:max-w-2xl"
          title="Expert Web Solutions: From Code to Completion"
        />

        <div className="flex flex-wrap justify-center gap-10 mb-10">
          {services.map((benefit) => (
            <div
              className="block border-b border-l border-n-4/80 md:border-n-4/40 rounded-3xl  z-1 relative p-0.5 bg-no-repeat bg-cover bg-center md:max-w-[24rem]"
              key={benefit.id}
            >
              <div className="relative z-2 flex flex-col min-h-[22rem] p-[2.4rem] pointer-events-none">
                <h3 className="h5 mb-5">{benefit.title}</h3>
                <p className="body-2 text-n-3">{benefit.text}</p>
                <div className="flex items-center mt-auto">
                  <img src={benefit.iconUrl} alt={benefit.title} loading="lazy" />
                  <Link href={"#"}
                    className="font-code ml-auto pointer-events-auto cursor-pointer text-xs uppercase font-bold"
                  >
                    Explore more
                  </Link>
                  <Arrow />
                </div>
              </div>
              {benefit.light && <GradientLight />}
              <div
                className="absolute inset-0 bg-n-7/90 backdrop-blur-xl blur-3xl"
                style={{
                  clipPath: "url(#benefits)",
                }}
              >
                <div className="absolute inset-0 opacity-0 hover:opacity-40">
                  {benefit.imageUrl && (
                    <img src={benefit.imageUrl} loading="lazy" alt="benefit url" />
                  )}
                </div>
              </div>
              <ClipPath />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Benefits;
