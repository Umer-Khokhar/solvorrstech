import NoiseBg from "../NoiseBg";
const AboutHero = () => {
  // Custom SVG Illustration Component
  const TechIllustration = () => (
    <svg
      viewBox="0 0 400 300"
      xmlns="http://www.w3.org/2000/svg"
      className="w-full h-full"
    >
      <defs>
        <linearGradient id="glow" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" style={{ stopColor: "#a855f7", stopOpacity: 1 }} />
          <stop
            offset="100%"
            style={{ stopColor: "#ec4899", stopOpacity: 1 }}
          />
        </linearGradient>
        <filter id="softGlow" height="200%" width="200%" x="-50%" y="-50%">
          <feMorphology
            operator="dilate"
            radius="1"
            in="SourceAlpha"
            result="thicken"
          />
          <feGaussianBlur in="thicken" stdDeviation="5" result="blurred" />
          <feFlood floodColor="rgba(168, 85, 247, 0.5)" result="glowColor" />
          <feComposite
            in="glowColor"
            in2="blurred"
            operator="in"
            result="softGlow_colored"
          />
          <feMerge>
            <feMergeNode in="softGlow_colored" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>
      </defs>

      {/* <!-- Main flowing shape --> */}
      <path
        d="M 50,150 C 100,50 250,50 300,150 S 400,250 350,250"
        fill="none"
        stroke="url(#glow)"
        strokeWidth="2"
        style={{ filter: "url(#softGlow)" }}
      />

      {/* <!-- UI Card element --> */}
      <g transform="translate(180 100) rotate(15)">
        <rect
          x="0"
          y="0"
          width="150"
          height="90"
          rx="10"
          fill="rgba(255,255,255,0.05)"
          stroke="rgba(255,255,255,0.2)"
          strokeWidth="1"
          className="backdrop-blur-sm"
        />
        <text x="15" y="25" fill="white" fontSize="12" fontWeight="bold">
          Dashboard
        </text>
        <path d="M 20 45 H 80" stroke="#a855f7" strokeWidth="4" rx="2" />
        <path d="M 20 60 H 120" stroke="#ec4899" strokeWidth="4" rx="2" />
        <path d="M 20 75 H 60" stroke="#a855f7" strokeWidth="4" rx="2" />
      </g>

      {/* <!-- Small floating node --> */}
      <g transform="translate(60 80)">
        <circle
          cx="0"
          cy="0"
          r="15"
          fill="rgba(236, 72, 153, 0.1)"
          stroke="#ec4899"
          strokeWidth="1"
        />
        <circle cx="0" cy="0" r="5" fill="#ec4899" />
      </g>

      {/* <!-- Medium floating node --> */}
      <g transform="translate(320 220)">
        <circle
          cx="0"
          cy="0"
          r="25"
          fill="rgba(168, 85, 247, 0.1)"
          stroke="#a855f7"
          strokeWidth="1"
        />
        <circle cx="0" cy="0" r="8" fill="#a855f7" />
      </g>
    </svg>
  );

  return (
    <NoiseBg>
      <section className="relative overflow-hidden bg-paper">
        <div className="relative min-h-[90vh] flex z-20 items-center mt-12 max-w-[1400px] mx-auto px-6 lg:px-8 py-24 sm:py-32">
          <div className="grid z-20 grid-cols-1 lg:grid-cols-2 gap-x-12 gap-y-20 items-center">
            {/* Left Column: Text Content */}
            <div className="text-center lg:text-left">
              <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight text">
                Turning Complexity Into
                <span className="text-gradient"> Seamless</span> Digital
                Experiences.
              </h1>
              <p className="mt-6 text-lg text-n-3 max-w-xl mx-auto lg:mx-0">
                Every obstacle is an invitation to innovate. At Solvorr Tech, we
                cut through complexity—designing sleek web apps, automating the
                tedious, and driving digital marketing that actually converts.
                When growth feels stuck, we're the team that gets things moving.
              </p>
              <div className="mt-10 flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-8">
                <div className="text-center">
                  <p className="text-4xl font-bold ">7+</p>
                  <p className="text-sm text-gray-400 mt-1">
                    Years of Experience
                  </p>
                </div>
                <div className="w-px h-12 bg-gray-700 hidden sm:block"></div>
                <div className="text-center">
                  <p className="text-4xl font-bold">9.3K+</p>
                  <p className="text-sm text-gray-400 mt-1">Happy Customers</p>
                </div>
              </div>
            </div>

            {/* Right Column: Illustration */}
            <div className="relative flex justify-center items-center h-full min-h-[300px] lg:min-h-[400px]">
              <div className="w-full max-w-lg">
                <TechIllustration />
              </div>
            </div>
          </div>
        </div>
      </section>
    </NoiseBg>
  );
};

export default AboutHero;
