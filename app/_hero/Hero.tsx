"use client";

import Image from "next/image";
import ContactModal from "../components/ContactModal";
import GithubIcon from "../components/icons/github";
import InstagramIcon from "../components/icons/instagram";
import LinkedInIcon from "../components/icons/linkedin";
import ProjectModal from "../components/projects/ProjectModal";
import ProjectList from "../components/projects/ProyectList";
import Navbar from "../components/Navbar";
import { useRef, useState, useEffect } from "react";
import { animate, stagger } from "animejs";

export default function HeroPage() {
  const [showModal, setShowModal] = useState(false);
  const [projectToShow, setProjectToShow] = useState(0);
  const [showContactModal, setShowContact] = useState(false);

  useEffect(() => {
    animate(".hero-role-word", {
      translateY: [20, 0],
      opacity: [0, 1],
      filter: ["blur(10px)", "blur(0px)"],
      duration: 500,
      ease: "easeOutExpo",
      delay: stagger(40, { start: 20 }),
    });
  }, []);

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
      techs: ["React", "FastAPI"],
    },
  ];

  const detailedProjects = [
    {
      title: "Crumbs & Beans",
      description:
        "Aplicación web desarrollada por mí que simula una tienda de café online. Permite crear cuentas, agregar productos al carrito y realizar pedidos con historial de compras. Desarrollada con Angular 19 utilizando signals para mejorar el rendimiento y la gestión del estado.",
      imageURL: "/ProyectoCrumbsBeans.jpg",
      techs: ["Angular", "Tailwind", "Supabase"],
      githubLink: "",
    },
    {
      title: "Padel App",
      description:
        "Aplicación web para organizar partidos de pádel. Permite crear perfiles, buscar y unirse a partidos, reservar canchas y gestionar turnos. Los clubes cuentan con un panel para administrar disponibilidad, reservas y canchas.",
      imageURL: "/ProyectoPadel2.png",
      techs: ["Angular", "Tailwind", "NodeJS", "MySQL"],
      githubLink: "",
    },
    {
      title: "Padel IA - Hackaton Santex 2025",
      description:
        "Aplicación con IA desarrollada en equipo durante una hackathon de 24 horas. Utiliza recomendaciones inteligentes para conectar jugadores según sus preferencias y nivel. El proyecto quedó en el top 5 entre 35 equipos.",
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
      width: "54px",
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
            className="group absolute z-10 top-0 right-4 mt-6 bg-almost-black p-5 px-10 text-white rounded-full cursor-pointer hidden 2xl:flex items-center gap-2 hover:scale-105 hover:-translate-y-1 hover:shadow-xl transition duration-300 ease-out"
          >
            <p className="font-medium tracking-wide">Contactame</p>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-6">
              <path d="M3.478 2.404a.75.75 0 0 0-.926.941l2.432 7.905H13.5a.75.75 0 0 1 0 1.5H4.984l-2.432 7.905a.75.75 0 0 0 .926.94 60.519 60.519 0 0 0 18.445-8.986.75.75 0 0 0 0-1.218A60.517 60.517 0 0 0 3.478 2.404Z" />
            </svg>
          </button>
        </div>
        <div className="h-60 md:flex mt-5 ml-4">
          <div className="absolute z-10 h-60 w-full z-10">
            <ProjectList
              projects={projects}
              sendProjectIndex={handleModal}
            ></ProjectList>
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
              <h1 className="text-center text-5xl md:text-6xl font-normal flex flex-wrap gap-x-3 justify-center md:justify-start">
                {"Pedro Arreguez".split(" ").map((word, i) => (
                  <span key={`name-${i}`} className="hero-role-word opacity-0 inline-block">
                    {word}
                  </span>
                ))}
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
            <h2 className="text-4xl md:text-5xl text-light-gray flex flex-wrap gap-x-3 overflow-hidden py-1">
              {"Desarrollador de Software".split(" ").map((word, i) => (
                <span key={i} className="hero-role-word opacity-0 inline-block">
                  {word}
                </span>
              ))}
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
          className="flex space-x-8 w-32 h-14 items-center absolute z-20 bottom-22 right-5 bg-almost-black py-2 px-3 text-white rounded-4xl no-underline hover:scale-105 hover:-translate-y-1 hover:shadow-xl transition duration-300 ease-out"
          onClick={handleClick}
          ref={outlineRef}
        >
          <div
            ref={circleRef}
            className="rounded-full bg-white text-black p-2"
          >
            {icon}
          </div>
          <p id="text" ref={textRef}>
            CV
          </p>
        </a>
      </div>
      <div
        className={`fixed inset-0 backdrop-blur-2xl flex justify-center items-center w-full h-full z-50 ${showModal ? "" : "hidden"
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
