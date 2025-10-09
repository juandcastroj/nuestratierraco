import mujeresEnAccion from "../../assets/images/strategic-lines/image1.png";
import historyImg2 from "../../assets/images/history/Historia 2.jpg";
import historyImg3 from "../../assets/images/home/Historia 9.jpg";
import { historyCarousel } from "../../constants/historyImages";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation, Autoplay } from "swiper/modules";
import VideoSection from "./VideoSection";


export default function History() {
  return (
    <div className="px-6 py-32 lg:px-8 bg-[#aaf1ff]">
      <div className="mx-auto text-justify max-w-3xl lg:max-w-5xl text-base/7 text-blueText font-OpunMai">
        <div className="mx-auto max-w-2xl lg:max-w-7xl text-blueText">
          <div className="max-w-4xl">
            <p className="text-base/7 font-bold">Historia 🐢</p>
            <h1 className="mt-2 text-4xl font-semibold font-TTmilks tracking-tight text-pretty sm:text-5xl">
              ¿Quiénes somos?...
            </h1>
          </div>

          <section className="mt-8 grid grid-cols-1 lg:grid-cols-2 lg:gap-x-8 lg:gap-y-16">
            <div className="lg:pr-8">
              <p className="text-base/7">
                La historia de Nuestra Tierra se remonta al año 2021, cuando
                tres escuelas de fútbol popular —Estrellas de Casa Loma, Suacha
                Fútbol Popular y Sancocho F.P.— unieron sus fuerzas en un
                espíritu de colaboración y compromiso comunitario. Nacimos en
                medio de la pandemia, con el firme propósito de construir un
                mañana más próspero y equitativo, lleno de oportunidades para
                todas y todos.
              </p>

              <figure className="mt-10 border-l-2 border-blueText pl-9 animate-duration-[2000ms] animate-delay-[500ms]">
                <blockquote className="">
                  <p>
                    “Agradecemos a cada una de las personas que han hecho parte
                    de esta historia: a quienes soñaron este proyecto desde el
                    inicio, a quienes han partido dejando su huella, a quienes
                    hoy siguen caminando con nosotros y a quienes aún están por
                    llegar.”
                    <br /> <br /> Cada grano, cada mano y cada aporte han sido
                    esenciales para que hoy seamos NuestraTierra.
                  </p>
                </blockquote>
 
              </figure>
            </div>

            <div className="pt-12 lg:row-span-2 lg:-mr-16 xl:mr-auto animate animate-fade-down">
              <div className="-mx-4 grid grid-cols-2 gap-4 sm:-mx-16 sm:grid-cols-4 lg:mx-0 lg:grid-cols-2 lg:gap-4 xl:gap-8">
                <div className=" aspect-square overflow-hidden rounded-xl shadow-xl outline-1 -outline-offset-1 outline-black/10">
                  <img
                    alt=""
                    src={mujeresEnAccion}
                    className="block size-full object-cover"
                  />
                </div>
                <div className="-mt-8 aspect-auto overflow-hidden rounded-xl shadow-xl outline-1 -outline-offset-1 outline-black/10 lg:-mt-40">
                  <img
                    alt=""
                    src={historyImg2}
                    className="block size-full object-cover"
                  />
                </div>
                <div className="-mt-24 sm:-mt-16 aspect-square overflow-hidden rounded-xl shadow-xl outline-1 -outline-offset-1 outline-black/10">
                  <img
                    alt=""
                    src={historyImg3}
                    className="block size-full object-cover"
                  />
                </div>
           
              </div>
            </div>
          </section>
        </div>

        <div className="mt-16 max-w-5xl">
          <h2 className="text-3xl tracking-tight text-pretty text-gray-900 font-bold">
            Innovar desde lo comunitario
          </h2>
          <p className="mt-4">
            Desde nuestros primeros pasos, tuvimos claro que queríamos combinar
            el trabajo popular y comunitario con la gestión de materiales
            reciclables, especialmente el plástico, buscando soluciones
            sostenibles para nuestro entorno. Durante este camino conocimos el
            proyecto internacional Precious Plastic, que comparte de forma
            abierta sus diseños de máquinas para reciclar. Inspirados por su
            propuesta, decidimos fabricar nuestras propias máquinas adaptadas a
            nuestro contexto local, dando vida a nuestra línea de reciclaje de
            plástico Nuestra Tierra.
          </p>

          <h2 className="mt-12 text-3xl tracking-tight text-pretty text-gray-900 font-bold">
            Nuestro espacio
          </h2>
          <p className="mt-4">
            En 2021 iniciamos el trabajo en lo que hoy es nuestra sede
            comunitaria, un lugar que seguimos adecuando y transformando
            colectivamente. Allí hemos construido nuestro taller de reciclaje,
            el espacio de formación y capacitaciones, el semillero ambiental y
            la zona de recolección de materiales, convirtiéndolo en un punto de
            encuentro para la educación, el arte, el deporte y la cultura.
          </p>

          
          <VideoSection />


          <h2 className="mt-12 text-3xl tracking-tight text-pretty text-gray-900 font-bold">
            Nuestro propósito hoy
          </h2>
          <p className="mt-4">
            Nuestro propósito es seguir llevando el mensaje del cuidado de
            Nuestra Tierra, tejiendo redes entre comunidades y aportando desde
            distintas áreas del conocimiento. Buscamos dar nueva vida a los
            residuos, transformándolos en recursos útiles, mientras fortalecemos
            la educación ambiental y promovemos la participación activa a través
            del arte, el deporte y la cultura.
          </p>
        </div>

        <Swiper
          modules={[Navigation, Autoplay]}
          spaceBetween={20}
          navigation
          loop={true}
          autoplay={{
            delay: 2500, // ⏳ 2.5 segundos
            disableOnInteraction: false, // sigue aunque el usuario toque
          }}
          breakpoints={{
            0: { slidesPerView: 1 }, // móviles
            640: { slidesPerView: 2 }, // tablets
            768: { slidesPerView: 2 }, // pantallas medianas
            1024: { slidesPerView: 2 }, // pantallas grandes
          }}
        >
          {historyCarousel.map((e) => (
            <SwiperSlide key={e.id} className="mt-12">
              <img
                src={e.img}
                alt={e.caption}
                className="w-full h-72 sm:h-80 object-contain sm:object-cover rounded-xl"
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
}
