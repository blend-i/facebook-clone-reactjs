import firebase from "firebase";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyAwEf1rJntA3h88vY8RBjSmQvi4HQZCdms",
    authDomain: "fb-clone-66c83.firebaseapp.com",
    databaseURL: "https://fb-clone-66c83.firebaseio.com",
    projectId: "fb-clone-66c83",
    storageBucket: "fb-clone-66c83.appspot.com",
    messagingSenderId: "724276569879",
    appId: "1:724276569879:web:f14128e613c80557d73952",
    measurementId: "G-ZF3LS48WEW"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);
  const db = firebaseApp.firestore();
  const auth = firebase.auth();
  const provider = new firebase.auth.GoogleAuthProvider();

  export {auth, provider};
  export default db;