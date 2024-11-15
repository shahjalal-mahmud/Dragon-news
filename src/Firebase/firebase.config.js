// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDqJIHbdaKXbiR-K5MsAXmyo93ssTFAdhU",
  authDomain: "sust-dragon-news.firebaseapp.com",
  projectId: "sust-dragon-news",
  storageBucket: "sust-dragon-news.firebasestorage.app",
  messagingSenderId: "584638963939",
  appId: "1:584638963939:web:cefa90b6aa93cfe48265d6"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;