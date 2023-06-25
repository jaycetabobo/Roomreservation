// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAQzgd8i7WPqL7dQUgaIzwkpmh_ihoDzh0",
  authDomain: "room-reservation-6e858.firebaseapp.com",
  projectId: "room-reservation-6e858",
  storageBucket: "room-reservation-6e858.appspot.com",
  messagingSenderId: "136141608879",
  appId: "1:136141608879:web:5ba146a60b83e96ca1015a",
  measurementId: "G-BQS0H1QT36"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();
const db = getFirestore(app);
const storage = getStorage();

export { auth, provider, db, storage };