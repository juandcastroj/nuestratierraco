import { createContext, useEffect, useState } from "react";
import { onAuthStateChanged } from "firebase/auth";
import { doc, getDoc } from "firebase/firestore";
import { auth, db } from "../firebase";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {

  const [firebaseUser, setFirebaseUser] = useState(null); // usuario de Firebase auth
  const [userData, setUserData] = useState(null); // datos desde Firestore
  const [loading, setLoading] = useState(true);

    // Escucha cambios en el estado de autenticación
    // y obtiene los datos del usuario desde Firestore
    // Almacena el usuario de Firebase y sus datos en el contexto
    // Muestra un loading mientras se verifica el estado de autenticación

    useEffect(() => {
      const unsub = onAuthStateChanged(auth, async (user) => {
      setFirebaseUser(user);

      if (user) {
        // Search firestore user data
        const userRef = doc(db, "users", user.uid);
        const docSnap = await getDoc(userRef);

        if (docSnap.exists()) {
          setUserData(docSnap.data());
        } else {
          console.warn("El documento del usuario no existe en Firestore.");
          setUserData(null);
        }
      } else {
        setUserData(null);
      }

        setLoading(false);
      });

      return () => unsub();
    }, []);

  return (
    <AuthContext.Provider value={{ firebaseUser, userData, loading }}>
      {children}
    </AuthContext.Provider>
  );
};
