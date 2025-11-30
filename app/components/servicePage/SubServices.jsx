import { services } from "../../constants";
import Link from 'next/link'
import { Heading } from "../";
import Arrow from "../../assets/svg/Arrow";
import { GradientLight } from "../design/Benefits";
import SubClip from "@/app/assets/svg/SubClip";


const SubServices = ({subServices}) => {
    return (
        <div id="sub-services" className={"pt-[5rem] py-12 xl:py-16"}>
            <div className="container relative z-2">
                <h2 className="h2 text-center mb-8">Build Smart Systems With Solvorr</h2>

                <div className="flex flex-wrap justify-center gap-10 mb-10">
                    {subServices.map((subService, index) => (
                        <div
                            className="block z-1 border-r border-b rounded-2xl border-n-4/40  relative p-0.5 bg-no-repeat bg-cover bg-center md:max-w-[24rem] max-h-[20rem]"
                            key={index}
                        >
                                    <img src={subService.icon} alt={subService.title} loading="lazy" className={"absolute top-2 left-4 w-12 h-12"} />
                            <div className="relative z-2 mt-10 flex flex-col min-h-[22rem] p-[2.4rem]">
                                <h3 className="h5 mb-5">{subService.title}</h3>
                                <p className="body-2 text-n-3">{subService.description}</p>
                            </div>
                            <div
                                className="absolute inset-0.5 bg-n-5 dark:bg-n-6 blur-3xl backdrop-blur-2xl"
                                style={{
                                    clipPath: "url(#subCard)",
                                }}
                            >
                            </div>
                            <SubClip />
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default SubServices;
