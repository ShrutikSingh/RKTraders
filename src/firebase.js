import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";


const firebaseConfig = {
    apiKey: "AIzaSyCemavTHi4bHWAkEeiyUoiOaAlaPJjRJrs",
    authDomain: "rk-traders-60c31.firebaseapp.com",
    projectId: "rk-traders-60c31",
    storageBucket: "rk-traders-60c31.firebasestorage.app",
    messagingSenderId: "391364273252",
    appId: "1:391364273252:web:06148723632820d708ab71"
  };

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const auth = getAuth(app);

