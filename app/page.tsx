"use client";

import ProjectsPage from "./proyectos/page";
import HeroPage from "./hero/page";
import AboutMePage from "./sobre-mi/page";
import TechStack from "./tech-stack/TechStack";

export default function Home() {
  return (
    <>
      <div className="">
        <HeroPage></HeroPage>
        <TechStack></TechStack>
        <ProjectsPage></ProjectsPage>
        <AboutMePage></AboutMePage>
      </div>
    </>
  );
}
