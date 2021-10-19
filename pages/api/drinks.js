import { connectToDatabase } from "../../util/mongodb";

// -------------------------------------------
// **  API ROUTE
// -------------------------------------------

export default async (req, res) => {
	const { db } = await connectToDatabase();

	const drinks = await db
		.collection("menu")
		.find({
			category: { $in: ["hot-coffee", "iced-coffee", "hot-tea", "iced-tea"] },
		})
		.toArray();

	if (!drinks)
		return res
			.status(404)
			.send("The menu item you are looking for is not found");

	res.json(drinks);
};
