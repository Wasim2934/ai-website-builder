// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { getAuth, GoogleAuthProvider } from "firebase/auth";
// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "ai-wesbite-builder-45d90.firebaseapp.com",
  projectId: "ai-wesbite-builder-45d90",
  storageBucket: "ai-wesbite-builder-45d90.firebasestorage.app",
  messagingSenderId: "198138157836",
  appId: "1:198138157836:web:1b915b2e8374dcba9dc729"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();

export { auth, provider };
