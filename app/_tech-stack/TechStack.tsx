import TechList from "../components/TechList";

export default function TechStack() {
  return (
    <section className="w-full py-20 bg-background flex flex-col items-center">
      <div className="w-full max-w-[1200px] px-2 md:px-0">
        <div className="mb-16 flex flex-col items-center text-center gap-4">
          <h2 className="text-4xl md:text-5xl font-light tracking-tight text-almost-black uppercase">
            Tech Stack
          </h2>
          <div className="w-16 h-1 bg-almost-black rounded-full"></div>
          <p className="text-light-gray mt-2 text-lg max-w-2xl">
            Herramientas y tecnologías que utilizo para dar vida a los proyectos.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-2 mt-4 px-4 md:px-0">
          {/* Lenguajes */}
          <div className="flex flex-col h-full gap-6 p-8 rounded-3xl bg-white shadow-soft border border-black/5 hover:border-black/10 transition-all hover:-translate-y-1">
            <div className="flex flex-col gap-3">
              <div className="w-12 h-12 rounded-xl bg-background-gray/30 flex items-center justify-center mb-2">
                <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 text-almost-black" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" /></svg>
              </div>
              <h3 className="text-2xl font-medium text-almost-black">
                Lenguajes
              </h3>
              <p className="text-light-gray text-base leading-relaxed h-[84px]">
                Los cimientos sobre los que estructuro la lógica y desarrollo soluciones que aporten valor real.
              </p>
            </div>
            <div className="flex-grow pt-6 border-t border-black/5 flex items-start">
              <TechList techs={["TypeScript", "JavaScript", "Python", "Lua"]} />
            </div>
          </div>

          {/* Frontend */}
          <div className="flex flex-col h-full gap-6 p-8 rounded-3xl bg-white shadow-soft border border-black/5 hover:border-black/10 transition-all hover:-translate-y-1">
            <div className="flex flex-col gap-3">
              <div className="w-12 h-12 rounded-xl bg-background-gray/30 flex items-center justify-center mb-2">
                <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 text-almost-black" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>
              </div>
              <h3 className="text-2xl font-medium text-almost-black">
                Frontend
              </h3>
              <p className="text-light-gray text-base leading-relaxed h-[84px]">
                Desarrollo de interfaces de usuario modernas, responsivas y optimizadas.
              </p>
            </div>
            <div className="flex-grow pt-6 border-t border-black/5 flex items-start">
              <TechList techs={["Angular", "React", "NextJS", "Tailwind", "Bootstrap"]} />
            </div>
          </div>

          {/* Backend */}
          <div className="flex flex-col h-full gap-6 p-8 rounded-3xl bg-white shadow-soft border border-black/5 hover:border-black/10 transition-all hover:-translate-y-1">
            <div className="flex flex-col gap-3">
              <div className="w-12 h-12 rounded-xl bg-background-gray/30 flex items-center justify-center mb-2">
                <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 text-almost-black" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M5 12h14M5 12a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v4a2 2 0 01-2 2M5 12a2 2 0 00-2 2v4a2 2 0 002 2h14a2 2 0 002-2v-4a2 2 0 00-2-2m-2-4h.01M17 16h.01" /></svg>
              </div>
              <h3 className="text-2xl font-medium text-almost-black">
                Backend y BD
              </h3>
              <p className="text-light-gray text-base leading-relaxed h-[84px]">
                Creación de APIs, gestión de bases de datos y arquitectura del servidor.
              </p>
            </div>
            <div className="flex-grow pt-6 border-t border-black/5 flex items-start">
              <TechList techs={["NodeJS", "FastAPI", "MySQL", "PostgreSQL", "MongoDB"]} />
            </div>
          </div>

          {/* Herramientas */}
          <div className="flex flex-col h-full gap-6 p-8 rounded-3xl bg-white shadow-soft border border-black/5 hover:border-black/10 transition-all hover:-translate-y-1">
            <div className="flex flex-col gap-3">
              <div className="w-12 h-12 rounded-xl bg-background-gray/30 flex items-center justify-center mb-2">
                <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 text-almost-black" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" /></svg>
              </div>
              <h3 className="text-2xl font-medium text-almost-black">
                Herramientas
              </h3>
              <p className="text-light-gray text-base leading-relaxed h-[84px]">
                Soluciones esenciales para el control de versiones, diseño y pruebas de calidad.
              </p>
            </div>
            <div className="flex-grow pt-6 border-t border-black/5 flex items-start">
              <TechList techs={["Git", "Github","Figma", "Postman", "Trello"]} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
