import { doc, setDoc, getDoc } from "firebase/firestore";
import { db } from "../firebase";

const saveUserInFirestore = async (user) => {
  const userRef = doc(db, "users", user.uid);

  // Avoid rewrite if exists
  const docSnap = await getDoc(userRef);
  if (!docSnap.exists()) {
    await setDoc(userRef, {
      uid: user.uid,
      name: user.displayName || "", // Puede estar vacío si es email/pass
      email: user.email,
      photoURL: user.photoURL || "",  // Puede estar vacío si es email/pass
      petcoins: 100, // Valor inicial personalizado
      createdAt: new Date()
    });
    console.log("Usuario guardado en Firestore");
  } else {
    console.log("Usuario ya existía en Firestore");
  }
};

export default saveUserInFirestore;
