import { MongoClient } from "mongodb";

let uri = process.env.MONGODB_URI;
let dbName = process.env.MONGODB_DB;

let cachedClient = null;
let cachedDb = null;

if (!uri) {
	throw new Error(
		"Please define the MONGODB_URI environment variable inside .env.local",
	);
}

if (!dbName) {
	throw new Error(
		"Please define the MONGODB_DB environment variable inside .env.local",
	);
}

export async function connectToDatabase() {
	if (cachedClient && cachedDb) {
		return { client: cachedClient, db: cachedDb };
	}

	const client = await MongoClient.connect(uri, {
		useNewUrlParser: true,
		useUnifiedTopology: true,
	});

	const db = await client.db(dbName);
	//   db2: client.db('database name here') Example if you wanted to add another DB
	//   db3: client.db('database name here') Example if you wanted to add another DB

	cachedClient = client;
	cachedDb = db;

	return { client, db };
}
