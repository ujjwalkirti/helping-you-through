import { ProductsModel } from "@/utils/Models";
import clientPromise from "@/lib/mongodb";
function capitalize(input) {
  if (!input.length) return input;
  return input.charAt(0).toUpperCase() + input.slice(1);
}

export default async function handler(req, res) {
  try {
    const client = await clientPromise;
    const db = client.db("test-helping-you-through");
    const collection = db.collection("Products");
    if (req.method === "GET") {
      // let { type } = req.query ? req.query : {type:""};
      let type = req.query.hasOwnProperty("type") ? req.query.type : "blank";
      type = capitalize(type);
      if (type === "Vehicle") {
        const vehiclesData = await collection.find({ product: type }).toArray();
        return res.status(200).json(vehiclesData);
      } else if (type === "Stationary") {
        const stationaryData = await collection
          .find({ product: type })
          .toArray();
        return res.status(200).json(stationaryData);
      } else {
        const data = await collection.find({}).toArray();
        return res.status(200).json(data);
      }
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
  } catch (error) {
    res.status(500).json(error);
  }
}
