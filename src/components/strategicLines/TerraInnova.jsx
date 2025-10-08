import img1 from "../../assets/images/strategic-lines/terrainnova/terrainnova.jpg";
import img2 from "../../assets/images/strategic-lines/terrainnova/terrainnova 2.jpg";
import img3 from "../../assets/images/strategic-lines/terrainnova/terrainnova 3.jpg";
import img4 from "../../assets/images/strategic-lines/terrainnova/terrainnova 4.jpg";
import img5 from "../../assets/images/strategic-lines/terrainnova/terrainnova 5.jpg";
import img6 from "../../assets/images/strategic-lines/terrainnova/terrainnova 6.jpg";


import { CheckIcon } from "@heroicons/react/20/solid";

const processes = [
  {
    name: "Recolección del plástico",
    description:
      " Recibimos el material en nuestra sede, gracias a los aportes de la comunidad que nos rodea.",
  },
  {
    name: "Clasificación",
    description:
      "Separamos el plástico por tipo y color para asegurar una buena calidad en el producto final.",
  },
  {
    name: "Trituración",
    description:
      "Trituramos el material hasta obtener pequeñas escamas de unos 5 mm.",
  },
  {
    name: "Lavado eficiente",
    description:
      " Usamos la menor cantidad de agua posible para limpiar el plástico, quitando suciedad e impurezas.",
  },
  {
    name: "Secado natural",
    description:
      " Aprovechamos el sol y el viento para secar el material sin usar energía adicional.",
  },
  {
    name: "Fundición",
    description:
      "El plástico limpio se funde en moldes dentro de un horno especial diseñado por nosotros.",
  },
  {
    name: "Compresión en frío",
    description:
      "Después de fundirse, el material se enfría y se comprime para darle la forma final.",
  },
  {
    name: "Corte láser",
    description:
      "Usamos nuestra máquina de corte láser para crear formas personalizadas según los diseños que necesite cada cliente.",
  },
  {
    name: "Acabado final",
    description:
      "Retiramos rebabas y damos los toques finales para que el producto quede limpio y profesional.",
  },
  {
    name: "Producto terminado",
    description:
      " ¡Listo para stock, envío o entrega!",
  },
  {
    name: "Producto en manos del cliente",
    description:
      " El resultado: un producto único, funcional y hecho con materiales reciclados. ¡Cada cliente se convierte en parte del cambio!",
  }
];

const machines = [
  {
    name: "Trituradora",
  },
  {
    name: "Horno de fundición",
  },
  {
    name: "Máquina de corte láser",
  },
];

export default function Terrainnova() {
  return (
    <div className="overflow-hidden bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-2xl px-6 lg:max-w-6xl lg:px-8">
        <section className="mt-24 sm:mt-20 grid grid-cols-1 lg:grid-cols-2 lg:gap-x-8 lg:gap-y-16">
          <div className="lg:pr-8 mt-4 m:mt-20">
            <h2 className="text-3xl font-bold text-[#004e64]">Terrainnova</h2>
            <p className="mt-6 text-base/7 text-[#004e64]">
              TerraInnova es nuestro espacio de{" "}
              <strong>innovación y desarrollo</strong> , en esta área exploramos
              nuevas tecnologías y prácticas para abordar desafíos ambientales
              urgentes, en nuestro caso la transformación de plástico
              recuperado. Contamos con ingenieros que pueden dar soluciones
              innovadoras que promuevan el{" "}
              <strong>cuidado del medio ambiente y la sostenibilidad</strong> .
            </p>

            <div className="mt-12 overflow-hidden rounded-xl shadow-xl">
              <img
                alt=""
                src={img5}
                className="block size-full object-cover"
              />
            </div>
          </div>

          <div className="pt-16 lg:row-span-2 lg:-mr-16 xl:mr-auto">
            <div className="-mx-4 grid grid-cols-2 gap-4 sm:-mx-16 sm:grid-cols-4 lg:mx-0 lg:grid-cols-2 lg:gap-4 xl:gap-8">
              <div className="aspect-square overflow-hidden rounded-xl shadow-xl outline-1 -outline-offset-1 outline-black/10">
                <img
                  alt=""
                  src={img1}
                  className="block size-full object-cover"
                />
              </div>
              <div className="-mt-4 aspect-square overflow-hidden rounded-xl shadow-xl outline-1 -outline-offset-1 outline-black/10 lg:-mt-40">
                <img
                  alt=""
                  src={img2}
                  className="block size-full object-cover"
                />
              </div>
              <div className="aspect-square overflow-hidden rounded-xl shadow-xl outline-1 -outline-offset-1 outline-black/10">
                <img
                  alt=""
                  src={img3}
                  className="block size-full object-cover"
                />
              </div>
              <div className="-mt-4 aspect-square overflow-hidden rounded-xl shadow-xl outline-1 -outline-offset-1 outline-black/10 lg:-mt-40">
                <img
                  alt=""
                  src={img4}
                  className="block size-full object-cover"
                />
              </div>
            </div>
          </div>
        </section>

        <div className="mx-auto max-w-7xl px-6 py-24 sm:py-12 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="text-3xl font-bold text-[#004e64] sm:text-4xl">
              Nuestro proceso
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-base text-gray-600">
              En <strong> Nuestra Tierra</strong> nos encargamos de todo el
              ciclo: desde recibir el plástico hasta entregar un producto final
              reutilizable y bonito. Te contamos cómo lo hacemos:
            </p>
          </div>
          <dl className="mt-12 grid grid-cols-1 gap-12 sm:grid-cols-2 sm:gap-x-6 lg:grid-cols-4 lg:gap-x-8">
            {processes.map((e, index) => (
              <div key={`${e.name}-${index}`} className="relative">
                <dt>
                  <div className="absolute mt-1 flex h-6 w-6 items-center justify-center rounded-full bg-[#004e64] text-white font-bold">
                    {index + 1}
                  </div>
                  <p className="ml-10 text-lg font-semibold text-gray-900">
                    {e.name}
                  </p>
                </dt>
                <dd className="mt-2 ml-10 text-base text-gray-600 text-justify">
                  {e.description}
                </dd>
              </div>
            ))}
          </dl>
        </div>

        <div className="mx-auto max-w-7xl px-6 py-24 sm:py-12 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="text-3xl font-bold tracking-tight text-[#004e64] sm:text-4xl">
              Nuestra maquinaria
            </h2>
            <p className="mx-auto mt-2 max-w-xl text-base text-gray-600">
             Contamos con las herramientas necesarias para hacer posible este proceso:

            </p>
          </div>

          <dl className="mt-6 grid grid-cols-1 gap-12 sm:grid-cols-2 sm:gap-x-6 lg:grid-cols-3 lg:gap-x-8 mx-auto max-w-3xl">
            {machines.map((e) => (
              <div key={e.name} className="relative">
                {" "}
                <dt>
                  <CheckIcon
                    aria-hidden="true"
                    className="absolute mt-1 size-6 text-[#004e64]"
                  />{" "}
                  <p className="ml-10 text-lg/8 font-semibold text-gray-900">
                    {e.name}
                  </p>{" "}
                </dt>{" "}
                <dd className="mt-2 ml-10 text-base/7 text-gray-600">
                  {e.description}
                </dd>{" "}
              </div>
            ))}
          </dl>
        </div>

        <div className="mt-16 max-w-4xl text-center mx-auto px-6 lg:px-8 text-[#004e64]">
          <h2 className="mt-12 text-3xl tracking-tight text-pretty text-[#004e64] font-bold">
            Somos parte de la comunidad precious plastic{" "}
          </h2>
          <p className="mt-4">
            ¿Qué es Precious Plastic? Es un proyecto global que busca combatir
            la contaminación plástica mediante la creación de una comunidad de
            personas que comparten información y proporciona herramientas,
            planos de maquinaria y conocimiento para crear pequeños y grandes
            talleres de reciclaje y procesar plástico de desecho y transformarlo
            en productos nuevos.
          </p>

          <p className="mt-4">
            Nos sentimos orgullosos de ser parte de esta comunidad. Tenemos un
            pin que nos acredita como “Espacio de Trabajo”, lo cual indica que
            nos sumamos a esta red para compartir saberes, conectar con
            iniciativas similares en el mundo y seguir construyendo soluciones
            desde el territorio.{" "}
          </p>
    
            <div className="mt-12 overflow-hidden rounded-full mx-auto text-center">
              <img
                alt="precious plastic logo"
                src={img6}
                className="block w-48"
              />
            </div>
        </div>
      </div>
    </div>
  );
}
