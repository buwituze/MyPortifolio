import { useState, useEffect } from "react";

const SkillsSection = () => {
  const [hoveredSkill, setHoveredSkill] = useState<number | null>(null);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  const skills = [
    {
      name: "Figma",
      category: "Design",
      percentage: 88,
      icon: "🎨",
      color: "from-purple-500 to-pink-500",
    },
    {
      name: "CSS",
      category: "Frontend",
      percentage: 100,
      icon: "💎",
      color: "from-blue-500 to-cyan-500",
    },
    {
      name: "TailwindCSS",
      category: "Frontend",
      percentage: 95,
      icon: "🌪️",
      color: "from-teal-500 to-blue-500",
    },
    {
      name: "Bootstrap",
      category: "Frontend",
      percentage: 90,
      icon: "⚡",
      color: "from-purple-600 to-blue-600",
    },
    {
      name: "HTML",
      category: "Frontend",
      percentage: 100,
      icon: "🏗️",
      color: "from-orange-500 to-red-500",
    },
    {
      name: "Vite",
      category: "Tools",
      percentage: 70,
      icon: "⚡",
      color: "from-yellow-500 to-orange-500",
    },
    {
      name: "React JS",
      category: "Frontend",
      percentage: 80,
      icon: "⚛️",
      color: "from-blue-400 to-blue-600",
    },
    {
      name: "JavaScript",
      category: "Language",
      percentage: 90,
      icon: "🚀",
      color: "from-yellow-400 to-orange-500",
    },
    {
      name: "Node JS",
      category: "Backend",
      percentage: 60,
      icon: "🟢",
      color: "from-green-500 to-green-600",
    },
    {
      name: "MySQL",
      category: "Database",
      percentage: 85,
      icon: "🗄️",
      color: "from-blue-600 to-blue-800",
    },
    {
      name: "Python",
      category: "Language",
      percentage: 75,
      icon: "🐍",
      color: "from-blue-500 to-yellow-500",
    },
    {
      name: "Machine Learning",
      category: "AI/ML",
      percentage: 65,
      icon: "🤖",
      color: "from-purple-500 to-blue-500",
    },
  ];

  useEffect(() => {
    const handleMouseMove = (e: any) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  // const categories = [...new Set(skills.map((skill) => skill.category))];

  return (
    <section className="relative min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 py-20 px-4 md:px-8 lg:px-12 overflow-hidden">
      {/* Animated Background */}
      {/* <div className="absolute inset-0 bg-gradient-to-br from-slate-900/80 via-blue-900/20 to-orange-500/10 animate-pulse"></div> */}

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
          <div className="inline-flex items-center gap-2 text-orange-500 text-lg mb-4">
            <span className="text-2xl">⚡</span>
            <span>Technical Expertise</span>
          </div>
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
              <div className="relative h-40 bg-gradient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur-md rounded-2xl border border-slate-700/50 transition-all duration-500 hover:border-orange-500/50 hover:-translate-y-2 hover:shadow-2xl hover:shadow-orange-500/20 overflow-hidden group-hover:bg-gradient-to-br group-hover:from-slate-800/70 group-hover:to-slate-900/70">
                {/* Gradient Overlay */}
                <div
                  className={`absolute inset-0 bg-gradient-to-br ${skill.color} opacity-0 group-hover:opacity-10 transition-opacity duration-500`}
                ></div>

                {/* Content */}
                <div className="relative z-10 p-6 h-full flex flex-col justify-between">
                  {/* Top Section */}
                  <div className="flex items-center justify-between">
                    <div className="text-3xl group-hover:scale-110 transition-transform duration-300">
                      {skill.icon}
                    </div>
                    <div className="text-xs px-2 py-1 bg-slate-700/50 rounded-full text-orange-400 border border-orange-500/30">
                      {skill.category}
                    </div>
                  </div>

                  {/* Skill Name */}
                  <div>
                    <h3 className="text-lg font-semibold text-white mb-2 group-hover:text-orange-300 transition-colors duration-300">
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
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
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
