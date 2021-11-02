// NPM Packages
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore/lite";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

const firebaseConfiguration = {
  apiKey: "AIzaSyBxqfslJLgBcoXmWduPkUGuDnlwuTEf6gk",
  authDomain: "netelixclone.firebaseapp.com",
  projectId: "netelixclone",
  storageBucket: "netelixclone.appspot.com",
  messagingSenderId: "31141031733",
  appId: "1:31141031733:web:860029f0cad4ba6448a67c",
};

const firebaseInstance = initializeApp(firebaseConfiguration);

export const fireStoreInstance = getFirestore(firebaseInstance);
export const authInstance = getAuth(firebaseInstance);
