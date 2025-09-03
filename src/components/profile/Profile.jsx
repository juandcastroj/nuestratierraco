import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../../contexts/AuthContext";
import Breadcrumbs from "./Breadcrumbs";
import Loading from "../loading/Loading";
import defaultUserImage from "../../assets/images/account/user-avatar.jpg";
import bgProfileImage from "../../assets/images/account/bg-profile-card.png";
import landscapeImage from "../../assets/images/account/profile-section-bg.jpg";

export default function Profile() {
  const navigate = useNavigate();
  const { firebaseUser, userData, loading, logout } = useAuth();

  if (loading) return <Loading />;

  const handleLogout = async () => {
    await logout();
    navigate("/auth");
  };

  return (
    <>
      <div className="min-h-full bg-blueText">
        <Breadcrumbs handleLogout={handleLogout}/>

        <div className="flex min-h-[60vh]">
          <div className="flex flex-1 flex-col lg:flex-none px-4 py-12 sm:py-16 sm:px-6 lg:px-32">
            <div className="flex min-h-full justify-center">
              <div className="relative flex flex-col justify-center max-w-md w-full mx-auto my-20 sm:my-8 bg-white shadow-lg rounded-2xl overflow-hidden">

                {/* Banner */}
                <div className="relative">
                  <img
                    src={bgProfileImage}
                    alt="Sección de perfil"
                    className="h-28 sm:h-32 w-full object-cover brightness-50"
                  />
                  {/* Avatar */}
                  <div className="absolute -bottom-10 sm:-bottom-12 left-1/2 transform -translate-x-1/2">
                    <img
                      src={
                        firebaseUser.photoURL ||
                        defaultUserImage
                      }
                      alt="tu foto de perfil"
                      className="w-20 h-20 sm:w-24 sm:h-24 rounded-full border-4 border-white shadow-lg object-cover"
                    />
                  </div>
                </div>

                {/* Info */}
                <div className="pt-14 sm:pt-16 px-4 sm:px-6 pb-6 text-center">
                  <h2 className="text-base sm:text-xl font-bold text-gray-800">
                    {userData?.name || firebaseUser.displayName}
                  </h2>
                  <p className="text-gray-500 text-xs sm:text-sm mb-3">
                    {firebaseUser.email}
                  </p>

                  {/* Petcoins */}
                  <div className="inline-block bg-yellow-100 text-yellow-800 text-xs sm:text-sm font-semibold px-3 py-1 rounded-full mb-5">
                    🪙 {userData?.petcoins ?? "0"} PetCoins
                  </div>

                  {/* Botón acción */}
                  <div>
                    <Link
                      to="/productos"
                      className="w-full sm:w-auto inline-block rounded-lg bg-[#0589bd] px-4 py-2 text-sm font-semibold text-white shadow hover:bg-sky-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-sky-500"
                    >
                      Canjear PetCoins
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Imagen lateral */}
          <div className="relative hidden w-0 flex-1 md:block">
            <img
              alt="login image"
              src={landscapeImage}
              className="absolute inset-0 size-full object-cover"
            />
          </div>
        </div>
      </div>
    </>
  );
}
