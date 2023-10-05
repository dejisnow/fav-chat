// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth, GoogleAuthProvider} from 'firebase/auth';
import {getFirestore} from 'firebase/firestore';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAls-wg5Z3iBM-Msz2daIyvWbdzET4AEtc",
  authDomain: "fav-chat-7ac50.firebaseapp.com",
  projectId: "fav-chat-7ac50",
  storageBucket: "fav-chat-7ac50.appspot.com",
  messagingSenderId: "785427749389",
  appId: "1:785427749389:web:406ba6fbca670f86e35344"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const googleProvider = new GoogleAuthProvider();
export const db = getFirestore(app)
