import Image from "next/image";
import TechIcosList from "./TechIconsList";

interface ProjectProps {
  title: string;
  description1: string;
  description2: string;
  imgSrc: string;
  techs: string[];
  githubLink: string;
}

export default function Project({
  title,
  description1,
  description2,
  imgSrc,
  techs,
  githubLink,
}: ProjectProps) {
  return (
    <>
      <div className="mb-8">
        <div className="">
          <img src={imgSrc} alt={title} className="rounded-xl object-cover"/>
        </div>
        <h3 className="mt-4 text-xl">{title}</h3>
        <div className="h-24">
          <p className="mt-2 mb-4 text-light-gray line-clamp-3">{description1}</p>
        </div>
        <a className="text-background-blue" href="">Mas información →</a>
      </div>
    </>
  );
}
