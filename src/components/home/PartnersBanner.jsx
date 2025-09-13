import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Autoplay } from "swiper/modules";

export default function PartnersBanner() {
  return (
    <div className="bg-[#004e64] py-8 sm:pt-8">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <h2 className="text-center text-base sm:text-lg/8 font-semibold text-[#9effca]">
          Con la confianza de algunos de los equipos más innovadores del país :
        </h2>

        <Swiper
          modules={[Autoplay]}
          spaceBetween={40}
          loop={true}
          autoplay={{
            delay: 1000, // ⏳ 1 segundo
            disableOnInteraction: false,
          }}
          breakpoints={{
            0: { slidesPerView: 2 },    // móviles
            640: { slidesPerView: 3 },  // tablets
            768: { slidesPerView: 4 },  // pantallas medianas
            1024: { slidesPerView: 5 }, // pantallas grandes
          }}
          className="mt-10"
        >
          <SwiperSlide className="flex items-center justify-center">
            <img
              alt="Transistor"
              src="https://tailwindcss.com/plus-assets/img/logos/158x48/transistor-logo-white.svg"
              
              
              className="max-h-12 w-full object-contain h-[70px] sm:h-[48px]"
            />
          </SwiperSlide>

          <SwiperSlide className="flex items-center justify-center">
            <img
              alt="Reform"
              src="https://tailwindcss.com/plus-assets/img/logos/158x48/reform-logo-white.svg"
              
              
              className="max-h-12 w-full object-contain h-[70px] sm:h-[48px]"
            />
          </SwiperSlide>

          <SwiperSlide className="flex items-center justify-center">
            <img
              alt="Tuple"
              src="https://tailwindcss.com/plus-assets/img/logos/158x48/tuple-logo-white.svg"
              
              
              className="max-h-12 w-full object-contain h-[70px] sm:h-[48px]"
            />
          </SwiperSlide>

          <SwiperSlide className="flex items-center justify-center">
            <img
              alt="SavvyCal"
              src="https://tailwindcss.com/plus-assets/img/logos/158x48/savvycal-logo-white.svg"
              
              
              className="max-h-12 w-full object-contain h-[70px] sm:h-[48px]"
            />
          </SwiperSlide>

          <SwiperSlide className="flex items-center justify-center">
            <img
              alt="Statamic"
              src="https://tailwindcss.com/plus-assets/img/logos/158x48/statamic-logo-white.svg"
              
              
              className="max-h-12 w-full object-contain h-[70px] sm:h-[48px]"
            />
          </SwiperSlide>

          <SwiperSlide className="flex items-center justify-center">
            <img
              alt="Tuple"
              src="https://tailwindcss.com/plus-assets/img/logos/158x48/tuple-logo-white.svg"
              
              
              className="max-h-12 w-full object-contain h-[70px] sm:h-[48px]"
            />
          </SwiperSlide>

          <SwiperSlide className="flex items-center justify-center">
            <img
              alt="Statamic"
              src="https://tailwindcss.com/plus-assets/img/logos/158x48/statamic-logo-white.svg"
              
              
              className="max-h-12 w-full object-contain h-[70px] sm:h-[48px]"
            />
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
}
