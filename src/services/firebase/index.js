import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyBhI1HzWhHG-PcnTBFWVvUWuqZKLq_kDCE",
    authDomain: "book-store-af27c.firebaseapp.com",
    projectId: "book-store-af27c",
    storageBucket: "book-store-af27c.appspot.com",
    messagingSenderId: "905807050076",
    appId: "1:905807050076:web:a2333779116c6a784f7d99"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);