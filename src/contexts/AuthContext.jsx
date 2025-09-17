import { createContext, useContext, useEffect, useState } from "react";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { doc, getDoc } from "firebase/firestore";
import { auth, db } from "../firebase";

const AuthContext = createContext();

export const useAuth = () => useContext(AuthContext);

export const AuthProvider = ({ children }) => {

  const [firebaseUser, setFirebaseUser] = useState(null);
  const [userData, setUserData] = useState(null);
  const [loading, setLoading] = useState(true);

  const logout = async () => {
    try {
      await signOut(auth);
      //console.log("Sesión cerrada exitosamente.");
      setFirebaseUser(null);
      setUserData(null);
      alert("Sesión cerrada exitosamente.");
    } catch (error) {
      console.error("Error al cerrar sesión:", error.message);
    }
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, async (user) => {
      setFirebaseUser(user);

      if (user) {
        try {
          const userRef = doc(db, "usuarios", user.uid);
          const snap = await getDoc(userRef);

          if (snap.exists()) {
            const data = snap.data();
            setUserData(data);
          } else {
            console.warn("El usuario no existe en Firestore.");
            setUserData(null);
          }
        } catch (error) {
          console.error("Error al obtener el usuario desde Firestore:", error);
          setUserData(null);
        }
      } else {
        setUserData(null);
      }

      setLoading(false);
    });

    return () => unsubscribe();
  }, [firebaseUser]);

  // Derivar firstName desde userData.name
  const firstName = userData?.name?.split(" ")[0] || "";

  return (
    <AuthContext.Provider
      value={{ firebaseUser, userData, firstName, loading, logout }}
    >
      {children}
    </AuthContext.Provider>
  );
};
