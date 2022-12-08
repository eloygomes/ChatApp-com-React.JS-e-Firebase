import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';


const firebaseConfig = {
    apiKey: "AIzaSyCdK576k52JXAgS3v5PB7DSTtvcDvOdYVw",
    authDomain: "chat-app-21ab8.firebaseapp.com",
    projectId: "chat-app-21ab8",
    storageBucket: "chat-app-21ab8.appspot.com",
    messagingSenderId: "917114147389",
    appId: "1:917114147389:web:5a7b1a3248c60ab14ed054"
  };


  const app = firebase.initializeApp(firebaseConfig);

  const db = app.firestore();
  const auth = app.auth();
  const provider = new firebase.auth.GoogleAuthProvider();

  export {db, auth, provider}