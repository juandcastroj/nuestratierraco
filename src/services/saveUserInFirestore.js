import { db } from "../firebase";
import { doc, getDoc, setDoc, serverTimestamp } from "firebase/firestore";

export default async function saveUserInFirestore(user) {
  const userRef = doc(db, "usuarios", user.uid);
  const docSnap = await getDoc(userRef);

  if (!docSnap.exists()) {
    const name = capitalizedName(user.displayName || "");

    await setDoc(userRef, {
      uid: user.uid,
      name: name || "Sin Nombre",
      email: user.email,
      photoURL: user.photoURL || "",
      petcoins: 0,
      createdAt: serverTimestamp(),
    });

    console.log("✅ Usuario guardado en Firestore");
  } else {
    console.log("📋 Usuario ya existía en Firestore");
  }

  const updatedSnap = await getDoc(userRef);
  return updatedSnap.data();
}

function capitalizedName(name) {
  if (!name) return "";
  return name
    .split(" ")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase())
    .join(" ");
}