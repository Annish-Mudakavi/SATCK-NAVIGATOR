import firebase from 'firebase';
require('@firebase/firestore')

var firebaseConfig = {
    apiKey: "AIzaSyDSkotio8_2AgpBpHzktysyRobRiO7Kck8",
    authDomain: "book-santa-app-1f754.firebaseapp.com",
    projectId: "book-santa-app-1f754",
    storageBucket: "book-santa-app-1f754.appspot.com",
    messagingSenderId: "391151924157",
    appId: "1:391151924157:web:7a3ff694ca3ced448a98d4"
  };
  // Initialize Firebase
  
  firebase.initializeApp(firebaseConfig);

  export default firebase.firestore();