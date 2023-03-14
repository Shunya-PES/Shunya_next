import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyCh6r68XCJ7rQ5GTJn_tjIhRx48rq-OHVU",
    authDomain: "arithmania-d394d.firebaseapp.com",
    projectId: "arithmania-d394d",
    storageBucket: "arithmania-d394d.appspot.com",
    messagingSenderId: "526647876215",
    appId: "1:526647876215:web:fba72197d25ca6ef3a0472",
    measurementId: "G-SQLKBRPBJS"
}

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
