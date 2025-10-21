import { useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation, Autoplay } from "swiper/modules";
import { productsCarousel } from "../../constants/productsCarousel";
import { Link } from "react-router-dom";

export default function ProductCarousel() {

  useEffect(() => {
    document.title = "Nuestra Tienda 🛍️ - NuestraTierraCo";
  }, [])

  return (
    <div className="w-full pt-28 sm:pt-24 pb-16 sm:pb-24 lg:mx-auto lg:max-w-6xl lg:px-8 font-OpunMai">

        <div className="text-center mx-auto max-w-4xl xl:col-span-2 mb-12 animate-fade-down animate-duration-[1500ms] animate-delay-[400ms]">
          <h2 className="text-4xl font-semibold tracking-tight text-[#033649] sm:text-5xl">
            Nuestra Tienda 🛍️ 
          </h2>
        </div>

        <div className="hidden sm:flex items-center justify-between px-4 sm:px-6 lg:px-0 animate-fade-down animate-duration-[1000ms] animate-delay-[500ms]">
          <h2 className="text-2xl font-bold text-blueText"> Productos destacados</h2>
          <Link to="https://co.mitienda.la/nuestratierra" className="block text-lg font-semibold text-blueText hover:text-[#458ea8]">
            Ver todos
            <span aria-hidden="true"> &rarr;</span>
          </Link>
        </div>

      <Swiper
        modules={[Autoplay]}
        spaceBetween={20}
        navigation={false}
        loop={true}
        autoplay={{
          delay: 2500, // ⏳ 2.5 segundos
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
                  className="w-full h-72 sm:h-80 object-contain sm:object-cover"
                />
                <div className="p-3 text-center">
                    <div className="mt-6 text-2xl sm:text-lg">
                      <h3 className="mt-1 text-teal-600 font-semibold">
                          <span className="absolute inset-0" />
                          {product.name}
                      </h3>
                      <p className="mt-1 text-teal-600 font-bold">{product.price}</p>
                      <button className="mt-2 px-4 py-2 bg-blueText rounded-xl 
                                 font-medium text-white hover:bg-blue-950 transition">
                        Comprar
                      </button>
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
