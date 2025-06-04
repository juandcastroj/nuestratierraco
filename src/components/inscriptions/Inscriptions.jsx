export default function Inscriptions() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-[#9effca] to-[#60cee5]">
      <div className="mx-16 top-20 right-16 absolute">
        <a href="https://docs.google.com/forms/d/e/1FAIpQLScJAYqcYVveiataKtLGgJrvs_wIxLc-08961UVv9sOmuuOH2w/viewform" className="text-base font-semibold text-[#033649] hover:text-[#336f85]">
          Convocatoria Profes <span aria-hidden="true">&rarr;</span>
        </a>
      </div>

      <div className="flex min-h-full max-w-full justify-center px-6 py-8 pb-16 sm:py-16 lg:px-auto">
        <iframe className="mt-16 h-[44rem] sm:h-[32rem] w-96 sm:w-[48rem] animate-fade-down animate-duration-[2500ms] animate-delay-[500ms]" src="https://docs.google.com/forms/d/e/1FAIpQLSfay4GANdACNPtd1QEER4TzjqNL9sqJxdWx1VXL26KwfZ_j7g/viewform"></iframe>
      </div>
    </div>
  )
}
