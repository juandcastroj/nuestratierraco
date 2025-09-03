import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation, Autoplay } from "swiper/modules";
import { productsCarousel } from "../../constants/productsCarousel";
import { Link } from "react-router-dom";


export default function ProductCarousel() {
  return (
    <div className="w-full py-16 sm:py-24 lg:mx-auto lg:max-w-6xl lg:px-8">

        <div className="flex items-center justify-between px-4 sm:px-6 lg:px-0">
          <h2 className="text-2xl font-bold text-blueText">📢 Productos destacados</h2>
          <Link to="https://co.mitienda.la/nuestratierra" className="block text-lg font-semibold text-blueText hover:text-[#458ea8]">
            Ver todos
            <span aria-hidden="true"> &rarr;</span>
          </Link>
        </div>


      <Swiper
        modules={[Navigation, Autoplay]}
        spaceBetween={20}
        navigation
        loop={true}
        autoplay={{
          delay: 3000, // ⏳ 3 segundos
          disableOnInteraction: false, // sigue aunque el usuario toque
        }}
        breakpoints={{
          0: { slidesPerView: 1 },     // móviles
          640: { slidesPerView: 2 },   // tablets
          768: { slidesPerView: 3 },   // pantallas medianas
          1024: { slidesPerView: 4 },  // pantallas grandes
        }}
      >
        {productsCarousel.map((product) => (
          <SwiperSlide key={product.id} className="mt-12">
            <a
              href={product.link}
              target="_blank"
              rel="noopener noreferrer"
              className="block"
            >
              <div className="bg-white shadow-md rounded-xl overflow-hidden hover:shadow-xl hover:scale-105 transform transition duration-300">
                <img
                  src={product.img}
                  alt={product.name}
                  className="w-full h-48 sm:h-80 object-contain sm:object-cover"
                />
                <div className="p-3 text-center">
                    <div className="mt-6">
                      <p className="text-sm text-gray-500">{product.color}</p>
                      <h3 className="mt-1 font-semibold text-teal-600">
                        <a href={product.href}>
                          <span className="absolute inset-0" />
                          {product.name}
                        </a>
                      </h3>
                      <p className="mt-1 text-teal-600 font-bold">{product.price}</p>
                    </div>
                </div>
              </div>
            </a>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
