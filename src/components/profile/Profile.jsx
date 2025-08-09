import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../../contexts/AuthContext";
import Breadcrumbs from "./Breadcrumbs";
import Loading from "../loading/Loading";
import bgImg from "../../assets/images/petcoins/bg-profile-card.png";

export default function Profile() {

    const navigate = useNavigate();
    const { firebaseUser, userData, loading, logout } = useAuth();

    if (loading) return <Loading />;
    // if (!firebaseUser) return <p>No has iniciado sesión.</p>;

    const handleLogout = async () => {
      await  logout();
      navigate("/auth");
    };

  return (
    <>
      <div className="min-h-full py-8 sm:pt-0 bg-gradient-to-b from-[#9effca] to-[#60cee5]">
        <Breadcrumbs />

        <div className="max-w-sm w-full mx-auto my-24 sm:my-16 bg-white/40 shadow-md rounded-lg overflow-hidden relative">        
          <div className="bg-transparent px-6 pt-6 sm:px-10">
            <img
              src={bgImg}
              alt="Sección de perfil"
              className="rounded-xl mx-auto w-full max-w-[250px] sm:max-w-none"
            />
          </div>

          <div className="absolute top-[150px] sm:top-[170px] left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10">
            <img
              src={firebaseUser.photoURL}
              alt="foto de perfil"
              className="w-24 rounded-full border-4 border-white shadow-lg"
            />
          </div>

          <div className="pt-20 px-4 sm:px-6 pb-6 text-center">
            <h2 className="text-lg sm:text-xl font-semibold mb-2">{userData?.name || firebaseUser.displayName}</h2>
            <p className="text-gray-600 text-sm mb-4">
                  {firebaseUser.email}              
            </p>

            <p className="text-gray-600 text-sm mb-4">
              Tienes:   
              <span className="text-gray-800 text-base font-semibold mx-2">
                {userData?.petcoins ?? "0"} PetCoins 🪙
              </span>
            </p>

            <div className="flex justify-end gap-x-3">
              <Link
                to="/tienda"
                className="rounded-md bg-[#01aaeb] px-3 py-2 text-sm font-semibold text-white shadow-xs hover:bg-sky-600 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sky-500"
              >
                Canjea tus puntos 
              </Link>
              <button
                onClick={handleLogout}
                type="button"
                className="rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-xs ring-1 ring-gray-300 ring-inset hover:bg-gray-50"
              >
                logout
              </button>
            </div>

          </div>
        </div>
      </div>
    </>
  )
}
