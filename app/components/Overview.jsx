import React from 'react';
import {Target } from 'lucide-react'

const Overview = () => {
    return (
        <section className={"py-12 lg:py-28 bg-[#0F1424]"}>
            <div className="container">
                <div  className={'flex flex-col-reverse md:flex-row-reverse gap-10 items-start justify-center'}>
                <div className={"md:w-[50%]"}>
                    <h3 className={'h3 font-bold'}><Target className={'inline-block w-12 h-12 text-color-1'}/> Building Digital Solutions That Drive <span className={'text-gradient'}>Growth</span></h3>
                    <h6 className={"h6 my-4 text-n-2"}>We help brands transform ideas into scalable, high-performing digital products — combining technology, creativity, and strategy for measurable results.</h6>
                    <p className={'text-n-3 mb-4'}>At Solvorr Tech, we don’t just build websites and applications — we craft digital ecosystems designed to solve real business challenges.<br />From custom web development to automation systems and digital marketing, our end-to-end solutions empower companies to boost visibility, streamline operations, and scale effortlessly.</p>
                    <button className="bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white px-4 py-4 rounded-full text-base font-medium transition-all duration-200 shadow-lg hover:shadow-xl">Talk to Our Experts
                    </button>
                </div>
                <div className={"flex-1"}>
                    <img src="/overview.jpg" alt="overview image" className={"md:h-[520px] object-cover rounded-3xl"}/>
                </div>
                </div>
            </div>
        </section>
    );
};

export default Overview;