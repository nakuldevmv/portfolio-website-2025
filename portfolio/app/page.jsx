"use client";
import ToggleTheme from "./modules/theme/toggleTheme";
import Projects from "./modules/userDefined/projects/projects";
import Skills from "./modules/userDefined/skills/skills"
import NavBar from "./modules/userDefined/navbar/navbar";
import Landing from "./modules/userDefined/landing/landing";
import AboutMe from "./modules/userDefined/aboutme/aboutme";

export default function Home() {
  return (
    <>
      {/* <NavBar /> */}
      <Landing />
      <AboutMe />
      <ToggleTheme />
      {/* <Skills />
      <Projects /> */}
    </>
  );
}
