// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBdcR5-nYBEzzdb0-_lIMKW-fHsAh480fE",
  authDomain: "mern-book-inventroy-system.firebaseapp.com",
  projectId: "mern-book-inventroy-system",
  storageBucket: "mern-book-inventroy-system.appspot.com",
  messagingSenderId: "381804580186",
  appId: "1:381804580186:web:6c9bb167b995950e00f763",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;
