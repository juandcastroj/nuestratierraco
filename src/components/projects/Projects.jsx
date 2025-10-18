import { useEffect } from "react";
import { Link } from "react-router-dom";
import { projectsData } from "../../constants/projects";

export default function Projects() {

    useEffect(() => {
      document.title = "Proyectos | NuestraTierraCO";
    }, []);

  return (

    <>
    <div className="min-h-screen bg-[#affff4] font-OpunMai">
      <div className="py-20 md:py-28">
        <div className="mx-auto max-w-7xl gap-20 px-6 sm:px-12 lg:px-16">
          {/* Encabezado */}
          <div className="text-center mx-auto max-w-4xl xl:col-span-2 mb-12 animate-fade-down animate-duration-[1500ms] animate-delay-[400ms]">
            <h2 className="text-4xl font-semibold tracking-tight text-[#033649] sm:text-5xl">
              Nuestros proyectos
            </h2>
            <p className="mt-6 text-base text-[#004e64] leading-6">
             Desde 2020 hemos desarrollado procesos comunitarios, culturales y ambientales que fortalecen el vínculo entre las personas y su territorio. Nuestros proyectos combinan arte, educación, sostenibilidad y enfoque de género, promoviendo acciones transformadoras desde lo local hacia lo colectivo.
            </p>
          </div>

          {/* Grid de proyectos */}
          <ul
            role="list"
            className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3 animate-fade-down animate-duration-[1500ms] animate-delay-500"
          >
            {projectsData.map(
              ({ name, imageUrl, url }, index) => (
                <li
                  key={index}
                  className="flex flex-col bg-white/30 hover:bg-white/40 hover:backdrop-blur-md 
                             rounded-3xl p-4 hover:shadow-md transition hover:-translate-y-1 cursor-pointer"
                >
                  <img
                    alt={name}
                    src={imageUrl}
                    className="w-full h-48 object-cover rounded-xl mb-4"
                  />

                  <div className="flex flex-col flex-1 text-center mx-6">
                    <h3 className="text-xl font-bold tracking-tight text-[#033649]">
                      {name}
                    </h3>
                    {/* <p className="mt-2 text-sm text-[#004e64] font-medium">
                      {description}
                    </p> */}
                  </div>

                  <div className="mt-6 flex justify-center">
                    <Link
                      to={url}
                      className="px-6 py-2 bg-blueButton hover:bg-[#25a18e] rounded-md 
                                 font-medium text-white transition"
                    >
                      Mas info
                    </Link>
                  </div>
                </li>
              )
            )}
          </ul>
        </div>
      </div>
    </div>


    </>
  );
}
