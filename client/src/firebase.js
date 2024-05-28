// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "propertymitra-39d4c.firebaseapp.com",
  projectId: "propertymitra-39d4c",
  storageBucket: "propertymitra-39d4c.appspot.com",
  messagingSenderId: "656376174177",
  appId: "1:656376174177:web:0b9a7d822452e3a6737c20"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);