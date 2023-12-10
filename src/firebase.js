


import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";


const firebaseConfig = {
  apiKey: "AIzaSyBN8wY80wdrHn6fHDedHDJB6S-a56_Bbn0",
  authDomain: "clone-62838.firebaseapp.com",
  projectId: "clone-62838",
  storageBucket: "clone-62838.appspot.com",
  messagingSenderId: "875226598361",
  appId: "1:875226598361:web:b9d1671fda7488dc4127c8"
};


const app = initializeApp(firebaseConfig);

const db = getFirestore(app);

export {db  , app}
