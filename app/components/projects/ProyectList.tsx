import { useState, useEffect } from "react";
import ProjectCard from "./ProjectCard";

interface ProjectListProps {
  projects: {
    imageURL: string;
    title: string;
    techs: string[];
  }[];
  sendProjectIndex: (projectIndex: number) => void;
}

export default function ProjectList({ projects, sendProjectIndex }: ProjectListProps) {
  const initialOffset = projects.length * 5;
  const [currentIndex, setCurrentIndex] = useState(initialOffset);
  const [isHovered, setIsHovered] = useState(false);
  const [isTransitioning, setIsTransitioning] = useState(true);

  // We map the array enough times to act infinite (30 total items)
  const infiniteProjects = Array.from({ length: 10 }).flatMap(() => projects);

  useEffect(() => {
    if (isHovered) return;
    const timer = setInterval(() => {
      // Evitamos que el carrusel siga avanzando si el tab del navegador está inactivo.
      // Esto previene el bug donde 'transitionend' no se dispara y la lista queda en blanco.
      if (!document.hidden) {
        setCurrentIndex((prev) => prev + 1);
      }
    }, 2500);
    return () => clearInterval(timer);
  }, [currentIndex, isHovered]);

  const handleTransitionEnd = () => {
    if (currentIndex >= projects.length * 7) {
      setIsTransitioning(false);
      setCurrentIndex(currentIndex - projects.length * 4);
      setTimeout(() => setIsTransitioning(true), 50);
    }
  };

  const handleDotClick = (dotIndex: number) => {
    const currentMod = currentIndex % projects.length;
    let diff = (dotIndex - currentMod) % projects.length;
    if (diff < 0) diff += projects.length;
    if (diff === 0) return;

    setCurrentIndex((prev) => prev + diff);
  };

  return (
    <>
      <div
        className="relative overflow-x-hidden p-2 bg-white rounded-4xl h-full w-full"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <div
          onTransitionEnd={handleTransitionEnd}
          className={`flex h-full w-full items-start space-x-10 ease-out ${isTransitioning ? 'transition-transform duration-300' : ''}`}
          style={{ transform: `translateX(-${currentIndex * 22.5}rem)` }}
        >
          {infiniteProjects.map((project, i) => (
            <div key={i} className="flex flex-col h-full items-center shrink-0">
              <div
                onClick={() => sendProjectIndex(i % projects.length)}
                className="cursor-pointer h-full"
              >
                <ProjectCard
                  title={project.title}
                  imageURL={project.imageURL}
                  techs={project.techs}
                  isSmall={i !== currentIndex}
                  disableTransition={!isTransitioning}
                ></ProjectCard>
              </div>
            </div>
          ))}
        </div>

        <div className="absolute bottom-1.5 left-2/3 -translate-x-1/2 flex space-x-2">
          {projects.map((_, dotIndex) => (
            <button
              key={dotIndex}
              onClick={() => handleDotClick(dotIndex)}
              className={`cursor-pointer h-3 2xl:h-6 rounded-full transition-all duration-300 ${(currentIndex % projects.length) === dotIndex ? "w-8 2xl:w-16 bg-gray-600" : "w-3 2xl:w-6 bg-gray-400"
                }`}
            ></button>
          ))}
        </div>
      </div>
    </>
  );
}
