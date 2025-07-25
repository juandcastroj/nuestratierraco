// import { doc, getDoc, updateDoc } from "firebase/firestore";
// import { db } from "../firebase";

// export const addPointsToUser = async (userId, pointsToAdd) => {
//   const userRef = doc(db, "users", userId);
//   const userSnap = await getDoc(userRef);

//   if (userSnap.exists()) {
//     const currentPoints = userSnap.data().points || 0;
//     await updateDoc(userRef, {
//       points: currentPoints + pointsToAdd,
//     });
//   } else {
//     throw new Error("Usuario no encontrado");
//   }
// };
