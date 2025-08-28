import { useState } from "react";
import { sendEmailVerification } from "firebase/auth";
import { useAuth } from "../../contexts/AuthContext";
import { Link } from "react-router-dom";

export default function VerifyEmail() {
  
  const { firebaseUser } = useAuth();
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);

  const handleResendVerification = async () => {
    if (!firebaseUser) return;
    try {
      setLoading(true);
      await sendEmailVerification(firebaseUser);
      setMessage("✅ Correo de verificación reenviado. Revisa tu bandeja de entrada.");
    } catch (error) {
      console.error(error);
      setMessage("❌ Hubo un error al reenviar el correo.");
    } finally {
      setLoading(false);
    }
  };

  return (

      <div className="flex items-center justify-center min-h-screen bg-gray-100 px-4">
        <div className="bg-white p-8 rounded-2xl shadow-lg w-full max-w-md text-center">
          <h2 className="text-2xl font-bold text-blueText mb-4">
            Verifica tu correo electrónico
          </h2>

          <p className="text-gray-600 mb-2">
            Te enviamos un correo a:{" "}
            <span className="font-semibold text-blueText">{firebaseUser?.email}</span>
          </p>
          <p className="text-gray-600 mb-6">
            Por favor, revisa tu bandeja de entrada y sigue el enlace para activar tu cuenta.
          </p>

          <button
            onClick={handleResendVerification}
            disabled={loading}
            className={`w-full py-2 px-4 rounded-lg font-medium transition 
              ${loading 
                ? "bg-gray-400 cursor-not-allowed text-white" 
                : "bg-blueButton hover:bg-blue-800 text-white"}`}
          >
            {loading ? "Enviando..." : "Reenviar correo de verificación"}
          </button>

          {message && (
            <p className="mt-4 text-sm text-green-600">{message}</p>
          )}

          <p className="mt-6 text-sm text-gray-500">
            ¿Prefieres ingresar con otra cuenta?{" "}
            <Link to="/auth" className="text-blueText hover:underline font-medium">
              Inicia sesión aquí
            </Link> 
          </p>

          <p className="mt-2 text-sm text-gray-500">
            Si ya verificaste tu correo{" "}
            <p onClick={() => {location.reload()}} className="text-blueText hover:underline font-medium cursor-pointer">
              Ve a tu cuenta
            </p>
          </p>
        </div>
      </div>


  );
}
