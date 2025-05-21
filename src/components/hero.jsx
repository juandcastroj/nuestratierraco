export default function Hero() {

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#9effca] to-[#60cee5]">
      <div className="relative isolate px-6 pt-14 lg:px-8">
        <div className="mx-auto max-w-2xl py-32">
        
          <div className="text-center">
            <h1 className="text-balance text-5xl font-extrabold text-[#033649] sm:text-7xl">
              Corporacion Nuestra Tierra.
            </h1>
            <p className="mt-8 text-pretty text-lg font-medium text-[#004e64] sm:text-xl/8">
              Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui lorem cupidatat commodo. Elit sunt amet
              fugiat veniam occaecat.
            </p>
            <div className="mt-10 flex items-center justify-center gap-x-6">
              <a
                href="#"
                className="rounded-md bg-[#004e64] px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-[#317081] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
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
