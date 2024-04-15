import { getAuth } from "firebase/auth";

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAQL63A4YcEaaq9U3vlsYsTsE_G3ECxEGQ",
  authDomain: "business-profile-iitab.firebaseapp.com",
  projectId: "business-profile-iitab",
  storageBucket: "business-profile-iitab.appspot.com",
  messagingSenderId: "169342240063",
  appId: "1:169342240063:web:b0443b0e5f1734d1787f8a",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;
