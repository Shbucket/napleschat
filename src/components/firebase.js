import firebase from "firebase/app";
import "firebase/auth";

export const auth = firebase
  .initializeApp({
    apiKey: "AIzaSyCh17ssWOW0mN7jI8esjVi2wd_yym__BCI",
    authDomain: "napleschat.firebaseapp.com",
    projectId: "napleschat",
    storageBucket: "napleschat.appspot.com",
    messagingSenderId: "1084323668639",
    appId: "1:1084323668639:web:88cfc2e4803288c87eb8aa",
  })
  .auth();
