import { useState } from "react";
import { Link } from "react-router-dom";
import Reveal from "./ui/Reveal";
import SectionHeading from "./ui/SectionHeading";

const featuredProjects = [
  {
    id: "skofund",
    image: "/images/SokoFund.png",
    title: "SokoFund",
    description:
      "An HR-FinTech Platform for African businesses and workforces, offering HR & Payroll Management Software plus Embedded Finance Products.",
    link: "https://www.sokofund.com/",
    tags: ["React JS", "MUI", "NodeJS+Express", "GraphQL API", "PostgreSQL"],
  },
  {
    id: "bloom-web-app",
    image: "/images/newbloomwebapp.png",
    title: "Bloom Web App",
    description:
      "A comprehensive platform connecting Rwandan farmers with essential farming tools, expert knowledge, and streamlined agricultural resources for enhanced productivity.",
    link: "https://bloom-project.netlify.app/",
    tags: ["Figma", "ReactJS", "Django", "MongoDB"],
  },
  {
    id: "mondevert-site",
    image: "/images/MondVertSite.png",
    title: "MondeVert",
    description:
      "A creative environmental initiative built with Next.js. MondeVert uses art, culture, and technology to inspire communities to embrace sustainable living.",
    link: "https://monde-vert-site.vercel.app/",
    tags: ["Figma", "NextJS", "Firebase"],
  },
  {
    id: "civicevents+",
    image: "/images/civicevents.png",
    title: "CivicEvents+",
    description:
      "A user–admin platform for event registration, announcements, and promotions, with full content creation for admins, user management tools, and complete profile management.",
    link: "#",
    tags: ["HTML", "TailwindCSS", "jQuery", "NodeJS+Express", "MySQL"],
  },
  {
    id: "mfasha-health-app",
    image: "/images/mfasha.png",
    title: "Mfasha",
    description:
      "A mobile app that provides emergency preparedness tools and health literacy resources to Rwandans in Kinyarwanda.",
    link: "https://drive.google.com/file/d/1ME_a-gjXlTLBXoraHYnC0U28nCxyMi5v/view?usp=drive_link",
    tags: ["Figma", "Flutter", "Firebase", "GEMINI AI"],
  },
  {
    id: "health-predict",
    image: "/images/healthpredictapi.png",
    title: "HealthPredict",
    description:
      "An ML system that predicts disease prevalence rates based on health indicators, socioeconomic factors, and healthcare infrastructure",
    link: "https://linear-regression-model-f74t.onrender.com/docs",
    tags: ["Tensorflow", "Linear Regression", "FastAPI"],
  },
  {
    id: "health-spot",
    image: "/images/HealthSpotIMG.png",
    title: "HealthSpot",
    description:
      "An ML model leveraging satellite imagery to identify underserved rural areas in Rwanda and suggest optimal locations for health facilities.",
    link: "https://github.com/buwituze/HealthSpot_Model",
    tags: ["Neural Network", "Logistic Regression", "XGBoost"],
  },

  {
    id: "draw-app",
    image: "/images/drawapp.png",
    title: "Draw App",
    description:
      "Intuitive digital drawing application with user-friendly interface for creating and editing artwork with various tools and brushes.",
    link: "https://benitha06.github.io/draw/",
    tags: ["HTML", "CSS", "JavaScript"],
  },
  {
    id: "agro-commerce",
    image: "/images/agrocommerce.png",
    title: "Agro-Commerce",
    description:
      "E-commerce platform bridging the gap between farmers and agricultural suppliers, making farming resources more accessible.",
    link: "https://honolinekamurerwa.github.io/Agro-Center/index.html",
    tags: ["Frontend", "Figma"],
  },
];

const ProjectsSection = () => {
  const [active, setActive] = useState(0);
  const current = featuredProjects[active];

  return (
    <section
      id="resume"
      className="mx-auto max-w-6xl border-t border-line px-5 py-24 md:px-8 md:py-32"
    >
      <SectionHeading label="Selected work" title="Things I've built" />

      <div className="grid gap-10 md:grid-cols-12 md:gap-8">
        {/* Preview of the project under the pointer or keyboard focus */}
        <Reveal className="md:col-span-7">
          <div className="md:sticky md:top-24">
            <div className="relative aspect-[16/10] overflow-hidden rounded-sm border border-line bg-surface">
              {featuredProjects.map((project, index) => (
                <img
                  key={project.id}
                  src={project.image}
                  alt={index === active ? `Screenshot of ${project.title}` : ""}
                  className={`absolute inset-0 h-full w-full object-cover object-top transition-opacity duration-500 ${
                    index === active ? "opacity-100" : "opacity-0"
                  }`}
                />
              ))}
            </div>
            <p className="mt-4 max-w-lg text-sm leading-relaxed text-muted">
              {current.description}
            </p>
            <p className="mt-2 font-mono text-xs text-muted">
              {current.tags.join(" / ")}
            </p>
          </div>
        </Reveal>

        <Reveal delay={100} className="md:col-span-5">
          <ul className="border-b border-line">
            {featuredProjects.map((project, index) => (
              <li key={project.id} className="border-t border-line">
                <Link
                  to={`/all-projects#${project.id}`}
                  onMouseEnter={() => setActive(index)}
                  onFocus={() => setActive(index)}
                  className="flex items-baseline justify-between gap-4 py-4"
                >
                  <span
                    className={`font-display text-2xl transition-all duration-300 md:text-3xl ${
                      index === active
                        ? "translate-x-2 text-paper"
                        : "text-muted"
                    }`}
                  >
                    {project.title}
                  </span>
                  <span
                    className={`text-accent transition-opacity duration-300 ${
                      index === active ? "opacity-100" : "opacity-0"
                    }`}
                    aria-hidden="true"
                  >
                    →
                  </span>
                </Link>
              </li>
            ))}
          </ul>
          <Link
            to="/all-projects"
            className="link-u mt-8 inline-block text-sm text-paper"
          >
            See all projects with details →
          </Link>
        </Reveal>
      </div>
    </section>
  );
};

export default ProjectsSection;
