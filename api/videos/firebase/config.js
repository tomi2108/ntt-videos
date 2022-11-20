const firebaseApp = require("firebase/app");
const firebaseStorage = require("firebase/storage");

const firebaseConfig = {
  apiKey: process.env.FIREBASE_API_KEY,
  authDomain: "ntt-videos.firebaseapp.com",
  projectId: "ntt-videos",
  storageBucket: "ntt-videos.appspot.com",
  messagingSenderId: process.env.FIREBASE_MESSAGINGSENDER_ID,
  appId: process.env.FIREBASE_APP_ID
};


const app = firebaseApp.initializeApp(firebaseConfig);
const storage = firebaseStorage.getStorage(app);



module.exports = { storage,ref:firebaseStorage.ref,uploadBytes:firebaseStorage.uploadBytes };