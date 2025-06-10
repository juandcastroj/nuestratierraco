import { strategicLines } from "../../constants/strategicLines";

export default function StrategicLines() {
  return (
   <div className="min-h-screen bg-gradient-to-b from-[#9effca] to-[#60cee5]">
    <div className="py-12 md:py-28">
      <div className="mx-auto max-w-6xl gap-20 px-6 sm:px-12 lg:px-16 ">
        <div className="text-center xl:col-span-2 mb-12 animate-fade-down animate-duration-[1500ms] animate-delay-[400ms]">
          <h2 className="text-4xl font-semibold tracking-tight text-[#033649] sm:text-5xl">
              Lineas estratégicas
          </h2>
            <p className="mt-6 text-lg/8 text-[#004e64] leading-6">
              ¡Bienvenidos a un mundo donde la
              creatividad, la conciencia y el cambio se
              entrelazan para dar forma al mañana! En
              Nuestra Tierra, la innovación es nuestra
              brújula y el desarrollo sostenible es
              nuestro horizonte. Desde las
              profundidades de la investigación hasta
              las cimas de la acción, navegamos por
              mares de posibilidades, explorando
              territorios desconocidos en busca de
              soluciones que transformen nuestra
              realidad.      
            </p>
        </div>

        <ul role="list" className="space-y-8 xl:col-span-3 animate-fade-down animate-duration-[1500ms] animate-delay-500">
          {  strategicLines.map(
            ({ company, role, imageUrl, description, url, repo }, index) => (
              <li
                key={index}
                className="flex flex-col gap-4 lg:gap-10 lg:flex-row p-3 bg-transparent
                           rounded-3xl ring-1 ring-slate-300 dark:ring-[#471f8d] hover:shadow-md hover:bg-white/30 dark:hover:bg-white/10 hover:backdrop-blur-md" >
                  <img
                    alt={company}
                    src={imageUrl}
                    className="w-96 rounded-lg md:rounded-2xl"
                  />
                <div className="max-w-xl flex-auto pt-2 lg:pt-6 text-justify">
                  <a href={url} target="_blank" rel="noopener noreferrer">
                    <h3 className="text-xl font-bold tracking-tight text-[#033649] dark:text-blue-300">
                      {company}
                    </h3>
                    <p className="text-base/7 font-bold text-gray-500">
                      {role}
                    </p>
                    <p className="mt-1 text-base/7 text-[#004e64]">
                      {description}
                    </p>
                  </a>
                </div>
              </li>
            ))
          }
        </ul>
      </div>
    </div>
   </div>
  );
}
