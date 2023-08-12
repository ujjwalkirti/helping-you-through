// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import clientPromise from "@/lib/mongodb";
import type { NextApiRequest, NextApiResponse } from "next";

type props = {
  email: string;
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  try {
    const client = await clientPromise;
    const db = client.db("test-helping-you-through");
    req.body;
    const user = await db
      .collection("auth-users")
      .find({ email: req.body.email })
      .sort({ metacritic: -1 })
      .toArray();

    if (user.length === 0) {
      return res
        .status(401)
        .json({ message: "You are not authorised to access the admin panel." });
    } else {
      return res.status(200).json({ message: "Access granted" });
    }
  } catch (e) {
    return res
      .status(500)
      .json({ message: "Sorry something went wrong, please try again." });
  }
}
