
import { initializeApp } from "firebase/app";
import {getFirestore} from 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyDOEJ2WLhalPHIC1RLpXIAYzGtvXW0bVoM",
  authDomain: "projetominiblog-2f277.firebaseapp.com",
  projectId: "projetominiblog-2f277",
  storageBucket: "projetominiblog-2f277.appspot.com",
  messagingSenderId: "432143671370",
  appId: "1:432143671370:web:75c6a87ca83117eb9606b3"
};

const db = getFirestore(app);
const app = initializeApp(firebaseConfig);

export{db};