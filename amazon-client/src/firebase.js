// import { initializeApp } from "firebase/app";
// import { getFirestore } from "firebase/firestore";
// import firebase from 'firebase';
// import 'firebase/auth';
// import firebase from "firebase";
// import { getFirestore } from "firebase/firestore"
// import firebase from 'firebase/app'
// import "firebase/auth"


// // If you enabled Analytics in your project, add the Firebase SDK for Analytics
// import "firebase/analytics";

// // Add the Firebase products that you want to use
// import "firebase/firestore";
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';


const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyA6HLghQa_GKRWw_kFr5011xRUEgYiKt-E",
    authDomain: "clone-6328e.firebaseapp.com",
    projectId: "clone-6328e",
    storageBucket: "clone-6328e.appspot.com",
    messagingSenderId: "516931465557",
    appId: "1:516931465557:web:98618d8abe8736c4ceffdc",
    measurementId: "G-3N6V9Y7ZTK"
});
const db = firebase.firestore();
const auth = firebase.auth();

export { db, auth };