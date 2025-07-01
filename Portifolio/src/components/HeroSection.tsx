import { useState, useEffect } from "react";

const HeroSection = () => {
  const [currentTech, setCurrentTech] = useState(0);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  const techStack = [
    "Full-Stack Developer",
    "Machine Learning Student",
    "React Specialist",
    "Python Developer",
    "UI/UX Designer",
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTech((prev) => (prev + 1) % techStack.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const handleMouseMove = (e: any) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <section className="relative min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 flex items-center px-4 md:px-8 lg:px-12 pt-20">
      {/* Animated Background Gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-900/80 via-blue-900/30 to-orange-500/20 animate-pulse"></div>

      {/* Floating Shapes */}
      <div className="absolute inset-0 overflow-hidden">
        <div
          className="absolute top-1/5 left-1/10 w-20 h-20 rounded-full bg-gradient-to-br from-orange-500 to-orange-400 opacity-10 animate-bounce"
          style={{ animationDuration: "20s", animationDelay: "0s" }}
        ></div>
        <div
          className="absolute top-3/5 right-1/5 w-30 h-30 rounded-full bg-gradient-to-br from-blue-500 to-blue-400 opacity-10 animate-bounce"
          style={{ animationDuration: "20s", animationDelay: "-5s" }}
        ></div>
        <div
          className="absolute top-1/10 right-1/5 w-15 h-15 rounded-full bg-gradient-to-br from-orange-600 to-orange-500 opacity-10 animate-bounce"
          style={{ animationDuration: "20s", animationDelay: "-10s" }}
        ></div>
        <div
          className="absolute bottom-1/5 left-1/5 w-25 h-25 rounded-full bg-gradient-to-br from-blue-600 to-blue-500 opacity-10 animate-bounce"
          style={{ animationDuration: "20s", animationDelay: "-15s" }}
        ></div>
      </div>

      {/* Interactive cursor follower */}
      <div
        className="fixed w-5 h-5 bg-orange-500/40 rounded-full pointer-events-none z-50 transition-all duration-100 mix-blend-difference shadow-lg shadow-orange-500/60"
        style={{
          left: mousePosition.x - 10,
          top: mousePosition.y - 10,
        }}
      ></div>

      {/* Hero Content */}
      <div className="relative z-10 w-full max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center">
        {/* Left side - Text content */}
        <div className="space-y-6 text-center lg:text-left order-2 lg:order-1">
          {/* Greeting */}
          <div className="flex items-center justify-center lg:justify-start gap-2 text-lg text-white/80">
            <span className="text-2xl animate-pulse">👋</span>
            <span>Hello, I'm</span>
          </div>

          {/* Name Title */}
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-extrabold leading-tight">
            <span className="block bg-gradient-to-r from-orange-500 via-orange-400 via-blue-500 to-blue-600 bg-clip-text text-transparent animate-pulse drop-shadow-lg">
              Benitha Uwituze
            </span>
          </h1>

          {/* Role Container */}
          <div className="text-2xl text-white min-h-12 flex items-center justify-center lg:justify-start">
            <span className="opacity-80">I'm a </span>
            <span className="text-orange-500 font-semibold ml-2 drop-shadow-lg">
              {techStack[currentTech]}
            </span>
            <span className="text-blue-500 font-bold ml-1 animate-pulse">
              |
            </span>
          </div>

          {/* Description */}
          <p className="text-lg leading-relaxed text-white/90 max-w-lg mx-auto lg:mx-0">
            Passionate about crafting innovative solutions through code, design,
            and AI. I blend creativity with technical precision to build
            exceptional digital experiences.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
            <a
              href="#contact"
              className="group relative inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-orange-500 to-orange-600 text-white font-semibold rounded-full transition-all duration-300 hover:shadow-2xl hover:shadow-orange-500/40 hover:-translate-y-1 overflow-hidden"
            >
              <span className="relative z-10">Let's Connect</span>
              <svg
                className="w-5 h-5 relative z-10"
                viewBox="0 0 24 24"
                fill="none"
              >
                <path
                  d="M7 17L17 7M17 7H7M17 7V17"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-500"></div>
            </a>

            <a
              href="/Benitha_Uwituze_Rutagengwa_CV.pdf"
              download="Benitha_Uwituze_Rutagengwa_CV.pdf"
              className="group relative inline-flex items-center gap-2 px-8 py-4 bg-blue-900/20 text-slate-200 font-semibold rounded-full border-2 border-blue-500/40 backdrop-blur-md transition-all duration-300 hover:bg-blue-500/30 hover:-translate-y-1 hover:shadow-lg hover:shadow-blue-500/30 overflow-hidden"
            >
              <svg
                className="w-5 h-5 relative z-10"
                viewBox="0 0 24 24"
                fill="none"
              >
                <path
                  d="M21 15V19C21 19.5304 20.7893 20.0391 20.4142 20.4142C20.0391 20.7893 19.5304 21 19 21H5C4.46957 21 3.96086 20.7893 3.58579 20.4142C3.21071 20.0391 3 19.5304 3 19V15"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <polyline
                  points="7,10 12,15 17,10"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <line
                  x1="12"
                  y1="15"
                  x2="12"
                  y2="3"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                />
              </svg>
              <span className="relative z-10">Download CV</span>
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-500"></div>
            </a>
          </div>
        </div>

        {/* Right side - Image and visual elements */}
        <div className="flex justify-center items-center relative order-1 lg:order-2">
          <div className="relative w-full max-w-md">
            {/* Morphing Background */}
            <div
              className="absolute inset-0 bg-gradient-to-br from-blue-500 via-orange-500 to-blue-600 rounded-full opacity-80 animate-pulse shadow-2xl shadow-orange-500/40"
              style={{
                borderRadius: "50% 30% 70% 40%",
                animation: "morphing 8s ease-in-out infinite",
              }}
            ></div>

            {/* Profile Image */}
            <div className="relative z-10 flex justify-center items-center p-8">
              <img
                src="/images/Benitha Portifolio.png"
                alt="Benitha Uwituze"
                className="w-67 h-[400px] object-cover transition-transform duration-300 hover:-translate-y-3"
              />
            </div>

            {/* Decorative Elements */}
            <div className="absolute inset-0 z-20">
              {/* Code Snippet */}
              <div className="absolute -bottom-16 right-26 bg-slate-900/95 p-4 rounded-lg border border-orange-500/40 backdrop-blur-md shadow-2xl shadow-slate-900/80 ">
                <pre className="text-orange-500 text-xs font-mono">
                  {`const developer = {
  name: "Benitha",
  skills: ["React", "ML", "Python"],
  passion: "Innovation"
};`}
                </pre>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @keyframes morphing {
          0%,
          100% {
            border-radius: 50% 30% 70% 40%;
          }
          25% {
            border-radius: 30% 70% 40% 50%;
          }
          50% {
            border-radius: 70% 40% 50% 30%;
          }
          75% {
            border-radius: 40% 50% 30% 70%;
          }
        }
      `}</style>
    </section>
  );
};

export default HeroSection;
