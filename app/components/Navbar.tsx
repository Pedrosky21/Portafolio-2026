"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState, useEffect, useRef } from "react";

const links = [
  { href: "/", label: "Home" },
  { href: "/#proyectos", label: "Proyectos" },
  { href: "/#sobre-mi", label: "Sobre mí" },
] as const;

const bgClasses = {
  "Sobre mí": "bg-background-green",
  Proyectos: "bg-background-blue",
  Home: "bg-almost-black",
};

const hoverClasses = {
  "Sobre mí": "hover:bg-background-green hover:text-gray-900",
  Proyectos: "hover:bg-background-blue hover:text-gray-900",
  Home: "hover:bg-almost-black hover:text-gray-900",
};

const icons = {
  Home: (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth="1.5"
      stroke="currentColor"
      className="size-6"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="m2.25 12 8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25"
      />
    </svg>
  ),
  Proyectos: (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth="1.5"
      stroke="currentColor"
      className="size-6"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M20.25 14.15v4.25c0 1.094-.787 2.036-1.872 2.18-2.087.277-4.216.42-6.378.42s-4.291-.143-6.378-.42c-1.085-.144-1.872-1.086-1.872-2.18v-4.25m16.5 0a2.18 2.18 0 0 0 .75-1.661V8.706c0-1.081-.768-2.015-1.837-2.175a48.114 48.114 0 0 0-3.413-.387m4.5 8.006c-.194.165-.42.295-.673.38A23.978 23.978 0 0 1 12 15.75c-2.648 0-5.195-.429-7.577-1.22a2.016 2.016 0 0 1-.673-.38m0 0A2.18 2.18 0 0 1 3 12.489V8.706c0-1.081.768-2.015 1.837-2.175a48.111 48.111 0 0 1 3.413-.387m7.5 0V5.25A2.25 2.25 0 0 0 13.5 3h-3a2.25 2.25 0 0 0-2.25 2.25v.894m7.5 0a48.667 48.667 0 0 0-7.5 0M12 12.75h.008v.008H12v-.008Z"
      />
    </svg>
  ),
  "Sobre mí": (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth="1.5"
      stroke="currentColor"
      className="size-6"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z"
      />
    </svg>
  ),
};

export default function Navbar() {
  const pathname = usePathname();
  const [isFixed, setIsFixed] = useState(false);
  const [activeHash, setActiveHash] = useState("/");
  const [indicatorStyle, setIndicatorStyle] = useState({ left: 0, top: 0, width: 0, height: 0, opacity: 0, bgClass: "" });
  const navRef = useRef<HTMLElement>(null);
  const itemRefs = useRef<(HTMLAnchorElement | null)[]>([]);

  // Efecto de scroll y Scroll Spy para actualizar automáticamente el activeHash
  useEffect(() => {
    const handleScroll = () => {
      const scrollPos = window.scrollY;
      setIsFixed(scrollPos > 50);

      // IDs de las secciones. El orden importa: evalúamos de abajo hacia arriba.
      // Se activa la sección cuando scrolleamos pasándola o estando muy cerca de ella.
      const checkIds = ["sobre-mi", "proyectos"];
      let active = "/";

      for (const id of checkIds) {
        const el = document.getElementById(id);
        if (el) {
          // Si hemos pasado el top de la sección (con un margen visual)
          if (scrollPos >= el.offsetTop - 200) {
            active = `/#${id}`;
            break;
          }
        }
      }

      setActiveHash(active);
    };

    window.addEventListener("scroll", handleScroll);
    // Ejecutar una vez al inicio
    handleScroll();
    
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  // Set initial hash
  useEffect(() => {
    if (window.location.hash) {
      setActiveHash(`/${window.location.hash}`);
    }
  }, []);

  // Animación del indicador
  useEffect(() => {
    const activeIndex = links.findIndex(l => l.href === activeHash);
    const activeEl = itemRefs.current[activeIndex];
    const navEl = navRef.current;

    // Fallback por si activeIndex no existe (-1)
    if (activeIndex !== -1 && activeEl && navEl) {
      const navRect = navEl.getBoundingClientRect();
      const elRect = activeEl.getBoundingClientRect();

      setIndicatorStyle({
        left: elRect.left - navRect.left,
        top: elRect.top - navRect.top,
        width: elRect.width,
        height: elRect.height,
        opacity: 1,
        bgClass: bgClasses[links[activeIndex].label as keyof typeof bgClasses]
      });
    }
  }, [activeHash, isFixed]);

  const handleSmoothScroll = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setActiveHash(href); // Fija inmediatamente la pill visual

    if (href === "/") {
      if (pathname === "/") {
        window.scrollTo({ top: 0, behavior: "smooth" });
      }
      return;
    }

    if (href.startsWith("/#")) {
      const targetId = href.replace("/#", "");
      const elem = document.getElementById(targetId);

      if (elem) {
        elem.scrollIntoView({
          behavior: "smooth",
          block: "start",
        });
        window.history.pushState(null, "", href);
      }
    }
  };

  return (
    <div
      className={`
        w-max rounded-full transition-all duration-300
        ${isFixed
          ? "fixed top-6 left-1/2 -translate-x-1/2 z-50 bg-white/70 backdrop-blur-lg shadow-md border border-gray-200"
          : "relative z-10 bg-white shadow-md border border-gray-200/50"}
      `}
    >
      <nav ref={navRef} className="flex justify-between items-center relative z-0 p-1.5 gap-2">
        {/* Magic Sliding Background Pill con Soft Shadow */}
        <div
          className={`absolute rounded-full transition-all duration-300 ease-out z-0 layout-none shadow-sm ${indicatorStyle.bgClass}`}
          style={{
            left: indicatorStyle.left,
            top: indicatorStyle.top,
            width: indicatorStyle.width,
            height: indicatorStyle.height,
            opacity: indicatorStyle.opacity
          }}
        />

        {links.map(({ href, label }, index) => {
          const active = activeHash === href;

          return (
            <Link
              key={href}
              href={href}
              ref={(el) => { itemRefs.current[index] = el as HTMLAnchorElement | null; }}
              onClick={(e) => handleSmoothScroll(e, href)}
              className={`
                relative z-10 px-4 py-2 sm:px-6 sm:py-2.5 rounded-full
                transition-all duration-300 text-nowrap font-medium text-sm sm:text-base
                ${!active ? "text-gray-600 hover:text-gray-900" : "text-white"}
              `}
            >
              {/* Texto en desktop */}
              <span className="hidden sm:inline">{label}</span>

              {/* Icono en mobile */}
              <span className="sm:hidden">{icons[label as keyof typeof icons]}</span>
            </Link>
          );
        })}
      </nav>
    </div>
  );
}
