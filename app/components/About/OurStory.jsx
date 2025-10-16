import { CheckCircle, Zap, Eye, Trophy } from "lucide-react";

export default function OurStorySection() {
    return (
        <section className="relative bg-[#0F1424] py-20 lg:py-32 px-4 sm:px-6 lg:px-8 overflow-hidden">

            <div className="relative container">
                {/* Gradient Headline */}
                <h2 className="h2 font-semibold text-center mb-16 lg:mb-24">
                    Our Story
                </h2>

                        <div className="bg-gray-900/70 backdrop-blur-sm rounded-2xl border border-gray-800 shadow-2xl transition duration-500 hover:border-cyan-500/50 hover:shadow-cyan-500/20 flex items-stretch">
                        <div className="w-[60%] p-8 lg:p-10">
                            <h3 className="h3 font-bold leading-snug mb-4 text-white">
                                <Trophy className="inline w-8 h-8 mr-2 text-purple-600" />Built on Innovation, Fueled by the
                                <span className="text-gradient"> Drive to Solve</span>
                            </h3>
                            <p className="text-lg leading-relaxed text-n-2">
                                Founded with the vision of solving complex business challenges, Solvorr Tech is built on innovation, creativity, and trust. Our journey started with noticing how many businesses struggled with outdated websites, poor online presence, and limited automation. We set out to change that. Step by step, we’ve helped businesses move beyond barriers — building modern websites, scalable applications, and effective digital marketing strategies that drive growth. Our story is about solving problems, creating impact, and empowering businesses to thrive in the digital age.
                            </p>
                    <div className="grid grid-cols-2 mt-4 gap-4 relative ">

                        <div className="p-6 bg-gray-900 rounded-xl border border-gray-800 transition duration-300 hover:shadow-indigo-500/20 hover:bg-gray-800 relative lg:pl-10">

                            <h4 className="flex items-center text-xl font-semibold text-color-3 mb-4">
                                <Zap className="w-5 h-5 mr-2" /> Our Mission
                            </h4>
                            <p className="text-gray-400 mb-4 text-sm">
                                ChatFinity builds AI agents that act like real specialists—fast, smart, and
                                always ready to help. Our goal is to bring human-like support with
                                machine-level speed and consistency.
                            </p>
                        </div>

                        {/* Vision Card */}
                        <div className="p-6 bg-gray-900 rounded-xl border border-gray-800 transition duration-300 hover:shadow-cyan-500/20 hover:bg-gray-800 relative lg:pl-10">

                            <h4 className="flex items-center text-xl font-semibold text-color-1 mb-4">
                                <Eye className="w-5 h-5 mr-2" /> Our Vision
                            </h4>
                            <p className="text-gray-400 mb-4 text-sm">
                                We believe the future of AI is personal, responsive, and effortless.
                                ChatFinity aims to lead that shift by making every AI interaction feel
                                intuitive and natural.
                            </p>
                        </div>
                    </div>
                        </div>
                            <div className="flex-1 min-h-full">
                                <img src="/story.png" alt="story" className="h-full object-cover"/>
                            </div>
                        </div>
                    </div>

                </section>
    );
}