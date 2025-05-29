import { Link } from "react-router-dom";

export default function Login() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-[#9effca] to-[#60cee5]">
      <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-20 sm:py-32 lg:px-8 ">
        <div className="sm:mx-auto sm:w-full sm:max-w-sm">
          {/* <img
            alt="Your Company"
            src="https://tailwindcss.com/plus-assets/img/logos/mark.svg?color=blue&shade=900"
            className="mx-auto h-10 w-auto"
          /> */}
          <h2 className="mt-4 text-center text-2xl/9 font-bold tracking-tight text-[#033649]">
            Ingresa a tu cuenta
          </h2>
        </div>

        <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
          <form action="#" method="POST" className="space-y-6">
            <div>
              <label htmlFor="email" className="block text-sm/6 font-medium text-[#033649]">
                Correo
              </label>
              <div className="mt-2">
                <input
                  id="email"
                  name="email"
                  type="email"
                  required
                  autoComplete="email"
                  className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-[#033649] outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-blue-800 sm:text-sm/6"
                />
              </div>
            </div>

            <div>
              <div className="flex items-center justify-between">
                <label htmlFor="password" className="block text-sm/6 font-medium text-[#033649]">
                  Constraseña
                </label>
                <div className="text-sm">
                  <Link to="/" className="font-semibold text-[#033649] hover:text-[#204d5e]">
                    ¿Olvidaste la contraseña?
                  </Link>
                </div>
              </div>
              <div className="mt-2">
                <input
                  id="password"
                  name="password"
                  type="password"
                  required
                  autoComplete="current-password"
                  className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-[#033649] outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-blue-800 sm:text-sm/6"
                />
              </div>
            </div>

            <div>
              <button
                type="submit"
                className="flex w-full justify-center rounded-md bg-[#033649] px-3 py-1.5 text-sm/6 font-semibold text-white shadow-sm hover:bg-[#358cac] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-800"
              >
                Log in
              </button>
            </div>
          </form>

          <p className="mt-10 text-center text-sm/6 text-gray-500 animate-fade-down animate-duration-[2500ms] animate-delay-[1000ms]">
            ¿Aún no eres miembro?{' '}
            <Link to="/register" className="font-semibold text-[#033649] hover:text-[#204d5e]">
              Crea una cuenta gratis          
            </Link>
          </p>
        </div>
      </div>
    </div>
  )
}
