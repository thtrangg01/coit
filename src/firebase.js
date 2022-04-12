import firebase from "firebase/app";
import "firebase/database";
import "firebase/auth";
import "firebase/storage";

const config = {
  apiKey: "AIzaSyAy094WT_V6fRjfBbUI1j520U7JCvRBfgU",
  authDomain: "fir-firebase-562a6.firebaseapp.com",
  databaseURL:
    "https://fir-firebase-562a6-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "fir-firebase-562a6",
  storageBucket: "fir-firebase-562a6.appspot.com",
  messagingSenderId: "730620184377",
  appId: "1:730620184377:web:340fdb1cd8a92cff360ae8",
  measurementId: "G-XKD5DG5P7X",
};

firebase.initializeApp(config);
export default firebase;
