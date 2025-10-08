import img1 from "../../assets/images/strategic-lines/nuestratierra-educa/nuestratierra educa.jpg";
import img2 from "../../assets/images/strategic-lines/nuestratierra-educa/nuestratierra educa 5.jpg";
import img3 from "../../assets/images/strategic-lines/nuestratierra-educa/nuestratierra educa 1.jpg";
import img4 from "../../assets/images/strategic-lines/nuestratierra-educa/nuestratierra educa 4.jpg";

import img5 from "../../assets/images/strategic-lines/nuestratierra-educa/Muros Verdes.png";
import img6 from "../../assets/images/strategic-lines/nuestratierra-educa/Muros Verdes 2.png";
import img7 from "../../assets/images/strategic-lines/nuestratierra-educa/Muros Verdes 3.png";
import img8 from "../../assets/images/strategic-lines/nuestratierra-educa/nuestratierra educa 2.jpg";

import img9 from "../../assets/images/strategic-lines/nuestratierra-educa/Talleres Género.jpg";
import img10 from "../../assets/images/strategic-lines/nuestratierra-educa/Talleres Género 2.jpg";
import img11 from "../../assets/images/strategic-lines/nuestratierra-educa/Talleres Género 3.jpg";
import img12 from "../../assets/images/strategic-lines/nuestratierra-educa/nuestratierra educa 2.jpg";


export default function NuestraTierraEduca() {
  return (
    <div className="overflow-hidden bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-2xl px-6 lg:max-w-6xl lg:px-8">
        <div className="max-w-4xl">
          <h1 className="mt-2 text-4xl font-semibold tracking-tight text-pretty text-[#004e64] sm:text-5xl">
            Nuestra Tierra Educa
          </h1>
          <p className="mt-6 text-xl/8 text-balance text-[#004e64]">
            La educación popular y ambiental ocupa un lugar central en nuestra
            misión. Creemos en el poder transformador de la educación para
            generar conciencia y acción en la protección de nuestro entorno
            natural y la promoción de prácticas sostenibles.
          </p>
        </div>


        {/* DEL BARRIO A LA U  */}
        <section className="mt-24 grid grid-cols-1 lg:grid-cols-2 lg:gap-x-8 lg:gap-y-16">
          <div className="lg:pr-8">
            <h2 className="text-2xl font-semibold tracking-tight text-pretty text-[#004e64]">
              Del Barrio a la U
            </h2>
            <p className="mt-6 text-base/7 text-[#004e64]">
              <strong>
                {" "}
                El barrio es nuestra fuerza, la academia nuestro destino.{" "}
              </strong>{" "}
              <br />
              Este proyecto nace en el Barrio Perdomo como una iniciativa de
              educación popular que busca facilitar el acceso de jóvenes a la
              educación universitaria, especialmente en instituciones públicas.
            </p>
            <p className="mt-8 text-base/7 text-[#004e64]">
              En nuestras ediciones 2024 y 2025 hemos desarrollado talleres
              introductorios en{" "}
              <strong>
                emprendimiento, finanzas personales y orientación vocacional
              </strong>{" "}
              , promoviendo no solo la formación académica, sino también el
              acompañamiento y fortalecimiento personal.
            </p>
            <p className="mt-8 text-base/7 text-[#004e64]">
              Gracias a este proceso,{" "}
              <strong>
                nos constituimos como un dispositivo de base comunitaria
              </strong>{" "}
              , generando espacios de aprendizaje, escucha y crecimiento
              colectivo.
            </p>
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


        {/* TALLERES AMBIENTALES */}
        <section className="mt-36 flex flex-col-reverse sm:grid sm:grid-cols-1 lg:grid-cols-2 lg:gap-x-8 lg:gap-y-16">
          <div className="pt-16 lg:row-span-2 lg:-mr-16 xl:mr-auto">
            <div className="-mx-4 grid grid-cols-2 gap-4 sm:-mx-16 sm:grid-cols-4 lg:mx-0 lg:grid-cols-2 lg:gap-4 xl:gap-8">
              <div className="-mt-8 aspect-square overflow-hidden rounded-xl shadow-xl outline-1 -outline-offset-1 outline-black/10 lg:-mt-40">
                <img
                  alt=""
                  src={img5}
                  className="block size-full object-cover"
                />
              </div>
              <div className="aspect-square overflow-hidden rounded-xl shadow-xl outline-1 -outline-offset-1 outline-black/10">
                <img
                  alt=""
                  src={img6}
                  className="block size-full object-cover"
                />
              </div>

              <div className="-mt-8 aspect-square overflow-hidden rounded-xl shadow-xl outline-1 -outline-offset-1 outline-black/10 lg:-mt-40">
                <img
                  alt=""
                  src={img7}
                  className="block size-full object-cover"
                />
              </div>

              <div className="aspect-square overflow-hidden rounded-xl shadow-xl outline-1 -outline-offset-1 outline-black/10">
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
              Talleres ambientales
            </h2>
            <p className="mt-6 text-base/7 text-[#004e64]">
              Desde NuestraTierra Educa promovemos acciones de cambio desde
              nuestros hogares para mitigar las consecuencias del modelo actual
              de consumo. A través de talleres prácticos —como{" "}
              <strong>
                muros verdes, separación en la fuente y reutilización creativa
                de materiales
              </strong>{" "}
              — fomentamos hábitos sostenibles que fortalecen la conexión entre
              comunidad y naturaleza.
            </p>
            <p className="mt-8 text-base/7 text-[#004e64]">
              Combinamos diferentes{" "}
              <strong>metodologías pedagógicas y artísticas</strong>, integrando
              herramientas como la{" "}
              <strong>fotografía, el arte y la creación colectiva</strong> ,
              para que cada experiencia sea no solo un espacio de aprendizaje,
              sino también de expresión, memoria y transformación ambiental.
            </p>
          </div>
        </section>


        {/* TALLERES CON ENFOQUE DE GENERO */}
        <section className="mt-36 grid grid-cols-1 lg:grid-cols-2 lg:gap-x-8 lg:gap-y-16">
          <div className="lg:pr-8">
            <h2 className="text-2xl font-semibold tracking-tight text-pretty text-[#004e64]">
               Talleres con Enfoque de Género
            </h2>
            <p className="mt-6 text-base/7 text-[#004e64]">
              Impulsamos espacios formativos que promueven la{" "}
              <strong>autonomía y el fortalecimiento de las mujeres</strong> en
              sus territorios.
            </p>
            <p className="mt-8 text-base/7 text-[#004e64]">
              A través de talleres prácticos como{" "}
              <strong> “Reparaciones en el hogar para mujeres”</strong>,
              brindamos herramientas útiles para la vida cotidiana, reducimos
              brechas de género y fomentamos la confianza y la independencia.{" "}
            </p>
            <p className="mt-8 text-base/7 text-[#004e64]">
              Estos espacios se articulan con nuestra línea{" "}
              <strong className="underline">Mujeres NuestraTierra</strong> ,
              generando encuentros donde el aprendizaje técnico se combina con
              la reflexión sobre el autocuidado, la colaboración y la
              construcción de comunidades más equitativas.
            </p>
          </div>
          <div className="pt-16 lg:row-span-2 lg:-mr-16 xl:mr-auto">
            <div className="-mx-4 grid grid-cols-2 gap-4 sm:-mx-16 sm:grid-cols-4 lg:mx-0 lg:grid-cols-2 lg:gap-4 xl:gap-8">
              <div className="aspect-square overflow-hidden rounded-xl shadow-xl outline-1 -outline-offset-1 outline-black/10">
                <img
                  alt=""
                  src={img9}
                  className="block size-full object-cover"
                />
              </div>
              <div className="-mt-8 aspect-square overflow-hidden rounded-xl shadow-xl outline-1 -outline-offset-1 outline-black/10 lg:-mt-40">
                <img
                  alt=""
                  src={img10}
                  className="block size-full object-cover"
                />
              </div>
              <div className="aspect-square overflow-hidden rounded-xl shadow-xl outline-1 -outline-offset-1 outline-black/10">
                <img
                  alt=""
                  src={img11}
                  className="block size-full object-cover"
                />
              </div>
              <div className="-mt-8 aspect-square overflow-hidden rounded-xl shadow-xl outline-1 -outline-offset-1 outline-black/10 lg:-mt-40">
                <img
                  alt=""
                  src={img12}
                  className="block size-full object-cover"
                />
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
