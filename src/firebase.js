// For Firebase JS SDK v7.20.0 and later, measurementId is optional

import firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyDYa7yeh-SmhUraGM5NZ4oWuIY9XJlj3tQ",
    authDomain: "slack-clone-d05b8.firebaseapp.com",
    projectId: "slack-clone-d05b8",
    storageBucket: "slack-clone-d05b8.appspot.com",
    messagingSenderId: "275204409125",
    appId: "1:275204409125:web:ff33c467f2d090da0b3ccc",
    measurementId: "G-ZK5PB30WK3"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);
  const db = firebaseApp.firestore();

  const auth = firebase.auth()
  const provider = new firebase.auth.GoogleAuthProvider();

  export { auth, provider };
  export default db;