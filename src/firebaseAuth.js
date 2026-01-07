import { signInWithEmailAndPassword, signOut } from "firebase/auth";
import { auth } from "./firebase";

// 🔐 Admin login
export const loginAdmin = (email, password) =>
  signInWithEmailAndPassword(auth, email, password);

// 🔓 Logout
export const logoutAdmin = () => signOut(auth);
