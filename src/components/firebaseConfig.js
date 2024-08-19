// firebaseConfig.js

import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAGWGulSWdR6O2ggEDSeACZ5AarH_EZFGs",
  authDomain: "personal-finance-tracker-9cd3e.firebaseapp.com",
  projectId: "personal-finance-tracker-9cd3e",
  storageBucket: "personal-finance-tracker-9cd3e.appspot.com",
  messagingSenderId: "832664258277",
  appId: "1:832664258277:web:785eb1a4d4ec8c336e360c",
  measurementId: "G-F1RK7Q1TD7"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db };
