import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth";
import {getFirestore} from "firebase/firestore"; // for db connection
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyA_2Papo0pd0lD-a6gkDblKedvF4Hl8Gsg",
  authDomain: "fir-crud-7d7eb.firebaseapp.com",
  projectId: "fir-crud-7d7eb",
  storageBucket: "fir-crud-7d7eb.appspot.com",
  messagingSenderId: "815808988481",
  appId: "1:815808988481:web:41c4454e76c01ac84f0dc0"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// for authentication
export const auth = getAuth();
// for firestore database
export const db = getFirestore();
export const storage = getStorage(app);