import { ReactNode } from "react";
import Reveal from "./Reveal";

// Shared section header: a small label in the left rail, a serif title on the right.
const SectionHeading = ({
  label,
  title,
  intro,
}: {
  label: string;
  title: ReactNode;
  intro?: ReactNode;
}) => (
  <Reveal className="mb-14 grid gap-4 md:mb-20 md:grid-cols-12 md:gap-8">
    <p className="pt-3 font-mono text-xs uppercase tracking-[0.2em] text-muted md:col-span-3">
      {label}
    </p>
    <div className="md:col-span-9">
      <h2 className="font-display text-5xl leading-[1.05] text-paper md:text-6xl">
        {title}
      </h2>
      {intro && (
        <p className="mt-5 max-w-xl text-lg leading-relaxed text-muted">
          {intro}
        </p>
      )}
    </div>
  </Reveal>
);

export default SectionHeading;
