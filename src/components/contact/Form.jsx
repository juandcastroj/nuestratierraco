export function Form({ firstName, lastName, email, message, handleChange, error, ShowError }) {
  return (
    <>
      <form
        action="https://formsubmit.co/nuestratierracorporación@gmail.com"
        method="POST"
        className="px-6 lg:px-8 py-4 sm:py-20 lg:py-28 animate-fade-down sm:animate-fade-left"
      >
        {/* Config extra para seguridad */}
        <input type="hidden" name="_next" value="http://localhost:5173/email-sent" />
        <input type="hidden" name="_captcha" value="false" />

        <div className="mx-auto max-w-xl lg:max-w-lg">
          <div className="grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2">
            <div>
              <label
                htmlFor="first-name"
                className="block text-sm/6 font-semibold text-gray-900 dark:text-gray-200"
              >
                Nombre
              </label>
              <div className="mt-2.5">
                <input
                  id="first-name"
                  name="firstName"
                  type="text"
                  autoComplete="given-name"
                  value={firstName}
                  onChange={handleChange}
                  required
                  className="block w-full rounded-md bg-white px-3.5 py-2 text-base text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-[#033649]"
                />
              </div>
            </div>
            <div>
              <label
                htmlFor="last-name"
                className="block text-sm/6 font-semibold text-gray-900 dark:text-gray-200"
              >
                Apellido
              </label>
              <div className="mt-2.5">
                <input
                  id="last-name"
                  name="lastName"
                  type="text"
                  autoComplete="family-name"
                  value={lastName}
                  onChange={handleChange}
                  required
                  className="block w-full rounded-md bg-white px-3.5 py-2 text-base text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-[#033649]"
                />
              </div>
            </div>
            <div className="sm:col-span-2">
              <label
                htmlFor="email"
                className="block text-sm/6 font-semibold text-gray-900 dark:text-gray-200"
              >
                Correo
              </label>
              <div className="mt-2.5">
                <input
                  id="email"
                  name="email"
                  type="email"
                  autoComplete="email"
                  value={email}
                  onChange={handleChange}
                  required
                  className="block w-full rounded-md bg-white px-3.5 py-2 text-base text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-[#033649]"
                />
              </div>
            </div>
            <div className="sm:col-span-2">
              <label
                htmlFor="message"
                className="block text-sm/6 font-semibold text-gray-900 dark:text-gray-200"
              >
                Mensaje
              </label>
              <div className="mt-2.5">
                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  value={message}
                  onChange={handleChange}
                  required
                  className="block w-full rounded-md bg-white px-3.5 py-2 text-base text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-[#033649]"
                />
              </div>
            </div>
          </div>

          <div className="mt-8 flex justify-end">
            { error ? <ShowError /> : null }
            <button
              type="submit"
              className="rounded-md px-3.5 py-2.5 text-center text-sm font-semibold text-white dark:text-gray-800 shadow-sm bg-[#033649] hover:bg-[#165d77] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2"
            >
              Enviar
            </button>
          </div>
        </div>
      </form>
    </>
  );
}
