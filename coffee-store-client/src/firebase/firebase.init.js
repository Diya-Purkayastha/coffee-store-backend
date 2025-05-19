// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDwIzOWA5n6CsHXCMZ1U4VfqdITYEUjRaM",
  authDomain: "coffee-store-app-9d5d9.firebaseapp.com",
  projectId: "coffee-store-app-9d5d9",
  storageBucket: "coffee-store-app-9d5d9.firebasestorage.app",
  messagingSenderId: "932945406044",
  appId: "1:932945406044:web:c7d88da3cdc1601e469e99"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);