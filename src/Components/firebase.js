// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth, GoogleAuthProvider} from 'firebase/auth'
import { getFirestore } from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBjvK2U2RNp-wokE7jN2mLRZshWQ8qPy4I",
  authDomain: "fav-chat-app.firebaseapp.com",
  projectId: "fav-chat-app",
  storageBucket: "fav-chat-app.appspot.com",
  messagingSenderId: "130126417623",
  appId: "1:130126417623:web:3cb7e3312c5104efd5aa92"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const googleProvider = new GoogleAuthProvider();
export const db = getFirestore(app)
