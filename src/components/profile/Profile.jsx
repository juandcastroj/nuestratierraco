import { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../contexts/AuthContext";
import { logout } from "../../services/auth";
import Breadcrumbs from "./Breadcrumbs";
import DefaultUserImage from "../../assets/images/petcoins/default-user.jpg";

export default function Profile() {
    const navigate = useNavigate();
    
       const { firebaseUser, userData, loading } = useContext(AuthContext);

        if (loading) return <p>Cargando datos del usuario...</p>;
        if (!firebaseUser) return <p>No has iniciado sesión.</p>;

    const handleLogout = async () => {
      await logout();
      navigate("/auth");
    };

  return (
    <>
      <Breadcrumbs />

      <main className="mx-auto max-w-lg px-4 pt-16 pb-12 lg:pb-20">
        <form>
          <div className="space-y-6">
            <div>
              <h1 className="text-lg/6 font-medium text-gray-900">Hola, <span>{userData?.name || firebaseUser.displayName}</span>.</h1>
                 
                  {firebaseUser.photoURL ? (
                      <img
                        src={firebaseUser.photoURL}
                        alt="Foto de perfil"
                        className="mt-3 mb-4"
                        style={{ width: 100, borderRadius: "50%" }}
                      />
                    )
                    :  <img
                        src={firebaseUser.photoURL}
                        alt="avatar usuario"
                        className="mt-3 mb-4 rounded-full w-[100px]"
                      /> } 

                <p className="mt-3 text-sm text-gray-500">
                   <span className="font-semibold">Email: </span> {firebaseUser.email}
                </p>
              <h1 className="text-lg/6 mt-4 font-medium text-gray-900">Tienes: <span>{userData?.petcoins ?? "Cargando..."}</span> PetCoins 🪙</h1>
          
            </div>

            <div className="flex justify-end gap-x-3">
              <Link
                to="/tienda"
                className="rounded-md bg-sky-500 px-3 py-2 text-sm font-semibold text-white shadow-xs hover:bg-sky-600 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sky-500"
              >
                Canjea tus puntos 
              </Link>
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
