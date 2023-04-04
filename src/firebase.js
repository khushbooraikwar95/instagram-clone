// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";

const firebaseApp = firebase.initializeApp({
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
  apiKey: "AIzaSyCP3HvYF1EBrioCbrWY6mf0SjdJU17NjWM",
  authDomain: "instagram-clone-react-99318.firebaseapp.com",
  databaseURL:
    "https://instagram-clone-react-99318-default-rtdb.firebaseio.com",
  projectId: "instagram-clone-react-99318",
  storageBucket: "instagram-clone-react-99318.appspot.com",
  messagingSenderId: "380601104018",
  appId: "1:380601104018:web:9f6d3c34f7dc5b007b984b",
  measurementId: "G-BZHMZYEBHR",
});

const db = firebaseApp.firestore();
const auth = firebase.auth();
// const storage = firebase.storage();

export { db, auth };
