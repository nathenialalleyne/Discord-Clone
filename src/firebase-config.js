import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "@firebase/firestore";
import { getAuth, GoogleAuthProvider, signInWithPopup } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCwFtqyArA-cNieLUI0TOy4MAyu7mx-elI",
  authDomain: "discord-clone-a08ed.firebaseapp.com",
  projectId: "discord-clone-a08ed",
  storageBucket: "discord-clone-a08ed.appspot.com",
  messagingSenderId: "916692551481",
  appId: "1:916692551481:web:de8d813c0a236e44330ae8",
  measurementId: "G-QWWHLK77SG",
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();
