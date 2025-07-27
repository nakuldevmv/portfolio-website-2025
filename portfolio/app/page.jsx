"use client";
import ToggleTheme from "./modules/theme/toggleTheme";
import Projects from "./modules/userDefined/projects/projects";
import Skills from "./modules/userDefined/skills/skills"
import NavBar from "./modules/userDefined/navbar/navbar";
import Landing from "./modules/userDefined/landing/landing";

export default function Home() {
  return (
    <>
      {/* <NavBar /> */}
      <Landing />
      <ToggleTheme />
      <Skills />
      <Projects />
    </>
  );
}
