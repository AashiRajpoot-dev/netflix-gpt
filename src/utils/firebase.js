// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAxyzeE32XmFG7ub_VHDT2SnCUg2D77iyY",
  authDomain: "netflixgpt-a5049.firebaseapp.com",
  projectId: "netflixgpt-a5049",
  storageBucket: "netflixgpt-a5049.firebasestorage.app",
  messagingSenderId: "647806511325",
  appId: "1:647806511325:web:a9485552a3f75bc2721334"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);