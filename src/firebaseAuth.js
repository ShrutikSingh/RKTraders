import { getAuth, signInWithEmailAndPassword, signOut } from "firebase/auth";
import { initializeApp } from "firebase/app";
import { firebaseConfig } from "./firebase";

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);

export const loginAdmin = (email, password) =>
  signInWithEmailAndPassword(auth, email, password);

export const logoutAdmin = () => signOut(auth);
