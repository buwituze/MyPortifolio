import Reveal from "../ui/Reveal";
import SectionHeading from "../ui/SectionHeading";

const skillGroups = [
  {
    category: "Machine Learning & AI",
    skills: [
      {
        name: "Python",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg",
      },
      {
        name: "TensorFlow",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tensorflow/tensorflow-original.svg",
      },
      {
        name: "PyTorch",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/pytorch/pytorch-original.svg",
      },
      {
        name: "scikit-learn",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/scikitlearn/scikitlearn-original.svg",
      },
      {
        name: "Pandas",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/pandas/pandas-original.svg",
      },
      {
        name: "NumPy",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/numpy/numpy-original.svg",
      },
      {
        name: "Jupyter",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jupyter/jupyter-original.svg",
      },
    ],
  },
  {
    category: "Data & Infrastructure",
    skills: [
      {
        name: "MySQL",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg",
      },
      {
        name: "PostgreSQL",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg",
      },
      {
        name: "MongoDB",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg",
      },
      {
        name: "Docker",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg",
      },
      {
        name: "Git",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg",
      },
    ],
  },
  {
    category: "Web & Other",
    skills: [
      {
        name: "JavaScript",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-plain.svg",
      },
      {
        name: "React",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
      },
      {
        name: "Node.js",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg",
      },
      {
        name: "HTML",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-plain.svg",
      },
      {
        name: "CSS",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-plain.svg",
      },
      {
        name: "TailwindCSS",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg",
      },
    ],
  },
];

const SkillsSection = () => {
  return (
    <div
      id="skills"
      className="mx-auto max-w-6xl border-t border-line px-5 py-24 md:px-8 md:py-32"
    >
      <SectionHeading label="Toolkit" title="Tools I work with" />

      <div className="grid gap-12 md:grid-cols-12 md:gap-8">
        {skillGroups.map((group, index) => (
          <Reveal
            key={group.category}
            delay={index * 100}
            className={`md:col-span-3 ${index === 0 ? "md:col-start-4" : ""}`}
          >
            <h3 className="font-mono text-xs uppercase tracking-[0.2em] text-muted">
              {group.category}
            </h3>
            <ul className="mt-4">
              {group.skills.map((skill) => (
                <li
                  key={skill.name}
                  className="flex items-center gap-3 border-t border-line py-3 text-paper"
                >
                  <img
                    src={skill.icon}
                    alt=""
                    className="h-4 w-4 object-contain"
                  />
                  {skill.name}
                </li>
              ))}
            </ul>
          </Reveal>
        ))}
      </div>
    </div>
  );
};

export default SkillsSection;
