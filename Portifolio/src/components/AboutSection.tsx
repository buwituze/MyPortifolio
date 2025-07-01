import AboutMe from "./AboutMeSections/AboutMe";
// import MissionAbout from "./MissionAbout";
import SkillsAbout from "./AboutMeSections/skillsAbout";

const About = () => {
  return (
    <section className="about-section" id="about">
      <AboutMe />
      {/* <MissionAbout /> */}
      <SkillsAbout />
    </section>
  );
};

export default About;
