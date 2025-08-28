import { createUserWithEmailAndPassword,
         sendEmailVerification,
         signInWithEmailAndPassword,
         signInWithPopup
         } from "firebase/auth";
import { auth, googleProvider } from "../firebase";
import saveUserInFirestore from "./saveUserInFirestore";

export const register = async (email, password) => {
  
  try {
    const userCredential = await createUserWithEmailAndPassword(auth, email, password);
    const user = userCredential.user;
    console.log(user);

    await sendEmailVerification(user);
    // alert("Verificación enviada. Revisa tu correo.");
    // return alert("Verificación enviada. Revisa tu correo.");;

  } catch (error) {
    console.error("Error al registrar:", error.message);
    return error.message;
  }

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

export const loginWithGoogle = async () => {
  try {
    const result = await signInWithPopup(auth, googleProvider);
    const user = result.user;
        console.log("Usuario con Google:", user);

    await saveUserInFirestore(user);
    return user;

  } catch (error) {
    console.error("Error al iniciar sesión con Google:", error);
    throw error;
  }
};
