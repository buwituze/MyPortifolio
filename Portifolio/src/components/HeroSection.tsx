import { useState, useEffect } from "react";

const HeroSection = () => {
  const [currentTech, setCurrentTech] = useState(0);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [displayText, setDisplayText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [typingSpeed, setTypingSpeed] = useState(150);

  const techStack = [
    "Full-Stack Developer",
    "Machine Learning Student",
    "Salesforce Admin",
    "Python Developer",
    "UI/UX Designer",
  ];

  // Typing effect for tech stack
  useEffect(() => {
    const currentWord = techStack[currentTech];

    const timer = setTimeout(() => {
      if (!isDeleting) {
        if (displayText.length < currentWord.length) {
          setDisplayText(currentWord.substring(0, displayText.length + 1));
          setTypingSpeed(150);
        } else {
          setTimeout(() => setIsDeleting(true), 1500);
        }
      } else {
        if (displayText.length > 0) {
          setDisplayText(displayText.substring(0, displayText.length - 1));
          setTypingSpeed(100);
        } else {
          setIsDeleting(false);
          setCurrentTech((prev) => (prev + 1) % techStack.length);
        }
      }
    }, typingSpeed);

    return () => clearTimeout(timer);
  }, [displayText, isDeleting, currentTech, typingSpeed]);

  useEffect(() => {
    const handleMouseMove = (e: any) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <section className="relative min-h-screen flex items-center px-4 md:px-8 lg:px-12 pt-20">
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
            <span className="text-2xl animate-wave">👋</span>
            <span>Hello, I'm</span>
          </div>

          {/* Name Title */}
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-extrabold leading-tight">
            <span className="block bg-gradient-to-r from-orange-500  via-blue-500 to-blue-600 bg-clip-text text-transparent drop-shadow-lg">
              Benitha Uwituze
            </span>
          </h1>

          {/* Role Container */}
          <div className="text-2xl text-white min-h-12 flex items-center justify-center lg:justify-start">
            <span className="opacity-80">I'm a </span>
            <span className="text-orange-500 font-semibold ml-2 drop-shadow-lg min-w-max">
              {displayText}
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
            {/* Animated Hexagonal Tech Ring Background */}
            <div className="absolute inset-0 flex items-center justify-center">
              {/* Outer Ring */}
              <div className="absolute w-80 h-80 rounded-full border-2 border-orange-500/30 animate-spin-slow">
                <div className="absolute -top-2 left-1/2 transform -translate-x-1/2 w-4 h-4 bg-orange-500 rounded-full animate-pulse"></div>
                <div
                  className="absolute -right-2 top-1/2 transform -translate-y-1/2 w-3 h-3 bg-blue-500 rounded-full animate-pulse"
                  style={{ animationDelay: "0.5s" }}
                ></div>
                <div
                  className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-4 h-4 bg-orange-500 rounded-full animate-pulse"
                  style={{ animationDelay: "1s" }}
                ></div>
                <div
                  className="absolute -left-2 top-1/2 transform -translate-y-1/2 w-3 h-3 bg-blue-500 rounded-full animate-pulse"
                  style={{ animationDelay: "1.5s" }}
                ></div>
              </div>

              {/* Inner Ring */}
              <div className="absolute w-60 h-60 rounded-full border border-blue-500/20 animate-spin-reverse">
                <div className="absolute -top-1 left-1/2 transform -translate-x-1/2 w-2 h-2 bg-blue-400 rounded-full"></div>
                <div className="absolute -right-1 top-1/2 transform -translate-y-1/2 w-2 h-2 bg-orange-400 rounded-full"></div>
                <div className="absolute -bottom-1 left-1/2 transform -translate-x-1/2 w-2 h-2 bg-blue-400 rounded-full"></div>
                <div className="absolute -left-1 top-1/2 transform -translate-y-1/2 w-2 h-2 bg-orange-400 rounded-full"></div>
              </div>

              {/* Floating Tech Icons */}
              <div className="absolute w-96 h-96 animate-float">
                <div className="absolute top-4 right-8 bg-slate-800/80 p-2 rounded-lg backdrop-blur-sm border border-orange-500/30">
                  <div className="text-orange-500 text-sm font-mono">
                    {"{ }"}
                  </div>
                </div>
                <div className="absolute bottom-8 left-4 bg-slate-800/80 p-2 rounded-lg backdrop-blur-sm border border-blue-500/30">
                  <div className="text-blue-500 text-sm font-mono">{"</>"}</div>
                </div>
                <div className="absolute top-16 left-8 bg-slate-800/80 p-2 rounded-lg backdrop-blur-sm border border-orange-500/30">
                  <div className="text-orange-500 text-sm font-mono">ML</div>
                </div>
                <div className="absolute bottom-16 right-4 bg-slate-800/80 p-2 rounded-lg backdrop-blur-sm border border-blue-500/30">
                  <div className="text-blue-500 text-sm font-mono">AI</div>
                </div>
              </div>
            </div>

            {/* Profile Image */}
            <div className="relative z-10 flex justify-center items-center">
              <div className="relative h-fill">
                {/* Glow effect behind image */}
                <div className="absolute inset-0 bg-gradient-to-br from-orange-500/20 to-blue-500/20 rounded-full blur-xl animate-pulse"></div>

                <img
                  src="/public/images/Benitha Portifolio.png"
                  alt="Benitha Uwituze"
                  className="relative w-[100%] h-[100%] object-cover rounded-lg shadow-2xl"
                />
              </div>
            </div>
          </div>

          {/* Code Snippet - Positioned at bottom center */}
          <div className="absolute -bottom-8 -left-[5%] transform -translate-x-1/2 translate-y-1/2 bg-slate-900/95 p-4 rounded-lg border border-orange-500/40 backdrop-blur-md shadow-2xl shadow-slate-900/80 z-20">
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

      <style>{`
        @keyframes wave {
          0%, 100% { transform: rotate(0deg); }
          10%, 30% { transform: rotate(14deg); }
          20% { transform: rotate(-8deg); }
          40% { transform: rotate(14deg); }
          50% { transform: rotate(10deg); }
          60% { transform: rotate(0deg); }
        }
        
        .animate-wave {
          animation: wave 2s ease-in-out infinite;
          transform-origin: 70% 70%;
        }
        
        @keyframes spin-slow {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        
        @keyframes spin-reverse {
          from { transform: rotate(360deg); }
          to { transform: rotate(0deg); }
        }
        
        @keyframes float {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-10px) rotate(2deg); }
        }
        
        .animate-spin-slow {
          animation: spin-slow 20s linear infinite;
        }
        
        .animate-spin-reverse {
          animation: spin-reverse 15s linear infinite;
        }
        
        .animate-float {
          animation: float 6s ease-in-out infinite;
        }
      `}</style>
    </section>
  );
};

export default HeroSection;
