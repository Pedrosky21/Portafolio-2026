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
    <div
      className={`${show ? "flex" : "hidden"} relative flex-col w-full max-h-[90vh] overflow-y-auto rounded-[2rem] bg-white shadow-2xl ring-1 ring-black/5`}
    >
      <button
        className="absolute z-20 top-4 right-4 flex items-center justify-center w-10 h-10 rounded-full bg-gray-100 text-gray-500 hover:bg-almost-black hover:text-white transition-colors duration-75 cursor-pointer"
        onClick={() => closeModal(0)}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth="2.5"
          stroke="currentColor"
          className="size-5"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M6 18 18 6M6 6l12 12"
          />
        </svg>
      </button>

      <div className="w-full h-48 md:h-52 relative shrink-0 bg-gray-50">
        <Image
          alt={project.title}
          src={project.imageURL}
          fill
          className="rounded-t-[2rem] object-cover"
        />
      </div>

      <div className="flex flex-col flex-grow px-6 pb-6 md:px-8 relative z-10">
        <h2 className="text-2xl md:text-3xl font-semibold text-almost-black tracking-tight mt-3 mb-2 md:mb-3">
          {project.title}
        </h2>

        <p className="text-gray-600 text-sm md:text-base leading-relaxed whitespace-pre-line mb-4">
          {project.description}
        </p>

        <div className="mt-auto pt-4 border-t border-gray-100">
          <div className="flex flex-wrap gap-1.5 md:gap-2">
            {project.techs.map((tech, index) => (
              <TechTag key={index} name={tech} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
