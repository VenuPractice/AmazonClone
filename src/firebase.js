import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyAzS3UL7VyWyPouZUiLHrLQXlZMqErYYc4",
  authDomain: "clone-67720.firebaseapp.com",
  projectId: "clone-67720",
  storageBucket: "clone-67720.appspot.com",
  messagingSenderId: "222376897253",
  appId: "1:222376897253:web:0ccb32b887c68c2335420c",
  measurementId: "G-KY406G4DE7"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };