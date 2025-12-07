const AboutMe = () => {
  const skills = [
    { name: "Full-Stack Dev", icon: "💻" },
    { name: "Machine Learning", icon: "🤖" },
    { name: "Salesforce Admin", icon: "☁️" },
    { name: "Mobile Dev", icon: "📱" },
    { name: "UI/UX Designer", icon: "🎨" },
  ];

  const experiences = [
    {
      role: "Full Stack Software Engineer",
      company: "SokoFund",
      period: "Sep 2024 – Nov 2025",
      type: "Full-time",
    },
    {
      role: "Front-End Developer",
      company: "MondeVert",
      period: "Jun 2025 – Aug 2025",
      type: "Contract",
    },
    {
      role: "Salesforce Admin Apprentice",
      company: "ALU-RW",
      period: "Aug 2024 – Feb 2025",
      type: "Apprenticeship",
    },
  ];

  return (
    <section
      id="aboutme"
      className="relative bg-transparent py-12 lg:mx-5 px-4 md:px-8 lg:px-12 "
    >
      {/* Subtle gradient overlay for smooth transition */}
      <div className="absolute inset-0"></div>

      <div className="relative z-10 max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="mx-auto text-3xl md:text-3xl font-bold bg-blue-500 bg-clip-text text-transparent mb-4">
            Who Am I?
          </h2>
          {/* <div className="w-24 h-1 bg-gradient-to-r from-orange-500 to-blue-500 mx-auto rounded-full"></div> */}
        </div>

        {/* Main Content */}
        <div className="flex flex-col md:flex-row-reverse gap-12 items-stretch">
          {/* Left Content */}
          <div className="lg:w-[66%] grid grid-cols-1 lg:grid-cols-2 gap-2">
            <div>
              <div className="text-white/90">
                <h2 className="text-4xl font-bold mb-4">Hello!</h2>
                <p>
                  Software engineering student by day, problem-solving
                  enthusiast by... well, also by day. <br /> <br />
                </p>
                <p>
                  I'm at African Leadership University on a Mastercard
                  Foundation scholarship, freshly certified as a Salesforce
                  Admin, and obsessed with creating technology that makes life
                  better for real people. <br /> React, Python, UX design - if
                  it can solve problems elegantly, I'm probably already
                  tinkering with it.
                </p>
              </div>
            </div>
            <div>
              {/* Skills Icons Section */}
              <div className="px-6">
                <h3 className="text-2xl font-semibold text-white/90 mb-9">
                  Skills & Interests
                </h3>
                <div className="flex flex-wrap gap-4">
                  {skills.map((skill, index) => (
                    <div
                      key={index}
                      className="flex items-center gap-2 px-3 py-2 bg-slate-900 rounded-lg"
                    >
                      <span className="text-2xl group-hover:scale-110 transition-transform duration-300">
                        {skill.icon}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Experience Section */}
              <div className=" rounded-2xl p-6 mt-5">
                <h3 className="text-2xl font-semibold text-white/90 mb-4">
                  Experience
                </h3>
                <div className="space-y-4">
                  {experiences.map((exp, index) => (
                    <div key={index}>
                      <p className="text-xs font-semibold text-white/90 mt-7">
                        {exp.period} • {exp.type}
                      </p>
                      <h4 className=" text-sm text-white/70 mt-4">
                        {exp.role} • {exp.company}
                      </h4>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Right Image */}
          <div className="flex lg:w-[25%] h-[450px] justify-start">
            <div className="relative">
              {/* Image container */}
              <div className="relative w-full h-full  overflow-hidden rounded-2xl border border-slate-700/50 backdrop-blur-sm">
                <img
                  src="/images/Benitha.jpeg"
                  alt="Benitha Uwituze"
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-115"
                />

                {/* Overlay gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/40 via-transparent to-transparent"></div>
              </div>

              {/* Floating achievement badge */}
              {/* <div className="absolute -bottom-4 -right-4 bg-slate-900/90 backdrop-blur-md border border-orange-500/30 rounded-lg p-3 shadow-xl">
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                  <span className="text-xs text-white/90 font-medium">
                    Certified Salesforce Admin
                  </span>
                </div>
              </div> */}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutMe;
