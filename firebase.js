import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyDQ-NoLPP8Be9nWWUwf3RWMVmTCAVNhRcY",
  authDomain: "remake-4ce9f.firebaseapp.com",
  projectId: "remake-4ce9f",
  storageBucket: "remake-4ce9f.appspot.com",
  messagingSenderId: "275002380954",
  appId: "1:275002380954:web:3f9a7e3df15195122f8523",
};

const app = !firebase.apps.length
  ? firebase.initializeApp(firebaseConfig)
  : firebase.app();

const db = app.firestore();

export default db;
