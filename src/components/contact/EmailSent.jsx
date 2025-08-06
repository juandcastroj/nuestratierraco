import { Link } from "react-router-dom";

export default function EmailSent() {
  return (
    <>
      <main className="relative isolate min-h-full">
        <img
          alt="Background section with a blurred image of a landscape"
          src="https://images.unsplash.com/photo-1545972154-9bb223aac798?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=3050&q=80&exp=8&con=-15&sat=-75"
          className="absolute inset-0 -z-10 size-full object-cover object-top"
        />
        <div className="mx-auto max-w-7xl px-6 py-32 text-center sm:py-40 lg:px-8">
          <p className="text-base/8 font-semibold text-white">¡Gracias!</p>
          <h1 className="mt-4 text-3xl sm:text-7xl font-semibold text-white ">
            Tu correo ha sido enviado
          </h1>
          <p className="mt-6 text-lg font-medium text-pretty text-white/70 sm:text-xl/8">
            Nos pondremos en contacto contigo lo antes posible. <br />
            ¡Gracias por tu interés en NuestraTierra!
          </p>
          <div className="mt-10 flex justify-center">
            <Link to="/" className="text-sm/7 font-semibold text-white hover:text-white/90">
              <span aria-hidden="true">&larr;</span> Volver al inicio
            </Link>
          </div>
        </div>
      </main>
    </>
  )
}
