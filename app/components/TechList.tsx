import TechTag from "./TechTag";

interface TechListProps {
  techs: string[];
}

export default function TechList({techs}: TechListProps) {
  return (
    <>
      <div className="flex flex-wrap gap-3">
        {techs.map((tech) => (
            <TechTag key={tech} name={tech} />
        ))}
      </div>
    </>
  );
}
