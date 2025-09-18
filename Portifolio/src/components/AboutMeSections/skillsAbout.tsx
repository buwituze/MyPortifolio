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
    <section className="relative min-h-screen bg-transparent py-12 px-4 md:px-8 lg:px-12 lg:mx-5 overflow-hidden">
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
          <h2 className="text-2xl md:text-2xl text-blue-500 lg:text-3xl font-bold mb-6">
            <span className="text-2xl md:text-2xl lg:text-3xl bg-blue-500 font-bol bg-clip-text text-transparent mb-4">
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
              <div className="relative h-40 bg-gradient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur-md rounded-2xl border border-slate-700/50 transition-all duration-500 hover:shadow-lg overflow-hidden group-hover:bg-gradient-to-br group-hover:from-slate-800/70 group-hover:to-slate-900/70">
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
                    <div className="text-xs px-2 py-1 bg-slate-700/50 rounded-full text-white/70 border border-slate-600/30 shrink-0">
                      {skill.category}
                    </div>
                  </div>

                  {/* Skill Name */}
                  <div className="min-h-0">
                    <h3 className="text-lg font-semibold text-white mb-2 transition-colors duration-300 leading-tight">
                      {skill.name}
                    </h3>

                    {/* Progress Bar */}
                    <div className="relative">
                      <div className="w-full h-2 bg-slate-700 rounded-full overflow-hidden">
                        <div
                          className={`h-full transition-all duration-1000 ease-out rounded-full ${
                            hoveredSkill === index
                              ? `bg-gradient-to-r ${skill.color}`
                              : "bg-slate-600"
                          }`}
                          style={{
                            width: `${skill.percentage}%`,
                          }}
                        ></div>
                      </div>
                      <span className="absolute -top-6 right-0 text-xs text-white/60 font-semibold">
                        {skill.percentage}%
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
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
