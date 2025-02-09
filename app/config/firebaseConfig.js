import firebase from "firebase/compat/app";
import "firebase/compat/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDqUonqrqi1nZ0cymjaqIk3mYXb9Vk3Ot0",
  authDomain: "smartbalanceservices-da15d.firebaseapp.com",
  projectId: "smartbalanceservices-da15d",
  storageBucket: "smartbalanceservices-da15d.firebasestorage.app",
  messagingSenderId: "92325718",
  appId: "1:92325718:web:d39eadaf3bfae435a978f7",
  measurementId: "G-1S4BZ7YQ86",
};

// Initialize Firebase only once
if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}

export const auth = firebase.auth(); // Export Firebase Authentication
export default firebase;
