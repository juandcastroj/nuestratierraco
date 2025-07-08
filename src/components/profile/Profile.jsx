import { useNavigate } from "react-router-dom";
import { logout } from "../../services/auth";
import Breadcrumbs from "./Breadcrumbs";

export default function Profile() {
    const navigate = useNavigate();

    const handleLogout = async () => {
      await logout();
      navigate("/auth");
    };

  return (
    <>
      <Breadcrumbs />

      <main className="mx-auto max-w-lg px-4 pt-10 pb-12 lg:pb-16">
        <form>
          <div className="space-y-6">
            <div>
              <h1 className="text-lg/6 font-medium text-gray-900">Hola, <span>" "</span>.</h1>
              <h1 className="text-lg/6 mt-2 font-medium text-gray-900">Tienes <span>" "</span> PetCoins 🪙</h1>
              <p className="mt-1 text-sm text-gray-500">
                Canjea tus Petcoins acumulados por nuestros productos, cuantos mas PetCoins tengas, mejores productos podrás tener.
              </p>
            </div>

            <div>
              <label htmlFor="tags" className="block text-sm/6 font-medium text-gray-900">
                Categorías
              </label>
              <div className="mt-2">
                <input
                  id="tags"
                  name="tags"
                  type="text"
                  className="block w-full rounded-md border-2 border-blueText bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 outline-sky-600 sm:text-sm/6"
                />
              </div>
            </div>

            <div className="flex justify-end gap-x-3">
              <button
                type="submit"
                className="rounded-md bg-sky-500 px-3 py-2 text-sm font-semibold text-white shadow-xs hover:bg-sky-600 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sky-500"
              >
                Canjea tus puntos 
              </button>
              <button
                onClick={handleLogout}
                type="button"
                className="rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-xs ring-1 ring-gray-300 ring-inset hover:bg-gray-50"
              >
                log out
              </button>
            </div>
          </div>
        </form>
      </main>
    </>
  )
}
