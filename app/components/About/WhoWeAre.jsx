import {Section, Heading} from "../index.js";
import {AboutUs, grid, AboutBg, check} from "../../assets/index.js";
import React from "react";
import {GradientLight} from "../design/Benefits.jsx";
import {aboutBenifits} from "../../constants/index.js";


const WhoWeAre = () => {
    return (
        <div className={"!px-0 bg-n-7 !py-12"}>
        <div className={"!px-0 bg-n-7 !py-20"}>
            <div className="container">
                <Heading title={`About Us - Who We Are`}/>
                <div
                    className="relative flex flex-col-reverse md:flex-row items-center lg:justify-center gap-10 xl:mx-auto">
                    {/* content section  */}
                    <div className="relative ">
                        <p className="body-2 text-n-3 max-w-3xl mb-4">
                            We are a team of four skilled professionals dedicated to helping small businesses establish
                            a strong online presence. Our expertise lies in web development, custom dashboards, API
                            integrations, and full-stack applications.
                        </p>
                        <p className="body-2 text-n-3 max-w-3xl mb-4">
                            Our goal? To provide affordable, high-quality, and scalable solutions tailored to small
                            businesses. Whether you're looking for a website, web app, or backend API, we ensure that
                            our solutions are designed to help you grow.
                        </p>
                        <ul className={`flex flex-col gap-6 mt-12`}>
                            {aboutBenifits.map((item) => (
                                <li key={item.id}
                                    className={`inline-flex lg:max-w-[25rem] gap-4 pb-4 border-b border-n-1/10`}>
                                    <img src={check} alt={item.title}/>
                                    <p>{item.title}</p>
                                </li>
                            ))}
                        </ul>
                    </div>
                    <div className="relative z-3 border border-n-1/10 rounded-3xl overflow-hidden">
                        {/* AboutUs Image - Highest Priority */}
                        <img
                            src={AboutUs}
                            alt="portfolio image"
                            className="relative p-8 z-10 w-full object-cover"
                            width={700}
                        />

                        {/* Gradient Light (Should be below AboutUs) */}
                        <div className="absolute opacity-40 inset-0 z-0">
                            <GradientLight/>
                        </div>

                        {/* Grid Image (Should be below AboutUs but above Gradient) */}
                        <div className="absolute inset-0 z-5 opacity-60">
                            <img src={grid} className="w-full h-full object-cover opacity-70" alt="grid image"/>
                        </div>
                    </div>
                </div>
            </div>
        // </div>
=======
        </div>
    );
}

export default WhoWeAre;