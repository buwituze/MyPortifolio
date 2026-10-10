import { Link } from "react-router-dom";
import Reveal from "./ui/Reveal";
import SectionHeading from "./ui/SectionHeading";

// Each capability points at the work that backs it up.
const services = [
  {
    title: "Machine learning",
    description:
      "Training and evaluating models, from regression to neural networks, and serving them behind APIs people can use.",
    tools: ["Python", "TensorFlow", "scikit-learn", "FastAPI"],
    proof: [
      { label: "HealthPredict", id: "health-predict" },
      { label: "HealthSpot", id: "health-spot" },
    ],
  },
  {
    title: "Full-stack development",
    description:
      "Complete web applications, from React interfaces to Node.js backends and SQL databases.",
    tools: ["React", "Node.js", "GraphQL", "PostgreSQL"],
    proof: [
      { label: "SokoFund", id: "skofund" },
      { label: "CivicEvents+", id: "civicevents+" },
    ],
  },
  {
    title: "Product & UI design",
    description:
      "Intuitive interfaces designed in Figma before a line of code is written.",
    tools: ["Figma"],
    proof: [
      { label: "Bloom", id: "bloom-web-app" },
      { label: "MondeVert", id: "mondevert-site" },
    ],
  },
  {
    title: "Mobile development",
    description:
      "Cross-platform apps for iOS and Android with clear, friendly interfaces.",
    tools: ["Flutter", "Firebase"],
    proof: [{ label: "Mfasha", id: "mfasha-health-app" }],
  },
  {
    title: "Salesforce administration",
    description:
      "Salesforce setup and customization that streamlines how a business runs.",
    tools: ["Salesforce Certified Admin"],
    proof: [],
  },
  {
    title: "Writing",
    description: "Written content that is clear and resonates with readers.",
    tools: ["Medium"],
    proof: [],
    external: { label: "my Medium", href: "https://medium.com/@benithatuze15" },
  },
];

const Services = () => {
  return (
    <section
      id="services"
      className="mx-auto max-w-6xl border-t border-line px-5 py-24 md:px-8 md:py-32"
    >
      <SectionHeading label="What I do" title="Where I can help" />

      <ul className="border-b border-line">
        {services.map((service, index) => (
          <li key={service.title} className="border-t border-line">
            <Reveal
              delay={index * 60}
              className="group grid gap-4 py-8 md:grid-cols-12 md:gap-8"
            >
              <span className="font-mono text-xs text-muted md:col-span-3 md:pt-3">
                {service.tools.join(" · ")}
              </span>
              <h3 className="font-display text-3xl text-paper transition-colors duration-300 group-hover:text-accent md:col-span-4 md:text-4xl">
                {service.title}
              </h3>
              <div className="md:col-span-5 md:pt-2">
                <p className="leading-relaxed text-muted">
                  {service.description}
                </p>
                {service.external && (
                  <p className="mt-3 text-sm text-paper">
                    <span className="text-muted">Read </span>
                    <a
                      href={service.external.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="link-u"
                    >
                      {service.external.label}
                    </a>
                    <span className="text-muted"> ↗</span>
                  </p>
                )}
                {service.proof.length > 0 && (
                  <p className="mt-3 text-sm text-paper">
                    <span className="text-muted">See </span>
                    {service.proof.map((item, i) => (
                      <span key={item.id}>
                        {i > 0 && <span className="text-muted"> and </span>}
                        <Link
                          to={`/all-projects#${item.id}`}
                          className="link-u"
                        >
                          {item.label}
                        </Link>
                      </span>
                    ))}
                    <span className="text-muted"> →</span>
                  </p>
                )}
              </div>
            </Reveal>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default Services;
