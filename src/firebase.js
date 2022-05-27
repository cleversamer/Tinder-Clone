import { initializeApp } from "firebase/app";
import { getFirestore, collection } from "firebase/firestore";

const config = {
  apiKey: process.env["REACT_APP_FIREBASE_API_KEY"],
  authDomain: "samer-tinder.firebaseapp.com",
  projectId: "samer-tinder",
  storageBucket: "samer-tinder.appspot.com",
  messagingSenderId: "687341526934",
  appId: "1:687341526934:web:145382fc7a81d30e9547b7",
  measurementId: "G-7N7PJZK6Y5",
};

initializeApp(config);

const db = getFirestore();

export const peopleRef = collection(db, "people");
