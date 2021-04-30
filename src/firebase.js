// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyBcs0qfRLL7jXj8huGBoXwB9mMJJ7ZW5KY",
  authDomain: "clone-3076f.firebaseapp.com",
  projectId: "clone-3076f",
  storageBucket: "clone-3076f.appspot.com",
  messagingSenderId: "1082810716720",
  appId: "1:1082810716720:web:6e993adacc1fafb8cd53f5",
  measurementId: "G-B60Y371DY7",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };
