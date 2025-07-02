"use client";
import ToggleTheme from "./modules/theme/toggleTheme";
import Projects from "./modules/userDefined/projects/projects";

export default function Home() {
  return (
    <div>
      {/* <h1 className="text-left">
        Nakul Dev M V
      </h1>
      <p className="text-right text-black-400 dark:text-yellow-600">
        Welcome to my portfolio website!
      </p>
      
      <ToggleTheme /> */}
      <ToggleTheme/>
      <Projects />
    </div>
  );
}
