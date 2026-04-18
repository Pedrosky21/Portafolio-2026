import Navbar from "../components/Navbar";
import Project from "./components/Project";

export default function ProjectsPage() {
  const projects = [
    {
      title: "Padel App",
      description1:
        "Aplicación web desarrollada en equipo bajo metodologías ágiles para la gestión de partidos de pádel.",
      description2:
        "Permite crear perfiles, buscar y unirse a partidos y reservar canchas. Los administradores de clubes pueden gestionar turnos y canchas y la organización interna del club.\nIncluye autenticación, administración de disponibilidad por parte de clubes y un panel para la gestión interna de turnos y reservas.",
      imgSrc: "/ProyectoPadel2.png",
      techs: ["Angular", "Tailwind", "NodeJS", "MySQL"],
      githubLink: "",
    },
    {
      title: "Study Track",
      description1:
        "Aplicación Full Stack diseñada para organizar y realizar seguimiento de los temas de estudio de mis materias universitarias.",
      description2:
        "Permite registrar materias, marcar avances, visualizar pendientes y gestionar completamente el progreso académico desde una interfaz simple pero ordenada.",
      imgSrc: "/ProyectoStudyTrack.jpg",
      techs: ["NextJS", "Tailwind", "NodeJS", "MySQL"],
      githubLink: "",
    },
    {
      title: "Space App",
      description1:
        "Proyecto Full Stack para gestión de notas con autenticación de usuarios.",
      description2:
        "El proyecto incluye frontend completo en Next.js estilizado con Tailwind, base de datos y almacenamiento de notas en MongoDB y autenticación a través de JWT permitiendo gestionar a los usuarios sus notas.",
      imgSrc: "/ProyectoSpace.png",
      techs: ["NextJS", "Tailwind", "NodeJS", "MongoDB"],
      githubLink: "",
    },
    {
      title: "Mangas App",
      description1:
        "Aplicación Web Full Stack que permite crear, editar y eliminar mangas mediante un CRUD completo conectado a una base de datos SQLite.",
      description2:
        "Incluye un panel de administración, validación de formularios y manejo de estados para garantizar una experiencia fluida y ordenada.",
      imgSrc: "/ProyectoManga.png",
      techs: ["Angular", "Bootstrap", "NodeJS", "SQLite"],
      githubLink: "",
    },
    {
      title: "LyzeWhats",
      description1:
        "Aplicación Full Stack que analiza el chat de WhatsApp con tu pareja y genera un dashboard romántico personalizado a partir de métricas extraídas de la conversación.",
      description2:
        "Utilizando pandas, procesa mensajes, calcula estadísticas relevantes y presenta visualizaciones interactivas que muestran la dinámica y evolución del vínculo.",
      imgSrc: "/ProyectoLyze.jpg",
      techs: ["NextJS", "Tailwind", "FastAPI"],
      githubLink: "",
    },
  ];

  return (
    <>
      <div id="proyectos" className="w-full flex flex-col items-center pt-20">
        <div className="w-full px-6 max-w-[1500px]">
          <div className="w-full md:w-2/5">
            <h2 className="text-3xl md:text-5xl  text-background-blue">
              Hitos en el proceso de aprendizaje
            </h2>
          </div>
          <p className="text-lg text-light-gray mt-5">
              Proyectos destacables que reflejan mi crecimiento y las
              habilidades que desarrollé en el proceso.
            </p>
          <div className="mt-10 flex flex-col space-y-10 md:space-y-0 md:grid md:grid-cols-4 md:gap-20">
            {projects.map((proj, index) => (
              <div className="" key={index}>
                <Project
                  title={proj.title}
                  description1={proj.description1}
                  description2={proj.description2}
                  imgSrc={proj.imgSrc}
                  techs={proj.techs}
                  githubLink={proj.githubLink}
                ></Project>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
