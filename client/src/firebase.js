// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
   apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
   authDomain: "mern-blog-2db51.firebaseapp.com",
   projectId: "mern-blog-2db51",
   storageBucket: "mern-blog-2db51.firebasestorage.app",
   messagingSenderId: "277130354878",
   appId: "1:277130354878:web:dcc4302cf4ea019cb33eef",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
