import { ObjectId } from "mongodb";
import { useRouter } from "next/dist/client/router";
import Head from "next/head";
import { MenuItemDetailsBanner } from "../../components/MenuItemDetailsBanner";
import { MenuItemDetailsDetails } from "../../components/MenuItemDetailsDetails";
import clientPromise from "../../lib/mongodb";
import { useContext } from "react";
import { CartContext } from "../../lib/context";

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
	// Return the data in JSON format to map/destructure.
	return {
		// props: { drinks: route },
		props: {
			drinks: JSON.parse(JSON.stringify(menuObjId))[0],
		},
	};
}

// -------------------------------------------
// **  COMPONENT
// -------------------------------------------

export default function MenuItemId({ drinks }) {
	// Creates connection to DB in cloud
	const router = useRouter();
	const { id } = router.query;
	const shoppingCart = useContext(CartContext);

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
				title={drinks.title}
				itemSize={drinks.size}
				addIns={drinks.addIns}
				itemFlavors={drinks.flavors}
				itemSweeteners={drinks.sweeteners}
			/>
		</>
	);
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
