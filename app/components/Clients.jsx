import React from 'react';
import {cpb, ibm, indeed, lawnCare, markonify, pizzaOnline, slackLogo} from "@/app/assets";

const Clients = () => {
    const logos = [indeed, slackLogo, cpb, lawnCare, ibm, pizzaOnline, markonify]
    return (
        <section>
            <div className="container text-center">
                <h2 className={"h3 font-bold text-n-1"}>Our Clients We work with</h2>
                <div className={'flex gap-28 items-center mx-auto justify-center w-full mt-20'}>
                    {logos.map((logo, index) => (
                        <img src={logo} alt="logos" key={index} className={'w-32 h-20'}/>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Clients;