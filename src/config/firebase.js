// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAPDCoD-ddZQ8lFrX3lb8dufIbBRhGNrOw",
  authDomain: "pair24-the-movie.firebaseapp.com",
  projectId: "pair24-the-movie",
  storageBucket: "pair24-the-movie.appspot.com",
  messagingSenderId: "985923218927",
  appId: "1:985923218927:web:b2d3295575084be207da1a"
};



// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export { auth };
