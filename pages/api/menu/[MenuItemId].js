import { ObjectId } from "mongodb";
import { connectToDatabase } from "../../../util/mongodb";

// -------------------------------------------
// **  API ROUTE
// -------------------------------------------

export default async function handler(req, res) {
	const { db } = await connectToDatabase();
	const { MenuItemId } = req.query;
	// res.end(`post: ${MenuItemId}`);
	const menuItemObjectId = new ObjectId(`${MenuItemId}`);

	const menuItem = await db
		.collection("menu")
		.find({ _id: menuItemObjectId })
		.toArray();

	if (!MenuItemId === null)
		return res
			.status(500)
			.send("The menu item id are looking for is not found");

	res.json(menuItem);
}
