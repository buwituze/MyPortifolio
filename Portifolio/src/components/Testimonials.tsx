import { useState, useEffect, useRef } from "react";
import { Icon } from "@iconify/react";

const Testimonials = () => {
  const [_, setHoveredIndex] = useState<number | null>(null);
  const [__, setMousePosition] = useState({ x: 0, y: 0 });
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  // Intersection Observer to detect when section is in view
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.2 },
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  // Styles for falling animation
  const fallingHeadingStyle = `
    @keyframes fallBounce {
      0% {
        transform: translateY(-400px);
        opacity: 0;
      }
      70% {
        transform: translateY(0);
        opacity: 1;
      }
      85% {
        transform: translateY(-20px);
      }
      100% {
        transform: translateY(0);
      }
    }
    
    .falling-heading {
      animation: fallBounce 1.5s cubic-bezier(0.34, 1.56, 0.64, 1) forwards;
    }
  `;

  const testimonials = [
    {
      image: "/images/anne.jpeg",
      name: "Anne Marie Twagirayezu",
      position: "Fellow ALU Student",
      linkedin: "https://www.linkedin.com/in/twagirayezu-anne-marie535257/",
      company: "African Leadership University (ALU)",
      text: "With a meticulous eye for detail and a strong passion for quality, she bridges the gap between vision and execution, making her an exceptional team player.",
    },
    {
      image: "/images/Admin lead.png",
      name: "Honorine Uwicyubahiro",
      position: "Administration Lead",
      linkedin: "https://www.linkedin.com/in/honorineuwicyubahiro/",
      company: "African Leadership University (ALU)",
      text: "A dynamic problem-solver who consistently delivers innovative solutions with precision and skill. Always brings clarity and efficiency to complex challenges.",
    },
    {
      image: "/images/simon.jpeg",
      name: "Simon Imanigirimpuhwe",
      position: "Lead Software Developer",
      linkedin: "https://www.linkedin.com/in/simon-imanigirimpuhwe-2aaba7146/",
      company: "Umurava",
      text: "Benitha was a strong teammate with solid foundational development skills; she communicated clearly, took initiative, and showed a clear willingness to learn and improve.",
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
      ref={sectionRef}
      className="relative min-h-screen pt-10 px-4 md:px-8 lg:px-16 overflow-hidden"
      id="testimonials"
    >
      {/* Inject animation styles */}
      <style>{fallingHeadingStyle}</style>

      {/* Grid Pattern Overlay */}
      <div
        className="absolute inset-0 opacity-10"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)",
          backgroundSize: "50px 50px",
        }}
      ></div>
      <div className="relative z-10 max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16 overflow-hidden pt-32">
          <h2
            className={`text-2xl md:text-2xl text-blue-500 lg:text-3xl font-bold mb-6 ${isVisible ? "falling-heading" : "opacity-0"}`}
          >
            Some Nice Words
          </h2>
          <p className="text-xl text-white/80 max-w-2xl mx-auto">
            What people say about working and studying with me and the impact of
            our collaboration
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 max-w-8xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="group relative"
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
              style={{ animationDelay: `${index * 200}ms` }}
            >
              {/* Card */}
              <div className="relative bg-slate-800/40 backdrop-blur-sm rounded-xl border border-slate-700/30 p-5 transition-all duration-500 hover:border-slate-600/50 hover:shadow-xl overflow-hidden h-full flex flex-col">
                {/* Quote Icon */}
                <div className="relative z-10 -mb-2">
                  <div className="text-6xl text-slate-400/60 font-serif leading-none">
                    "
                  </div>
                </div>

                {/* Testimonial Text */}
                <div className="relative z-10 mb-4 flex-1">
                  <p className="text-white/80 text-base leading-relaxed">
                    {testimonial.text}
                  </p>
                </div>

                {/* Person Info */}
                <div className="relative z-10 flex items-center gap-3 mt-auto">
                  {/* Profile Image */}
                  <div className="relative">
                    <div className="w-12 h-12 rounded-full overflow-hidden border-2 border-slate-600/30 group-hover:border-slate-500/50 transition-colors duration-300">
                      <img
                        src={testimonial.image}
                        alt={testimonial.name}
                        className="w-full h-full object-cover"
                        onError={(e) => {
                          // Fallback to a gradient background if image fails to load
                          const target = e.target as HTMLImageElement;
                          target.style.display = "none";
                          target.parentElement!.style.background =
                            "linear-gradient(45deg, #64748b, #475569)";
                        }}
                      />
                    </div>
                  </div>

                  {/* Person Details */}
                  <div className="flex-1">
                    <h4 className="text-white font-semibold text-sm group-hover:text-white/90 transition-colors duration-300">
                      {testimonial.name}
                    </h4>
                    <div className="flex items-center gap-1.5 mb-0.5">
                      <p className="text-slate-400 text-xs">
                        {testimonial.position}
                      </p>
                      <a
                        href={testimonial.linkedin}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-[#0A66C2] hover:text-[#004182] transition-colors duration-300 flex-shrink-0"
                        onClick={(e) => e.stopPropagation()}
                      >
                        <Icon icon="bi:linkedin" width="14" height="14" />
                      </a>
                    </div>
                    <p className="text-blue-500 text-xs">
                      {testimonial.company}
                    </p>
                  </div>
                </div>

                {/* Closing Quote */}
                <div className="absolute bottom-3 right-3 text-5xl text-slate-400/60 font-serif leading-none">
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
