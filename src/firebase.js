import firebase from "firebase";

const firebaseConfig = {
  apiKey: process.env.FIREBASE_API_KEY,
  authDomain: "react-netflix-c3ec4.firebaseapp.com",
  projectId: "react-netflix-c3ec4",
  storageBucket: "react-netflix-c3ec4.appspot.com",
  messagingSenderId: process.env.MESSAGING_ID,
  appId: process.env.APP_ID,
  measurementId: process.env.MEASUREMENT_ID,
};

firebase.initializeApp(firebaseConfig);
const storage = firebase.storage();

export default storage;
