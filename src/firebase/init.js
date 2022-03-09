import objetConfig from './config';
import { initializeApp } from 'firebase/app';
import { getFirestore } from "firebase/firestore"

// Initialiser Firebase
export const firebaseApp = initializeApp(objetConfig);

// Inititaliser Firestore
export const bdFirestore = getFirestore();

