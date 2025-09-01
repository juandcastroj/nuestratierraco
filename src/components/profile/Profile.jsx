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
      <div className="min-h-full bg-black">
        <Breadcrumbs />

        <div className="flex min-h-[60vh]">

          <div className="flex flex-1 flex-col lg:flex-none px-4 py-12 sm:px-6 lg:px-32">
            <div className="flex min-h-full justify-center">

              <div className="flex flex-1 flex-col justify-center px-4 sm:px-6 lg:flex-none max-w-sm w-full mx-auto my-20 sm:my-8 bg-white/90 shadow-md rounded-lg overflow-hidden relative">        
                <div className="bg-transparent px-6 pt-6 sm:px-10">
                  <img
                    src={bgImg}
                    alt="Sección de perfil"
                    className="rounded-xl mx-auto w-full max-w-[250px] sm:max-w-none brightness-75"
                  />
                </div>

                <div className="absolute top-[150px] sm:top-[170px] left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10">
                  <img
                    src={firebaseUser.photoURL || "https://media.istockphoto.com/id/1130884625/vector/user-member-vector-icon-for-ui-user-interface-or-profile-face-avatar-app-in-circle-design.jpg?s=612x612&w=0&k=20&c=1ky-gNHiS2iyLsUPQkxAtPBWH1BZt0PKBB1WBtxQJRE="}
                    alt="tu foto de perfil"
                    className="w-24 rounded-full border-4 border-white shadow-lg"
                  />
                </div>

                <div className="pt-20 px-4 sm:px-6 pb-6 text-center">
                  <h2 className="text-lg sm:text-xl font-semibold mb-[2px] text-blueText">{userData?.name || firebaseUser.displayName}</h2>
                  <p className="text-gray-600 text-sm mb-4">
                        {firebaseUser.email}              
                  </p>

                  <p className="text-gray-600 text-sm mb-4">
                    Tienes:   
                    <span className="text-blueText text-base font-semibold mx-2">
                      {userData?.petcoins ?? "0"} PetCoins 🪙
                    </span>
                  </p>

                  <div className="flex justify-center gap-x-3">
                    <Link
                      to="/tienda"
                      className="rounded-md bg-[#0589bd] px-3 py-2 text-sm font-semibold text-white shadow-xs hover:bg-sky-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sky-500"
                    >
                      Canjea tus puntos 
                    </Link>
                    <button
                      onClick={handleLogout}
                      type="button"
                      className="rounded-md bg-white hover:bg-red-600 px-3 py-2 text-sm font-semibold text-gray-900 hover:text-white shadow-xs ring-1 ring-gray-300 ring-inset"
                    >
                      logout
                    </button>
                  </div>

                </div>
              </div>

            </div>
          </div>

          <div className="relative hidden w-0 flex-1 md:block">
            <img alt="login image" src="https://wallpapers.com/images/featured/mountain-landscape-background-rg7kvv47l0ovwv5y.jpg" 
              className="absolute inset-0 size-full object-cover"/>
          </div>

        </div>

    </div>
    </>
  )
}
