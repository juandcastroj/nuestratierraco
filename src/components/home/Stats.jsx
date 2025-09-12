import { stats } from "../../constants/stats";

export default function Stats() {
  return (
    <>
      <div className="bg-[#9fffcb] opacity-95 py-20 sm:py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl lg:max-w-7xl">

            <div className="text-center text-[#004e64] sm:max-w-4xl mx-auto animate-fade-right animate-duration-[2500ms] animate-delay-[500ms]">
              <h2 className="text-balance text-4xl font-semibold tracking-tight sm:text-5xl">
                La gestión de residuos plásticos como una oportunidad</h2>
              <p className="mt-4 text-lg/8">
                  Recuperamos el plástico a través de donaciones comunitarias.
                  Trabajamos con PP, HDPE (envases de aseo, cuidado personal,
                  tapas, entre otros) y PLAde impresión 3D.</p>  <br />
              <p className="mt-2 text-2xl font-bold">
                Recuperamos:</p>
            </div>

            <dl className="mt-10 grid grid-cols-1 gap-0.5 overflow-hidden rounded-2xl text-center sm:grid-cols-2 lg:grid-cols-4 animate-fade-left animate-duration-[2500ms] animate-delay-[500ms]">
              {stats.map((stat) => (
                <div key={stat.id} className="flex flex-col bg-white/50 p-8">
                  <dt className="text-base font-bold text-[#004e64] leading-normal mt-3">{stat.name}</dt>
                  <dd className="order-first text-4xl font-extrabold text-[#004e64]">{stat.value}</dd>
                </div>
              ))}
            </dl>

          </div>
        </div>
      </div>
    </>
  )
}

