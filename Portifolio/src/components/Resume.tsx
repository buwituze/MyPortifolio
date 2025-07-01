import { useState } from "react";
import { ArrowRight, ExternalLink, Github } from "lucide-react";

const ProjectsSection = () => {
  const [hoveredProject, setHoveredProject] = useState<number | null>(null);
  const [showMore, setShowMore] = useState(false);

  const featuredProjects = [
    {
      image: "/images/newbloomwebapp.png",
      title: "Bloom Web App",
      description:
        "A comprehensive platform connecting Rwandan farmers with essential farming tools, expert knowledge, and streamlined agricultural resources for enhanced productivity.",
      link: "https://bloom-project.netlify.app/",
      tags: ["Frontend", "Backend", "Figma"],
      height: "h-64",
    },
    {
      image: "/images/restoomnifood.png",
      title: "Resto OmniFood",
      description:
        "Modern restaurant website featuring online reservations, interactive menu browsing, and seamless food ordering with clean, responsive design.",
      link: "https://benitha06.github.io/Resto-Omnifood/index.html",
      tags: ["Frontend", "Figma"],
      height: "h-72",
    },
    {
      image: "/images/newsavenest.png",
      title: "SaveNest",
      description:
        "Intelligent savings application with budget creation, expense tracking, and smart alerts to help users maintain financial discipline and reach their goals.",
      link: "https://savenest-app-eight.vercel.app/",
      tags: ["Frontend", "Backend"],
      height: "h-60",
    },
    {
      image: "/images/projectmanager.png",
      title: "Project Manager",
      description:
        "Dynamic task management system built with JavaScript for efficient project tracking, featuring Docker deployment for consistent performance.",
      link: "https://todomanagerp.netlify.app/",
      tags: ["Frontend", "Backend"],
      height: "h-68",
    },
  ];

  const moreProjects = [
    {
      image: "/images/drawapp.png",
      title: "Draw App",
      description:
        "Intuitive digital drawing application with user-friendly interface for creating and editing artwork with various tools and brushes.",
      link: "https://benitha06.github.io/draw/",
      tags: ["Frontend"],
      height: "h-56",
    },
    {
      image: "/images/agrocommerce.png",
      title: "Agro-Commerce",
      description:
        "E-commerce platform bridging the gap between farmers and agricultural suppliers, making farming resources more accessible.",
      link: "https://honolinekamurerwa.github.io/Agro-Center/index.html",
      tags: ["Frontend", "Figma"],
      height: "h-64",
    },
  ];

  const allProjects = showMore
    ? [...featuredProjects, ...moreProjects]
    : featuredProjects;

  return (
    <section
      className="relative min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 py-20 px-4 md:px-8 lg:px-12 overflow-hidden"
      id="projects"
    >
      {/* Animated Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-900/80 via-blue-900/20 to-purple-500/10 animate-pulse"></div>

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
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl text-blue-500 lg:text-5xl font-bold mb-6">
            <span className="bg-blue-500 bg-clip-text text-transparent">
              Check out my Projects
            </span>
          </h2>
          <p className="text-xl text-white/80 max-w-3xl mx-auto">
            Discover the digital experiences I've crafted with passion and
            precision
          </p>
        </div>

        {/* Projects Masonry Grid */}
        <div className="columns-1 md:columns-2 lg:columns-3 gap-6 space-y-6 mb-12">
          {allProjects.map((project, index) => (
            <div
              key={`${project.title}-${index}`}
              className="break-inside-avoid group cursor-pointer"
              onMouseEnter={() => setHoveredProject(index)}
              onMouseLeave={() => setHoveredProject(null)}
              style={{ animationDelay: `${index * 200}ms` }}
            >
              <div
                className={`relative ${project.height} bg-gradient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur-md rounded-2xl border border-slate-700/50 overflow-hidden transition-all duration-700 hover:border-orange-500/50 hover:shadow-2xl hover:shadow-orange-500/25 hover:-translate-y-2`}
              >
                {/* Project Image */}
                <div className="relative w-full h-full overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover"
                  />

                  {/* Blue Gradient Overlay - More transparent as it goes up */}
                  <div className="absolute inset-0 bg-gradient-to-t from-blue-500/80 via-blue-500/40 to-transparent"></div>
                </div>

                {/* Always Visible Content */}
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  {/* Project Title & Go Button */}
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="text-xl font-bold text-white">
                      {project.title}
                    </h3>
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-3 bg-orange-500/90 backdrop-blur-sm rounded-full text-white hover:bg-orange-500 transition-all duration-300 hover:scale-110"
                      onClick={(e) => e.stopPropagation()}
                    >
                      <ArrowRight size={18} />
                    </a>
                  </div>

                  {/* Hover Content - Description and Tags */}
                  <div
                    className={`transition-all duration-500 ${
                      hoveredProject === index
                        ? "opacity-100 translate-y-0 max-h-40"
                        : "opacity-0 translate-y-4 max-h-0"
                    } overflow-hidden`}
                  >
                    {/* Project Description */}
                    <p className="text-white/90 text-sm leading-relaxed mb-3">
                      {project.description}
                    </p>

                    {/* Tags */}
                    <div className="flex flex-wrap gap-2">
                      {project.tags.map((tag, tagIndex) => (
                        <span
                          key={tagIndex}
                          className="text-xs px-3 py-1 bg-white/20 backdrop-blur-sm rounded-full text-white border border-white/30"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Animated Border Lines */}
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

        {/* Show More/Less Button */}
        <div className="text-center mb-16">
          <button
            onClick={() => setShowMore(!showMore)}
            className="group inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-slate-800/50 to-slate-900/50 backdrop-blur-md border border-slate-700/50 text-white rounded-full hover:border-orange-500/50 hover:bg-orange-500/10 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:shadow-orange-500/25"
          >
            <span>{showMore ? "Show Less" : "Show More Projects"}</span>
            <ArrowRight
              size={20}
              className={`transition-transform duration-300 ${
                showMore ? "rotate-90" : "group-hover:translate-x-1"
              }`}
            />
          </button>
        </div>
      </div>

      {/* Custom Animations */}
      <style>{`
        @keyframes slideInUp {
          from {
            opacity: 0;
            transform: translateY(50px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        .group {
          animation: slideInUp 0.8s ease-out forwards;
          opacity: 0;
          animation-fill-mode: both;
        }
      `}</style>
    </section>
  );
};

export default ProjectsSection;
