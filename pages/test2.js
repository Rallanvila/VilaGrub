import MenuItem from "../components/MenuItem/MenuItem";
import { connectToDatabase } from "../util/mongodb";

const DrinksMenuItems = ({ drinks }) => {
	return (
		<div>
			{drinks.map((drink, index) => (
				<MenuItem key={index} item={drink} />
			))}
		</div>
		// <div>
		// 	{drinks.map((item, index) => (
		// 		<MenuItem key={index} item={item} />
		// 	))}
		// </div>
	);
};

export default DrinksMenuItems;

export async function getStaticProps(context) {
	const { db } = await connectToDatabase();
	const drinks = await db
		.collection("menu")
		.find({
			category: { $in: ["hot-coffee", "iced-coffee", "iced-tea", "hot-tea"] },
		})
		.toArray();

	return {
		props: {
			drinks: JSON.parse(JSON.stringify(drinks)),
		},
	};
}
