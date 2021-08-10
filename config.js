import firebase from 'firebase'
require ('@firebase/firestore')

var firebaseConfig = {
    apiKey: "AIzaSyBIei5UzVQjoZxHg3lbxqmSlR7eUlEazNM",
    authDomain: "storyhub-39f3c.firebaseapp.com",
    projectId: "storyhub-39f3c",
    storageBucket: "storyhub-39f3c.appspot.com",
    messagingSenderId: "419232966402",
    appId: "1:419232966402:web:12f291540d421eefd1841b"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  export default firebase.firestore();