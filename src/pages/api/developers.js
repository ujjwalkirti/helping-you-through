import clientPromise from "@/lib/mongodb";
import { Developer } from "@/utils/Models";

export default async function handler(req, res) {
    try {
        // const client = await clientPromise;
        // const db = client.db("test-helping-you-through");
        // const collection = db.collection("Developer");
        if (req.method === "GET") {
            try {
                // const response = await collection.find().toArray();
                //  setestimonials(response);
                const response=[{
                    name: "John Doe",
                    image: "",
                    role: "Developer",
                    social: {
                      github: "github",
                      linkedin: "linkedin",
                      twitter: "twitter",
                    },
                    quote: "Code is poetry.",
                },
                {
                    name: "John Doe",
                    image: "",
                    role: "Full Stack Developer",
                    social: {
                      github: "github",
                      linkedin: "linkedin",
                      twitter: "twitter",
                    },
                    quote: "Code is poetry.",
                },
                {
                    name: "John Doe",
                    image: "",
                    role: "Full Stack Developer",
                    social: {
                      github: "github",
                      linkedin: "linkedin",
                      twitter: "twitter",
                    },
                    quote: "Code is poetry.",
                },
                {
                    name: "John Doe",
                    image: "",
                    role: "Full Stack Developer",
                    social: {
                      github: "github",
                      linkedin: "linkedin",
                      twitter: "twitter",
                    },
                    quote: "Code is poetry.",
                },
                {
                    name: "John Doe",
                    image: "",
                    role: "Full Stack Developer",
                    social: {
                      github: "github",
                      linkedin: "linkedin",
                      twitter: "twitter",
                    },
                    quote: "Code is poetry.",
                }
            ]
                return res.status(200).json(response);
            } catch (error) {
                console.log(error.message);
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
