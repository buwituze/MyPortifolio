import { useState, useEffect } from "react";

const Services = () => {
  const [_, setHoveredService] = useState<number | null>(null);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  const services = [
    {
      icon: "⚡",
      title: "Salesforce Admin",
      description:
        "Expert Salesforce administration and customization to streamline your business processes.",
      color: "from-blue-500 to-cyan-500",
    },
    {
      icon: "🎨",
      title: "Graphic Design",
      description:
        "I design captivating visuals that communicate your brand's story effectively.",
      color: "from-purple-500 to-pink-500",
    },
    {
      icon: "🌐",
      title: "Web Design",
      description:
        "I craft intuitive UX designs with Figma for a seamless user experience.",
      color: "from-teal-500 to-blue-500",
    },
    {
      icon: "👨‍💻",
      title: "Full Stack Development",
      description:
        "I build complete web applications from frontend interfaces to backend systems using React.js, Node.js, and MySQL databases.",
      color: "from-blue-400 to-green-600",
    },
    {
      icon: "📱",
      title: "Mobile Development",
      description:
        "I create native and cross-platform mobile applications for iOS and Android with modern frameworks and intuitive user interfaces.",
      color: "from-indigo-500 to-purple-600",
    },
    {
      icon: "✍️",
      title: "Writing",
      description:
        "I create impactful written content that resonates with readers.",
      color: "from-yellow-500 to-orange-500",
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
      className="relative min-h-screen bg-transparent py-12 px-4 md:px-8 lg:px-12 overflow-hidden lg:mx-5"
      id="services"
    >
      {/* Interactive cursor follower */}
      <div
        className="fixed w-4 h-4 bg-orange-500/30 rounded-full pointer-events-none z-50 transition-all duration-200 mix-blend-difference"
        style={{
          left: mousePosition.x - 8,
          top: mousePosition.y - 8,
        }}
      ></div>

      <div className="relative z-10 max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-2xl md:text-2xl text-blue-500 lg:text-3xl font-bold mb-6">
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
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {services.map((service, index) => (
            <div
              key={service.title}
              className="group relative"
              onMouseEnter={() => setHoveredService(index)}
              onMouseLeave={() => setHoveredService(null)}
              style={{ animationDelay: `${index * 150}ms` }}
            >
              {/* Card */}
              <div className="relative h-80 bg-gradient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur-md rounded-3xl border border-slate-700/50 transition-all duration-700 hover:border-none hover:none hover:shadow-orange-500/25 overflow-hidden group-hover:bg-gradient-to-br group-hover:from-slate-800/70 group-hover:to-slate-900/70">
                {/* Gradient Overlay */}
                <div
                  className={`absolute inset-0 bg-gradient-to-br ${service.color} opacity-0 group-hover:opacity-15 transition-all duration-700`}
                ></div>

                {/* Floating Elements */}
                <div className="absolute -top-2 -right-2 w-20 h-20 bg-gradient-to-br from-orange-500/20 to-blue-500/20 rounded-full blur-xl opacity-0 group-hover:opacity-100 transition-all duration-700"></div>
                <div className="absolute -bottom-2 -left-2 w-16 h-16 bg-gradient-to-br from-blue-500/20 to-purple-500/20 rounded-full blur-xl opacity-0 group-hover:opacity-100 transition-all duration-700 delay-200"></div>

                {/* Content */}
                <div className="relative z-10 p-8 h-full flex flex-col">
                  {/* Category Badge */}
                  <div className="flex items-center justify-between mb-6">
                    <div className="w-2 h-2 bg-orange-500/50 rounded-full group-hover:bg-orange-500 transition-colors duration-300"></div>
                  </div>

                  {/* Icon */}
                  <div className="flex justify-center mb-6">
                    <div className="relative w-20 h-20 bg-gradient-to-br from-slate-700/50 to-slate-800/50 backdrop-blur-sm rounded-2xl border border-slate-600/50 flex items-center justify-center group-hover:border-orange-500/30 transition-all duration-500 group-hover:scale-110 group-hover:rotate-12">
                      <div
                        className={`absolute inset-0 bg-gradient-to-br ${service.color} opacity-0 group-hover:opacity-20 transition-opacity duration-500 rounded-2xl`}
                      ></div>
                      <div className="text-3xl relative z-10 group-hover:scale-110 transition-transform duration-300">
                        {service.icon}
                      </div>
                    </div>
                  </div>

                  {/* Title */}
                  <h3 className="text-xl font-bold text-white mb-4 text-center group-hover:text-orange-300 transition-colors duration-300">
                    {service.title}
                  </h3>

                  {/* Description */}
                  <p className="text-white/70 text-center leading-relaxed group-hover:text-white/90 transition-colors duration-300 flex-grow">
                    {service.description}
                  </p>
                </div>

                {/* Shine Effect */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700">
                  <div className="absolute -top-40 -left-40 w-80 h-80 bg-gradient-to-br from-white/5 to-transparent rounded-full blur-3xl transform rotate-45 group-hover:animate-pulse"></div>
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
