import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: process.env.FIREBASE_API_KEY,
  authDomain: "ntt-videos.firebaseapp.com",
  projectId: "ntt-videos",
  storageBucket: "ntt-videos.appspot.com",
  messagingSenderId: process.env.FIREBASE_MESSAGINGSENDER_ID,
  appId: process.env.FIREBASE_APP_ID
};

const firebaseTestConfig = {
  apiKey: "AIzaSyAke9c28J5-eaxJtQeBaPE15jE6gFWNjK0",
  authDomain: "ntt-videos-testing.firebaseapp.com",
  projectId: "ntt-videos-testing",
  storageBucket: "ntt-videos-testing.appspot.com",
  messagingSenderId: "947013698933",
  appId: "1:947013698933:web:4a0d23d1cf81283633ff3c"
};

const app = initializeApp(process.env.NODE_ENV === "tests" ? firebaseTestConfig : firebaseConfig);
export const store = getFirestore(app);
