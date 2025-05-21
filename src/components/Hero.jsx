export default function Hero() {

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#9effca] to-[#60cee5]">
      <div className="relative isolate px-6 pt-14 lg:px-8">
        <div className="mx-auto max-w-2xl py-32">
        
          <div className="text-center">
            <h1 className="text-balance text-5xl sm:text-7xl font-extrabold text-[#033649] animate-fade-down animate-duration-[2500ms] animate-delay-[500ms]">
              Corporación Nuestra Tierra
            </h1>
            <p className="mt-8 text-pretty text-lg sm:text-xl font-medium text-[#004e64]  animate-fade-down animate-duration-[2200ms] animate-delay-[800ms]">
              JUNTOS SOMOS EL CAMBIO <br />
              JUNTOS SOMOS NUESTRA TIERRA. <br />
              {/* <span className="text-[#004e64]">Transformamos el plástico en oportunidades.</span> */}
            </p>
            <div className="mt-10 flex items-center justify-center gap-x-6 animate-fade-down animate-duration-[2200ms] animate-delay-[800ms]">
              <a
                href="#"
                className="rounded-full bg-[#004e64] px-3.5 py-2.5 text-base font-semibold text-white shadow-sm hover:bg-[#317081] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              >
                Get started
              </a>
              <a href="#" className="text-base font-semibold text-[#004e64]">
                Learn more <span aria-hidden="true hover:animate-fade-right">→</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
