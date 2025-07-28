"use client";
import { useEffect, useState } from "react";
import ToggleTheme from "./modules/theme/toggleTheme";
import Projects from "./modules/userDefined/projects/projects";
import Skills from "./modules/userDefined/skills/skills"
import NavBar from "./modules/userDefined/navbar/navbar";
import Landing from "./modules/userDefined/landing/landing";
import AboutMe from "./modules/userDefined/aboutme/aboutme";

export default function Home() {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) return null; // Avoid SSR mismatch
  return (
    <>
      {/* <NavBar /> */}
      <Landing />
      {/* <ToggleTheme /> */}
      <AboutMe />
      <Skills />
      <Projects />
    </>
  );
}
