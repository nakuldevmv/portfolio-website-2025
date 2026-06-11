import NavBar from "./modules/userDefined/navbar/navbar";
import Landing from "./modules/userDefined/landing/landing";
import dynamic from "next/dynamic";
import LenisProvider from "./modules/helperFunction/smoothScroll/scroll";

// Below-fold — deferred to keep initial bundle lean
const AboutMe = dynamic(() => import("./modules/userDefined/aboutme/aboutme"));
const Skills = dynamic(() => import("./modules/userDefined/skills/skills"));
const Projects = dynamic(() => import("./modules/userDefined/projects/projects"));
const ContactMe  = dynamic(() => import("./modules/userDefined/contactme/contactMe"));
const Education  = dynamic(() => import("./modules/userDefined/education/education"));
const Experience = dynamic(() => import("./modules/userDefined/experience/experience"));
const Blogs      = dynamic(() => import("./modules/userDefined/blogs/blogs"));
const Research   = dynamic(() => import("./modules/userDefined/research/research"));

export default function Home() {
  return (
    <LenisProvider>
      <NavBar />
      <div id="home">
        <Landing />
      </div>

      {/* BELOW-FOLD COMPONENTS */}
      <div className="transition-opacity duration-300 ease-in opacity-100">
        <div id="about">
          <AboutMe />
        </div>
        <div id="skill" style={{ overflow: "hidden" }}>
          <Skills />
        </div>
        <div id="experience">
          <Experience />
        </div>
        <div id="project">
          <Projects />
        </div>
        <div id="education">
          <Education />
        </div>
        <div id="research">
          <Research />
        </div>
        <div id="blogs">
          <Blogs />
        </div>
        <div id="contact">
          <ContactMe />
        </div>
        <div className="text-center text-[0.8rem] font-bold leading-[1.2rem] text-[#818181] dark:text-[#4f4f4f]">
          <p>
            &copy; 2025 | Made with ❤︎ by{" "}
            <span className="font-extrabold [color:#68ad00]">Nakul</span>
          </p>
        </div>
      </div>
    </LenisProvider>
  );
}
