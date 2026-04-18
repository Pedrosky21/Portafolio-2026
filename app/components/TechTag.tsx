import { icons } from "@/app/components/icons/index";

interface TechTagProps {
  name: string;
  size?: "sm" | "md" | "lg";
}


export default function TechTag({ name, size = "md" }: TechTagProps) {
  const key = name.toLowerCase();
  const Icon = icons[key];

  const sizeClasses = {
    sm: "h-8 px-2 pr-2 space-x-2 text-sm",
    md: "h-10 py-2 px-3 space-x-2",
    lg: "h-12 px-4 gap-3",
  };

  const iconSize = {
    sm: "w-5 h-5",
    md: "w-5 h-5",
    lg: "w-6 h-6",
  };


  return (
    <>
      <div className={`flex w-auto items-center bg-background-gray rounded-4xl ${sizeClasses[size]}`}>
        {Icon && <Icon className={iconSize[size]} />}
        <p className="flex items-baseline select-none">{name}</p>
      </div>
    </>
  );
}
