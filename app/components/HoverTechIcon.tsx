import { icons } from "@/app/components/icons/index";
import React from "react";

interface HoverTechIconProps {
  name: string;
}

export default function HoverTechIcon({ name }: HoverTechIconProps) {
  const iconKey = name.toLowerCase();
  // @ts-ignore - dynamic key access
  const IconComponent = icons[iconKey];

  if (!IconComponent) return null;

  return (
    <div className="group/icon relative flex items-center justify-center cursor-default p-1">
      <div className="transition-transform duration-300 group-hover/icon:scale-110">
        <IconComponent className="fill-white h-6 w-6" />
      </div>
      
      {/* Tooltip */}
      <div className="absolute -top-10 scale-95 opacity-0 pointer-events-none transition-all duration-300 group-hover/icon:scale-100 group-hover/icon:opacity-100 group-hover/icon:-translate-y-1 z-50">
        <span className="bg-almost-black text-white text-[11px] uppercase tracking-wider px-2.5 py-1.5 rounded-lg whitespace-nowrap shadow-lg border border-white/10 font-medium">
          {name}
        </span>
      </div>
    </div>
  );
}
