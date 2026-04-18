import TechList from "../components/TechList";

export default function TechStack() {
  return (
    <section className="w-full py-20 bg-white flex flex-col items-center">
      <div className="w-full px-6 max-w-[1500px]">
        <div className="mb-16 flex flex-col items-start gap-4">
          <h2 className="text-4xl md:text-5xl font-light tracking-tight text-almost-black uppercase">
            Tech Stack
          </h2>
          <div className="w-16 h-1 bg-almost-black rounded-full"></div>
          <p className="text-light-gray mt-2 text-lg max-w-2xl">
            Herramientas y tecnologías que utilizo para dar vida a los proyectos.
          </p>
        </div>

        <div className="flex flex-col w-full mt-4 px-14">
          {/* Lenguajes */}
          <div className="flex flex-col md:flex-row gap-6 md:gap-16 py-12 border-t border-black/10 first:border-t-0 first:pt-0">
            <div className="w-full md:w-1/3 flex flex-col gap-3">
              <h3 className="text-2xl font-medium text-almost-black">
                Lenguajes
              </h3>
              <p className="text-light-gray text-base leading-relaxed">
                Los cimientos sobre los que estructuro la lógica y desarrollo soluciones ágiles.
              </p>
            </div>
            <div className="w-full md:w-2/3 flex items-center">
              <TechList techs={["Python", "JavaScript", "TypeScript", "Lua"]} />
            </div>
          </div>

          {/* Frontend */}
          <div className="flex flex-col md:flex-row gap-6 md:gap-16 py-12 border-t border-black/10 first:border-t-0 first:pt-0">
            <div className="w-full md:w-1/3 flex flex-col gap-3">
              <h3 className="text-2xl font-medium text-almost-black">
                Frontend
              </h3>
              <p className="text-light-gray text-base leading-relaxed">
                Desarrollo de interfaces de usuario modernas, interactivas y altamente optimizadas.
              </p>
            </div>
            <div className="w-full md:w-2/3 flex items-center">
              <TechList techs={["NextJS", "React", "Angular", "Tailwind"]} />
            </div>
          </div>

          {/* Backend */}
          <div className="flex flex-col md:flex-row gap-6 md:gap-16 py-12 border-t border-black/10 first:border-t-0 first:pt-0">
            <div className="w-full md:w-1/3 flex flex-col gap-3">
              <h3 className="text-2xl font-medium text-almost-black">
                Backend
              </h3>
              <p className="text-light-gray text-base leading-relaxed">
                Creación de APIs robustas, gestión de bases de datos y arquitectura del servidor.
              </p>
            </div>
            <div className="w-full md:w-2/3 flex items-center">
              <TechList techs={["NodeJS", "FastAPI", "MySQL", "MongoDB"]} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
