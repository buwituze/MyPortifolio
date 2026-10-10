import Reveal from "./ui/Reveal";
import SectionHeading from "./ui/SectionHeading";

type Testimonial = {
  image?: string;
  name: string;
  position: string;
  linkedin?: string;
  company: string;
  text: string;
};

const testimonials: Testimonial[] = [
  {
    image: "/images/simon.jpeg",
    name: "Simon Imanigirimpuhwe",
    position: "Lead Software Developer",
    linkedin: "https://www.linkedin.com/in/simon-imanigirimpuhwe-2aaba7146/",
    company: "Jobra",
    text: "Benitha was a strong teammate with solid foundational development skills; she communicated clearly, took initiative, and showed a clear willingness to learn and improve.",
  },
  {
    name: "Peggy Dusenge",
    position: "Former Colleague",
    company: "Jobra",
    text: "Benitha and I always reviewed each other's PRs, and when problems came up she was there for the fixes. Always on time, and genuinely a good colleague.",
  },
  {
    image: "/images/anne.jpeg",
    name: "Anne Marie Twagirayezu",
    position: "Former ALU Student",
    linkedin: "https://www.linkedin.com/in/twagirayezu-anne-marie535257/",
    company: "African Leadership University (ALU)",
    text: "With a meticulous eye for detail and a strong passion for quality, she bridges the gap between vision and execution, making her an exceptional team player.",
  },
  {
    image: "/images/Admin lead.png",
    name: "Honorine Uwicyubahiro",
    position: "Administration Lead",
    linkedin: "https://www.linkedin.com/in/honorineuwicyubahiro/",
    company: "African Leadership University (ALU)",
    text: "A dynamic problem-solver who consistently delivers innovative solutions with precision and skill. Always brings clarity and efficiency to complex challenges.",
  },
];

const Testimonials = () => {
  return (
    <section
      id="testimonials"
      className="mx-auto max-w-6xl border-t border-line px-5 py-24 md:px-8 md:py-32"
    >
      <SectionHeading label="Kind words" title="From people I've worked with" />

      <div>
        {testimonials.map((testimonial, index) => (
          <Reveal
            key={testimonial.name}
            delay={index * 80}
            className="grid gap-6 border-t border-line py-10 md:grid-cols-12 md:gap-8"
          >
            <figure className="contents">
              <figcaption className="order-last flex items-center gap-4 md:order-none md:col-span-3 md:items-start">
                {testimonial.image ? (
                  <img
                    src={testimonial.image}
                    alt=""
                    className="h-12 w-12 shrink-0 rounded-full object-cover"
                  />
                ) : (
                  <span
                    aria-hidden="true"
                    className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full border border-line font-display text-lg text-paper"
                  >
                    {testimonial.name
                      .split(" ")
                      .map((part) => part[0])
                      .join("")}
                  </span>
                )}
                <div className="text-sm">
                  {testimonial.linkedin ? (
                    <a
                      href={testimonial.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="link-u text-paper"
                    >
                      {testimonial.name}
                    </a>
                  ) : (
                    <p className="text-paper">{testimonial.name}</p>
                  )}
                  <p className="mt-1 text-muted">{testimonial.position}</p>
                  <p className="text-muted">{testimonial.company}</p>
                </div>
              </figcaption>
              <blockquote className="font-display text-2xl leading-snug text-paper md:col-span-9 md:text-[2rem]">
                <span className="text-accent">“</span>
                {testimonial.text}
                <span className="text-accent">”</span>
              </blockquote>
            </figure>
          </Reveal>
        ))}
      </div>
    </section>
  );
};

export default Testimonials;
