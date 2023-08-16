// pages/api/review.ts
import { Review } from "@/utils/Models";
import clientPromise from "@/lib/mongodb";
export default async function handler(req, res) {
  try {
    const client = await clientPromise;
    const db = client.db("test-helping-you-through");
    const collection = db.collection("Review");
    if (req.method === "GET") {
      const { entity } = req.query;
      if (entity) {
        const parts = entity?.split("-");
        const type = parts[0];
        const typeName = parts[1];
        const query = {
          $and: [{ category: type }, { about: typeName }],
        };
        const reviewsData = await collection.find(query).toArray();
        return res.status(200).json(reviewsData);
      } else {
        // Handle the regular GET request
        return res
          .status(200)
          .json({ message: "Received a regular GET request" });
      }
    } else if (req.method === "POST") {
      try {
        const newReview = new Review({
          name: req.body.name,
          phoneno: req.body.phone,
          email: req.body.email,
          category: req.body.reviewAbout,
          about: req.body.selected,
          message: req.body.message,
        });
        const response = await collection.insertOne(newReview);
        return res.status(201).json(response);
      } catch (error) {
        return res.status(500).json(error);
      }
    } else {
      // Handle unsupported methods
      return res.status(405).json({ error: "Method not allowed" });
    }
  } catch (error) {
    res.status(500).json(error);
  }
}
