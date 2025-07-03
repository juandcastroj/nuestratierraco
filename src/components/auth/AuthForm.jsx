import { useState } from "react";
import { register, login } from "../../services/auth";

export default function AuthForm() {

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
        await register(email, password);
        setMsg("Usuario registrado correctamente");
      } else {
        await login(email, password);
        setMsg("Inicio de sesión exitoso");
      }
    } catch (err) {
      setMsg(err.message);
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
              className="w-full p-2 border rounded focus:border-[#033649] focus:outline-none"
              required
            />
            <input
              type="password"
              placeholder="Contraseña"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full p-2 border rounded focus:border-[#033649] focus:outline-none"
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

          {msg && (
            <div className="mt-4 text-center text-sm font-semibold text-red-600">
              {msg}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
