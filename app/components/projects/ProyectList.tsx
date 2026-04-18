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
  return (
    <>
      <div className="flex space-x-5 w-full">
        {projects.map((project, i) => (
          <div key={i} onClick={() => sendProjectIndex(i)}>
            <ProjectCard
              title={project.title}
              imageURL={project.imageURL}
              techs={project.techs}
            ></ProjectCard>
          </div>
        ))}
      </div>
    </>
  );
}
