import { ObjectId } from "mongodb";
import clientPromise from "../../../lib/mongodb";

// -------------------------------------------
// **  API ROUTE
// -------------------------------------------

export default async (req, res) => {
	//Connects to the database:
	const client = await clientPromise;
	const db = await client.db();
	//Query the database:
	const allItems = await db.collection("menu").find().toArray();
	//Return the Query
	res.json(allItems);
};
