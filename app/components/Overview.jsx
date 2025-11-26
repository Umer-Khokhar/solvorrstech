import React from 'react';
import {Target } from 'lucide-react'
import {Gradient} from "@/app/components/design/Hero";

const Overview = () => {
    return (
        <section className={"py-12 lg:py-28 bg-n-7"}>
            <div className="container">
                <div  className={'flex flex-col-reverse md:flex-row-reverse gap-10 items-start justify-center'}>
                <div className={"md:w-[50%]"}>
                    <h3 className={'h3 font-bold'}><Target className={'inline-block w-12 h-12 text-color-1'}/> Building Digital Solutions That Drive <span className={'text-gradient'}>Growth</span></h3>
                    <h6 className={"h6 my-4 text-n-2"}>We help brands transform ideas into scalable, high-performing digital products — combining technology, creativity, and strategy for measurable results.</h6>
                    <p className={'text-n-3 mb-4'}>At Solvorr Tech, we don’t just build websites and applications — we craft digital ecosystems designed to solve real business challenges.<br />From custom web development to automation systems and digital marketing, our end-to-end solutions empower companies to boost visibility, streamline operations, and scale effortlessly.</p>
                    <button className="bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white px-4 py-4 rounded-full text-base font-medium transition-all duration-200 shadow-lg hover:shadow-xl">Talk to Our Experts
                    </button>
                </div>
                <div className={"w-full md:w-[40%]  "}>
                    <div className={"lg:h-[450px] h-auto shadow-2xl w-full dark:border-t dark:border-l border-n-5/70 rounded-3xl dark:bg-slate-900 bg-n-7 relative overflow-hidden"}>
                    <div className={"absolute top-50% z-10 inset-0 left-0 bg-gradient-to-b from-color-3 to-color-1 w-20 blur-3xl opacity-30"}>hi</div>
                    <img src="/overview.png" alt="overview image" className={"md:h-full z-50 w-full object-cover rounded-3xl"}/>
                    </div>
                </div>
                </div>
            </div>
        </section>
    );
};

export default Overview;