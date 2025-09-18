const AboutMe = () => {
  return (
    <section
      id="aboutme"
      className="relative bg-transparent py-20 lg:mx-5 px-4 md:px-8 lg:px-12 "
    >
      {/* Subtle gradient overlay for smooth transition */}
      <div className="absolute inset-0"></div>

      <div className="relative z-10 max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="mx-auto mt-7 text-3xl md:text-3xl font-bold bg-blue-500 bg-clip-text text-transparent mb-4">
            So, Who Am I?
          </h2>
          {/* <div className="w-24 h-1 bg-gradient-to-r from-orange-500 to-blue-500 mx-auto rounded-full"></div> */}
        </div>

        {/* Main Content */}
        <div className="flex flex-col md:flex-row  gap-12 items-center">
          {/* Left Content */}
          <div className="lg:w-[66%] space-y-6">
            <div className="space-y-4 text-white/90 leading-relaxed">
              <p>
                Software engineering student by day, problem-solving enthusiast
                by... well, also by day. <br />
              </p>

              <p>
                I'm at African Leadership University on a Mastercard Foundation
                scholarship, freshly certified as a Salesforce Admin, and
                obsessed with creating technology that makes life better for
                real people. <br /> React, Python, UX design - if it can solve
                problems elegantly, I'm probably already tinkering with it.
              </p>
            </div>

            {/* Skills/Interests Pills */}
            <div className="flex flex-wrap gap-3 mt-8">
              {[
                "Full-Stack Dev",
                "Machine Learning",
                "Salesforce Admin",
                "Mobile Dev",
                "UI/UX Designer",
              ].map((skill, index) => (
                <span
                  key={index}
                  className="px-4 py-2 bg-slate-800/60 backdrop-blur-sm border border-slate-700/50 rounded-full text-sm text-white/80 hover:border-orange-500/50 hover:text-orange-500 transition-colors duration-300"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>

          {/* Right Image */}
          <div className="flex lg:w-[35%] h-[400px] justify-center lg:justify-end">
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
              <div className="absolute -bottom-4 -right-4 bg-slate-900/90 backdrop-blur-md border border-orange-500/30 rounded-lg p-3 shadow-xl">
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                  <span className="text-xs text-white/90 font-medium">
                    Certified Salesforce Admin
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutMe;
