import HeroSection from "../components/HeroSection";
import About from "../components/AboutSection";
import Services from "../components/Services";
import ProjectsSection from "../components/Resume";
import Testimonials from "../components/Testimonials";
import Contact from "../components/Contact";

export default function Home() {
  return (
    <div>
      <HeroSection />
      <About />
      <Services />
      <ProjectsSection />
      <Testimonials />
      <Contact />
    </div>
  );
}
