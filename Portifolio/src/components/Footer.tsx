import React from "react";

const Footer = () => {
  return (
    <footer className="relative bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 border-t border-slate-700/50">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-900/80 via-blue-900/20 to-orange-500/10"></div>

      <section className="footer-section relative z-10 px-4 md:px-8 lg:px-12 py-4">
        <div className="toppart mb-10 border-b border-slate-700/30 pb-4">
          <h3 className="text-xl md:text-2xl font-bold text-white flex items-center gap-3">
            {/* <i className="bx bx-laptop text-orange-500 text-2xl"></i> */}
            <span className="bg-blue-500 bg-clip-text text-transparent">
              Benitha Uwituze
            </span>
          </h3>
        </div>

        <div className="bottompart">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="footerimage flex flex-col items-center lg:items-start">
              <div className="w-20 h-20 mb-4 rounded-2xl bg-gradient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur-md border border-slate-700/50 flex items-center justify-center overflow-hidden hover:border-orange-500/50 transition-all duration-300">
                <img
                  src="/images/mylogo.png"
                  alt="Logo"
                  className="w-full h-full object-contain"
                />
              </div>
            </div>

            <div className="pages">
              <h5 className="text-lg font-semibold text-white mb-6">
                In this Site:
              </h5>
              <ul>
                <div className="sectionslist grid grid-cols-2 gap-x-6 gap-y-2">
                  <div className="space-y-2">
                    <a href="#home">
                      <li className="text-white/70 hover:text-orange-400 transition-colors duration-300 text-sm hover:translate-x-1 transform transition-transform">
                        Home
                      </li>
                    </a>
                    <a href="#about">
                      <li className="text-white/70 hover:text-orange-400 transition-colors duration-300 text-sm hover:translate-x-1 transform transition-transform">
                        About
                      </li>
                    </a>
                    <a href="#services">
                      <li className="text-white/70 hover:text-orange-400 transition-colors duration-300 text-sm hover:translate-x-1 transform transition-transform">
                        Services
                      </li>
                    </a>
                    <a href="#resumesection">
                      <li className="text-white/70 hover:text-orange-400 transition-colors duration-300 text-sm hover:translate-x-1 transform transition-transform">
                        Resume
                      </li>
                    </a>
                  </div>
                  <div className="space-y-2">
                    <a href="#projects">
                      <li className="text-white/70 hover:text-orange-400 transition-colors duration-300 text-sm hover:translate-x-1 transform transition-transform">
                        Projects
                      </li>
                    </a>
                    <a href="#testimonials">
                      <li className="text-white/70 hover:text-orange-400 transition-colors duration-300 text-sm hover:translate-x-1 transform transition-transform">
                        References
                      </li>
                    </a>
                    <a href="">
                      <li className="text-white/70 hover:text-orange-400 transition-colors duration-300 text-sm hover:translate-x-1 transform transition-transform">
                        Blog
                      </li>
                    </a>
                    <a href="#contact">
                      <li className="text-white/70 hover:text-orange-400 transition-colors duration-300 text-sm hover:translate-x-1 transform transition-transform">
                        Contact Me
                      </li>
                    </a>
                  </div>
                </div>
              </ul>
            </div>

            <div className="learnmore">
              <h5 className="text-lg font-semibold text-white mb-6">
                Services
              </h5>
              <ul className="space-y-2">
                <li>
                  <a
                    href=""
                    className="text-white/70 hover:text-blue-400 transition-colors duration-300 text-sm block hover:translate-x-1 transform transition-transform"
                  >
                    Salesforce Admin
                  </a>
                </li>
                <li>
                  <a
                    href=""
                    className="text-white/70 hover:text-blue-400 transition-colors duration-300 text-sm block hover:translate-x-1 transform transition-transform"
                  >
                    Graphic Design
                  </a>
                </li>
                <li>
                  <a
                    href=""
                    className="text-white/70 hover:text-blue-400 transition-colors duration-300 text-sm block hover:translate-x-1 transform transition-transform"
                  >
                    Web Design
                  </a>
                </li>
                <li>
                  <a
                    href=""
                    className="text-white/70 hover:text-blue-400 transition-colors duration-300 text-sm block hover:translate-x-1 transform transition-transform"
                  >
                    Front-End Development
                  </a>
                </li>
                <li>
                  <a
                    href=""
                    className="text-white/70 hover:text-blue-400 transition-colors duration-300 text-sm block hover:translate-x-1 transform transition-transform"
                  >
                    Back-End Development
                  </a>
                </li>
                <li>
                  <a
                    href=""
                    className="text-white/70 hover:text-blue-400 transition-colors duration-300 text-sm block hover:translate-x-1 transform transition-transform"
                  >
                    Author
                  </a>
                </li>
              </ul>
            </div>

            <div className="Support">
              <h5 className="text-lg font-semibold text-white mb-6">
                Contacts
              </h5>
              <ul className="space-y-3">
                <li className="text-white/70 text-sm">Contact: 0790100718</li>
                <li className="text-white/70 text-sm">
                  Email: benithatuze@gmail.com
                </li>
                <li className="text-white/70 text-sm">
                  Location: Nayinzira, Kimironko, Kigali City, Rwanda
                </li>
                <li className="text-white/70 text-sm">
                  Mentor: Claudine Ubayemfura, Facilitator at ALU
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </footer>
  );
};

export default Footer;
