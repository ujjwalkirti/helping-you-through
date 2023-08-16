import clientPromise from "@/lib/mongodb";
import { Query } from "@/utils/Models";

export default async function handler(req, res) {
  try {
    const client = await clientPromise;
    const db = client.db("test-helping-you-through");
    const collection = db.collection("Query");
    if (req.method === "GET") {
      try {
        const response = await collection.find().toArray();
        //  setestimonials(response);
        return res.status(200).json(response);
      } catch (error) {
        return res.status(500).json(error);
      }
    } else if (req.method === "POST") {
      const { name, AdmissionNo, Email, suggestion } = req.body;
      try {
        const newTestimonial = new Query({
          name,
          AdmissionNo,
          Email,
          suggestion,
        });
        const response = await collection.insertOne(newTestimonial);
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
