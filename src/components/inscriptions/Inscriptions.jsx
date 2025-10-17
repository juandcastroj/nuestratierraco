import img from "../../assets/images/embajadores/FOTO EMBAJADOR JEAN FERNEL.jpeg/";

export default function Inscriptions() {
  return (
  <div className="overflow-hidden bg-[#b6f3ff]">
      <div className="mx-auto max-w-2xl px-6 lg:max-w-5xl lg:px-8 py-12">
        <section className="mt-14 grid grid-cols-1 transition animate-fade-right font-OpunMai">
          <div className="lg:pr-8">
             {/* <h1 className="text-3xl font-bold text-[#004e64]">Embajadores</h1> */}
            <h2 className="text-3xl mt-4 font-semibold text-[#004e64]">“Un Embajador NuestraTierra no espera el cambio: lo crea”</h2>
            <p className="mt-6 text-base text-[#004e64]">
               Ser Embajador NuestraTierra es ser parte activa del cambio. Es creer que cada acción, por pequeña que parezca, puede transformar nuestro entorno. Nuestros Embajadores son personas, empresas o comunidades que inspiran con el ejemplo y promueven un futuro más consciente y sostenible.
            </p>
            <p className="mt-4 text-base text-[#004e64]">
              A través de su compromiso, los Embajadores impulsan NuestraTierraCO, conectando a más personas y llevando nuestro mensaje de economía circular, educación ambiental y popular, multiplicando así el impacto positivo en el planeta.            
              </p>
            <p className="mt-4 text-base text-[#004e64]">
                Cada Embajador recibe reconocimiento por su labor con el Sello NuestraTierra, que acredita su aporte al cuidado del planeta y su compromiso con la educación ambiental y la reducción de residuos.
                Porque ser un Embajador no es solo representar una marca: es llevar en las manos el propósito de cuidar a NUESTRATIERRA 
              </p>
          </div>

          <div className="mt-12 overflow-hidden text-center mx-auto flex-col">
              <img
                alt="Embajador Jean"
                src={img}
                className="block w-96 rounded-2xl mx-auto"
              />
                  <p className="text-center text-blueText">
                  Nuestro embajador Jean Fernel en Maicao, La Guajira.</p> 
            </div>
        </section>
        </div>
    </div>

  )
}
