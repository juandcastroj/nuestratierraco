import { useState } from "react";
import { addPointsToUser } from "../services/admin";
import { useAuth } from "../hooks/useAuth";

export default function AdminPanel() {
  const user = useAuth();
  const [userId, setUserId] = useState("");
  const [points, setPoints] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await addPointsToUser(userId, parseInt(points));
      alert("Puntos añadidos!");
    } catch (err) {
      alert(err.message);
    }
  };

  if (!user || user.role !== "admin") return <p>Acceso denegado</p>;

  return (
    <form onSubmit={handleSubmit}>
      <input
        placeholder="User ID"
        value={userId}
        onChange={(e) => setUserId(e.target.value)}
      />
      <input
        placeholder="Puntos"
        type="number"
        value={points}
        onChange={(e) => setPoints(e.target.value)}
      />
      <button type="submit">Agregar puntos</button>
    </form>
  );
}
