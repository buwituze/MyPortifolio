import { useState, useEffect, useRef } from "react";

const ProjectsSection = () => {
  const [hoveredProject, setHoveredProject] = useState<number>(0);
  const [showMore, _] = useState(false);
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

  const featuredProjects = [
    {
      id: "skofund",
      image: "/images/SokoFund.png",
      title: "SokoFund",
      description:
        "An HR-FinTech Platform for African businesses and workforces, offering HR & Payroll Management Software plus Embedded Finance Products.",
      link: "https://www.sokofund.com/",
      tags: ["React JS", "MUI", "NodeJS+Express", "GraphQL API", "PostgreSQL"],
      height: "h-72",
    },
    {
      id: "bloom-web-app",
      image: "/images/newbloomwebapp.png",
      title: "Bloom Web App",
      description:
        "A comprehensive platform connecting Rwandan farmers with essential farming tools, expert knowledge, and streamlined agricultural resources for enhanced productivity.",
      link: "https://bloom-project.netlify.app/",
      tags: ["Figma", "ReactJS", "Django", "MongoDB"],
      height: "h-72",
    },
    {
      id: "mondevert-site",
      image: "/images/MondVertSite.png",
      title: "MondeVert",
      description:
        "A creative environmental initiative built with Next.js. MondeVert uses art, culture, and technology to inspire communities to embrace sustainable living.",
      link: "https://monde-vert-site.vercel.app/",
      tags: ["Figma", "NextJS", "Firebase"],
      height: "h-72",
    },
    {
      id: "civicevents+",
      image: "/images/civicevents.png",
      title: "CivicEvents+",
      description:
        "A user–admin platform for event registration, announcements, and promotions, with full content creation for admins, user management tools, and complete profile management.",
      link: "#",
      tags: ["HTML", "TailwindCSS", "JQuerry", "NodeJS+Express", "MySQL"],
      height: "h-72",
    },
    {
      id: "mfasha-health-app",
      image: "/images/mfasha.png",
      title: "Mfasha",
      description:
        "A mobile app that provides emergency preparedness tools and health literacy resources to Rwandans in Kinyarwanda.",
      link: "https://drive.google.com/file/d/1ME_a-gjXlTLBXoraHYnC0U28nCxyMi5v/view?usp=drive_link",
      tags: [" Figma", "Flutter", "Firebase", "GEMINI AI"],
      height: "h-72",
    },
    {
      id: "health-predict",
      image: "/images/healthpredictapi.png",
      title: "HealthPredict",
      description:
        "An ML system that predicts disease prevalence rates based on health indicators, socioeconomic factors, and healthcare infrastructure",
      link: "https://linear-regression-model-f74t.onrender.com/docs",
      tags: ["Tensorflow", "Linear Regression Model", "FastAPI"],
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
      tags: ["HTML", "CSS", "JavaScript"],
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

  return (
    <section
      ref={sectionRef}
      className="relative min-h-screen bg-transparent pt-10 px-2 md:px-4 lg:px-16 overflow-hidden"
      id="resume"
    >
      {/* Inject animation styles */}
      <style>{fallingHeadingStyle}</style>

      {/* Custom scrollbar styles */}
      <style>{`
        /* Hide scrollbar by default */
        .scrollbar-hide::-webkit-scrollbar {
          width: 4px;
        }
        
        .scrollbar-hide::-webkit-scrollbar-track {
          background: transparent;
        }
        
        .scrollbar-hide::-webkit-scrollbar-thumb {
          background: rgba(71, 85, 105, 0.2);
          border-radius: 2px;
        }
        
        .scrollbar-hide::-webkit-scrollbar-thumb:hover {
          background: rgba(71, 85, 105, 0.4);
        }
      `}</style>

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
        <div className="text-center mb-6 overflow-hidden pt-32">
          <h2
            className={`text-2xl md:text-2xl text-blue-500 lg:text-3xl font-bold mb-6 ${isVisible ? "falling-heading" : "opacity-0"}`}
          >
            <span className="bg-blue-500 bg-clip-text text-transparent">
              Check out my Projects
            </span>
          </h2>
        </div>

        {/* Split Layout: Image on Left, Project List on Right */}
        <div className="flex flex-col lg:flex-row gap-8 lg:gap-28 mb-12">
          {/* Left Side - Project Image Display */}
          {/* Control image size here: adjust lg:w-* for width and h-[*px] for height */}
          <div className="lg:w-3/5 w-full">
            <div className="relative h-[440px] bg-gradient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur-md rounded-tr-2xl rounded-br-2xl border border-slate-700/50 overflow-hidden">
              {allProjects.map((project, index) => (
                <div
                  key={`image-${project.title}-${index}`}
                  className={`absolute inset-0 transition-opacity duration-500 ease-in-out ${
                    hoveredProject === index ? "opacity-100" : "opacity-0"
                  }`}
                >
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover"
                  />
                </div>
              ))}
            </div>
          </div>

          {/* Right Side - Project Titles List */}
          <div className="lg:w-2/5 w-full lg:mt-10">
            {/* Scrollable container - shows 6 items, rest can be scrolled */}
            <div className="space-y-0 max-h-[400px] overflow-y-auto pr-2 scrollbar-hide hover:scrollbar-thin hover:scrollbar-thumb-slate-700/30 hover:scrollbar-track-transparent">
              {allProjects.map((project, index) => (
                <div key={`title-${project.title}-${index}`}>
                  <div
                    className="relative py-6 px-4 cursor-pointer group transition-all duration-300"
                    onMouseEnter={() => setHoveredProject(index)}
                  >
                    {/* Bullet Point - Appears on Hover */}
                    <div
                      className={`absolute left-0 top-1/2 -translate-y-1/2 w-2 h-2 bg-white rounded-full transition-all duration-300 ${
                        hoveredProject === index
                          ? "opacity-100 translate-x-0"
                          : "opacity-0 -translate-x-2"
                      }`}
                    ></div>

                    {/* Project Title */}
                    <h4
                      className={`text-lg font-semibold transition-all duration-300 ${
                        hoveredProject === index
                          ? "text-white translate-x-4"
                          : "text-white/80 translate-x-0"
                      }`}
                    >
                      {project.title}
                    </h4>
                  </div>

                  {/* Divider Line - show under all items including the last one */}
                  <div className="w-full h-0.5 bg-white/60"></div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
