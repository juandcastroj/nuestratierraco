import { Link } from "react-router-dom";
import tortleImg from "../../assets/images/home/hero-bg.png";

export default function Hero() {
  return (
    <div className="relative min-h-[90vh] sm:min-h-screen flex items-center justify-center bg-gradient-to-b from-[#affff4] to-[#60cee5] overflow-hidden">
      
      {/* Texto */}
      <div className="relative z-20 mx-auto max-w-2xl py-12 sm:py-32 text-center">
        <h1 className="text-5xl sm:text-7xl font-extrabold text-[#033649] animate-fade-down animate-duration-[2500ms] animate-delay-[500ms]">
          Corporación NuestraTierra
        </h1>

        <p className="mt-8 text-lg sm:text-xl font-medium text-[#023246] animate-fade-down animate-duration-[2200ms] animate-delay-[800ms]">
          Juntos somos el cambio <br />
          Juntos somos nuestra tierra.
        </p>

        <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6 animate-fade-down animate-duration-[2200ms] animate-delay-[800ms]">
          <Link
            to="/products"
            className="rounded-2xl bg-[#023246] hover:bg-[#215163] px-4 py-3 text-base font-semibold text-[#9fffcb] shadow-sm"
          >
            Nuestros productos
          </Link>
          <Link
            to="/inscriptions"
            className="rounded-2xl border-2 border-[#023246] bg-transparent px-4 py-3 text-base font-semibold text-[#023246] hover:text-[#096288] shadow-sm"
          >
            Haz parte del cambio
          </Link>
        </div>
      </div>

      {/* Imagen */}
      <img
        src={tortleImg}
        alt="Planeta Tierra"
        className="absolute bottom-0 right-0 w-1/2 max-w-md z-10 sm:animate-fade-left animate-duration-[2500ms] animate-delay-[1000ms]"
      />
    </div>
  );
}
