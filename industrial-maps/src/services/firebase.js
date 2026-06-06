// src/services/firebase.js

import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyK22-qTdFXShvrUcht-2rD9237CoELkA0",
  authDomain: "industrialmaps-20edb.firebaseapp.com",
  projectId: "industrialmaps-20edb",
  storageBucket: "industrialmaps-20edb.firebasestorage.app",
  messagingSenderId: "828617458130",
  appId: "1:828617458130:web:4f699654d7bdcbf46c880b",
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const db = getFirestore(app);