import React from "react";
import HoverTechIcon from "@/app/components/HoverTechIcon";

interface TechIconsListProps {
  techs: string[];
}

export default function TechIcosList({ techs }: TechIconsListProps) {
  return (
    <>
      <div className="flex space-x-2 h-full w-full items-center justify-around px-2">
        {techs.map((tech, index) => (
            <HoverTechIcon key={index} name={tech} />
        ))}
      </div>
    </>
  );
}
