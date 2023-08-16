import { Reply } from "@/utils/Models";
import clientPromise from "@/lib/mongodb";

export default async function handler(req, res) {
  try {
    const client = await clientPromise;
    const db = client.db("test-helping-you-through");
    const collection = db.collection("Reply");

    if (req.method === "GET") {
      try {
        const response = await collection.find().toArray();
        return res.status(200).json(response);
      } catch (error) {
        console.log(error.message);
        return res.status(500).json(error);
      }
    } else if (req.method === "POST") {
      const { reply } = req.body;

      if (!reply) {
        return res.status(400).json({ error: "Reply message is required" });
      }

      try {
        const newReply = new Reply({ reply });
        const response = await collection.insertOne(newReply);
        return res.status(201).json(response.ops[0]);
      } catch (error) {
        console.log(error.message);
        return res.status(500).json(error);
      }
    } else {
      return res.status(405).json({ error: "Method not allowed" });
    }
  } catch (error) {
    return res.status(500).json(error);
  }
}
