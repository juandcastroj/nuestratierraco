// import { useEffect, useState } from "react";
// import { onAuthStateChanged } from "firebase/auth";
// import { auth, db } from "../firebase";
// import { doc, getDoc } from "firebase/firestore";

// export const useAuth = () => {
//   // Hook para obtener el usuario autenticado y sus datos de Firestore
//   // Retorna un objeto con el usuario y sus datos, o null si no hay usuario
//   // Utiliza onAuthStateChanged para escuchar cambios en el estado de autenticación
//   // y getDoc para obtener los datos del usuario desde Firestore

//   const [user, setUser] = useState(null);

//   useEffect(() => {
//     const unsub = onAuthStateChanged(auth, async (firebaseUser) => {
//       if (firebaseUser) {
//         const docRef = doc(db, "users", firebaseUser.uid);
//         const docSnap = await getDoc(docRef);
//         setUser({ uid: firebaseUser.uid, ...docSnap.data() });
//       } else {
//         setUser(null);
//       }
//     });

//     return () => unsub();
//   }, []);

//   return user;
// };
