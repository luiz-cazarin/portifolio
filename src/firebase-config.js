import { initializeApp } from "firebase/app";
import { getFirestore } from "@firebase/firestore"

// TODO: Replace the following with your app's Firebase project configuration
const firebaseConfig = {
  apiKey: "AIzaSyCDii8Ydgq62wkQLe5dd0lccumYh_Imqwk",
  authDomain: "portifolio-101e3.firebaseapp.com",
  projectId: "portifolio-101e3",
  storageBucket: "portifolio-101e3.appspot.com",
  messagingSenderId: "567421445455",
  appId: "1:567421445455:web:e21028ecc455abca9dd13a",
  measurementId: "G-SQSLKYRFTG"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app)
