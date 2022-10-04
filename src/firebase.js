import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";
import "firebase/compat/storage";

const firebaseConfig = {
    apiKey: "AIzaSyChUeeMzRvtCMx7sumkuqcKEUwOlINWDUw",
    authDomain: "maxwheels-e524c.firebaseapp.com",
    projectId: "maxwheels-e524c",
    storageBucket: "maxwheels-e524c.appspot.com",
    messagingSenderId: "227701048177",
    appId: "1:227701048177:web:b922ba73eb4d6a8c532cd0",
    measurementId: "G-4XQ7GJQR5F"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();
const storage = firebase.storage();

export { auth, provider, storage };
export default db;