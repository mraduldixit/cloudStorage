import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: process.env.REACT_APP_FIREBASE_KEY,
  authDomain: "cloudstorage-15ead.firebaseapp.com",
  projectId: "cloudstorage-15ead",
  storageBucket: "cloudstorage-15ead.appspot.com",
  messagingSenderId: "72222226057",
  appId: "1:72222226057:web:882a397c6efbd1fa82f858",
  measurementId: "G-JVLJ55658L"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const storage = getStorage(app);

export default app;
