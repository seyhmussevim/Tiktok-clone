// For Firebase JS SDK v7.20.0 and later, measurementId is optional

import firebase from "firebase"







// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAszdDDQI4fmnf9TwO2N_eg8GU44h35RwU",
  authDomain: "tiktok-clone-ec893.firebaseapp.com",
  projectId: "tiktok-clone-ec893",
  storageBucket: "tiktok-clone-ec893.appspot.com",
  messagingSenderId: "902978024318",
  appId: "1:902978024318:web:a833929fed94f15c7cf92f",
  measurementId: "G-3P0D63CJP6"
};

const firebaseApp = 
firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore () ;

export default db;
