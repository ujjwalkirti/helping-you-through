// pages/api/review.ts
import { Review } from "@/utils/Models"
const reviews = [];
import clientPromise from "@/lib/mongodb";
export default async function handler(req, res) {
  if (req.method === 'GET') {
    return res.status(200).json({ "Heelo": "nitin lki maa ki chut" });
  } else if (req.method === 'POST') {
    try {

      const client = await clientPromise
      const db = client.db("test-helping-you-through")
      const collection = db.collection("Review")
      const newReview = new Review({
        name:req.body.name,
        phoneno:req.body.phone,
        email:req.body.email,
        category:req.body.reviewAbout,
        about:req.body.selected,
        message:req.body.message
      });
     const response=  await collection.insertOne(newReview);
      return res.status(201).json(response);
    } catch (error) {
      console.log(error.message);
      return res.status(500).json(error);
    }

  } else {
    // Handle unsupported methods
    return res.status(405).json({ error: 'Method not allowed' });
  }
}
