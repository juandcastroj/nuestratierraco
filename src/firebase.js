import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDbaqfINqGeXuNC-9DfPVZB5r5k5HcdXMM",
  authDomain: "nuestratierraco-14cc4.firebaseapp.com",
  projectId: "nuestratierraco-14cc4",
  storageBucket: "nuestratierraco-14cc4.firebasestorage.app",
  messagingSenderId: "783046005776",
  appId: "1:783046005776:web:e48f2e6d6d5fbe928f2695",
  measurementId: "G-4PR0WTLK93"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
export const googleProvider = new GoogleAuthProvider();
