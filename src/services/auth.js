import { createUserWithEmailAndPassword, sendEmailVerification, signInWithEmailAndPassword } from "firebase/auth";
import { auth, db } from "../firebase";
import { doc, setDoc } from "firebase/firestore";

export const register = async (email, password) => {
  
  try {
    const userCredential = await createUserWithEmailAndPassword(auth, email, password);
    const user = userCredential.user;
    console.log(user);

    // Enviar correo de verificación
    await sendEmailVerification(user);
    alert("Verificación enviada. Revisa tu correo.");

    // return alert("Verificación enviada. Revisa tu correo.");;

  } catch (error) {
    console.error("Error al registrar:", error.message);
    return error.message;
  }

  // Crear documento de usuario en Firestore
  // await setDoc(doc(db, "users", uid), {
  //   email,
  //   points: 0,
  //   role: "user", // puedes cambiar a "admin" manualmente desde Firestore
  // });

  //return uid;
};

export const login = async (email, password) => {

  try {
    const userCredential = await signInWithEmailAndPassword(auth, email, password);
    const user = userCredential.user;
    console.log(user);
    return "Sesión iniciada correctamente";

  } catch (error) {
    console.error("Error al iniciar sesión:", error.message);
    return error.message;
  }
};
