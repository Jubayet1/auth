// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDRZ0c4w-d2OPnpM8ezgt_O_yn4EQV5qn0",
  authDomain: "simple-b031b.firebaseapp.com",
  projectId: "simple-b031b",
  storageBucket: "simple-b031b.firebasestorage.app",
  messagingSenderId: "291389704468",
  appId: "1:291389704468:web:cf11125166279c709a5a01"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app)
export default auth;