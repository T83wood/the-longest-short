import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDLpd2VWHvEcV9quGy1MfujOHKsMfhOLtc",
  authDomain: "the-longest-short.firebaseapp.com",
  projectId: "the-longest-short",
  storageBucket: "the-longest-short.appspot.com",
  messagingSenderId: "550432389450",
  appId: "1:550432389450:web:the-longest-short",
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
