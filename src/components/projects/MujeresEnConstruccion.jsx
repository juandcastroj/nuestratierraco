import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation, Autoplay } from "swiper/modules";
import { MujeresEnConstruccionImages } from "../../constants/projects/mujeresEnConstruccion";

export default function MujeresEnConstruccion() {
  return (
   <div className="px-6 py-32 lg:px-8 bg-[#99eeff]">
        <div className="mx-auto text-justify max-w-3xl lg:max-w-5xl text-base/7 text-blueText font-OpunMai">
          <div className="max-w-3xl mx-auto">
            <h1 className="mt-4 text-3xl text-gray-900 font-bold">
             2023 - Mujeres en construccion
            </h1>
            <p className="mt-4">
                Ciclo de talleres prácticos creados por y para mujeres, enfocados en aprender habilidades tradicionalmente asociadas a los hombres —como plomería, electricidad y pintura— para fortalecer la <strong>autonomía, confianza e independencia</strong>.
                Estos espacios promueven la igualdad y la eliminación de estereotipos de género desde el aprendizaje colectivo.
            </p>
            <h2 className="mt-12 text-base text-blueText font-semibold">
             “Empoderamiento y autonomía desde lo práctico.” 
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
            {MujeresEnConstruccionImages.map((e) => (
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
