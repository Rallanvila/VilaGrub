import { useRouter } from "next/dist/client/router";
import Head from "next/head";
import { Cart } from "../../components/Cart/Cart";
import { MenuItemDetailsBanner } from "../../components/MenuItemDetails/MenuItemDetailsBanner";
import { MenuItemDetailsDetails } from "../../components/MenuItemDetailsDetails/MenuItemDetailsDetails";
import clientPromise from "../../lib/mongodb";

// -------------------------------------------
// **  COMPONENT
// -------------------------------------------

export default function MenuItemId({ item, data }) {
	const router = useRouter();
	const { id } = router.query;
	return (
		<>
			<Head>
				<title>Menu | {id}</title>
			</Head>
			<MenuItemDetailsBanner />
			<h1>{id + item.title}</h1>
			<MenuItemDetailsDetails />
			<Cart />
		</>
	);
}

// -------------------------------------------
// **  SET STATIC PATH IN ORDER TO PULL FROM DB
// -------------------------------------------

export async function getStaticPaths() {
	const client = await clientPromise;
	const db = await client.db();
	const data = await db.collection("menu").find().toArray();
	const jsonData = JSON.parse(JSON.stringify(data));

	const paths = jsonData.map((item) => ({
		params: { id: item.id },
	}));

	return { paths, fallback: false };
}
// -------------------------------------------
// **  DATABASE CALL
// -------------------------------------------

export async function getStaticProps({ params }) {
	const client = await clientPromise;
	const db = await client.db();

	const res = await fetch(`https:localhost:3000/menu/${params.id}`);
	const data = await res.json();

	return {
		props: { data },
	};
}
