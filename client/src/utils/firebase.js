
import { initializeApp } from "firebase/app";
import {getAuth, GoogleAuthProvider} from "firebase/auth"
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_APIKEY,
  authDomain: "interviewiq-mj.firebaseapp.com",
  projectId: "interviewiq-mj",
  storageBucket: "interviewiq-mj.firebasestorage.app",
  messagingSenderId: "922842049306",
  appId: "1:922842049306:web:d3fb6ca10f626b66c1daa3"
};

const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

const provider = new GoogleAuthProvider()

export {auth , provider}