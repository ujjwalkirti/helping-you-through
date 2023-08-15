// pages/api/marketplace.js
import { ProductsModel } from "@/utils/Models";

import clientPromise from "@/lib/mongodb";
export default async function handler(req, res) {
  const client = await clientPromise;
  const db = client.db("test-helping-you-through");
  const collection = db.collection("Products");
  if (req.method === "GET") {
    return res
      .status(200)
      .json({ "Jaldi Waha se Hato": "Tora maai ke chodo hatt behenchod" });
  } else if (req.method === "POST") {
    try {
      const newProduct = new ProductsModel({
        name: req.body.formData.name,
        phoneNo: req.body.formData.phone,
        email: req.body.formData.email,
        product: req.body.formData.product,
        itemName: req.body.formData.itemName,
        price: req.body.formData.price,
        negotiable: req.body.formData.isNegotiable,
        image: req.body.downloadURL,
      });
      const response = await collection.insertOne(newProduct);
      // console.log(req.body);
      // console.log("response"+response);
      return res.status(201).json("success", "ok", response);
    } catch (error) {
      //   console.log(error.message);
      return res.status(500).json(error);
    }
  } else {
    // Handle unsupported methods
    return res.status(405).json({ error: "Method not allowed" });
  }
}
