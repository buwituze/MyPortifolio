import { ExternalLink, ArrowRight } from "lucide-react";

const Projects = () => {
  const allProjects = [
    {
      id: "skofund",
      image: "/images/SokoFund.png",
      title: "SokoFund",
      description:
        "An HR-FinTech Platform for African businesses and workforces, offering HR & Payroll Management Software plus Embedded Finance Products. This comprehensive solution streamlines workforce management while providing essential financial services.",
      link: "https://www.sokofund.com/",
      tags: ["React JS", "MUI", "NodeJS+Express", "GraphQL API", "PostgreSQL"],
    },
    {
      id: "bloom-web-app",
      image: "/images/newbloomwebapp.png",
      title: "Bloom Web App",
      description:
        "A comprehensive platform connecting Rwandan farmers with essential farming tools, expert knowledge, and streamlined agricultural resources for enhanced productivity. Empowering the agricultural community through technology.",
      link: "https://bloom-project.netlify.app/",
      tags: ["Figma", "ReactJS", "Django", "MongoDB"],
    },
    {
      id: "mondevert-site",
      image: "/images/MondVertSite.png",
      title: "MondeVert",
      description:
        "A creative environmental initiative built with Next.js. MondeVert uses art, culture, and technology to inspire communities to embrace sustainable living and environmental consciousness.",
      link: "https://monde-vert-site.vercel.app/",
      tags: ["Figma", "NextJS", "Firebase"],
    },
    {
      id: "civicevents+",
      image: "/images/civicevents.png",
      title: "CivicEvents+",
      description:
        "A user–admin platform for event registration, announcements, and promotions, with full content creation for admins, user management tools, and complete profile management capabilities.",
      link: "#",
      tags: ["HTML", "TailwindCSS", "jQuery", "NodeJS+Express", "MySQL"],
    },
    {
      id: "mfasha-health-app",
      image: "/images/mfasha.png",
      title: "Mfasha",
      description:
        "A mobile app that provides emergency preparedness tools and health literacy resources to Rwandans in Kinyarwanda. Making healthcare information accessible in the local language.",
      link: "https://drive.google.com/file/d/1ME_a-gjXlTLBXoraHYnC0U28nCxyMi5v/view?usp=drive_link",
      tags: ["Figma", "Flutter", "Firebase", "GEMINI AI"],
    },
    {
      id: "health-predict",
      image: "/images/healthpredictapi.png",
      title: "HealthPredict",
      description:
        "An ML system that predicts disease prevalence rates based on health indicators, socioeconomic factors, and healthcare infrastructure. Leveraging data science for better healthcare planning.",
      link: "https://linear-regression-model-f74t.onrender.com/docs",
      tags: ["Tensorflow", "Linear Regression", "FastAPI"],
    },
    {
      id: "health-spot",
      image: "/images/HealthSpotIMG.png",
      title: "HealthSpot",
      description:
        "An ML model leveraging satellite imagery to identify underserved rural areas in Rwanda and suggest optimal locations for health facilities. Using AI to improve healthcare accessibility.",
      link: "https://github.com/buwituze/HealthSpot_Model",
      tags: ["Neural Network", "Logistic Regression", "XGBoost"],
    },
    {
      id: "draw-app",
      image: "/images/drawapp.png",
      title: "Draw App",
      description:
        "Intuitive digital drawing application with user-friendly interface for creating and editing artwork with various tools and brushes. A simple yet powerful creative tool.",
      link: "https://benitha06.github.io/draw/",
      tags: ["HTML", "CSS", "JavaScript"],
    },
    {
      id: "agro-commerce",
      image: "/images/agrocommerce.png",
      title: "Agro-Commerce",
      description:
        "E-commerce platform bridging the gap between farmers and agricultural suppliers, making farming resources more accessible. Connecting agriculture stakeholders through digital commerce.",
      link: "https://honolinekamurerwa.github.io/Agro-Center/index.html",
      tags: ["HTML", "CSS", "JavaScript", "Figma"],
    },
  ];

  return (
    <section
      className="relative min-h-screen bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 pt-10 px-4 md:px-8 lg:px-16 pb-20"
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
        <div className="text-center mb-20 pt-28 md:pt-32">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
            <span className="bg-gradient-to-r from-blue-400 to-blue-600 bg-clip-text text-transparent">
              My Projects
            </span>
          </h2>
          <p className="text-lg md:text-xl text-white/70 max-w-3xl mx-auto">
            Discover different projects and experiences I have built over the
            years
          </p>
        </div>

        {/* Projects List - Each project in its own section */}
        <div className="space-y-16 mb-20">
          {allProjects.map((project, index) => (
            <div key={project.id} id={project.id} className="group relative">
              {/* Project Container */}
              <div className="relative bg-gradient-to-br from-slate-800/40 to-slate-900/40 backdrop-blur-md rounded-2xl border border-slate-700/50 overflow-hidden hover:border-blue-500/50 transition-all duration-500 hover:shadow-2xl hover:shadow-blue-500/20">
                <div className="grid grid-cols-1 md:grid-cols-5 gap-0 md:gap-8">
                  {/* Left Side - Image (Portrait orientation - taller than wide) */}
                  <div className="md:col-span-2 relative h-64 md:h-96 lg:h-[500px] overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-br from-blue-500/20 to-purple-500/20"></div>
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    {/* Gradient overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-slate-900/20 to-transparent md:bg-gradient-to-r md:from-transparent md:via-slate-900/10 md:to-slate-900/90"></div>
                  </div>

                  {/* Right Side - Content */}
                  <div className="md:col-span-3 p-6 md:p-8 lg:p-10 flex flex-col justify-center">
                    {/* Project Number */}
                    <div className="text-blue-400/40 font-bold text-6xl md:text-7xl lg:text-8xl mb-4">
                      {String(index + 1).padStart(2, "0")}
                    </div>

                    {/* Project Title */}
                    <h3 className="text-2xl md:text-3xl lg:text-4xl font-bold text-white mb-4 group-hover:text-blue-400 transition-colors duration-300">
                      {project.title}
                    </h3>

                    {/* Project Description */}
                    <p className="text-white/70 text-sm md:text-base lg:text-lg leading-relaxed mb-6">
                      {project.description}
                    </p>

                    {/* Technology Tags */}
                    <div className="flex flex-wrap gap-2 mb-8">
                      {project.tags.map((tag, tagIndex) => (
                        <span
                          key={tagIndex}
                          className="px-4 py-2 bg-blue-500/10 backdrop-blur-sm border border-blue-500/30 rounded-lg text-blue-300 text-xs md:text-sm font-medium hover:bg-blue-500/20 hover:border-blue-400/50 transition-all duration-300"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>

                    {/* Visit Site Button */}
                    <div className="flex gap-4">
                      <a
                        href={project.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-blue-500 to-blue-600 text-white font-semibold rounded-lg hover:from-blue-600 hover:to-blue-700 transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/50 hover:scale-105 group/btn"
                      >
                        <span>Visit Site</span>
                        <ExternalLink
                          size={18}
                          className="transition-transform duration-300 group-hover/btn:translate-x-1 group-hover/btn:-translate-y-1"
                        />
                      </a>

                      <button
                        onClick={() => window.open(project.link, "_blank")}
                        className="inline-flex items-center gap-2 px-6 py-3 bg-white/5 backdrop-blur-sm border border-white/20 text-white font-semibold rounded-lg hover:bg-white/10 hover:border-white/40 transition-all duration-300 group/btn2"
                      >
                        <span>Learn More</span>
                        <ArrowRight
                          size={18}
                          className="transition-transform duration-300 group-hover/btn2:translate-x-1"
                        />
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
