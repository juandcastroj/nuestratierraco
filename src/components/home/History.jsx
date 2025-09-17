import historyPhoto from "../../assets/images/home/community.png";
import mujeresEnAccion from "../../assets/images/strategic-lines/image1.png"

export default function History() {
  return (
    <div className="px-6 py-32 lg:px-8 bg-gradient-to-b from-[#60cee5] to-[#9effca]">
      <div className="mx-auto text-justify max-w-3xl lg:max-w-5xl text-base/7 text-blueText">

          <div className="mx-auto max-w-2xl lg:max-w-7xl text-blueText">

            <div className="max-w-4xl">
              <p className="text-base/7 font-bold">Historia 🐢</p>
              <h1 className="mt-2 text-4xl font-semibold tracking-tight text-pretty sm:text-5xl">
                Quienes somos?...
              </h1>
            </div>

            <section className="mt-8 grid grid-cols-1 lg:grid-cols-2 lg:gap-x-8 lg:gap-y-16">

              <div className="lg:pr-8 font-semibold">
                <p className="text-base/7">
                La historia de Nuestra Tierra se
                remonta al año 2021, cuando tres
                escuelas de fútbol popular - Estrellas
                de Casa Loma, Suacha Fútbol Popular y
                Sancocho F.P. - unieron sus fuerzas en
                un espíritu de colaboración y
                compromiso comunitario. Surgiendo en
                medio de la pandemia, nacimos con el
                firme propósito de construir un mañana
                más próspero y equitativo, repleto de
                oportunidades para todos.
                </p>
                <p className="mt-8 text-base/7">
                Paralelamente, incursionamos en la
                  investigación y gestión de la
                  recolección y tratamiento de materiales
                  plásticos, abogando por prácticas
                  sostenibles. Nuestro último proyecto,
                  un preuniversitario “Del barrio a la U”
                  para jóvenes de la comunidad, refleja
                  nuestro compromiso con la educación y
                  el crecimiento personal.
                </p>
              
                <figure className="mt-10 border-l border-blueText pl-9 hover:animate-fade-right animate-duration-[2000ms] animate-delay-[500ms]">
                  <blockquote className="font-semibold">
                    <p>
                      “¡Bienvenidos a un mundo donde la
                        creatividad, la conciencia y el cambio se
                        entrelazan para dar forma al mañana! En
                        Nuestra Tierra, la innovación es nuestra
                        brújula y el desarrollo sostenible es
                        nuestro horizonte.”
                    </p>
                  </blockquote>
                  <figcaption className="mt-6 flex gap-x-4">
                    <img
                      alt=""
                      src="https://f004.backblazeb2.com/file/Nuestra-Tierra-Co/luisa.png"
                      className="size-6 flex-none rounded-full bg-gray-50"
                    />
                    <div className="text-sm/6">
                      <strong className="font-semibold">NuestraTierraCo</strong> – Co fundadora
                    </div>
                  </figcaption>
                </figure>

              </div>

              <div className="pt-12 lg:row-span-2 lg:-mr-16 xl:mr-auto animate animate-fade-down">
                <div className="-mx-4 grid grid-cols-2 gap-4 sm:-mx-16 sm:grid-cols-4 lg:mx-0 lg:grid-cols-2 lg:gap-4 xl:gap-8">

                  <div className="aspect-square overflow-hidden rounded-xl shadow-xl outline-1 -outline-offset-1 outline-black/10">
                    <img
                      alt=""
                      src={mujeresEnAccion}
                      className="block size-full object-cover"
                    />
                  </div>
                  <div className="-mt-8 aspect-square overflow-hidden rounded-xl shadow-xl outline-1 -outline-offset-1 outline-black/10 lg:-mt-40">
                    <img
                      alt=""
                      src={historyPhoto}
                      className="block size-full object-cover"
                    />
                  </div>
                  <div className="aspect-square overflow-hidden rounded-xl shadow-xl outline-1 -outline-offset-1 outline-black/10">
                    <img
                      alt=""
                      src="https://images.unsplash.com/photo-1559136555-9303baea8ebd?&auto=format&fit=crop&crop=left&w=560&h=560&q=90"
                      className="block size-full object-cover"
                    />
                  </div>
                  <div className="-mt-8 aspect-square overflow-hidden rounded-xl shadow-xl outline-1 -outline-offset-1 outline-black/10 lg:-mt-40">
                    <img
                      alt=""
                      src="https://images.unsplash.com/photo-1598257006458-087169a1f08d?&auto=format&fit=crop&crop=center&w=560&h=560&q=90"
                      className="block size-full object-cover"
                    />
                  </div>
                </div>
              </div>

            </section>
          </div>

        <div className="mt-16 max-w-5xl font-semibold">
          <h2 className="text-3xl tracking-tight text-pretty text-gray-900">
            Misión
          </h2>
          <p className="mt-4">
            Impulsar el cambio social y ambiental
            promoviendo la conservación del
            medio ambiente, la equidad de
            género, la innovación y la educación,
            enfocando todas nuestras iniciativas
            en diferentes sectores de la
            sociedad, identificando sus
            necesidades y respondiendo a ellas y
            fomentando la colaboración desde
            proyectos comunitarios hasta
            investigaciones sobre sostenibilidad.
          </p>
           <h2 className="mt-12 text-3xl tracking-tight text-pretty text-gray-900">
            Visión
          </h2>
          <p className="mt-4">
            Para el año 2030, nos reconocerán
            como agentes de cambio, guiando,
            gestionando y compartiendo
            conocimientos y acciones de impacto
            desde nuestras líneas estratégicas
            corporativas. Nos consolidaremos
            como líderes en la transformación
            social y ambiental de las comunidades,
            alcanzando una presencia tanto
            nacional como internacional. Nos
            comprometemos a promover prácticas
            sostenibles y responsables que
            preserven la integridad de nuestro
            hogar compartido: la Tierra.
          </p>
        </div>

      </div>
    </div>
  )
}
