import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../../contexts/AuthContext";
import { logout } from "../../services/auth";
import Breadcrumbs from "./Breadcrumbs";

export default function Profile() {
    const navigate = useNavigate();
    const { user } = useContext(AuthContext);
    
      if (!user) return <p className="text-center pt-28">Cargando...</p>;

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
              <h1 className="text-lg/6 font-medium text-gray-900">Hola, <span>{user.displayName}</span>.</h1>
               <img src={user.photoURL} alt="Foto de perfil" style={{ borderRadius: "50%", width: 100 }} />
                <p className="mt-1 text-sm text-gray-500">
                  {user.email}
                </p>
              <h1 className="text-lg/6 mt-2 font-medium text-gray-900">Tienes <span>0</span> PetCoins 🪙</h1>
          
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
