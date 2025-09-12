import { projectsData } from "../../constants/projects";
import { Link } from "react-router-dom";

export default function Projects() {
  return (
    <div className="min-h-screen bg-[#9effca]">
      <div className="py-20 md:py-28">
        <div className="mx-auto max-w-7xl gap-20 px-6 sm:px-12 lg:px-16">
          {/* Encabezado */}
          <div className="text-center mx-auto max-w-4xl xl:col-span-2 mb-12 animate-fade-down animate-duration-[1500ms] animate-delay-[400ms]">
            <h2 className="text-4xl font-semibold tracking-tight text-[#033649] sm:text-5xl">
              Nuestros Proyectos
            </h2>
            <p className="mt-6 text-base text-[#004e64] leading-6">
              ¡Bienvenidos a un mundo donde la creatividad, la conciencia y el
              cambio se entrelazan para dar forma al mañana! En Nuestra Tierra,
              la innovación es nuestra brújula y el desarrollo sostenible es
              nuestro horizonte. Desde las profundidades de la investigación
              hasta las cimas de la acción, navegamos por mares de
              posibilidades, explorando territorios desconocidos en busca de
              soluciones que transformen nuestra realidad.
            </p>
          </div>

          {/* Grid de proyectos */}
          <ul
            role="list"
            className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3 animate-fade-down animate-duration-[1500ms] animate-delay-500"
          >
            {projectsData.map(
              ({ company, imageUrl, description, url }, index) => (
                <li
                  key={index}
                  className="flex flex-col bg-white/20 hover:bg-white/40 hover:backdrop-blur-md 
                             rounded-3xl p-2 hover:shadow-md transition"
                >
                  <img
                    alt={company}
                    src={imageUrl}
                    className="w-full h-48 object-cover rounded-xl mb-4"
                  />

                  <div className="flex flex-col flex-1 text-center mx-6">
                    <h3 className="text-xl font-bold tracking-tight text-[#033649] dark:text-blue-300">
                      {company}
                    </h3>
                    <p className="mt-2 text-sm text-[#004e64] font-medium">
                      {description}
                    </p>
                  </div>

                  <div className="mt-6 flex justify-center">
                    <Link
                      to={url}
                      className="px-6 py-2 bg-yellow-300 border border-black rounded-md 
                                 font-medium text-[#033649] hover:bg-yellow-400 transition"
                    >
                      Ver más
                    </Link>
                  </div>
                </li>
              )
            )}
          </ul>
        </div>
      </div>
    </div>
  );
}
