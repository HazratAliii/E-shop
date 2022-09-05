import { getAuth } from "firebase/auth";
import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyBmsZNRO7Eh6J28MCgRamq3QDq7GnihgH8",
  authDomain: "e-commerce-fdd14.firebaseapp.com",
  projectId: "e-commerce-fdd14",
  storageBucket: "e-commerce-fdd14.appspot.com",
  messagingSenderId: "522509646301",
  appId: "1:522509646301:web:20b930dd9d56c73e9b5e34",
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth();
