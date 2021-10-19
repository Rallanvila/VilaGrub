import MenuItem from "../components/MenuItem/MenuItem";
import { connectToDatabase } from "../util/mongodb";

export const WholeMenuItems = ({ wholeMenu }) => {
	const everything = wholeMenu;
	console.log(wholeMenu);
};

export default WholeMenuItems;

export async function getStaticProps(context) {
	const { db } = await connectToDatabase();
	const wholeMenu = await db.collection("menu").find().toArray();

	return {
		props: {
			wholeMenu: JSON.parse(JSON.stringify(wholeMenu)),
		},
	};
}
