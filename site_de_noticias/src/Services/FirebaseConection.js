// Import the functions you need from the SDKs you need
import firebase from "firebase/app";
import "firebase/firestore";
// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDaJgRCYeTRSSgnaio4ZHLYWkPjFnPgOf0",
  authDomain: "site-de-noticias-e15e8.firebaseapp.com",
  projectId: "site-de-noticias-e15e8",
  storageBucket: "site-de-noticias-e15e8.appspot.com",
  messagingSenderId: "895002362457",
  appId: "1:895002362457:web:1d37ffb7d7fb6bc0f26748"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export default firebase
