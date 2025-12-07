import { useState, useEffect } from "react";

const HeroSection = () => {
  const [displayText, setDisplayText] = useState("");
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  const techStack = [
    "FULL-STACK DEVELOPER",
    "MACHINE LEARNING",
    "SALESFORCE ADMIN",
    "PYTHON DEVELOPER",
    "UI/UX DESIGNER",
  ];

  const currentYear = new Date().getFullYear();

  // Typing animation effect
  useEffect(() => {
    const currentText = techStack[currentIndex];
    const typingSpeed = isDeleting ? 50 : 100;

    const timer = setTimeout(() => {
      if (!isDeleting) {
        if (displayText.length < currentText.length) {
          setDisplayText(currentText.substring(0, displayText.length + 1));
        } else {
          setTimeout(() => setIsDeleting(true), 2000);
        }
      } else {
        if (displayText.length > 0) {
          setDisplayText(displayText.substring(0, displayText.length - 1));
        } else {
          setIsDeleting(false);
          setCurrentIndex((prev) => (prev + 1) % techStack.length);
        }
      }
    }, typingSpeed);

    return () => clearTimeout(timer);
  }, [displayText, isDeleting, currentIndex]);

  return (
    <section
      className="relative min-h-screen flex items-center justify-center px-4 md:px-8 lg:px-12 pt-20"
      id="home"
    >
      {/* Background Gradient */}
      {/* <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900"></div> */}

      {/* Centered Content */}
      <div className="relative z-10 w-full max-w-4xl mx-auto text-center space-y-3">
        {/* Tech Stack - Animated with letter spacing */}
        <div className="min-h-[0px] flex items-center justify-center">
          <p className="text-sm md:text-base text-white/60 tracking-[1.3em] uppercase font-light">
            {displayText}
            <span className="animate-pulse">|</span>
          </p>
        </div>

        {/* Portfolio Title with Experience Chip */}
        <div className="relative inline-block">
          <h1 className="text-7xl md:text-8xl lg:text-9xl font-bold text-white tracking-tight">
            PORTFOLIO
          </h1>

          {/* Years of Experience Chip - Right side, slightly down */}
          <div className="absolute top-5 -right-16 md:-right-20 lg:-right-32 bg-gradient-to-r from-orange-500 to-orange-600 text-white px-4 py-2 rounded-full text-xs md:text-sm font-semibold whitespace-nowrap shadow-lg">
            + 3 Years of Experience
          </div>
        </div>

        {/* Name and Year - Aligned horizontally */}
        <div className="flex justify-between items-center w-full px-4 md:px-12 lg:px-16 pt-0">
          <h2 className="text-xl md:text-xl lg:text-xl ml-14 font-bold bg-gradient-to-r from-blue-500 to-blue-600 bg-clip-text text-transparent">
            Benitha Uwituze
          </h2>
          <p className="text-xl md:text-xl lg:text-xl mr-14 bg-gradient-to-r from-blue-500 to-blue-600 bg-clip-text text-transparent">
            {currentYear}
          </p>
        </div>

        {/* CTA Buttons - Blue styled */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center pt-8">
          <a
            href="#contact"
            className="group relative inline-flex items-center justify-center gap-2 px-8 py-2.5 bg-blue-900/20 text-slate-200 font-semibold rounded-full border-2 border-blue-500/40 backdrop-blur-md transition-all duration-300 hover:bg-blue-500/30 hover:-translate-y-1 hover:shadow-lg hover:shadow-blue-500/30"
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
          </a>

          <a
            href="/Benitha Uwituze Rutagengwa - CV.pdf"
            download="Benitha Uwituze Rutagengwa - CV.pdf"
            className="group relative inline-flex items-center justify-center gap-2 px-8 py-2.5 bg-blue-900/20 text-slate-200 font-semibold rounded-full border-2 border-blue-500/40 backdrop-blur-md transition-all duration-300 hover:bg-blue-500/30 hover:-translate-y-1 hover:shadow-lg hover:shadow-blue-500/30"
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
          </a>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
