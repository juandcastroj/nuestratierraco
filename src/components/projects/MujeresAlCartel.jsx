import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation, Autoplay } from "swiper/modules";
import { MujeresAlCartelImages } from "../../constants/projects/mujeresAlCartel";


export default function MujeresAlCartel() {
  return (
      <div className="px-6 py-32 lg:px-8 bg-[#99eeff]">
        <div className="mx-auto text-justify max-w-3xl lg:max-w-5xl text-base/7 text-blueText font-OpunMai">
          <div className="max-w-3xl mx-auto">
            <h1 className="mt-4 text-3xl text-gray-900 font-bold">
             2025 - Mujeres al cartel
            </h1>
            <p className="mt-4">
                <strong>Proyecto ganador de la beca IDARTES Bogotá Diversa</strong>, enfocado en transformar los imaginarios sobre las mujeres y su tránsito por la ciudad.
                A través de laboratorios creativos de cartelismo (linograbado, stencil y serigrafía), mujeres de Ciudad Bolívar reflexionaron sobre sus derechos, el cuerpo como territorio y el espacio público como lugar de libertad.
                El resultado: carteles que ocupan los muros de la ciudad como mensajes de resistencia y esperanza bajo la premisa <strong> “cuando muere el miedo, nace la libertad”.</strong>
            </p>
            <h2 className="mt-12 text-base text-blueText font-semibold">
              “El arte como herramienta de libertad y expresión.” 
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
            {MujeresAlCartelImages.map((e) => (
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
