import React from "react";
import {Button, Section} from "./";
import {LeftCurve, RightCurve} from "./design/Collaboration"
import {collabApps, collabContent, collabText} from "../constants";
import {brainwaveSymbol, check} from "../assets";

const Collaboration = () => {
    return (
        <div className={`bg-n-7 py-[4rem] my-[2rem]`}>
            <div className="container lg:flex">
                <div className="max-w-[35rem]">
                    <h2 className="h2 mb-4 md:mb-8">
                        Our Process – From Idea to Reality
                    </h2>
                    <p className={'body-2 mb-6 text-n-3'}>We follow a structured and efficient approach to turn your ideas into a powerful digital presence. Our process ensures that every project is well-planned, user-friendly, and future-proof.</p>
                    <ul className="max-w-[22rem] mb-10 md:mb-14 flex flex-col gap-6">
                        {collabContent.map((content) => (
                            <li key={content.id}>
                                <div className="flex items-center gap-6">
                                    <img src={check} alt="check icon" loading="lazy"/>
                                    <p>{content.title}</p>
                                </div>
                            </li>
                        ))}
                    </ul>
                    <Button className={"flex items-center"}>Try it now</Button>
                </div>
                <div className="lg:ml-auto xl:w-[38rem]">
                    <p className="body-2 text-n-4 mt-4 mb-16 lg:mb-32 lg:w-[22rem] as lg:mx-auto">
                        {collabText}
                    </p>
                    <div
                        className="relative left-1/2 flex lg:-mt-[4rem] -translate-x-1/2 w-[22rem] aspect-square border border-n-4 rounded-full scale:75 md:scale-100">
                        <div className="w-60 aspect-square flex m-auto border border-n-4 rounded-full">
                            <div className="w-[6rem] aspect-square m-auto p-[0.2rem] bg-conic-gradient rounded-full">
                                <div className="flex items-center justify-center w-full h-full bg-n-8 rounded-full">
                                    <img src={brainwaveSymbol} alt="brainwave"/>
                                </div>
                            </div>
                        </div>
                        <ul>
                            {collabApps.map((app, index) => (
                                <li
                                    key={index}
                                    className={`absolute top-0 left-1/2 h-1/2 -ml-[1.6rem] origin-bottom rotate-${
                                        index * 45
                                    }`}
                                >
                                    <div
                                        className={`relative -top-[1.6rem] flex w-[3.2rem] h-[3.2rem] bg-n-7 border border-n-1/15 rounded-xl -rotate-${
                                            index * 45
                                        } `}
                                    >
                                        <img
                                            className="m-auto"
                                            width={app.width}
                                            height={app.height}
                                            alt={app.title}
                                            src={app.icon}
                                            loading="lazy"
                                        />
                                    </div>
                                </li>
                            ))}
                        </ul>
                        <LeftCurve/>
                        <RightCurve/>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Collaboration;
