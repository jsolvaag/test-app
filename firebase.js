// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCUl6zm8OE59jBrzXbN1fa95K8dH_anHWU",
  authDomain: "michael-jakson-butter.firebaseapp.com",
  projectId: "michael-jakson-butter",
  storageBucket: "michael-jakson-butter.appspot.com",
  messagingSenderId: "820297727989",
  appId: "1:820297727989:web:e13038fad6baf77e222abc",
  measurementId: "G-7DZ762D843"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);