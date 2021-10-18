import { connectToDatabase } from "../../util/mongodb";

export default async (req, res) => {
	const { db } = await connectToDatabase();

	const data = await db
		.collection("listingsAndReviews")
		.find({})
		.limit(20)
		.toArray();

	res.json(data);
};
