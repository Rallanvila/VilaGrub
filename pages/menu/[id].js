import { ObjectId } from "mongodb";
import { useRouter } from "next/dist/client/router";
import Head from "next/head";
import { Cart } from "../../components/Cart/Cart";
import { MenuItemDetailsBanner } from "../../components/MenuItemDetails/MenuItemDetailsBanner";
import { MenuItemDetailsDetails } from "../../components/MenuItemDetailsDetails/MenuItemDetailsDetails";
import { drinkCategories } from "../../data/drinkCategories";
import clientPromise from "../../lib/mongodb";
import server from "../../config/config";

// -------------------------------------------
// **  DATABASE CALL
// -------------------------------------------

export async function getServerSideProps({ params }) {
	// Creates connection to DB in cloud
	const client = await clientPromise;
	const db = await client.db();
	// Query the DB with what you want to pull
	const route = params.id;
	const menuObjId = await db.collection("menu").find(ObjectId(route)).toArray();
	const allId = await db.collection("menu").find().toArray();
	// Return the data in JSON format to map/destructure.
	return {
		// props: { drinks: route },
		props: {
			drinks: JSON.parse(JSON.stringify(menuObjId))[0],
			allIds: JSON.parse(JSON.stringify(allId)),
		},
	};
}
// // -------------------------------------------
// // **  SET STATIC PATH IN ORDER TO PULL FROM DB
// // -------------------------------------------
// //! DONT TOUCH!!!
// export async function getStaticPaths() {
// 	return { paths: [], fallback: true };
// }
// // -------------------------------------------
// // **  DATABASE CALL
// // -------------------------------------------

// export async function getStaticProps({ params }) {
// 	// Creates connection to DB in cloud
// 	const client = await clientPromise;
// 	const db = await client.db();
// 	// Query the DB with what you want to pull
// 	const route = params.id;
// 	const menuObjId = await db.collection("menu").find(ObjectId(route)).toArray();
// 	const allId = await db.collection("menu").find().toArray();
// 	// Return the data in JSON format to map/destructure.
// 	return {
// 		// props: { drinks: route },
// 		props: {
// 			drinks: JSON.parse(JSON.stringify(menuObjId))[0],
// 			allIds: JSON.parse(JSON.stringify(allId)),
// 		},
// 	};
// }

// -------------------------------------------
// **  COMPONENT
// -------------------------------------------

export default function MenuItemId({ drinks, allIds }) {
	// Creates connection to DB in cloud
	const router = useRouter();
	const { id } = router.query;

	return (
		<>
			<Head>
				<title>Menu | {drinks.title}</title>
			</Head>
			<MenuItemDetailsBanner
				title={drinks.title}
				img={drinks.imageUrl}
				alt={drinks.alt}
			/>
			<MenuItemDetailsDetails
				itemSize={drinks.size}
				addIns={drinks.addIns}
				itemFlavors={drinks.flavors}
				itemSweeteners={drinks.sweeteners}
			/>
			<Cart />
		</>
	);
}
