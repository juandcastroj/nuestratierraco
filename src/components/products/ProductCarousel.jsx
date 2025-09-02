import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation, Autoplay } from "swiper/modules";

const products = [
  { id: 1, name: "Producto 1", img: "https://via.placeholder.com/200x200?text=Prod+1", link: "https://tu-tienda.com/producto/1" },
  { id: 2, name: "Producto 2", img: "https://via.placeholder.com/200x200?text=Prod+2", link: "https://tu-tienda.com/producto/2" },
  { id: 3, name: "Producto 3", img: "https://via.placeholder.com/200x200?text=Prod+3", link: "https://tu-tienda.com/producto/3" },
  { id: 4, name: "Producto 4", img: "https://via.placeholder.com/200x200?text=Prod+4", link: "https://tu-tienda.com/producto/4" },
  { id: 5, name: "Producto 5", img: "https://via.placeholder.com/200x200?text=Prod+5", link: "https://tu-tienda.com/producto/5" },
  { id: 6, name: "Producto 6", img: "https://via.placeholder.com/200x200?text=Prod+6", link: "https://tu-tienda.com/producto/6" },
  { id: 7, name: "Producto 7", img: "https://via.placeholder.com/200x200?text=Prod+7", link: "https://tu-tienda.com/producto/7" },
  { id: 8, name: "Producto 8", img: "https://via.placeholder.com/200x200?text=Prod+8", link: "https://tu-tienda.com/producto/8" },
];

export default function ProductCarousel() {
  return (
    <div className="w-full max-w-6xl mx-auto px-4">
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
        {products.map((product) => (
          <SwiperSlide key={product.id}>
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
                  className="w-full h-48 object-cover"
                />
                <div className="p-3 text-center">
                  <h3 className="text-sm font-semibold text-gray-800">
                    {product.name}
                  </h3>
                </div>
              </div>
            </a>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
