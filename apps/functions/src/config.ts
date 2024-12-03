import {credential} from "firebase-admin";
import {initializeApp} from "firebase-admin/app";
import {initializeFirestore} from "firebase-admin/firestore";

const serviceAccount = require('../../../firebase-service-account.json')

export const app = initializeApp({
  credential: credential.cert(serviceAccount)
});
export const db = initializeFirestore(app);
