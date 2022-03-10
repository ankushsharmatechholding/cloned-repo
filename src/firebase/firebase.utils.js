
 
 import firebase from 'firebase/compat/app';
 

 import 'firebase/compat/firestore';
import  'firebase/compat/auth';

const config = 
{
    apiKey: "AIzaSyC7EQQlEC-D7PJAEoTfbqb_qUGs5WWus3w",
    authDomain: "crwn-db-ee234.firebaseapp.com",
    projectId: "crwn-db-ee234",
    storageBucket: "crwn-db-ee234.appspot.com",
    messagingSenderId: "477091646515",
    appId: "1:477091646515:web:015eb4993afe3c77622746",
    measurementId: "G-CSGRV8QC6R"
  };

  
  firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account'});
export const signInWithGoogle=() => auth.signInWithPopup(provider);

export default firebase;