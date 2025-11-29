"use client"
import { ScrollParallax } from "react-just-parallax";
import Section from "./Section";
import { curve, heroBackground, robot } from "../assets";
import { Button, Notification } from "./";
import { BackgroundCircles, Gradient, BottomLine } from "./design/Hero";
import { heroIcons } from "../constants";
import ThemeBackground from "./ThemeBackground";

const Hero = () => {
    return (
        <div
            className={`pt-[12rem] -mt-[5.75rem] relative`}
            id={"hero"}
        >
               <ThemeBackground lightSrc={"./feature-bg.svg"} darkSrc={"./feature-bg-dark.svg"}/>
            <div className="container relative">
                <div className="relative z-1 max-w-[62rem] mx-auto text-center mb-[4rem] md:mb-20 lg:mb-[6rem]">
                    <h1 className="h1 mb-6">
                        Custom Web Solutions – Build, Scale, and Succeed
                    </h1>
                    <p className="body-1 max-w-3xl mx-auto text-n-2 lg:mb-8">
                        We craft websites, dashboards, APIs, full-stack applications, SEO, and Digital Marketing tailored to your needs. Scalable, efficient, and designed for success!
                    </p>
                    <Button href={"/contact"} className={"text-black"} white>
                        Get Started
                    </Button>
                </div>
                <div className="relative max-w-[23rem] mx-auto lg:max-w-5xl ">
                    <div className="relative p-0.5 rounded-2xl bg-conic-gradient">
                        <div className="relative bg-n-8 rounded-[1rem] z-2">
                            <div className="h-[1.4rem] bg-n-10 rounded-t-[0.9rem]" />
                            <div className="aspect-[33/40] z-1 rounded-b-[0.9rem] overflow-hidden md:aspect-[688/490] lg:aspect-[1024/490]">
                                <img
                                    src={robot}
                                    alt={robot}
                                    className="w-full z-1 scale-[1.7] translate-y-8 md:scale-[1] md:-translate-y-[10%] lg:-translate-y-[23%]"
                                    width={1024}
                                    height={490}
                                    loading="lazy"
                                />
                                <ScrollParallax isAbsolutelyPositioned>
                                    <ul className="hidden lg:flex absolute -left-[5.7rem] bottom-[7.5rem] px-1 py-1 bg-n-9/40 backdrop-blur border border-n-1/10 rounded-2xl">
                                        {heroIcons.map((icon, index) => (
                                            <li className="p-5" key={index}>
                                                <img src={icon} alt="icon" width={24} height={25} />
                                            </li>
                                        ))}
                                    </ul>
                                </ScrollParallax>
                                <ScrollParallax isAbsolutelyPositioned>
                                    <Notification
                                        className={
                                            "hidden xl:flex absolute -right-[5.5rem] bottom-[11.8rem] backdrop-blur rounded-2xl p-3.5 bg-n-9/40"
                                        }
                                        title={"Your Digital partner"}
                                    />
                                </ScrollParallax>
                            </div>
                        </div>
                        <Gradient />
                    </div>
                    {/*<div className="absolute -top-[60%] left-1/2 -translate-x-1/2 w-[234%] md:w-[138%] md:-top-[46%] lg:-top-[104%] -z-1">*/}
                    {/*    <img*/}
                    {/*        src={heroBackground}*/}
                    {/*        alt="Hero Background image"*/}
                    {/*        className="w-full"*/}
                    {/*        width={1440}*/}
                    {/*        height={1800}*/}
                    {/*        loading="lazy"*/}
                    {/*    />*/}
                    {/*</div>*/}
                </div>
            </div>
        </div>
    );
};

export default Hero;