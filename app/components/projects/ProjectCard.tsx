import Image from "next/image";
import TechTag from "../TechTag";

interface ProjectCardProps {
  imageURL: string;
  title: string;
  techs: string[];
  isSmall?: boolean;
  disableTransition?: boolean;
}

export default function ProjectCard({ imageURL, title, techs, isSmall, disableTransition }: ProjectCardProps) {
  return (
    <div className={`relative group bg-white rounded-4xl overflow-hidden ${isSmall ? 'w-80 h-48' : 'w-96 h-52'} hover:scale-105 ${disableTransition ? '' : 'transition-all duration-300'} shadow-sm hover:shadow-xl`}>
      <div className="w-full h-full relative">
        <Image
          src={imageURL}
          alt={title}
          fill
          className={`object-cover ${disableTransition ? '' : 'transition-all duration-700'} ${isSmall ? 'opacity-70 group-hover:opacity-100' : 'opacity-100 group-hover:scale-110'}`}
        />
        
        {/* Dark overlay that appears on hover for ALL cards */}
        <div className={`absolute inset-0 z-10 bg-gradient-to-t from-black/90 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none`}></div>
        
        {/* Light overlay for small cards */}
        {isSmall && (
          <div className={`absolute inset-0 z-10 bg-black/20 group-hover:bg-transparent ${disableTransition ? '' : 'transition-colors duration-300'} pointer-events-none`}></div>
        )}
      </div>

      {/* Hover Reveal Content - Active for all cards on hover */}
      <div className="absolute z-20 bottom-0 left-0 w-full p-5 translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300 ease-out flex flex-col justify-end pointer-events-none">
        <h3 className="text-xl text-white font-medium mb-2 drop-shadow-md">{title}</h3>
        <div className="flex flex-wrap gap-1.5">
          {techs.map((tech, i) => (
            <div key={i} className="shrink-0">
              <TechTag name={tech} size="sm" />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
