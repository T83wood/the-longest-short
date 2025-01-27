import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';

const firebaseConfig = {
  apiKey: "AIzaSyDLpd2VWHvEcV9quGy1MfujOHKsMfhOLtc",
  authDomain: "the-longest-short.firebaseapp.com",
  projectId: "the-longest-short",
  storageBucket: "the-longest-short.appspot.com",
  messagingSenderId: "550432389450",
  appId: "1:550432389450:web:34b2072a1a9d4253ef29b3",
  measurementId: "G-ZLPH7J2RV5",
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);

