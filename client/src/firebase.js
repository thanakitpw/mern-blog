// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
   apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
   authDomain: "mern-blog-80ba5.firebaseapp.com",
   projectId: "mern-blog-80ba5",
   storageBucket: "mern-blog-80ba5.appspot.com",
   messagingSenderId: "265715950251",
   appId: "1:265715950251:web:8c7b347776c1678d230dee",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
