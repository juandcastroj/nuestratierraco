import { colors } from "../../constants/colors";

export default function Combinations () {
  return (
    <section className="max-w-6xl mx-auto px-12 pb-16 py-0 font-OpunMai">
      {/* Franja superior */}
      <div className="bg-teal-600 max-w-5xl text-white text-center py-3 rounded-2xl shadow-md mb-10">
        <p className="text-base md:text-lg font-semibold">
          Los colores de nuestros productos rinden tributo a la riqueza natural de Colombia
        </p>
      </div>

      {/* Título */}
      <h2 className="text-3xl md:text-4xl font-extrabold text-center text-teal-600 mb-2">
        COLORES DISPONIBLES
      </h2>
      <p className="text-center text-lg text-teal-500 mb-10">
        Conoce algunas de nuestras combinaciones:
      </p>

      {/* Grid de colores */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
        {colors.map((color, index) => (
          <div key={index} className="flex items-start space-x-4">
            <img
              src={color.imagen}
              alt={color.nombre}
              className="w-24 h-24 object-cover rounded-full shadow-md"
            />
            <div>
              <h3 className="text-xl font-bold text-teal-700">
                {color.nombre}
              </h3>
              <p className="text-gray-700">{color.descripcion}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Footer */}
      <p className="text-center mt-10 text-lg text-teal-600 font-medium">
        ¿Tienes otros colores en mente? ¡Lo hacemos realidad contigo!
      </p>

      {/* Instagram */}
      <div className="flex justify-center mt-6">
        <span className="bg-gray-100 text-teal-600 px-4 py-2 rounded-full font-semibold shadow-sm">
          @nuestratierraco
        </span>
      </div>
    </section>
  );
};
