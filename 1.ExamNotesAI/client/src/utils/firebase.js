
// import { initializeApp } from "firebase/app";
// import {getAuth, GoogleAuthProvider} from "firebase/auth"

// const firebaseConfig = {
//   apiKey: import.meta.env.VITE_FIREBASE_APIKEY,
//   authDomain: "authexamnotes.firebaseapp.com",
//   projectId: "authexamnotes",
//   storageBucket: "authexamnotes.firebasestorage.app",
//   messagingSenderId: "198091553006",
//   appId: "1:198091553006:web:cd719d4ee1ebf391139bff"
// };


// const app = initializeApp(firebaseConfig);

// const auth = getAuth(app)

// const provider = new GoogleAuthProvider()

// export {auth , provider}




import { initializeApp } from "firebase/app";
import {getAuth, GoogleAuthProvider} from "firebase/auth"

const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_APIKEY,
  authDomain: "examnotes2-4b9d7.firebaseapp.com",
  projectId: "examnotes2-4b9d7",
  storageBucket: "examnotes2-4b9d7.firebasestorage.app",
  messagingSenderId: "336032122423",
  appId: "1:336032122423:web:4f538228b4ac77353da1b2",
  measurementId: "G-GLR7BW7KXP"
};


const app = initializeApp(firebaseConfig);

const auth = getAuth(app)

const provider = new GoogleAuthProvider()

export {auth , provider}


