// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBfQA1pUxXufT1aFgT30gZ61yUkZdgGXhs",
  authDomain: "netflix-gpt-1d358.firebaseapp.com",
  projectId: "netflix-gpt-1d358",
  storageBucket: "netflix-gpt-1d358.firebasestorage.app",
  messagingSenderId: "1051899315382",
  appId: "1:1051899315382:web:6bbf7e73205a05c5a9d217",
  measurementId: "G-6EYKFME9BE",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);
const auth = getAuth(app);

export default auth;
