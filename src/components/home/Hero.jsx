import { Link } from "react-router-dom";
import planetPhoto from "../../assets/images/hero/planetaTierra.png";

export default function Hero() {
  return (
    <div className="min-h-screen relative bg-gradient-to-b from-[#9effca] to-[#60cee5]">
      <div className="relative isolate px-6 pt-14 lg:px-8">

        <div className="mx-auto max-w-2xl pt-32 pb-12 sm:py-32">
        
          <div className="text-center">
            <h1 className="text-balance text-5xl sm:text-7xl font-extrabold text-[#033649] animate-fade-down animate-duration-[2500ms] animate-delay-[500ms]">
              Corporación Nuestra Tierra
            </h1>
            <p className="mt-8 text-pretty text-lg sm:text-xl font-medium text-[#004e64]  animate-fade-down animate-duration-[2200ms] animate-delay-[800ms]">
              JUNTOS SOMOS EL CAMBIO <br />
              JUNTOS SOMOS NUESTRA TIERRA. <br />
            </p>
            <div className="mt-10 flex items-center justify-center gap-x-6 animate-fade-down animate-duration-[2200ms] animate-delay-[800ms]">
              <Link
                to="/stack"
                className="rounded-full bg-[#004e64] px-4 py-3 text-base font-semibold text-white shadow-sm hover:bg-[#317081] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              >
                Productos 🛍️
              </Link>
              <a
                href="https://docs.google.com/forms/d/e/1FAIpQLScJAYqcYVveiataKtLGgJrvs_wIxLc-08961UVv9sOmuuOH2w/viewform"
                className="rounded-full bg-[#004e64] px-4 py-3 text-base font-semibold text-white shadow-sm hover:bg-[#317081] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              >
                Haz parte del cambio
              </a>
            </div>
          </div>
        </div>

      </div>
         <img 
            src={planetPhoto}
            alt="Planeta Tierra"
            className="w-1/2 max-w-md hidden lg:block absolute bottom-0 lg:right-0 lg:mx-0 mx-auto animate-fade-left animate-duration-[4000ms] animate-delay-[800ms]"
          />
    </div>
  )
}
