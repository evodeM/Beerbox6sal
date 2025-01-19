import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import { getAuth } from 'firebase/auth';

const firebaseConfig = {
  apiKey: "AIzaSyDgVwDyD1mDBl-J_C6kGvMPsgS7DkNvibg",
  authDomain: "fridge6sal-5b0f6.firebaseapp.com",
  projectId: "fridge6sal-5b0f6",
  storageBucket: "fridge6sal-5b0f6.firebasestorage.app",
  messagingSenderId: "757651497587",
  appId: "1:757651497587:web:43bbd10fad974cad7ec006"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize services
const db = getFirestore(app);
const auth = getAuth(app);

export { db, auth };
