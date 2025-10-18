import { useEffect } from "react";
import { Link } from "react-router-dom";

export default function PetCoinsInfo() {

  useEffect(() => {
    document.title = "PetCoins - Nuestra Tierra";
  }, [])

  return (
    <div className="overflow-hidden bg-[#b6f3ff] py-24 sm:py-32">
     <section className="w-full flex justify-center px-4 py-10">
      <div className="max-w-5xl w-full text-blueText font-OpunMai space-y-6">
        {/* Título */}
        <div>
          <h2 className="text-2xl font-bold">
            PET COINS 🪙 — <span className="font-normal">Nuestra moneda ecológica</span>
          </h2>
          <p className="mt-3">
            PET COINS es una iniciativa de la Corporación{" "}
            <a href="#" className="text-blueButton hover:underline">
              NuestraTierra
            </a>{" "}
            que convierte el reciclaje en una acción con valor real.
          </p>
          <p className="mt-2">
            Es una moneda ecológica creada para{" "}
            <strong>reconocer y recompensar</strong> el compromiso ambiental de
            las personas, empresas y comunidades que participan en la
            recuperación de plásticos.
          </p>
        </div>

        {/* Cómo funciona */}
        <div>
          <h3 className="text-lg font-semibold text-blueText mb-2">¿Cómo funciona?</h3>
          <ol className="list-decimal list-inside space-y-2">
            <li>Entrega tus residuos plásticos limpios y clasificados en nuestra sede</li>
            <li>
              Por cada kilo recibido, ganas <strong>5 PET COINS</strong>, nuestra moneda verde.
            </li>
            <li>Regístrate <Link to={'/auth'} className="font-semibold">aquí</Link> y acumula tus PET COINS en tu cuenta</li>
            <li>
              Puedes intercambiarlos por productos sostenibles, talleres,
              certificaciones o experiencias ambientales de{" "}
              <a href="#" className="text-blueText hover:underline">
                NuestraTierra
              </a>.
            </li>
          </ol>
        </div>

        {/* Materiales */}
        <div>
          <h3 className="text-lg font-semibold text-blueText mb-2">¿Qué materiales recibimos?</h3>
          <p className="mb-3">
            Trabajamos principalmente con los siguientes tipos de plástico:
          </p>
          <ul className="space-y-2 list-disc list-inside">
            <li>
              <strong>PLA (Ácido Poliláctico):</strong> utilizado en impresión 3D.
            </li>
            <li>
              <strong>HDPE (Polietileno de alta densidad):</strong> envases de productos de aseo,
              detergentes, champús, entre otros.
            </li>
            <li>
              <strong>PP (Polipropileno):</strong> tapas de botellas, envases de alimentos,{" "}
              <span className="italic">pajillas</span> y envases de yogurt.
            </li>
            <li>
              <strong>PS (Poliestireno):</strong> vasos de tinto, cucharas y utensilios desechables.
            </li>
          </ul>
        </div>
      </div>
    </section>
    </div>
  )
}
