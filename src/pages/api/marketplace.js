import { Review } from "@/utils/Models"
const reviews = [];
import clientPromise from "@/lib/mongodb";
export default async function handler(req, res) {
    try {
        const client = await clientPromise
        const db = client.db("test-helping-you-through")
        const collection = db.collection("Products")
        if (req.method === 'GET') {
            const { type } = req.query;
            if (type === 'vehicles') {
                // const reviewsData= await collection.find(query).toArray()
                return res.status(200).json({ message: "Recieved a get request for Vehicle" });
            } else if (type === 'stationary') {
                // Handle the regular GET request
                return res.status(200).json({ message: 'Received a  GET request stationary' });
            }
            else {
                
                return res.status(200).json({ message: 'Received a regular GET request' })
            }
        } else if (req.method === 'POST') {
            try {
                const newReview = new Review({
                    name: req.body.name,
                    phoneno: req.body.phone,
                    email: req.body.email,
                    category: req.body.reviewAbout,
                    about: req.body.selected,
                    message: req.body.message
                });
                console.log(newReview)
                const response = await collection.insertOne(newReview);
                return res.status(201).json(response);
            } catch (error) {
                console.log(error.message);
                return res.status(500).json(error);
            }

        } else {
            // Handle unsupported methods
            return res.status(405).json({ error: 'Method not allowed' });
        }
    } catch (error) {
        res.status(500).json(error);
    }

}