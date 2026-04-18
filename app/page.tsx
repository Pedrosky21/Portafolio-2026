"use client";

import ProjectsPage from "./_proyectos/Projects";
import HeroPage from "./_hero/Hero";
import AboutMePage from "./_sobre-mi/AboutMe";
import TechStack from "./_tech-stack/TechStack";

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
