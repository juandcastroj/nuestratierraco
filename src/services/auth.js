// src/services/auth.js
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";
import { auth, db } from "../firebase";
import { doc, setDoc } from "firebase/firestore";

export const register = async (email, password) => {
  const userCredential = await createUserWithEmailAndPassword(auth, email, password);
  const uid = userCredential.user.uid;

  // Crear documento de usuario en Firestore
  await setDoc(doc(db, "users", uid), {
    email,
    points: 0,
    role: "user", // puedes cambiar a "admin" manualmente desde Firestore
  });

  return uid;
};

export const login = async (email, password) => {
  const userCredential = await signInWithEmailAndPassword(auth, email, password);
  return userCredential.user.uid;
};
