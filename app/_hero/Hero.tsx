"use client";

import Image from "next/image";
import ContactModal from "../components/ContactModal";
import GithubIcon from "../components/icons/github";
import InstagramIcon from "../components/icons/instagram";
import LinkedInIcon from "../components/icons/linkedin";
import ProjectModal from "../components/projects/ProjectModal";
import ProjectList from "../components/projects/ProyectList";
import Navbar from "../components/Navbar";
import { useRef, useState } from "react";
import { animate } from "animejs";

export default function HeroPage() {
  const [showModal, setShowModal] = useState(false);
  const [projectToShow, setProjectToShow] = useState(0);
  const [showContactModal, setShowContact] = useState(false);

  const projects = [
    {
      imageURL: "/ProyectoCrumbsBeans.jpg",
      title: "Crumbs & Beans",
      description: "",
      techs: ["Angular", "Supabase"],
    },
    {
      imageURL: "/ProyectoPadel2.png",
      title: "Padel App",
      techs: ["Angular", "NodeJS"],
    },
    {
      imageURL: "/ProyectoHackaton2.jpeg",
      title: "Hackaton Santex 2025",
      techs: ["React", "Tailwind", "FastAPI"],
    },
  ];

  const detailedProjects = [
    {
      title: "Crumbs & Beans",
      description:
        "Aplicación web desarrollada por mí que simula una tienda de café. Permite crear perfiles de usuario, agregar productos al carrito y realizar pedidos, con su historial. Utilicé Angular v19 con las últimas características como signals para la gestión del estado y optimización del rendimiento.",
      imageURL: "/ProyectoCrumbsBeans.jpg",
      techs: ["Angular", "Tailwind", "Supabase"],
      githubLink: "",
    },
    {
      title: "Padel App",
      description:
        "Aplicación web desarrollada en equipo bajo metodologías ágiles para la gestión de partidos de pádel. Permite crear perfiles, buscar y unirse a partidos y reservar canchas. Los administradores de clubes pueden gestionar turnos y canchas y la organización interna del club.\nIncluye autenticación, administración de disponibilidad por parte de clubes y un panel para la gestión interna de turnos y reservas.",
      imageURL: "/ProyectoPadel2.png",
      techs: ["Angular", "Tailwind", "NodeJS", "MySQL"],
      githubLink: "",
    },
    {
      title: "Padel IA - Hackaton Santex 2025",
      description:
        "Solución con IA desarrollada en equipo durante 24 horas para la hackaton de Santex. La aplicación utiliza inteligencia artificial para facilitar el matchmaking a través de un sistema de recomendaciones basado en las preferencias y habilidades de los usuarios. Logramos quedar en el top 5 de 35 equipos participantes.",
      imageURL: "/ProyectoHackaton2.jpeg",
      techs: ["React", "Tailwind", "FastAPI"],
      githubLink: "",
    },
  ];

  const handleModal = (projectIndex: number) => {
    setShowModal(!showModal);
    setProjectToShow(projectIndex);
  };

  // Para animacion del boton de descargar
  const outlineRef = useRef<HTMLAnchorElement>(null);
  const circleRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLParagraphElement>(null);

  const [isAnimating, setIsAnimating] = useState(false);

  const [icon, setIcon] = useState(
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth="1.5"
      stroke="currentColor"
      className="size-4"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M19.5 13.5 12 21m0 0-7.5-7.5M12 21V3"
      />
    </svg>,
  );

  const handleClick = () => {
    // primeras lineas para no interrumpir animacion o reiniciar con clicks
    if (isAnimating) return; // si ya hay animación, salir
    setIsAnimating(true); // animando

    let reversed = false;
    const circle = circleRef.current;
    if (!circle) return;
    const circleAnimation = animate(circle, {
      autoplay: false,
      rotate: "1turn",
      duration: 600,
      ease: "easeOut",
      loop: false,
      onComplete: () => {
        if (!reversed) {
          // Para que solo se ejecute al completar una vez y no en reversed
          reversed = true;
          circle.style.backgroundColor = "#178236";
          setIcon(
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="size-4"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="m4.5 12.75 6 6 9-13.5"
              />
            </svg>,
          );
        }
      },
    });

    const outline = outlineRef.current;
    if (!outline) return;
    const outlineAnimation = animate(outline, {
      autoplay: false,
      width: "48px",
      duration: 600,
      onComplete: (self) => {
        setTimeout(() => {
          setIcon(
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="size-4"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M19.5 13.5 12 21m0 0-7.5-7.5M12 21V3"
              />
            </svg>,
          );
          self.reverse();
          circleAnimation.reverse();
          circle.style.backgroundColor = "";
        }, 1000);
      },
    });

    let reversedText = false;
    const text = textRef.current;
    if (!text) return;
    animate(text, {
      translateY: ["0%", "50%"],
      duration: 300,
      ease: "linear",
      loop: false,
      onComplete: (self) => {
        if (!reversedText) {
          reversedText = true;
          const el = document.getElementById("text");
          if (el) el.style.display = "none";
          outlineAnimation.play();
          circleAnimation.play();
          setTimeout(() => {
            self.reverse();
            if (el) el.style.display = "block";
            setTimeout(() => setIsAnimating(false), 100);
          }, 2300);
        }
      },
    });
  };

  return (
    <div className="w-full md:h-dvh pr-2 flex relative 2xl:overflow-hidden">
      <div className="w-full 2xl:w-3/5">
        <div className="2xl:w-full flex justify-center md:justify-start mt-5 ml-2">
          <Navbar></Navbar>
          <button
            onClick={() => setShowContact(true)}
            className="group absolute z-10 top-0 right-10 mt-8 bg-almost-black p-4 px-8 text-white rounded-full cursor-pointer hidden 2xl:flex items-center gap-2 transition-all duration-300 hover:bg-foreground-green shadow-sm hover:shadow-[0_8px_30px_rgb(0,0,0,0.15)]"
          >
            <p className="font-medium tracking-wide">Contactame</p>
          </button>
        </div>
        <div className="hidden md:flex mt-5 ml-4">
          <div className="h-60 w-full">
            <div className="2xl:w-5/8 rounded-4xl flex bg-white">
              <div className="z-10">
                <ProjectList
                  projects={projects}
                  sendProjectIndex={handleModal}
                ></ProjectList>
              </div>
            </div>
          </div>
        </div>
        <div className="flex">
          <div className="w-full flex flex-col space-y-4 pl-2 sm:pl-5 mt-5">
            <div className="w-full sm:hidden relative h-96">
              <Image
                src="/yo3.jpeg"
                alt="Foto de Perfil"
                fill
                className="rounded-4xl object-cover"
              />
            </div>
            <div className="flex md:items-baseline justify-between mr-0 lg:mr-10">
              <h1 className="text-center text-5xl md:text-6xl font-normal">
                Pedro Arreguez
              </h1>
              <div className="hidden md:flex h-10 w-auto space-x-10">
                <div className="board">
                  <a
                    href="https://github.com/Pedrosky21"
                    className="key flex p-4 transition-all duration-100 hover:text-slate-700"
                    id="githubIcon"
                    target="_blank"
                  >
                    <GithubIcon></GithubIcon>
                  </a>
                  <a
                    href="https://www.linkedin.com/in/pedro-arreguez-6785261b8/"
                    className="key flex p-4 transition-all duration-100 hover:text-blue-800"
                    id="linkedin"
                    target="_blank"
                  >
                    <LinkedInIcon></LinkedInIcon>
                  </a>
                  <a
                    href="https://www.instagram.com/pedro.sky21/"
                    className="key flex p-4 transition-all duration-100 hover:text-pink-600"
                    id="instagram"
                    target="_blank"
                  >
                    <InstagramIcon></InstagramIcon>
                  </a>
                </div>
              </div>
            </div>
            <h2 className="text-4xl md:text-5xl text-light-gray">
              Desarrollador de Software Jr
            </h2>
            <div className="flex md:hidden w-full justify-end mt-4">
              <div className="flex h-10 w-auto space-x-10">
                <div className="board">
                  <a
                    href="https://github.com/Pedrosky21"
                    className="key flex p-4 transition-all duration-100 hover:text-light-gray"
                    id="githubIcon"
                    target="_blank"
                  >
                    <GithubIcon></GithubIcon>
                  </a>
                  <a
                    href="https://www.linkedin.com/in/pedro-arreguez-6785261b8/"
                    className="key flex p-4 transition-all duration-100 hover:text-blue-800"
                    id="linkedin"
                    target="_blank"
                  >
                    <LinkedInIcon></LinkedInIcon>
                  </a>
                  <a
                    href="https://www.instagram.com/pedro.sky21/"
                    className="key flex p-4 transition-all duration-100 hover:text-pink-600"
                    id="instagram"
                    target="_blank"
                  >
                    <InstagramIcon></InstagramIcon>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="w-2/5 h-full mt-5 relative hidden 2xl:block">
        <img src="/abstract.png" alt="yo" className=""></img>
        <a
          download
          href="/CV Pedro Arreguez.pdf"
          className="flex space-x-4 w-48 items-center absolute z-20 bottom-20 right-5 bg-almost-black p-2 text-white rounded-4xl no-underline hover:bg-foreground-green hover:shadow-[0_8px_30px_rgb(0,0,0,0.15)]"
          onClick={handleClick}
          ref={outlineRef}
        >
          <div
            ref={circleRef}
            className="p-2 rounded-full text-white"
          >
            {icon}
          </div>
          <p id="text" ref={textRef}>
            Descargar CV
          </p>
        </a>
      </div>
      <div
        className={`fixed inset-0 backdrop-blur-2xl flex justify-center items-center w-full h-full z-50 ${
          showModal ? "" : "hidden"
        }`}
      >
        <div className="w-1/3">
          <ProjectModal
            show={showModal}
            project={detailedProjects[projectToShow]}
            closeModal={handleModal}
          ></ProjectModal>
        </div>
      </div>
      <div
        className={`absolute z-20 flex flex-col-reverse w-full h-full backdrop-blur-sm ${showContactModal ? "" : "hidden"}`}
      >
        <div className="w-full h-full justify-center items-center flex">
          <div className="w-1/3">
            <ContactModal onClose={() => setShowContact(false)}></ContactModal>
          </div>
        </div>
      </div>
    </div>
  );
}
