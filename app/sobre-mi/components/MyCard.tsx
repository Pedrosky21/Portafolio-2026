import Image from "next/image";

type CardProps = {
  openModal: () => void;
};

export default function MyCard({ openModal }: CardProps) {
  return (
    <>
      <div className="w-full flex flex-col rounded-[2.5rem] bg-background-green text-white p-6 md:p-10 border border-foreground-green/30 shadow-2xl relative overflow-hidden group">

        <div className="flex flex-col sm:flex-row items-center sm:items-center gap-6 sm:gap-8 relative z-10 w-full">
          <div className="relative group/image shrink-0 flex justify-center w-full sm:w-auto">
            <Image
              src="/yo3.jpeg"
              alt="Foto de Perfil"
              width={200}
              height={200}
              className="rounded-3xl object-cover border-4 border-foreground-green shadow-xl transition-all duration-500 group-hover/image:scale-[1.02] group-hover/image:-rotate-1 w-48 h-48 sm:w-[180px] sm:h-[180px] md:w-[200px] md:h-[200px]"
            />
          </div>
          
          <div className="flex flex-col justify-center h-full w-full text-center sm:text-left pt-2 pb-2">
            <div className="space-y-4">
              <div>
                <h3 className="text-3xl font-bold tracking-tight mb-1">Pedro Arreguez</h3>
                <p className="text-lg text-background-gray font-light">
                  Desarrollador{" "}
                  <span className="text-highlight-pink font-semibold drop-shadow-sm">Full Stack</span>
                </p>
              </div>

              <div className="inline-flex items-center space-x-2 py-1.5 px-4 bg-foreground-green/80 rounded-full shadow-md border border-online/30 mx-auto sm:mx-0 w-max">
                <div className="rounded-full bg-online h-2.5 w-2.5 animate-pulse shadow-[0_0_8px_rgba(55,255,0,0.8)]"></div>
                <p className="text-sm font-medium tracking-wide text-gray-100">Available to work</p>
              </div>
            </div>
          </div>
        </div>

        <div className="relative z-10 bg-foreground-green/60 border border-foreground-green/80 flex flex-wrap items-center mt-8 p-5 rounded-3xl gap-3 md:gap-4 shadow-inner">
          {/* Info pill 1 */}
          <div className="flex items-center space-x-2.5 rounded-2xl bg-background-green/80 hover:bg-background-green p-3 px-5 border border-transparent hover:border-highlight-pink/30 hover:shadow-md transition-all duration-300 group/pill cursor-default">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="size-5 text-highlight-pink transition-transform duration-300 group-hover/pill:scale-110"
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M4.26 10.147a60.438 60.438 0 0 0-.491 6.347A48.62 48.62 0 0 1 12 20.904a48.62 48.62 0 0 1 8.232-4.41 60.46 60.46 0 0 0-.491-6.347m-15.482 0a50.636 50.636 0 0 0-2.658-.813A59.906 59.906 0 0 1 12 3.493a59.903 59.903 0 0 1 10.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.717 50.717 0 0 1 12 13.489a50.702 50.702 0 0 1 7.74-3.342M6.75 15a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5Zm0 0v-3.675A55.378 55.378 0 0 1 12 8.443m-7.007 11.55A5.981 5.981 0 0 0 6.75 15.75v-1.5" />
            </svg>
            <p className="text-sm md:text-base font-medium">Ing. en Sistemas - UTN</p>
          </div>
          
          {/* Info pill 2 */}
          <div className="flex items-center space-x-2.5 rounded-2xl bg-background-green/80 hover:bg-background-green p-3 px-5 border border-transparent hover:border-highlight-pink/30 hover:shadow-md transition-all duration-300 group/pill cursor-default">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="size-5 text-highlight-pink transition-transform duration-300 group-hover/pill:scale-110"
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="m10.5 21 5.25-11.25L21 21m-9-3h7.5M3 5.621a48.474 48.474 0 0 1 6-.371m0 0c1.12 0 2.233.038 3.334.114M9 5.25V3m3.334 2.364C11.176 10.658 7.69 15.08 3 17.502m9.334-12.138c.896.061 1.785.147 2.666.257m-4.589 8.495a18.023 18.023 0 0 1-3.827-5.802" />
            </svg>
            <p className="flex text-sm md:text-base font-medium">Español e Inglés</p>
          </div>
          
          {/* Info pill 3 */}
          <div className="flex items-center space-x-2.5 rounded-2xl bg-background-green/80 hover:bg-background-green p-3 px-5 border border-transparent hover:border-highlight-pink/30 hover:shadow-md transition-all duration-300 group/pill cursor-default">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="size-5 text-highlight-pink transition-transform duration-300 group-hover/pill:scale-110"
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
              <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z" />
            </svg>
            <p className="text-sm md:text-base font-medium">Córdoba, Argentina</p>
          </div>
          
          {/* Info pill 4 */}
          <div className="flex items-center space-x-2.5 rounded-2xl bg-background-green/80 hover:bg-background-green p-3 px-5 border border-transparent hover:border-highlight-pink/30 hover:shadow-md transition-all duration-300 group/pill cursor-default">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="size-5 text-highlight-pink transition-transform duration-300 group-hover/pill:scale-110"
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M12 8.25v-1.5m0 1.5c-1.355 0-2.697.056-4.024.166C6.845 8.51 6 9.473 6 10.608v2.513m6-4.871c1.355 0 2.697.056 4.024.166C17.155 8.51 18 9.473 18 10.608v2.513M15 8.25v-1.5m-6 1.5v-1.5m12 9.75-1.5.75a3.354 3.354 0 0 1-3 0 3.354 3.354 0 0 0-3 0 3.354 3.354 0 0 1-3 0 3.354 3.354 0 0 0-3 0 3.354 3.354 0 0 1-3 0L3 16.5m15-3.379a48.474 48.474 0 0 0-6-.371c-2.032 0-4.034.126-6 .371m12 0c.39.049.777.102 1.163.16 1.07.16 1.837 1.094 1.837 2.175v5.169c0 .621-.504 1.125-1.125 1.125H4.125A1.125 1.125 0 0 1 3 20.625v-5.17c0-1.08.768-2.014 1.837-2.174A47.78 47.78 0 0 1 6 13.12M12.265 3.11a.375.375 0 1 1-.53 0L12 2.845l.265.265Zm-3 0a.375.375 0 1 1-.53 0L9 2.845l.265.265Zm6 0a.375.375 0 1 1-.53 0L15 2.845l.265.265Z" />
            </svg>
            <p className="text-sm md:text-base font-medium">24 años</p>
          </div>
        </div>

        <div className="relative z-10 w-full flex flex-col sm:flex-row gap-4 justify-center mt-10 items-center">
          <button
            onClick={() => openModal()}
            className="w-full sm:w-auto flex items-center justify-center space-x-2 bg-foreground-green hover:bg-foreground-green/80 border border-transparent shadow-lg hover:shadow-xl p-3.5 px-8 rounded-full cursor-pointer transition-all duration-300 md:hover:-translate-y-1 hover:border-highlight-pink/30 group/btn"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="size-5 transition-transform duration-300 group-hover/btn:scale-110"
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 0 0 2.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 0 1-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 0 0-1.091-.852H4.5A2.25 2.25 0 0 0 2.25 4.5v2.25Z" />
            </svg>
            <p className="font-semibold tracking-wide">Contactame</p>
          </button>

          <a
            href="/CV Pedro Arreguez.pdf"
            download
            className="w-full sm:w-auto flex items-center justify-center space-x-2 bg-foreground-green hover:bg-foreground-green/80 border border-transparent shadow-lg hover:shadow-xl p-3.5 px-8 rounded-full cursor-pointer transition-all duration-300 md:hover:-translate-y-1 hover:border-highlight-pink/30 group/btn"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="size-5 transition-transform duration-300 group-hover/btn:-translate-y-1"
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M3 16.5v2.25A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75V16.5M16.5 12 12 16.5m0 0L7.5 12m4.5 4.5V3" />
            </svg>
            <p className="font-semibold tracking-wide">Descargar CV</p>
          </a>
        </div>
      </div>
    </>
  );
}
