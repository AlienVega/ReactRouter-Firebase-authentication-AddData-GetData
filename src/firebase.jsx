import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
const firebaseConfig = {
  apiKey: "AIzaSyAt3eVDdx2deOxQcpbl3DUBOqZFEFAtgV4",
  authDomain: "reactproject-e6694.firebaseapp.com",
  projectId: "reactproject-e6694",
  storageBucket: "reactproject-e6694.appspot.com",
  messagingSenderId: "305215119245",
  appId: "1:305215119245:web:a94f31a6b6bf24d356a7c4",
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
