import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation, Autoplay } from "swiper/modules";
import { FestivalImages } from "../../constants/projects/festival";


export default function FestivalNuestraTierra() {
  return (
    <div className="px-6 py-32 lg:px-8 bg-[#c0f4ff]">
      <div className="mx-auto text-justify max-w-3xl lg:max-w-5xl text-base/7 text-blueText">
       
        <div className="max-w-3xl mx-auto">
          <h1 className="mt-4 text-3xl text-gray-900 font-bold">
            2020 - Festival Nuestra Tierra
          </h1>
          <p className="mt-4">
              Durante la pandemia, adaptamos nuestra labor al entorno virtual con un festival cultural y deportivo que promovió la reducción de la huella ecológica a través de las 4R’s: reducir, reciclar, reutilizar y recuperar.
              Cinco cápsulas virtuales (desde una reciclatón futbolera hasta cine en la cuadra) enseñaron prácticas sostenibles y fomentaron la participación comunitaria. El proceso culminó con el cortometraje “1.5 Grados”, una reflexión audiovisual sobre la crisis climática y el poder de la acción colectiva.
          </p>
          <h2 className="mt-12 text-base text-blueText font-semibold">
            Beca Ciudadanías en Movimiento Arte y Cultura Construyendo Comunidad. - <strong>PROGRAMA DISTRITAL DE ESTÍMULOS</strong> 
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
          {FestivalImages.map((e) => (
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
