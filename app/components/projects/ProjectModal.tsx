import Image from "next/image";
import TechTag from "../TechTag";

interface ProjectModalProps {
  show: boolean;
  project: {
    title: string;
    description: string;
    imageURL: string;
    githubLink: string;
    techs: string[];
  };
  closeModal: (projectIndex: number) => void;
}

export default function ProjectModal({
  show,
  project,
  closeModal,
}: ProjectModalProps) {
  return (
    <>
      <div
        className={`${show
          ? "relative flex flex-col w-full h-full rounded-4xl bg-white pb-6 shadow-2xl outline"
          : "hidden"
          }`}
      >
        <button
          className="absolute flex items-center justify-center z-10 top-4 right-4 w-10 h-10 bg-red-600/90 rounded-full outline outline-white/30"
          onClick={() => closeModal(0)}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            className="size-6 text-white"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M6 18 18 6M6 6l12 12"
            />
          </svg>
        </button>
        <div className="w-full h-64 relative overflow-hidden">
          <Image
            alt={project.imageURL}
            src={project.imageURL}
            fill
            className="rounded-t-4xl"
          ></Image>
        </div>
        <div className="mt-4 px-6">
          <h2 className="text-xl">{project.title}</h2>
          <p className="text-light-gray">{project.description}</p>
          <h3 className="mt-4">Tecnologías</h3>
          <div className="flex space-x-2">
            {project.techs.map((tech, index) => (
              <div key={index}>
                <TechTag name={tech}></TechTag>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
