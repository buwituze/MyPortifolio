import { useState, useEffect } from "react";
import { Mail, Phone } from "lucide-react";

const Footer = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [showContacts, setShowContacts] = useState(false);
  const [isTransitioning, setIsTransitioning] = useState(false);

  const rotatingContent = [
    {
      type: "quote",
      text: "Building digital experiences that matter",
      subtext: "One line of code at a time",
    },
    {
      type: "status",
      text: "Currently crafting cool stuff in Kigali 🇷🇼",
      subtext: "Available for interesting projects",
    },
    {
      type: "quote",
      text: "Code is poetry written in logic",
      subtext: "Always learning, always building",
    },
    {
      type: "status",
      text: "Open to collaborate & create",
      subtext: "Let's build something amazing together",
    },
    {
      type: "quote",
      text: "Turning ideas into reality",
      subtext: "Through clean code and creative solutions",
    },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setIsTransitioning(true);
      setTimeout(() => {
        setCurrentIndex((prev) => (prev + 1) % rotatingContent.length);
        setIsTransitioning(false);
      }, 300);
    }, 6000); // Increased to 6 seconds

    return () => clearInterval(interval);
  }, []);

  const handleDotClick = (index: number) => {
    if (index !== currentIndex) {
      setIsTransitioning(true);
      setTimeout(() => {
        setCurrentIndex(index);
        setIsTransitioning(false);
      }, 300);
    }
  };

  const currentContent = rotatingContent[currentIndex];

  return (
    <footer className="relative bg-transparent border-t border-slate-700/30 overflow-visible min-h-[200px] flex items-center justify-center">
      {/* Subtle background effects */}
      <div className="absolute inset-0 pointer-events-none opacity-30">
        <div className="absolute top-8 left-12 w-1 h-1 bg-cyan-400/60 rounded-full animate-pulse"></div>
        <div className="absolute top-16 right-20 w-1.5 h-1.5 bg-orange-400/50 rotate-45"></div>
        <div className="absolute bottom-12 left-1/4 w-1 h-1 bg-blue-500/40 rounded-full animate-pulse"></div>
        <div className="absolute bottom-8 right-1/3 w-1.5 h-1.5 bg-purple-400/50 rotate-45"></div>
      </div>

      <div className="relative z-10 text-center px-8">
        {/* Name with contact speech bubble */}
        <div className="mb-8 relative" style={{ zIndex: 1000 }}>
          <div
            className="relative inline-block cursor-pointer"
            onMouseEnter={() => setShowContacts(true)}
            onMouseLeave={() => setShowContacts(false)}
          >
            <h2 className="text-2xl md:text-3xl font-bold tracking-wider opacity-60 hover:opacity-90 transition-opacity duration-300">
              <span className="inline-block relative">
                <span
                  className="text-transparent"
                  style={{
                    WebkitTextStroke: "1px white",
                    WebkitTextFillColor: "transparent",
                  }}
                >
                  BENITHA
                </span>
                <span className="absolute inset-0 text-cyan-400/50 blur-sm">
                  BENITHA
                </span>
              </span>
            </h2>

            {/* Speech bubble contact popup */}
            <div
              className={`fixed left-1/2 transform -translate-x-1/2 transition-all duration-300 ${
                showContacts
                  ? "opacity-100 scale-100"
                  : "opacity-0 scale-95 pointer-events-none"
              }`}
              style={{
                top: "calc(65vh - 200px)",
                zIndex: 1001,
              }}
            >
              <div className="bg-slate-800/95 backdrop-blur-sm border border-slate-700/50 rounded-xl p-4 min-w-[300px] shadow-2xl">
                <div className="space-y-3">
                  <p className="text-sm text-white/70 text-center mb-3">
                    Let's connect!
                  </p>

                  <a
                    href="mailto:benithatuze@gmail.com"
                    className="flex items-center gap-3 text-white/90 hover:text-blue-400 transition-all duration-300 hover:scale-105 group px-3 py-2 rounded-lg hover:bg-blue-400/10"
                  >
                    <Mail size={16} />
                    <span className="text-sm font-medium">
                      benithatuze@gmail.com
                    </span>
                  </a>

                  <a
                    href="tel:0790100718"
                    className="flex items-center gap-3 text-white/90 hover:text-orange-400 transition-all duration-300 hover:scale-105 group px-3 py-2 rounded-lg hover:bg-orange-400/10"
                  >
                    <Phone size={16} />
                    <span className="text-sm font-medium">0790100718</span>
                  </a>
                </div>

                {/* Speech bubble arrow pointing down to name */}
                <div className="absolute top-full left-1/2 transform -translate-x-1/2">
                  <div className="w-0 h-0 border-l-[8px] border-r-[8px] border-t-[8px] border-l-transparent border-r-transparent border-t-slate-800/95"></div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Main rotating content area with slide transitions */}
        <div className="relative overflow-hidden h-22">
          <div
            className={`transition-all duration-300 ease-in-out ${
              isTransitioning
                ? "transform translate-x-full opacity-0"
                : "transform translate-x-0 opacity-100"
            }`}
          >
            <div className="space-y-3">
              <p className="text-xl md:text-2xl font-medium text-white/90 leading-relaxed">
                {currentContent.text}
              </p>
              <p className="text-sm md:text-base text-white/60 font-light">
                {currentContent.subtext}
              </p>
            </div>
          </div>
        </div>

        {/* Interactive indicator dots */}
        <div className="flex justify-center space-x-3 mt-6">
          {rotatingContent.map((_, index) => (
            <button
              key={index}
              onClick={() => handleDotClick(index)}
              className={`w-2 h-2 rounded-full transition-all duration-300 hover:scale-125 cursor-pointer ${
                index === currentIndex
                  ? "bg-cyan-400/80 scale-110 shadow-lg shadow-cyan-400/50"
                  : "bg-white/30 hover:bg-white/50"
              }`}
              aria-label={`Go to content ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
