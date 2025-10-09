import { Link } from "react-router-dom";

export default function PetcoinsBannerMobile() {
  return (
    <div className="sticky bottom-0 start-0 z-30 sm:hidden flex items-center justify-between bg-blueText font-OpunMai text-white px-4 py-3">
      {/* Icono */}
      <div className="flex items-center space-x-3">
        <span className="text-3xl">🪙</span>
        <div>
          <p className="text-base font-semibold text-[#9fffcb]">Petcoins</p>
          <p className="text-xs text-white">
            ¡Canjealos por nuestros productos!
          </p>
        </div>
      </div>

      {/* Botón */}
      <Link
        to="/petcoins"
        className="bg-[#25a18e] text-white font-medium text-sm px-4 py-1.5 rounded-full"
      >
        Ver más
      </Link>
    </div>
  );
}
