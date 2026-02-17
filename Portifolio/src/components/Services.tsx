import { useState, useEffect, useRef } from "react";
import { Icon } from "@iconify/react";

const Services = () => {
  const [_, setHoveredService] = useState<number | null>(null);
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

  const services = [
    {
      icon: <Icon icon="devicon-plain:salesforce" width="34" height="34" />,
      title: "Salesforce Admin",
      description:
        "Expert Salesforce administration and customization to streamline your business processes.",
      color: "from-blue-500 to-cyan-500",
    },

    {
      icon: <Icon icon="stash:pencil-writing" width="30" height="30" />,
      title: "Web Design",
      description:
        "I craft intuitive UX designs with Figma for a seamless user experience.",
      color: "from-teal-500 to-blue-500",
    },
    {
      icon: (
        <Icon
          icon="material-symbols-light:developer-mode-tv-outline-rounded"
          width="30"
          height="30"
        />
      ),
      title: "Full Stack Development",
      description:
        "I build complete web applications from frontend interfaces to backend systems using React.js, Node.js, and MySQL databases.",
      color: "from-blue-400 to-green-600",
    },
    {
      icon: <Icon icon="pajamas:machine-learning" width="30" height="30" />,
      title: "Machine Learning ",
      description:
        "I design captivating visuals that communicate your brand's story effectively.",
      color: "from-purple-500 to-pink-500",
    },
    {
      icon: <Icon icon="iconoir:mobile-dev-mode" width="30" height="30" />,
      title: "Mobile Development",
      description:
        "I create native and cross-platform mobile applications for iOS and Android with modern frameworks and intuitive user interfaces.",
      color: "from-indigo-500 to-purple-600",
    },

    {
      icon: <Icon icon="stash:pencil-writing-light" width="30" height="30" />,
      title: "Writing",
      description:
        "I create impactful written content that resonates with readers.",
      color: "from-yellow-500 to-orange-500",
    },
  ];

  return (
    <section
      ref={sectionRef}
      className="relative min-h-screen bg-transparent py-6 px-4 md:px-8 lg:px-12 overflow-hidden lg:mx-5"
      id="services"
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
            <span className="bg-blue-500 bg-clip-text text-transparent">
              What I Do
            </span>
          </h2>
          <p className="text-xl text-white/80 max-w-3xl mx-auto">
            Transforming ideas into reality through innovative solutions and
            creative excellence
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mb-16">
          {services.map((service, index) => (
            <div
              key={service.title}
              className="group relative"
              onMouseEnter={() => setHoveredService(index)}
              onMouseLeave={() => setHoveredService(null)}
              style={{ animationDelay: `${index * 150}ms` }}
            >
              {/* Card */}
              <div className="relative h-64 bg-gradient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur-md rounded-2xl border border-slate-700/50 transition-all duration-500 hover:shadow-lg overflow-hidden group-hover:bg-gradient-to-br group-hover:from-slate-800/60 group-hover:to-slate-900/60">
                {/* Gradient Overlay */}
                <div
                  className={`absolute inset-0 bg-gradient-to-br ${service.color} opacity-0 group-hover:opacity-5 transition-all duration-500`}
                ></div>

                {/* Content */}
                <div className="relative z-10 p-6 h-full flex flex-col">
                  {/* Icon */}
                  <div className="flex justify-center mb-4">
                    <div className="relative w-16 h-16 bg-gradient-to-br from-slate-700/50 to-slate-800/50 backdrop-blur-sm rounded-2xl border border-slate-600/50 flex items-center justify-center group-hover:border-slate-500/50 transition-all duration-500 group-hover:scale-105">
                      <div
                        className={`absolute inset-0 bg-gradient-to-br ${service.color} opacity-0 group-hover:opacity-5 transition-opacity duration-500 rounded-2xl`}
                      ></div>
                      <div className="text-2xl relative z-10 group-hover:scale-105 transition-transform duration-300 text-blue-500 font-bold">
                        {service.icon}
                      </div>
                    </div>
                  </div>

                  {/* Title */}
                  <h3 className="text-lg font-bold text-white mb-3 text-center group-hover:text-white transition-colors duration-300">
                    {service.title}
                  </h3>

                  {/* Description */}
                  <p className="text-sm text-white/70 text-center leading-relaxed group-hover:text-white/85 transition-colors duration-300 flex-grow">
                    {service.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Custom Animations */}
      <style>{`
        @keyframes slideInUp {
          from {
            opacity: 0;
            transform: translateY(50px);
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

        @keyframes float {
          0%, 100% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-10px);
          }
        }
      `}</style>
    </section>
  );
};

export default Services;
