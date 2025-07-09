import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { register, login, loginWithGoogle } from "../../services/auth";

export default function AuthForm() {
  const navigate = useNavigate();

  const [isRegistering, setIsRegistering] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [msg, setMsg] = useState("");

  const validateForm = () => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailRegex.test(email)) {
      setMsg("Por favor ingresa un correo electrónico válido.");
      return false;
    }

    if (isRegistering && password.length < 8) {
      setMsg("La contraseña debe tener al menos 8 caracteres.");
      return false;
    }

    return true;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!validateForm()) return;

    try {
      if (isRegistering) {
        const registerResponse = await register(email, password);
        setMsg(registerResponse);

        //need error management here
        // if (registerResponse === "Verificación enviada. Revisa tu correo.")
        // navigate("/account"); 

      } else {
        const loginResponse = await login(email, password);
        setMsg(loginResponse);
      }
    } catch (err) {
      setMsg(err.message);
    }
  };

  const handleGoogleLogin = async () => {
  try {
    const user = await loginWithGoogle();
    if (user) {
      navigate("/mi-cuenta"); 
    }
  } catch (error) {
    alert("Error al iniciar sesión con Google.");
  }
  };

  return (
    <div className="min-h-[80vh] bg-gradient-to-b from-[#9effca] to-[#60cee5]">
      <div className="flex min-h-full flex-1 flex-col justify-center px-8 py-24">
        <div className="max-w-md mx-auto p-12 border border-white rounded-xl shadow-md mt-10">
          <h2 className="text-2xl font-bold mb-4 text-center text-[#033649]">
            {isRegistering ? "Crear Cuenta Nueva" : "Iniciar Sesión"}
          </h2>

          <form onSubmit={handleSubmit} className="space-y-4">
            <input
              type="email"
              placeholder="Correo"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full p-2 border-2 rounded focus:border-[#033649] focus:outline-none"
              required
            />
            <input
              type="password"
              placeholder="Contraseña"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full p-2 border-2 rounded focus:border-[#033649] focus:outline-none"
              required
            />
            <button
              type="submit"    
              className="w-full bg-[#033649] hover:bg-[#1f333a] text-white p-2 rounded transition"
            >
              {isRegistering ? "Registrarse" : "Iniciar Sesión"}
            </button>
          </form>

          <p className="mt-4 text-center text-sm text-gray-600">
            {isRegistering ? "¿Ya tienes cuenta?" : "¿No tienes cuenta?"}
            <button
              onClick={() => {
                setIsRegistering(!isRegistering);
                setMsg("");
              }}
              className="text-[#033649] ml-2 underline font-semibold"
            >
              {isRegistering ? "Inicia sesión" : "Regístrate"}
            </button>
          </p>


          {/* GOOGLE AND FACEBOOK */}
          <div className="mt-6">
            <div className="relative">
              <div aria-hidden="true" className="absolute inset-0 flex items-center">
                <div className="w-full border-t border-gray-200" />
              </div>
              <div className="relative flex justify-center text-sm/6 font-medium">
                <span className="bg-white px-6 text-gray-900 border-2 rounded-2xl">O ingresa con</span>
              </div>
            </div>

            <div className="mt-6 grid grid-cols-2 gap-4">
              <button
                className="flex w-full items-center justify-center gap-3 rounded-xl bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-xs ring-1 ring-gray-300 ring-inset hover:bg-gray-50 focus-visible:ring-transparent"
                onClick={handleGoogleLogin}
              >
                <svg viewBox="0 0 24 24" aria-hidden="true" className="h-5 w-5">
                  <path
                    d="M12.0003 4.75C13.7703 4.75 15.3553 5.36002 16.6053 6.54998L20.0303 3.125C17.9502 1.19 15.2353 0 12.0003 0C7.31028 0 3.25527 2.69 1.28027 6.60998L5.27028 9.70498C6.21525 6.86002 8.87028 4.75 12.0003 4.75Z"
                    fill="#EA4335"
                  />
                  <path
                    d="M23.49 12.275C23.49 11.49 23.415 10.73 23.3 10H12V14.51H18.47C18.18 15.99 17.34 17.25 16.08 18.1L19.945 21.1C22.2 19.01 23.49 15.92 23.49 12.275Z"
                    fill="#4285F4"
                  />
                  <path
                    d="M5.26498 14.2949C5.02498 13.5699 4.88501 12.7999 4.88501 11.9999C4.88501 11.1999 5.01998 10.4299 5.26498 9.7049L1.275 6.60986C0.46 8.22986 0 10.0599 0 11.9999C0 13.9399 0.46 15.7699 1.28 17.3899L5.26498 14.2949Z"
                    fill="#FBBC05"
                  />
                  <path
                    d="M12.0004 24.0001C15.2404 24.0001 17.9654 22.935 19.9454 21.095L16.0804 18.095C15.0054 18.82 13.6204 19.245 12.0004 19.245C8.8704 19.245 6.21537 17.135 5.2654 14.29L1.27539 17.385C3.25539 21.31 7.3104 24.0001 12.0004 24.0001Z"
                    fill="#34A853"
                  />
                </svg>
                <span className="text-sm/6 font-semibold">Google</span>
              </button>

              <button
                className="flex w-full items-center justify-center gap-3 rounded-xl bg-white opacity-60 px-3 py-2 text-sm font-semibold text-gray-900 shadow-xs ring-1 ring-gray-300 ring-inset hover:bg-gray-50 focus-visible:ring-transparent"
                disabled>
                <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 48 48" className="size-7 fill-[#1877F2]">
                  <path d="M42,11.5v25c0,3.03-2.47,5.5-5.5,5.5H31V28h3.62c0.51,0,0.94-0.38,1-0.88l0.37-3c0.04-0.28-0.05-0.57-0.24-0.78 C35.56,23.12,35.29,23,35,23h-4v-3.5c0-1.1,0.9-2,2-2h2c0.55,0,1-0.45,1-1v-3.38c0-0.51-0.4-0.94-0.91-0.99 C35.03,12.12,33.62,12,31.83,12c-4.4,0-6.83,2.62-6.83,7.37V23h-4c-0.55,0-1,0.45-1,1v3c0,0.55,0.45,1,1,1h4v14H11.5 C8.47,42,6,39.53,6,36.5v-25C6,8.47,8.47,6,11.5,6h25C39.53,6,42,8.47,42,11.5z"></path>
                </svg>

                <span className="text-sm/6 font-semibold">Facebook</span>
              </button>
            </div>

          </div>

          {  msg && (
            <div className="mt-4 text-center text-sm font-semibold text-red-600">
              {msg}
            </div>
          )}

        </div>
      </div>
    </div>
  );
}
