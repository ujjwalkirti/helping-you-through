// pages/api/pyq.ts
import { Papers } from "@/utils/Models";

import clientPromise from "@/lib/mongodb";
export default async function handler(req, res) {
  const client = await clientPromise;
  const db = client.db("test-helping-you-through");
  const collection = db.collection("Pyqs");
  if (req.method === "GET") {
    const { department, semester, subject } = req.query;
    const query = {
      $and: [
        { department: department },
        { semester: parseInt(semester) },
        { subject: subject },
      ],
    };
    console.log(req.query);
    // Find documents that match the query
    const response = await collection.find(query).toArray();
    console.log(response);

    res.setHeader("Content-Type", "application/json");

    // Send the response
    return res.status(200).json(response);
  } else if (req.method === "POST") {
    try {
      const newPaper = new Papers({
        department: req.body.formData.department,
        subject: req.body.formData.subject,
        semester: req.body.formData.semester,
        emailId: req.body.formData.emailId,
        admissionNo: req.body.formData.admissionNo,
        paperUrl: req.body.downloadURL,
      });
      const response = await collection.insertOne(newPaper);
      console.log(req.body);
      console.log("response" + response);
      return res.status(201).json("success", "ok", response);
    } catch (error) {
      console.log(error.message);
      return res.status(500).json(error);
    }
  } else {
    // Handle unsupported methods
    return res.status(405).json({ error: "Method not allowed" });
  }
}
