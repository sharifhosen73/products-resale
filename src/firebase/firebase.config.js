// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDnWXosxtOS2lTqc56Q3u7QH7u1HFQxFaU",
  authDomain: "resale-bike.firebaseapp.com",
  projectId: "resale-bike",
  storageBucket: "resale-bike.appspot.com",
  messagingSenderId: "936627407606",
  appId: "1:936627407606:web:51aa60e015f6a8ac7afad7",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;
