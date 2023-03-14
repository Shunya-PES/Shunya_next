import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
    apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
    authDomain: "arithmania-d394d.firebaseapp.com",
    projectId: "arithmania-d394d",
    storageBucket: "arithmania-d394d.appspot.com",
    messagingSenderId: "526647876215",
    appId: process.env.NEXT_PUBLIC_FIREBASE_APP_ID,
    measurementId: "G-SQLKBRPBJS"
}

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
