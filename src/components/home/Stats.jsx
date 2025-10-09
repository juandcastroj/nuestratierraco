import { stats } from "../../constants/stats";

export default function Stats() {
  return (
    <>
      <div className="bg-gradient-to-b from-[#affff4] to-[#60cee5] py-20 sm:py-24">
        <div className="mx-auto max-w-6xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl lg:max-w-7xl">

            <div className="text-center text-[#004e64] sm:max-w-4xl mx-auto animate-fade-right animate-duration-[2500ms] animate-delay-[500ms]">
              <h2 className="text-balance font-BubbleboddyNeue text-4xl font-semibold tracking-tight sm:text-5xl">
                La gestión de residuos plásticos como una oportunidad</h2>
              <p className="mt-4 font-OpunMai">
                  Recuperamos el plástico a través de donaciones comunitarias.
                  Trabajamos con PP (Polipropileno) [♻️5], HDPE (Polietileno de Alta Densidad)  [♻️2]  y PLA (Ácido Poliláctico).</p>  <br />
                  <p className="font-OpunMai">
                  El <strong>HDPE y el PP</strong>  los encuentras, por ejemplo, en tapas de botellas, envases de shampoo, jabón o aceite de motor.
                  El <strong>PLA</strong> , por otro lado, es común en la industria de la impresión 3D. Aunque suene muy técnico, también genera residuos, ¡y esos son los que aprovechamos para reciclar! </p>
              <p className="mt-8 text-2xl font-bold">
                Nuestras cifras:</p>
            </div>

            <dl className="mt-6 grid grid-cols-1 gap-0.5 overflow-hidden rounded-2xl text-center lg:grid-cols-3 animate-fade-left animate-duration-[2500ms] animate-delay-[500ms]">
              {stats.map((stat) => (
                <div key={stat.id} className="flex flex-col bg-white/50 p-8">
                  <dt className="text-base font-bold font-OpunMai text-[#004e64] leading-normal mt-3">{stat.name}</dt>
                  <dd className="order-first text-4xl font-OpunMai font-semibold text-[#004e64] animation hover:animate-rotate-x">{stat.value}</dd>
                </div>
              ))}
            </dl>

          </div>
        </div>
      </div>
    </>
  )
}

