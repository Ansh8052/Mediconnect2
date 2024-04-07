// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: " import.meta.env.VITE_FIREBASE_API_KEY",
  authDomain: "mediconnect-12a72.firebaseapp.com",
  projectId: "mediconnect-12a72",
  storageBucket: "mediconnect-12a72.appspot.com",
  messagingSenderId: "491786069634",
  appId: "1:491786069634:web:fc8341b6ae3653660b769b"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
