import { connectToDatabase } from "../../util/mongodb";

export default async (req, res) => {
	const { db } = await connectToDatabase();

	const desserts = await db
		.collection("menu")
		.find({
			category: { $in: ["milk-shake", "ice-cream", "brownie"] },
		})
		.toArray();

	if (!desserts)
		return res
			.status(404)
			.send("The menu item you are looking for is not found");

	res.json(desserts);
};
