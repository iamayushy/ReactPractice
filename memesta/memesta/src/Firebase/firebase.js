// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth, createUserWithEmailAndPassword} from "firebase/auth"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBZNuZrNku9Ci1GO0jz3sKeNY93MIpfVMY",
  authDomain: "memesta-99508.firebaseapp.com",
  projectId: "memesta-99508",
  storageBucket: "memesta-99508.appspot.com",
  messagingSenderId: "798147502925",
  appId: "1:798147502925:web:a53528955d56694c250d04",
  measurementId: "G-XCY2EXVL5N"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app)

export {auth, createUserWithEmailAndPassword}
