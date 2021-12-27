// Import the functions you need from the SDKs you need
import { initializeApp, getApps, getApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCiIVZkXevU2zrN1GL6z0gA1aYhH_wWGQE",
  authDomain: "instagram-clone-ba9f7.firebaseapp.com",
  projectId: "instagram-clone-ba9f7",
  storageBucket: "instagram-clone-ba9f7.appspot.com",
  messagingSenderId: "553853097886",
  appId: "1:553853097886:web:53ce3d611f6170bc30688f",
};

// Initialize Firebase
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();
const db = getFirestore();
const storage = getStorage();

export { app, db, storage };
