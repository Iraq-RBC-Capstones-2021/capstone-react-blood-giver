import { doc, setDoc } from "@firebase/firestore";
import { db } from "../../../firebaseApp/index";
export default async function handler(req, res) {
  const donor = req.body;
  if (req.method === "POST") {
    try {
      await setDoc(doc(db, "donors", donor.id), {
        id: donor.id,
        name: donor.name,
        email: donor.email,
        age: donor.age,
        city: donor.city,
        bloodType: donor.bloodType,
        createdAt: new Date(),
        phone: donor.phone,
      });
      res.status(200).json("Donor added Successfully");
    } catch (err) {
      res.status(400).end();
    }
  }
}
