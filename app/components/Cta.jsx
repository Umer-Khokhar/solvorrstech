import React from 'react';

const Cta = () => {
    return (
        <section className="pb-10">
            <div className="w-full relative mx-auto py-16 bg-n-7 overflow-hidden">
                    {/* Dashed Top Left Fade Grid */}
                    <div
                        className="absolute inset-0 z-0 opacity-15"
                        style={{
                            backgroundImage: `
        linear-gradient(to right, #e7e5e4 1px, transparent 1px),
        linear-gradient(to bottom, #e7e5e4 1px, transparent 1px)
      `,
                            backgroundSize: "20px 20px",
                            backgroundPosition: "0 0, 0 0",
                            maskImage: `
        repeating-linear-gradient(
              to right,
              black 0px,
              black 3px,
              transparent 3px,
              transparent 8px
            ),
            repeating-linear-gradient(
              to bottom,
              black 0px,
              black 3px,
              transparent 3px,
              transparent 8px
            ),
            radial-gradient(ellipse 80% 80% at 0% 0%, #000 50%, transparent 90%)
      `,
                            WebkitMaskImage: `
  repeating-linear-gradient(
              to right,
              black 0px,
              black 3px,
              transparent 3px,
              transparent 8px
            ),
            repeating-linear-gradient(
              to bottom,
              black 0px,
              black 3px,
              transparent 3px,
              transparent 8px
            ),
            radial-gradient(ellipse 80% 80% at 0% 0%, #000 50%, transparent 90%)
      `,
                            maskComposite: "intersect",
                            WebkitMaskComposite: "source-in",
                        }}
                    />


                <div
                    className="absolute inset-0 z-0 opacity-55"
                    style={{
                        backgroundImage: `
                            radial-gradient(ellipse at 50% 100%, rgba(99, 102, 241, 0.4) 0%, transparent 50%),
                            radial-gradient(ellipse at 50% 100%, rgba(139, 92, 246, 0.3) 0%, transparent 60%),
                            radial-gradient(ellipse at 50% 100%, rgba(236, 72, 153, 0.2) 0%, transparent 70%)
                        `,
                    }}
                />

                {/* Content */}
                <div className="relative z-10 px-6">
                    <div className="text-center">
                        <h3 className="h3 font-bold text-n-1 mb-4">
                            Take your <span className={"text-gradient"}>Business</span> to the next level
                        </h3>
                        <p className="text-lg text-slate-300 mb-8 max-w-2xl mx-auto">
                            Crafting mobile first, high performance websites because we know your customers browse on their phone first.
                        </p>
                        <button className="bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white px-8 py-4 rounded-full text-lg font-semibold transition-all duration-200 shadow-lg hover:shadow-xl hover:scale-105">
                            Request a Quote
                        </button>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Cta;