import Head from "next/head";
import { connectToDatabase } from "../util/mongodb";

export default function Home({ drinkMenu }) {
	// console.log(drinkMenu);
	return (
		<div>
			{drinkMenu &&
				drinkMenu.map((item, index) => (
					<div key={index}>
						<h1>{item.title}</h1>
						<h2>{item.category}</h2>
					</div>
				))}
		</div>
	);
}

export async function getServerSideProps(context) {
	const { db } = await connectToDatabase();
	const drinks = await db
		.collection("menu")
		.find({
			category: { $in: ["iced-coffee", "hot-coffee", "hot-tea", "iced-tea"] },
		})
		.toArray();
	const drinkMenu = JSON.parse(JSON.stringify(drinks));

	if (!drinks) {
		return {
			notFound: true,
		};
	}

	return {
		props: { drinkMenu: drinkMenu },
	};
}
