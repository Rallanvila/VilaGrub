import { connectToDatabase } from "../../util/mongodb";

// -------------------------------------------
// **  API ROUTE
// -------------------------------------------

export default async (req, res) => {
	const { db } = await connectToDatabase();

	const food = await db
		.collection("menu")
		.find({
			category: { $in: ["hamburger", "sandwich", "salad", "side"] },
		})
		.toArray();

	if (!food)
		return res
			.status(404)
			.send("The menu item you are looking for is not found");

	res.json(food);
};
