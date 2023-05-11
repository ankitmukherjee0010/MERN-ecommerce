// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCQ1BLJuaYPUdYJOzIPOOhYVSvn8kHx41o",
  authDomain: "mern-ecommerce-app-d81c2.firebaseapp.com",
  projectId: "mern-ecommerce-app-d81c2",
  storageBucket: "mern-ecommerce-app-d81c2.appspot.com",
  messagingSenderId: "776562213941",
  appId: "1:776562213941:web:6e94800203ec7f7b3b5d7c",
  measurementId: "G-BBTBY2WTBY"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;