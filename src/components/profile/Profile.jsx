import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../../contexts/AuthContext";
import Breadcrumbs from "./Breadcrumbs";
import Loading from "../loading/Loading";
import bgProfileImage from "../../assets/images/account/bg-profile-card.png";

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
      <div className="min-h-full bg-black">
        <Breadcrumbs />

        <div className="flex min-h-[60vh]">
          <div className="flex flex-1 flex-col lg:flex-none px-4 py-12 sm:px-6 lg:px-32">
            <div className="flex min-h-full justify-center">
              <div className="flex flex-1 flex-col justify-center px-4 sm:px-6 lg:flex-none max-w-sm w-full mx-auto my-20 sm:my-8 bg-white/90 shadow-md rounded-lg overflow-hidden relative">
                <div className="bg-transparent p-6">
                  <img
                    src={bgProfileImage}
                    alt="Sección de perfil"
                    className="rounded-xl mx-auto w-full max-w-[250px] sm:max-w-none brightness-75"
                  />
                </div>

                <div className="absolute top-[150px] sm:top-[170px] left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10">
                  <img
                    src={
                      firebaseUser.photoURL ||
                      "https://media.istockphoto.com/id/1130884625/vector/user-member-vector-icon-for-ui-user-interface-or-profile-face-avatar-app-in-circle-design.jpg?s=612x612&w=0&k=20&c=1ky-gNHiS2iyLsUPQkxAtPBWH1BZt0PKBB1WBtxQJRE="
                    }
                    alt="tu foto de perfil"
                    className="w-24 rounded-full border-4 border-white shadow-lg"
                  />
                </div>

                <div className="pt-12 px-4 sm:px-6 pb-6 text-center">
                  <h2 className="text-lg sm:text-xl font-semibold mb-[2px] text-blueText">
                    {userData?.name || firebaseUser.displayName}
                  </h2>
                  <p className="text-gray-600 text-sm mb-4">
                    {firebaseUser.email}
                  </p>

                  <p className="text-gray-600 text-sm mb-4">
                    Tienes:
                    <span className="text-blueText text-base font-semibold mx-2">
                      {userData?.petcoins ?? "0"} PetCoins 🪙
                    </span>
                  </p>

                  <div className="flex justify-end gap-x-8">
                    <Link
                      to="/tienda"
                      className="rounded-md bg-[#0589bd] px-3 py-2 text-sm font-semibold text-white shadow-xs hover:bg-sky-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sky-500"
                    >
                      Canjea tus petcoins
                    </Link>

                    <button type="button" onClick={handleLogout}>
                        <svg
                          className="w-8 h-8 text-gray-500 hover:text-red-600"
                          fill="currentColor"
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 512 512"
                        >
                          <g>
                            <g>
                              <path
                                d="M237.545,255.816c9.899,0,18.468-3.609,25.696-10.848c7.23-7.229,10.854-15.799,10.854-25.694V36.547
                                  c0-9.9-3.62-18.464-10.854-25.693C256.014,3.617,247.444,0,237.545,0c-9.9,0-18.464,3.621-25.697,10.854
                                  c-7.233,7.229-10.85,15.797-10.85,25.693v182.728c0,9.895,3.617,18.464,10.85,25.694
                                  C219.081,252.207,227.648,255.816,237.545,255.816z"
                              ></path>
                              <path
                                d="M433.836,157.887c-15.325-30.642-36.878-56.339-64.666-77.084c-7.994-6.09-17.035-8.47-27.123-7.139
                                  c-10.089,1.333-18.083,6.091-23.983,14.273c-6.091,7.993-8.418,16.986-6.994,26.979c1.423,9.998,6.139,18.037,14.133,24.128
                                  c18.645,14.084,33.072,31.312,43.25,51.678c10.184,20.364,15.27,42.065,15.27,65.091c0,19.801-3.854,38.688-11.561,56.678
                                  c-7.706,17.987-18.13,33.544-31.265,46.679c-13.135,13.131-28.688,23.551-46.678,31.261c-17.987,7.71-36.878,11.57-56.673,11.57
                                  c-19.792,0-38.684-3.86-56.671-11.57c-17.989-7.71-33.547-18.13-46.682-31.261c-13.129-13.135-23.551-28.691-31.261-46.679
                                  c-7.708-17.99-11.563-36.877-11.563-56.678c0-23.026,5.092-44.724,15.274-65.091c10.183-20.364,24.601-37.591,43.253-51.678
                                  c7.994-6.095,12.703-14.133,14.133-24.128c1.427-9.989-0.903-18.986-6.995-26.979c-5.901-8.182-13.844-12.941-23.839-14.273
                                  c-9.994-1.332-19.085,1.049-27.268,7.139c-27.792,20.745-49.344,46.442-64.669,77.084c-15.324,30.646-22.983,63.288-22.983,97.927
                                  c0,29.697,5.806,58.054,17.415,85.082c11.613,27.028,27.218,50.34,46.826,69.948c19.602,19.603,42.919,35.215,69.949,46.815
                                  c27.028,11.615,55.388,17.426,85.08,17.426c29.693,0,58.052-5.811,85.081-17.426c27.031-11.604,50.347-27.213,69.952-46.815
                                  c19.602-19.602,35.207-42.92,46.818-69.948s17.412-55.392,17.412-85.082C456.809,221.174,449.16,188.532,433.836,157.887z"
                              ></path>
                            </g>
                          </g>
                          <g></g>
                          <g></g>
                          <g></g>
                          <g></g>
                          <g></g>
                          <g></g>
                          <g></g>
                          <g></g>
                          <g></g>
                          <g></g>
                          <g></g>
                          <g></g>
                          <g></g>
                          <g></g>
                          <g></g>
                        </svg>
                    </button>

                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="relative hidden w-0 flex-1 md:block">
            <img
              alt="login image"
              src="https://wallpapers.com/images/featured/mountain-landscape-background-rg7kvv47l0ovwv5y.jpg"
              className="absolute inset-0 size-full object-cover"
            />
          </div>
        </div>
      </div>
    </>
  );
}
