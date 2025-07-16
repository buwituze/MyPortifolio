import { useState } from "react";
import { ArrowRight, ExternalLink, Grid3x3, Eye } from "lucide-react";

const ProjectsSection = () => {
  const [hoveredProject, setHoveredProject] = useState<number | null>(null);
  const [showMore, _] = useState(false);

  const featuredProjects = [
    {
      id: "skofund",
      image: "/images/SokoFund.png",
      title: "SokoFund",
      description:
        "An HR-FinTech Platform for African businesses and workforces, offering HR & Payroll Management Software plus Embedded Finance Products.",
      link: "https://www.sokofund.com/",
      tags: ["Frontend", "Backend"],
      height: "h-72",
    },
    {
      id: "bloom-web-app",
      image: "/images/newbloomwebapp.png",
      title: "Bloom Web App",
      description:
        "A comprehensive platform connecting Rwandan farmers with essential farming tools, expert knowledge, and streamlined agricultural resources for enhanced productivity.",
      link: "https://bloom-project.netlify.app/",
      tags: ["Frontend", "Backend", "Figma"],
      height: "h-72",
    },
    {
      id: "mondevert-site",
      image: "/images/MondVertSite.png",
      title: "MondeVert",
      description:
        "A creative environmental initiative built with Next.js. MondeVert uses art, culture, and technology to inspire communities to embrace sustainable living.",
      link: "https://monde-vert-site.vercel.app/",
      tags: ["Frontend", "Figma"],
      height: "h-72",
    },
    {
      id: "mfasha-health-app",
      image: "/images/mfasha.png",
      title: "Mfasha",
      description:
        "A mobile app that provides emergency preparedness tools and health literacy resources to Rwandans in Kinyarwanda.",
      link: "https://drive.google.com/file/d/1ME_a-gjXlTLBXoraHYnC0U28nCxyMi5v/view?usp=drive_link",
      tags: ["Frontend", "Backend", "Figma"],
      height: "h-72",
    },
    {
      id: "health-predict",
      image: "/images/healthpredictapi.png",
      title: "HealthPredict",
      description:
        "An ML system that predicts disease prevalence rates based on health indicators, socioeconomic factors, and healthcare infrastructure",
      link: "https://linear-regression-model-f74t.onrender.com/docs",
      tags: ["Frontend", "Backend", "Linear Regression Model"],
      height: "h-72",
    },
    {
      id: "health-spot",
      image: "/images/HealthSpotIMG.png",
      title: "HealthSpot",
      description:
        "An ML model leveraging satellite imagery to identify underserved rural areas in Rwanda and suggest optimal locations for health facilities.",
      link: "https://github.com/buwituze/HealthSpot_Model",
      tags: ["NN Model", "Loistic Regression Model", "XBoost Model"],
      height: "h-72",
    },

    {
      id: "draw-app",
      image: "/images/drawapp.png",
      title: "Draw App",
      description:
        "Intuitive digital drawing application with user-friendly interface for creating and editing artwork with various tools and brushes.",
      link: "https://benitha06.github.io/draw/",
      tags: ["Frontend"],
      height: "h-72",
    },
  ];

  const moreProjects = [
    {
      id: "agro-commerce",
      image: "/images/agrocommerce.png",
      title: "Agro-Commerce",
      description:
        "E-commerce platform bridging the gap between farmers and agricultural suppliers, making farming resources more accessible.",
      link: "https://honolinekamurerwa.github.io/Agro-Center/index.html",
      tags: ["Frontend", "Figma"],
      height: "h-74",
    },
  ];

  const allProjects = showMore
    ? [...featuredProjects, ...moreProjects]
    : featuredProjects;

  const handleViewAllProjects = () => {
    // Navigate to projects page - you can replace this with your routing logic
    window.location.href = "/projects";
  };

  const scrollToSection = (sectionId: any) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      className="relative min-h-screen bg-transparent py-20 px-4 md:px-8 lg:px-12 overflow-hidden"
      id="projects"
    >
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

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {allProjects.map((project, index) => (
            <div
              key={`${project.title}-${index}`}
              className="group cursor-pointer"
              onMouseEnter={() => setHoveredProject(index)}
              onMouseLeave={() => setHoveredProject(null)}
              style={{ animationDelay: `${index * 200}ms` }}
            >
              <div
                className={`relative ${project.height} bg-gradient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur-md rounded-2xl border border-slate-700/50 overflow-hidden transition-all duration-700 hover:border-orange-500/50 hover:shadow-2xl hover:shadow-orange-500/25`}
              >
                {/* Project Image */}
                <div className="relative w-full h-full overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover"
                  />

                  {/* Enhanced Blue Gradient Overlay - Stronger on hover */}
                  <div
                    className={`absolute inset-0 transition-all duration-500 ${
                      hoveredProject === index
                        ? "bg-gradient-to-t from-blue-600/95 via-blue-600/70 to-blue-500/40"
                        : "bg-gradient-to-t from-blue-500/80 via-blue-500/40 to-transparent"
                    }`}
                  ></div>
                </div>

                {/* Always Visible Content */}
                <div className="absolute bottom-0 left-0 right-0 p-6 pointer-events-none">
                  {/* Project Title with Action Buttons */}
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="text-xl font-bold text-white drop-shadow-lg">
                      {project.title}
                    </h3>

                    {/* Action Buttons beside title */}
                    <div className="flex items-center gap-2 pointer-events-auto">
                      {/* External Link Button */}
                      <button
                        onClick={(e) => {
                          e.stopPropagation();
                          e.preventDefault();
                          window.open(
                            project.link,
                            "_blank",
                            "noopener,noreferrer"
                          );
                        }}
                        className="group/icon p-2 bg-white/15 backdrop-blur-md rounded-lg border border-white/30 text-white hover:bg-orange-500/90 hover:border-orange-500/50 transition-all duration-300 hover:scale-110 hover:shadow-lg hover:shadow-orange-500/50 z-50"
                        title="Open project in new tab"
                      >
                        <ExternalLink
                          size={14}
                          className="transition-transform duration-300 group-hover/icon:rotate-12"
                        />
                      </button>

                      {/* View Details Button */}
                      <button
                        onClick={(e) => {
                          e.stopPropagation();
                          e.preventDefault();
                          scrollToSection(project.id);
                        }}
                        className="group/icon p-2 bg-white/15 backdrop-blur-md rounded-lg border border-white/30 text-white hover:bg-blue-500/90 hover:border-blue-500/50 transition-all duration-300 hover:scale-110 hover:shadow-lg hover:shadow-blue-500/50 z-50"
                        title="View project details"
                      >
                        <Eye
                          size={14}
                          className="transition-transform duration-300 group-hover/icon:scale-110"
                        />
                      </button>
                    </div>
                  </div>

                  {/* Hover Content - Description and Tags with Smooth Slide Up */}
                  <div
                    className={`transition-all duration-500 ease-out ${
                      hoveredProject === index
                        ? "opacity-100 translate-y-0 max-h-40"
                        : "opacity-0 translate-y-6 max-h-0"
                    } overflow-hidden`}
                  >
                    {/* Project Description */}
                    <p className="text-white/95 text-sm leading-relaxed mb-3 drop-shadow-md">
                      {project.description}
                    </p>

                    {/* Tags */}
                    <div className="flex flex-wrap gap-2">
                      {project.tags.map((tag, tagIndex) => (
                        <span
                          key={tagIndex}
                          className="text-xs px-3 py-1.5 bg-white/25 backdrop-blur-sm rounded-full text-white border border-white/40 shadow-lg"
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

        {/* Explore Portfolio Button */}
        <div className="text-center mb-16">
          <button
            onClick={handleViewAllProjects}
            className="group inline-flex items-center gap-3 px-10 py-5 bg-gradient-to-r from-slate-800/60 to-slate-900/60 backdrop-blur-md border border-slate-700/50 text-white rounded-2xl hover:border-orange-500/50 hover:bg-gradient-to-r hover:from-orange-500/20 hover:to-blue-500/20 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-orange-500/25 text-lg font-medium"
          >
            <Grid3x3
              size={22}
              className="transition-transform duration-300 group-hover:rotate-12"
            />
            <span>Explore Full Portfolio</span>
            <ArrowRight
              size={22}
              className="transition-transform duration-300 group-hover:translate-x-2"
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
