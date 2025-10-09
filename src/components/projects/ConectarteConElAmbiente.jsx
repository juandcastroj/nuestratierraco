import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation, Autoplay } from "swiper/modules";
import { ConectarteImages } from "../../constants/projects/conectarte";


export default function ConectarteConElAmbiente() {
  return (
    <div className="px-6 py-32 lg:px-8 bg-[#c0f4ff]">
      <div className="mx-auto text-justify max-w-3xl lg:max-w-5xl text-base/7 text-blueText font-OpunMai">
       
        <div className="max-w-3xl mx-auto">
          <h1 className="mt-4 text-3xl tracking-tight text-pretty text-gray-900 font-bold">
            2021 - Conectarte con el ambiente
          </h1>
          <p className="mt-4">
              Un proceso formativo en arte audiovisual y fotografía con enfoque ambiental, orientado a crear conciencia sobre el cambio climático, el agua y la biodiversidad.
              A través de una metodología semipresencial, los participantes aprendieron técnicas fotográficas, construyeron cámaras estenopeicas y documentaron realidades territoriales en lugares como el Relleno Doña Juana.
              El proyecto finalizó con una galería virtual de fotos y videos ambientales y la creación de una red de eco-comunicadores locales.
              “Fotografía y conciencia ambiental desde el territorio.”
          </p>
          <h2 className="mt-12 text-base text-blueText font-semibold">
            Beca para la realizacion de procesos de formación artistica y Cultural en Ciudad Bolivar. - <strong>PROGRAMA DISTRITAL DE ESTÍMULOS</strong> 
          </h2>
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
          {ConectarteImages.map((e) => (
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
