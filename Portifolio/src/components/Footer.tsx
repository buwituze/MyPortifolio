import React from "react";
import { Mail, Phone, Linkedin, Github, BookOpen } from "lucide-react";

const Footer = () => {
  return (
    <footer className="relative bg-transparent border-t border-slate-700/50 overflow-hidden">
      {/* Background Effects */}

      {/* Small Static Decorative Elements */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Orange squares */}
        <div className="absolute top-12 left-8 w-1.5 h-1.5 bg-orange-500/70 rotate-45"></div>
        <div className="absolute top-24 right-16 w-1 h-1 bg-orange-400/80 rotate-45"></div>
        <div className="absolute bottom-20 left-24 w-2 h-2 bg-orange-500/60 rotate-45"></div>
        <div className="absolute top-36 left-1/3 w-1 h-1 bg-orange-600/70 rotate-45"></div>
        <div className="absolute bottom-32 right-1/4 w-1.5 h-1.5 bg-orange-500/50 rotate-45"></div>

        {/* Blue circles */}
        <div className="absolute top-20 right-1/4 w-2 h-2 bg-blue-500/60 rounded-full"></div>
        <div className="absolute bottom-16 right-8 w-1.5 h-1.5 bg-blue-400/70 rounded-full"></div>
        <div className="absolute top-28 left-2/3 w-1 h-1 bg-blue-600/50 rounded-full"></div>
        <div className="absolute bottom-24 left-1/4 w-2 h-2 bg-blue-500/55 rounded-full"></div>
        <div className="absolute top-16 left-1/2 w-1.5 h-1.5 bg-blue-400/60 rounded-full"></div>

        {/* Small scattered elements */}
        <div className="absolute top-40 right-32 w-1 h-1 bg-purple-500/40 rotate-45"></div>
        <div className="absolute bottom-12 right-1/3 w-1.5 h-1.5 bg-cyan-400/50 rounded-full"></div>
        <div className="absolute top-32 right-8 w-1 h-1 bg-orange-400/60 rotate-45"></div>
      </div>

      <section className="footer-section relative z-10 px-4 md:px-8 lg:px-12 py-12">
        {/* NEON Style Name */}
        <div className="w-full mb-12">
          <div className="relative">
            <h1 className="text-8xl md:text-9xl lg:text-[12rem] xl:text-[14rem] font-black select-none leading-none w-full text-center tracking-wide">
              {/* Create individual letters with NEON effect */}
              <span className="inline-block relative">
                <span
                  className="text-black stroke-white stroke-2"
                  style={{
                    WebkitTextStroke: "2px white",
                    WebkitTextFillColor: "transparent",
                  }}
                >
                  B
                </span>
                <span className="absolute inset-0 text-cyan-400 blur-sm opacity-70">
                  B
                </span>
                <span className="absolute inset-0 text-white blur-xs opacity-40">
                  B
                </span>
              </span>
              <span className="inline-block relative">
                <span
                  className="text-black stroke-white stroke-2"
                  style={{
                    WebkitTextStroke: "2px white",
                    WebkitTextFillColor: "transparent",
                  }}
                >
                  E
                </span>
                <span className="absolute inset-0 text-cyan-400 blur-sm opacity-70">
                  E
                </span>
                <span className="absolute inset-0 text-white blur-xs opacity-40">
                  E
                </span>
              </span>
              <span className="inline-block relative">
                <span
                  className="text-black stroke-white stroke-2"
                  style={{
                    WebkitTextStroke: "2px white",
                    WebkitTextFillColor: "transparent",
                  }}
                >
                  N
                </span>
                <span className="absolute inset-0 text-cyan-400 blur-sm opacity-70">
                  N
                </span>
                <span className="absolute inset-0 text-white blur-xs opacity-40">
                  N
                </span>
              </span>

              {/* Image section with same proportions as letters */}
              <span className="relative inline-block pr-4">
                <div className="relative inline-block w-16 h-full md:w-20 lg:w-28 xl:w-36">
                  <div className="w-full h-20 md:h-24 lg:h-32 xl:h-40 rounded-lg overflow-hidden border-2 border-white">
                    <img
                      src="/images/mylogo.png"
                      alt="Logo"
                      className="w-full h-full object-cover"
                    />
                    {/* Neon glow effect around image */}
                    <div className="absolute inset-0 border-2 border-cyan-400 rounded-lg blur-sm opacity-70"></div>
                    <div className="absolute inset-0 border border-white rounded-lg blur-xs opacity-40"></div>
                  </div>
                </div>
              </span>

              <span className="inline-block relative">
                <span
                  className="text-black stroke-white stroke-2"
                  style={{
                    WebkitTextStroke: "2px white",
                    WebkitTextFillColor: "transparent",
                  }}
                >
                  T
                </span>
                <span className="absolute inset-0 text-cyan-400 blur-sm opacity-70">
                  T
                </span>
                <span className="absolute inset-0 text-white blur-xs opacity-40">
                  T
                </span>
              </span>
              <span className="inline-block relative">
                <span
                  className="text-black stroke-white stroke-2"
                  style={{
                    WebkitTextStroke: "2px white",
                    WebkitTextFillColor: "transparent",
                  }}
                >
                  H
                </span>
                <span className="absolute inset-0 text-cyan-400 blur-sm opacity-70">
                  H
                </span>
                <span className="absolute inset-0 text-white blur-xs opacity-40">
                  H
                </span>
              </span>
              <span className="inline-block relative">
                <span
                  className="text-black stroke-white stroke-2"
                  style={{
                    WebkitTextStroke: "2px white",
                    WebkitTextFillColor: "transparent",
                  }}
                >
                  A
                </span>
                <span className="absolute inset-0 text-cyan-400 blur-sm opacity-70">
                  A
                </span>
                <span className="absolute inset-0 text-white blur-xs opacity-40">
                  A
                </span>
              </span>
            </h1>
          </div>
        </div>

        {/* Contact Information in Flex Row */}
        <div className="flex flex-wrap justify-center gap-8 md:gap-12 lg:gap-16 items-center">
          <a
            href="tel:0790100718"
            className="flex items-center gap-3 text-white/80 hover:text-orange-400 transition-all duration-300 hover:scale-105 group"
          >
            <div className="p-3 rounded-full bg-slate-800/50 border border-slate-700/50 group-hover:border-orange-400/50 transition-all duration-300">
              <Phone size={18} />
            </div>
            <span className="text-base font-medium">0790100718</span>
          </a>

          <a
            href="mailto:benithatuze@gmail.com"
            className="flex items-center gap-3 text-white/80 hover:text-blue-400 transition-all duration-300 hover:scale-105 group"
          >
            <div className="p-3 rounded-full bg-slate-800/50 border border-slate-700/50 group-hover:border-blue-400/50 transition-all duration-300">
              <Mail size={18} />
            </div>
            <span className="text-base font-medium">Email</span>
          </a>

          <a
            href="https://linkedin.com/in/benitha"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-3 text-white/80 hover:text-blue-500 transition-all duration-300 hover:scale-105 group"
          >
            <div className="p-3 rounded-full bg-slate-800/50 border border-slate-700/50 group-hover:border-blue-500/50 transition-all duration-300">
              <Linkedin size={18} />
            </div>
            <span className="text-base font-medium">LinkedIn</span>
          </a>

          <a
            href="https://github.com/benitha"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-3 text-white/80 hover:text-purple-400 transition-all duration-300 hover:scale-105 group"
          >
            <div className="p-3 rounded-full bg-slate-800/50 border border-slate-700/50 group-hover:border-purple-400/50 transition-all duration-300">
              <Github size={18} />
            </div>
            <span className="text-base font-medium">GitHub</span>
          </a>

          <a
            href="#blog"
            className="flex items-center gap-3 text-white/80 hover:text-cyan-400 transition-all duration-300 hover:scale-105 group"
          >
            <div className="p-3 rounded-full bg-slate-800/50 border border-slate-700/50 group-hover:border-cyan-400/50 transition-all duration-300">
              <BookOpen size={18} />
            </div>
            <span className="text-base font-medium">Blog</span>
          </a>
        </div>
      </section>
    </footer>
  );
};

export default Footer;
