"use client";

import ContactModal from "../components/ContactModal";
import MyCard from "./components/MyCard";
import Skills from "./components/Skills";

import { useState } from "react";

export default function AboutMePage() {
  const [showContactModal, setShowContact] = useState(false);

  const openModal = () => {
    setShowContact(true);
  };

  return (
    <>
      <div id="sobre-mi" className="w-full relative pt-20 pb-20 overflow-x-hidden min-h-screen flex flex-col items-center">
        <div className="flex flex-col gap-10 w-full px-6 pt-6 max-w-[1500px]">
          {/* Header & Stats Container */}
          <div className="flex flex-col lg:flex-row w-full justify-between items-stretch gap-10 mb-8">

            {/* Plain Text Header */}
            <div className="flex flex-col w-full lg:w-3/5">
              <h2 className="text-4xl md:text-5xl font-light tracking-tight text-almost-black uppercase mb-4">Sobre mí</h2>
              <div className="w-16 h-1 bg-almost-black rounded-full mb-6"></div>
              <p className="text-lg text-light-gray leading-relaxed mb-4">
                ¡Hola! Soy <strong className="text-almost-black font-medium">Pedro Arreguez</strong>, un desarrollador apasionado por crear interfaces dinámicas, atractivas y altamente funcionales.
                Me encanta transformar ideas en experiencias digitales que conectan con los usuarios.
              </p>
              <p className="text-lg text-light-gray leading-relaxed">
                Siendo desarrollador Full Stack, mi objetivo siempre es escribir código limpio y optimizado,
                asegurando que el backend apoye fuertemente el impacto visual del frontend.
              </p>
            </div>

            {/* Stats Grid */}
            <div className="w-full lg:w-2/5 flex flex-col justify-end pb-2">
              <div className="w-full grid grid-cols-2 gap-4">

                {/* Spotify Widget */}
                <div className="col-span-2 group/spotify bg-background-green hover:bg-background-green/90 border border-foreground-green/30 text-white shadow-xl p-5 rounded-3xl flex items-center justify-between transition-all duration-300">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-full bg-[#1DB954] flex items-center justify-center shadow-[0_0_15px_rgba(29,185,84,0.3)] group-hover/spotify:shadow-[0_0_20px_rgba(29,185,84,0.5)] transition-all">
                      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor" className="text-black">
                        <path d="M12 0C5.4 0 0 5.4 0 12s5.4 12 12 12 12-5.4 12-12S18.66 0 12 0zm5.521 17.34c-.24.359-.66.48-1.021.24-2.82-1.74-6.36-2.101-10.561-1.141-.418.122-.779-.179-.899-.539-.12-.421.18-.78.54-.9 4.56-1.021 8.52-.6 11.64 1.32.42.18.54.659.3 1.02zm1.44-3.3c-.301.42-.841.6-1.262.3-3.239-1.98-8.159-2.58-11.939-1.38-.479.12-1.02-.12-1.14-.6-.12-.48.12-1.021.6-1.141C9.6 9.9 15 10.561 18.72 12.84c.361.181.54.84.241 1.2zm.12-3.36C15.24 8.4 8.82 8.16 5.16 9.301c-.6.179-1.2-.181-1.38-.721-.18-.6.18-1.2.72-1.38 4.26-1.26 11.28-1.02 15.721 1.621.539.3.719 1.02.419 1.56-.299.421-1.02.599-1.56.3z" />
                      </svg>
                    </div>
                    <div className="flex flex-col">
                      <p className="text-xs text-[#1DB954] font-bold uppercase tracking-wider mb-0.5 drop-shadow-sm">Más escuchado en Spotify</p>
                      <p className="text-white font-medium text-sm md:text-base">WHERE IS MY HUSBAND! • RAYE</p>
                    </div>
                  </div>

                  <div className="flex gap-1 items-center h-6 mr-2">
                    <div className="w-1 h-3 bg-[#1DB954] rounded-full animate-[bounce_1s_infinite]"></div>
                    <div className="w-1 h-5 bg-[#1DB954] rounded-full animate-[bounce_1s_infinite_100ms]"></div>
                    <div className="w-1 h-2 bg-[#1DB954] rounded-full animate-[bounce_1s_infinite_200ms]"></div>
                  </div>
                </div>

                {/* Projects Stat */}
                <div className="bg-background-green hover:bg-background-green/90 p-5 md:p-6 rounded-3xl border border-foreground-green/30 shadow-xl flex flex-col items-center justify-center transition-all duration-300 group">
                  <p className="text-3xl md:text-4xl font-bold text-highlight-pink mb-1 md:mb-2 drop-shadow-[0_0_10px_rgba(217,0,255,0.4)] group-hover:scale-110 transition-transform">10+</p>
                  <p className="text-xs md:text-sm text-gray-300 text-center font-medium leading-tight">Proyectos Desarrollados</p>
                </div>

                {/* TS Stat */}
                <div className="bg-background-green hover:bg-background-green/90 p-5 md:p-6 rounded-3xl border border-foreground-green/30 shadow-xl flex flex-col items-center justify-center transition-all duration-300 group">
                  <p className="text-3xl md:text-4xl font-bold text-blue-400 mb-1 md:mb-2 drop-shadow-[0_0_10px_rgba(96,165,250,0.4)] group-hover:scale-110 transition-transform">1+</p>
                  <p className="text-xs md:text-sm text-gray-300 text-center font-medium leading-tight">Año con TypeScript</p>
                </div>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 xl:grid-cols-12 gap-8 lg:gap-10">
            {/* Columna Izquierda: My Card */}
            <div className="xl:col-span-5 flex flex-col h-full">
              <MyCard openModal={openModal}></MyCard>
            </div>

            {/* Columna Derecha: Skills */}
            <div className="xl:col-span-7 flex flex-col h-full">
              {/* Skills */}
              <div className="flex-1 w-full h-full min-h-[500px]">
                <Skills></Skills>
              </div>
            </div>
          </div>
        </div>
        <div
          className={`fixed inset-0 z-50 flex flex-col-reverse w-full h-full backdrop-blur-sm ${showContactModal ? "" : "hidden"}`}
        >
          <div className="w-full h-full justify-center items-center flex">
            <div className="md:w-1/3 p-4 md:p-0">
              <ContactModal
                onClose={() => setShowContact(false)}
              ></ContactModal>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
