import { stats } from "../../constants/stats";

export default function Stats() {
  return (
    <>
      <div className="bg-[#033649] py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl lg:max-w-7xl">

            <div className="text-center sm:max-w-4xl mx-auto animate-fade-right animate-duration-[2500ms] animate-delay-[500ms]">
              <h2 className="text-balance text-4xl font-semibold tracking-tight text-white sm:text-5xl">
                La gestión de residuos plásticos como una oportunidad</h2>
              <p className="mt-4 text-lg/8 text-gray-300">
                  Recuperamos el plástico a través de donaciones comunitarias.
                  Trabajamos con PP, HDPE (envases de aseo, cuidado personal,
                  tapas, entre otros) y PLAde impresión 3D.</p>  <br />
              <p className="mt-2 text-2xl text-gray-200 font-bold">
                Recuperamos:</p>
            </div>

            <dl className="mt-16 grid grid-cols-1 gap-0.5 overflow-hidden rounded-2xl text-center sm:grid-cols-2 lg:grid-cols-4 animate-fade-left animate-duration-[2500ms] animate-delay-[500ms]">
              {stats.map((stat) => (
                <div key={stat.id} className="flex flex-col bg-white/5 p-8">
                  <dt className="text-base font-semibold text-gray-300 leading-normal mt-3">{stat.name}</dt>
                  <dd className="order-first text-3xl font-semibold tracking-tight text-white">{stat.value}</dd>
                </div>
              ))}
            </dl>

          </div>
        </div>
      </div>
    </>
  )
}

