import Image from "next/image";
import TechTag from "../TechTag";

interface ProjectCardProps {
  imageURL: string;
  title: string;
  techs: string[];
}

export default function ProjectCard({ imageURL, title, techs }: ProjectCardProps) {
  return (
    <>
      <div className="group bg-white rounded-4xl overflow-hidden pb-4 w-78 h-60 shadow-xl hover:scale-105 transition-all duration-300">
        <div className="w-full h-[150px] relative overflow-hidden flex justify-center items-center">
            <Image src={imageURL} alt={imageURL} width={500} height={300} className="w-full h-full object-cover blackscale opacity-70 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-500" />
            <div className="absolute inset-0 bg-black/10 group-hover:bg-transparent transition-colors duration-500 pointer-events-none"></div>
        </div>
        <div className="pl-2 space-y-1 mt-4">
          <h3 className="text-xl px-2">{title}</h3>
          <div className="flex space-x-2 overflow-hidden">
            {techs.map((tech, i) => (
              <div key={i} className="shrink-0">
                <TechTag name={tech} size="sm" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
