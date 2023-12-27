// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import "firebase/auth";
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "My apiKey",
  authDomain: "My authDomain",
  projectId: "My projectId",
  storageBucket: "My storageBucket",
  messagingSenderId: "My messagingSenderId",
  appId: "My appId"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;