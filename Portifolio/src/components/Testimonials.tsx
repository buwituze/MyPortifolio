import { useState, useEffect } from "react";

const Testimonials = () => {
  const [_, setHoveredIndex] = useState<number | null>(null);
  const [__, setMousePosition] = useState({ x: 0, y: 0 });

  const testimonials = [
    {
      image: "/images/anne.jpeg",
      name: "Anne Marie Twagirayezu",
      position: "Fellow ALU Student",
      company: "African Leadership University (ALU)",
      text: "With a meticulous eye for detail and a strong passion for quality, she bridges the gap between vision and execution, making her an exceptional team player.",
    },
    {
      image: "/images/Admin lead.png",
      name: "Uwicyubahiro Honorine",
      position: "Administration Lead",
      company: "African Leadership University (ALU)",
      text: "A dynamic problem-solver who consistently delivers innovative solutions with precision and skill. Always brings clarity and efficiency to complex challenges.",
    },
  ];

  useEffect(() => {
    const handleMouseMove = (e: any) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <section
      className="relative min-h-screen  py-12 px-4 md:px-8 lg:px-12 overflow-hidden"
      id="testimonials"
    >
      <div className="relative z-10 max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-2xl md:text-2xl text-blue-500 lg:text-3xl font-bold mb-6">
            Some Nice Words
          </h2>
          <p className="text-xl text-white/80 max-w-2xl mx-auto">
            What people say about working with me and the impact of our
            collaboration
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="group relative"
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
              style={{ animationDelay: `${index * 200}ms` }}
            >
              {/* Card */}
              <div className="relative bg-gradient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur-md rounded-2xl border border-slate-700/50 p-8 transition-all duration-500 hover:border-orange-500/50 hover:shadow-2xl overflow-hidden">
                {/* Gradient Overlay */}
                {/* <div className="absolute inset-0 bg-gradient-to-br from-orange-500/5 to-blue-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div> */}

                {/* Quote Icon */}
                <div className="relative z-10 mb-6">
                  <div className="text-4xl text-orange-500/70 group-hover:text-orange-400 transition-colors duration-300">
                    "
                  </div>
                </div>

                {/* Testimonial Text */}
                <div className="relative z-10 mb-8">
                  <p className="text-white/90 text-lg leading-relaxed italic group-hover:text-white transition-colors duration-300">
                    {testimonial.text}
                  </p>
                </div>

                {/* Person Info */}
                <div className="relative z-10 flex items-center gap-4">
                  {/* Profile Image */}
                  <div className="relative">
                    <div className="w-16 h-16 rounded-full overflow-hidden border-2 border-slate-600/50 group-hover:border-orange-500/50 transition-colors duration-300">
                      <img
                        src={testimonial.image}
                        alt={testimonial.name}
                        className="w-full h-full object-cover"
                        onError={(e) => {
                          // Fallback to a gradient background if image fails to load
                          const target = e.target as HTMLImageElement;
                          target.style.display = "none";
                          target.parentElement!.style.background =
                            "linear-gradient(45deg, #f97316, #3b82f6)";
                        }}
                      />
                    </div>
                    {/* Glow effect */}
                    <div className="absolute inset-0 rounded-full bg-gradient-to-r from-orange-500/20 to-blue-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-sm"></div>
                  </div>

                  {/* Person Details */}
                  <div className="flex-1">
                    <h4 className="text-white font-semibold text-lg group-hover:text-orange-300 transition-colors duration-300">
                      {testimonial.name}
                    </h4>
                    <p className="text-orange-400 font-medium text-sm mb-1">
                      {testimonial.position}
                    </p>
                    <p className="text-white/60 text-sm">
                      {testimonial.company}
                    </p>
                  </div>
                </div>

                {/* Hover Effect Lines */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-orange-500 to-transparent"></div>
                  <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-blue-500 to-transparent"></div>
                  <div className="absolute top-0 left-0 w-px h-full bg-gradient-to-b from-transparent via-orange-500 to-transparent"></div>
                  <div className="absolute top-0 right-0 w-px h-full bg-gradient-to-b from-transparent via-blue-500 to-transparent"></div>
                </div>

                {/* Closing Quote */}
                <div className="absolute bottom-4 right-6 text-3xl text-blue-500/70 group-hover:text-blue-400 transition-colors duration-300">
                  "
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Custom Styles */}
      <style>{`
        @keyframes slideInUp {
          from {
            opacity: 0;
            transform: translateY(40px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        .group {
          animation: slideInUp 0.8s ease-out forwards;
          opacity: 0;
          animation-fill-mode: both;
        }
      `}</style>
    </section>
  );
};

export default Testimonials;
