import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCemavTHi4bHWAkEeiyUoiOaAlaPJjRJrs",
  authDomain: "rk-traders-60c31.firebaseapp.com",
  projectId: "rk-traders-60c31",
  storageBucket: "rk-traders-60c31.appspot.com",
  messagingSenderId: "391364273252",
  appId: "1:391364273252:web:06148723632820d708ab71",
};

// 🔥 Initialize ONCE
const app = initializeApp(firebaseConfig);

// 🔥 Export shared instances
export const db = getFirestore(app);
export const auth = getAuth(app);

// (Optional) export app if ever needed
export default app;
