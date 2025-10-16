import {Button} from "../index.js";

const ContactForm = () => {
    return (
        <form className="flex flex-col items-center justify-center w-full pb-12">
            <div className="f_l flex flex-col md:flex-row flex-1 gap-6 w-full">
                <div className="first_name flex flex-col w-full">
                    <label htmlFor="">First Name</label>
                    <input type="text" className="w-full px-3 py-3 bg-n-4/30 rounded-xl border border-n-1/20"/>
                </div>
                <div className="last_name flex flex-col w-full">
                    <label htmlFor="">Last Name</label>
                    <input type="text" className="w-full px-3 py-3 bg-n-4/30 rounded-xl border border-n-1/20"/>
                </div>
            </div>
            <div className="e_phone_Number flex flex-1 flex-col md:flex-row gap-6 w-full mt-4">
                <div className="email flex flex-col w-full">
                    <label htmlFor="">Email</label>
                    <input type="text" className="w-full px-3 py-3 bg-n-4/30 rounded-xl border border-n-1/20"/>
                </div>
                <div className="phone_Number flex flex-col w-full">
                    <label htmlFor="">Phone Number</label>
                    <input type="text" className="w-full px-3 py-3 bg-n-4/30 rounded-xl border border-n-1/20"/>
                </div>
            </div>
            <div className="msg flex flex-col w-full mt-8">
                <label htmlFor="" className={`mb-4 h5`}>How can we help?</label>
                <textarea name="" id="" cols="30" rows="10" className={`px-3 py-3.5 bg-n-4/30 rounded-xl border border-n-1/20`}></textarea>
            </div>
            <div className="btn flex justify-end items-end w-full mt-4">
                <button className={`bg-blue-600 border lg:min-w-[12rem] border-blue-600 hover:bg-transparent transition-all py-2.5 lg:py-4 px-4 rounded-md`}>Get in touch</button>
            </div>
        </form>
    );
}

export default ContactForm;
