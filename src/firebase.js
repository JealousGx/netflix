import firebase from "firebase";

const firebaseConfig = {
  apiKey: process.env.FIREBASE_API_KEY,
  authDomain: "react-netflix-c3ec4.firebaseapp.com",
  projectId: "react-netflix-c3ec4",
  storageBucket: "react-netflix-c3ec4.appspot.com",
  messagingSenderId: "807201647911",
  appId: "1:807201647911:web:3173f8f9989235013b0d02",
  measurementId: "G-QYE9XZT2Z3",
};

firebase.initializeApp(firebaseConfig);
const storage = firebase.storage();

export default storage;
