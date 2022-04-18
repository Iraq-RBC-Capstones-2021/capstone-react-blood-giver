import { query, collection, onSnapshot } from "firebase/firestore";
import { db } from "../../firebaseApp/index";
export default function handler(req, res) {
  const q = query(collection(db, "donors"));
  const unsub = onSnapshot(q, (querySnapshot) => {
    let usersArray = [];
    querySnapshot.forEach((doc) => {
      usersArray.push({ ...doc.data(), id: doc.id });
    });

    res.status(200).json(usersArray);
  });
}
