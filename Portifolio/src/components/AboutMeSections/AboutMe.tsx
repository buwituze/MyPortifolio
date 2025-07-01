const AboutMe = () => {
  return (
    <section
      id="aboutme"
      className="relative bg-transparent py-20 px-4 md:px-8 lg:px-12 "
    >
      {/* Subtle gradient overlay for smooth transition */}
      <div className="absolute inset-0"></div>

      <div className="relative z-10 max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold bg-blue-500 bg-clip-text text-transparent mb-4">
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
                I'm a software engineering student at African Leadership
                University, proudly supported by the Mastercard Foundation
                scholarship. When I'm not buried in code or diving deep into
                machine learning concepts, you'll find me exploring how
                technology can solve real-world problems that actually matter to
                communities.
              </p>

              <p>
                I'm currently leveling up my skills as a Salesforce Admin (just
                snagged my Salesforce Admin Credential!🎉), and honestly? I love
                the challenge of turning complex problems into elegant
                solutions. Whether it's building with React, experimenting with
                Python, or designing user experiences that don't make people
                want to throw their computers out the window, I'm all in.
              </p>

              <p>
                What drives me? The belief that great tech should make life
                better for everyone, not just the lucky few. I'm always curious,
                always learning, and always ready to tackle the next interesting
                challenge that comes my way.
              </p>
            </div>

            {/* Skills/Interests Pills */}
            <div className="flex flex-wrap gap-3 mt-8">
              {[
                "Full-Stack Development",
                "Machine Learning",
                "Salesforce Admin",
                "UI/UX Design",
                "Problem Solving",
                "Community Impact",
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
          <div className="flex lg:w-[35%] h-[500px] justify-center lg:justify-end">
            <div className="relative">
              {/* Subtle glow effect */}
              {/* <div className="absolute inset-0 bg-gradient-to-br from-orange-500/20 to-blue-500/20 rounded-2xl blur-xl transform scale-110"></div> */}

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
