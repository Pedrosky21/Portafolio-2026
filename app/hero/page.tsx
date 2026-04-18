"use client";

import Image from "next/image";
import ContactModal from "../components/ContactModal";
import GithubIcon from "../components/icons/github";
import InstagramIcon from "../components/icons/instagram";
import LinkedInIcon from "../components/icons/linkedin";
import ProjectModal from "../components/projects/ProjectModal";
import ProjectList from "../components/projects/ProyectList";
import TechList from "../components/TechList";
import Navbar from "../components/Navbar";
import { useState } from "react";

export default function HeroPage() {
  const [showModal, setShowModal] = useState(false);
  const [projectToShow, setProjectToShow] = useState(0);
  const [showContactModal, setShowContact] = useState(false);

  const projects = [
    {
      imageURL: "/ProyectoPadel2.png",
      title: "Padel App",
      description: "",
      techs: ["Angular", "NodeJS", "MySQL"],
    },
    {
      imageURL: "/ProyectoSpace.png",
      title: "Space Notes",
      techs: ["NextJS", "MongoDB", "Git"],
    },
    {
      imageURL: "/ProyectoManga.png",
      title: "Mangas App",
      techs: ["Angular", "Bootstrap", "SQLite"],
    },
  ];

  const detailedProjects = [
    {
      title: "Padel App",
      description:
        "Aplicación web desarrollada en equipo bajo metodologías ágiles para la gestión de partidos de pádel. Permite crear perfiles, buscar y unirse a partidos y reservar canchas. Los administradores de clubes pueden gestionar turnos y canchas y la organización interna del club.\nIncluye autenticación, administración de disponibilidad por parte de clubes y un panel para la gestión interna de turnos y reservas.",
      imageURL: "/ProyectoPadel2.png",
      techs: ["Angular", "Tailwind", "NodeJS", "MySQL"],
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
      title: "Space App",
      description:
        "Proyecto Full Stack para gestión de notas con autenticación de usuarios. El proyecto incluye frontend completo en Next.js estilizado con Tailwind, base de datos y almacenamiento de notas en MongoDB y autenticación a través de JWT permitiendo gestionar a los usuarios sus notas.",
      imageURL: "/ProyectoSpace.png",
      techs: ["NextJS", "Tailwind", "NodeJS", "MongoDB"],
      githubLink: "",
    },
  ];

  const handleModal = (projectIndex: number) => {
    setShowModal(!showModal);
    setProjectToShow(projectIndex);
  };

  return (
    <div className="w-full md:h-dvh pr-2 flex relative 2xl:overflow-hidden">
      <div className="w-full 2xl:w-3/5">
        <div className="2xl:w-full flex justify-center md:justify-start mt-5 ml-2">
          <Navbar></Navbar>
          <button
            onClick={() => setShowContact(true)}
            className="absolute z-10 top-0 right-10 mt-8 bg-almost-black p-4 px-10 text-white rounded-4xl cursor-pointer hidden 2xl:block"
          >
            <p>Contactame</p>
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
          className="absolute z-20 bottom-20 right-5 bg-almost-black p-4 px-10 text-white rounded-4xl no-underline"
        >
          <p>Descarga mi CV</p>
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
            <ContactModal
              onClose={() => setShowContact(false)}
            ></ContactModal>
          </div>
        </div>
      </div>
    </div>
  );
}
