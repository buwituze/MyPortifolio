import { useState, useEffect, useRef } from "react";

const SkillsSection = () => {
  const [_hoveredSkill, setHoveredSkill] = useState<number | null>(null);
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

  const skills = [
    {
      name: "HTML",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-plain.svg",
      color: "from-orange-500 to-red-500",
    },
    {
      name: "CSS",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-plain.svg",
      color: "from-blue-500 to-cyan-500",
    },
    {
      name: "JavaScript",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-plain.svg",
      color: "from-yellow-400 to-orange-500",
    },
    {
      name: "Python",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg",
      color: "from-blue-500 to-yellow-500",
    },
    {
      name: "Tensorflow",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tensorflow/tensorflow-original.svg",
      color: "from-purple-500 to-blue-500",
    },
    {
      name: "TailwindCSS",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg",
      color: "from-teal-500 to-blue-500",
    },
    {
      name: "Bootstrap",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-plain.svg",
      color: "from-purple-600 to-blue-600",
    },
    {
      name: "React JS",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
      color: "from-blue-400 to-blue-600",
    },
    {
      name: "Node JS",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg",
      color: "from-green-500 to-green-600",
    },
    {
      name: "Figma",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg",
      color: "from-purple-500 to-pink-500",
    },
    {
      name: "Docker",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg",
      color: "from-purple-500 to-pink-500",
    },
    {
      name: "Vite",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vitejs/vitejs-original.svg",
      color: "from-yellow-500 to-orange-500",
    },
    {
      name: "MySQL",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg",
      color: "from-blue-600 to-blue-800",
    },
    {
      name: "PostreSQL",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg",
      color: "from-blue-600 to-blue-800",
    },
    {
      name: "MongoDB",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg",
      color: "from-blue-600 to-blue-800",
    },
  ];

  return (
    <section
      ref={sectionRef}
      className="relative bg-transparent py-6 pb-22 px-4 md:px-8 lg:px-12 overflow-hidden lg:mx-5"
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
            className={`text-2xl md:text-2xl lg:text-3xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-blue-600 bg-clip-text text-transparent ${isVisible ? "falling-heading" : "opacity-0"}`}
          >
            Skills & Technologies
          </h2>
        </div>

        {/* Skills Grid */}
        <div className="flex flex-wrap gap-8 md:gap-12">
          {skills.map((skill, index) => (
            <div
              key={skill.name}
              className="flex flex-row items-center gap-3 group"
              onMouseEnter={() => setHoveredSkill(index)}
              onMouseLeave={() => setHoveredSkill(null)}
            >
              {/* Icon */}
              <div className="relative w-8 h-8 md:w-10 md:h-10 transition-transform duration-300 group-hover:scale-110">
                <img
                  src={skill.icon}
                  alt={`${skill.name} icon`}
                  className="w-full h-full object-contain opacity-60 grayscale group-hover:opacity-100 group-hover:grayscale-0 transition-all duration-300"
                />
              </div>

              {/* Name */}
              <h3 className="text-sm md:text-base font-medium text-center text-white">
                {skill.name}
              </h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
