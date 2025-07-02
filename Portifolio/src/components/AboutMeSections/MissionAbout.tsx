import { useState, useEffect } from "react";

export default function MissionAbout() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  const missions = [
    {
      icon: "💡",
      title: "Innovating for Impact",
      description:
        "Designing and developing technology that not only solves problems but also creates opportunities for growth and empowerment in Rwanda.",
      gradient: "from-orange-500 to-blue-600",
    },
    {
      icon: "🏥",
      title: "Empowering Rural Healthcare Through Technology",
      description:
        "Creating innovative tech solutions that enhance healthcare access for Rwandan citizens, particularly in remote areas.",
      gradient: "from-blue-500 to-orange-600",
    },
    {
      icon: "🌐",
      title: "Bridging the Digital Divide",
      description:
        "Leveraging software engineering skills to bring essential services closer to underserved communities, ensuring no one is left behind.",
      gradient: "from-orange-600 to-blue-500",
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
    <section className="relative min-h-screen overflow-hidden bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 flex items-center px-4 md:px-8 lg:px-12 py-20">
      {/* Animated Background Gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-900/80 via-blue-900/30 to-orange-500/20 animate-pulse"></div>

      {/* Floating Shapes */}
      <div className="absolute inset-0 overflow-hidden">
        <div
          className="absolute top-1/5 left-1/10 w-20 h-20 rounded-full bg-gradient-to-br from-orange-500 to-orange-400 opacity-10 animate-bounce"
          style={{ animationDuration: "20s", animationDelay: "0s" }}
        ></div>
        <div
          className="absolute top-3/5 right-1/5 w-30 h-30 rounded-full bg-gradient-to-br from-blue-500 to-blue-400 opacity-10 animate-bounce"
          style={{ animationDuration: "20s", animationDelay: "-5s" }}
        ></div>
        <div
          className="absolute top-1/10 right-1/5 w-15 h-15 rounded-full bg-gradient-to-br from-orange-600 to-orange-500 opacity-10 animate-bounce"
          style={{ animationDuration: "20s", animationDelay: "-10s" }}
        ></div>
        <div
          className="absolute bottom-1/5 left-1/5 w-25 h-25 rounded-full bg-gradient-to-br from-blue-600 to-blue-500 opacity-10 animate-bounce"
          style={{ animationDuration: "20s", animationDelay: "-15s" }}
        ></div>
      </div>

      {/* Interactive cursor follower */}
      <div
        className="fixed w-5 h-5 bg-orange-500/40 rounded-full pointer-events-none z-50 transition-all duration-100 mix-blend-difference shadow-lg shadow-orange-500/60"
        style={{
          left: mousePosition.x - 10,
          top: mousePosition.y - 10,
        }}
      ></div>

      <div className="relative z-10 w-full max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-block">
            <h2 className="text-5xl md:text-6xl lg:text-7xl font-extrabold leading-tight mb-4">
              <span className="bg-gradient-to-r from-orange-500  to-blue-600 bg-clip-text text-transparent animate-pulse drop-shadow-lg">
                My Mission
              </span>
            </h2>
            <div className="h-1 w-32 bg-gradient-to-r from-orange-500 to-blue-600 mx-auto rounded-full"></div>
          </div>
          <p className="text-xl text-white/90 mt-6 max-w-3xl mx-auto leading-relaxed">
            Transforming communities through innovative technology solutions
            that create lasting impact
          </p>
        </div>

        {/* Main content grid */}
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left side - Hero visual */}
          <div className="relative flex justify-center items-center order-2 lg:order-1">
            <div className="relative w-full max-w-md">
              {/* Morphing Background */}
              <div
                className="absolute inset-0 bg-gradient-to-br from-blue-500 via-orange-500 to-blue-600 rounded-full opacity-60 animate-pulse shadow-2xl shadow-orange-500/40"
                style={{
                  borderRadius: "60% 40% 30% 70%",
                  animation: "morphing 8s ease-in-out infinite",
                }}
              ></div>

              {/* Central Icon/Visual */}
              <div className="relative z-10 flex justify-center items-center p-12">
                <div className="w-48 h-48 bg-slate-900/60 rounded-2xl flex items-center justify-center backdrop-blur-md border border-orange-500/40 shadow-2xl">
                  <div className="text-6xl">🚀</div>
                </div>
              </div>

              {/* Decorative Elements */}
              <div className="absolute inset-0 z-20">
                {/* Code Snippet */}
                <div className="absolute -top-4 -right-8 bg-slate-900/95 p-4 rounded-lg border border-orange-500/40 backdrop-blur-md shadow-2xl shadow-slate-900/80 animate-bounce">
                  <pre className="text-orange-500 text-xs font-mono">
                    {`const mission = {
  goal: "Innovation",
  focus: "Impact",
  target: "Rwanda"
};`}
                  </pre>
                </div>

                {/* Stats floating card */}
                <div className="absolute -bottom-8 -left-8 bg-slate-900/95 p-4 rounded-lg border border-blue-500/40 backdrop-blur-md shadow-2xl">
                  <div className="text-blue-500 text-sm font-semibold">
                    Communities Reached
                  </div>
                  <div className="text-orange-500 text-2xl font-bold">
                    1000+
                  </div>
                </div>

                {/* Neural Network */}
                <div className="absolute top-1/2 -right-12 w-20 h-16">
                  <div className="absolute top-0 left-0 w-3 h-3 bg-blue-500 rounded-full animate-pulse shadow-lg shadow-blue-500/60"></div>
                  <div
                    className="absolute top-6 left-8 w-3 h-3 bg-orange-500 rounded-full animate-pulse shadow-lg shadow-orange-500/60"
                    style={{ animationDelay: "0.5s" }}
                  ></div>
                  <div
                    className="absolute top-12 left-16 w-3 h-3 bg-blue-500 rounded-full animate-pulse shadow-lg shadow-blue-500/60"
                    style={{ animationDelay: "1s" }}
                  ></div>

                  {/* Connections */}
                  <div className="absolute top-1 left-3 w-9 h-0.5 bg-gradient-to-r from-blue-500 via-orange-500 to-transparent transform rotate-45 animate-pulse shadow-sm shadow-blue-500/50"></div>
                  <div className="absolute top-7 left-11 w-9 h-0.5 bg-gradient-to-r from-orange-500 via-blue-500 to-transparent transform rotate-45 animate-pulse shadow-sm shadow-orange-500/50"></div>
                </div>
              </div>
            </div>
          </div>

          {/* Right side - Mission cards */}
          <div className="space-y-6 order-1 lg:order-2">
            {missions.map((mission, index) => (
              <div
                key={index}
                className="group relative bg-slate-900/60 backdrop-blur-md rounded-2xl p-6 border border-blue-500/30 transition-all duration-300 hover:border-orange-500/50 hover:-translate-y-2 hover:shadow-2xl hover:shadow-orange-500/30"
                style={{ animationDelay: `${index * 200}ms` }}
              >
                {/* Gradient overlay */}
                <div
                  className={`absolute inset-0 bg-gradient-to-r ${mission.gradient} rounded-2xl opacity-0 group-hover:opacity-10 transition-opacity duration-300`}
                ></div>

                <div className="relative z-10">
                  <div className="flex items-start space-x-4">
                    <div className="flex-shrink-0 w-12 h-12 bg-slate-900/60 rounded-xl flex items-center justify-center text-2xl backdrop-blur-md border border-orange-500/40 shadow-lg group-hover:border-orange-500/60 transition-all duration-300">
                      {mission.icon}
                    </div>
                    <div className="flex-1">
                      <h4 className="text-xl font-semibold text-white mb-3 group-hover:text-orange-200 transition-colors drop-shadow-lg">
                        {mission.title}
                      </h4>
                      <p className="text-white/90 leading-relaxed">
                        {mission.description}
                      </p>
                    </div>
                  </div>
                </div>

                {/* Hover effect line */}
                <div
                  className={`absolute bottom-0 left-0 h-0.5 bg-gradient-to-r ${mission.gradient} w-0 group-hover:w-full transition-all duration-500`}
                ></div>
              </div>
            ))}
          </div>
        </div>

        {/* Call to action */}
        <div className="text-center mt-16">
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="#contact"
              className="group relative inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-orange-500 to-orange-600 text-white font-semibold rounded-full transition-all duration-300 hover:shadow-2xl hover:shadow-orange-500/40 hover:-translate-y-1 overflow-hidden"
            >
              <span className="relative z-10">Let's Collaborate</span>
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
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-500"></div>
            </a>

            <a
              href="#projects"
              className="group relative inline-flex items-center gap-2 px-8 py-4 bg-blue-900/20 text-slate-200 font-semibold rounded-full border-2 border-blue-500/40 backdrop-blur-md transition-all duration-300 hover:bg-blue-500/30 hover:-translate-y-1 hover:shadow-lg hover:shadow-blue-500/30 overflow-hidden"
            >
              <span className="relative z-10">View Projects</span>
              <svg
                className="w-5 h-5 relative z-10"
                viewBox="0 0 24 24"
                fill="none"
              >
                <path
                  d="M13 2L3 14H12L11 22L21 10H12L13 2Z"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-500"></div>
            </a>
          </div>
        </div>

        {/* Tech representation */}
        <div className="flex gap-4 justify-center mt-12">
          {["⚛️", "🐍", "🤖", "💻", "🎨"].map((icon, index) => (
            <div
              key={index}
              className="w-12 h-12 bg-slate-900/60 rounded-xl flex items-center justify-center text-2xl backdrop-blur-md border border-blue-500/30 transition-all duration-300 hover:-translate-y-2 hover:bg-orange-500/30 hover:border-orange-500/50 hover:shadow-lg hover:shadow-orange-500/30"
            >
              {icon}
            </div>
          ))}
        </div>
      </div>

      <style>{`
        @keyframes morphing {
          0%,
          100% {
            border-radius: 60% 40% 30% 70%;
          }
          25% {
            border-radius: 30% 60% 70% 40%;
          }
          50% {
            border-radius: 70% 30% 40% 60%;
          }
          75% {
            border-radius: 40% 70% 60% 30%;
          }
        }
      `}</style>
    </section>
  );
}
