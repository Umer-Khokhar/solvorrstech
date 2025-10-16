import {ContactForm, Section} from "../index.js";
import {GradientLight} from "../design/Benefits.jsx";

const ContactUs = () => {
    return (
        <Section className={`z-5`}>
            <div className="container !px-0 md:!px-6 relative z-1 min-h-screen pt-10 mt-4 ">
                <div className={`text-center relative z-10`}>
                <h1 className="h1 font-code mb-4 text-n-1">Contact Us</h1>
                <p className="body-1 text-n-3">We will get back to you immediately.</p>
                </div>
                    <div className={` z-5 opacity-50`}>
                    <GradientLight />
                    </div>
                <div className={'max-w-4xl z-20 relative bg-n-5/40 border border-n-1/20 backdrop-blur mx-auto px-4 lg:px-8 py-6 rounded-none md:rounded-3xl mt-8'}>
                    <ContactForm />
                </div>
            </div>
        </Section>
    );
}

export default ContactUs;