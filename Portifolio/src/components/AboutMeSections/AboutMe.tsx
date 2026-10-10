import Reveal from "../ui/Reveal";
import SectionHeading from "../ui/SectionHeading";

const experiences = [
  {
    role: "Full Stack Software Engineer",
    company: "SokoFund",
    period: "Sep 2024 – Nov 2025",
    type: "Full-time",
  },
  {
    role: "Game Dev",
    company: "Flowers & Gardening Studio",
    period: "Jul 2024 – Sep 2025",
    type: "Contract",
  },
  {
    role: "Front-End Developer",
    company: "MondeVert",
    period: "Jun 2025 – Aug 2025",
    type: "Contract",
  },
  {
    role: "Salesforce Admin Apprentice",
    company: "ALU-RW",
    period: "Aug 2024 – Feb 2025",
    type: "Apprenticeship",
  },
];

const AboutMe = () => {
  return (
    <div
      id="aboutme"
      className="mx-auto max-w-6xl border-t border-line px-5 py-24 md:px-8 md:py-32"
    >
      <SectionHeading label="About" title="Hello, I'm Benitha." />

      <div className="grid gap-12 md:grid-cols-12 md:gap-8">
        <Reveal className="md:col-span-4">
          <figure>
            <img
              src="/images/Benitha.jpeg"
              alt="Portrait of Benitha Uwituze"
              className="aspect-[4/5] w-full rounded-sm object-cover"
            />
            <figcaption className="mt-3 font-mono text-xs text-muted">
              That's me, Kigali.
            </figcaption>
          </figure>
        </Reveal>

        <Reveal delay={100} className="md:col-span-7 md:col-start-6">
          <div className="space-y-5 text-lg leading-relaxed text-paper/90">
            <p>
              Software engineer by day, problem solver by... well, also by day.
            </p>
            <p>
              I graduated from African Leadership University as a Mastercard
              Foundation Scholar, picked up a Salesforce Admin certification
              along the way, and I'm still obsessed with building technology
              that makes life better for real people.
            </p>
            <p>
              These days that mostly means machine learning: teaching models to
              notice things in data so people don't have to. React, Python,
              Figma - if it solves a problem elegantly, I'm probably already
              tinkering with it. And when something finally clicks, I tend to
              write about it on{" "}
              <a
                href="https://medium.com/@benithatuze15"
                target="_blank"
                rel="noopener noreferrer"
                className="link-u text-paper"
              >
                Medium
              </a>
              .
            </p>
          </div>

          <div className="mt-8 flex flex-wrap gap-x-8 gap-y-2 text-sm">
            <a
              href="mailto:benithatuze15@gmail.com"
              className="link-u text-paper"
            >
              benithatuze15@gmail.com
            </a>
            <a
              href="https://www.linkedin.com/in/benitha-uwituze/"
              target="_blank"
              rel="noopener noreferrer"
              className="link-u text-paper"
            >
              LinkedIn ↗
            </a>
          </div>

          <h3 className="mt-16 font-mono text-xs uppercase tracking-[0.2em] text-muted">
            Experience
          </h3>
          <ol className="mt-4">
            {experiences.map((exp) => (
              <li
                key={exp.role + exp.company}
                className="grid gap-1 border-t border-line py-4 sm:grid-cols-[11rem_1fr_auto] sm:items-baseline sm:gap-6"
              >
                <span className="font-mono text-xs text-muted">
                  {exp.period}
                </span>
                <span className="text-paper">
                  {exp.role}
                  <span className="text-muted"> at {exp.company}</span>
                </span>
                <span className="text-xs text-muted">{exp.type}</span>
              </li>
            ))}
          </ol>
        </Reveal>
      </div>
    </div>
  );
};

export default AboutMe;
