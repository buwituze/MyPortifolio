import { Link } from "react-router-dom";
import Reveal from "../components/ui/Reveal";

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

const Projects = () => {
  return (
    <main
      id="projects"
      className="mx-auto max-w-6xl px-5 pb-24 pt-32 md:px-8 md:pt-40"
    >
      <Reveal className="mb-20 grid gap-4 md:mb-28 md:grid-cols-12 md:gap-8">
        <div className="md:col-span-3">
          <Link
            to="/"
            className="link-u font-mono text-xs uppercase tracking-[0.2em] text-muted hover:text-paper"
          >
            ← Home
          </Link>
        </div>
        <div className="md:col-span-9">
          <h1 className="font-display text-6xl leading-[1.05] text-paper md:text-8xl">
            All <span className="italic">projects</span>
          </h1>
          <p className="mt-5 max-w-xl text-lg leading-relaxed text-muted">
            Projects and experiences I've built over the years.
          </p>
        </div>
      </Reveal>

      <div>
        {allProjects.map((project) => {
          const hasLink = project.link && project.link !== "#";
          return (
            <article
              key={project.id}
              id={project.id}
              className="grid gap-8 border-t border-line py-12 md:grid-cols-12 md:gap-8 md:py-16"
            >
              <Reveal className="md:col-span-7">
                <img
                  src={project.image}
                  alt={`Screenshot of ${project.title}`}
                  className="aspect-[16/10] w-full rounded-sm border border-line object-cover object-top"
                />
              </Reveal>

              <Reveal delay={100} className="flex flex-col md:col-span-5">
                <p className="font-mono text-xs text-muted">
                  {project.tags.join(" / ")}
                </p>
                <h2 className="mt-4 font-display text-4xl text-paper md:text-5xl">
                  {project.title}
                </h2>
                <p className="mt-4 leading-relaxed text-muted">
                  {project.description}
                </p>
                <div className="mt-8">
                  {hasLink ? (
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="link-u text-sm text-paper"
                    >
                      Visit project ↗
                    </a>
                  ) : (
                    <span className="text-sm text-muted">
                      Private, no public link
                    </span>
                  )}
                </div>
              </Reveal>
            </article>
          );
        })}
      </div>
    </main>
  );
};

export default Projects;
