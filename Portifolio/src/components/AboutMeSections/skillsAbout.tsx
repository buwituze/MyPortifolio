import { useState, useEffect } from "react";

const SkillsSection = () => {
  const [hoveredSkill, setHoveredSkill] = useState<number | null>(null);
  const [_, setMousePosition] = useState({ x: 0, y: 0 });

  const skills = [
    {
      name: "Figma",
      category: "Design",
      percentage: 88,
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg",
      color: "from-purple-500 to-pink-500",
      hasBackground: false,
    },
    {
      name: "CSS",
      category: "Frontend",
      percentage: 100,
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-plain.svg",
      color: "from-blue-500 to-cyan-500",
      hasBackground: false,
    },
    {
      name: "TailwindCSS",
      category: "Frontend",
      percentage: 95,
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg",
      color: "from-teal-500 to-blue-500",
      hasBackground: false,
    },
    {
      name: "Bootstrap",
      category: "Frontend",
      percentage: 90,
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-plain.svg",
      color: "from-purple-600 to-blue-600",
      hasBackground: false,
    },
    {
      name: "HTML",
      category: "Frontend",
      percentage: 100,
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-plain.svg",
      color: "from-orange-500 to-red-500",
      hasBackground: false,
    },
    {
      name: "Vite",
      category: "Tools",
      percentage: 70,
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vitejs/vitejs-original.svg",
      color: "from-yellow-500 to-orange-500",
      hasBackground: false,
    },
    {
      name: "React JS",
      category: "Frontend",
      percentage: 80,
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
      color: "from-blue-400 to-blue-600",
      hasBackground: false,
    },
    {
      name: "JavaScript",
      category: "Language",
      percentage: 90,
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-plain.svg",
      color: "from-yellow-400 to-orange-500",
      hasBackground: false,
    },
    {
      name: "Node JS",
      category: "Backend",
      percentage: 60,
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg",
      color: "from-green-500 to-green-600",
      hasBackground: false,
    },
    {
      name: "MySQL",
      category: "Database",
      percentage: 85,
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg",
      color: "from-blue-600 to-blue-800",
      hasBackground: false,
    },
    {
      name: "Python",
      category: "Language",
      percentage: 75,
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg",
      color: "from-blue-500 to-yellow-500",
      hasBackground: false,
    },
    {
      name: "Machine Learning",
      category: "AI/ML",
      percentage: 65,
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tensorflow/tensorflow-original.svg",
      color: "from-purple-500 to-blue-500",
      hasBackground: false,
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
    <section className="relative min-h-screen bg-transparent py-20 px-4 md:px-8 lg:px-12 overflow-hidden">
      {/* Dotted Pattern Overlay */}
      <div
        className="absolute inset-0 opacity-20"
        style={{
          backgroundImage:
            "radial-gradient(circle, rgba(255,255,255,0.3) 1px, transparent 1px)",
          backgroundSize: "30px 30px",
        }}
      ></div>

      <div className="relative z-10 max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-4xl font-bold mb-6">
            <span className="text-3xl md:text-4xl font-bold bg-blue-500 bg-clip-text text-transparent mb-4">
              Skills & Technologies
            </span>
          </h2>
          <p className="text-xl text-white/80 max-w-2xl mx-auto">
            Crafting digital experiences with cutting-edge technologies and
            creative problem-solving
          </p>
        </div>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 mb-12">
          {skills.map((skill, index) => (
            <div
              key={skill.name}
              className="group relative"
              onMouseEnter={() => setHoveredSkill(index)}
              onMouseLeave={() => setHoveredSkill(null)}
              style={{ animationDelay: `${index * 100}ms` }}
            >
              {/* Card */}
              <div className="relative h-40 bg-gradient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur-md rounded-2xl border border-slate-700/50 transition-all duration-500 hover:border-orange-500/50 hover:shadow-2xl hover:shadow-orange-500/20 overflow-hidden group-hover:bg-gradient-to-br group-hover:from-slate-800/70 group-hover:to-slate-900/70">
                {/* Gradient Overlay */}
                <div
                  className={`absolute inset-0 bg-gradient-to-br ${skill.color} opacity-0 group-hover:opacity-10 transition-opacity duration-500`}
                ></div>

                {/* Content */}
                <div className="relative z-10 p-6 h-full flex flex-col justify-between">
                  {/* Top Section */}
                  <div className="flex items-center justify-between">
                    <div className="w-8 h-8 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                      <img
                        src={skill.icon}
                        alt={`${skill.name} icon`}
                        className={`w-full h-full object-contain transition-all duration-300 ${
                          skill.hasBackground
                            ? "opacity-70 group-hover:opacity-100"
                            : "opacity-60 grayscale group-hover:opacity-100 group-hover:grayscale-0"
                        }`}
                        onError={(e) => {
                          // Fallback to text if image fails to load
                          (e.currentTarget as HTMLElement).style.display =
                            "none";
                          const nextSibling = e.currentTarget
                            .nextElementSibling as HTMLElement;
                          if (nextSibling) {
                            nextSibling.style.display = "block";
                          }
                        }}
                      />
                      <span className="text-2xl hidden text-white">
                        {skill.name.charAt(0)}
                      </span>
                    </div>
                    <div className="text-xs px-2 py-1 bg-slate-700/50 rounded-full text-orange-400 border border-orange-500/30 shrink-0">
                      {skill.category}
                    </div>
                  </div>

                  {/* Skill Name */}
                  <div className="min-h-0">
                    <h3 className="text-lg font-semibold text-white mb-2 group-hover:text-orange-300 transition-colors duration-300 leading-tight">
                      {skill.name}
                    </h3>

                    {/* Progress Bar */}
                    <div className="relative">
                      <div className="w-full h-2 bg-slate-700 rounded-full overflow-hidden">
                        <div
                          className={`h-full bg-gradient-to-r ${skill.color} rounded-full transition-all duration-1000 ease-out`}
                          style={{
                            width:
                              hoveredSkill === index
                                ? `${skill.percentage}%`
                                : "0%",
                            transitionDelay:
                              hoveredSkill === index ? "200ms" : "0ms",
                          }}
                        ></div>
                      </div>
                      <span className="absolute -top-6 right-0 text-xs text-orange-400 font-semibold opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        {skill.percentage}%
                      </span>
                    </div>
                  </div>
                </div>

                {/* Hover Effect Lines */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none">
                  <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-orange-500 to-transparent"></div>
                  <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-blue-500 to-transparent"></div>
                  <div className="absolute top-0 left-0 w-px h-full bg-gradient-to-b from-transparent via-orange-500 to-transparent"></div>
                  <div className="absolute top-0 right-0 w-px h-full bg-gradient-to-b from-transparent via-blue-500 to-transparent"></div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Category Filter Tabs
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category, _) => (
            <button
              key={category}
              className="px-6 py-3 bg-slate-800/50 text-white rounded-full border border-slate-600/50 hover:border-orange-500/50 hover:bg-orange-500/10 transition-all duration-300 backdrop-blur-md hover:shadow-lg hover:shadow-orange-500/20"
            >
              {category}
            </button>
          ))}
        </div> */}

        {/* Bottom Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-16">
          {[
            { label: "Years Experience", value: "3+", icon: "📅" },
            { label: "Projects Completed", value: "25+", icon: "🚀" },
            { label: "Technologies", value: "12+", icon: "⚡" },
            { label: "Happy Clients", value: "15+", icon: "😊" },
          ].map((stat, index) => (
            <div key={index} className="text-center group">
              <div className="text-4xl mb-2 group-hover:scale-110 transition-transform duration-300">
                {stat.icon}
              </div>
              <div className="text-3xl font-bold bg-gradient-to-r from-orange-500 to-blue-500 bg-clip-text text-transparent mb-1">
                {stat.value}
              </div>
              <div className="text-white/70 text-sm">{stat.label}</div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <p className="text-white/70 mb-6">
            Ready to build something amazing together?
          </p>
          <a
            href="#contact"
            className="inline-flex items-center gap-2 px-8 py-3 bg-gradient-to-r from-orange-500/20 to-blue-500/20 backdrop-blur-sm border border-orange-500/30 text-white rounded-full hover:border-orange-500/50 hover:bg-orange-500/10 transition-all duration-300"
          >
            Let's Connect
            <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none">
              <path
                d="M7 17L17 7M17 7H7M17 7V17"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </a>
        </div>
      </div>

      {/* Custom Styles */}
      <style>{`
        @keyframes slideIn {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        .group {
          animation: slideIn 0.6s ease-out forwards;
          opacity: 0;
          animation-fill-mode: both;
        }
      `}</style>
    </section>
  );
};

export default SkillsSection;
