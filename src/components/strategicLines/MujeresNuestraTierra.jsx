import img1 from "../../assets/images/strategic-lines/mujeres-nuestratierra/MAC 1.jpg";
import img2 from "../../assets/images/strategic-lines/mujeres-nuestratierra/MAC 2.jpg";
import img3 from "../../assets/images/strategic-lines/mujeres-nuestratierra/MAC 3.jpg";
import img4 from "../../assets/images/strategic-lines/mujeres-nuestratierra/MAC 4.jpg";

import img5 from "../../assets/images/strategic-lines/mujeres-nuestratierra/MEC 1.jpg";
import img6 from "../../assets/images/strategic-lines/mujeres-nuestratierra/MEC 2.jpg";
import img7 from "../../assets/images/strategic-lines/mujeres-nuestratierra/MEC 3.jpg";
import img8 from "../../assets/images/strategic-lines/mujeres-nuestratierra/MEC 4.jpg";

export default function MujeresNuestraTierra() {
  return (
    <div className="overflow-hidden bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-2xl px-6 lg:max-w-6xl lg:px-8 font-OpunMai">
        <div className="max-w-4xl">
          <h1 className="mt-2 text-4xl font-semibold tracking-tight text-pretty text-[#004e64] sm:text-5xl">
            Mujeres Nuestra Tierra
          </h1>
          <p className="mt-6 text-base text-balance text-[#004e64]">
            La línea Mujeres Nuestra Tierra impulsa procesos y proyectos
            enfocados en la{" "}
            <strong> transformación de los imaginarios tradicionales</strong>
            sobre los roles de las mujeres en distintos contextos. A través del
            <strong>arte, la participación y el diálogo</strong> , buscamos
            fomentar la igualdad, la equidad y la justicia de género, creando
            espacios donde las voces femeninas puedan{" "}
            <strong> expresarse, cuestionar y reconstruir</strong> sus propias
            narrativas.
          </p>
          {/* <p className="mt-6 text-base text-balance text-[#004e64]">
            Desde esta línea, promovemos la{" "}
            <strong>
              autonomía, la reflexión colectiva y la creación como herramientas
              de cambio
            </strong>{" "}
            , reconociendo la{" "}
            <strong>diversidad de experiencias y saberes</strong> que habitan en
            las mujeres de los territorios. Cada iniciativa propone un espacio
            de encuentro y acción donde las mujeres pueden{" "}
            <strong>reconocer, cuestionar y resignificar</strong>
            sus relaciones con el territorio, el cuerpo y la comunidad.{" "}
          </p> */}
        </div>

        {/* Mujeres al Cartel */}
        <section className="mt-24 grid grid-cols-1 lg:grid-cols-2 lg:gap-x-8 lg:gap-y-16">
          <div className="lg:pr-8">
            <h2 className="text-2xl font-semibold tracking-tight text-pretty text-[#004e64]">
              Mujeres al Cartel
            </h2>
            <p className="mt-6 text-base/7 text-[#004e64]">
              Con dos versiones desarrolladas, este proyecto busca{" "}
              <strong>
                resignificar los espacios públicos de la ciudad a través del
                cartelismo
              </strong>{" "}
              , una herramienta artística y política que permite a las mujeres
              ocupar y transformar lugares que históricamente han generado temor
              o exclusión.
            </p>
            <p className="mt-8 text-base/7 text-[#004e64]">
              El proceso invita a reflexionar sobre{" "}
              <strong>
                {" "}
                cómo transitamos y nos relacionamos con la ciudad
              </strong>
              , promoviendo el cuidado colectivo y la construcción de
              territorios más seguros e incluyentes.
            </p>
            <p className="mt-8 text-base/7 text-[#004e64]">
              Mujeres al Cartel ha tejido <strong>redes significativas</strong>{" "}
              que han fortalecido el crecimiento y la proyección de la
              corporación.
            </p>
          </div>

          <div className="pt-16 lg:row-span-2 lg:-mr-16 xl:mr-auto">
            <div className="-mx-4 grid grid-cols-2 gap-4 sm:-mx-16 sm:grid-cols-4 lg:mx-0 lg:grid-cols-2 lg:gap-4 xl:gap-8">
              <div className="aspect-square overflow-hidden rounded-xl shadow-xl outline-1 -outline-offset-1 outline-black/10 transition animate-fade-left">
                <img
                  alt=""
                  src={img1}
                  className="block size-full object-cover"
                />
              </div>
              <div className="-mt-4 aspect-square overflow-hidden rounded-xl shadow-xl outline-1 -outline-offset-1 outline-black/10 lg:-mt-40 transition animate-fade-left">
                <img
                  alt=""
                  src={img2}
                  className="block size-full object-cover"
                />
              </div>
              <div className="aspect-square overflow-hidden rounded-xl shadow-xl outline-1 -outline-offset-1 outline-black/10 transition animate-fade-left">
                <img
                  alt=""
                  src={img3}
                  className="block size-full object-cover"
                />
              </div>
              <div className="-mt-4 aspect-square overflow-hidden rounded-xl shadow-xl outline-1 -outline-offset-1 outline-black/10 lg:-mt-40 transition animate-fade-left">
                <img
                  alt=""
                  src={img4}
                  className="block size-full object-cover"
                />
              </div>
            </div>
          </div>
        </section>

        {/* TALLERES AMBIENTALES */}
        <section className="mt-36 flex flex-col-reverse sm:grid sm:grid-cols-1 lg:grid-cols-2 lg:gap-x-8 lg:gap-y-16">
          <div className="pt-16 lg:row-span-2 lg:-mr-16 xl:mr-auto">
            <div className="-mx-4 grid grid-cols-2 gap-4 sm:-mx-16 sm:grid-cols-4 lg:mx-0 lg:grid-cols-2 lg:gap-4 xl:gap-8">
              <div className="-mt-8 aspect-square overflow-hidden rounded-xl shadow-xl outline-1 -outline-offset-1 outline-black/10 lg:-mt-40 transition animate-fade-right">
                <img
                  alt=""
                  src={img5}
                  className="block size-full object-cover"
                />
              </div>
              <div className="aspect-square overflow-hidden rounded-xl shadow-xl outline-1 -outline-offset-1 outline-black/10 transition animate-fade-right">
                <img
                  alt=""
                  src={img6}
                  className="block size-full object-cover"
                />
              </div>

              <div className="-mt-8 aspect-square overflow-hidden rounded-xl shadow-xl outline-1 -outline-offset-1 outline-black/10 lg:-mt-40 transition animate-fade-right">
                <img
                  alt=""
                  src={img7}
                  className="block size-full object-cover"
                />
              </div>

              <div className="aspect-square overflow-hidden rounded-xl shadow-xl outline-1 -outline-offset-1 outline-black/10 transition animate-fade-right">
                <img
                  alt=""
                  src={img8}
                  className="block size-full object-cover"
                />
              </div>
            </div>
          </div>

          <div className="lg:pr-8">
            <h2 className="text-2xl font-semibold tracking-tight text-pretty text-[#004e64]">
              Mujeres en Construcción
            </h2>
            <p className="mt-6 text-base/7 text-[#004e64]">
              Este proyecto está diseñado para{" "}
              <strong>
                enseñar el uso de herramientas básicas en el hogar
              </strong>{" "}
              , fomentando la <strong>autonomía y la confianza personal</strong>{" "}
              . A través de talleres prácticos, se busca que tareas cotidianas
              —como reparaciones sencillas— puedan ser realizadas por cualquier
              persona, <strong>sin importar su género</strong> .
            </p>
            <p className="mt-8 text-base/7 text-[#004e64]">
              Mujeres en Construcción cuestiona los roles tradicionales y
              promueve una visión equitativa de las labores del hogar, donde la
              <strong>independencia y la cooperación </strong> son pilares
              fundamentales para la transformación social.
            </p>
          </div>
        </section>
      </div>
    </div>
  );
}
