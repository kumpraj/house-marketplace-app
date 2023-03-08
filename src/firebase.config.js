// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getfirestore } from "firebase/firestore"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBddwtspu2KGXVGD0BQo9usMd5NZrIJorM",
  authDomain: "house-marketplace-app-93f11.firebaseapp.com",
  projectId: "house-marketplace-app-93f11",
  storageBucket: "house-marketplace-app-93f11.appspot.com",
  messagingSenderId: "640653956465",
  appId: "1:640653956465:web:a91a6f5b5e32c64fecd2d0"
};

// Initialize Firebase
initializeApp(firebaseConfig);

export const db = getfirestore();