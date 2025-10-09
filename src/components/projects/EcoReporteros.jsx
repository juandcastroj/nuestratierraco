import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation, Autoplay } from "swiper/modules";
import { EcoreporterosImages } from "../../constants/projects/ecoReporteros";


export default function EcoReporteros() {
  return (
    <div className="px-6 py-32 lg:px-8 bg-[#99eeff]">
      <div className="mx-auto text-justify max-w-3xl lg:max-w-5xl text-base/7 text-blueText">
        <div className="max-w-3xl mx-auto">
          <h1 className="mt-4 text-3xl text-gray-900 font-bold">
           2022 - Eco reporteros por la tierra
          </h1>
          <p className="mt-4">
            Proyecto de comunicación comunitaria que combinó formación en periodismo, audiovisual y medio ambiente.
            Las y los participantes produjeron contenidos sobre crisis climática, economía circular y problemáticas locales, culminando en una galería audiovisual donde se premiaron las mejores propuestas en video y fotografía.
            Esta iniciativa fortaleció la participación juvenil y el uso de los medios como herramienta para la defensa del territorio.
            “Comunicación comunitaria al servicio del planeta.”
          </p>
          <h2 className="mt-12 text-base text-blueText font-semibold">
            Beca para la comunicación comunitaria. - <strong>PROGRAMA DISTRITAL DE ESTÍMULOS</strong> 
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
          {EcoreporterosImages.map((e) => (
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
