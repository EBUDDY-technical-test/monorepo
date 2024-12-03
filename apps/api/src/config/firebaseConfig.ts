import dotenv from 'dotenv';
import { initializeApp } from "firebase/app";
import { getFunctions } from "firebase/functions";
import { getFirestore } from 'firebase/firestore';

dotenv.config();

const firebaseConfig = {
  apiKey: process.env.API_KEY,
  authDomain: process.env.AUTH_ADMIN,
  databaseURL: process.env.DATABASE_URL,
  projectId: process.env.PROJECT_ID,
  storageBucket: process.env.STORAGE_BUCKET,
  messagingSenderId: process.env.MESSAGING_SENDER_ID,
  appId: process.env.APP_ID,
  measurementId: process.env.MEASUREMENT_ID,
};

export const firebaseApp = initializeApp(firebaseConfig);
export const firebaseFunctions = getFunctions(firebaseApp);
export const firebaseFirestore = getFirestore(firebaseApp);