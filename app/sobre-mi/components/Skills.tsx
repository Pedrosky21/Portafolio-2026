"use client";
import dataTechnologies from "../data/technologies.json" assert { type: "json" };
import abilities from "../data/abilities.json" assert { type: "json" };
import React, { useState, useRef, useEffect } from "react";
import { animate } from "animejs";
import { icons } from "@/app/components/icons";

export default function Skills() {
  const [showedTechnology, setShowedTechnology] = useState<{
    title: string;
    description: string[];
  }>(dataTechnologies[0]);

  const technologies = [
    "python",
    "javascript",
    "nextjs",
    "angular",
    "nodejs",
    "github",
    "mysql",
    "mongodb",
  ];

  const showTechnology = (tech: string) => {
    const technology = dataTechnologies?.find((elem) => {
      if (elem.title.toLowerCase() === tech) {
        return elem;
      }
    });
    setShowedTechnology(technology ? technology : dataTechnologies[0]);
  };

  const colorTechnology = (tech: string) => {
    let className = "";
    let color;
    switch (tech) {
      case "python":
        color = "text-green-500";
        break;
      case "javascript":
        color = "text-yellow-300";
        break;
      case "nextjs":
        color = "text-white";
        break;
      case "angular":
        color = "text-red-600";
        break;
      case "nodejs":
        color = "text-green-500";
        break;
      case "github":
        color = "text-gray-400";
        break;
      case "mysql":
        color = "text-blue-700";
        break;
      case "mongodb":
        color = "text-green-700";
        break;
      default:
        color = "text-white";
    }

    className += color;
    return className;
  };

  // Animacion toggle Habilidades
  const [selected, setSelected] = useState<"opcion1" | "opcion2">("opcion1");

  return (
    <>
      <div className="w-full h-full flex flex-col rounded-[2.5rem] bg-background-green text-white p-5 md:p-6 border border-foreground-green/30 shadow-2xl relative overflow-hidden group">
        
        <div className="relative z-10 flex flex-col h-full">
          <div className="flex flex-col sm:flex-row items-center sm:items-baseline justify-between mb-4 pb-3 border-b border-foreground-green/50">
            <h2 className="text-2xl md:text-3xl font-bold tracking-tight mb-3 sm:mb-0">
              Skills
            </h2>
            <div className="flex bg-foreground-green/50 rounded-full p-1 border border-foreground-green/60 shadow-inner">
              <button
                onClick={() => setSelected("opcion1")}
                className={`rounded-full px-6 py-2.5 text-sm md:text-base font-semibold transition-all duration-300 focus:outline-none cursor-pointer ${
                  selected === "opcion1" 
                    ? "bg-highlight-pink text-white shadow-[0_0_15px_rgba(217,0,255,0.4)]" 
                    : "bg-transparent text-gray-400 hover:text-white"
                }`}
              >
                Técnicas
              </button>
              <button
                onClick={() => setSelected("opcion2")}
                className={`rounded-full px-6 py-2.5 text-sm md:text-base font-semibold transition-all duration-300 focus:outline-none cursor-pointer ${
                  selected === "opcion2" 
                    ? "bg-highlight-pink text-white shadow-[0_0_15px_rgba(217,0,255,0.4)]" 
                    : "bg-transparent text-gray-400 hover:text-white"
                }`}
              >
                Blandas
              </button>
            </div>
          </div>

          <div className="flex flex-1 min-h-[300px] relative">
            <div
              className={`flex flex-col shrink-0 py-2 space-y-2.5 transition-all duration-500 overflow-y-auto [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none] px-1 md:px-2 -ml-1 -mt-1 ${
                selected == "opcion1"
                  ? "w-20 md:w-24 opacity-100 mr-2 md:mr-4"
                  : "w-0 opacity-0 mr-0"
              }`}
            >
              {technologies.map((tech) => {
                const isActive = showedTechnology.title.toLowerCase() === tech;
                return (
                  <button
                    key={tech}
                    className={`flex items-center justify-center rounded-2xl p-2 md:p-3 transition-all duration-300 w-14 h-14 md:w-16 md:h-16 shrink-0 border cursor-pointer ${
                      isActive
                        ? `bg-foreground-green/90 border-highlight-pink shadow-[0_0_15px_rgba(217,0,255,0.25)] scale-105`
                        : "bg-foreground-green/30 border-transparent hover:bg-foreground-green/60 hover:border-highlight-pink/30 hover:scale-105"
                    }`}
                    onClick={() => showTechnology(tech)}
                  >
                    <div className="flex items-center justify-center">
                      {icons[tech.toLowerCase()]
                        ? React.createElement(icons[tech.toLowerCase()], {
                            className: `h-6 w-6 md:h-8 md:w-8 transition-colors ${
                              isActive
                                ? colorTechnology(tech)
                                : "fill-white/70 text-white/70"
                            }`,
                          })
                        : null}
                    </div>
                  </button>
                );
              })}
            </div>
            
            <div className="flex-1 rounded-3xl bg-foreground-green/60 border border-foreground-green/80 p-5 md:p-6 shadow-inner overflow-hidden flex flex-col min-h-[250px]">
              {selected == "opcion1" ? (
                <div className="flex flex-col h-full transition-opacity duration-300">
                  <h2
                    className={`${colorTechnology(
                      showedTechnology.title.toLowerCase()
                    )} text-xl md:text-2xl font-bold tracking-tight mb-4`}
                  >
                    {showedTechnology.title}
                  </h2>
                  <div className="overflow-y-auto [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none] flex-1 pr-2 pb-10">
                    <ul className="space-y-3">
                      {showedTechnology.description.map(
                        (item: string, index: number) => (
                          <li key={index} className="flex text-base md:text-lg text-gray-200">
                            <span className="mr-3 mt-1 text-highlight-pink shrink-0">
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
                                  d="m8.25 4.5 7.5 7.5-7.5 7.5"
                                />
                              </svg>
                            </span>
                            <span className="leading-relaxed">{item}</span>
                          </li>
                        )
                      )}
                    </ul>
                  </div>
                </div>
              ) : (
                <div className="flex flex-col h-full transition-opacity duration-300">
                  <div className="overflow-y-auto [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none] flex-1 pr-2 pb-10">
                    <ul className="space-y-4">
                      {abilities.map(
                        (
                          ab: { title: string; description: string },
                          index: number
                        ) => (
                          <li key={index} className="bg-background-green/50 p-4 rounded-2xl border border-foreground-green/30 hover:border-highlight-pink/20 transition-all">
                            <div className="flex items-center mb-2">
                              <span className="mr-3 text-highlight-pink shrink-0">
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
                                    d="m8.25 4.5 7.5 7.5-7.5 7.5"
                                  />
                                </svg>
                              </span>
                              <h2 className="text-lg md:text-xl font-bold text-online tracking-wide">{ab.title}</h2>
                            </div>
                            <p className="md:pl-8 text-gray-300 text-base leading-relaxed">{ab.description}</p>
                          </li>
                        )
                      )}
                    </ul>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
