const saveUserInFirestore = async (user) => {
  
  const userRef = doc(db, "usuarios", user.uid);
  const docSnap = await getDoc(userRef);

  if (!docSnap.exists()) {
    const capitalizedName = capitalizedName(user.displayName || "");

    await setDoc(userRef, {
      uid: user.uid,
      name: capitalizedName || "Sin Nombre",
      email: user.email,
      photoURL: user.photoURL || "",
      petcoins: 0,
      createdAt: new Date(),
    });

    console.log("✅ Usuario guardado en Firestore");
  } else {
    console.log("ℹ️ Usuario ya existía en Firestore");
  }

  // 🔁 Siempre devolvemos el documento actualizado
  const updatedSnap = await getDoc(userRef);
  return updatedSnap.data();
};

export default saveUserInFirestore;
