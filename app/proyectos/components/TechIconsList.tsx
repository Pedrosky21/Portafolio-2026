import { icons } from "@/app/components/icons/index";
import React from "react";

interface TechIconsListProps {
  techs: string[];
}

export default function TechIcosList({ techs }: TechIconsListProps) {
  return (
    <>
      <div className="flex h-full w-full items-center justify-around px-2">
        {techs.map((tech, index) => (
            <div key={index} className="">
                {icons[tech.toLowerCase()] ? React.createElement(icons[tech.toLowerCase()], {className: "fill-white h-8 w-8"}) : null}
            </div>
        ))}
      </div>
    </>
  );
}
