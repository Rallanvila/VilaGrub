import Head from "next/head";
import mongoData from "../data/mongoData.json";
import clientPromise from "../lib/mongodb";

const test2 = ({ allItemsJSON }) => {
	return (
		<>
			<Head>
				<title>Test 2</title>
			</Head>
			<h1>hello</h1>
			<h2>world</h2>

			{allItemsJSON.map((m, index) => (
				<p key={index}>{m._id}</p>
			))}
		</>
	);
};

export default test2;

export async function getStaticProps(context) {
	const client = await clientPromise;
	const db = await client.db();

	const allItems = await db.collection("menu").find().toArray();
	const allItemsJSON = JSON.parse(JSON.stringify(allItems));

	return {
		props: { allItemsJSON },
	};
}
