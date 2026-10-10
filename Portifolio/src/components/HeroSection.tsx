import Reveal from "./ui/Reveal";

const HeroSection = () => {
  const facts = [
    { label: "Now focusing on", value: "Machine learning & data" },
    { label: "Based in", value: "Kigali, Rwanda" },
    { label: "Education", value: "Software Engineering graduate, ALU" },
  ];

  return (
    <section
      id="home"
      className="mx-auto flex min-h-[100svh] max-w-6xl flex-col justify-end px-5 pb-16 pt-32 md:px-8 md:pb-20"
    >
      <Reveal>
        <p className="mb-6 font-mono text-xs uppercase tracking-[0.2em] text-muted">
          Software Engineer &amp; Salesforce Admin
        </p>
        <h1 className="font-display text-[17vw] leading-[0.9] text-paper md:text-[10rem]">
          Benitha
          <br />
          <span className="italic">Uwituze</span>
        </h1>
      </Reveal>

      <Reveal
        delay={150}
        className="mt-10 grid gap-10 md:mt-14 md:grid-cols-12 md:gap-8"
      >
        <p className="text-xl leading-relaxed text-paper/90 md:col-span-7 md:text-2xl">
          I build machine learning systems and the software around them, from
          the data pipeline to the interface people actually use.
        </p>

        <div className="flex flex-wrap items-center gap-6 md:col-span-5 md:justify-end">
          <a
            href="#contact"
            className="rounded-md bg-paper px-5 py-3 text-sm font-medium text-ink transition-colors duration-200 hover:bg-accent"
          >
            Get in touch
          </a>
          <a
            href="/Benitha Uwituze Rutagengwa - CV.pdf"
            download="Benitha Uwituze Rutagengwa - CV.pdf"
            className="link-u text-sm text-paper"
          >
            Download CV ↓
          </a>
        </div>
      </Reveal>

      <Reveal delay={300}>
        <dl className="mt-16 grid gap-6 border-t border-line pt-6 sm:grid-cols-3">
          {facts.map((fact) => (
            <div key={fact.label}>
              <dt className="font-mono text-xs uppercase tracking-[0.2em] text-muted">
                {fact.label}
              </dt>
              <dd className="mt-2 text-sm text-paper">{fact.value}</dd>
            </div>
          ))}
        </dl>
      </Reveal>
    </section>
  );
};

export default HeroSection;
