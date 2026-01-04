import { CheckCircle, Zap, Eye, Trophy } from "lucide-react";

export default function OurStorySection() {
    return (
        <section className="relative py-4 lg:py-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
            <div className="relative md:container mx-auto">
                {/* Gradient Headline */}
                <h2 className="h2 font-semibold text-center mb-12">
                    Our Story
                </h2>

                {/* Main Card */}
                <div className="bg-n-8/70 backdrop-blur-sm rounded-2xl border border-gray-800 shadow-2xl transition duration-500 hover:border-cyan-500/50 hover:shadow-cyan-500/20 flex flex-col-reverse lg:flex-row items-stretch md:overflow-hidden">

                    {/* Left Content */}
                    <div className="w-full lg:w-[60%] p-6 sm:p-8 lg:p-10">
                        <h3 className="h3 font-bold leading-snug mb-4">
                            <Trophy className="inline w-8 h-8 mr-2 text-purple-600" />
                            Built on Innovation, Fueled by the
                            <span className="text-gradient"> Drive to Solve</span>
                        </h3>
                        <p className="text-base sm:text-lg leading-relaxed text-n-3">
                            Founded with the vision of solving complex business challenges,
                            Solvorr Tech is built on innovation, creativity, and trust. Our
                            journey started with noticing how many businesses struggled with
                            outdated websites, poor online presence, and limited automation.
                            We set out to change that. Step by step, we’ve helped businesses
                            move beyond barriers — building modern websites, scalable
                            applications, and effective digital marketing strategies that
                            drive growth. Our story is about solving problems, creating
                            impact, and empowering businesses to thrive in the digital age.
                        </p>

                        {/* Mission & Vision Grid */}
                        <div className="grid grid-cols-1 sm:grid-cols-2 mt-6 gap-4">
                            {/* Mission Card */}
                            <div className="p-6 bg-transparent rounded-xl border border-gray-800 transition duration-300 hover:shadow-indigo-500/20 hover:bg-gray-800">
                                <h4 className="flex items-center text-xl font-semibold text-color-3 mb-3">
                                    <Zap className="w-5 h-5 mr-2" /> Our Mission
                                </h4>
                                <p className="text-n-1 dark:text-n-4 text-sm leading-relaxed">
                                    Solvorr Tech aims to simplify complexity by crafting smart,
                                    scalable digital products that solve real business problems
                                    efficiently.
                                </p>
                            </div>

                            {/* Vision Card */}
                            <div className="p-6 bg-transparent rounded-xl border border-gray-800 transition duration-300 hover:shadow-cyan-500/20 hover:bg-gray-800">
                                <h4 className="flex items-center text-xl font-semibold text-color-1 mb-3">
                                    <Eye className="w-5 h-5 mr-2" /> Our Vision
                                </h4>
                                <p className="text-n-4 text-sm leading-relaxed">
                                    We envision a world where every business leverages technology
                                    seamlessly — bridging creativity and functionality for
                                    measurable impact.
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* Right Image */}
                    <div className="w-full lg:w-[40%] h-auto sm:h-80 lg:h-auto">
                        <img
                            src="/story.png"
                            alt="Solvorr Story"
                            className="w-full h-full object-cover rounded-b-2xl lg:rounded-b-none lg:rounded-r-2xl"
                        />
                    </div>
                </div>
            </div>
        </section>
    );
}
