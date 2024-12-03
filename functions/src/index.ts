import {onCall, onRequest} from "firebase-functions/v2/https";
import {db} from "./config";

export const fetchUserData = onCall({ cors: ['http://localhost:8000', 'http://localhost:3000'] }, async () => {
  const data = await db.collection("USERS").get();

  return data.docs.map((i) => i.data());
});

export const a = onRequest({ cors: ['http://localhost:8000', 'http://localhost:3000'] }, async (req, res) => {
  const data = await db.collection("USERS").get();

  const d = data.docs.map((i) => i.data());

  res.send(d);
});

export const updateUserData = onCall(async (req) => {
  const result = await db
    .collection("USERS")
    .doc(req.data.id)
    .update(req.data);

  return result;
});
